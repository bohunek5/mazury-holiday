<?php
// Simple iCal Proxy to bypass CORS issues
// Usage: ical-proxy.php?url=https://bed-booking.com/...

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: text/calendar; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if (!isset($_GET['url']) || empty($_GET['url'])) {
    http_response_code(400);
    echo "Missing url parameter";
    exit;
}

$url = $_GET['url'];

// Basic validation to ensure we're only fetching from allowed domains
if (strpos($url, 'https://bed-booking.com/') !== 0 && strpos($url, 'https://client37851.idosell.com/') !== 0) {
    http_response_code(403);
    echo "Forbidden: Invalid domain";
    exit;
}

// Fetch the content
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // For local/staging testing if needed
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo "cURL Error: " . curl_error($ch);
} else if ($httpCode !== 200) {
    http_response_code($httpCode);
    echo "HTTP Error: " . $httpCode;
} else {
    echo $response;
}

curl_close($ch);
?>
