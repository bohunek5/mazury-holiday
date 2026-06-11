const axios = require('axios');
const cheerio = require('cheerio');

async function checkId(id) {
    try {
        const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
        if(res.data.includes('58,00') || res.data.includes('2 sypialnie')) {
            console.log(`ID ${id} MATCHES 58,00 m or 2 sypialnie!`);
            const $ = cheerio.load(res.data);
            console.log($('.modal-header .modal-title').text().trim() || "No title");
            console.log($('.room_size').text().trim());
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
