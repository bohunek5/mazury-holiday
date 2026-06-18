import ftplib

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd("public_html/autoinstalator/serwer194525.lh.pl/wordpress162339")

lines = []
ftp.retrlines('LIST', lines.append)
for line in lines:
    print(line)

ftp.quit()
