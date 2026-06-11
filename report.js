const fs = require('fs');

const file = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// extract the objects
let match;
let regex = /'([a-zA-Z0-9-]+)':\s*\{[^}]*title:\s*["']([^"']+)["'][^}]*idoBookingId:\s*['"](\d+)['"]/gs;

console.log("| Tytuł w kodzie | ID IdoBooking |");
console.log("| --- | --- |");

while ((match = regex.exec(file)) !== null) {
    console.log(`| ${match[2]} | ${match[3]} |`);
}
