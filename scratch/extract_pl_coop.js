const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const getObj = (key) => {
    const regex = new RegExp(`\\n\\s*${key}:\\s*\\{[\\s\\S]*?\\n\\s*\\},`, 'm');
    const match = content.match(regex);
    if (match) return match[0];
    return null;
}

console.log(getObj('cooperationPage'));
console.log(getObj('coopExtra'));
console.log(getObj('coopModels'));
console.log(getObj('coopSteps'));
