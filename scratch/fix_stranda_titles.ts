import * as fs from 'fs';
import * as path from 'path';

const parsedJsonPath = path.resolve('scratch/ido_parsed.json');
const tsPath = path.resolve('src/data/stranda-apartments.ts');

const idoData = JSON.parse(fs.readFileSync(parsedJsonPath, 'utf8'));
let content = fs.readFileSync(tsPath, 'utf8');

// Keys to remove entirely
const keysToRemove = [
  'B101', 'B104', 'B105', 'B302',
  'c-studio', 'c-z-dwoma-sypialniami', 'c-z-jedna-sypialnia'
];

for (const key of keysToRemove) {
    // Basic regex to remove the property.
    // It looks for `    key: {\n ... \n    },`
    const regex = new RegExp(`\\s*['"]?${key}['"]?:\\s*\\{[^}]*?\\},`, 's');
    // But what if it has nested objects like amenities? It does.
}

console.log("We need a smarter way or just manual deletion.");
