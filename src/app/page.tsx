import type { Metadata } from 'next';
import HomeClient from './page.client';

export const metadata: Metadata = {
    title: 'Noclegi, Apartamenty i Czarter Jachtów na Mazurach',
    description: 'Zarezerwuj luksusowe apartamenty w Giżycku, domki na Mazurach (Skorupki) oraz czarter jachtów. Wybierz idealne miejsce na wypoczynek nad jeziorem.',
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return <HomeClient />;
}
