const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/data/stranda-apartments.ts');
let content = fs.readFileSync(tsFilePath, 'utf8');

const targets = ['A205', 'A305', 'A403'];

targets.forEach(id => {
    const searchStr = `'${id}': {`;
    const idx = content.indexOf(searchStr);
    if (idx !== -1) {
        const folder = path.join(__dirname, `../public/images/apartments/stranda_new/${id}/360`);
        const files = fs.readdirSync(folder).filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i));
        if (files.length > 0) {
            const firstImg = files[0];
            const virtualTourImage = `/images/apartments/stranda_new/${id}/360/${firstImg}`;
            content = content.replace(new RegExp(`virtualTourImage: "/images/apartments/stranda_new/${id}/360/0.JPG"`), `virtualTourImage: "${virtualTourImage}"`);
        }
    }
});

fs.writeFileSync(tsFilePath, content);
console.log('Fixed 360 virtual tours image paths');
