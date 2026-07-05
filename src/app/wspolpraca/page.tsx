import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Wspolpraca',
    description: 'Sprawdź naszą ofertę na Wspolpraca w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/wspolpraca',
    },
};

export default function Page() {
    return <ClientPage />;
}
