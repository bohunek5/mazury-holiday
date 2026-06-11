const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const results = {};
  
  for (let id = 1; id <= 50; id++) {
    const url = `https://client37851.idobooking.com/book-now/index.php?ob[${id}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`;
    try {
      await page.goto(url, { waitUntil: 'networkidle2' });
      // Extract title
      const title = await page.evaluate(() => {
        const el = document.querySelector('h1, h2, .offer-title, .title');
        return el ? el.innerText.trim() : 'NOT FOUND';
      });
      if (title !== 'NOT FOUND' && title !== 'Brak wolnych miejsc w wybranym terminie' && title !== '') {
         results[id] = title;
      }
    } catch(e) {}
  }
  
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
