import { Project, SyntaxKind, Node } from "ts-morph";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts");

const translationsDict = sourceFile.getVariableDeclarationOrThrow("translations").getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const translationsData = {
    "pl": {
        "mapTitle": "Lokalizacja budynków",
        "mapLabels": { "parking": "PARKING", "playground": "PLAC ZABAW", "sauna": "SAUNA", "beach": "PLAŻA", "rentals": "WYPOŻYCZALNIA", "beachbar": "BEACH BAR", "tavern": "TAWERNA", "shop": "SKLEPIK", "scooters": "WYPOŻYCZALNIA" },
        "features": { "studio": "Studio", "oneBedroom": "1 Sypialnia", "twoBedrooms": "2 Sypialnie", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
    },
    "en": {
        "mapTitle": "Buildings Location",
        "mapLabels": { "parking": "PARKING", "playground": "PLAYGROUND", "sauna": "SAUNA", "beach": "BEACH", "rentals": "RENTALS", "beachbar": "BEACH BAR", "tavern": "TAVERN", "shop": "SHOP", "scooters": "RENTALS" },
        "features": { "studio": "Studio", "oneBedroom": "1 Bedroom", "twoBedrooms": "2 Bedrooms", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
    },
    "de": {
        "mapTitle": "Gebäudestandorte",
        "mapLabels": { "parking": "PARKPLATZ", "playground": "SPIELPLATZ", "sauna": "SAUNA", "beach": "STRAND", "rentals": "VERLEIH", "beachbar": "STRANDBAR", "tavern": "TAVERNE", "shop": "GESCHÄFT", "scooters": "VERLEIH" },
        "features": { "studio": "Studio", "oneBedroom": "1 Schlafzimmer", "twoBedrooms": "2 Schlafzimmer", "jacuzzi": "Whirlpool", "sauna": "Sauna" }
    },
    "es": {
        "mapTitle": "Ubicación de edificios",
        "mapLabels": { "parking": "APARCAMIENTO", "playground": "PARQUE INFANTIL", "sauna": "SAUNA", "beach": "PLAYA", "rentals": "ALQUILER", "beachbar": "CHIRINGUITO", "tavern": "TABERNA", "shop": "TIENDA", "scooters": "ALQUILER" },
        "features": { "studio": "Estudio", "oneBedroom": "1 Dormitorio", "twoBedrooms": "2 Dormitorios", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
    },
    "it": {
        "mapTitle": "Posizione degli edifici",
        "mapLabels": { "parking": "PARCHEGGIO", "playground": "PARCO GIOCHI", "sauna": "SAUNA", "beach": "SPIAGGIA", "rentals": "NOLEGGIO", "beachbar": "CHIOSCO", "tavern": "TAVERNA", "shop": "NEGOZIO", "scooters": "NOLEGGIO" },
        "features": { "studio": "Monolocale", "oneBedroom": "1 Camera", "twoBedrooms": "2 Camere", "jacuzzi": "Vasca idromassaggio", "sauna": "Sauna" }
    },
    "fr": {
        "mapTitle": "Emplacement des bâtiments",
        "mapLabels": { "parking": "PARKING", "playground": "AIRE DE JEUX", "sauna": "SAUNA", "beach": "PLAGE", "rentals": "LOCATION", "beachbar": "BAR DE PLAGE", "tavern": "TAVERNE", "shop": "BOUTIQUE", "scooters": "LOCATION" },
        "features": { "studio": "Studio", "oneBedroom": "1 Chambre", "twoBedrooms": "2 Chambres", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
    },
    "cs": {
        "mapTitle": "Umístění budov",
        "mapLabels": { "parking": "PARKOVIŠTĚ", "playground": "HŘIŠTĚ", "sauna": "SAUNA", "beach": "PLÁŽ", "rentals": "PŮJČOVNA", "beachbar": "PLÁŽOVÝ BAR", "tavern": "TAVERNA", "shop": "OBCHOD", "scooters": "PŮJČOVNA" },
        "features": { "studio": "Studio", "oneBedroom": "1 Ložnice", "twoBedrooms": "2 Ložnice", "jacuzzi": "Vířivka", "sauna": "Sauna" }
    },
    "lt": {
        "mapTitle": "Pastatų vieta",
        "mapLabels": { "parking": "AIKŠTELĖ", "playground": "ŽAIDIMŲ AIKŠTELĖ", "sauna": "PIRTIS", "beach": "PAPLŪDIMYS", "rentals": "NUOMA", "beachbar": "PAPLŪDIMIO BARAS", "tavern": "SMUKLĖ", "shop": "PARDUOTUVĖ", "scooters": "NUOMA" },
        "features": { "studio": "Studija", "oneBedroom": "1 Miegamasis", "twoBedrooms": "2 Miegamieji", "jacuzzi": "Sūkurinė vonia", "sauna": "Pirtis" }
    },
    "dk": {
        "mapTitle": "Bygningernes placering",
        "mapLabels": { "parking": "PARKERING", "playground": "LEGEPLADS", "sauna": "SAUNA", "beach": "STRAND", "rentals": "UDLEJNING", "beachbar": "STRANDBAR", "tavern": "VÆRTSHUS", "shop": "BUTIK", "scooters": "UDLEJNING" },
        "features": { "studio": "Studio", "oneBedroom": "1 Soveværelse", "twoBedrooms": "2 Soveværelser", "jacuzzi": "Jacuzzi", "sauna": "Sauna" }
    },
    "se": {
        "mapTitle": "Byggnaders plats",
        "mapLabels": { "parking": "PARKERING", "playground": "LEKPLATS", "sauna": "BASTU", "beach": "STRAND", "rentals": "UTHYRNING", "beachbar": "STRANDBAR", "tavern": "TAVERN", "shop": "BUTIK", "scooters": "UTHYRNING" },
        "features": { "studio": "Studio", "oneBedroom": "1 Sovrum", "twoBedrooms": "2 Sovrum", "jacuzzi": "Jacuzzi", "sauna": "Bastu" }
    },
    "no": {
        "mapTitle": "Bygningers plassering",
        "mapLabels": { "parking": "PARKERING", "playground": "LEKEPLASS", "sauna": "BADSTUE", "beach": "STRAND", "rentals": "UTLEIE", "beachbar": "STRANDBAR", "tavern": "TAVERNA", "shop": "BUTIKK", "scooters": "UTLEIE" },
        "features": { "studio": "Studio", "oneBedroom": "1 Soverom", "twoBedrooms": "2 Soverom", "jacuzzi": "Jacuzzi", "sauna": "Badstue" }
    },
    "fi": {
        "mapTitle": "Rakennusten sijainti",
        "mapLabels": { "parking": "PYSÄKÖINTI", "playground": "LEIKKIPAIKKA", "sauna": "SAUNA", "beach": "RANTA", "rentals": "VUOKRAUS", "beachbar": "RANTABAARI", "tavern": "TAVERNA", "shop": "KAUPPA", "scooters": "VUOKRAUS" },
        "features": { "studio": "Yksiö", "oneBedroom": "1 Makuuhuone", "twoBedrooms": "2 Makuuhuonetta", "jacuzzi": "Poreallas", "sauna": "Sauna" }
    }
};

for (const [lang, data] of Object.entries(translationsData)) {
    const langProp = translationsDict.getProperty(lang);
    if (langProp && Node.isPropertyAssignment(langProp)) {
        const langObj = langProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!langObj) continue;
        
        const strandaProp = langObj.getProperty("stranda");
        if (strandaProp && Node.isPropertyAssignment(strandaProp)) {
            const strandaObj = strandaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (!strandaObj) continue;
            
            // Add mapTitle
            const existingMapTitle = strandaObj.getProperty("mapTitle");
            if (existingMapTitle) existingMapTitle.remove();
            strandaObj.addPropertyAssignment({ name: "mapTitle", initializer: JSON.stringify(data.mapTitle) });
            
            // Add mapLabels
            const existingMapLabels = strandaObj.getProperty("mapLabels");
            if (existingMapLabels) existingMapLabels.remove();
            strandaObj.addPropertyAssignment({ name: "mapLabels", initializer: JSON.stringify(data.mapLabels) });
            
            // Add features
            const existingFeatures = strandaObj.getProperty("features");
            if (existingFeatures) existingFeatures.remove();
            strandaObj.addPropertyAssignment({ name: "features", initializer: JSON.stringify(data.features) });
        }
    }
}

sourceFile.saveSync();
console.log("Translations injected.");
