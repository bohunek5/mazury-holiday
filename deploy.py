import ftplib
import os
import sys
import ssl

class MyFTP_TLS(ftplib.FTP_TLS):
    """Explicit FTPS, with shared TLS session"""
    def ntransfercmd(self, cmd, rest=None):
        conn, size = ftplib.FTP.ntransfercmd(self, cmd, rest)
        if self._prot_p:
            conn = self.context.wrap_socket(conn,
                                            server_hostname=self.host,
                                            session=self.sock.session)
        return conn, size

FTP_HOST = 'serwer194525.lh.pl'
FTP_USER = 'serwer194525'
FTP_PASS = 'KochamAntygravity2026$'
REMOTE_DIR = 'public_html/mazury.holiday'
LOCAL_DIR = 'out'

def upload_dir(ftp, local_path, remote_path):
    print(f"Uploading {local_path} to {remote_path}")
    try:
        ftp.mkd(remote_path)
    except ftplib.error_perm:
        pass # Directory likely already exists

    ftp.cwd(remote_path)
    
    for item in os.listdir(local_path):
        if item in ['.DS_Store']:
            continue
            
        local_item = os.path.join(local_path, item)
        if os.path.isfile(local_item):
            print(f"Uploading file: {item}")
            with open(local_item, 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
        elif os.path.isdir(local_item):
            upload_dir(ftp, local_item, item)
            ftp.cwd('..') # Go back up

print("Connecting to FTP...")
ftp = MyFTP_TLS(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.prot_p()

# Check if target directory exists
ftp.cwd('/')
try:
    ftp.cwd(REMOTE_DIR)
except ftplib.error_perm:
    print(f"Error: Target directory {REMOTE_DIR} does not exist.")
    sys.exit(1)

# Upload the 'out' directory contents to REMOTE_DIR
print("Starting upload...")
# Let's go to root of remote
ftp.cwd('/')
ftp.cwd(REMOTE_DIR)

# Upload all files and folders from 'out' to current remote dir
for item in os.listdir(LOCAL_DIR):
    if item in ['.DS_Store']:
        continue
    
    local_item = os.path.join(LOCAL_DIR, item)
    if os.path.isfile(local_item):
        print(f"Uploading root file: {item}")
        with open(local_item, 'rb') as f:
            ftp.storbinary(f'STOR {item}', f)
    elif os.path.isdir(local_item):
        upload_dir(ftp, local_item, item)
        ftp.cwd('/')
        ftp.cwd(REMOTE_DIR)

ftp.quit()
print("Upload complete!")
