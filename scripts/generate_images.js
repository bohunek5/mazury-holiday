const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const downloadsDir = '/Users/karolbohdanowicz/Downloads';
const dirsToScan = ['Apartamenty', 'Apartamenty 2', 'Apartamenty 3', 'Apartamenty 4', 'Apartamenty 5'];
const publicImagesDir = '/Users/karolbohdanowicz/my-ai-agents/mazury-holiday/public/images';

const isImage = (file) => /\.(jpe?g|png|webp|heic)$/i.test(file);
const isOldStrict = (filePath) => /\/(stare|old)\//i.test(filePath);

const getApartmentContext = (folderName) => {
    const f = folderName.trim().toUpperCase();
    if (f === 'FULEDA') return { id: 'fuleda', dest: 'fuleda' };
    if (f === 'DOMKI SKORUPKI' || f === 'SKORUPKI') return { id: 'domki_skorupki', dest: 'skorupki' };
    if (f === 'C') return { id: 'c-studio', dest: 'stranda/c-studio' };
    return { id: f, dest: `stranda/${f}` };
};

async function main() {
    const newPhotos = {};

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
                        if (!newPhotos[ctx.id].files.includes(fullPath)) {
                            newPhotos[ctx.id].files.push(fullPath);
                        }
                    }
                }
            }
        }
    }

    for (const dir of dirsToScan) {
        const fullDir = path.join(downloadsDir, dir);
        if (fs.existsSync(fullDir)) {
            for (const subdir of fs.readdirSync(fullDir)) {
                const subDirPath = path.join(fullDir, subdir);
                if (fs.statSync(subDirPath).isDirectory()) {
                    scanDir(subDirPath, subdir);
                }
            }
        }
    }

    const map = {};
    const MAX_IMAGES = 20; // To prevent memory/time blowup

    for (const [id, data] of Object.entries(newPhotos)) {
        if (['TEREN', 'ZDJECIA 360', 'NAILBAR', 'KISAJNO', 'STILLO 30', 'WALENTYNKI 2024', 'LOGA', 'BOOKING 2024'].includes(id)) continue;
        if (id.startsWith('STRANDA RESIDENCE')) continue;
        
        console.log(`Processing ${id}... Found ${data.files.length} images.`);
        const destDir = path.join(publicImagesDir, data.ctx.dest, 'nowe_2026');
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        const webPaths = [];
        let counter = 1;

        // Take up to MAX_IMAGES to process. Or all? We process all, but maybe in batches?
        for (const file of data.files) {
            const ext = path.extname(file);
            const base = path.basename(file, ext).replace(/[^a-zA-Z0-9]/g, '_');
            const destName = `${base}_${counter++}.webp`;
            const destPath = path.join(destDir, destName);
            const webPath = `/images/${data.ctx.dest}/nowe_2026/${destName}`;
            
            if (!fs.existsSync(destPath)) {
                try {
                    await sharp(file)
                        .resize({ width: 1920, withoutEnlargement: true })
                        .webp({ quality: 80 })
                        .toFile(destPath);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                    continue;
                }
            }
            webPaths.push(webPath);
        }
        if (webPaths.length > 0) map[id] = webPaths;
    }

    fs.writeFileSync(path.join(__dirname, 'photos_map.json'), JSON.stringify(map, null, 2));
    console.log("Done generating photos!");
}

main().catch(console.error);
