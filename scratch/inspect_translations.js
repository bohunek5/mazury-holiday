const fs = require('fs');

const content = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

// Find the main "export const translations =" block
const startMatch = content.indexOf('export const translations = {');
if (startMatch === -1) {
    console.log("Could not find export const translations = {");
    process.exit(1);
}

const remaining = content.slice(startMatch);

// We'll use a regex to extract just the languages that are keys of this object
const langs = ["pl", "en", "de", "lt", "cs", "es", "it", "ru", "fr"];

for (const lang of langs) {
    const regex = new RegExp(`\\n\\s+${lang}:\\s*\\{`, "g");
    const match = regex.exec(remaining);
    if (!match) {
        console.log(`Language ${lang} not found as a top-level key`);
        continue;
    }
    
    // Find where 'skorupki: {' is within this language block
    const skorupkiRegex = /skorupki:\s*\{/g;
    skorupkiRegex.lastIndex = match.index;
    const skorupkiMatch = skorupkiRegex.exec(remaining);
    
    if (skorupkiMatch) {
        // Also check if there's another language key between lang and skorupki
        let isValid = true;
        for (const otherLang of langs) {
            if (otherLang !== lang) {
                const otherRegex = new RegExp(`\\n\\s+${otherLang}:\\s*\\{`, "g");
                otherRegex.lastIndex = match.index + 1;
                const otherMatch = otherRegex.exec(remaining);
                if (otherMatch && otherMatch.index < skorupkiMatch.index) {
                    isValid = false;
                    break;
                }
            }
        }
        
        if (isValid) {
            console.log(`Language ${lang} HAS skorupki`);
            const aboutTitleRegex = /aboutTitle:\s*"([^"]+)"/g;
            aboutTitleRegex.lastIndex = skorupkiMatch.index;
            const aboutMatch = aboutTitleRegex.exec(remaining);
            
            // Check if aboutTitle is before the end of the skorupki block
            // This is hacky but we just want to know if it's there
            if (aboutMatch && (aboutMatch.index - skorupkiMatch.index) < 500) {
                console.log(`  aboutTitle: ${aboutMatch[1]}`);
            } else {
                console.log(`  NO aboutTitle`);
            }
        } else {
            console.log(`Language ${lang} NO skorupki`);
        }
    } else {
        console.log(`Language ${lang} NO skorupki`);
    }
}
