"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ApartmentDetailTemplate from "@/components/ApartmentDetailTemplate";

interface ApartmentDetailClientProps {
    id?: string;
}

export default function ApartmentDetailClient({ id }: ApartmentDetailClientProps) {
    const { t, language } = useLanguage();
    
    // Case-insensitive lookup
    const normalizedId = id ? Object.keys(strandaApartments).find(key => key.toLowerCase() === id.toLowerCase()) || id : '';
    const data = strandaApartments[normalizedId as keyof typeof strandaApartments];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const shortName = normalizedId.toLowerCase() === 'c' ? 'C' : 
                      normalizedId.toLowerCase() === 'studio' ? 'Studio' : 
                      normalizedId.toUpperCase();
    const shortTitle = `${t("stranda", "apartment")} ${shortName}`;

    return (
        <ApartmentDetailTemplate 
            data={{
                id: id,
                shortTitle: shortTitle,
                title: language === "pl" ? data.title : ((t("strandaDescriptions", `${normalizedId}_title` as any) as any) !== `${normalizedId}_title` ? t("strandaDescriptions", `${normalizedId}_title` as any) : (data.title || `${t("stranda", "apartment")} ${normalizedId} ${t("strandaTypes", data.type as any) || data.type}`)),
                description: language === "pl" ? data.description : (t("strandaDescriptions", normalizedId as any) !== normalizedId ? t("strandaDescriptions", normalizedId as any) : data.description),
                amenities: data.amenities,
                mainImage: data.gallery.heroImage,
                gallery: data.gallery.images,
                idoBookingId: data.idoBookingId,
                icalUrl: data.icalUrl,
                virtualTourUrl: data.virtualTourUrl
            }} 
            backUrl="/apartamenty/stranda"
        />
    );
}
