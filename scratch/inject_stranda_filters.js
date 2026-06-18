const fs = require('fs');

const fileContent = fs.readFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', 'utf-8');

const translationsToInject = {
    en: {
        filters: `{ jacuzzi: "Jacuzzi", size: "Number of people", sizeAny: "Any", size4: "Max 4 people", size6: "Max 6 people", floor: "Floor", floorAny: "Any", floorParter: "Ground floor", floorPietro: "Upper floor" }`,
        mapTitle: `"Building locations"`,
        mapLabels: `{ parking: "PARKING", playground: "PLAYGROUND", sauna: "SAUNA", beach: "BEACH", rentals: "RENTALS", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "SHOP" }`,
        features: `{ studio: "Studio", oneBedroom: "1 Bedroom", twoBedrooms: "2 Bedrooms", jacuzzi: "Jacuzzi", sauna: "Sauna" }`
    },
    de: {
        filters: `{ jacuzzi: "Whirlpool", size: "Personenanzahl", sizeAny: "Beliebig", size4: "Max 4 Personen", size6: "Max 6 Personen", floor: "Etage", floorAny: "Beliebig", floorParter: "Erdgeschoss", floorPietro: "Obergeschoss" }`,
        mapTitle: `"Gebäudestandorte"`,
        mapLabels: `{ parking: "PARKPLATZ", playground: "SPIELPLATZ", sauna: "SAUNA", beach: "STRAND", rentals: "VERLEIH", beachbar: "STRANDBAR", tavern: "TAVERNE", shop: "GESCHÄFT" }`,
        features: `{ studio: "Studio", oneBedroom: "1 Schlafzimmer", twoBedrooms: "2 Schlafzimmer", jacuzzi: "Whirlpool", sauna: "Sauna" }`
    },
    lt: {
        filters: `{ jacuzzi: "Sūkurinė vonia", size: "Žmonių skaičius", sizeAny: "Bet koks", size4: "Iki 4 žmonių", size6: "Iki 6 žmonių", floor: "Aukštas", floorAny: "Bet koks", floorParter: "Pirmas aukštas", floorPietro: "Antras aukštas" }`,
        mapTitle: `"Pastatų vieta"`,
        mapLabels: `{ parking: "AIKŠTELĖ", playground: "ŽAIDIMŲ AIKŠTELĖ", sauna: "PIRTIS", beach: "PAPLŪDIMYS", rentals: "NUOMA", beachbar: "PAPLŪDIMIO BARAS", tavern: "SMUKLĖ", shop: "PARDUOTUVĖ" }`,
        features: `{ studio: "Studija", oneBedroom: "1 Miegamasis", twoBedrooms: "2 Miegamieji", jacuzzi: "Sūkurinė vonia", sauna: "Pirtis" }`
    },
    cs: {
        filters: `{ jacuzzi: "Vířivka", size: "Počet osob", sizeAny: "Libovolný", size4: "Max 4 osoby", size6: "Max 6 osob", floor: "Patro", floorAny: "Libovolné", floorParter: "Přízemí", floorPietro: "První patro" }`,
        mapTitle: `"Umístění budov"`,
        mapLabels: `{ parking: "PARKOVIŠTĚ", playground: "HŘIŠTĚ", sauna: "SAUNA", beach: "PLÁŽ", rentals: "PŮJČOVNA", beachbar: "PLÁŽOVÝ BAR", tavern: "TAVERNA", shop: "OBCHOD" }`,
        features: `{ studio: "Studio", oneBedroom: "1 Ložnice", twoBedrooms: "2 Ložnice", jacuzzi: "Vířivka", sauna: "Sauna" }`
    },
    es: {
        filters: `{ jacuzzi: "Jacuzzi", size: "Número de personas", sizeAny: "Cualquiera", size4: "Max 4 personas", size6: "Max 6 personas", floor: "Piso", floorAny: "Cualquiera", floorParter: "Planta baja", floorPietro: "Planta alta" }`,
        mapTitle: `"Ubicación de edificios"`,
        mapLabels: `{ parking: "APARCAMIENTO", playground: "PARQUE", sauna: "SAUNA", beach: "PLAYA", rentals: "ALQUILER", beachbar: "BAR DE PLAYA", tavern: "TABERNA", shop: "TIENDA" }`,
        features: `{ studio: "Estudio", oneBedroom: "1 Dormitorio", twoBedrooms: "2 Dormitorios", jacuzzi: "Jacuzzi", sauna: "Sauna" }`
    },
    it: {
        filters: `{ jacuzzi: "Jacuzzi", size: "Numero di persone", sizeAny: "Qualsiasi", size4: "Max 4 persone", size6: "Max 6 persone", floor: "Piano", floorAny: "Qualsiasi", floorParter: "Piano terra", floorPietro: "Primo piano" }`,
        mapTitle: `"Posizione degli edifici"`,
        mapLabels: `{ parking: "PARCHEGGIO", playground: "PARCO GIOCHI", sauna: "SAUNA", beach: "SPIAGGIA", rentals: "NOLEGGIO", beachbar: "BAR SULLA SPIAGGIA", tavern: "TAVERNA", shop: "NEGOZIO" }`,
        features: `{ studio: "Monolocale", oneBedroom: "1 Camera", twoBedrooms: "2 Camere", jacuzzi: "Jacuzzi", sauna: "Sauna" }`
    },
    pl: {
        features: `{ studio: "Studio", oneBedroom: "1 Sypialnia", twoBedrooms: "2 Sypialnie", jacuzzi: "Jacuzzi", sauna: "Sauna" }`
    }
};

