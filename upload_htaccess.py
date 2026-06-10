import ftplib
ftp = ftplib.FTP('serwer194525.lh.pl')
ftp.login('serwer194525', 'Piaskowa11510$$$')
ftp.cwd('public_html/autoinstalator/serwer194525.lh.pl/wordpress162339')
with open('.htaccess', 'rb') as f:
    ftp.storbinary('STOR .htaccess', f)
ftp.quit()
print('Uploaded .htaccess')
