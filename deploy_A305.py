import ftplib
import os

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339/images/stranda/A305"
LOCAL_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda/A305"

print(f"📡 Connecting to FTP: {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)

# Create directory if not exists
try:
    ftp.cwd(REMOTE_DIR)
except:
    # Need to create it recursively or simply jump to stranda and MKD A305
    ftp.cwd("public_html/autoinstalator/serwer194525.lh.pl/wordpress162339/images/stranda")
    try:
        ftp.mkd("A305")
    except:
        pass
    ftp.cwd("A305")

print("📤 Uploading A305 images...")
for file in os.listdir(LOCAL_DIR):
    if file.endswith(".webp"):
        local_path = os.path.join(LOCAL_DIR, file)
        print(f" -> {file}")
        with open(local_path, "rb") as f:
            ftp.storbinary(f"STOR {file}", f)

ftp.quit()
print("✅ A305 Images deployment finished!")
