const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/data/*.ts');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find all matches of `images: [...]`
  const regex = /images:\s*\[([\s\S]*?)\]/g;
  content = content.replace(regex, (match, arrayContent) => {
    // extract all getAssetPath(...) lines
    const lines = arrayContent.split(',').map(line => line.trim()).filter(Boolean);
    const uniqueLines = [];
    const seenPaths = new Set();
    
    for (let line of lines) {
      const matchPath = line.match(/getAssetPath\("([^"]+)"\)/) || line.match(/getAssetPath\('([^']+)'\)/);
      if (matchPath) {
        const p = matchPath[1];
        if (!seenPaths.has(p)) {
          seenPaths.add(p);
          uniqueLines.push(line);
        }
      } else {
        uniqueLines.push(line); // keep things we can't parse just in case
      }
    }
    
    return `images: [\n                ${uniqueLines.join(',\n                ')}\n            ]`;
  });
  
  fs.writeFileSync(file, content);
}
console.log("Done");
