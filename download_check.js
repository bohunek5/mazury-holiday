const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

async function checkId(id) {
    try {
        const res = await axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`);
        const $ = cheerio.load(res.data);
        const images = [];
        $('a[data-imagelightbox]').each((i, el) => {
            let href = $(el).attr('href');
            if(href && href.startsWith('/')) href = 'https://engine37851.idobooking.com' + href;
            if(href) images.push(href);
        });
        console.log(`ID ${id} - Found ${images.length} images.`);
        if(images.length > 0) {
            console.log(`  First: ${images[0]}`);
        }
    } catch(e) {
        console.log(`ID ${id} - Error`);
    }
}

async function run() {
    // Check IDs around 40-50
    for(let i=38; i<=50; i++) {
        await checkId(i);
    }
}
run();
