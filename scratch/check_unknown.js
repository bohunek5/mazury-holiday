const axios = require('axios');
const cheerio = require('cheerio');
const ids = [20, 21, 33, 34, 35, 36];
async function run() {
  for(let id of ids) {
    try {
      const res = await axios.get('https://engine37851.idobooking.com/index.php?module=modal-room&id=' + id);
      const $ = cheerio.load(res.data);
      const title = $('h1').text().trim() || $('h4').text().trim();
      const desc = $('.room-descr').text().replace(/\s+/g, ' ').substring(0, 150);
      console.log(`ID ${id} | ${title} | ${desc}`);
    } catch(e) {
      console.log(`ID ${id} failed`);
    }
  }
}
run();
