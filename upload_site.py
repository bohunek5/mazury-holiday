import os
import ftplib
import ssl

def upload_directory(ftp, local_path, remote_path):
    print(f"Uploading {local_path} to {remote_path}")
    
    # Ensure the remote directory exists
    try:
        ftp.mkd(remote_path)
    except ftplib.error_perm as e:
        # 550 means directory already exists
        if not str(e).startswith('550'):
            print(f"Failed to create directory {remote_path}: {e}")
    
    # Change to the remote directory
    try:
        ftp.cwd(remote_path)
    except Exception as e:
        print(f"Failed to cwd to {remote_path}: {e}")
        return

    # Iterate over files and subdirectories
    for item in os.listdir(local_path):
        local_item_path = os.path.join(local_path, item)
        remote_item_path = f"{remote_path}/{item}"
        
        if os.path.isfile(local_item_path):
            print(f"Uploading file {local_item_path}...")
            with open(local_item_path, 'rb') as f:
                try:
                    ftp.storbinary(f"STOR {item}", f)
                except Exception as e:
                    print(f"Failed to upload {item}: {e}")
        elif os.path.isdir(local_item_path):
            upload_directory(ftp, local_item_path, remote_item_path)
            
            # Go back to parent directory after sub-directory upload
            ftp.cwd(remote_path)

def main():
    server = 'serwer194525.lh.pl'
    user = 'serwer194525'
    password = 'KochamAntygravity2026$'
    local_dir = 'out'
    remote_dir = 'public_html/mazury.holiday'

    try:
        print(f"Connecting to {server}...")
        ftp = ftplib.FTP_TLS(server)
        ftp.login(user, password)
        ftp.prot_p()
        print("✅ Connected!")
        
        # Navigate to root first
        ftp.cwd('/')
        
        upload_directory(ftp, local_dir, remote_dir)
        
        ftp.quit()
        print("✅ Upload completed successfully!")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()
