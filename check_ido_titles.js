const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const ids = [32, 43, 44, 46];
  const results = {};
  
  for (const id of ids) {
    const url = `https://client37851.idobooking.com/book-now/index.php?ob[${id}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`;
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      // Extract title from h1 or .offer-title
      const title = await page.evaluate(() => {
        const el = document.querySelector('h1, h2, .offer-title, .title');
        return el ? el.innerText.trim() : 'NOT FOUND';
      });
      results[id] = title;
    } catch(e) {
      results[id] = 'ERROR';
    }
  }
  
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
