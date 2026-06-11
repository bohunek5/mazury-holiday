const axios = require('axios');
const cheerio = require('cheerio');
const ids = [20, 21, 33, 34, 35, 36];
async function run() {
  for(let id of ids) {
    try {
      const res = await axios.get('https://engine37851.idobooking.com/index.php?module=modal-room&id=' + id);
      const $ = cheerio.load(res.data);
      const title = $('h1').text().trim() || $('h4').text().trim();
      const info = $('.room-info').text().replace(/\s+/g, ' ');
      console.log(`ID ${id} | ${title} | ${info}`);
    } catch(e) {
    }
  }
}
run();
