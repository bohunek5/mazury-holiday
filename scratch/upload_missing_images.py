import ftplib
import os

def upload_dir(ftp, local_dir, remote_dir):
    try:
        ftp.cwd(remote_dir)
    except ftplib.error_perm:
        try:
            ftp.mkd(remote_dir)
            ftp.cwd(remote_dir)
        except Exception as e:
            print(f'Cannot create {remote_dir}: {e}')
            return

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        if os.path.isfile(local_path):
            if item == '.DS_Store': continue
            with open(local_path, 'rb') as f:
                try:
                    ftp.storbinary(f'STOR {item}', f)
                    print(f'Uploaded: {item}')
                except Exception as e:
                    print(f'Failed {item}: {e}')
        elif os.path.isdir(local_path):
            upload_dir(ftp, local_path, item)
            ftp.cwd('..')

# Dirs to upload
missing_dirs = [
    ('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda/A402', 'public_html/mazury.holiday/images/stranda/A402'),
    ('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda/C403', 'public_html/mazury.holiday/images/stranda/C403'),
]

try:
    ftp = ftplib.FTP('serwer194525.lh.pl')
    ftp.login('serwer194525', 'KochamAntygravity2026$')
    print('Connected.')
    
    for local_dir, remote_dir in missing_dirs:
        print(f'\nUploading {local_dir} -> {remote_dir}')
        # Navigate to parent
        parts = remote_dir.split('/')
        parent = '/'.join(parts[:-1])
        folder = parts[-1]
        ftp.cwd('/')
        ftp.cwd(parent)
        try:
            ftp.mkd(folder)
        except:
            pass
        ftp.cwd(folder)
        for item in os.listdir(local_dir):
            if item == '.DS_Store': continue
            with open(os.path.join(local_dir, item), 'rb') as f:
                ftp.storbinary(f'STOR {item}', f)
                print(f'  -> {item}')
    
    ftp.quit()
    print('Done.')
except Exception as e:
    print(f'Error: {e}')
