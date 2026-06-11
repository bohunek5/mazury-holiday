const fs = require('fs');
const html = fs.readFileSync('idobooking.html', 'utf8');

// Try to find any JSON-like structures that contain "id": "44" or similar
const regex = /"id":"?(\d+)"?.*?"name":"([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(`ID: ${match[1]} | Name: ${match[2]}`);
}

const regex2 = /"name":"([^"]+)".*?"id":"?(\d+)"?/g;
while ((match = regex2.exec(html)) !== null) {
    console.log(`ID: ${match[2]} | Name: ${match[1]}`);
}
