const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'stranda-apartments.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// The new description for both
const newDesc = "Apartamenty z 1 sypialnią znajdują się w budynku C, w sypialni łóżko podwójne, salon z aneksem kuchennym z rokładaną sofą dla 2 osoób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób.";

// Replace B304 description
content = content.replace(
  /('B304':\s*{\s*id:\s*'B304',\s*title:\s*"B304",\s*shortTitle:\s*"B304",\s*description:\s*")[^"]+(")/g,
  `$1${newDesc}$2`
);

// We need to find B304 object entirely and clone it to B305 if B305 doesn't exist
if (!content.includes("'B305': {")) {
  const b304Regex = /('B304':\s*{[\s\S]*?icalUrl:\s*'[^']*'\s*},)/g;
  const match = b304Regex.exec(content);
  if (match) {
    let b305Obj = match[1].replace(/'B304'/g, "'B305'").replace(/"B304"/g, '"B305"').replace(/\/B304\//g, '/B305/');
    // modify gallery to use some other images
    b305Obj = b305Obj.replace(
      /"heroImage": getAssetPath\("\/images\/stranda\/B305\/hero_1\.webp"\),/,
      `"heroImage": getAssetPath("/images/stranda/B304/new_3.webp"),`
    ).replace(
      /"images": \[\s*getAssetPath\("\/images\/stranda\/B305\/hero_1\.webp"\),/g,
      `"images": [\n                getAssetPath("/images/stranda/B304/new_3.webp"),`
    ).replace(/\/images\/stranda\/B305\//g, '/images/stranda/B304/'); // Use B304 images for B305 if B305 images don't exist

    content = content.replace(match[1], match[1] + '\n\n' + b305Obj);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Added B305 successfully and updated B304 description.");
  } else {
    console.log("Could not find B304 properly.");
  }
} else {
  console.log("B305 already exists.");
  fs.writeFileSync(filePath, content, 'utf-8');
}
