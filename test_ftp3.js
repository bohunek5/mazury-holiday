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
        await client.cd("public_html/mazury.holiday/pokoje");
        const list = await client.list();
        console.log("pokoje contents:");
        list.forEach(f => console.log(f.name, f.type, f.date));
        
        await client.cd("fuleda");
        const list2 = await client.list();
        console.log("pokoje/fuleda contents:");
        list2.forEach(f => console.log(f.name, f.type, f.date));
        
        await client.cd("../../apartamenty/fuleda");
        const list3 = await client.list();
        console.log("apartamenty/fuleda contents:");
        list3.forEach(f => console.log(f.name, f.type, f.date));
    }
    catch(err) {
        console.log("Error:", err);
    }
    client.close();
}
main();
