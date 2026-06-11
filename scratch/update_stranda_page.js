const fs = require('fs');
const path = 'src/app/apartamenty/stranda/page.tsx';

let content = fs.readFileSync(path, 'utf-8');

// The thumbnail title is inside <h3 className="text-xl font-sans font-bold text-white mb-2">{unit.name}</h3>
// Wait, stranda/page.tsx loops over `buildings` but earlier we saw it fetching aptData = strandaApartments[unit.id]
// Let's check how it renders titles.
