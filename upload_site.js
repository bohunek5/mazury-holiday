const ftp = require("basic-ftp");
const path = require("path");

async function main() {
    const client = new ftp.Client();
    // track progress
    client.trackProgress(info => {
        console.log(`File: ${info.name} | bytes: ${info.bytes} / ${info.bytesOverall}`);
    });
    
    try {
        console.log("Connecting...");
        await client.access({
            host: "serwer194525.lh.pl",
            user: "serwer194525",
            password: "KochamAntygravity2026$",
            secure: false
        });
        console.log("Connected!");

        console.log("Uploading out/ to public_html/mazury.holiday...");
        await client.ensureDir("public_html/mazury.holiday");
        await client.uploadFromDir("out");
        
        console.log("✅ Upload completed successfully!");
    }
    catch(err) {
        console.log("❌ Error:", err);
    }
    client.close();
}

main();
