const axios = require('axios');
const cheerio = require('cheerio');

async function checkIds() {
    console.log("| ID | Nazwa na IdoBooking |");
    console.log("|---|---|");
    
    const promises = [];
    for (let id = 1; id <= 60; id++) {
        promises.push(
            axios.get(`https://engine37851.idobooking.com/index.php?module=modal-room&id=${id}`, { timeout: 10000 })
                .then(res => {
                    const $ = cheerio.load(res.data);
                    let title = $('h1').first().text().trim() || $('h2').first().text().trim() || $('.room-title').text().trim() || $('.title').first().text().trim();
                    // wait, maybe there is a specific class
                    if(!title) {
                        title = $('.modal-header h4').text().trim() || $('.modal-title').text().trim();
                    }
                    if(!title) {
                        title = $('body').text().substring(0, 50).trim().split('\n')[0]; // fallback
                    }
                    
                    return { id, title: title.replace(/\s+/g, ' ') };
                })
                .catch(e => {
                    return { id, title: 'Brak lub Błąd' };
                })
        );
    }
    
    const results = await Promise.all(promises);
    results.sort((a,b) => a.id - b.id).forEach(r => {
        if(r.title && r.title !== 'Brak lub Błąd' && !r.title.includes('Brak dostępu') && !r.title.includes('Not Found')) {
            console.log(`| ${r.id} | ${r.title} |`);
        }
    });
}
checkIds();
