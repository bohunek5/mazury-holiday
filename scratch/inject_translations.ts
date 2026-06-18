import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from "ts-morph";
import fs from "fs";

const project = new Project();
const sourceFile = project.addSourceFileAtPath("/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/lib/translations.ts");

const strandaEn = {
    filters: {
        jacuzzi: "Jacuzzi", size: "Size", sizeAny: "Any", size4: "Max 4 people", size6: "Max 6 people",
        floor: "Floor", floorAny: "Any", floorParter: "Ground floor", floorPietro: "Upper floor",
        sauna: "Sauna", floor1: "1st Floor", floor2: "2nd Floor", floor3: "3rd Floor"
    },
    mapTitle: "Buildings Location",
    mapLabels: { parking: "PARKING", playground: "PLAYGROUND", sauna: "SAUNA", beach: "BEACH", rentals: "RENTALS", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "SHOP", scooters: "RENTALS" },
    features: { studio: "Studio", oneBedroom: "1 Bedroom", twoBedrooms: "2 Bedrooms", jacuzzi: "Jacuzzi", sauna: "Sauna" }
};

const strandaDe = {
    filters: {
        jacuzzi: "Whirlpool", size: "Größe", sizeAny: "Beliebig", size4: "Max 4 Personen", size6: "Max 6 Personen",
        floor: "Etage", floorAny: "Beliebig", floorParter: "Erdgeschoss", floorPietro: "Obergeschoss",
        sauna: "Sauna", floor1: "1. Etage", floor2: "2. Etage", floor3: "3. Etage"
    },
    mapTitle: "Lage der Gebäude",
    mapLabels: { parking: "PARKPLATZ", playground: "SPIELPLATZ", sauna: "SAUNA", beach: "STRAND", rentals: "VERLEIH", beachbar: "BEACH BAR", tavern: "TAVERNE", shop: "GESCHÄFT", scooters: "VERLEIH" },
    features: { studio: "Studio", oneBedroom: "1 Schlafzimmer", twoBedrooms: "2 Schlafzimmer", jacuzzi: "Whirlpool", sauna: "Sauna" }
};

const defaultStranda = {
    filters: strandaEn.filters,
    mapTitle: strandaEn.mapTitle,
    mapLabels: strandaEn.mapLabels,
    features: strandaEn.features
};

const fuledaEn = {
    parter: {
        description: `Apartment with two bedrooms located on the ground floor is a beautifully and stylishly finished property. Situated on Lake Dobskie, which is a quiet zone, it guarantees relaxation in peace and quiet, surrounded by beautiful, pristine Masurian nature.\n\nOur apartments are located in Fuleda on a peninsula on the shore of the lake. It offers a beautiful panoramic view of Lake Dobskie, Cormorant Island, and Helena Island. The apartment is luxuriously finished and ensures a high level of comfort. On site, you can use private access to the water, a barbecue, and a bonfire place. Giżycko (about 12km away) allows you to enjoy many tourist attractions, restaurants, and pubs. The location of the property also makes it easy to explore Masuria in terms of nature and history.\n\nThe Fuleda Apartment (ground floor) with a direct view of Lake Dobskie is located on the ground floor of the building, has two bedrooms, a kitchenette, a bathroom with a shower, and two covered terraces: one at the front of the building with a direct view of Lake Dobskie, the other at the back of the building.\n\nLocation: ground floor\nMaximum number of people: 2+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, fireplace, fold-out 2-person sofa, table, chairs, vacuum cleaner, iron, ironing board, air conditioning, clothes dryer, wardrobe\nBedroom 2 equipment: TV, 160x200 bed, two bedside tables, set of bedding, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, hair straightener, towels, shower gel, soap, body lotion\nFront terrace: armchairs, table, cocoon chair\nBack terrace: terrace furniture set, charcoal grill\nPrivate path to the lake with a bonfire and barbecue area, hammock, two deckchairs\nOther: internet, wifi\nThe apartment is fully equipped, heated, and provides a comfortable stay all year round.\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż where the Wolf's Lair - Hitler's headquarters is located. Nearby forests, meadows, cycling routes, playgrounds. The nearest shop is about 3km away.`
    },
    pietro: {
        description: `A beautifully finished apartment with two bedrooms and a mezzanine, located on the upper floor with a breathtaking view of Lake Dobskie. This peaceful, nature-surrounded location is perfect for complete relaxation.\n\nThe apartment offers a spacious living room with a kitchenette, a bathroom with a shower, and two bedrooms. The master bedroom features a 160x200 bed, while the second bedroom has two single beds. There is also an additional sleeping area on the mezzanine. The apartment is equipped with air conditioning, ensuring comfort even on hot days.\n\nLocation: upper floor\nMaximum number of people: 4+2\nKitchen equipment: Tchibo capsule coffee machine, stove, oven, fridge, dishwasher, set of dishes and cutlery\nBedroom 1 equipment: TV, 160x200 bed, wardrobe, air conditioning\nBedroom 2 equipment: two single beds, wardrobe\nBathroom equipment: shower, washing machine, hair dryer, towels, cosmetics\nTerrace: comfortable terrace furniture set with an amazing view of the lake.\nPrivate path to the lake with a bonfire and barbecue area, hammock.\nOther: internet, wifi\n\nFuleda is located about 10km from Giżycko, 20km from Kętrzyn and Gierłoż.`
    }
};

