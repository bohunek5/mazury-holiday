const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/data/stranda-apartments.ts', 'utf-8');
const match = content.match(/export const strandaApartments = \{([\s\S]*?)\n\};/);
if (match) {
    const keys = [...match[1].matchAll(/^\s*'([^']+)'|\s*([A-Z][0-9]{3}):/gm)].map(m => m[1] || m[2]).filter(Boolean);
    console.log(keys);
}
