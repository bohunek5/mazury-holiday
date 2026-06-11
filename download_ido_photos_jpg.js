const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrls = [
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/955.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/948.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/928.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/931.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/934.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/935.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/936.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/938.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/939.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/943.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/944.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/947.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/951.jpg",
  "https://client37851.idobooking.com/images/objects/pictures/large/3/4/954.jpg"
];

const targetDir = path.join(__dirname, 'public/images/stranda/c-studio/ido_2026');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function download(url, index) {
    const finalJpg = path.join(targetDir, `ido_photo_${index}.jpg`);
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(finalJpg);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(`/images/stranda/c-studio/ido_2026/ido_photo_${index}.jpg`);
            });
        }).on('error', (err) => {
            fs.unlink(finalJpg, () => {});
            reject(err);
        });
    });
}

async function run() {
    const jpgPaths = [];
    for (let i = 0; i < imageUrls.length; i++) {
        console.log(`Downloading ${i+1}/${imageUrls.length}...`);
        const result = await download(imageUrls[i], i + 1);
        if (result) jpgPaths.push(result);
    }
    
    // Now update stranda-apartments.ts
    const tsPath = path.join(__dirname, 'src/data/stranda-apartments.ts');
    let tsContent = fs.readFileSync(tsPath, 'utf8');
    
    const newPathsStr = jpgPaths.map(p => `\n                getAssetPath("${p}"),`).join('').replace(/,$/, '');
    const newHeroPath = jpgPaths[0];

    const regex2Sypialnie = /(id:\s*'c-z-dwoma-sypialniami'[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)([\s\S]+?)(\])/;
    tsContent = tsContent.replace(regex2Sypialnie, `$1${newHeroPath}$3${newPathsStr}\n            ]`);

    const regex1Sypialnia = /(id:\s*'c-z-jedna-sypialnia'[\s\S]+?heroImage:\s*getAssetPath\(")([^"]+)("\)[\s\S]+?images:\s*\[)([\s\S]+?)(\])/;
    tsContent = tsContent.replace(regex1Sypialnia, `$1${newHeroPath}$3${newPathsStr}\n            ]`);

    fs.writeFileSync(tsPath, tsContent, 'utf8');
    console.log("Updated both C Studio 1 and 2 bedrooms with IDO photos (.jpg)!");
}

run();
