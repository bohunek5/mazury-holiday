const fs = require('fs');

const idoData = JSON.parse(fs.readFileSync('scratch/ido_data.json', 'utf8'));
let content = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');

for (const [aptId, data] of Object.entries(idoData)) {
    if (!data.desc) continue;

    // Find the start of the apartment block
    const blockStartRegex = new RegExp(`'${aptId}':\\s*\\{`, 'g');
    const match = blockStartRegex.exec(content);
    
    if (match) {
        const blockStartIndex = match.index;
        
        // Find description start
        const descStartRegex = /description:\s*`/g;
        descStartRegex.lastIndex = blockStartIndex;
        const descStartMatch = descStartRegex.exec(content);
        
        if (descStartMatch && descStartMatch.index - blockStartIndex < 500) {
            // Find the end of the description string (the next backtick)
            const descEndIndex = content.indexOf('`', descStartMatch.index + descStartMatch[0].length);
            
            if (descEndIndex !== -1) {
                // Now find the end of amenities block
                const amenitiesStartRegex = /amenities:\s*\{/g;
                amenitiesStartRegex.lastIndex = descEndIndex;
                const amenitiesStartMatch = amenitiesStartRegex.exec(content);
                
                if (amenitiesStartMatch) {
                    let openBraces = 1;
                    let i = amenitiesStartMatch.index + amenitiesStartMatch[0].length;
                    while (openBraces > 0 && i < content.length) {
                        if (content[i] === '{') openBraces++;
                        if (content[i] === '}') openBraces--;
                        i++;
                    }
                    const amenitiesEndIndex = i;
                    
                    // Replace everything from descStart to amenitiesEnd
                    const safeDesc = data.desc.replace(/`/g, '\\`');
                    
                    let amenitiesObj = `{\n`;
                    if (data.amenities && data.amenities.length > 0) {
                        // Distribute amenities roughly or just put all in 'living' or 'other'
                        amenitiesObj += `            living: ${JSON.stringify(data.amenities)},\n`;
                        amenitiesObj += `            kitchen: [],\n`;
                        amenitiesObj += `            bedroom: [],\n`;
                        amenitiesObj += `            bathroom: [],\n`;
                        amenitiesObj += `            terrace: []\n`;
                    } else {
                        amenitiesObj += `            living: [],\n            kitchen: [],\n            bedroom: [],\n            bathroom: [],\n            terrace: []\n`;
                    }
                    amenitiesObj += `        }`;
                    
                    const replacement = `description: \`${safeDesc}\`,\n        amenities: ${amenitiesObj}`;
                    
                    content = content.substring(0, descStartMatch.index) + replacement + content.substring(amenitiesEndIndex);
                }
            }
        }
    }
}

// B305 fix
content = content.replace(/Apartament B305 Suite 2\+2 z Jacuzzi/g, 'Apartament B305 Suite 2+2');
content = content.replace(/taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz.\\nJacuzzi jest czynne przez cały rok./g, 'taras na dachu z widokiem na port Stranda i Zatokę Tracz.');
content = content.replace(/Wyposażenie tarasu górnego na dachu: dwa leżaki, stolik, prywatne jacuzzi czynne przez cały rok/g, 'Wyposażenie tarasu górnego na dachu: dwa leżaki, stolik');

fs.writeFileSync('src/data/stranda-apartments.ts', content);
console.log('Updated stranda-apartments.ts');
