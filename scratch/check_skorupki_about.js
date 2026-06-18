const fs = require('fs');
const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const getSkorupki = (lang) => {
    const langRegex = new RegExp(`\\n\\s*${lang}:\\s*\\{[\\s\\S]*?(?=^\\s*(?:en|de|lt|cs|es|it|pl):|};|export const translationsLegal)`, 'm');
    const match = content.match(langRegex);
    if (!match) return;
    const skorupkiRegex = /skorupki:\s*\{([\s\S]*?)\},/;
    const skorupkiMatch = match[0].match(skorupkiRegex);
    if (skorupkiMatch) {
        console.log(`${lang} skorupki:`, skorupkiMatch[1].split('\n').map(l => l.trim()).filter(l => l.includes('aboutTitle')));
    }
}

['pl', 'en', 'de', 'lt', 'cs', 'es', 'it'].forEach(getSkorupki);
