import ftplib
FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"
REMOTE_BASE = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd(REMOTE_BASE)

try:
    ftp.delete("deploy_lhpl.zip")
    print("Deleted deploy_lhpl.zip")
except Exception as e:
    print(e)
ftp.quit()
