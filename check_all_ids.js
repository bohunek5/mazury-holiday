const axios = require('axios');
const cheerio = require('cheerio');

async function checkIds() {
    console.log("| ID | Nazwa na IdoBooking |");
    console.log("|---|---|");
    
    // We only care about IDs 1 to 50
    const promises = [];
    for (let id = 1; id <= 50; id++) {
        promises.push(
            axios.get(`https://client37851.idobooking.com/book-now/index.php?ob[${id}]=1&showOtherOffers=true&currency=0&language=0&from_own_button=1`, { timeout: 10000 })
                .then(res => {
                    const $ = cheerio.load(res.data);
                    let title = $('h1').first().text().trim() || $('.offer-title').text().trim() || $('title').text().trim();
                    title = title.replace(/\s+/g, ' ');
                    return { id, title };
                })
                .catch(e => {
                    return { id, title: 'Brak lub Błąd' };
                })
        );
    }
    
    const results = await Promise.all(promises);
    results.sort((a,b) => a.id - b.id).forEach(r => {
        if(r.title && r.title !== 'Brak lub Błąd' && !r.title.includes('Rezerwuj')) {
            console.log(`| ${r.id} | ${r.title} |`);
        }
    });
}
checkIds();
