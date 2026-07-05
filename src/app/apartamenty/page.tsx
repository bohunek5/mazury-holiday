import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Apartamenty Giżycko (Stranda, Kisajno) - Luksusowe Noclegi na Mazurach',
    description: 'Zarezerwuj luksusowy apartament w Giżycku. Oferujemy komfortowe noclegi w kompleksie Stranda oraz Kisajno. Idealne na wakacje na Mazurach.',
    alternates: {
        canonical: '/apartamenty',
    },
};

export default function Page() {
    return <ClientPage />;
}
