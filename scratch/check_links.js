const fs = require('fs');

const files = [
    'src/data/stranda-apartments.ts',
    'src/data/kisajno-data.ts',
    'src/data/fuleda-data.ts',
    'src/data/mikolajki-data.ts',
    'src/data/pokoje-fuleda-data.ts'
];

let report = [];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    
    // We are looking for blocks of objects with `id`, `title`, `idoBookingId`
    // Since it's TS, we can use regex
    const blockRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*[`'"]([^`'"]+)[`'"](?:[\s\S]*?idoBookingId:\s*['"]([^'"]+)['"])?/g;
    
    let match;
    while ((match = blockRegex.exec(content)) !== null) {
        // Just to be safe that idoBookingId belongs to the same block, 
        // we extract chunks split by `id: `
        // A better approach: split by `id: `
    }
}

// Safer approach: 
const extractData = (fileContent) => {
    const results = [];
    const chunks = fileContent.split(/id:\s*['"]/);
    for (let i = 1; i < chunks.length; i++) {
        const chunk = chunks[i];
        const idMatch = chunk.match(/^([^'"]+)['"]/);
        const titleMatch = chunk.match(/title:\s*[`'"]([^`'"]+)[`'"]/);
        const idoMatch = chunk.match(/idoBookingId:\s*['"]([^'"]+)['"]/);
        
        if (idMatch && titleMatch) {
            results.push({
                id: idMatch[1],
                title: titleMatch[1].trim(),
                idoBookingId: idoMatch ? idoMatch[1] : '1 (DEFAULT / BRAK)'
            });
        }
    }
    return results;
};

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const items = extractData(content);
    items.forEach(item => {
        report.push({
            file: file.replace('src/data/', ''),
            ...item
        });
    });
}

console.table(report);
