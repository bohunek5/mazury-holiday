const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  for(let id = 1; id <= 50; id++) {
    try {
      const res = await axios.get('https://engine37851.idobooking.com/index.php?module=modal-room&id=' + id);
      const $ = cheerio.load(res.data);
      const desc = $('.room-descr').text();
      const title = $('h1').text().trim() || $('h4').text().trim();
      if(desc.includes('B304') || desc.includes('B305') || title.includes('B304') || title.includes('B305')) {
          console.log(`FOUND IN ID ${id}: ${title}`);
      }
    } catch(e) {
    }
  }
}
run();
