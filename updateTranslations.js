const fs = require('fs');

const path = './src/lib/translations.ts';
let content = fs.readFileSync(path, 'utf8');

const translationsToAdd = {
  en: {
    c: "Studio with 2 bedrooms located in building C, each bedroom has a double bed, living room with kitchenette and sofa bed for 2 people, bathroom with shower and terrace overlooking Tracz bay and Stranda port. Designed for a maximum of 6 people.",
    c_title: "Apartment C with 2 bedrooms"
  },
  de: {
    c: "Studio mit 2 Schlafzimmern im Gebäude C, jedes Schlafzimmer hat ein Doppelbett, Wohnzimmer mit Küchenzeile und Schlafsofa für 2 Personen, Badezimmer mit Dusche und Terrasse mit Blick auf die Tracz-Bucht und den Stranda-Hafen. Ausgelegt für maximal 6 Personen.",
    c_title: "Apartment C mit 2 Schlafzimmern"
  },
  es: {
    c: "Estudio con 2 dormitorios ubicado en el edificio C, cada dormitorio tiene una cama doble, sala de estar con cocina americana y sofá cama para 2 personas, baño con ducha y terraza con vistas a la bahía de Tracz y al puerto de Stranda. Diseñado para un máximo de 6 personas.",
    c_title: "Apartamento C con 2 dormitorios"
  },
  it: {
    c: "Monolocale con 2 camere da letto situato nell'edificio C, ogni camera ha un letto matrimoniale, soggiorno con angolo cottura e divano letto per 2 persone, bagno con doccia e terrazza con vista sulla baia di Tracz e sul porto di Stranda. Progettato per un massimo di 6 persone.",
    c_title: "Appartamento C con 2 camere da letto"
  },
  fr: {
    c: "Studio avec 2 chambres situé dans le bâtiment C, chaque chambre a un lit double, salon avec kitchenette et canapé-lit pour 2 personnes, salle de bain avec douche et terrasse donnant sur la baie de Tracz et le port de Stranda. Conçu pour un maximum de 6 personnes.",
    c_title: "Appartement C avec 2 chambres"
  },
  cs: {
    c: "Studio se 2 ložnicemi v budově C, každá ložnice má manželskou postel, obývací pokoj s kuchyňským koutem a rozkládací pohovkou pro 2 osoby, koupelnu se sprchou a terasu s výhledem na záliv Tracz a přístav Stranda. Určeno pro maximálně 6 osob.",
    c_title: "Apartmán C se 2 ložnicemi"
  },
  lt: {
    c: "Studija su 2 miegamaisiais pastate C, kiekviename miegamajame yra dvigulė lova, svetainė su virtuvėle ir miegamoji sofa 2 asmenims, vonios kambarys su dušu ir terasa su vaizdu į Tracz įlanką ir Stranda uostą. Skirta ne daugiau kaip 6 asmenims.",
    c_title: "Apartamentas C su 2 miegamaisiais"
  }
};

let currentLang = 'pl';
let inStrandaDescriptions = false;

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect language blocks: e.g. "en: {" or "    en: {"
  const langMatch = line.match(/^(\s*)(en|de|es|it|fr|cs|lt):\s*\{\s*$/);
  if (langMatch) {
    currentLang = langMatch[2];
  }
  
  // Also detect if it was quoted like "en": {
  const langMatchQ = line.match(/^(\s*)"(en|de|es|it|fr|cs|lt)":\s*\{\s*$/);
  if (langMatchQ) {
    currentLang = langMatchQ[2];
  }

  // Detect start of strandaDescriptions
  if (line.match(/\bstrandaDescriptions"?\s*:\s*\{/)) {
    inStrandaDescriptions = true;
  }
  
  // If we are inside strandaDescriptions and hit the closing brace
  if (inStrandaDescriptions && line.match(/^\s*\},?\s*$/)) {
    if (translationsToAdd[currentLang]) {
      const pad = line.match(/^\s*/)[0] + '    ';
      const toAdd = translationsToAdd[currentLang];
      
      lines.splice(i, 0, `${pad}c: "${toAdd.c}",\n${pad}c_title: "${toAdd.c_title}",`);
      i++; // Skip the newly added lines
      
      // mark as handled so we don't add twice
      delete translationsToAdd[currentLang];
    }
    inStrandaDescriptions = false;
  }
}

fs.writeFileSync(path, lines.join('\n'));
