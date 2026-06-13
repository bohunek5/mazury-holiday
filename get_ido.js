const fs = require('fs');

const files = [
  'src/data/stranda-apartments.ts',
  'src/data/kisajno-data.ts',
  'src/data/fuleda-data.ts',
  'src/data/skorupki-data.ts',
  'src/data/mikolajki-data.ts',
  'src/data/cottages-data.ts',
  'src/data/pokoje-fuleda-data.ts'
];

let markdownTable = '| Plik | Obiekt (ID/Tytuł) | idoBookingId | icalUrl |\n| --- | --- | --- | --- |\n';

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  
  // Extracting basic blocks matching id, title, idoBookingId, icalUrl using regex
  // This is a naive parsing since evaluating TS is harder here.
  
  const blocks = content.split(/id:\s*['"]/g).slice(1);
  blocks.forEach(block => {
    const idMatch = block.match(/^([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    const idoMatch = block.match(/idoBookingId:\s*['"]([^'"]+)['"]/);
    const icalMatch = block.match(/icalUrl:\s*['"]([^'"]+)['"]/);
    
    if (idMatch && idoMatch) {
      const id = idMatch[1];
      const title = titleMatch ? titleMatch[1] : id;
      const idoBookingId = idoMatch[1];
      const icalUrl = icalMatch ? icalMatch[1] : 'BRAK';
      markdownTable += `| ${file.replace('src/data/', '')} | **${id}** (${title}) | ${idoBookingId} | ${icalUrl} |\n`;
    }
  });
});

fs.writeFileSync('ido_table.md', markdownTable);
console.log("Written to ido_table.md");
