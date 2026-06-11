const fs = require('fs');
const content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');
const lines = content.split('\n');

const mapped = [];
let currentTitle = '';
for(let line of lines) {
    let titleMatch = line.match(/title:\s*["']([^"']+)["']/);
    if(titleMatch) currentTitle = titleMatch[1];
    
    let idMatch = line.match(/idoBookingId:\s*['"](\d+)['"]/);
    if(idMatch && currentTitle) {
        mapped.push({ id: parseInt(idMatch[1]), title: currentTitle });
        currentTitle = '';
    }
}

mapped.sort((a,b) => a.id - b.id);
console.log("| ID IdoBooking | Nazwa Apartamentu w naszym kodzie (mazuryholiday.pl) |");
console.log("|---|---|");
for(let m of mapped) {
    console.log(`| ${m.id} | ${m.title} |`);
}
