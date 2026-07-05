import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Pokoje',
    description: 'Sprawdź naszą ofertę na Pokoje w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/pokoje',
    },
};

export default function Page() {
    return <ClientPage />;
}
