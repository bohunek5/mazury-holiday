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
    const floorDigit = normalizedId.toUpperCase().match(/^[A-C](\d)/)?.[1];
    const floorLabel = floorDigit
        ? Number(floorDigit) === 1
            ? "Parter"
            : `${Number(floorDigit) - 1}. piętro`
        : null;
    const searchableDetails = [
        data.title,
        data.description,
        ...Object.values(data.amenities).flatMap(items => items || []),
    ].join(" ").toLowerCase();
    const hasJacuzzi = searchableDetails.includes("jacuzzi");
    const hasRooftopJacuzzi = hasJacuzzi && (
        searchableDetails.includes("jacuzzi na dachu") ||
        !!data.amenities.terrace2?.some(item => item.toLowerCase().includes("jacuzzi"))
    );
    const isStudio = data.type.toLowerCase().includes("studio") || normalizedId.toLowerCase() === "studio";
    const hasTwoBedrooms = !!data.amenities.bedroom2?.length || data.type.toLowerCase().includes("twobedroom");
    const highlights = [
        floorLabel,
        hasJacuzzi ? (hasRooftopJacuzzi ? "Jacuzzi na dachu" : "Prywatne jacuzzi") : null,
        isStudio ? "Studio" : hasTwoBedrooms ? "2 sypialnie" : "1 sypialnia",
        searchableDetails.includes("saun") ? "Prywatna sauna" : null,
    ].filter((item): item is string => Boolean(item));

    return (
        <ApartmentDetailTemplate 
            data={{
                id: id,
                shortTitle: shortTitle,
                title: language === "pl" ? data.title : ((t("strandaDescriptions", `${normalizedId}_title` as any) as any) !== `${normalizedId}_title` ? t("strandaDescriptions", `${normalizedId}_title` as any) : (data.title || `${t("stranda", "apartment")} ${normalizedId} ${t("strandaTypes", data.type as any) || data.type}`)),
                description: language === "pl" ? data.description : (t("strandaDescriptions", normalizedId as any) !== normalizedId ? t("strandaDescriptions", normalizedId as any) : data.description),
                amenities: data.amenities,
                sectionLabels: data.sectionLabels,
                mainImage: data.gallery.heroImage,
                gallery: data.gallery.images,
                idoBookingId: data.idoBookingId,
                icalUrl: data.icalUrl,
                virtualTourUrl: data.virtualTourUrl,
                highlights,
            }} 
            backUrl="/apartamenty/stranda"
        />
    );
}
