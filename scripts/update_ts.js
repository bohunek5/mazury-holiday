const fs = require('fs');
const path = require('path');

const mapPath = path.join(__dirname, 'photos_map.json');
if (!fs.existsSync(mapPath)) {
    console.error("Map file not found.");
    process.exit(1);
}

const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

const tsFiles = [
    'src/data/stranda-apartments.ts',
    'src/data/fuleda-data.ts',
    'src/data/pokoje-fuleda-data.ts',
    'src/data/skorupki-data.ts'
];

const tsData = {};
for (const file of tsFiles) {
    const p = path.join(__dirname, '..', file);
    if (fs.existsSync(p)) {
        tsData[file] = fs.readFileSync(p, 'utf-8');
    }
}

for (const [id, webPaths] of Object.entries(map)) {
    if (!webPaths || webPaths.length === 0) continue;
    
    const newPathsStr = webPaths.map(p => `\n            getAssetPath("${p}"),`).join('');
    const newHeroPath = webPaths[0];

    let targetTsFile = null;
    let searchRegex = null;

    if (id === 'fuleda') {
        targetTsFile = 'src/data/fuleda-data.ts';
        searchRegex = /(heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)/;
    } else if (id === 'domki_skorupki') {
        targetTsFile = 'src/data/skorupki-data.ts';
        searchRegex = /(heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)/;
    } else {
        const strandaRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]+?heroImage:\\s*getAssetPath\\(")([^"]+)("\\)[\\s\\S]+?images:\\s*\\[)`, 'i');
        for (const file of tsFiles) {
            if (tsData[file] && strandaRegex.test(tsData[file])) {
                targetTsFile = file;
                searchRegex = strandaRegex;
                break;
            }
        }
    }
    
    if (targetTsFile && searchRegex) {
        const replacement = `$1${newHeroPath}$3${newPathsStr}`;
        tsData[targetTsFile] = tsData[targetTsFile].replace(searchRegex, replacement);
        console.log(`Updated TS for ${id} in ${targetTsFile}`);
    } else {
        console.log(`Could not find TS config for ${id}.`);
    }
}

for (const [file, content] of Object.entries(tsData)) {
    const p = path.join(__dirname, '..', file);
    if (fs.existsSync(p)) {
        fs.writeFileSync(p, content, 'utf-8');
    }
}

console.log("Done updating TS files!");
