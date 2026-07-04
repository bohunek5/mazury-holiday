import ftplib
ftp = ftplib.FTP('serwer194525.lh.pl')
ftp.login('serwer194525', 'KochamAntygravity2026$')
print(ftp.nlst('public_html/mazury.holiday'))
print("----")
print(ftp.nlst('public_html/autoinstalator/serwer194525.lh.pl/wordpress162339'))
ftp.quit()
