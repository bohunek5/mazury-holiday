const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const regex = /\n\s+de:\s*\{/;
const match = content.match(regex);
const endRegex = /\n\s+es:\s*\{/;
const endMatch = content.match(endRegex);

const deBlock = content.slice(match.index, endMatch.index);
const lines = deBlock.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('skorupki')) {
        console.log(`Line ${i}: ${lines[i]}`);
    }
}
