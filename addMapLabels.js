const fs = require('fs');

const path = './src/lib/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const mapLabelsByLang = {
  pl: { parking: "PARKING", playground: "PLAC ZABAW", sauna: "SAUNA", beach: "PLAŻA", scooters: "WYPOŻYCZALNIA", beachbar: "BEACH BAR", tavern: "TAWERNA", shop: "SKLEPIK" },
  en: { parking: "PARKING", playground: "PLAYGROUND", sauna: "SAUNA", beach: "BEACH", scooters: "RENTALS", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "SHOP" },
  de: { parking: "PARKPLATZ", playground: "SPIELPLATZ", sauna: "SAUNA", beach: "STRAND", scooters: "VERLEIH", beachbar: "BEACH BAR", tavern: "TAVERNE", shop: "GESCHÄFT" },
  lt: { parking: "STOVĖJIMO AIKŠTELĖ", playground: "ŽAIDIMŲ AIKŠTELĖ", sauna: "PIRTIS", beach: "PAPLŪDIMYS", scooters: "NUOMA", beachbar: "BEACH BAR", tavern: "SMUKLĖ", shop: "PARDUOTUVĖ" },
  lv: { parking: "STĀVVIETA", playground: "ROTAĻU LAUKUMS", sauna: "PIRTS", beach: "PLUDMALE", scooters: "NOMA", beachbar: "BEACH BAR", tavern: "KROGS", shop: "VEIKALS" },
  ee: { parking: "PARKIMINE", playground: "MÄNGUVÄLJAK", sauna: "SAUN", beach: "RAND", scooters: "RENT", beachbar: "BEACH BAR", tavern: "TAVERN", shop: "KAUPLUS" },
  ru: { parking: "ПАРКОВКА", playground: "ДЕТСКАЯ ПЛОЩАДКА", sauna: "САУНА", beach: "ПЛЯЖ", scooters: "ПРОКАТ", beachbar: "BEACH BAR", tavern: "ТАВЕРНА", shop: "МАГАЗИН" }
};

const allLangs = ['pl', 'en', 'de', 'lt', 'lv', 'ee', 'ru'];

allLangs.forEach(lang => {
  const mapStr = `"mapLabels": ${JSON.stringify(mapLabelsByLang[lang], null, 8).trim().replace(/}$/, '      }')},`;
  if (lang === 'pl') {
    content = content.replace(/"features": {/g, mapStr + '\n      "features": {');
  } else {
    const langStart = content.indexOf(`"${lang}": {`);
    if (langStart !== -1) {
      const strandaStart = content.indexOf(`"stranda": {`, langStart);
      if (strandaStart !== -1) {
         content = content.replace(
           content.substring(strandaStart, strandaStart + 50),
           content.substring(strandaStart, strandaStart + 50).replace(/"features": {/, `        "mapLabels": ${JSON.stringify(mapLabelsByLang[lang], null, 10).trim().replace(/}$/, '        }')},\n        "features": {`)
         );
      }
    }
  }
});

fs.writeFileSync(path, content, 'utf8');
console.log('Done map labels translations');
