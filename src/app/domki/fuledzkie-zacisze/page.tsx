'use client';

import ApartmentDetailTemplate from '@/components/ApartmentDetailTemplate';
import { fuledzkieZaciszeData as cottage } from '@/data/fuledzkie-zacisze-data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FuledzkieZaciszePage() {
    const { t } = useLanguage();
    const property = t('cottagePages', 'fuledzkie') as {
        title: string;
        location: string;
        description: string;
        aboutTitle: string;
        amenitiesTitle: string;
        gardenTitle: string;
        openInMaps: string;
        sectionLabels: Record<string, string>;
        highlights: string[];
        amenities: typeof cottage.amenities;
    };

    return (
        <ApartmentDetailTemplate
            data={{
                id: cottage.id,
                shortTitle: property.title,
                title: property.title,
                subtitle: property.location,
                description: property.description,
                amenities: property.amenities,
                sectionLabels: property.sectionLabels,
                mainImage: cottage.gallery.heroImage,
                gallery: cottage.gallery.images,
                idoBookingId: cottage.idoBookingId,
                icalUrl: cottage.icalUrl,
                customAboutTitle: property.aboutTitle,
                customAmenitiesTitle: property.amenitiesTitle,
                customBookingUrl: cottage.customBookingUrl,
                navigationUrl: 'https://www.google.com/maps/search/?api=1&query=54.0900704%2C21.6551523',
                navigationLabel: property.openInMaps,
                highlights: property.highlights,
            }}
            backUrl="/domki"
        />
    );
}
