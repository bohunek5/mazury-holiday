const fs = require('fs');

const tsFilePath = 'src/lib/translations.ts';
const tsLegalFilePath = 'src/lib/translationsLegal.ts';

const transEn = require('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_en.json');
let transDe = null;
try {
  transDe = require('/Users/karolbohdanowicz/.gemini/antigravity-ide/brain/87a6b7c8-830c-460f-97e0-80b6a2c4e55a/scratch/trans_de.json');
} catch(e) {}

const legalKeys = ['termsPage', 'privacyPage'];

function replaceBlock(str, key, newContent) {
    const searchStr = `${key}: {`;
    const startIndex = str.indexOf(searchStr);
    if (startIndex === -1) return str;

    const blockStart = startIndex + searchStr.length - 1; // index of '{'
    let braceCount = 0;
    let blockEnd = -1;

    for (let i = blockStart; i < str.length; i++) {
        if (str[i] === '{') braceCount++;
        if (str[i] === '}') braceCount--;

        if (braceCount === 0) {
            blockEnd = i;
            break;
        }
    }

    if (blockEnd !== -1) {
        return str.substring(0, startIndex) + `${key}: ` + newContent + str.substring(blockEnd + 1);
    }
    return str;
}

function inject(lang, transData) {
    if (!transData) return;
    
    // Legal
    let legalTs = fs.readFileSync(tsLegalFilePath, 'utf8');
    const legalData = {};
    let legalHasData = false;
    
    // Attempt to parse existing translationsLegal to merge with it if possible
    // Wait, the easiest way is to inject properties instead of overwriting the whole object.
    for (let k of legalKeys) {
        if (transData[k]) {
            legalData[k] = transData[k];
            delete transData[k];
            legalHasData = true;
        }
    }
    
    // Instead of replacing the whole `export const {lang} = { ... }`, we can inject into it.
    // Or just manually provide the other keys if they are missing in German.
    // Let's check if we are doing DE:
    if (!legalData['gdprPage']) legalData['gdprPage'] = {
        title: "Information Clause (GDPR)",
        intro: "Pursuant to Art. 13 of the General Data Protection Regulation of April 27, 2016 (Official Journal of the EU L 119 of 04.05.2016), I inform that:",
        list: [
            "<strong>The administrator of your personal data is:</strong> RAD'LIGHT, Myśliwska 3, 11-500 Giżycko.",
            "<strong>Contact with the Personal Data Administrator:</strong> rezerwacje@mazury.holiday",
            "Your personal data will be processed for the purpose of providing the service based on Art. 6 sec. 1 lit. a of the general regulation on the protection of personal data of April 27, 2016.",
            "Your personal data will be stored until the consent is revoked.",
            "You have the right to request access to your personal data from the administrator, the right to rectify, delete, or limit processing, the right to withdraw consent, and the right to data portability.",
            "Providing personal data is voluntary, however, failure to provide data may result in the inability to contact you to provide the service. At the same time, pursuant to art.6 sec.1 lit. a of the general regulation on the protection of personal data of April 27, 2016, I consent to the processing of my personal data for the purpose of telephone or e-mail contact regarding the arrangement of the service."
        ]
    };
    if (!legalData['contactExtra']) legalData['contactExtra'] = {
        callUs: "Call us",
        writeUs: "Write to us",
        mapLabel: "Location map:"
    };
    if (!legalData['coopExtra']) legalData['coopExtra'] = {
        heroTitle: "Cooperation",
        heroSubtitle: "Join us and increase the profits from your real estate",
        securityTitle: "Full Security",
        securityDesc: "We take care of your property as our own, providing constant supervision and insurance.",
        readyTitle: "Ready for cooperation?",
        readyDesc: "Contact us to discuss the potential of your property in Masuria.",
        letsTalk: "Let's talk"
    };

    
    // Stringify legalData without the outermost braces to just inject the keys inside the existing object
    let legalStr = JSON.stringify(legalData, null, 4);
    
    legalTs = replaceBlock(legalTs, lang, legalStr);
    fs.writeFileSync(tsLegalFilePath, legalTs, 'utf8');
    console.log(`Updated ${lang} in translationsLegal.ts`);
    
    // Main
    let mainTs = fs.readFileSync(tsFilePath, 'utf8');
    let mainJsonStr = JSON.stringify(transData, null, 4);
    // Add the spread operator
    mainJsonStr = `{\n        ...(translationsLegal as any).${lang},` + mainJsonStr.substring(1).replace(/\n/g, '\n    ');
    
    mainTs = replaceBlock(mainTs, lang, mainJsonStr);
    fs.writeFileSync(tsFilePath, mainTs, 'utf8');
    console.log(`Updated ${lang} in translations.ts`);
}

inject('en', transEn);
if (transDe) {
    inject('de', transDe);
}
