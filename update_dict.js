const fs = require('fs');

const tags = {
    history: { pl: "Historia", en: "History", de: "Geschichte", cs: "Historie", lt: "Istorija" },
    architecture: { pl: "Architektura", en: "Architecture", de: "Architektur", cs: "Architektura", lt: "Architektūra" },
    education: { pl: "Edukacja", en: "Education", de: "Bildung", cs: "Vzdělávání", lt: "Švietimas" },
    monument: { pl: "Zabytek", en: "Monument", de: "Denkmal", cs: "Památka", lt: "Paminklas" },
    technology: { pl: "Technika", en: "Technology", de: "Technik", cs: "Technika", lt: "Technologija" },
    gizycko: { pl: "Giżycko", en: "Giżycko", de: "Lötzen (Giżycko)", cs: "Giżycko", lt: "Gižyckas" },
    sailing: { pl: "Żeglarstwo", en: "Sailing", de: "Segeln", cs: "Plachtění", lt: "Buriavimas" },
    recreation: { pl: "Rekreacja", en: "Recreation", de: "Erholung", cs: "Rekreace", lt: "Poilsis" },
    center: { pl: "Centrum", en: "Center", de: "Zentrum", cs: "Centrum", lt: "Centras" },
    nature: { pl: "Natura", en: "Nature", de: "Natur", cs: "Příroda", lt: "Gamta" },
    silence: { pl: "Cisza", en: "Silence", de: "Stille", cs: "Ticho", lt: "Tyla" },
    landscape: { pl: "Krajobraz", en: "Landscape", de: "Landschaft", cs: "Krajina", lt: "Kraštovaizdis" },
    ww2: { pl: "II Wojna Światowa", en: "World War II", de: "Zweiter Weltkrieg", cs: "2. světová válka", lt: "Antrasis pasaulinis karas" },
    museum: { pl: "Muzeum", en: "Museum", de: "Museum", cs: "Muzeum", lt: "Muziejus" },
    view: { pl: "Widok", en: "View", de: "Aussicht", cs: "Výhled", lt: "Vaizdas" },
    cafe: { pl: "Kawiarnia", en: "Cafe", de: "Café", cs: "Kavárna", lt: "Kavinė" },
    hotel: { pl: "Hotel", en: "Hotel", de: "Hotel", cs: "Hotel", lt: "Viešbutis" },
    animals: { pl: "Zwierzęta", en: "Animals", de: "Tiere", cs: "Zvířata", lt: "Gyvūnai" }
};

const showOnMap = {
    pl: "Pokaż na mapie",
    en: "Show on map",
    de: "Auf der Karte anzeigen",
    cs: "Zobrazit na mapě",
    lt: "Rodyti žemėlapyje"
};

const files = ['pl.json', 'en.json', 'de.json', 'cs.json', 'lt.json'];
const langs = ['pl', 'en', 'de', 'cs', 'lt'];

for (let i = 0; i < files.length; i++) {
    const file = `/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/src/i18n/dictionaries/${files[i]}`;
    const lang = langs[i];
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    if (!data.attractionsPage.tags) {
        data.attractionsPage.tags = {};
    }
    
    for (const [key, value] of Object.entries(tags)) {
        data.attractionsPage.tags[key] = value[lang];
    }
    
    data.attractionsPage.showOnMap = showOnMap[lang];
    
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

console.log("Updated dictionaries!");
