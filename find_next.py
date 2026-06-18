import ftplib

FTP_HOST = "serwer194525.lh.pl"
FTP_USER = "serwer194525"
FTP_PASS = "KochamAntygravity2026$"

ftp = ftplib.FTP(FTP_HOST)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd("public_html")

def find_dir(path, target, depth=0):
    if depth > 3: return
    try:
        lines = []
        ftp.retrlines('LIST ' + path, lines.append)
        for line in lines:
            parts = line.split()
            name = parts[-1]
            if name in ('.', '..'): continue
            is_dir = line.startswith('d')
            if is_dir and name == target:
                print(f"FOUND: {path}/{name}")
            elif is_dir:
                find_dir(f"{path}/{name}", target, depth + 1)
    except Exception as e:
        pass

find_dir(".", "_next")
ftp.quit()
