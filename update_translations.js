const fs = require('fs');

const data = fs.readFileSync('src/lib/translations.ts', 'utf8');

const apartmentNamesTranslations = {
    pl: {
        "Z 1 sypialnią i jacuzzi na dachu": "Z 1 sypialnią i jacuzzi na dachu",
        "Z 2 sypialniami i jacuzzi na dachu": "Z 2 sypialniami i jacuzzi na dachu",
        "Z 2 sypialniami jacuzzi i sauną": "Z 2 sypialniami jacuzzi i sauną",
        "Z dwoma sypialniami": "Z dwoma sypialniami",
        "Z dwoma sypialniami(A306)": "Z dwoma sypialniami",
        "Z dwoma sypialniami i jacuzzi": "Z dwoma sypialniami i jacuzzi",
        "Z jacuzzi na tarasie": "Z jacuzzi na tarasie",
        "Z jedną sypialnią": "Z jedną sypialnią",
        "Z jedną sypialnią i jacuzzi": "Z jedną sypialnią i jacuzzi",
        "Studio z jacuzzi na dachu": "Studio z jacuzzi na dachu",
        "Studio": "Studio",
        "Apartament C z 2 sypialniami": "Apartament C z 2 sypialniami",
        "B106 z dwoma sypialniami": "B106 z dwoma sypialniami",
        "C304 Studio": "C304 Studio",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Apartament Gigu z 1 sypialnią",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Domki Skorupki"
    },
    en: {
        "Z 1 sypialnią i jacuzzi na dachu": "1 Bedroom & Rooftop Jacuzzi",
        "Z 2 sypialniami i jacuzzi na dachu": "2 Bedrooms & Rooftop Jacuzzi",
        "Z 2 sypialniami jacuzzi i sauną": "2 Bedrooms, Jacuzzi & Sauna",
        "Z dwoma sypialniami": "2 Bedrooms",
        "Z dwoma sypialniami(A306)": "2 Bedrooms",
        "Z dwoma sypialniami i jacuzzi": "2 Bedrooms & Jacuzzi",
        "Z jacuzzi na tarasie": "Jacuzzi on Terrace",
        "Z jedną sypialnią": "1 Bedroom",
        "Z jedną sypialnią i jacuzzi": "1 Bedroom & Jacuzzi",
        "Studio z jacuzzi na dachu": "Studio & Rooftop Jacuzzi",
        "Studio": "Studio",
        "Apartament C z 2 sypialniami": "Apartment C with 2 Bedrooms",
        "B106 z dwoma sypialniami": "B106 with 2 Bedrooms",
        "C304 Studio": "C304 Studio",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Gigu 1 Bedroom Apartment",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - 2 Bedroom Apartment (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Skorupki Cottages"
    },
    de: {
        "Z 1 sypialnią i jacuzzi na dachu": "1 Schlafzimmer & Dach-Whirlpool",
        "Z 2 sypialniami i jacuzzi na dachu": "2 Schlafzimmer & Dach-Whirlpool",
        "Z 2 sypialniami jacuzzi i sauną": "2 Schlafzimmer, Whirlpool & Sauna",
        "Z dwoma sypialniami": "2 Schlafzimmer",
        "Z dwoma sypialniami(A306)": "2 Schlafzimmer",
        "Z dwoma sypialniami i jacuzzi": "2 Schlafzimmer & Whirlpool",
        "Z jacuzzi na tarasie": "Whirlpool auf der Terrasse",
        "Z jedną sypialnią": "1 Schlafzimmer",
        "Z jedną sypialnią i jacuzzi": "1 Schlafzimmer & Whirlpool",
        "Studio z jacuzzi na dachu": "Studio & Dach-Whirlpool",
        "Studio": "Studio",
        "Apartament C z 2 sypialniami": "Apartment C mit 2 Schlafzimmern",
        "B106 z dwoma sypialniami": "B106 mit 2 Schlafzimmern",
        "C304 Studio": "C304 Studio",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Gigu 1-Zimmer-Apartment",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - 2-Zimmer-Apartment (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Skorupki Ferienhäuser"
    },
    lt: {
        "Z 1 sypialnią i jacuzzi na dachu": "1 miegamasis ir sūkurinė vonia ant stogo",
        "Z 2 sypialniami i jacuzzi na dachu": "2 miegamieji ir sūkurinė vonia ant stogo",
        "Z 2 sypialniami jacuzzi i sauną": "2 miegamieji, sūkurinė vonia ir pirtis",
        "Z dwoma sypialniami": "2 miegamieji",
        "Z dwoma sypialniami(A306)": "2 miegamieji",
        "Z dwoma sypialniami i jacuzzi": "2 miegamieji ir sūkurinė vonia",
        "Z jacuzzi na tarasie": "Sūkurinė vonia terasoje",
        "Z jedną sypialnią": "1 miegamasis",
        "Z jedną sypialnią i jacuzzi": "1 miegamasis ir sūkurinė vonia",
        "Studio z jacuzzi na dachu": "Studija ir sūkurinė vonia ant stogo",
        "Studio": "Studija",
        "Apartament C z 2 sypialniami": "C apartamentas su 2 miegamaisiais",
        "B106 z dwoma sypialniami": "B106 su 2 miegamaisiais",
        "C304 Studio": "C304 studija",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Gigu 1 miegamojo apartamentas",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - 2 miegamųjų apartamentas (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Skorupki nameliai"
    },
    cs: {
        "Z 1 sypialnią i jacuzzi na dachu": "1 ložnice a střešní vířivka",
        "Z 2 sypialniami i jacuzzi na dachu": "2 ložnice a střešní vířivka",
        "Z 2 sypialniami jacuzzi i sauną": "2 ložnice, vířivka a sauna",
        "Z dwoma sypialniami": "2 ložnice",
        "Z dwoma sypialniami(A306)": "2 ložnice",
        "Z dwoma sypialniami i jacuzzi": "2 ložnice a vířivka",
        "Z jacuzzi na tarasie": "Vířivka na terase",
        "Z jedną sypialnią": "1 ložnice",
        "Z jedną sypialnią i jacuzzi": "1 ložnice a vířivka",
        "Studio z jacuzzi na dachu": "Studio a střešní vířivka",
        "Studio": "Studio",
        "Apartament C z 2 sypialniami": "Apartmán C se 2 ložnicemi",
        "B106 z dwoma sypialniami": "B106 se 2 ložnicemi",
        "C304 Studio": "Studio C304",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Apartmán Gigu s 1 ložnicí",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - Apartmán se 2 ložnicemi (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Chaty Skorupki"
    },
    es: {
        "Z 1 sypialnią i jacuzzi na dachu": "1 dormitorio y jacuzzi en la azotea",
        "Z 2 sypialniami i jacuzzi na dachu": "2 dormitorios y jacuzzi en la azotea",
        "Z 2 sypialniami jacuzzi i sauną": "2 dormitorios, jacuzzi y sauna",
        "Z dwoma sypialniami": "2 dormitorios",
        "Z dwoma sypialniami(A306)": "2 dormitorios",
        "Z dwoma sypialniami i jacuzzi": "2 dormitorios y jacuzzi",
        "Z jacuzzi na tarasie": "Jacuzzi en la terraza",
        "Z jedną sypialnią": "1 dormitorio",
        "Z jedną sypialnią i jacuzzi": "1 dormitorio y jacuzzi",
        "Studio z jacuzzi na dachu": "Estudio y jacuzzi en la azotea",
        "Studio": "Estudio",
        "Apartament C z 2 sypialniami": "Apartamento C con 2 dormitorios",
        "B106 z dwoma sypialniami": "B106 con 2 dormitorios",
        "C304 Studio": "Estudio C304",
        "Mikołajki - Apartament Gigu z 1 sypialnią": "Mikołajki - Apartamento Gigu de 1 dormitorio",
        "Giżycko Kisajno - Apartament z dwoma sypialniami (nr15)": "Giżycko Kisajno - Apartamento de 2 dormitorios (nr15)",
        "Stillo 30 VIP": "Stillo 30 VIP",
        "Domki Skorupki": "Cabañas Skorupki"
    }
};

let lines = data.split('\n');
let newLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    
    // Inject right after language object starts
    if (line.match(/^  "([a-z]{2})": \{/)) {
        const lang = line.match(/^  "([a-z]{2})": \{/)[1];
        if (apartmentNamesTranslations[lang]) {
            newLines.push(`    "apartmentNames": ${JSON.stringify(apartmentNamesTranslations[lang], null, 6).replace(/}$/, '    },')}`);
        }
    }
}

fs.writeFileSync('src/lib/translations.ts', newLines.join('\n'));
