<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody === false ? '' : $rawBody, true);
if (!is_array($payload)) {
    respond(400, ['ok' => false, 'error' => 'invalid_json']);
}

$fromValue = is_string($payload['from'] ?? null) ? $payload['from'] : '';
$toValue = is_string($payload['to'] ?? null) ? $payload['to'] : '';
$requestedIds = is_array($payload['ids'] ?? null) ? $payload['ids'] : [];

$from = DateTimeImmutable::createFromFormat('!Y-m-d', $fromValue);
$fromErrors = DateTimeImmutable::getLastErrors();
$fromValid = $from !== false && ($fromErrors === false || ($fromErrors['warning_count'] === 0 && $fromErrors['error_count'] === 0));
$to = DateTimeImmutable::createFromFormat('!Y-m-d', $toValue);
$toErrors = DateTimeImmutable::getLastErrors();
$toValid = $to !== false && ($toErrors === false || ($toErrors['warning_count'] === 0 && $toErrors['error_count'] === 0));
if (!$fromValid || !$toValid || $from->format('Y-m-d') !== $fromValue || $to->format('Y-m-d') !== $toValue) {
    respond(400, ['ok' => false, 'error' => 'invalid_dates']);
}

$today = new DateTimeImmutable('today');
$nights = (int) $from->diff($to)->format('%r%a');
if ($from < $today || $nights < 1 || $nights > 28) {
    respond(400, ['ok' => false, 'error' => 'date_range_not_allowed']);
}

$allowedIds = array_flip([
    '1', '2', '10', '12', '13', '14', '15', '17', '18', '19', '22', '23', '24', '25',
    '26', '27', '28', '30', '32', '38', '39', '40', '41', '42', '43', '44', '45', '46',
    '47', '48', '49', '52',
]);
$ids = [];
foreach ($requestedIds as $requestedId) {
    $id = (string) $requestedId;
    if (isset($allowedIds[$id])) {
        $ids[$id] = $id;
    }
}
$ids = array_values($ids);
if ($ids === [] || count($ids) > 40) {
    respond(400, ['ok' => false, 'error' => 'invalid_object_ids']);
}

function calendarRequestBody(string $month, string $id): string
{
    return (string) json_encode([
        'beginDate' => $month,
        'objectId' => (int) $id,
        'promotionId' => 0,
    ], JSON_UNESCAPED_SLASHES);
}

function fetchCalendars(array $ids, string $month): array
{
    $url = 'https://client37851.idobooking.com/book-now/?module=calendar';
    $responses = [];

    if (function_exists('curl_multi_init')) {
        $multi = curl_multi_init();
        $handles = [];
        foreach ($ids as $id) {
            $handle = curl_init($url);
            curl_setopt_array($handle, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => calendarRequestBody($month, $id),
                CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
                CURLOPT_CONNECTTIMEOUT => 4,
                CURLOPT_TIMEOUT => 9,
                CURLOPT_USERAGENT => 'MazuryHoliday-Availability/1.0',
            ]);
            curl_multi_add_handle($multi, $handle);
            $handles[$id] = $handle;
        }

        do {
            $status = curl_multi_exec($multi, $running);
            if ($running > 0) {
                curl_multi_select($multi, 1.0);
            }
        } while ($running > 0 && $status === CURLM_OK);

        foreach ($handles as $id => $handle) {
            $body = curl_multi_getcontent($handle);
            $httpCode = (int) curl_getinfo($handle, CURLINFO_HTTP_CODE);
            $responses[$id] = $httpCode === 200 && is_string($body) ? json_decode($body, true) : null;
            curl_multi_remove_handle($multi, $handle);
            curl_close($handle);
        }
        curl_multi_close($multi);
        return $responses;
    }

    foreach ($ids as $id) {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/json\r\nAccept: application/json\r\nUser-Agent: MazuryHoliday-Availability/1.0\r\n",
                'content' => calendarRequestBody($month, $id),
                'timeout' => 9,
                'ignore_errors' => true,
            ],
        ]);
        $body = @file_get_contents($url, false, $context);
        $responses[$id] = is_string($body) ? json_decode($body, true) : null;
    }
    return $responses;
}

function dateKey(DateTimeImmutable $date): string
{
    return $date->format('m-d-Y');
}

function checkRange(array $events, DateTimeImmutable $from, DateTimeImmutable $to, int $nights): array
{
    $arrival = $events[dateKey($from)] ?? null;
    $departure = $events[dateKey($to)] ?? null;
    if (!is_array($arrival) || !is_array($departure)) {
        return [false, 'calendar_data_missing'];
    }
    if (($arrival['status'] ?? 'disabled') !== 'simple' || !($arrival['canstart'] ?? false)) {
        return [false, 'arrival_unavailable'];
    }

    for ($day = $from; $day < $to; $day = $day->modify('+1 day')) {
        $event = $events[dateKey($day)] ?? null;
        if (!is_array($event) || ($event['status'] ?? 'disabled') !== 'simple') {
            return [false, 'occupied'];
        }
    }
    if (!($departure['canend'] ?? false)) {
        return [false, 'departure_unavailable'];
    }

    $minimum = isset($arrival['minLength']) ? (int) $arrival['minLength'] : 1;
    $maximum = isset($arrival['maxLength']) ? (int) $arrival['maxLength'] : 28;
    $lengthType = (string) ($arrival['lengthType'] ?? 'minimal');
    if ($lengthType === 'exact' && $nights !== $minimum) {
        return [false, 'exact_length_required'];
    }
    if ($lengthType === 'range' && $minimum > 0 && $nights % $minimum !== 0) {
        return [false, 'length_multiple_required'];
    }
    if ($lengthType !== 'exact' && $nights < $minimum) {
        return [false, 'minimum_stay'];
    }
    if ($maximum > 0 && $nights > $maximum) {
        return [false, 'maximum_stay'];
    }
    return [true, 'available'];
}

$calendarResponses = fetchCalendars($ids, $from->format('Y-m'));
$results = [];
$successfulCalendars = 0;
foreach ($ids as $id) {
    $calendar = $calendarResponses[$id] ?? null;
    $events = is_array($calendar) && ($calendar['status'] ?? '') === 'OK'
        ? ($calendar['data']['eventdays'] ?? null)
        : null;
    if (!is_array($events)) {
        $results[] = ['id' => $id, 'available' => false, 'reason' => 'calendar_error'];
        continue;
    }
    $successfulCalendars++;
    [$available, $reason] = checkRange($events, $from, $to, $nights);
    $results[] = ['id' => $id, 'available' => $available, 'reason' => $reason];
}

if ($successfulCalendars === 0) {
    respond(502, ['ok' => false, 'error' => 'idobooking_unavailable']);
}

respond(200, [
    'ok' => true,
    'from' => $fromValue,
    'to' => $toValue,
    'nights' => $nights,
    'results' => $results,
]);
