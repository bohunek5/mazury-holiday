const fs = require('fs');

const files = [
    'stranda-apartments.ts',
    'fuleda-data.ts',
    'skorupki-data.ts',
    'pokoje-fuleda-data.ts',
    'kisajno-data.ts',
    'mikolajki-data.ts',
    'cottages-data.ts'
];

for (const file of files) {
    const content = fs.readFileSync('src/data/' + file, 'utf8');
    
    // Split by apartment object manually, or just use a regex that captures gallery arrays
    const galleryRegex = /gallery:\s*\{[^}]*images:\s*\[([\s\S]*?)\]\s*\}/g;
    let galleryMatch;
    let galleryIndex = 0;
    while ((galleryMatch = galleryRegex.exec(content)) !== null) {
        galleryIndex++;
        const imagesStr = galleryMatch[1];
        const imgRegex = /getAssetPath\("([^"]+)"\)/g;
        let imgMatch;
        const images = [];
        while ((imgMatch = imgRegex.exec(imagesStr)) !== null) {
            images.push(imgMatch[1]);
        }
        
        const seen = new Set();
        const duplicates = new Set();
        for (const img of images) {
            if (seen.has(img)) {
                duplicates.add(img);
            }
            seen.add(img);
        }
        
        if (duplicates.size > 0) {
            console.log(`Duplicates in ${file} (Gallery ${galleryIndex}):`);
            for (const dup of duplicates) {
                console.log(`  - ${dup}`);
            }
        }
    }
}
