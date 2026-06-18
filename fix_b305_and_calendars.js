const fs = require('fs');
const path = require('path');

// 1. Fix B305 images
const b305Dir = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images/stranda/B305';
const nowe2026Dir = path.join(b305Dir, 'nowe_2026');

let b305Images = [];
b305Images.push(`getAssetPath("/images/stranda/B305/hero_1.webp")`);

const newFiles = fs.readdirSync(b305Dir).filter(f => f.startsWith('new_') && f.endsWith('.webp')).sort((a,b) => {
    const na = parseInt(a.match(/\d+/)[0]);
    const nb = parseInt(b.match(/\d+/)[0]);
    return na - nb;
});

newFiles.forEach(f => {
    b305Images.push(`getAssetPath("/images/stranda/B305/${f}")`);
});

if (fs.existsSync(nowe2026Dir)) {
    const noweFiles = fs.readdirSync(nowe2026Dir).filter(f => f.endsWith('.webp')).sort();
    noweFiles.forEach(f => {
        b305Images.push(`getAssetPath("/images/stranda/B305/nowe_2026/${f}")`);
    });
}

const imagesArrayStr = '[\n                ' + b305Images.join(',\n                ') + '\n            ]';

const dataFile = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/data/stranda-apartments.ts';
let content = fs.readFileSync(dataFile, 'utf-8');

// We need to replace the gallery.images array for B305 specifically.
// Let's use regex to find B305's gallery array
const regexB305 = /('B305':\s*\{[\s\S]*?gallery:\s*\{[^}]*"heroImage":[^,]+,\s*"images":\s*)\[([\s\S]*?)\](\s*\})/g;

content = content.replace(regexB305, `$1${imagesArrayStr}$3`);
fs.writeFileSync(dataFile, content, 'utf-8');
console.log("B305 images updated successfully.");

// 2. Extract Calendars
const regex = /id:\s*'([^']+)'[\s\S]*?idoBookingId:\s*'([^']+)'(?:[\s\S]*?icalUrl:\s*'([^']+)')?/g;
let match;
let calendars = "# Globalna lista kalendarzy (idoBooking)\n\n| Apartament ID | idoBooking ID | ical URL |\n|--------------|---------------|----------|\n";

while ((match = regex.exec(content)) !== null) {
    const aptId = match[1];
    const idoId = match[2];
    const ical = match[3] || 'Brak';
    calendars += `| **${aptId}** | ${idoId} | ${ical} |\n`;
}

fs.writeFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/kalendarze_globalnie.md', calendars, 'utf-8');
console.log("Kalendarze zrzucone do kalendarze_globalnie.md");

