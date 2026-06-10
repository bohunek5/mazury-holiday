import os
import zipfile
import ftplib
import requests

OUT_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/deploy_lhpl.zip"
FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
HTTP_URL = "https://mazuryholiday.pl/unzip.php"

print(f"📦 Zipping {OUT_DIR} to {ZIP_PATH}...")
with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(OUT_DIR):
        if '/images' in root or '/icons' in root:
            continue
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, OUT_DIR)
            zipf.write(file_path, arcname)

print("📝 Creating unzip.php...")
with open("unzip.php", "w") as f:
    f.write("""<?php
$dir = __DIR__;
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
);
foreach ($files as $fileinfo) {
    if ($fileinfo->getFilename() === 'unzip.php' || $fileinfo->getFilename() === 'deploy_lhpl.zip') continue;
    
    // Protect images and icons from being deleted
    $path = $fileinfo->getRealPath();
    if (strpos($path, $dir . DIRECTORY_SEPARATOR . 'images') === 0) continue;
    if (strpos($path, $dir . DIRECTORY_SEPARATOR . 'icons') === 0) continue;
    
    $todo = ($fileinfo->isDir() ? 'rmdir' : 'unlink');
    @$todo($path);
}

$zip = new ZipArchive;
if ($zip->open('deploy_lhpl.zip') === TRUE) {
    $zip->extractTo($dir);
    $zip->close();
    echo "ok";
} else {
    echo "failed";
}
@unlink('deploy_lhpl.zip');
@unlink('unzip.php');
?>""")

print(f"📡 Connecting to FTP: {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

print("📤 Uploading unzip.php...")
with open("unzip.php", "rb") as f:
    ftp.storbinary("STOR unzip.php", f)

print(f"📤 Uploading {ZIP_PATH}...")
with open(ZIP_PATH, "rb") as f:
    ftp.storbinary("STOR deploy_lhpl.zip", f)

ftp.quit()

print(f"🚀 Triggering extraction at {HTTP_URL}...")
try:
    r = requests.get(HTTP_URL, timeout=120)
    print(f"Response ({r.status_code}): {r.text}")
    if r.status_code == 200 and r.text.strip() == "ok":
        print("✅ Deployment finished successfully!")
    else:
        print("❌ Deployment might have failed.")
except Exception as e:
    print(f"❌ Error triggering unzip: {e}")

# Cleanup
os.remove("unzip.php")
os.remove(ZIP_PATH)
