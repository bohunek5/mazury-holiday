const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

['de', 'lt'].forEach(lang => {
    const regex = new RegExp(`\\n\\s+${lang}:\\s*\\{`);
    const match = content.match(regex);
    if (match) {
        console.log(`--- ${lang} ---`);
        console.log(content.slice(match.index, match.index + 200));
    }
});
