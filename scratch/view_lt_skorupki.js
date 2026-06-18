const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

['lt', 'fr'].forEach(lang => {
    const regex = new RegExp(`\\n\\s+${lang}:\\s*\\{`);
    const match = content.match(regex);
    if (match) {
        // Find next lang to bound
        const nextMatch = content.slice(match.index + match[0].length).match(/\n\s+[a-z]{2}:\s*\{/);
        const endIdx = nextMatch ? match.index + match[0].length + nextMatch.index : content.length;
        const block = content.slice(match.index, endIdx);
        
        let found = false;
        block.split('\n').forEach((line, i) => {
            if (line.includes('skorupki')) {
                console.log(`${lang} Line ${i}: ${line}`);
                found = true;
            }
        });
        if (!found) console.log(`${lang} NO skorupki`);
    }
});
