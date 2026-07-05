import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Kontakt i Lokalizacja - Mazury.Holiday Giżycko',
    description: 'Skontaktuj się z nami! Mazury.Holiday oferuje luksusowe apartamenty, domki i czarter jachtów. Sprawdź lokalizację (Giżycko, Skorupki) i dane kontaktowe.',
    alternates: {
        canonical: '/kontakt',
    },
};

export default function Page() {
    return <ClientPage />;
}
