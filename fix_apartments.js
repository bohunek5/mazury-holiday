const fs = require('fs');
let file = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

// Fix c-studio to Studio
file = file.replace(/'c-studio': \{/g, "'Studio': {");
file = file.replace(/id: 'c-studio',/g, "id: 'Studio',");
file = file.replace(/title: "Apartament C Studio",/g, 'title: "Studio",');
file = file.replace(/shortTitle: "Apartament C Studio",/g, 'shortTitle: "Studio",');

// Fix B304 to B304 i B305
file = file.replace(/title: "B304",/g, 'title: "B304 i B305",');
file = file.replace(/shortTitle: "B304",/g, 'shortTitle: "B304 i B305",');
file = file.replace(/idoBookingId: '44',/g, "idoBookingId: '44',"); // Ensure 44

// Clean up trailing brackets of c-z-jedna-sypialnia if left behind
file = file.replace(/\},\n\s*\},/g, '},'); // If there is an empty object left
fs.writeFileSync('src/data/stranda-apartments.ts', file);
