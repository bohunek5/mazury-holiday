<?php
$url = "https://panel.idobooking.com/calendar_ical.php?type=1&id=138379";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
$data = curl_exec($ch);
if($data === false) {
    echo "Curl error: " . curl_error($ch);
} else {
    echo "HTTP CODE: " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . "\n";
    echo substr($data, 0, 100);
}
curl_close($ch);
?>