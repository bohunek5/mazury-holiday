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
        console.log("Connected!");
        const list = await client.list();
        console.log("Root directory contents:");
        list.forEach(f => console.log(f.name, f.type));
        
        await client.cd("public_html");
        const phList = await client.list();
        console.log("\npublic_html contents:");
        phList.forEach(f => console.log(f.name, f.type));
    }
    catch(err) {
        console.log("Error:", err);
    }
    client.close();
}
main();
