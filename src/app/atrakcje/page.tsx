import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Atrakcje',
    description: 'Sprawdź naszą ofertę na Atrakcje w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/atrakcje',
    },
};

export default function Page() {
    return <ClientPage />;
}
