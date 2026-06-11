const axios = require('axios');
const cheerio = require('cheerio');

async function checkIds() {
    try {
        const response = await axios.get('https://mazury.holiday/apartamenty-gizycko-stranda');
        const $ = cheerio.load(response.data);
        
        console.log("=== MAPPING FROM OLD SITE ===");
        
        // Find all links to idobooking
        $('a[href*="idobooking.com"]').each((i, el) => {
            const href = $(el).attr('href');
            // Try to find the closest heading or title
            const title = $(el).closest('.elementor-widget-wrap').find('h2, h3, h4').first().text().trim() || 
                          $(el).closest('section, div').find('h2, h3, h4').first().text().trim() || 
                          "UNKNOWN TITLE";
                          
            const match = href.match(/ob\[(\d+)\]/);
            const id = match ? match[1] : 'NOT_FOUND';
            
            console.log(`ID: ${id} | Tytuł ze strony: ${title}`);
        });
        
    } catch (e) {
        console.error("Error scraping:", e.message);
    }
}

checkIds();
