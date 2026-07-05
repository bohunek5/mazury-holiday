import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/admin_panel/'],
        },
        sitemap: 'https://mazuryholiday.pl/sitemap.xml',
    };
}
