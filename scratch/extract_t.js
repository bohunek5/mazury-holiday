const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const tMatch = content.indexOf('export const t =');
if (tMatch !== -1) {
    const endMatch = content.indexOf('};', tMatch);
    console.log(content.slice(tMatch, endMatch + 2));
} else {
    console.log("Not found");
}
