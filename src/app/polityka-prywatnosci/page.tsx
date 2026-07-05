import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Polityka Prywatności',
    description: 'Sprawdź naszą ofertę na Polityka Prywatności w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/polityka-prywatnosci',
    },
};

export default function Page() {
    return <ClientPage />;
}
