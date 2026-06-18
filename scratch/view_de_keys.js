const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const regex = /\n\s+de:\s*\{/;
const match = content.match(regex);
const endRegex = /\n\s+es:\s*\{/;
const endMatch = content.match(endRegex);

const deBlock = content.slice(match.index, endMatch.index);
const lines = deBlock.split('\n');
const topLevelKeys = [];

for (const line of lines) {
    const m = line.match(/^ {8}([a-zA-Z0-9_]+):| {8}"([a-zA-Z0-9_]+)":/);
    if (m) {
        topLevelKeys.push(m[1] || m[2]);
    }
}
console.log("de keys:", topLevelKeys.join(', '));
