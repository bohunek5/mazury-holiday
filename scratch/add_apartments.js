const fs = require('fs');
let stranda = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// Fix incorrect IDs
stranda = stranda.replace(/id: 'B304',[\s\S]*?idoBookingId: '24',/g, match => match.replace(/idoBookingId: '24',/, ''));
stranda = stranda.replace(/id: 'B305',[\s\S]*?idoBookingId: '24',/g, match => match.replace(/idoBookingId: '24',/, ''));
stranda = stranda.replace(/id: 'C205',[\s\S]*?idoBookingId: '41',/g, match => match.replace(/idoBookingId: '41',/, ''));

// Add missing apartments
const newApartments = `
    'B101': {
        id: 'B101',
        title: \`Apartament B101 Suite\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B101 znajduje się na parterze budynku B.\`,
        descKey: 'B101',
        images: [
            '/images/apartments/stranda/b102/1.jpg',
            '/images/apartments/stranda/b102/2.jpg'
        ],
        features: [
            { icon: 'wifi', text: 'Darmowe WiFi' },
            { icon: 'kitchen', text: 'Aneks kuchenny' },
            { icon: 'shower', text: 'Prysznic' },
            { icon: 'tv', text: 'Smart TV' },
            { icon: 'parking', text: 'Parking' }
        ],
        area: 40,
        floor: 0,
        beds: '1 łóżko podwójne, 1 sofa',
        idoBookingId: '35'
    },
    'B104': {
        id: 'B104',
        title: \`Apartament B104 Suite\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B104 znajduje się na parterze budynku B.\`,
        descKey: 'B104',
        images: [
            '/images/apartments/stranda/b102/1.jpg',
            '/images/apartments/stranda/b102/2.jpg'
        ],
        features: [
            { icon: 'wifi', text: 'Darmowe WiFi' },
            { icon: 'kitchen', text: 'Aneks kuchenny' },
            { icon: 'shower', text: 'Prysznic' },
            { icon: 'tv', text: 'Smart TV' },
            { icon: 'parking', text: 'Parking' }
        ],
        area: 40,
        floor: 0,
        beds: '1 łóżko podwójne, 1 sofa',
        idoBookingId: '20'
    },
    'B105': {
        id: 'B105',
        title: \`Apartament B105 Suite\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B105 znajduje się na parterze budynku B.\`,
        descKey: 'B105',
        images: [
            '/images/apartments/stranda/b102/1.jpg',
            '/images/apartments/stranda/b102/2.jpg'
        ],
        features: [
            { icon: 'wifi', text: 'Darmowe WiFi' },
            { icon: 'kitchen', text: 'Aneks kuchenny' },
            { icon: 'shower', text: 'Prysznic' },
            { icon: 'tv', text: 'Smart TV' },
            { icon: 'parking', text: 'Parking' }
        ],
        area: 40,
        floor: 0,
        beds: '1 łóżko podwójne, 1 sofa',
        idoBookingId: '21'
    },
    'B302': {
        id: 'B302',
        title: \`Apartament B302 Suite\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B302 znajduje się na drugim piętrze budynku B.\`,
        descKey: 'B302',
        images: [
            '/images/apartments/stranda/b102/1.jpg',
            '/images/apartments/stranda/b102/2.jpg'
        ],
        features: [
            { icon: 'wifi', text: 'Darmowe WiFi' },
            { icon: 'kitchen', text: 'Aneks kuchenny' },
            { icon: 'shower', text: 'Prysznic' },
            { icon: 'tv', text: 'Smart TV' },
            { icon: 'parking', text: 'Parking' }
        ],
        area: 40,
        floor: 2,
        beds: '1 łóżko podwójne, 1 sofa',
        idoBookingId: '36'
    },
`;

