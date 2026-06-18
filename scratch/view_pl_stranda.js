const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const strandaMatch = content.match(/\n\s*stranda:\s*\{([\s\S]*?)\n\s*kisajnoPage:/);
if (strandaMatch) {
    console.log(strandaMatch[1].slice(0, 1000));
}
