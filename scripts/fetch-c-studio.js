const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const sharp = require('sharp');

const properties = [
    { id: 'c-z-dwoma-sypialniami', idoBookingId: '43', type: 'stranda' },
    { id: 'c-z-jedna-sypialnia', idoBookingId: '44', type: 'stranda' }
];

const BASE_URL = 'https://engine37851.idobooking.com';
const PUBLIC_DIR = path.join(__dirname, '../public/images');

async function fetchImages(property) {
    const url = `${BASE_URL}/index.php?module=modal-room&id=${property.idoBookingId}`;
    console.log(`Fetching ${property.id} (ID: ${property.idoBookingId})...`);

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const imageUrls = [];
        $('a[data-imagelightbox]').each((i, el) => {
            let href = $(el).attr('href');
            if (href) {
                if (href.startsWith('/')) href = BASE_URL + href;
                if (!imageUrls.includes(href)) imageUrls.push(href);
            }
        });

        if (imageUrls.length === 0) {
            $('img').each((i, el) => {
                let src = $(el).attr('src');
                if (src && src.includes('/images/objects/pictures/large')) {
                    if (src.startsWith('/')) src = BASE_URL + src;
                    if (!imageUrls.includes(src)) imageUrls.push(src);
                }
            });
        }

        console.log(`Found ${imageUrls.length} images for ${property.id}`);

        const dir = path.join(PUBLIC_DIR, property.type, property.id);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        const savedImages = [];
        const limit = Math.min(imageUrls.length, 30);

        for (let i = 0; i < limit; i++) {
            const imgUrl = imageUrls[i];
            const imageName = `${property.id}_${i + 1}.webp`;
            const imagePath = path.join(dir, imageName);
            const publicPath = `/images/${property.type}/${property.id}/${imageName}`;

            try {
                const response = await axios({ url: imgUrl, responseType: 'arraybuffer' });
                await sharp(response.data).webp({ quality: 80 }).toFile(imagePath);
                savedImages.push(publicPath);
            } catch (err) {
                console.error(`Failed to process image ${imgUrl}:`, err.message);
            }
        }
        return savedImages;
    } catch (error) {
        console.error(`Error:`, error.message);
        return [];
    }
}

async function main() {
    const results = {};
    for (const property of properties) {
        const images = await fetchImages(property);
        if (images.length > 0) {
            results[property.id] = {
                heroImage: images[0],
                images: images
            };
        }
    }
    fs.writeFileSync(path.join(__dirname, 'c_studio_images.json'), JSON.stringify(results, null, 2));
    console.log('Done!');
}

main();
