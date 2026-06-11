const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const mapping = {
    'A103': '1', 'A104': '2', 'A105': '10', 'A204': '12', 'A205': '13',
    'A302': '42', 'A305': '14', 'A306': '15', 'A402': '16', 'A403': '17',
    'B102': '18', 'B103': '19', 'B106': '22', 'B201': '39', 'B202': '38',
    'B401': '23', 'B402': '24', 'B404': '25',
    'C301': '40', 'C304': '30', 'C402': '46', 'C403': '29', 'C404': '41'
};

const BASE_URL = 'https://engine37851.idobooking.com/index.php?module=modal-room&id=';

async function syncData() {
    const results = {};
    for (const [aptId, idoId] of Object.entries(mapping)) {
        try {
            const res = await axios.get(BASE_URL + idoId, { timeout: 10000 });
            const $ = cheerio.load(res.data);
            
            // Description is usually in .room-descr
            const descHtml = $('.room-descr').html();
            // Clean up description (convert br to \n, remove tags)
            let desc = '';
            if (descHtml) {
                desc = descHtml.replace(/<br\s*[\/]?>/gi, '\n');
                desc = cheerio.load(desc).text().trim();
            }
            
            // Title
            let title = $('h1').text().trim() || $('h4').text().trim();

            // Guests
            let guests = '';
            $('.room-item-details-element').each((i, el) => {
                if ($(el).text().includes('osoby')) {
                    guests = $(el).text().replace('osoby', '').trim();
                }
            });

            // Amenities are often listed. Let's see if we can find them
            // In idobooking they might be under ul tags or specific sections.
            // Let's just collect all text from .room-eq or similar if it exists
            const amenities = [];
            $('.room-eq li, .modal-equipment li').each((i, el) => {
                amenities.push($(el).text().trim());
            });
            
            results[aptId] = { title, desc, guests, amenities };
        } catch (e) {
            console.error(`Error fetching ${aptId}: ${e.message}`);
        }
    }
    fs.writeFileSync('scratch/ido_data.json', JSON.stringify(results, null, 2));
    console.log('Saved to scratch/ido_data.json');
}
syncData();
