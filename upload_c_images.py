import os
import ftplib

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

def ensure_dir(path):
    parts = path.split('/')
    for i in range(len(parts)):
        d = '/'.join(parts[:i+1])
        try:
            ftp.cwd("/" + REMOTE_DIR + "/" + d)
        except:
            ftp.mkd("/" + REMOTE_DIR + "/" + d)
    ftp.cwd("/" + REMOTE_DIR)

base_dir = "out/images/stranda"
for root, dirs, files in os.walk(base_dir):
    if "C3" in root or "C4" in root or "C2" in root or "C1" in root: # any C apartment
        for f in files:
            local_path = os.path.join(root, f)
            remote_path = local_path.replace("out/", "")
            
            ensure_dir(os.path.dirname(remote_path))
            print(f"Uploading {local_path} to {remote_path}")
            with open(local_path, "rb") as file_obj:
                ftp.storbinary(f"STOR {remote_path}", file_obj)

ftp.quit()
print("Done uploading C images!")
