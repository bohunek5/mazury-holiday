import ftplib

ftp = ftplib.FTP("serwer194525.lh.pl")
ftp.login("serwer194525", "KochamAntygravity2026$")
print("Available dirs:")
print(ftp.nlst("public_html"))
ftp.quit()
