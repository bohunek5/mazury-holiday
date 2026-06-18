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
        const list = await client.list();
        console.log("mazury.holiday contents:");
        list.slice(0, 10).forEach(f => console.log(f.name, f.type, f.date));
        
        // Also check if there's a mazuryholiday.pl directory
        await client.cd("/public_html");
        const allList = await client.list();
        const mz = allList.filter(f => f.name.includes("mazury"));
        console.log("Folders with mazury in name:");
        mz.forEach(f => console.log(f.name));
    }
    catch(err) {
        console.log("Error:", err);
    }
    client.close();
}
main();
