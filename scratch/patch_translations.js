const fs = require('fs');

const tsFilePath = 'src/lib/translations.ts';
const tsLegalFilePath = 'src/lib/translationsLegal.ts';

const transEn = require('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_en.json');
let transDe = null;
try {
  transDe = require('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_de.json');
} catch(e) {}

const legalKeys = ['termsPage', 'privacyPage'];

function inject(lang, transData) {
    if (!transData) return;
    
    let legalTs = fs.readFileSync(tsLegalFilePath, 'utf8');
    const legalData = {};
    for (let k of legalKeys) {
        if (transData[k]) {
            legalData[k] = transData[k];
            delete transData[k];
        }
    }
    
    const regexLegal = new RegExp(`${lang}:\\s*\\{[\\s\\S]*?\\n    \\},?`, 'm');
    const newLegalStr = `${lang}: ${JSON.stringify(legalData, null, 8).replace(/\\n/g, '\n').slice(0, -1)}    },`;
    
    if (regexLegal.test(legalTs)) {
        legalTs = legalTs.replace(regexLegal, newLegalStr);
        fs.writeFileSync(tsLegalFilePath, legalTs, 'utf8');
        console.log(`Updated ${lang} in translationsLegal.ts`);
    } else {
        console.log(`Could not find ${lang} block in translationsLegal.ts`);
    }
    
    let mainTs = fs.readFileSync(tsFilePath, 'utf8');
    
    // Find the current block to correctly match it
    // Wait, some blocks end with `    },` and some with `    }` (if last)
    // We can use a simpler approach: finding boundaries manually or just replacing
    const regexMain = new RegExp(`${lang}:\\s*\\{[\\s\\S]*?\\n    \\},?(?=\\n\\s*[a-z]+:|\\n\\})`, 'm');
    
    let mainJsonStr = JSON.stringify(transData, null, 4);
    // Remove the first '{' and add the spread operator inside.
    mainJsonStr = `{\n        ...(translationsLegal as any).${lang},` + mainJsonStr.substring(1).replace(/\n/g, '\n    ');
    
    const newMainStr = `${lang}: ${mainJsonStr},`;
    
    if (regexMain.test(mainTs)) {
        mainTs = mainTs.replace(regexMain, newMainStr);
        // clean up extra commas or formatting
        mainTs = mainTs.replace(/,\s*,\s*\n/g, ',\n');
        fs.writeFileSync(tsFilePath, mainTs, 'utf8');
        console.log(`Updated ${lang} in translations.ts`);
    } else {
        console.log(`Could not find ${lang} block in translations.ts using regexMain`);
    }
}

inject('en', transEn);
if (transDe) {
    inject('de', transDe);
}
