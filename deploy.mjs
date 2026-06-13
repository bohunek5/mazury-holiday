import * as ftp from "basic-ftp"

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "serwer194525.lh.pl",
            user: "serwer194525",
            password: "KochamAntygravity2026$",
            secure: true,
            secureOptions: {
                rejectUnauthorized: false
            }
        })
        console.log("Connected to FTP")
        
        await client.ensureDir("public_html/autoinstalator/serwer194525.lh.pl/wordpress162339")
        console.log("Uploading files from out/...")
        
        // Upload the whole 'out' directory
        await client.uploadFromDir("out")
        
        console.log("Deployment finished successfully!")
    }
    catch(err) {
        console.error("Deployment failed:", err)
    }
    client.close()
}

deploy()
