import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Koncerty',
    description: 'Sprawdź naszą ofertę na Koncerty w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/koncerty',
    },
};

export default function Page() {
    return <ClientPage />;
}
