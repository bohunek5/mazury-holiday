import ftplib
import os

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd("public_html")

# Find all directories in public_html
dirs = []
def add_dir(line):
    parts = line.split()
    if line.startswith('d') and parts[-1] not in ('.', '..'):
        dirs.append(parts[-1])

ftp.retrlines('LIST', add_dir)

with open("unique_probe.txt", "w") as f:
    f.write("PROBE")

for d in dirs:
    try:
        ftp.cwd(d)
        with open("unique_probe.txt", "rb") as f:
            ftp.storbinary(f"STOR unique_probe.txt", f)
            print(f"Uploaded to {d}")
        ftp.cwd("..")
    except Exception as e:
        print(f"Skipping {d}: {e}")

ftp.quit()
