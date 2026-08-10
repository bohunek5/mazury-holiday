'use client';

import ApartmentDetailTemplate from '@/components/ApartmentDetailTemplate';
import { fuledzkieZaciszeData as cottage } from '@/data/fuledzkie-zacisze-data';

export default function FuledzkieZaciszePage() {
    return (
        <ApartmentDetailTemplate
            data={{
                id: cottage.id,
                shortTitle: cottage.title,
                title: cottage.title,
                subtitle: 'Fuleda, Mazury',
                description: cottage.description,
                amenities: cottage.amenities,
                sectionLabels: { general: 'Ogród i otoczenie' },
                mainImage: cottage.gallery.heroImage,
                gallery: cottage.gallery.images,
                idoBookingId: cottage.idoBookingId,
                icalUrl: cottage.icalUrl,
                customAboutTitle: 'O domku',
                customAmenitiesTitle: 'Udogodnienia w domku',
                customBookingUrl: cottage.customBookingUrl,
                highlights: ['2 sypialnie', 'Publiczna plaża 400 m'],
            }}
            backUrl="/domki"
        />
    );
}
