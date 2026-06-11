const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const downloadsDir = '/Users/karolbohdanowicz/Downloads';
const dirsToScan = ['Apartamenty', 'Apartamenty 2', 'Apartamenty 3', 'Apartamenty 4', 'Apartamenty 5'];
const publicImagesDir = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images';
const tsFiles = [
    'src/data/stranda-apartments.ts',
    'src/data/fuleda-data.ts',
    'src/data/pokoje-fuleda-data.ts',
    'src/data/skorupki-apartments.ts'
];

const isImage = (file) => /\.(jpe?g|png|webp|heic)$/i.test(file);
const isOld = (filePath) => /\/(stare|old|Inne|3000x2000|4000x3000|2025)\//i.test(filePath); // wait, are 3000x2000 old? usually "stare" is old.
// Let's stick to 'stare' and 'old' for excluding.
const isOldStrict = (filePath) => /\/(stare|old)\//i.test(filePath);

// Map folder names to standard identifiers and destination paths
const getApartmentContext = (folderName) => {
    const f = folderName.trim().toUpperCase();
    if (f === 'FULEDA') return { id: 'fuleda', dest: 'fuleda' };
    if (f === 'DOMKI SKORUPKI' || f === 'SKORUPKI') return { id: 'domki_skorupki', dest: 'skorupki' };
    if (f === 'C') return { id: 'c-studio', dest: 'stranda/c-studio' };
    return { id: f, dest: `stranda/${f}` }; // Default for A104, B102, etc.
};

async function main() {
    const newPhotos = {}; // id -> array of paths

    // 1. Gather all photos
    function scanDir(currentPath, baseFolderName) {
        if (!fs.existsSync(currentPath)) return;
        const items = fs.readdirSync(currentPath);
        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                scanDir(fullPath, baseFolderName || item);
            } else if (stat.isFile() && isImage(fullPath)) {
                if (!isOldStrict(fullPath)) {
                    if (baseFolderName) {
                        const ctx = getApartmentContext(baseFolderName);
                        if (!newPhotos[ctx.id]) newPhotos[ctx.id] = { ctx, files: [] };
                        newPhotos[ctx.id].files.push(fullPath);
                    }
                }
            }
        }
    }

    for (const dir of dirsToScan) {
        const fullDir = path.join(downloadsDir, dir);
        if (fs.existsSync(fullDir)) {
            const subdirs = fs.readdirSync(fullDir);
            for (const subdir of subdirs) {
                const subDirPath = path.join(fullDir, subdir);
                if (fs.statSync(subDirPath).isDirectory()) {
                    scanDir(subDirPath, subdir);
                }
            }
        }
    }

    console.log(`Found photos for ${Object.keys(newPhotos).length} apartments.`);

    // Read all TS files into memory
    const tsData = {};
    for (const file of tsFiles) {
        tsData[file] = fs.readFileSync(path.join(__dirname, '..', file), 'utf-8');
    }

    // 2. Process photos and update TS
    for (const [id, data] of Object.entries(newPhotos)) {
        // Skip some known non-apartments
        if (['TEREN', 'ZDJECIA 360', 'NAILBAR', 'KISAJNO', 'STILLO 30', 'WALENTYNKI 2024', 'LOGA', 'BOOKING 2024'].includes(id)) continue;
        if (id.startsWith('STRANDA RESIDENCE')) continue; // we only do specific apartments
        
        // Find which TS file contains this apartment
        let targetTsFile = null;
        let searchRegex = null;
        
        if (id === 'FULEDA') {
            if (tsData['src/data/fuleda-data.ts'].includes('ido_parter')) {
                targetTsFile = 'src/data/fuleda-data.ts';
                searchRegex = /(export const fuledaApartments: Record<string, FuledaApartment> = \{[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)/;
            }
        } else if (id === 'DOMKI_SKORUPKI') {
            targetTsFile = 'src/data/skorupki-apartments.ts';
            // We'll just prepend to all skorupki? Or maybe skorupki has only one main array?
            searchRegex = /(export const skorupkiApartments: Record<string, SkorupkiApartment> = \{[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)/;
        } else {
            // Stranda
            const strandaRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]+?heroImage:\\s*getAssetPath\\(")([^"]+)("\\)[\\s\\S]+?images:\\s*\\[)`, 'i');
            for (const file of tsFiles) {
                if (strandaRegex.test(tsData[file])) {
                    targetTsFile = file;
                    searchRegex = strandaRegex;
                    break;
                }
            }
        }

        if (!targetTsFile) {
            console.log(`Could not find TS configuration for ${id}. Skipping.`);
            continue;
        }

        console.log(`Processing ${id}... Found ${data.files.length} new images.`);
        const destDir = path.join(publicImagesDir, data.ctx.dest, 'nowe_2026');
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        const newPaths = [];
        let counter = 1;

        // Process images with sharp
        for (const file of data.files) {
            const ext = path.extname(file);
            const base = path.basename(file, ext).replace(/[^a-zA-Z0-9]/g, '_');
            const destName = `${base}_${counter++}.webp`;
            const destPath = path.join(destDir, destName);
            const webPath = `/images/${data.ctx.dest}/nowe_2026/${destName}`;
            
            try {
                await sharp(file)
                    .resize({ width: 1920, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(destPath);
                newPaths.push(`\n                getAssetPath("${webPath}"),`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }

        if (newPaths.length > 0) {
            // Update TS file
            const newHeroPath = newPaths[0].match(/"([^"]+)"/)[1];
            const replacement = `$1${newHeroPath}$3${newPaths.join('')}`;
            tsData[targetTsFile] = tsData[targetTsFile].replace(searchRegex, replacement);
            console.log(`Updated TS for ${id}`);
        }
    }

    // Write TS files back
    for (const [file, content] of Object.entries(tsData)) {
        fs.writeFileSync(path.join(__dirname, '..', file), content, 'utf-8');
    }
    console.log("Done.");
}

main().catch(console.error);
