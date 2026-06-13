const fs = require('fs');
const path = './src/data/fuleda-data.ts';
let content = fs.readFileSync(path, 'utf-8');

// Extract all nowe_2026 paths
const regex = /getAssetPath\("\/images\/fuleda\/nowe_2026\/[^"]+"\)/g;
const allNowe = content.match(regex) || [];

// remove duplicates just in case
const uniqueNowe = [...new Set(allNowe)];

const parterOnly = uniqueNowe.filter(p => p.toLowerCase().includes('parter'));
const pietroOnly = uniqueNowe.filter(p => p.toLowerCase().includes('pietro') || p.toLowerCase().includes('pie_tro'));
const common = uniqueNowe.filter(p => !parterOnly.includes(p) && !pietroOnly.includes(p));

const newParterImages = [...parterOnly, ...common].join(',\n            ');
const newPietroImages = [...pietroOnly, ...common].join(',\n                ');

// Regex to replace the images array in parter and pietro
const parterRegex = /(id:\s*'parter'[\s\S]*?images:\s*\[\n?)[\s\S]*?(\n\s*\])/;
content = content.replace(parterRegex, `$1            ${newParterImages}$2`);

const pietroRegex = /(id:\s*'pietro'[\s\S]*?images:\s*\[\n?)[\s\S]*?(\n\s*\])/;
content = content.replace(pietroRegex, `$1                ${newPietroImages}$2`);

fs.writeFileSync(path, content, 'utf-8');
console.log("Updated fuleda-data.ts!");
