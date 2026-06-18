const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const matches = [...content.matchAll(/\n(?:export const )?([a-zA-Z0-9_]+)\s*=\s*\{/g)];
matches.forEach(m => console.log(`Object: ${m[1]} at index ${m.index}`));

const keys = [...content.matchAll(/\n\s+([a-z]{2}):\s*\{/g)];
keys.forEach(m => console.log(`Lang key: ${m[1]} at index ${m.index}`));
