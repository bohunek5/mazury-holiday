const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const languages = ['pl', 'en', 'de', 'lt', 'cs', 'es', 'it'];

for (const lang of languages) {
    const langRegex = new RegExp(`${lang}:\\s*\\{[\\s\\S]*?(?=^\\s*(?:en|de|lt|cs|es|it):|};|export const translationsLegal)`, 'm');
    const match = content.match(langRegex);
    if (match) {
        const langContent = match[0];
        console.log(`Language: ${lang}`);
        console.log(`cooperationPage: ${langContent.includes('cooperationPage:')}`);
        console.log(`coopExtra: ${langContent.includes('coopExtra:')}`);
        console.log(`coopModels: ${langContent.includes('coopModels:')}`);
        console.log(`coopSteps: ${langContent.includes('coopSteps:')}`);
        console.log('---');
    }
}
