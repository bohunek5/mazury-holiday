const fs = require('fs');

const path = './src/lib/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const featuresByLang = {
  pl: {
    studio: "Studio",
    oneBedroom: "1 Sypialnia",
    twoBedrooms: "2 Sypialnie",
    jacuzzi: "Jacuzzi",
    sauna: "Sauna"
  },
  en: {
    studio: "Studio",
    oneBedroom: "1 Bedroom",
    twoBedrooms: "2 Bedrooms",
    jacuzzi: "Jacuzzi",
    sauna: "Sauna"
  },
  de: {
    studio: "Studio",
    oneBedroom: "1 Schlafzimmer",
    twoBedrooms: "2 Schlafzimmer",
    jacuzzi: "Whirlpool",
    sauna: "Sauna"
  },
  lt: {
    studio: "Studija",
    oneBedroom: "1 Miegamasis",
    twoBedrooms: "2 Miegamieji",
    jacuzzi: "Sūkurinė vonia",
    sauna: "Pirtis"
  },
  lv: {
    studio: "Studija",
    oneBedroom: "1 Guļamistaba",
    twoBedrooms: "2 Guļamistabas",
    jacuzzi: "Burbuļvanna",
    sauna: "Pirts"
  },
  ee: {
    studio: "Stuudio",
    oneBedroom: "1 Magamistuba",
    twoBedrooms: "2 Magamistuba",
    jacuzzi: "Mullivann",
    sauna: "Saun"
  },
  ru: {
    studio: "Студия",
    oneBedroom: "1 Спальня",
    twoBedrooms: "2 Спальни",
    jacuzzi: "Джакузи",
    sauna: "Сауна"
  }
};

const langs = ['en', 'de', 'lt', 'lv', 'ee', 'ru'];
// Add to pl as well. Wait, in pl it starts at the top.
const allLangs = ['pl', ...langs];

allLangs.forEach(lang => {
  const marker = lang === 'pl' ? `"stranda": {` : `    "${lang}": {\n      "stranda": {`;
  const replacement = lang === 'pl' ? `"stranda": {\n      "features": ${JSON.stringify(featuresByLang[lang], null, 8).trim().replace(/}$/, '      }')},` : `    "${lang}": {\n      "stranda": {\n        "features": ${JSON.stringify(featuresByLang[lang], null, 10).trim().replace(/}$/, '        }')},`;
  
  if (lang === 'pl') {
    content = content.replace(marker, replacement);
  } else {
    // Need to find the stranda block under the specific language
    const langStart = content.indexOf(`"${lang}": {`);
    if (langStart !== -1) {
      const strandaStart = content.indexOf(`"stranda": {`, langStart);
      if (strandaStart !== -1) {
        content = content.substring(0, strandaStart) + `"stranda": {\n        "features": ${JSON.stringify(featuresByLang[lang], null, 10).trim().replace(/}$/, '        }')},\n` + content.substring(strandaStart + `"stranda": {`.length + 1);
      }
    }
  }
});

// We also need to translate the labels in details.items: roomBedroom2
const detailsByLang = {
  pl: { roomBedroom2: "Sypialnia 2" },
  en: { roomBedroom2: "Bedroom 2" },
  de: { roomBedroom2: "Schlafzimmer 2" },
  lt: { roomBedroom2: "Miegamasis 2" },
  lv: { roomBedroom2: "Guļamistaba 2" },
  ee: { roomBedroom2: "Magamistuba 2" },
  ru: { roomBedroom2: "Спальня 2" }
};

allLangs.forEach(lang => {
  if (lang === 'pl') {
    content = content.replace(
      /"roomBedroom": "Sypialnia",/g,
      `"roomBedroom": "Sypialnia",\n          "roomBedroom2": "Sypialnia 2",`
    );
  } else {
    const langStart = content.indexOf(`"${lang}": {`);
    if (langStart !== -1) {
        const bd = detailsByLang[lang].roomBedroom2;
        content = content.substring(0, langStart) + content.substring(langStart).replace(
            /"roomBedroom": "(.*?)",/,
            `"roomBedroom": "$1",\n            "roomBedroom2": "${bd}",`
        );
    }
  }
});

fs.writeFileSync(path, content, 'utf8');
console.log('Done features & details translations');
