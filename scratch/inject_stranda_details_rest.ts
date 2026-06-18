import { Project, SyntaxKind, Node } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/translations.ts');
const translationsDecl = sourceFile.getVariableDeclarationOrThrow('translations');
const init = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const data: Record<string, any> = {
    cs: {
        filters: {
            jacuzzi: "Vířivka",
            sauna: "Sauna",
            size: "Velikost",
            sizeAny: "Jakákoliv",
            floor: "Patro",
            floorAny: "Jakékoliv",
            floorParter: "Přízemí",
            floor1: "1. patro",
            floor2: "2. patro",
            floor3: "3. patro"
        },
        features: {
            studio: "Studio",
            twoBedrooms: "2 ložnice",
            oneBedroom: "1 ložnice",
            jacuzzi: "Vířivka",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "PARKOVIŠTĚ",
            playground: "HŘIŠTĚ",
            sauna: "SAUNA",
            beach: "PLÁŽ",
            scooters: "PŮJČOVNA",
            beachbar: "PLÁŽOVÝ BAR",
            tavern: "TAVERNA",
            shop: "OBCHOD"
        }
    },
    es: {
        filters: {
            jacuzzi: "Jacuzzi",
            sauna: "Sauna",
            size: "Tamaño",
            sizeAny: "Cualquiera",
            floor: "Piso",
            floorAny: "Cualquiera",
            floorParter: "Planta baja",
            floor1: "1er piso",
            floor2: "2do piso",
            floor3: "3er piso"
        },
        features: {
            studio: "Estudio",
            twoBedrooms: "2 Dormitorios",
            oneBedroom: "1 Dormitorio",
            jacuzzi: "Jacuzzi",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "APARCAMIENTO",
            playground: "PARQUE INFANTIL",
            sauna: "SAUNA",
            beach: "PLAYA",
            scooters: "ALQUILER",
            beachbar: "BAR DE PLAYA",
            tavern: "TABERNA",
            shop: "TIENDA"
        }
    },
    it: {
        filters: {
            jacuzzi: "Jacuzzi",
            sauna: "Sauna",
            size: "Dimensioni",
            sizeAny: "Qualsiasi",
            floor: "Piano",
            floorAny: "Qualsiasi",
            floorParter: "Piano terra",
            floor1: "1° Piano",
            floor2: "2° Piano",
            floor3: "3° Piano"
        },
        features: {
            studio: "Monolocale",
            twoBedrooms: "2 Camere",
            oneBedroom: "1 Camera",
            jacuzzi: "Jacuzzi",
            sauna: "Sauna"
        },
        mapLabels: {
            parking: "PARCHEGGIO",
            playground: "PARCO GIOCHI",
            sauna: "SAUNA",
            beach: "SPIAGGIA",
            scooters: "NOLEGGIO",
            beachbar: "BEACH BAR",
            tavern: "TAVERNA",
            shop: "NEGOZIO"
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
console.log('Saved rest of stranda details');
