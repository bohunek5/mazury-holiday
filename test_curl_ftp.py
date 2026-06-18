import ftplib

php_script = """<?php
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
    echo "HTTP CODE: " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . "\\n";
    echo substr($data, 0, 100);
}
curl_close($ch);
?>"""

with open("test_curl.php", "w") as f:
    f.write(php_script)

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)
with open("test_curl.php", "rb") as f:
    ftp.storbinary("STOR test_curl.php", f)
ftp.quit()
