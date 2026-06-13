const fs = require('fs');
let file = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// Replace B304 description
file = file.replace(/description: "Apartament B304.*?"/s, 'description: "Komfortowe, nowocześnie urządzone apartamenty zlokalizowane w budynku B, idealne na wypoczynek. Składają się z przestronnego salonu z aneksem kuchennym, oddzielnej sypialni oraz eleganckiej łazienki. Apartamenty oferują pełne wyposażenie zapewniające wygodę podczas dłuższego pobytu na Mazurach."');

fs.writeFileSync('src/data/stranda-apartments.ts', file);
