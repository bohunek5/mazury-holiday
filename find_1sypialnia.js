const axios = require('axios');
const cheerio = require('cheerio');

async function checkId(id) {
    try {
        const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
        const $ = cheerio.load(res.data);
        const title = $('.modal-header .modal-title').text().trim();
        if (title.toLowerCase().includes('1 sypialni') || title.toLowerCase().includes('jedną sypialni')) {
            console.log(`ID ${id}: ${title}`);
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
