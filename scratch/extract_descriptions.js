const fs = require('fs');
const files = [
  'src/data/fuleda-data.ts',
  'src/data/stranda-data.ts',
  'src/data/kisajno-data.ts'
];
const extracted = {};
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // simplistic regex to extract description: `...`
  const matches = [...content.matchAll(/description:\s*`([\s\S]*?)`/g)];
  // Wait, I need the IDs too
  // let's just use ts-node to import them! Oh wait, `import` failed because of module.
  // Instead, let's just read them as strings.
}
