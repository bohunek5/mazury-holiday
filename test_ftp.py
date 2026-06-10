import ftplib
try:
    ftp = ftplib.FTP('serwer194525.lh.pl')
    ftp.login('serwer194525', 'Piaskowa11510$$$')
    print('✅ Connected!')
    ftp.cwd('public_html/autoinstalator/serwer194525.lh.pl/wordpress162339')
    ftp.retrlines('LIST')
    ftp.quit()
except Exception as e:
    print('Error:', e)
