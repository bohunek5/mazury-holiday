const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/app/apartamenty/stranda/[id]/ApartmentDetailClient.tsx');
let content = fs.readFileSync(tsFilePath, 'utf8');

if (!content.includes('virtualTourUrl: data.virtualTourUrl')) {
    content = content.replace(
        'icalUrl: data.icalUrl',
        'icalUrl: data.icalUrl,\n                virtualTourUrl: data.virtualTourUrl'
    );
    fs.writeFileSync(tsFilePath, content);
    console.log('Fixed ApartmentDetailClient');
} else {
    console.log('Already fixed');
}
