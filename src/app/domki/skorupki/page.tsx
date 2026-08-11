'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { skorupkiData } from '@/data/skorupki-data';
import ApartmentDetailTemplate from '@/components/ApartmentDetailTemplate';

export default function SkorupkiPage() {
    const { t } = useLanguage();
    const property = t('cottagePages', 'skorupki') as {
        title: string;
        location: string;
        aboutTitle: string;
        amenitiesTitle: string;
        sectionLabels: Record<string, string>;
        highlights: string[];
        amenities: {
            living: string[];
            kitchen: string[];
            bedroom: string[];
            bathroom: string[];
            terrace: string[];
        };
    };

    return (
        <ApartmentDetailTemplate
            data={{
                id: skorupkiData.id,
                shortTitle: property.title,
                title: property.title,
                subtitle: property.location,
                description: `${t('skorupki', 'descriptionPart1')}\n\n${t('skorupki', 'descriptionPart2')}\n\n${t('skorupki', 'descriptionPart3')}\n\n${t('skorupki', 'descriptionPart4')}`,
                mainImage: skorupkiData.gallery.heroImage,
                gallery: skorupkiData.gallery.images,
                idoBookingId: skorupkiData.idoBookingId,
                icalUrl: skorupkiData.icalUrl,
                customAboutTitle: property.aboutTitle,
                customAmenitiesTitle: property.amenitiesTitle,
                amenities: property.amenities,
                sectionLabels: property.sectionLabels,
                customBookingUrl: skorupkiData.customBookingUrl,
                highlights: property.highlights,
            }}
            backUrl="/domki"
        />
    );
}
