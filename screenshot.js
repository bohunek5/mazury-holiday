const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://mazury.holiday/pokoje/fuleda', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'pokoje_fuleda.png', fullPage: true });
  await browser.close();
})();
