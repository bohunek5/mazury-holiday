const fs = require('fs');
const content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');
const missing = fs.readFileSync('scratch/missing_apartments.ts.part', 'utf8');

// The file exports `export const strandaApartments: Record<string, StrandaApartment> = { ... }`
// We need to insert `missing` just before the closing `};`

const lastBraceIndex = content.lastIndexOf('};');
if (lastBraceIndex !== -1) {
    const newContent = content.slice(0, lastBraceIndex) + missing + content.slice(lastBraceIndex);
    fs.writeFileSync('src/data/stranda-apartments.ts', newContent);
    console.log("Appended missing apartments");
} else {
    console.log("Could not find closing brace");
}
