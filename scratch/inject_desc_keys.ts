import { Project, SyntaxKind } from "ts-morph";
import * as fs from "fs";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("./src/lib/translations.ts");

const translationsDecl = sourceFile.getVariableDeclaration("translations");
if (!translationsDecl) throw new Error("No translations");
const init = translationsDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
if (!init) throw new Error("No init");

const langs = ["pl", "en", "de", "cs"];

const keys = {
    pl: {
        location: "Położenie",
        maxGuests: "Maksymalna ilość osób",
        kitchen: "Wyposażenie kuchni",
        bedroom1: "Wyposażenie sypialni 1",
        bedroom2: "Wyposażenie sypialni 2",
        bedroom3: "Wyposażenie sypialni 3",
        bathroom: "Wyposażenie łazienki",
        living: "Wyposażenie salonu",
        terraceFront: "Taras przód",
        terraceBack: "Taras tył",
        terrace: "Taras",
        balcony: "Balkon",
        others: "Pozostałe",
        included: "W ofercie",
        additional: "Dodatkowe informacje",
        bedroom: "Wyposażenie sypialni",
        livingRoom: "Salon"
    },
    en: {
        location: "Location",
        maxGuests: "Maximum number of guests",
        kitchen: "Kitchen equipment",
        bedroom1: "Bedroom 1 equipment",
        bedroom2: "Bedroom 2 equipment",
        bedroom3: "Bedroom 3 equipment",
        bathroom: "Bathroom equipment",
        living: "Living room equipment",
        terraceFront: "Front terrace",
        terraceBack: "Back terrace",
        terrace: "Terrace",
        balcony: "Balcony",
        others: "Others",
        included: "Included",
        additional: "Additional information",
        bedroom: "Bedroom equipment",
        livingRoom: "Living room"
    },
    de: {
        location: "Lage",
        maxGuests: "Maximale Gästezahl",
        kitchen: "Küchenausstattung",
        bedroom1: "Schlafzimmer 1 Ausstattung",
        bedroom2: "Schlafzimmer 2 Ausstattung",
        bedroom3: "Schlafzimmer 3 Ausstattung",
        bathroom: "Badezimmerausstattung",
        living: "Wohnzimmerausstattung",
        terraceFront: "Vordere Terrasse",
        terraceBack: "Hintere Terrasse",
        terrace: "Terrasse",
        balcony: "Balkon",
        others: "Sonstiges",
        included: "Inbegriffen",
        additional: "Zusätzliche Informationen",
        bedroom: "Schlafzimmerausstattung",
        livingRoom: "Wohnzimmer"
    },
    cs: {
        location: "Umístění",
        maxGuests: "Maximální počet hostů",
        kitchen: "Vybavení kuchyně",
        bedroom1: "Vybavení ložnice 1",
        bedroom2: "Vybavení ložnice 2",
        bedroom3: "Vybavení ložnice 3",
        bathroom: "Vybavení koupelny",
        living: "Vybavení obývacího pokoje",
        terraceFront: "Přední terasa",
        terraceBack: "Zadní terasa",
        terrace: "Terasa",
        balcony: "Balkon",
        others: "Ostatní",
        included: "V nabídce",
        additional: "Další informace",
        bedroom: "Vybavení ložnice",
        livingRoom: "Obývací pokoj"
    }
};

for (const lang of langs) {
    const langObj = init.getProperty(lang);
    if (!langObj) continue;
    
    // Check if descKeys exists
    const langValue = langObj.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
    let descKeysProp = langValue.getProperty("descKeys");
    if (!descKeysProp) {
        langValue.addPropertyAssignment({
            name: "descKeys",
            initializer: JSON.stringify(keys[lang as keyof typeof keys], null, 4)
        });
        console.log(`Added descKeys to ${lang}`);
    } else {
        console.log(`descKeys already exists in ${lang}, skipping.`);
    }
}

sourceFile.saveSync();
