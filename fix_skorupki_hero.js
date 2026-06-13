const fs = require('fs');
const files = [
  'src/data/cottages-data.ts',
  'src/components/CategoryLinks.tsx',
  'src/components/Apartments.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/images\/skorupki\/skorupki_1\.webp/g, '/images/skorupki/nowe_2026/domek_przod_S1_1.webp');
  fs.writeFileSync(file, content);
});
