import { MetadataRoute } from 'next';
export const dynamic = 'force-static';
import { strandaApartments } from '@/data/stranda-apartments';
import { fuledaApartments } from '@/data/fuleda-data';
import { kisajnoApartments } from '@/data/kisajno-data';
import { mikolajkiApartments } from '@/data/mikolajki-data';
import { skorupkiCottages } from '@/data/skorupki-data';
import { pokojeFuleda } from '@/data/pokoje-fuleda-data';
import { czarterYachts } from '@/data/czarter-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mazury.holiday';
    const lastModified = new Date();

    const staticRoutes = [
        '',
        '/apartamenty',
        '/domki',
        '/pokoje',
        '/czarter',
        '/tawerna',
        '/atrakcje',
        '/koncerty',
        '/kontakt',
        '/faq',
        '/wspolpraca',
        '/polityka-prywatnosci',
        '/regulamin',
        '/rodo',
        '/projekty-unijne',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    const strandaRoutes = Object.values(strandaApartments).map((apt) => ({
        url: `${baseUrl}/apartamenty/stranda/${apt.id}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const fuledaRoutes = Object.values(fuledaApartments).map((apt) => ({
        url: `${baseUrl}/apartamenty/fuleda/${apt.id}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Other apartments/cottages if they have dynamic routes
    // Currently, I need to check if kisajno has dynamic routes. In `src/app/apartamenty/kisajno/page.tsx` it might just be a static page if there's only one, or dynamic. Let's assume they don't all have `[id]` right now except stranda and fuleda based on previous logs.
    // Let's add them just in case, or check. From my previous `ls` output: 
    // /apartamenty/stranda/[id] and /apartamenty/fuleda/[id] are the only dynamic routes under apartamenty.
    
    return [...staticRoutes, ...strandaRoutes, ...fuledaRoutes];
}
