const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://mazury.holiday/apartamenty-gizycko-stranda', { waitUntil: 'networkidle2' });
  
  const apartments = await page.evaluate(() => {
    const cards = document.querySelectorAll('a[href^="/apartamenty/stranda/"]');
    const results = [];
    cards.forEach(card => {
      const href = card.getAttribute('href');
      const titleEl = card.querySelector('h3');
      if (titleEl) {
        results.push({ href, title: titleEl.innerText.trim() });
      }
    });
    return results;
  });
  
  console.log(JSON.stringify(apartments, null, 2));
  await browser.close();
})();
