import fs from 'fs';
import path from 'path';

const dataDir = './src/data';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    const idoRegex = /idoBookingId:\s*'([^']+)'/g;
    let match;
    const ids = [];
    const duplicates = [];
    while ((match = idoRegex.exec(content)) !== null) {
        if (ids.includes(match[1])) {
            duplicates.push(match[1]);
        } else {
            ids.push(match[1]);
        }
    }
    if (duplicates.length > 0) {
        console.log(`File: ${file} has duplicates: ${duplicates.join(', ')}`);
    } else {
        console.log(`File: ${file} has no duplicates.`);
    }
});
