import os
import zipfile
import ftplib
import requests

OUT_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/images.zip"
FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
HTTP_URL = "https://mazuryholiday.pl/unzip_images.php"

print(f"📦 Zipping images to {ZIP_PATH}...")
os.system(f"cd {OUT_DIR} && zip -q -r {ZIP_PATH} images")
print("✅ Zipped.")

print("📝 Creating unzip_images.php...")
with open("unzip_images.php", "w") as f:
    f.write("""<?php
$dir = __DIR__;
$zip = new ZipArchive;
if ($zip->open('images.zip') === TRUE) {
    $zip->extractTo($dir);
    $zip->close();
    echo "ok";
} else {
    echo "failed";
}
@unlink('images.zip');
@unlink('unzip_images.php');
?>""")

print(f"📡 Connecting to FTP: {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

print("📤 Uploading unzip_images.php...")
with open("unzip_images.php", "rb") as f:
    ftp.storbinary("STOR unzip_images.php", f)

print(f"📤 Uploading {ZIP_PATH} (this might take a few minutes)...")
with open(ZIP_PATH, "rb") as f:
    ftp.storbinary("STOR images.zip", f)

ftp.quit()

print(f"🚀 Triggering extraction at {HTTP_URL}...")
try:
    r = requests.get(HTTP_URL, timeout=120)
    print(f"Response ({r.status_code}): {r.text}")
    if r.status_code == 200 and r.text.strip() == "ok":
        print("✅ Images deployment finished successfully!")
    else:
        print("❌ Deployment might have failed.")
except Exception as e:
    print(f"❌ Error triggering unzip: {e}")

# Cleanup
os.remove("unzip_images.php")
os.remove(ZIP_PATH)
