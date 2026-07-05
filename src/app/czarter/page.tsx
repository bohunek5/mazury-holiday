import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Czarter Jachtów Giżycko - Wynajem jachtów motorowych na Mazurach',
    description: 'Czarter jachtów na Mazurach. Wynajmij luksusowy jacht motorowy w Giżycku (Port Stranda). Nowoczesna flota, bez patentu, pełne wyposażenie.',
    alternates: {
        canonical: '/czarter',
    },
};

export default function Page() {
    return <ClientPage />;
}
