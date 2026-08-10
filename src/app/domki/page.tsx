import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Domki na Mazurach - Skorupki i Fuleda',
    description: 'Wybierz komfortowe domki Mazury Holiday w Skorupkach lub Fuledzie.',
    alternates: {
        canonical: '/domki',
    },
};

export default function Page() {
    return <ClientPage />;
}
