const axios = require('axios');
const cheerio = require('cheerio');

async function checkId(id) {
    try {
        const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
        const $ = cheerio.load(res.data);
        const text = $('body').text().replace(/\s+/g, ' ');
        if (text.includes('sypialni')) {
            console.log(`ID ${id} has 'sypialni'`);
            console.log(text.substring(0, 100));
        }
        if (res.data.includes('Stranda')) {
            console.log(`ID ${id} has Stranda`);
        }
    } catch(e) {
    }
}

async function run() {
    for(let i=38; i<=55; i++) {
        await checkId(i);
    }
}
run();
