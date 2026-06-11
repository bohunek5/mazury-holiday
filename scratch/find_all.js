const axios = require('axios');
const cheerio = require('cheerio');
async function run() {
  for(let id = 1; id <= 60; id++) {
    try {
      const res = await axios.get('https://engine37851.idobooking.com/index.php?module=modal-room&id=' + id);
      const $ = cheerio.load(res.data);
      const title = $('h1').text().trim() || $('h4').text().trim();
      if(title) {
         console.log(`ID ${id} | ${title}`);
      }
    } catch(e) {
    }
  }
}
run();
