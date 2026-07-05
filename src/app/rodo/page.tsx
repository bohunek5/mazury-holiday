import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Rodo',
    description: 'Sprawdź naszą ofertę na Rodo w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/rodo',
    },
};

export default function Page() {
    return <ClientPage />;
}
