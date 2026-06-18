const ftp = require("basic-ftp");

async function main() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "serwer194525.lh.pl",
            user: "serwer194525",
            password: "KochamAntygravity2026$",
            secure: true
        });
        console.log("Connected");
        console.log("Root directory:");
        console.log(await client.list());
        
        console.log("public_html directory:");
        console.log(await client.list("public_html"));
    }
    catch(err) {
        console.log(err);
    }
    client.close();
}

main();
