import ftplib

ftp = ftplib.FTP("serwer194525.lh.pl")
ftp.login("serwer194525", "KochamAntygravity2026$")

dirs_to_check = [
    "public_html/mazury.holiday",
    "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339"
]

for d in dirs_to_check:
    print(f"--- {d} ---")
    try:
        items = ftp.nlst(d)
        print("Contains:", [i.split('/')[-1] for i in items if i.endswith('.html') or i.endswith('.php')])
    except Exception as e:
        print("Error:", e)

ftp.quit()
