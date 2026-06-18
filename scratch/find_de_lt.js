const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

['pl', 'en', 'de', 'lt', 'cs', 'es'].forEach(lang => {
    const match = content.match(new RegExp(`\\n\\s+${lang}:\\s*\\{`));
    if (match) {
        console.log(`${lang} at index ${match.index}`);
        const skorupkiMatch = content.indexOf('skorupki:', match.index);
        console.log(`  skorupki at index ${skorupkiMatch}`);
    } else {
        console.log(`${lang} NOT FOUND`);
    }
});
