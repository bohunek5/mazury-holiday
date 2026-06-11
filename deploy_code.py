import os
import ftplib
import requests

ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/deploy.zip"
FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
HTTP_URL = "https://mazuryholiday.pl/unzip.php"

with open("unzip.php", "w") as f:
    f.write("""<?php
$dir = __DIR__;
$zip = new ZipArchive;
if ($zip->open('deploy.zip') === TRUE) {
    $zip->extractTo($dir);
    $zip->close();
    echo "ok";
} else {
    echo "failed";
}
@unlink('deploy.zip');
@unlink('unzip.php');
?>""")

print("Connecting to FTP...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

print("Uploading unzip.php...")
with open("unzip.php", "rb") as f:
    ftp.storbinary("STOR unzip.php", f)

print("Uploading deploy.zip...")
with open(ZIP_PATH, "rb") as f:
    ftp.storbinary("STOR deploy.zip", f)

ftp.quit()

print("Triggering extraction...")
try:
    r = requests.get(HTTP_URL, timeout=120)
    print(f"Response: {r.text}")
except Exception as e:
    print(f"Error triggering unzip: {e}")

os.remove("unzip.php")
os.remove(ZIP_PATH)
print("Done!")
