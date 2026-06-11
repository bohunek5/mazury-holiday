const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const ids = [35, 20, 21, 36, 44, 32, 43];
const idMap = {
    35: 'B101',
    20: 'B104',
    21: 'B105',
    36: 'B302',
    44: 'C_1_sypialnia',
    32: 'C_Studio',
    43: 'C_2_sypialnie'
};

async function run() {
    let output = "";
    for (const id of ids) {
        try {
            const aptId = idMap[id];
            const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
            const $ = cheerio.load(res.data);
            
            const title = $('h1').text().trim() || $('h4').text().trim() || `Apartament ${aptId}`;
            const desc = $('.room-descr').text().trim().replace(/"/g, '\\"');
            
            const amenitiesList = [];
            $('.room-amenities li').each((_, el) => {
                amenitiesList.push($(el).text().trim());
            });

            // Extract image URL
            const style = $('.tinySlider li a').first().attr('style') || '';
            const imgMatch = style.match(/background-image:\s*url\((.*?)\)/);
            let imgUrl = '';
            if (imgMatch && imgMatch[1]) {
                imgUrl = imgMatch[1].replace(/['"]/g, '');
                if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
            }

            let type = 'oneBedroom';
            if (title.toLowerCase().includes('studio')) type = 'studio';
            if (title.toLowerCase().includes('dwoma') || title.toLowerCase().includes('2 sypialniami')) type = 'twoBedroom';
            if (title.toLowerCase().includes('jacuzzi')) type = 'jacuzzi';

            output += `
    '${aptId}': {
        id: '${aptId}',
        title: \`${title}\`,
        building: '${aptId.startsWith('B') ? 'B' : 'C'}',
        type: '${type}',
        price: 300,
        guests: '4',
        description: \`${desc}\`,
        amenities: {
            living: ${JSON.stringify(amenitiesList)},
            kitchen: [],
            bedroom: [],
            bathroom: [],
            terrace: []
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/${aptId}/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/${aptId}/hero_1.webp")
            ]
        },
        idoBookingId: '${id}',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/${id}/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },
`;

            // Download image
            if (imgUrl) {
                console.log(`Downloading image for ${aptId} from ${imgUrl}`);
                const dir = path.join(__dirname, '..', 'public', 'images', 'stranda', aptId);
                fs.mkdirSync(dir, { recursive: true });
                const writer = fs.createWriteStream(path.join(dir, 'hero_1.webp'));
                const imgRes = await axios({ url: imgUrl, method: 'GET', responseType: 'stream' });
                imgRes.data.pipe(writer);
                await new Promise((resolve, reject) => {
                    writer.on('finish', resolve);
                    writer.on('error', reject);
                });
            }

        } catch(e) {
            console.error(`Failed ID ${id}: ${e.message}`);
        }
    }
    fs.writeFileSync(path.join(__dirname, 'missing_apartments.ts.part'), output);
    console.log("DONE");
}
run();
