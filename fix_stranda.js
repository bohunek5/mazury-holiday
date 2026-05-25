const fs = require('fs');
const content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

const keysToRemove = ['B104', 'B105', 'B101', 'B302', 'C401'];
const keysToRename = {
    'ID_32': 'C_STUDIO',
    'ID_43': 'C_2BEDROOM',
    'ID_44': 'C_1BEDROOM'
};

let lines = content.split('\n');
let newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    let match = line.match(/^    '([^']+)': \{/);
    if (match) {
        let key = match[1];
        if (keysToRemove.includes(key)) {
            skip = true;
        }
    }
    
    if (!skip) {
        // rename
        for (const [oldKey, newKey] of Object.entries(keysToRename)) {
            line = line.replace(`'${oldKey}'`, `'${newKey}'`);
            line = line.replace(`id: '${oldKey}'`, `id: '${newKey}'`);
        }
        newLines.push(line);
    }
    
    // reset skip if we see `    },` (4 spaces, closing bracket, comma) and we were skipping
    if (skip && line === '    },') {
        skip = false;
    }
}

fs.writeFileSync('src/data/stranda-apartments.ts', newLines.join('\n'));
