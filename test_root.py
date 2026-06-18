import ftplib
import requests

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_DIR = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_DIR)

# Upload a test file
with open("probe_root.txt", "w") as f:
    f.write("ROOT_FOUND")

with open("probe_root.txt", "rb") as f:
    ftp.storbinary("STOR probe_root.txt", f)
ftp.quit()

# HTTP GET
r = requests.get("https://mazuryholiday.pl/probe_root.txt", timeout=10)
print(f"Status: {r.status_code}, Body: {r.text}")
