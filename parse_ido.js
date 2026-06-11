const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('idobooking.html', 'utf8');
const $ = cheerio.load(html);

console.log("| ID | Tytuł IdoBooking |");
console.log("|---|---|");

$('[data-id], [id^="ob_"]').each((i, el) => {
    let id = $(el).attr('data-id') || $(el).attr('id');
    let title = $(el).find('h2, h3, .offer_title, [class*="title"]').first().text().trim();
    if(id && id.includes('ob_')) {
        console.log(`| ${id.replace('ob_', '')} | ${title || 'Brak tytułu'} |`);
    } else if (id && title) {
        console.log(`| ${id} | ${title} |`);
    }
});

// Let's also look for script tags that contain the data JSON
$('script').each((i, el) => {
    const text = $(el).html();
    if (text && text.includes('var initData')) {
        // Just extract the chunk
        const match = text.match(/var initData\s*=\s*(\{.*?\});/s);
        if (match) {
            fs.writeFileSync('ido_data.json', match[1]);
            console.log("Extracted ido_data.json");
        }
    }
    if (text && text.includes('"id":')) {
        // search for any JSON objects
    }
});

