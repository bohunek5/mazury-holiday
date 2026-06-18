const fs = require('fs');

let content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const languages = [
    { code: 'pl', aboutTitle: 'O domkach', amenitiesTitle: 'Udogodnienia' },
    { code: 'en', aboutTitle: 'About the cottages', amenitiesTitle: 'Amenities' },
    { code: 'de', aboutTitle: 'Über die Ferienhäuser', amenitiesTitle: 'Ausstattung' },
    { code: 'lt', aboutTitle: 'Apie namelius', amenitiesTitle: 'Patogumai' },
    { code: 'cs', aboutTitle: 'O chatách', amenitiesTitle: 'Vybavení' },
    { code: 'es', aboutTitle: 'Sobre las cabañas', amenitiesTitle: 'Comodidades' },
    { code: 'it', aboutTitle: 'Sulle case', amenitiesTitle: 'Servizi' }
];

const startIdx = content.indexOf('export const translations = {');
if (startIdx === -1) {
    console.error("Could not find export const translations = {");
    process.exit(1);
}

let translationsBlock = content.slice(startIdx);
const beforeTranslations = content.slice(0, startIdx);

for (const lang of languages) {
    const langRegex = new RegExp(`(\\n\\s+${lang.code}:\\s*\\{)`);
    const match = translationsBlock.match(langRegex);
    
    if (match) {
        console.log(`Processing ${lang.code}...`);
        
        const nextMatch = translationsBlock.slice(match.index + match[0].length).match(/\n\s+[a-z]{2}:\s*\{/);
        const endIdx = nextMatch ? match.index + match[0].length + nextMatch.index : translationsBlock.length;
        
        let langBlock = translationsBlock.slice(match.index, endIdx);
        
        const skorupkiMatch = langBlock.match(/(\n\s*"?skorupki"?:\s*\{)/);
        if (skorupkiMatch) {
            console.log(`  Found skorupki in ${lang.code}`);
            
            if (!langBlock.includes('aboutTitle:')) {
                const insertPos = skorupkiMatch.index + skorupkiMatch[0].length;
                langBlock = langBlock.slice(0, insertPos) + `\n            aboutTitle: "${lang.aboutTitle}",` + langBlock.slice(insertPos);
                console.log(`  Added aboutTitle`);
            } else {
                langBlock = langBlock.replace(/aboutTitle:\s*".*?"/, `aboutTitle: "${lang.aboutTitle}"`);
                console.log(`  Updated aboutTitle`);
            }
            
            if (!langBlock.includes('amenitiesTitle:')) {
                const insertPos = skorupkiMatch.index + skorupkiMatch[0].length;
                langBlock = langBlock.slice(0, insertPos) + `\n            amenitiesTitle: "${lang.amenitiesTitle}",` + langBlock.slice(insertPos);
                console.log(`  Added amenitiesTitle`);
            } else {
                langBlock = langBlock.replace(/amenitiesTitle:\s*".*?"/, `amenitiesTitle: "${lang.amenitiesTitle}"`);
                console.log(`  Updated amenitiesTitle`);
            }
            
        } else {
            console.log(`  NO skorupki in ${lang.code} inside translations object.`);
        }
        
        translationsBlock = translationsBlock.slice(0, match.index) + langBlock + translationsBlock.slice(endIdx);
    }
}

fs.writeFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', beforeTranslations + translationsBlock);
console.log("Done updating translations.ts");
