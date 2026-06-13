const fs = require('fs');
const path = require('path');

const files = [
  'stranda-apartments.ts',
  'kisajno-data.ts',
  'fuleda-data.ts',
  'skorupki-data.ts',
  'pokoje-fuleda-data.ts'
];

files.forEach(file => {
  const filePath = path.join('src', 'data', file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`\n--- ${file} ---`);
  
  // A simple regex to find id, idoBookingId
  const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?(?:idoBookingId:\s*['"]([^'"]+)['"])?/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[2]) {
      console.log(`${match[1].padEnd(10)} -> IDO: ${match[2]}`);
    }
  }
});
