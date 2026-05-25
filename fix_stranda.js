const fs = require('fs');
const content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

const lines = content.split('\n');
const items = {}; // map of key -> array of lines for that block

let currentKey = null;
let currentBlock = [];
let headerLines = [];
let footerLines = [];
let inDict = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('export const STRANDA_APARTMENTS')) {
        inDict = true;
        headerLines.push(line);
        continue;
    }
    
    if (inDict) {
        if (line === '};') {
            inDict = false;
            footerLines.push(line);
            continue;
        }
        
        let match = line.match(/^    '([^']+)': \{/);
        if (match) {
            if (currentKey && currentBlock.length > 0) {
                items[currentKey] = currentBlock;
            }
            currentKey = match[1];
            currentBlock = [line];
        } else if (currentKey) {
            currentBlock.push(line);
        } else {
            headerLines.push(line);
        }
    } else {
        if (currentKey && currentBlock.length > 0) {
            items[currentKey] = currentBlock;
            currentKey = null;
            currentBlock = [];
        }
        footerLines.push(line);
    }
}
if (currentKey && currentBlock.length > 0) {
    items[currentKey] = currentBlock;
}

// Remove the old C_Studio ones
delete items['C_Studio'];
delete items['C_1_Sypialnia'];
delete items['C_2_Sypialnie'];

// Update titles for C_STUDIO, C_1BEDROOM, C_2BEDROOM
if (items['C_STUDIO']) {
    items['C_STUDIO'] = items['C_STUDIO'].map(line => line.includes('title: `') ? '        title: `C Studio`,' : line);
}
if (items['C_1BEDROOM']) {
    items['C_1BEDROOM'] = items['C_1BEDROOM'].map(line => line.includes('title: `') ? '        title: `C z jedną sypialnią`,' : line);
}
if (items['C_2BEDROOM']) {
    items['C_2BEDROOM'] = items['C_2BEDROOM'].map(line => line.includes('title: `') ? '        title: `C z dwoma sypialniami`,' : line);
}

// Reassemble
let outputLines = [...headerLines];
const finalKeys = Object.keys(items);
for (let i = 0; i < finalKeys.length; i++) {
    let block = items[finalKeys[i]];
    if (i < finalKeys.length - 1) {
        // ensure it has a comma if it's not the last one
        if (!block[block.length - 1].endsWith(',')) {
            block[block.length - 1] += ',';
        }
    } else {
        // remove comma for the last one
        if (block[block.length - 1].endsWith(',')) {
            block[block.length - 1] = block[block.length - 1].slice(0, -1);
        }
    }
    outputLines = outputLines.concat(block);
}
outputLines = outputLines.concat(footerLines);

fs.writeFileSync('src/data/stranda-apartments.ts', outputLines.join('\n'));
console.log('Fixed stranda apartments');
