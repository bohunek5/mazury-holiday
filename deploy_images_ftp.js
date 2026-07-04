const ftp = require("basic-ftp");

async function main() {
    const client = new ftp.Client();
    client.trackProgress(info => {
        if(info.bytes === 0) {
            console.log(`Uploading: ${info.name}`);
        }
    });
    try {
        console.log("Connecting...");
        await client.access({
            host: "serwer194525.lh.pl",
            user: "serwer194525",
            password: "KochamAntygravity2026$",
            secure: false
        });
        console.log("Connected! Ensuring directories...");
        const remoteDir = "public_html/autoinstalator/serwer194525.lh.pl/wordpress162339/images/apartments/stranda_new";
        await client.ensureDir(remoteDir);
        await client.uploadFromDir("out/images/apartments/stranda_new", remoteDir);
        console.log("✅ Image upload completed successfully!");
    }
    catch(err) {
        console.log("❌ Error:", err);
    }
    client.close();
}

main();
