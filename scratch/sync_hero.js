const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const mapping = {
    'A103': '1', 'A104': '2', 'A105': '10', 'A204': '12', 'A205': '13',
    'A302': '42', 'A305': '14', 'A306': '15', 'A402': '16', 'A403': '17',
    'B102': '18', 'B103': '19', 'B106': '22', 'B201': '39', 'B202': '38',
    'B401': '23', 'B402': '24', 'B404': '25',
    'C301': '40', 'C304': '30', 'C402': '46', 'C403': '29', 'C404': '41'
};

const BASE_URL = 'https://engine37851.idobooking.com/index.php?module=modal-room&id=';

async function sync() {
    for (const [aptId, idoId] of Object.entries(mapping)) {
        console.log(`Syncing ${aptId} (ID: ${idoId})`);
        try {
            const res = await axios.get(BASE_URL + idoId, { timeout: 10000 });
            const $ = cheerio.load(res.data);
            
            let imgUrl = $('.tinySlider li a').first().attr('href') || $('.tinySlider li img').first().attr('src');
            
            if (imgUrl) {
                if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
                if (imgUrl.startsWith('/')) imgUrl = 'https://engine37851.idobooking.com' + imgUrl;
                
                console.log(`  Found image: ${imgUrl}`);
                
                // Download image
                const imgRes = await axios.get(imgUrl, { responseType: 'stream' });
                const dir = path.join(__dirname, '..', 'public', 'images', 'stranda', aptId);
                
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
                
                const targetPath = path.join(dir, 'hero_1.webp');
                const writer = fs.createWriteStream(targetPath);
                
                imgRes.data.pipe(writer);
                await new Promise((resolve, reject) => {
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                });
                
                console.log(`  Saved to ${targetPath}`);
            } else {
                console.log(`  No image found!`);
            }
        } catch (e) {
            console.error(`  Error: ${e.message}`);
        }
    }
}

sync();
