import ftplib

def main():
    server = 'serwer194525.lh.pl'
    user = 'serwer194525'
    password = 'KochamAntygravity2026$'

    try:
        ftp = ftplib.FTP_TLS(server)
        ftp.login(user, password)
        ftp.prot_p()
        print("Connected!")
        print("Root dir:", ftp.nlst())
        try:
            print("public_html:", ftp.nlst("public_html"))
        except Exception as e:
            print("public_html error:", e)
        ftp.quit()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
