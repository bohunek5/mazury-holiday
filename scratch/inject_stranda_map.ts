import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from "ts-morph";
import fs from "fs";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("../src/lib/translations.ts");

const strandaEn = {
    filters: {
        jacuzzi: "Jacuzzi",
        size: "Size",
        sizeAny: "Any",
        size4: "Max 4 people",
        size6: "Max 6 people",
        floor: "Floor",
        floorAny: "Any",
        floorParter: "Ground floor",
        floorPietro: "Upper floor",
        sauna: "Sauna",
        floor1: "1st Floor",
        floor2: "2nd Floor",
        floor3: "3rd Floor"
    },
    mapTitle: "Buildings Location",
    mapLabels: {
        parking: "PARKING", playground: "PLAYGROUND", sauna: "SAUNA", beach: "BEACH", rentals: "RENTALS", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "SHOP", scooters: "RENTALS"
    },
    features: { studio: "Studio", oneBedroom: "1 Bedroom", twoBedrooms: "2 Bedrooms", jacuzzi: "Jacuzzi", sauna: "Sauna" }
};

const strandaDe = {
    filters: {
        jacuzzi: "Whirlpool",
        size: "Größe",
        sizeAny: "Beliebig",
        size4: "Max 4 Personen",
        size6: "Max 6 Personen",
        floor: "Etage",
        floorAny: "Beliebig",
        floorParter: "Erdgeschoss",
        floorPietro: "Obergeschoss",
        sauna: "Sauna",
        floor1: "1. Etage",
        floor2: "2. Etage",
        floor3: "3. Etage"
    },
    mapTitle: "Lage der Gebäude",
    mapLabels: {
        parking: "PARKPLATZ", playground: "SPIELPLATZ", sauna: "SAUNA", beach: "STRAND", rentals: "VERLEIH", beachbar: "BEACH BAR", tavern: "TAVERNE", shop: "GESCHÄFT", scooters: "VERLEIH"
    },
    features: { studio: "Studio", oneBedroom: "1 Schlafzimmer", twoBedrooms: "2 Schlafzimmer", jacuzzi: "Whirlpool", sauna: "Sauna" }
};

const defaultStranda = {
    filters: strandaEn.filters,
    mapTitle: strandaEn.mapTitle,
    mapLabels: strandaEn.mapLabels,
    features: strandaEn.features
};

const translationsDecl = sourceFile.getVariableDeclarationOrThrow("translations");
const translationsObj = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const langs = translationsObj.getProperties().filter(p => p.getKind() === SyntaxKind.PropertyAssignment) as PropertyAssignment[];

for (const lang of langs) {
    const langName = lang.getName();
    if (langName === 'pl') continue;
    
    const langObj = lang.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) continue;
    
    let strandaProp = langObj.getProperty("stranda") as PropertyAssignment;
    if (strandaProp) {
        const strandaObj = strandaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (strandaObj) {
            const dataToInject = langName === 'en' ? strandaEn : (langName === 'de' ? strandaDe : defaultStranda);
            
            for (const key of ['filters', 'mapTitle', 'mapLabels', 'features']) {
                if (!strandaObj.getProperty(key)) {
                    strandaObj.addPropertyAssignment({
                        name: key,
                        initializer: JSON.stringify((dataToInject as any)[key])
                    });
                }
            }
        }
    }
}

sourceFile.saveSync();
console.log("Updated translations.ts with Stranda map labels.");
