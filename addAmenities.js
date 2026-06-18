const fs = require('fs');

const path = './src/lib/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const missingAmenities = {
  "balsam do ciała": { en: "Body lotion", de: "Körperlotion", lt: "Kūno losjonas", lv: "Ķermeņa losjons", cs: "Tělové mléko" },
  "chłodziarka do wina": { en: "Wine cooler", de: "Weinkühler", lt: "Vyno šaldytuvas", lv: "Vīna dzesētājs", cs: "Chladnička na víno" },
  "deska do prasowania": { en: "Ironing board", de: "Bügelbrett", lt: "Lyginimo lenta", lv: "Gludināmais dēlis", cs: "Žehlicí prkno" },
  "dwa fotele": { en: "Two armchairs", de: "Zwei Sessel", lt: "Du foteliai", lv: "Divi atpūtas krēsli", cs: "Dvě křesla" },
  "dwa krzesła": { en: "Two chairs", de: "Zwei Stühle", lt: "Dvi kėdės", lv: "Divi krēsli", cs: "Dvě židle" },
  "dwa leżaki": { en: "Two sun loungers", de: "Zwei Sonnenliegen", lt: "Du gultai", lv: "Divi zviļņi", cs: "Dvě lehátka" },
  "ekspres do kawy": { en: "Coffee machine", de: "Kaffeemaschine", lt: "Kavos aparatas", lv: "Kafijas automāts", cs: "Kávovar" },
  "jacuzzi": { en: "Jacuzzi", de: "Whirlpool", lt: "Sūkurinė vonia", lv: "Džakuzi", cs: "Vířivka" },
  "kanapa": { en: "Sofa", de: "Couch", lt: "Sofa", lv: "Dīvāns", cs: "Gauč" },
  "klimatyzacja": { en: "Air conditioning", de: "Klimaanlage", lt: "Oro kondicionierius", lv: "Gaisa kondicionieris", cs: "Klimatizace" },
  "komplet mebli ogodowych": { en: "Garden furniture set", de: "Gartenmöbel-Set", lt: "Sodo baldų komplektas", lv: "Dārza mēbeļu komplekts", cs: "Sada zahradního nábytku" },
  "komplet naczyń i sztućców": { en: "Set of dishes and cutlery", de: "Set aus Geschirr und Besteck", lt: "Indų ir stalo įrankių komplektas", lv: "Trauku un galda piederumu komplekts", cs: "Sada nádobí a příborů" },
  "komplet pościeli": { en: "Set of bed linen", de: "Bettwäsche-Set", lt: "Patalynės komplektas", lv: "Gultas veļas komplekts", cs: "Sada ložního prádla" },
  "krzesła": { en: "Chairs", de: "Stühle", lt: "Kėdės", lv: "Krēsli", cs: "Židle" },
  "leżak": { en: "Sun lounger", de: "Sonnenliege", lt: "Gultas", lv: "Zvilnis", cs: "Lehátko" },
  "lodówka": { en: "Fridge", de: "Kühlschrank", lt: "Šaldytuvas", lv: "Ledusskapis", cs: "Lednička" },
  "mikrofala": { en: "Microwave", de: "Mikrowelle", lt: "Mikrobangų krosnelė", lv: "Mikroviļņu krāsns", cs: "Mikrovlnná trouba" },
  "mikrofalówka": { en: "Microwave", de: "Mikrowelle", lt: "Mikrobangų krosnelė", lv: "Mikroviļņu krāsns", cs: "Mikrovlnná trouba" },
  "mydło": { en: "Soap", de: "Seife", lt: "Muilas", lv: "Ziepēs", cs: "Mýdlo" },
  "odkurzacz": { en: "Vacuum cleaner", de: "Staubsauger", lt: "Dulkių siurblys", lv: "Putekļu sūcējs", cs: "Vysavač" },
  "piekarnik": { en: "Oven", de: "Ofen", lt: "Orkaitė", lv: "Cepeškrāsns", cs: "Trouba" },
  "pralka": { en: "Washing machine", de: "Waschmaschine", lt: "Skalbimo mašina", lv: "Veļas mašīna", cs: "Pračka" },
  "prysznic": { en: "Shower", de: "Dusche", lt: "Dušas", lv: "Duša", cs: "Sprcha" },
  "prywatne jacuzzi czynne przez cały rok": { en: "Private year-round jacuzzi", de: "Privater ganzjähriger Whirlpool", lt: "Privati ištisus metus veikianti sūkurinė vonia", lv: "Privāts visu gadu pieejams džakuzi", cs: "Privátní celoroční vířivka" },
  "prywatne jacuzzi na dachu": { en: "Private rooftop jacuzzi", de: "Privater Whirlpool auf dem Dach", lt: "Privati sūkurinė vonia ant stogo", lv: "Privāts jumta džakuzi", cs: "Privátní vířivka na střeše" },
  "płyta indukcyjna": { en: "Induction hob", de: "Induktionskochfeld", lt: "Indukcinė kaitlentė", lv: "Indukcijas plīts", cs: "Indukční varná deska" },
  "ręczniki": { en: "Towels", de: "Handtücher", lt: "Rankšluosčiai", lv: "Dvieļi", cs: "Ručníky" },
  "sauna": { en: "Sauna", de: "Sauna", lt: "Pirtis", lv: "Pirts", cs: "Sauna" },
  "sofa": { en: "Sofa", de: "Sofa", lt: "Sofa", lv: "Dīvāns", cs: "Pohovka" },
  "sofa 1os.": { en: "1-person sofa", de: "1-Sitzer-Sofa", lt: "1-vietė sofa", lv: "1 vietīgs dīvāns", cs: "Místná pohovka pro 1 osobu" },
  "sofa 2os.": { en: "2-person sofa", de: "2-Sitzer-Sofa", lt: "2-vietė sofa", lv: "2 vietīgs dīvāns", cs: "Pohovka pro 2 osoby" },
  "sofa dla 2 osób": { en: "Sofa for 2 people", de: "Sofa für 2 Personen", lt: "Sofa 2 asmenims", lv: "Dīvāns 2 personām", cs: "Pohovka pro 2 osoby" },
  "stolik": { en: "Small table", de: "Kleiner Tisch", lt: "Staliukas", lv: "Neliels galds", cs: "Stolek" },
  "stół": { en: "Table", de: "Tisch", lt: "Stalas", lv: "Galds", cs: "Stůl" },
  "suszarka do włosów": { en: "Hair dryer", de: "Haartrockner", lt: "Plaukų džiovintuvas", lv: "Matu fēns", cs: "Fén" },
  "suszarka na ubrania": { en: "Clothes dryer", de: "Wäscheständer", lt: "Drabužių džiovykla", lv: "Veļas žāvētājs", cs: "Sušák na prádlo" },
  "szafa": { en: "Wardrobe", de: "Kleiderschrank", lt: "Spinta", lv: "Skapis", cs: "Skříň" },
  "zestaw kosmetyków": { en: "Cosmetics set", de: "Kosmetikset", lt: "Kosmetikos rinkinys", lv: "Kosmētikas komplekts", cs: "Sada kosmetiky" },
  "zmywarka": { en: "Dishwasher", de: "Geschirrspüler", lt: "Indaplovė", lv: "Trauku mazgājamā mašīna", cs: "Myčka" },
  "łóżko 180x200": { en: "180x200 bed", de: "180x200 Bett", lt: "180x200 lova", lv: "180x200 gulta", cs: "Postel 180x200" },
  "łóżko małżeńskie": { en: "Double bed", de: "Doppelbett", lt: "Dvigulė lova", lv: "Divguļamā gulta", cs: "Manželská postel" },
  "żel pod prysznic": { en: "Shower gel", de: "Duschgel", lt: "Dušo želė", lv: "Dušas želeja", cs: "Sprchový gel" },
  "żelazko": { en: "Iron", de: "Bügeleisen", lt: "Lygintuvas", lv: "Gludeklis", cs: "Žehlička" },
  "TV": { en: "TV", de: "TV", lt: "TV", lv: "TV", cs: "TV" },
  "wyjście na taras": { en: "Terrace exit", de: "Terrassenausgang", lt: "Išėjimas į terasą", lv: "Izeja uz terasi", cs: "Výstup na terasu" }
};

