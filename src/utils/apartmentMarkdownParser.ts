import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface AmenityGroup {
    name: string;
    icon: string;
    items: string[];
}

export interface ApartmentMarkdownData {
    id: string;
    building: string;
    type: string;
    price: number;
    guests: string;
    description: string;
    extendedDescription?: string;
    amenities: AmenityGroup[];
    images: string[];
}

// Icon mapping for different room types
const iconMap: Record<string, string> = {
    'salon': '🛋️',
    'aneks': '🍳',
    'lozko': '🛏️',
    'lazienka': '🚿',
    'taras1': '🌿',
    'taras': '🌿',
};

/**
 * Parse amenity line from Markdown
 * Format: Name::icon_id::item1===item2===item3
 */
function parseAmenityLine(line: string): AmenityGroup | null {
    const parts = line.split('::');
    if (parts.length < 3) return null;

    const name = parts[0].trim();
    const iconId = parts[1].trim();
    const itemsString = parts[2].trim();

    const items = itemsString.split('===').map(item => item.trim()).filter(item => item.length > 0);

    return {
        name,
        icon: iconMap[iconId] || '✨',
        items
    };
}

/**
 * Read and parse apartment Markdown file
 */
export function readApartmentMarkdown(apartmentId: string): ApartmentMarkdownData | null {
    try {
        const filePath = path.join(process.cwd(), 'Oferta', 'Apartamenty_Stranda', apartmentId, 'Opis.md');

        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        // Parse content sections
        const lines = content.split('\n');
        let description = '';
        let extendedDescription = '';
        const amenities: AmenityGroup[] = [];

        let inDescriptionSection = false;
        let inAmenitiesSection = false;

        for (const line of lines) {
            const trimmed = line.trim();

            // Skip empty lines and headers (but NOT amenity lines that happen to start with ###)
            if (!trimmed || (trimmed.startsWith('#') && !trimmed.includes('::'))) {
                if (trimmed === '### Opis') {
                    inDescriptionSection = true;
                    inAmenitiesSection = false;
                    continue;
                } else if (trimmed.startsWith('## Sekcja środkowa')) {
                    inDescriptionSection = false;
                    inAmenitiesSection = true;
                    continue;
                } else if (trimmed.startsWith('###')) {
                    inDescriptionSection = false;
                    inAmenitiesSection = false;
                    continue;
                }
            }

            // Collect description
            if (inDescriptionSection && trimmed && !trimmed.startsWith('-')) {
                if (!description) {
                    description = trimmed;
                } else {
                    extendedDescription += (extendedDescription ? '\n\n' : '') + trimmed;
                }
            }

            // Parse amenities
            if (inAmenitiesSection && trimmed && trimmed.includes('::')) {
                // Handle lines that start with ### but also have amenity data
                let lineToparse = trimmed;
                if (trimmed.startsWith('###')) {
                    lineToparse = trimmed.substring(3).trim();
                }

                const amenity = parseAmenityLine(lineToparse);
                if (amenity) {
                    amenities.push(amenity);
                }
            }
        }

        // Get images from the images folder
        const imagesPath = path.join(process.cwd(), 'Oferta', 'Apartamenty_Stranda', apartmentId, 'images');
        let images: string[] = [];

        if (fs.existsSync(imagesPath)) {
            images = fs.readdirSync(imagesPath)
                .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.startsWith('.'))
                .map(file => `/mazury-holiday/apartments/${apartmentId}_images/${file}`);
        }

        return {
            id: data.id || apartmentId,
            building: data.building || 'A',
            type: data.type || 'Suite',
            price: data.price || 0,
            guests: data.guests || '2+2',
            description,
            extendedDescription: extendedDescription || undefined,
            amenities,
            images
        };
    } catch (error) {
        console.error(`Error reading apartment markdown for ${apartmentId}:`, error);
        return null;
    }
}