if (!stranda.includes("'B101': {")) {
    stranda = stranda.replace(/export const strandaApartments: Record<string, Apartment> = {/, "export const strandaApartments: Record<string, Apartment> = {\n" + newApartments);
}

fs.writeFileSync('src/data/stranda-apartments.ts', stranda, 'utf8');
console.log('Apartments added to stranda-apartments.ts');

let translations = fs.readFileSync('src/lib/translations.ts', 'utf8');

const missingPl = `            B101: "Apartament B101 znajduje się na parterze budynku B, oferuje komfortowe wnętrze, salon z aneksem kuchennym, łazienkę oraz taras.",
            B104: "Apartament B104 znajduje się na parterze budynku B, posiada salon z aneksem kuchennym, osobną sypialnię, łazienkę z prysznicem i wygodny taras.",
            B105: "Apartament B105 znajduje się na parterze budynku B, oferuje przestronny salon z aneksem kuchennym, sypialnię, łazienkę i taras.",
            B302: "Apartament B302 znajduje się na drugim piętrze budynku B, zapewnia salon z aneksem kuchennym, sypialnię, łazienkę oraz balkon z pięknym widokiem.",
            C_1_sypialnia: "Apartament w budynku C z 1 sypialnią, oferujący komfortowy wypoczynek dla maksymalnie 4 osób.",
            C_Studio: "Studio w budynku C, to doskonałe miejsce na wypoczynek z widokiem na Zatokę Tracz.",
            C_2_sypialnie: "Przestronny apartament w budynku C z 2 sypialniami, idealny dla rodzin.",`;

const missingEn = `            B101: "Apartment B101 is located on the ground floor of building B, offering a comfortable interior, a living room with a kitchenette, a bathroom, and a terrace.",
            B104: "Apartment B104 is located on the ground floor of building B, featuring a living room with a kitchenette, a separate bedroom, a bathroom with a shower, and a comfortable terrace.",
            B105: "Apartment B105 is located on the ground floor of building B, offering a spacious living room with a kitchenette, a bedroom, a bathroom, and a terrace.",
            B302: "Apartment B302 is located on the second floor of building B, providing a living room with a kitchenette, a bedroom, a bathroom, and a balcony with a beautiful view.",
            C205: "Studio-type apartments are located in building C, featuring a sleeping area with a double bed, a fold-out sofa for 2 people, a living room with a kitchenette, a bathroom with a shower, and a terrace with a view of Tracz Bay and Stranda port.",
            C_1_sypialnia: "Apartment in building C with 1 bedroom, offering a comfortable stay for up to 4 people.",
            C_Studio: "Studio in building C, a perfect place to relax with a view of Tracz Bay.",
            C_2_sypialnie: "Spacious apartment in building C with 2 bedrooms, perfect for families.",`;

const missingDe = `            B101: "Das Apartment B101 befindet sich im Erdgeschoss von Gebäude B und bietet ein komfortables Interieur, ein Wohnzimmer mit Küchenzeile, ein Badezimmer und eine Terrasse.",
            B104: "Das Apartment B104 befindet sich im Erdgeschoss von Gebäude B und verfügt über ein Wohnzimmer mit Küchenzeile, ein separates Schlafzimmer, ein Badezimmer mit Dusche und eine gemütliche Terrasse.",
            B105: "Das Apartment B105 befindet sich im Erdgeschoss von Gebäude B und bietet ein geräumiges Wohnzimmer mit Küchenzeile, ein Schlafzimmer, ein Badezimmer und eine Terrasse.",
            B302: "Das Apartment B302 befindet sich im zweiten Stock von Gebäude B und bietet ein Wohnzimmer mit Küchenzeile, ein Schlafzimmer, ein Badezimmer und einen Balkon mit schöner Aussicht.",
            C205: "Studio-Apartments befinden sich im Gebäude C, es sind Unterkünfte mit einem Doppelbett, einem Schlafsofa für 2 Personen, einem Wohnzimmer mit Kochnische, einem Badezimmer mit Dusche und einer Terrasse mit Blick auf die Bucht Tracz und den Hafen Stranda.",
            C_1_sypialnia: "Apartment in Gebäude C mit 1 Schlafzimmer, bietet einen komfortablen Aufenthalt für bis zu 4 Personen.",
            C_Studio: "Studio in Gebäude C, ein perfekter Ort zum Entspannen mit Blick auf die Tracz-Bucht.",
            C_2_sypialnie: "Geräumiges Apartment im Gebäude C mit 2 Schlafzimmern, ideal für Familien.",`;

if (!translations.includes("B101:")) {
    // Inject into pl
    translations = translations.replace(/(pl:\s*{\s*[\s\S]*?strandaDescriptions:\s*{)([\s\S]*?)(},)/, (match, p1, p2, p3) => {
        return p1 + p2 + '\n' + missingPl + '\n        ' + p3;
    });

    // Inject into en
    translations = translations.replace(/(en:\s*{\s*[\s\S]*?strandaDescriptions:\s*{)([\s\S]*?)(},)/, (match, p1, p2, p3) => {
        // also fix B304, B305 in EN? They don't have Jacuzzi in EN. They are already correct.
        return p1 + p2 + '\n' + missingEn + '\n        ' + p3;
    });

    // Inject into de
    translations = translations.replace(/(de:\s*{\s*[\s\S]*?strandaDescriptions:\s*{)([\s\S]*?)(},)/, (match, p1, p2, p3) => {
        return p1 + p2 + '\n' + missingDe + '\n        ' + p3;
    });
}

fs.writeFileSync('src/lib/translations.ts', translations, 'utf8');
console.log('Translations added to translations.ts');
