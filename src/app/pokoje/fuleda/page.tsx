"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import { translations } from "@/lib/translations";
import ApartmentDetailTemplate from "@/components/ApartmentDetailTemplate";

export default function PokojeFuledaPage() {
    const { language } = useLanguage();
    
    // Safely access current language translations
    const getCurrentTranslations = () => {
        return translations[language]?.pokojeFuledaPage || translations['en']?.pokojeFuledaPage || translations['pl'].pokojeFuledaPage;
    };

    const trans = getCurrentTranslations();
    const data = pokojeFuledaData;

    const mappedData = {
        id: data.id,
        title: trans.heroTitle || data.title,
        subtitle: "Jezioro Dobskie, Fuleda Róg",
        description: trans.description || data.description,
        amenities: {
            bedroom: data.amenities.room1,
            bedroom2: data.amenities.room2,
            bathroom: data.amenities.bathroom,
            kitchen: data.amenities.kitchen,
            terrace: data.amenities.terrace,
        },
        gallery: data.gallery.images,
        mainImage: data.gallery.heroImage,
        idoBookingId: data.idoBookingId,
        icalUrl: data.icalUrl,
    };

    return <ApartmentDetailTemplate data={mappedData} breadcrumbPath={[{ name: "Pokoje", url: "/pokoje" }, { name: "Fuleda", url: "/pokoje/fuleda" }]} />;
}
