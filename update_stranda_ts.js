const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src/data/stranda-apartments.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const apartments = ['A104', 'A305', 'A403', 'B102', 'B103', 'B304', 'B305', 'B401', 'B402', 'B404', 'C404'];

apartments.forEach(apt => {
    const imagesDir = path.join(__dirname, `public/images/stranda/${apt}`);
    if (!fs.existsSync(imagesDir)) return;
    
    let files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.webp'));
    if (files.length === 0) return;
    
    // Sort files logically: heroes first, then new
    const heroes = files.filter(f => f.startsWith('hero_')).sort();
    const newImgs = files.filter(f => f.startsWith('new_')).sort((a,b) => {
        const aNum = parseInt(a.replace('new_', '').replace('.webp', ''));
        const bNum = parseInt(b.replace('new_', '').replace('.webp', ''));
        return aNum - bNum;
    });
    files = [...heroes, ...newImgs];
    
    // Replace main image
    const mainImage = `/images/stranda/${apt}/${files[0]}`;
    
    // We need to find the block for this apartment.
    // Easiest is to use regex matching `id: 'A104'` and then replacing `image: ...` inside that object.
    
    const blockRegex = new RegExp(`(id:\\s*['"]${apt}['"].*?)(image:\\s*getAssetPath\\(['"])(.*?)(['"]\\))`, 's');
    tsContent = tsContent.replace(blockRegex, `$1$2${mainImage}$4`);
    
    // Replace gallery
    const galleryArray = files.map(f => `            getAssetPath('/images/stranda/${apt}/${f}')`).join(',\n');
    const galleryRegex = new RegExp(`(id:\\s*['"]${apt}['"].*?gallery:\\s*\\[)(.*?)(\\])`, 's');
    tsContent = tsContent.replace(galleryRegex, `$1\n${galleryArray}\n        $3`);
});

fs.writeFileSync(tsFilePath, tsContent, 'utf8');
console.log('Successfully updated stranda-apartments.ts');
