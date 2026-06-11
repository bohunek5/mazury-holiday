const axios = require('axios');
const cheerio = require('cheerio');

async function checkId(id) {
    try {
        const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
        const $ = cheerio.load(res.data);
        const text = $('body').text().replace(/\s+/g, ' ');
        if (text.includes('Stranda')) {
            const match = text.match(/Więcej informacji (.*?) \d+ os/);
            if(match) {
                console.log(`ID ${id}: ${match[1]}`);
            } else {
                console.log(`ID ${id}: ${text.substring(0, 100)}`);
            }
        }
    } catch(e) {
    }
}

async function run() {
    for(let i=1; i<=60; i++) {
        await checkId(i);
    }
}
run();
