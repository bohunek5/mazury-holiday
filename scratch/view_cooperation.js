const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const match = content.match(/\n\s*cooperationPage:\s*\{([\s\S]*?)\n\s*[a-zA-Z0-9_]+Page:/);
if (match) {
    console.log(match[1].slice(0, 2000));
}
