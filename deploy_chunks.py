import os
import zipfile
import ftplib
import requests

OUT_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"
ZIP_PATH = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/deploy_images.zip"
FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
HTTP_URL = "https://mazuryholiday.pl/chunk_receiver.php"
SECRET = "k0ch4m-4ntygravity"

print(f"📦 Zipping {OUT_DIR}/images/apartments/stranda_new to {ZIP_PATH}...")
with zipfile.ZipFile(ZIP_PATH, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(OUT_DIR + "/images/apartments/stranda_new"):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, OUT_DIR)
            zipf.write(file_path, arcname)

print("📡 Uploading chunk_receiver.php via FTP...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)
with open("chunk_receiver.php", "rb") as f:
    ftp.storbinary("STOR chunk_receiver.php", f)
ftp.quit()

print("🧹 Clearing old zip on server...")
requests.post(HTTP_URL, data={'secret': SECRET, 'action': 'clear'})

file_size = os.path.getsize(ZIP_PATH)
chunk_size = 10 * 1024 * 1024 # 10MB
total_chunks = (file_size + chunk_size - 1) // chunk_size

print(f"📤 Uploading {total_chunks} chunks ({file_size/1024/1024:.1f} MB)...")
with open(ZIP_PATH, 'rb') as f:
    for i in range(total_chunks):
        chunk_data = f.read(chunk_size)
        print(f"  -> chunk {i+1}/{total_chunks}...")
        
        retries = 3
        while retries > 0:
            try:
                resp = requests.post(
                    HTTP_URL,
                    data={'secret': SECRET, 'action': 'upload'},
                    files={'chunk': ('chunk.dat', chunk_data, 'application/octet-stream')},
                    timeout=120
                )
                if resp.status_code == 200 and resp.text.strip() == "ok":
                    break
                print(f"     ⚠️ {resp.status_code}: {resp.text[:50]}")
            except Exception as e:
                print(f"     ⚠️ {e}")
            retries -= 1
        if retries == 0:
            print("❌ Upload failed!")
            exit(1)

print("🚀 Triggering extraction...")
resp = requests.post(HTTP_URL, data={'secret': SECRET, 'action': 'extract'}, timeout=300)
print(f"Response: {resp.text}")
if resp.status_code == 200 and "ok" in resp.text:
    print("✅ Deployment finished successfully!")
else:
    print("❌ Extraction failed.")
    
# Cleanup
requests.post(HTTP_URL, data={'secret': SECRET, 'action': 'clear'})
os.remove("chunk_receiver.php")
os.remove(ZIP_PATH)
