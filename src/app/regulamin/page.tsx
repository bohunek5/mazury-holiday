import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Regulamin',
    description: 'Sprawdź naszą ofertę na Regulamin w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/regulamin',
    },
};

export default function Page() {
    return <ClientPage />;
}
