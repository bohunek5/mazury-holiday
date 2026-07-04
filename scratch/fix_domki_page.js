const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/app/domki/page.tsx');
let content = fs.readFileSync(tsFilePath, 'utf8');

content = content.replace(
    "customAboutTitle: t('skorupki', 'aboutTitle') || skorupkiData.customAboutTitle,",
    "customAboutTitle: (t('skorupki', 'aboutTitle') !== 'aboutTitle' && t('skorupki', 'aboutTitle') !== '') ? t('skorupki', 'aboutTitle') : (skorupkiData.customAboutTitle || 'O domku'),"
);

content = content.replace(
    "customAmenitiesTitle: t('skorupki', 'amenitiesTitle') || skorupkiData.customAmenitiesTitle,",
    "customAmenitiesTitle: (t('skorupki', 'amenitiesTitle') !== 'amenitiesTitle' && t('skorupki', 'amenitiesTitle') !== '') ? t('skorupki', 'amenitiesTitle') : skorupkiData.customAmenitiesTitle,"
);

fs.writeFileSync(tsFilePath, content);
console.log('Fixed domki page');
