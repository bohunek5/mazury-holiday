import type { Metadata } from 'next';
import ClientPage from './page.client';

export const metadata: Metadata = {
    title: 'FAQ - Najczęściej zadawane pytania - Mazury.Holiday',
    description: 'Masz pytania dotyczące wynajmu apartamentów, domków lub czarteru jachtów? Sprawdź najczęściej zadawane pytania (FAQ) w Mazury.Holiday.',
    alternates: {
        canonical: '/faq',
    },
};

export default function Page() {
    return <ClientPage />;
}