const fuledaDe = {
    parter: {
        description: `Das Apartment mit zwei Schlafzimmern im Erdgeschoss ist eine wunderschön und stilvoll eingerichtete Unterkunft. Am Dobskie-See gelegen, der eine Ruhezone ist, garantiert es Entspannung in Ruhe und Frieden, umgeben von wunderschöner, unberührter masurischer Natur.\n\nUnsere Apartments befinden sich in Fuleda auf einer Halbinsel am Ufer des Sees. Es bietet einen wunderschönen Panoramablick auf den Dobskie-See, die Kormoraninsel und die Helena-Insel. Das Apartment ist luxuriös ausgestattet und bietet hohen Komfort. Vor Ort können Sie den privaten Zugang zum Wasser, einen Grill und einen Lagerfeuerplatz nutzen. Giżycko (ca. 12 km entfernt) bietet viele Touristenattraktionen, Restaurants und Pubs.\n\nLage: Erdgeschoss\nMaximale Personenanzahl: 2+2\nKüchenausstattung: Tchibo Kapselkaffeemaschine, Herd, Backofen, Kühlschrank, Geschirrspüler, Geschirr und Besteck\nSchlafzimmer 1 Ausstattung: TV, Kamin, ausziehbares 2-Personen-Sofa, Tisch, Stühle, Staubsauger, Bügeleisen, Bügelbrett, Klimaanlage, Wäscheständer, Kleiderschrank\nSchlafzimmer 2 Ausstattung: TV, 160x200 Bett, zwei Nachttische, Bettwäsche, Kleiderschrank\nBadezimmerausstattung: Dusche, Waschmaschine, Haartrockner, Haarglätter, Handtücher, Duschgel, Seife, Körperlotion\nVordere Terrasse: Sessel, Tisch, Kokonsessel\nHintere Terrasse: Terrassenmöbel-Set, Holzkohlegrill\nPrivater Weg zum See mit Lagerfeuer- und Grillplatz, Hängematte, zwei Liegestühle\nSonstiges: Internet, WLAN\nDas Apartment ist komplett ausgestattet, beheizt und bietet das ganze Jahr über einen komfortablen Aufenthalt.\n\nFuleda liegt etwa 10 km von Giżycko, 20 km von Kętrzyn und Gierłoż entfernt.`
    },
    pietro: {
        description: `Ein wunderschön eingerichtetes Apartment mit zwei Schlafzimmern und einem Zwischengeschoss, im Obergeschoss gelegen mit atemberaubendem Blick auf den Dobskie-See. Diese friedliche, von Natur umgebene Lage ist perfekt für absolute Entspannung.\n\nDas Apartment bietet ein geräumiges Wohnzimmer mit Küchenzeile, ein Badezimmer mit Dusche und zwei Schlafzimmer. Das Hauptschlafzimmer verfügt über ein 160x200 Bett, während das zweite Schlafzimmer zwei Einzelbetten hat. Es gibt auch einen zusätzlichen Schlafbereich im Zwischengeschoss. Das Apartment ist mit Klimaanlage ausgestattet.\n\nLage: Obergeschoss\nMaximale Personenanzahl: 4+2\nKüchenausstattung: Tchibo Kapselkaffeemaschine, Herd, Backofen, Kühlschrank, Geschirrspüler, Geschirr und Besteck\nSchlafzimmer 1 Ausstattung: TV, 160x200 Bett, Kleiderschrank, Klimaanlage\nSchlafzimmer 2 Ausstattung: zwei Einzelbetten, Kleiderschrank\nBadezimmerausstattung: Dusche, Waschmaschine, Haartrockner, Handtücher, Kosmetik\nTerrasse: komfortables Terrassenmöbel-Set mit herrlichem Blick auf den See.\nPrivater Weg zum See mit Lagerfeuer- und Grillplatz, Hängematte.\nSonstiges: Internet, WLAN\n\nFuleda liegt etwa 10 km von Giżycko, 20 km von Kętrzyn und Gierłoż entfernt.`
    }
};

