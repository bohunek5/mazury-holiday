const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const strandaRegex = /\n\s+stranda:\s*\{\n\s+subtitle:/g;
let match;
while ((match = strandaRegex.exec(content)) !== null) {
    console.log(`Found stranda block at ${match.index}`);
    console.log(content.slice(match.index, match.index + 1000));
}
