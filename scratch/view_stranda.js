const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const strandaRegex = /\n\s+stranda:\s*\{/;
let match = strandaRegex.exec(content);
if (match) {
    const start = match.index;
    console.log(content.slice(start, start + 1000));
}
