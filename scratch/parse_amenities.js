const fs = require('fs');

const idoData = JSON.parse(fs.readFileSync('scratch/ido_data.json', 'utf8'));

for (const [aptId, data] of Object.entries(idoData)) {
    let desc = data.desc;
    
    // Parse amenities from description
    const amenities = {
        living: [],
        kitchen: [],
        bedroom: [],
        bathroom: [],
        terrace: []
    };
    
    const lines = desc.split('\n');
    const newDescLines = [];
    
    for (let line of lines) {
        line = line.trim();
        if (line.toLowerCase().startsWith('wyposażenie kuchni:')) {
            amenities.kitchen = line.replace(/wyposażenie kuchni:/i, '').split(',').map(s => s.trim()).filter(Boolean);
        } else if (line.toLowerCase().startsWith('wyposażenie salonu:')) {
            amenities.living = line.replace(/wyposażenie salonu:/i, '').split(',').map(s => s.trim()).filter(Boolean);
        } else if (line.toLowerCase().startsWith('wyposażenie sypialni') || line.toLowerCase().startsWith('wyposażenie sypialni 1:')) {
            const arr = line.replace(/wyposażenie sypialni(.*?):/i, '').split(',').map(s => s.trim()).filter(Boolean);
            amenities.bedroom.push(...arr);
        } else if (line.toLowerCase().startsWith('wyposażenie sypialni 2:')) {
            const arr = line.replace(/wyposażenie sypialni 2:/i, '').split(',').map(s => s.trim()).filter(Boolean);
            amenities.bedroom.push(...arr);
        } else if (line.toLowerCase().startsWith('wyposażenie łazienki:')) {
            amenities.bathroom = line.replace(/wyposażenie łazienki:/i, '').split(',').map(s => s.trim()).filter(Boolean);
        } else if (line.toLowerCase().startsWith('wyposażenie tarasu') || line.toLowerCase().startsWith('wyposażenie tarasu dolnego:')) {
            const arr = line.replace(/wyposażenie tarasu(.*?):/i, '').split(',').map(s => s.trim()).filter(Boolean);
            amenities.terrace.push(...arr);
        } else if (line.toLowerCase().startsWith('wyposażenie tarasu górnego na dachu:')) {
            const arr = line.replace(/wyposażenie tarasu górnego na dachu:/i, '').split(',').map(s => s.trim()).filter(Boolean);
            amenities.terrace.push(...arr);
        } else if (line.toLowerCase().startsWith('pozostałe:')) {
            const arr = line.replace(/pozostałe:/i, '').split(',').map(s => s.trim()).filter(Boolean);
            // Just push remaining to living or add to desc
            amenities.living.push(...arr);
        } else {
            if (line) newDescLines.push(line);
        }
    }
    
    // remove duplicates from arrays
    for (const k in amenities) {
        amenities[k] = [...new Set(amenities[k])];
    }
    
    data.cleanDesc = newDescLines.join('\n');
    data.parsedAmenities = amenities;
}

fs.writeFileSync('scratch/ido_parsed.json', JSON.stringify(idoData, null, 2));
