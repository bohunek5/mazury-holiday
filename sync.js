const fs = require('fs');
const path = require('path');

const srcFolders = [
  "/Users/karolbohdanowicz/Downloads/Apartamenty 5",
  "/Users/karolbohdanowicz/Downloads/Apartamenty 4",
  "/Users/karolbohdanowicz/Downloads/Apartamenty 3",
  "/Users/karolbohdanowicz/Downloads/Apartamenty 2",
  "/Users/karolbohdanowicz/Downloads/Apartamenty"
];

const idToFolder = {
  'A103': ['A103'], 'A104': ['A104'], 'A105': ['A105'], 'A202': ['A202'], 'A204': ['A204'], 'A205': ['A205'], 'A302': ['A302'], 'A305': ['A305'], 'A306': ['A306'], 'A401': ['A401'], 'A402': ['A402'], 'A403': ['A403'],
  'B102': ['B102'], 'B103': ['B103'], 'B105': ['B105'], 'B106': ['B106'], 'B201': ['B201'], 'B202': ['B202'], 'B304': ['B304'], 'B305': ['B305'], 'B401': ['B401'], 'B402': ['B402'], 'B404': ['B404'],
  'C301': ['C301'], 'C304': ['C304'], 'C402': ['C402'], 'C403': ['C403'], 'C404': ['C404'],
  'c-studio': ['C Studio', 'C'], 'c-z-jedna-sypialnia': ['C101'], 'c-z-dwoma-sypialniami': ['C201']
};

const destBase = path.join(__dirname, 'public/images/stranda');
const tsFilePath = path.join(__dirname, 'src/data/stranda-apartments.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf-8');

for (const [id, folders] of Object.entries(idToFolder)) {
  let foundImages = [];
  
  for (const src of srcFolders) {
    if (foundImages.length > 0) break;
    
    for (const folder of folders) {
      const targetDir = path.join(src, folder);
      if (fs.existsSync(targetDir)) {
         const subdirs = ['2026', 'Nowe 4K', 'Nowe', '2025', '3000x2000', '4000x3000'];
         let chosenDir = null;
         for (const sub of subdirs) {
             if (fs.existsSync(path.join(targetDir, sub))) {
                 chosenDir = path.join(targetDir, sub);
                 break;
             }
         }
         if (!chosenDir) {
             chosenDir = targetDir;
         }
         
         const files = fs.readdirSync(chosenDir).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.webp') || f.toLowerCase().endsWith('.png'));
         if (files.length > 0) {
             foundImages = files.map(f => path.join(chosenDir, f));
             break;
         }
      }
    }
  }
  
  if (foundImages.length > 0) {
      console.log(`Syncing ${foundImages.length} images for ${id}`);
      const outDir = path.join(destBase, id, '2026_sync');
      fs.mkdirSync(outDir, { recursive: true });
      const relativePaths = [];
      for (const img of foundImages) {
          const dest = path.join(outDir, path.basename(img));
          fs.copyFileSync(img, dest);
          relativePaths.push(`getAssetPath("/images/stranda/${id}/2026_sync/${path.basename(img)}")`);
      }
      
      const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?gallery:\\s*\\{\\s*heroImage:\\s*).*?(,\\s*images:\\s*\\[)[\\s\\S]*?(\\]\\s*\\})`, 'g');
      tsContent = tsContent.replace(regex, (match, p1, p2, p3) => {
          return `${p1}${relativePaths[0]}${p2}\n                ${relativePaths.join(',\n                ')}\n            ${p3}`;
      });
  }
}

fs.writeFileSync(tsFilePath, tsContent, 'utf-8');
console.log('Done!');
