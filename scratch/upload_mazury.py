import ftplib
import os

local_dir = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/out'
remote_dir = 'public_html/mazury.holiday'

def upload_dir(ftp, local_dir, remote_dir):
    try:
        ftp.cwd(remote_dir)
    except ftplib.error_perm:
        try:
            ftp.mkd(remote_dir)
            ftp.cwd(remote_dir)
        except Exception as e:
            print(f'Cannot create or access remote dir {remote_dir}: {e}')
            return

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            if item == '.DS_Store': continue
            with open(local_path, 'rb') as f:
                try:
                    ftp.storbinary(f'STOR {item}', f)
                    print(f'Uploaded: {local_path} -> {item}')
                except Exception as e:
                    print(f'Failed to upload {item}: {e}')
        elif os.path.isdir(local_path):
            if item in ['.git', 'node_modules', '.next']: continue
            upload_dir(ftp, local_path, item)
            ftp.cwd('..')

try:
    ftp = ftplib.FTP('serwer194525.lh.pl')
    ftp.login('serwer194525', 'KochamAntygravity2026$')
    
    print('Connected. Starting upload...')
    upload_dir(ftp, local_dir, remote_dir)
    
    ftp.quit()
    print('Upload completed successfully.')
except Exception as e:
    print(f'Error: {e}')
