const fs = require('fs');

let content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// The strandaApartments object
const startMatch = 'export const strandaApartments: Record<string, Apartment> = {';
const startIndex = content.indexOf(startMatch);
const endIndex = content.lastIndexOf('};');

let dictContent = content.substring(startIndex + startMatch.length, endIndex);

// Split the dictionary by top level keys. We know they are formatted as `    'KEY': {`
const regex = /\n    '([A-Z0-9]+)':\s*\{/g;
const matches = [];
let m;
while ((m = regex.exec(dictContent)) !== null) {
    matches.push({ key: m[1], index: m.index });
}

const apts = {};
for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = (i + 1 < matches.length) ? matches[i+1].index : dictContent.length;
    let aptStr = dictContent.substring(start, end);
    
    // Add "Widok na jezioro"
    const lower = aptStr.toLowerCase();
    if (lower.includes('widok na jezioro') || lower.includes('widokiem na jezioro') || lower.includes('jezioro')) {
        if (!aptStr.includes('"Widok na jezioro"') && !aptStr.includes("'Widok na jezioro'")) {
            aptStr = aptStr.replace(/additionalInfo:\s*\[\s*\]/, "additionalInfo: ['Widok na jezioro']");
            if (!aptStr.includes("additionalInfo: ['Widok na jezioro']")) {
                aptStr = aptStr.replace(/additionalInfo:\s*\[([\s\S]*?)\]/, (match, p1) => {
                    if (p1.trim() === '') return "additionalInfo: ['Widok na jezioro']";
                    return `additionalInfo: [${p1.trim()}, 'Widok na jezioro']`;
                });
            }
        }
    }
    
    // remove trailing comma and whitespace
    aptStr = aptStr.trim();
    if (aptStr.endsWith(',')) aptStr = aptStr.substring(0, aptStr.length - 1);
    
    apts[matches[i].key] = '\n    ' + aptStr;
}

const orderedKeys = ['A204', 'A105', 'A103', 'A205', 'A104', 'A306', 'A305', 'B102', 'B404', 'C304', 'B201', 'B401', 'C301', 'B202', 'B402', 'B305', 'A302', 'C404', 'B103', 'B106', 'B304'];

for (const k in apts) {
    if (!orderedKeys.includes(k)) orderedKeys.push(k);
}

let newDictContent = '';
for (const k of orderedKeys) {
    if (apts[k]) {
        newDictContent += apts[k] + ',';
    }
}
// remove last comma and add newline
newDictContent = newDictContent.substring(0, newDictContent.length - 1) + '\n';

const newContent = content.substring(0, startIndex + startMatch.length) + newDictContent + content.substring(endIndex);

fs.writeFileSync('src/data/stranda-apartments.ts', newContent);
console.log("Done");
