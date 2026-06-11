const fs = require('fs');
let stranda = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// I will just remove the badly formatted B101, B104, B105, B302 that I injected at the end of the file, then re-insert them properly.
// The badly formatted ones start with:
//     'B101': {
// ...
//         idoBookingId: '36'
//     },
// Let's replace the whole block I added.
const blockStart = "    'B101': {";
const blockEnd = "        idoBookingId: '36'\n    },";

const startIdx = stranda.indexOf(blockStart);
const endIdx = stranda.indexOf(blockEnd) + blockEnd.length;

if (startIdx !== -1 && endIdx !== -1) {
    stranda = stranda.substring(0, startIdx) + stranda.substring(endIdx);
}

const properApartments = `
    'B101': {
        id: 'B101',
        title: \`Apartament B101 Suite 2+2\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B101 znajduje się na parterze budynku B.\`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '35',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B104': {
        id: 'B104',
        title: \`Apartament B104 Suite 2+2\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B104 znajduje się na parterze budynku B.\`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '20',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B105': {
        id: 'B105',
        title: \`Apartament B105 Suite 2+2\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B105 znajduje się na parterze budynku B.\`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '21',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B302': {
        id: 'B302',
        title: \`Apartament B302 Suite 2+2\`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: \`Apartament B302 znajduje się na drugim piętrze budynku B.\`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '36',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
`;

stranda = stranda.replace(/export const strandaApartments: Record<string, Apartment> = {/, "export const strandaApartments: Record<string, Apartment> = {\n" + properApartments);

fs.writeFileSync('src/data/stranda-apartments.ts', stranda, 'utf8');
console.log('Fixed apartments in stranda-apartments.ts');

