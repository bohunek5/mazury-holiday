import os
import ftplib
import time

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_BASE = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
LOCAL_BASE = "/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out/images/apartments/stranda_new"

def create_ftp_dir(ftp, path):
    parts = path.split('/')
    ftp.cwd("/" + REMOTE_BASE)
    for part in parts:
        if not part: continue
        try:
            ftp.cwd(part)
        except ftplib.error_perm:
            ftp.mkd(part)
            ftp.cwd(part)
    ftp.cwd("/" + REMOTE_BASE)

print("Connecting to FTP...")
ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd("/" + REMOTE_BASE)

uploaded_count = 0
for root, _, files in os.walk(LOCAL_BASE):
    for f in files:
        if f == '.DS_Store': continue
        
        local_path = os.path.join(root, f)
        rel_path = os.path.relpath(local_path, LOCAL_BASE)
        remote_path = f"images/apartments/stranda_new/{rel_path}"
        remote_dir = os.path.dirname(remote_path)
        
        create_ftp_dir(ftp, remote_dir)
        
        try:
            remote_size = ftp.size(remote_path)
            local_size = os.path.getsize(local_path)
            if remote_size == local_size:
                continue
        except Exception:
            pass

        print(f"Uploading {remote_path}...")
        retries = 3
        while retries > 0:
            try:
                with open(local_path, 'rb') as file_obj:
                    ftp.storbinary(f"STOR {remote_path}", file_obj)
                break
            except Exception as e:
                print(f"  Retry {remote_path} ({e})")
                retries -= 1
                try:
                    ftp.quit()
                except: pass
                time.sleep(2)
                ftp = ftplib.FTP(FTP_HOST)
                ftp.login(FTP_USER, FTP_PASS)
                ftp.cwd("/" + REMOTE_BASE)
        uploaded_count += 1
        
print(f"✅ Uploaded {uploaded_count} images successfully!")
ftp.quit()
