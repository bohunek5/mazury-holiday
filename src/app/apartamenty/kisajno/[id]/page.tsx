import { kisajnoApartments } from '@/data/kisajno-data';
import KisajnoDetailClient from './KisajnoDetailClient';

export function generateStaticParams() {
    return Object.keys(kisajnoApartments).map(id => ({ id: id.toLowerCase() }));
}

export default async function KisajnoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <KisajnoDetailClient id={id} />;
}
