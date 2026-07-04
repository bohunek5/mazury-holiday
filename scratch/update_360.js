const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/data/stranda-apartments.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const newImagesDir = path.join(__dirname, '../public/images/apartments/stranda_new');

// Get all apartment directories
const aptDirs = fs.readdirSync(newImagesDir).filter(f => fs.statSync(path.join(newImagesDir, f)).isDirectory());

const idMapping = {
    'C sTUDIO': 'studio',
};

for (const dir of aptDirs) {
    const tsId = idMapping[dir] || dir; 
    const dirPath = path.join(newImagesDir, dir);
    const has360 = fs.existsSync(path.join(dirPath, '360'));
    
    const aptStartRegex = new RegExp(`'${tsId}':\\s*{`, 'g');
    const match = aptStartRegex.exec(tsContent);
    if (!match) continue;
    
    const startIndex = match.index;
    const galleryIndex = tsContent.indexOf('gallery: {', startIndex);
    if (galleryIndex === -1) continue;
    
    let braceCount = 0;
    let endIndex = -1;
    for (let i = galleryIndex + 8; i < tsContent.length; i++) {
        if (tsContent[i] === '{') braceCount++;
        else if (tsContent[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                endIndex = i;
                break;
            }
        }
    }
    
    if (endIndex !== -1) {
        let contentBefore = tsContent.substring(0, galleryIndex);
        // Clean up old virtualTourUrl and virtualTourImage if they exist
        contentBefore = contentBefore.replace(/\s*virtualTourUrl:.*?,/, '');
        contentBefore = contentBefore.replace(/\s*virtualTourImage:.*?,/, '');
        
        let insertTour = '';
        if (has360) {
            const path360 = path.join(dirPath, '360');
            const images360 = fs.readdirSync(path360).filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i));
            if (images360.length > 0) {
                const imgName = images360[0];
                const basePath = `/images/apartments/stranda_new/${dir}/360/${imgName}`;
                insertTour = `\n        virtualTourUrl: "/360-viewer?id=${tsId}",\n        virtualTourImage: "${basePath}",\n        `;
            }
        }
        
        // Only modifying virtual properties now, keeping gallery intact
        tsContent = contentBefore + insertTour + "gallery" + tsContent.substring(galleryIndex + 7);
    }
}

fs.writeFileSync(tsFilePath, tsContent);
console.log('Done mapping 360 images!');
