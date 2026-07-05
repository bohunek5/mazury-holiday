import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Projekty Unijne',
    description: 'Sprawdź naszą ofertę na Projekty Unijne w Mazury.Holiday. Rezerwuj online i ciesz się wyjątkowym wypoczynkiem na Mazurach.',
    alternates: {
        canonical: '/projekty-unijne',
    },
};

export default function Page() {
    return <ClientPage />;
}
