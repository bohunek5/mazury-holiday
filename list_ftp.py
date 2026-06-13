import ftplib
import ssl

ftp = ftplib.FTP_TLS('serwer194525.lh.pl')
ftp.login('serwer194525', 'KochamAntygravity2026$')
ftp.prot_p()

print("Contents of public_html/mazury.holiday:")
print(ftp.nlst("public_html/mazury.holiday"))
