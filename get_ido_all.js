const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto('https://client37851.idobooking.com/book-now/index.php', { waitUntil: 'networkidle2' });
        
        const offers = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('.offer-title'));
            return items.map(item => ({
                title: item.textContent.trim(),
                url: item.href
            }));
        });
        
        console.log("All offers:");
        console.log(JSON.stringify(offers, null, 2));
        
        await browser.close();
    } catch (e) {
        console.error("Error:", e);
    }
})();
