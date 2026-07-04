const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/data/fuleda-data.ts');
let content = fs.readFileSync(tsFilePath, 'utf8');

content = content.replace(/type: '([^']+)',/g, "type: '$1',\n        customAboutTitle: 'O domku',");

fs.writeFileSync(tsFilePath, content);
console.log('Fixed fuleda customAboutTitle');
