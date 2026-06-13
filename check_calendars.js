const fs = require('fs');
const files = [
    'src/data/stranda-apartments.ts',
    'src/data/kisajno-data.ts',
    'src/data/fuleda-data.ts',
    'src/data/skorupki-data.ts' // including others just in case
];

let results = [];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?idoBookingId:\s*['"]([^'"]+)['"](?:[\s\S]*?icalUrl:\s*['"]([^'"]+)['"])?/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        results.push({
            file: file.split('/').pop(),
            id: match[1],
            idoBookingId: match[2],
            icalUrl: match[3] || 'MISSING'
        });
    }
}

console.log("| Obiekt | ID Apartamentu/Domku | ID w IdoSell (idoBookingId) | URL iCal (icalUrl) |");
console.log("|---|---|---|---|");
for (const r of results) {
    console.log(`| ${r.file.replace('-data.ts', '').replace('-apartments.ts', '')} | ${r.id} | ${r.idoBookingId} | ${r.icalUrl} |`);
}