let newContent = fileContent;

for (const [lang, translations] of Object.entries(translationsToInject)) {
    // Find the language block
    const langRegex = new RegExp(`(\\n\\s+${lang}:\\s*\\{)`);
    const match = newContent.match(langRegex);
    
    if (match) {
        console.log(`Updating ${lang}...`);
        
        const nextMatch = newContent.slice(match.index + match[0].length).match(/\n\s+[a-z]{2}:\s*\{/);
        const endIdx = nextMatch ? match.index + match[0].length + nextMatch.index : newContent.length;
        
        let langBlock = newContent.slice(match.index, endIdx);
        
        // Find stranda block inside this language block
        const strandaRegex = /(\n\s*"?stranda"?:\s*\{)/;
        const strandaMatch = langBlock.match(strandaRegex);
        
        if (strandaMatch) {
            let strandaBlockStart = strandaMatch.index + strandaMatch[0].length;
            
            // For pl, we just replace `bedroom1` with `oneBedroom` in features if we can't do it cleanly
            if (lang === 'pl') {
                langBlock = langBlock.replace(/bedroom1:\s*"1 Sypialnia"/g, 'oneBedroom: "1 Sypialnia"');
                langBlock = langBlock.replace(/bedroom2:\s*"2 Sypialnie"/g, 'twoBedrooms: "2 Sypialnie"');
            } else {
                // For other languages, we inject the keys if they are missing
                for (const [key, value] of Object.entries(translations)) {
                    const keyRegex = new RegExp(`\\n\\s*"?${key}"?:`);
                    // We only check within 2000 characters of stranda start
                    const checkBlock = langBlock.slice(strandaBlockStart, strandaBlockStart + 2000);
                    if (!checkBlock.match(keyRegex)) {
                        langBlock = langBlock.slice(0, strandaBlockStart) + `\n            ${key}: ${value},` + langBlock.slice(strandaBlockStart);
                        console.log(`  Injected ${key}`);
                    } else {
                        // Let's replace the whole features block for other languages just to be sure it has oneBedroom
                        if (key === 'features') {
                           // this is harder, just replace bedroom1 with oneBedroom
                           langBlock = langBlock.replace(/bedroom1:/g, 'oneBedroom:').replace(/bedroom2:/g, 'twoBedrooms:');
                        }
                    }
                }
            }
        }
        newContent = newContent.slice(0, match.index) + langBlock + newContent.slice(endIdx);
    }
}

fs.writeFileSync('/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts', newContent);
console.log("Done updating stranda filters in translations.ts");
