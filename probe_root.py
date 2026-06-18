import ftplib
import os

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd("public_html")

with open("unique_probe_root.txt", "w") as f:
    f.write("PROBE_ROOT")

with open("unique_probe_root.txt", "rb") as f:
    ftp.storbinary("STOR unique_probe_root.txt", f)

ftp.quit()
