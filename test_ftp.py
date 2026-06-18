import ftplib

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
print("Root dirs:")
ftp.dir()
ftp.cwd("public_html")
print("\nPublic HTML dirs:")
ftp.dir()
ftp.quit()
