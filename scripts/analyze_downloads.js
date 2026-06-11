const fs = require('fs');
const path = require('path');

const downloadsDir = '/Users/karolbohdanowicz/Downloads';
const dirsToScan = ['Apartamenty', 'Apartamenty 2', 'Apartamenty 3', 'Apartamenty 4', 'Apartamenty 5'];

const isImage = (file) => /\.(jpe?g|png|webp|heic)$/i.test(file);
const isOld = (filePath) => /\/(stare|old)\//i.test(filePath);

const results = {}; // Map folderName (e.g. A104) to array of new image paths

function scanDir(currentPath, baseFolderName) {
    if (!fs.existsSync(currentPath)) return;
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            scanDir(fullPath, baseFolderName || item);
        } else if (stat.isFile() && isImage(fullPath)) {
            if (!isOld(fullPath)) {
                if (baseFolderName) {
                    if (!results[baseFolderName]) results[baseFolderName] = [];
                    results[baseFolderName].push(fullPath);
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

// Print results summary
for (const [folder, images] of Object.entries(results)) {
    console.log(`${folder}: ${images.length} new images`);
}
