const https = require('https');

https.get('https://client37851.idobooking.com/book-now/index.php?showOtherOffers=true', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const regex = /<a[^>]+href="([^"]+)"[^>]*>([^<]*C[^<]*sypialniami[^<]*)<\/a>/gi;
        let match;
        while ((match = regex.exec(data)) !== null) {
            console.log("Found:", match[2].trim());
            console.log("URL:", match[1]);
        }
        
        // Also just look for any offer containing "C" and "sypialn"
        const regex2 = /class="offer-title"[^>]*>([^<]*)<\/a>/gi;
        console.log("All offers:");
        while ((match = regex2.exec(data)) !== null) {
            if (match[1].toLowerCase().includes('c') || match[1].toLowerCase().includes('sypialn')) {
                console.log(match[1].trim());
            }
        }
    });
});
