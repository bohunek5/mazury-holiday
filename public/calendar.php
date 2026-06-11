<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/calendar");
header("Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

$url = isset($_GET['url']) ? $_GET['url'] : '';

if (empty($url)) {
    http_response_code(400);
    echo "Missing url parameter";
    exit;
}

// Basic validation
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    echo "Invalid url parameter";
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$data = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code != 200 || $data === false) {
    http_response_code(500);
    echo "Failed to fetch calendar";
    exit;
}

echo $data;
?>
