const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');
const match = content.match(/\n\s+de:\s*\{/);
console.log(content.slice(match.index, match.index + 2000));