const pokojeFuledaEn = {
    heroTitle: "Rooms Fuleda",
    description: `We offer two rooms for rent: one with a double bed, the other with two single beds, a bathroom with a shower and a toilet. There is a covered terrace next to the rooms. In a separate building located 10m from the rooms, there is a kitchen with an additional toilet. Everything is located on the Fuledzki Róg peninsula on the shores of Lake Dobskie, with a quiet zone on the fenced grounds of the Fuleda Farm. A wonderful place for people who appreciate wild nature, peace, and quiet. Away from the city.\n\nA terraced building located on private allotments by Lake Dobskie. In the main building for private use there are two rooms, a bathroom with a shower and a toilet, and a covered terrace. Opposite the terrace, at a distance of about 10m, there is a building with a kitchen and a second toilet (also for private use). On the other side of the building, at a distance of about 20m, there is a private path to the lake, where there is a viewing terrace with a grill, a place for a bonfire, and a rowing boat.\n\nRecommended for families with children, anglers, mushroom pickers, and nature lovers.\n\nEquipment: Wifi, TV, washing machine, iron, ironing board, hair dryer, vacuum cleaner, fan, microwave, toaster, kettle, gas stove, fridge, coffee machine, dishes, pots, cutlery, cups.
Bedding and towels provided upon check-in.

Room 1: bed for 2 people, access to the terrace, vacuum cleaner, hair dryer, iron, ironing board.
Room 2: two single beds, TV, access to the terrace.
Bathroom: shower, washing machine, hair dryer, hair straightener, towels, bathrobes, cosmetics.
Kitchen (in a building 10m away): fridge, dishwasher, microwave, toaster, set of dishes and cutlery.
Terrace: spacious terrace, private path to the lake, place for a grill and bonfire.`
};

