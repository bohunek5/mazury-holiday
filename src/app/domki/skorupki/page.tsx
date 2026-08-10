'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { skorupkiData } from '@/data/skorupki-data';
import ApartmentDetailTemplate from '@/components/ApartmentDetailTemplate';

export default function SkorupkiPage() {
    const { t } = useLanguage();
    return (
        <ApartmentDetailTemplate
            data={{
                id: skorupkiData.id,
                shortTitle: skorupkiData.title,
                title: t('apartments', 'items.domkiSkorupki.title') || 'Domki Skorupki',
                subtitle: t('apartments', 'items.domkiSkorupki.location') || 'Skorupki, jezioro Tałty',
                description: `${t('skorupki', 'descriptionPart1')}\n\n${t('skorupki', 'descriptionPart2')}\n\n${t('skorupki', 'descriptionPart3')}\n\n${t('skorupki', 'descriptionPart4')}`,
                mainImage: skorupkiData.gallery.heroImage,
                gallery: skorupkiData.gallery.images,
                idoBookingId: skorupkiData.idoBookingId,
                icalUrl: skorupkiData.icalUrl,
                customAboutTitle: skorupkiData.customAboutTitle,
                customAmenitiesTitle: skorupkiData.customAmenitiesTitle,
                amenities: {
                    living: ['klimatyzacja', 'WiFi', 'Smart TV'],
                    kitchen: ['wyposażony aneks kuchenny', 'zmywarka', 'płyta indukcyjna'],
                    bedroom: ['łóżka małżeńskie i pojedyncze', 'pościel'],
                    bathroom: ['prysznic', 'ręczniki'],
                    terrace: ['prywatny taras z grillem', 'miejsce na ognisko', 'dostęp do jeziora', 'miejsce parkingowe'],
                },
                customBookingUrl: skorupkiData.customBookingUrl,
                highlights: ['Dostęp do jeziora', 'Prywatny taras'],
            }}
            backUrl="/domki"
        />
    );
}
