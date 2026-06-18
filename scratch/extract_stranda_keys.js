const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const strandaMatch = content.match(/\n\s*stranda:\s*\{([\s\S]*?)\n\s*kisajnoPage:/);
if (strandaMatch) {
    const plStranda = strandaMatch[1];
    const topKeys = [...plStranda.matchAll(/\n\s+([a-zA-Z0-9_]+):/g)].map(m => m[1]);
    console.log("pl stranda keys:", [...new Set(topKeys)].join(', '));
}