const pokojeFuledaDe = {
    heroTitle: "Zimmer Fuleda",
    description: `Wir vermieten zwei Zimmer: eines mit einem Doppelbett, das andere mit zwei Einzelbetten, ein Badezimmer mit Dusche und WC. Neben den Zimmern befindet sich eine überdachte Terrasse. In einem separaten Gebäude, 10 m von den Zimmern entfernt, befindet sich eine Küche mit einem zusätzlichen WC. Alles befindet sich auf der Halbinsel Fuledzki Róg am Ufer des Dobskie-Sees, mit einer Ruhezone auf dem eingezäunten Gelände des Bauernhofs Fuleda. Ein wunderbarer Ort für Menschen, die wilde Natur, Ruhe und Frieden schätzen. Weit weg von der Stadt.\n\nEin Reihenhaus auf privaten Kleingärten am Dobskie-See. Im Hauptgebäude stehen zur privaten Nutzung zwei Zimmer, ein Bad mit Dusche und WC sowie eine überdachte Terrasse zur Verfügung. Gegenüber der Terrasse, in ca. 10m Entfernung, befindet sich ein Gebäude mit Küche und einem zweiten WC (ebenfalls zur privaten Nutzung). Auf der anderen Seite des Gebäudes, in einer Entfernung von etwa 20 m, gibt es einen privaten Weg zum See, wo sich eine Aussichtsterrasse mit Grill, ein Lagerfeuerplatz und ein Ruderboot befinden.\n\nEmpfohlen für Familien mit Kindern, Angler, Pilzsammler und Naturliebhaber.\n\nAusstattung: WLAN, TV, Waschmaschine, Bügeleisen, Bügelbrett, Haartrockner, Staubsauger, Ventilator, Mikrowelle, Toaster, Wasserkocher, Gasherd, Kühlschrank, Kaffeemaschine, Geschirr, Töpfe, Besteck, Tassen.
Bettwäsche und Handtücher werden beim Check-in bereitgestellt.

Zimmer 1: Bett für 2 Personen, Zugang zur Terrasse, Staubsauger, Haartrockner, Bügeleisen, Bügelbrett.
Zimmer 2: zwei Einzelbetten, TV, Zugang zur Terrasse.
Badezimmer: Dusche, Waschmaschine, Haartrockner, Haarglätter, Handtücher, Bademäntel, Kosmetik.
Küche (in einem Gebäude 10m entfernt): Kühlschrank, Geschirrspüler, Mikrowelle, Toaster, Geschirr und Besteck.
Terrasse: geräumige Terrasse, privater Weg zum See, Platz für Grill und Lagerfeuer.`
};

const defaultFuleda = fuledaEn;
const defaultPokojeFuleda = pokojeFuledaEn;

const translationsDecl = sourceFile.getVariableDeclarationOrThrow("translations");
const translationsObj = translationsDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const langs = translationsObj.getProperties().filter(p => p.getKind() === SyntaxKind.PropertyAssignment) as PropertyAssignment[];

for (const lang of langs) {
    const langName = lang.getName();
    if (langName === 'pl') continue;
    
    const langObj = lang.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!langObj) continue;
    
    // Stranda
    let strandaProp = langObj.getProperty("stranda") as PropertyAssignment;
    if (strandaProp) {
        const strandaObj = strandaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (strandaObj) {
            const dataToInject = langName === 'en' ? strandaEn : (langName === 'de' ? strandaDe : defaultStranda);
            
            for (const key of ['filters', 'mapTitle', 'mapLabels', 'features']) {
                if (!strandaObj.getProperty(key)) {
                    strandaObj.addPropertyAssignment({ name: key, initializer: JSON.stringify((dataToInject as any)[key]) });
                } else {
                    const prop = strandaObj.getProperty(key) as PropertyAssignment;
                    prop.setInitializer(JSON.stringify((dataToInject as any)[key]));
                }
            }
        }
    }
    
    // Fuleda Apartamenty (fuledaApartment) - wait, it does not exist in translations.ts. Let's add it.
    let fuledaAptProp = langObj.getProperty("fuledaApartment") as PropertyAssignment;
    const fuledaData = langName === 'en' ? fuledaEn : (langName === 'de' ? fuledaDe : defaultFuleda);
    if (!fuledaAptProp) {
        langObj.addPropertyAssignment({ name: "fuledaApartment", initializer: JSON.stringify(fuledaData) });
    } else {
        const obj = fuledaAptProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (obj) fuledaAptProp.setInitializer(JSON.stringify(fuledaData));
    }
    
    // Pokoje Fuleda (pokojeFuledaPage)
    let pokojeFuledaProp = langObj.getProperty("pokojeFuledaPage") as PropertyAssignment;
    const pokojeFuledaData = langName === 'en' ? pokojeFuledaEn : (langName === 'de' ? pokojeFuledaDe : defaultPokojeFuleda);
    if (pokojeFuledaProp) {
        const obj = pokojeFuledaProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (obj) {
            if (!obj.getProperty("description")) {
                obj.addPropertyAssignment({ name: "description", initializer: JSON.stringify(pokojeFuledaData.description) });
            } else {
                const prop = obj.getProperty("description") as PropertyAssignment;
                prop.setInitializer(JSON.stringify(pokojeFuledaData.description));
            }
        }
    }
}

sourceFile.saveSync();
console.log("Updated translations.ts with all missing data.");
