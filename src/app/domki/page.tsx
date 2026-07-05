import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'Domki na Mazurach (Skorupki) - Wynajem domków nad jeziorem',
    description: 'Wynajmij komfortowy domek na Mazurach w miejscowości Skorupki. Bliskość jeziora Tałty, natura i spokój. Idealne miejsce dla rodzin i znajomych.',
    alternates: {
        canonical: '/domki',
    },
};

export default function Page() {
    return <ClientPage />;
}
