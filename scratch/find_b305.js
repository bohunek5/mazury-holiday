const axios = require('axios');
const cheerio = require('cheerio');
const ids = [44, 32, 43, 20, 21, 33, 34, 35, 36, 12, 13, 14];
async function run() {
  for(let id of ids) {
    try {
      const res = await axios.get('https://engine37851.idobooking.com/index.php?module=modal-room&id=' + id);
      const $ = cheerio.load(res.data);
      const desc = $('.room-descr').text();
      if(desc.includes('304') || desc.includes('305')) {
          console.log(`FOUND IN ID ${id}: ${desc.substring(0, 100)}`);
      }
    } catch(e) {
    }
  }
}
run();
