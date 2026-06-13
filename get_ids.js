const fs = require('fs');
const content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf-8');
const regex = /'([^']+)':\s*\{\s*id:\s*'([^']+)'[\s\S]*?idoBookingId:\s*'(\d+)'/g;
let match;
console.log("Key | ID | Booking ID");
while ((match = regex.exec(content)) !== null) {
  console.log(`${match[1]} | ${match[2]} | ${match[3]}`);
}
