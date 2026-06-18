const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tsFiles = [
    'src/data/stranda-apartments.ts',
    'src/data/fuleda-data.ts',
    'src/data/pokoje-fuleda-data.ts',
    'src/data/skorupki-apartments.ts',
    'src/data/kisajno-data.ts',
    'src/data/czarter-data.ts'
];

async function main() {
    const tinyImages = new Set();
    const publicDir = path.join(__dirname, '..', 'public');

    // Find all tiny images
    function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                scanDir(fullPath);
            } else if (/\.(webp|jpg|png|jpeg)$/i.test(fullPath) && !fullPath.includes('/originals/')) {
                // Read sync
                // We'll read them asynchronously
            }
        }
    }

    const imagePaths = [];
    function scanDirAsync(dir) {
        if (!fs.existsSync(dir)) return;
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                scanDirAsync(fullPath);
            } else if (/\.(webp|jpg|png|jpeg)$/i.test(fullPath) && !fullPath.includes('/originals/')) {
                imagePaths.push(fullPath);
            }
        }
    }

    scanDirAsync(path.join(publicDir, 'images'));

    console.log(`Scanning ${imagePaths.length} images for small sizes...`);
    for (const imgPath of imagePaths) {
        try {
            const metadata = await sharp(imgPath).metadata();
            if (metadata.width < 500 || metadata.height < 500) {
                // This is a tiny image
                const relativePath = imgPath.replace(publicDir, '').replace(/\\/g, '/');
                tinyImages.add(relativePath);
            }
        } catch (e) {}
    }

    console.log(`Found ${tinyImages.size} tiny images.`);

    // Clean up TS files
    for (const file of tsFiles) {
        const filePath = path.join(__dirname, '..', file);
        if (!fs.existsSync(filePath)) continue;

        let content = fs.readFileSync(filePath, 'utf-8');
        let lines = content.split('\n');
        let modified = false;

        const newLines = lines.filter(line => {
            let keep = true;
            for (const tiny of tinyImages) {
                if (line.includes(tiny)) {
                    keep = false;
                    modified = true;
                    console.log(`Removed tiny image from TS: ${tiny}`);
                    break;
                }
            }
            return keep;
        });

        if (modified) {
            fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
            console.log(`Updated ${file}`);
        }
    }
}

main().catch(console.error);
