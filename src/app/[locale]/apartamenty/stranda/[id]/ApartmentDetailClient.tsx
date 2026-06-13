"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ApartmentDetailTemplate from "@/components/ApartmentDetailTemplate";

interface ApartmentDetailClientProps {
    id?: string;
}

export default function ApartmentDetailClient({ id }: ApartmentDetailClientProps) {
    const { t, language } = useLanguage();
    const key = id ? Object.keys(strandaApartments).find(k => k.toLowerCase() === id.toLowerCase()) : undefined;
    const data = key ? strandaApartments[key as keyof typeof strandaApartments] : undefined;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    return (
        <ApartmentDetailTemplate 
            data={{
                id: id,
                title: data.title || `${t("stranda", "apartment")} ${id} ${t("strandaTypes", data.type as any) || data.type}`,
                description: language === "pl" ? data.description : (t("strandaDescriptions", id as any) || data.description),
                amenities: data.amenities,
                mainImage: data.gallery.heroImage,
                gallery: data.gallery.images,
                idoBookingId: data.idoBookingId,
                icalUrl: data.icalUrl
            }} 
            backUrl="/apartamenty/stranda"
        />
    );
}
