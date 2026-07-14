"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { fuledaApartments } from "@/data/fuleda-data";
import ApartmentDetailTemplate from "@/components/ApartmentDetailTemplate";

interface FuledaDetailClientProps {
    id: 'parter' | 'pietro';
}

export default function FuledaDetailClient({ id }: FuledaDetailClientProps) {
    const { t } = useLanguage();
    const data = fuledaApartments[id];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const title = `Apartament Fuleda ${id === 'parter' ? 'Parter' : 'Piętro'}`;

    return (
        <ApartmentDetailTemplate 
            data={{
                id: `fuleda-${id}`,
                shortTitle: `${t("stranda", "apartment")} Fuleda ${id === 'parter' ? 'Parter' : 'Piętro'}`,
                title: title,
                subtitle: t("apartments", "items.fuleda.location") as string || "Fuleda, Jezioro Dobskie",
                description: data.description,
                amenities: data.amenities,
                mainImage: data.gallery.heroImage,
                gallery: data.gallery.images,
                idoBookingId: data.idoBookingId,
                icalUrl: data.icalUrl,
                customAboutTitle: t("details", "about") === "O apartamencie" ? "O domku" : t("details", "about")
            }}
            backUrl="/apartamenty/fuleda"
        />
    );
}
