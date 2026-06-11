const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function mapSite() {
    console.log("Pobieram stronę główną by zebrać linki apartamentów...");
    let response;
    try {
        response = await axios.get('https://mazury.holiday/apartamenty-gizycko-stranda');
    } catch(e) {
        console.error("Błąd pobierania", e.message);
        return;
    }
    const $ = cheerio.load(response.data);
    
    // gather links
    const links = new Set();
    $('a[href^="/apartament-"]').each((i, el) => {
        let href = $(el).attr('href');
        if(href.includes('#')) href = href.split('#')[0]; // remove hash
        links.add('https://mazury.holiday' + href);
    });
    
    // Także te z prefixem /studio- albo /pokoje- ?
    $('a[href^="/studio-"], a[href^="/pokoj-"]').each((i, el) => {
        let href = $(el).attr('href');
        if(href.includes('#')) href = href.split('#')[0]; 
        links.add('https://mazury.holiday' + href);
    });

    console.log(`Znalazłem ${links.size} podstron apartamentów. Rozpoczynam sprawdzanie ID...`);
    
    const results = [];
    const promises = Array.from(links).map(url => {
        return axios.get(url, { timeout: 15000 })
            .then(res => {
                const sub$ = cheerio.load(res.data);
                let idobookingLink = sub$('a[href*="ob["]').attr('href');
                let id = 'NOT_FOUND';
                if(idobookingLink) {
                    const match = idobookingLink.match(/ob\[(\d+)\]/);
                    if(match) id = match[1];
                } else {
                    // Czasami iframe albo skrypt
                    const html = res.data;
                    const match2 = html.match(/ob\[(\d+)\]/);
                    if(match2) id = match2[1];
                }
                
                let title = sub$('h1').first().text().trim();
                if(!title) title = url.split('/').pop();
                
                results.push({ url, id, title });
            })
            .catch(e => {
                results.push({ url, id: 'ERROR', title: url });
            });
    });
    
    await Promise.all(promises);
    
    results.sort((a,b) => {
        let idA = parseInt(a.id) || 999;
        let idB = parseInt(b.id) || 999;
        return idA - idB;
    });
    
    // Now get what we have in stranda-apartments.ts
    const code = fs.readFileSync('src/data/stranda-apartments.ts', 'utf8');
    const regex = /'([a-zA-Z0-9-]+)':\s*\{[^}]*title:\s*["']([^"']+)["'][^}]*idoBookingId:\s*['"](\d+)['"]/gs;
    const ourData = {};
    let match;
    while((match = regex.exec(code)) !== null) {
        ourData[match[3]] = match[2];
    }
    
    console.log("\n| ID IdoBooking | Apartament (mazury.holiday) | Tytuł w naszym kodzie (mazuryholiday.pl) | Zgodność |");
    console.log("|---|---|---|---|");
    for(const r of results) {
        const ourTitle = ourData[r.id] || '(Brak w kodzie)';
        let ok = ourTitle !== '(Brak w kodzie)' ? '🟢' : '🔴';
        // if names match reasonably well, maybe extra green
        console.log(`| **${r.id}** | [${r.title}](${r.url}) | ${ourTitle} | ${ok} |`);
    }
    
    // Save to markdown for user
    let md = "# Raport mapowania ID IdoBooking\n\n";
    md += "| ID IdoBooking | Apartament (mazury.holiday) | Tytuł w naszym kodzie (mazuryholiday.pl) | Status |\n";
    md += "|---|---|---|---|\n";
    for(const r of results) {
        const ourTitle = ourData[r.id] || '(Brak w kodzie)';
        let ok = ourTitle !== '(Brak w kodzie)' ? '🟢' : '🔴';
        md += `| **${r.id}** | [${r.title}](${r.url}) | ${ourTitle} | ${ok} |\n`;
    }
    fs.writeFileSync('/Users/karolbohdanowicz/Downloads/Raport_Mapowanie_IdoBooking.md', md);
    console.log("\nRaport zapisany do /Users/karolbohdanowicz/Downloads/Raport_Mapowanie_IdoBooking.md");
}

mapSite();
