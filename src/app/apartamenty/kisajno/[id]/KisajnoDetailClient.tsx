'use client';

import ApartmentDetailTemplate from '@/components/ApartmentDetailTemplate';
import { kisajnoApartments } from '@/data/kisajno-data';

export default function KisajnoDetailClient({ id }: { id: string }) {
    const key = id.toUpperCase();
    const apartment = kisajnoApartments[key];
    if (!apartment) return <div className="min-h-screen p-24 text-center">Apartament nie został znaleziony.</div>;

    return (
        <ApartmentDetailTemplate
            data={{
                id: apartment.id,
                shortTitle: `Apartament ${apartment.id}`,
                title: apartment.title,
                subtitle: 'Giżycko, jezioro Kisajno',
                description: apartment.description,
                amenities: apartment.amenities,
                mainImage: apartment.gallery.heroImage,
                gallery: apartment.gallery.images,
                idoBookingId: apartment.idoBookingId,
                icalUrl: apartment.icalUrl,
                customBookingUrl: apartment.customBookingUrl,
                highlights: [
                    ...(apartment.id === 'K15' ? ['Parter'] : []),
                    apartment.amenities.bedroom2?.length ? '2 sypialnie' : '1 sypialnia',
                ],
            }}
            backUrl="/apartamenty/kisajno"
        />
    );
}
