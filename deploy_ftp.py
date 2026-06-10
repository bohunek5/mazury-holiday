import ftplib
import os
import time

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "Piaskowa11510$$$"
REMOTE_DIR = "public_html/mazury.holiday"
LOCAL_DIR = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out"

print(f"📡 Connecting to FTP: {FTP_HOST}...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
print("✅ Connected!")

def ensure_dir(ftp, path):
    parts = path.strip('/').split('/')
    for i in range(len(parts)):
        sub_path = '/'.join(parts[:i+1])
        try:
            ftp.cwd('/' + sub_path)
        except ftplib.error_perm:
            try:
                ftp.mkd('/' + sub_path)
            except Exception as e:
                pass
    ftp.cwd('/')

print(f"📁 Creating remote directory {REMOTE_DIR}...")
ensure_dir(ftp, REMOTE_DIR)
ftp.cwd('/' + REMOTE_DIR)

print(f"📤 Uploading files from {LOCAL_DIR}...")

total_files = sum([len(files) for r, d, files in os.walk(LOCAL_DIR)])
uploaded_files = 0

for root, dirs, files in os.walk(LOCAL_DIR):
    rel_path = os.path.relpath(root, LOCAL_DIR)
    if rel_path == ".":
        rel_path = ""
    
    remote_path = os.path.join('/' + REMOTE_DIR, rel_path).replace("\\", "/")
    ensure_dir(ftp, remote_path[1:]) # Ensure dir exists
    ftp.cwd(remote_path)
    
    for file in files:
        local_file = os.path.join(root, file)
        uploaded_files += 1
        
        # Determine if text or binary
        ext = os.path.splitext(file)[1].lower()
        if ext in ['.html', '.css', '.js', '.txt', '.json', '.xml', '.svg']:
            # ASCII mode
            with open(local_file, 'rb') as f:
                ftp.storbinary(f'STOR {file}', f)
        else:
            # Binary mode
            with open(local_file, 'rb') as f:
                ftp.storbinary(f'STOR {file}', f)
                
        if uploaded_files % 100 == 0:
            print(f"  -> Uploaded {uploaded_files}/{total_files} files...")

ftp.quit()
print("✅ Deployment via FTP finished successfully!")
