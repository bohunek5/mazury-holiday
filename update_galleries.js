const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, 'src', 'data', 'stranda-apartments.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf8');

const publicDir = path.join(__dirname, 'public', 'images', 'stranda');

function getAllWebp(dir, relativeTo) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllWebp(fullPath, relativeTo));
        } else if (fullPath.endsWith('.webp')) {
            results.push('/' + path.relative(relativeTo, fullPath));
        }
    });
    return results;
}

const keyRegex = /'([A-Za-z0-9_-]+)':\s*\{/g;
let match;
const keys = [];
while ((match = keyRegex.exec(tsContent)) !== null) {
    keys.push(match[1]);
}

let modified = tsContent;

for (const key of keys) {
    let dirToSearch = null;
    
    // c-studio maps to c_studio or c-studio
    let baseKey = key;
    if (key === 'c-studio') baseKey = 'C_Studio';
    
    const possibleDirs = [
        baseKey,
        key,
        key + '_images',
        key.toLowerCase(),
        key.replace(/_/g, '-'),
        key.replace(/-/g, '_'),
        'C_Generic',
        'Pokoje'
    ];
    
    for (const p of possibleDirs) {
        const candidate = path.join(publicDir, p);
        if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
            dirToSearch = candidate;
            break;
        }
    }

    if (dirToSearch) {
        let webpFiles = getAllWebp(dirToSearch, path.join(__dirname, 'public'));
        
        if (webpFiles.length > 0) {
            webpFiles.sort((a, b) => {
                const aName = path.basename(a).toLowerCase();
                const bName = path.basename(b).toLowerCase();
                if (aName.includes('hero') && !bName.includes('hero')) return -1;
                if (!aName.includes('hero') && bName.includes('hero')) return 1;
                
                const numA = parseInt((aName.match(/_(\d+)\.webp$/) || [0, '9999'])[1], 10);
                const numB = parseInt((bName.match(/_(\d+)\.webp$/) || [0, '9999'])[1], 10);
                
                if (numA !== numB) return numA - numB;
                
                if (aName.includes('_1.') && !bName.includes('_1.')) return -1;
                if (!aName.includes('_1.') && bName.includes('_1.')) return 1;
                return a.localeCompare(b);
            });

            const hero = webpFiles[0];
            const imagesStr = webpFiles.map(f => `                getAssetPath("${f}")`).join(',\n');
            
            const galleryReplacement = `gallery: {
            "heroImage": getAssetPath("${hero}"),
            "images": [
${imagesStr}
            ]
        }`;

            // Find key block
            const blockStartIdx = modified.indexOf(`'${key}': {`);
            if (blockStartIdx !== -1) {
                // Find next key block
                const nextBlockIdx = modified.indexOf(`': {`, blockStartIdx + 10);
                let searchRegion = nextBlockIdx !== -1 ? modified.substring(blockStartIdx, nextBlockIdx) : modified.substring(blockStartIdx);
                
                // Manually find gallery: { ... } by bracket counting
                const galleryStart = searchRegion.indexOf('gallery: {');
                if (galleryStart !== -1) {
                    let braces = 0;
                    let galleryEnd = -1;
                    for (let i = galleryStart + 8; i < searchRegion.length; i++) {
                        if (searchRegion[i] === '{') braces++;
                        if (searchRegion[i] === '}') {
                            braces--;
                            if (braces === 0) {
                                galleryEnd = i + 1;
                                break;
                            }
                        }
                    }
                    if (galleryEnd !== -1) {
                        const originalGallery = searchRegion.substring(galleryStart, galleryEnd);
                        modified = modified.replace(originalGallery, galleryReplacement);
                        console.log(`Updated gallery for ${key} with ${webpFiles.length} images.`);
                    }
                }
            }
        }
    }
}

fs.writeFileSync(tsFilePath, modified, 'utf8');
console.log('Update complete.');
