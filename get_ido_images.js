const https = require('https');

https.get('https://client37851.idobooking.com/book-now/index.php?ob[43]=&showOtherOffers=true&currency=0&language=0&from_own_button=1', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Find any URL ending with .jpg or .png
        const urls = data.match(/https:\/\/[^\"]+\.(jpg|png|webp|jpeg)/gi);
        if (urls) {
            const uniqueUrls = [...new Set(urls)];
            console.log("Found images:");
            uniqueUrls.forEach(u => console.log(u));
        } else {
            console.log("No images found");
        }
    });
});
