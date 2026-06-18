import { Project, SyntaxKind, Node } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');
const translationsDecl = sourceFile.getVariableDeclarationOrThrow('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const data: Record<string, any> = {
    de: {
        filters: {
            jacuzzi: "Whirlpool",
            sauna: "Sauna",
            size: "Größe",
            sizeAny: "Beliebig",
            floor: "Etage",
            floorAny: "Beliebig",
            floorParter: "Erdgeschoss",
            floor1: "1. Etage",
            floor2: "2. Etage",
            floor3: "3. Etage"
        },
        features: {
            studio: "Studio",
            twoBedrooms: "2 Schlafzimmer",
            oneBedroom: "1 Schlafzimmer",
            jacuzzi: "Whirlpool",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "PARKPLATZ",
            playground: "SPIELPLATZ",
            sauna: "SAUNA",
            beach: "STRAND",
            scooters: "VERLEIH",
            beachbar: "BEACH BAR",
            tavern: "TAVERNE",
            shop: "LADEN"
        }
    },
    lt: {
        filters: {
            jacuzzi: "Sūkurinė vonia",
            sauna: "Sauna",
            size: "Dydis",
            sizeAny: "Bet koks",
            floor: "Aukštas",
            floorAny: "Bet koks",
            floorParter: "Pirmas aukštas",
            floor1: "1 aukštas",
            floor2: "2 aukštas",
            floor3: "3 aukštas"
        },
        features: {
            studio: "Studija",
            twoBedrooms: "2 miegamieji",
            oneBedroom: "1 miegamasis",
            jacuzzi: "Sūkurinė vonia",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "AIKŠTELĖ",
            playground: "AIKŠTELĖ",
            sauna: "SAUNA",
            beach: "PAPLŪDIMYS",
            scooters: "NUOMA",
            beachbar: "PAPLŪDIMIO BARAS",
            tavern: "SMUKLĖ",
            shop: "PARDUOTUVĖ"
        }
    },
    en: {
        filters: {
            jacuzzi: "Jacuzzi",
            sauna: "Sauna",
            size: "Size",
            sizeAny: "Any",
            floor: "Floor",
            floorAny: "Any",
            floorParter: "Ground floor",
            floor1: "1st Floor",
            floor2: "2nd Floor",
            floor3: "3rd Floor"
        },
        features: {
            studio: "Studio",
            twoBedrooms: "2 Bedrooms",
            oneBedroom: "1 Bedroom",
            jacuzzi: "Jacuzzi",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "PARKING",
            playground: "PLAYGROUND",
            sauna: "SAUNA",
            beach: "BEACH",
            scooters: "RENTAL",
            beachbar: "BEACH BAR",
            tavern: "TAVERN",
            shop: "SHOP"
        }
    },
    pl: {
        filters: {
            jacuzzi: "Jacuzzi",
            sauna: "Sauna",
            size: "Rozmiar",
            sizeAny: "Dowolna",
            floor: "Kondygnacja",
            floorAny: "Dowolna",
            floorParter: "Parter",
            floor1: "1 Piętro",
            floor2: "2 Piętro",
            floor3: "3 Piętro"
        },
        features: {
            studio: "Studio",
            twoBedrooms: "2 Sypialnie",
            oneBedroom: "1 Sypialnia",
            jacuzzi: "Jacuzzi",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "PARKING",
            playground: "PLAC ZABAW",
            sauna: "SAUNA",
            beach: "PLAŻA",
            scooters: "WYPOŻYCZALNIA",
            beachbar: "BEACH BAR",
            tavern: "TAWERNA",
            shop: "SKLEPIK"
        }
    }
};

const updateObj = (parentObj: any, key: string, dataObj: any) => {
    let prop = parentObj.getProperty(key);
    if (!prop) {
        parentObj.addPropertyAssignment({ name: key, initializer: "{}" });
        prop = parentObj.getProperty(key);
    }
    const obj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!obj) return;

    for (const [k, v] of Object.entries(dataObj)) {
        let p = obj.getProperty(k);
        if (p && Node.isPropertyAssignment(p)) {
            p.setInitializer(`"${v}"`);
        } else {
            obj.addPropertyAssignment({ name: k, initializer: `"${v}"` });
        }
    }
};

for (const lang of Object.keys(data)) {
    const langProp = init.getProperty(lang);
    if (!langProp || !Node.isPropertyAssignment(langProp)) continue;
    const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) continue;

    let strandaProp = langObj.getProperty('stranda');
    if (!strandaProp) {
        langObj.addPropertyAssignment({ name: 'stranda', initializer: "{}" });
        strandaProp = langObj.getProperty('stranda');
    }
    if (!strandaProp || !Node.isPropertyAssignment(strandaProp)) continue;
    const strandaObj = strandaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!strandaObj) continue;

    updateObj(strandaObj, 'filters', data[lang].filters);
    updateObj(strandaObj, 'features', data[lang].features);
    updateObj(strandaObj, 'mapLabels', data[lang].mapLabels);
}

sourceFile.saveSync();
console.log('Saved stranda details');
