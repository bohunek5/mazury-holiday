const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '../src/data/stranda-apartments.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const newImagesDir = path.join(__dirname, '../public/images/apartments/stranda_new');

// Get all apartment directories
const aptDirs = fs.readdirSync(newImagesDir).filter(f => fs.statSync(path.join(newImagesDir, f)).isDirectory());

const idMapping = {
    'C sTUDIO': 'studio',
    // add any other manual mappings if needed
};

for (const dir of aptDirs) {
    const tsId = idMapping[dir] || dir; // e.g. A104
    
    // Find images in this directory
    const dirPath = path.join(newImagesDir, dir);
    let images = fs.readdirSync(dirPath)
        .filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i))
        .sort((a, b) => {
            // natural sort
            return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
        });
        
    // check if 360 folder exists
    const has360 = fs.existsSync(path.join(dirPath, '360'));
    
    if (images.length === 0) continue;
    
    console.log(`Processing ${tsId} - ${images.length} images`);
    
    // Construct the new gallery object string
    const basePath = `/images/apartments/stranda_new/${dir}`;
    const heroImage = `getAssetPath("${basePath}/${images[0]}")`;
    const imageLines = images.map(img => `                getAssetPath("${basePath}/${img}")`);
    
    const newGalleryStr = `gallery: {
            "heroImage": ${heroImage},
            "images": [
${imageLines.join(',\n')}
            ]
        }`;

    // Regex to find the apartment block and replace its gallery
    // We look for 'ID': { ... gallery: { ... } ... }
    // Wait, regex might fail if it's too complex. Let's just find the `gallery:` block for this specific apartment.
    // Since each apartment starts with `    'A104': {` or `    'studio': {`, we can find the start index, then find the next `gallery: {` block.
    
    const aptStartRegex = new RegExp(`'${tsId}':\\s*{`, 'g');
    const match = aptStartRegex.exec(tsContent);
    if (!match) {
        console.warn(`Could not find apartment ${tsId} in TS file`);
        continue;
    }
    
    const startIndex = match.index;
    const galleryIndex = tsContent.indexOf('gallery: {', startIndex);
    
    if (galleryIndex === -1) {
        console.warn(`Could not find gallery for ${tsId}`);
        continue;
    }
    
    // Find the end of the gallery object. We know it's formatted as `        }`
    // Let's count braces or just find `        }` followed by `    },` or `    }`
    
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
        // Also check if we should add virtualTourUrl
        // We will insert it right before `gallery: {`
        let insertTour = '';
        // Remove old virtualTourUrl if any
        let contentBefore = tsContent.substring(0, galleryIndex);
        contentBefore = contentBefore.replace(/\\s*virtualTourUrl:.*?,\\n/, '\\n');
        
        if (has360) {
            insertTour = `virtualTourUrl: "/360-viewer?id=${tsId}",\n        `;
        }
        
        tsContent = contentBefore + insertTour + newGalleryStr + tsContent.substring(endIndex + 1);
        console.log(`Updated ${tsId}`);
    }
}

fs.writeFileSync(tsFilePath, tsContent);
console.log('Done!');
