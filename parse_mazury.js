const https = require('https');
https.get('https://mazury.holiday/apartamenty-gizycko-stranda', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find all titles and links
    const matches = data.match(/<h[2-4][^>]*>(.*?)<\/h[2-4]>[\s\S]*?<a href="(https:\/\/engine37851\.idobooking\.com[^"]+)"/g);
    if(matches) {
       matches.forEach(m => {
           console.log("-------");
           console.log(m.replace(/\n/g, " "));
       })
    } else {
        console.log("No matches found");
    }
  });
});