const languages = ["pl", "en", "de", "lt", "lv", "cs"];

for (const lang of languages) {
    const langKey = `export const ${lang} = {`;
    const langIndex = content.indexOf(langKey);
    if (langIndex === -1) continue;
    
    // find amenityNames block
    const amenityKey = `"amenityNames": {`;
    let amenityIndex = content.indexOf(amenityKey, langIndex);
    
    // In pl, it's just 'amenityNames: {' or '"amenityNames": {'
    if (amenityIndex === -1 || (content.indexOf(`export const`, langIndex + 1) !== -1 && amenityIndex > content.indexOf(`export const`, langIndex + 1))) {
        // try without quotes
        const amenityKeyNoQuote = `amenityNames: {`;
        amenityIndex = content.indexOf(amenityKeyNoQuote, langIndex);
    }
    
    if (amenityIndex !== -1 && (content.indexOf(`export const`, langIndex + 1) === -1 || amenityIndex < content.indexOf(`export const`, langIndex + 1))) {
        // find the end of amenityNames block
        let openBraces = 0;
        let startIndex = amenityIndex + (content.substr(amenityIndex, 20).indexOf('{'));
        let endIndex = -1;
        for (let i = startIndex; i < content.length; i++) {
            if (content[i] === '{') openBraces++;
            if (content[i] === '}') openBraces--;
            if (openBraces === 0) {
                endIndex = i;
                break;
            }
        }
        
        if (endIndex !== -1) {
            let blockContent = content.substring(startIndex + 1, endIndex);
            let toAppend = "";
            for (const [key, transObj] of Object.entries(missingAmenities)) {
                if (!blockContent.includes(`"${key}"`)) {
                    let transVal = key; // fallback
                    if (lang === "pl") transVal = key;
                    else if (transObj[lang]) transVal = transObj[lang];
                    
                    toAppend += `\n      "${key}": "${transVal}",`;
                }
            }
            if (toAppend) {
                // remove trailing comma if we are appending at the end of block, or just insert
                content = content.substring(0, endIndex) + (blockContent.trim().endsWith(',') ? '' : ',') + toAppend + '\n    ' + content.substring(endIndex);
            }
        }
    }
}

fs.writeFileSync(path, content);
console.log("Translations added.");
