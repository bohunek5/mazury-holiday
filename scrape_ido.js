const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto('https://client37851.idobooking.com/book-now/index.php?ob[43]=', { waitUntil: 'networkidle2' });
        
        const images = await page.evaluate(() => {
            const imgs = Array.from(document.querySelectorAll('img'));
            return imgs.map(img => img.src).filter(src => src.includes('pictures'));
        });
        
        console.log("Found images for ID 43:");
        console.log(JSON.stringify([...new Set(images)], null, 2));
        
        await browser.close();
    } catch (e) {
        console.error("Error:", e);
    }
})();
