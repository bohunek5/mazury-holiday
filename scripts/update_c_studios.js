const fs = require('fs');
const path = require('path');

const mapPath = path.join(__dirname, 'photos_map.json');
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const cStudioPaths = map['c-studio'];

if (!cStudioPaths || cStudioPaths.length === 0) {
    console.error("No c-studio images found in map!");
    process.exit(1);
}

const newPathsStr = cStudioPaths.map(p => `\n                getAssetPath("${p}"),`).join('').replace(/,$/, '');
const newHeroPath = cStudioPaths[0];

const tsPath = path.join(__dirname, '..', 'src/data/stranda-apartments.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

const regex2Sypialnie = /(id:\s*'c-z-dwoma-sypialniami'[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)([\s\S]+?)(\])/;
tsContent = tsContent.replace(regex2Sypialnie, `$1${newHeroPath}$3${newPathsStr}\n            ]`);

const regex1Sypialnia = /(id:\s*'c-z-jedna-sypialnia'[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)([\s\S]+?)(\])/;
tsContent = tsContent.replace(regex1Sypialnia, `$1${newHeroPath}$3${newPathsStr}\n            ]`);

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log("Updated C Studio 1 and 2 bedrooms with new images!");
