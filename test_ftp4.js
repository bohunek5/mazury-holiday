const ftp = require("basic-ftp");
async function main() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "serwer194525.lh.pl",
            user: "serwer194525",
            password: "KochamAntygravity2026$",
            secure: false
        });
        await client.cd("public_html/mazury.holiday");
        
        const fs = require("fs");
        fs.writeFileSync("test-antigravity.txt", "HELLO FROM ANTIGRAVITY!");
        await client.uploadFrom("test-antigravity.txt", "test-antigravity.txt");
        console.log("Uploaded test file");
    }
    catch(err) {
        console.log("Error:", err);
    }
    client.close();
}
main();
