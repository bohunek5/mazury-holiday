"use client";

import Navbar from "@/components/Navbar";
import { getAssetPath, getThumbPath } from "@/utils/assetPath";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import ICalCalendar from "@/components/ICalCalendar";
import { useRouter } from "next/navigation";
import { ArrowLeft, BedDouble, Building2, CalendarDays, MapPin, Waves } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

export interface ApartmentTemplateData {
    id?: string;
    title: string;
    shortTitle?: string;
    subtitle?: string;
    description: string;
    amenities: {
        living?: string[];
        bedroom?: string[];
        bedroom2?: string[];
        bathroom?: string[];
        bathroom2?: string[];
        kitchen?: string[];
        terrace?: string[];
        terrace2?: string[];
        general?: string[];
    };
    sectionLabels?: Partial<Record<"living" | "kitchen" | "bedroom" | "bedroom2" | "bathroom" | "bathroom2" | "terrace" | "terrace2" | "general", string>>;
    mainImage: string;
    gallery: string[];
    idoBookingId?: string;
    icalUrl?: string;
    customBookingUrl?: string;
    navigationUrl?: string;
    navigationLabel?: string;
    customAboutTitle?: string;
    customAmenitiesTitle?: string;
    virtualTourUrl?: string;
    highlights?: string[];
}

interface ApartmentDetailTemplateProps {
    data: ApartmentTemplateData;
    backUrl?: string;
    breadcrumbPath?: { name: string; url: string }[];
}

export default function ApartmentDetailTemplate({ data, backUrl, breadcrumbPath }: ApartmentDetailTemplateProps) {
    const { t } = useLanguage();
    
    const parseTitle = (title: string) => {
        if (!title) return title;
        // @ts-ignore
        const exactMatch = t("apartmentNames", title);
        console.log("parseTitle:", { title, exactMatch });
        if (exactMatch && exactMatch !== title) return exactMatch;
        
        const match = title.match(/^(.*?)\s*\(\s*(.*?)\s*\)$/);
        console.log("parseTitle match:", match);
        if (match) {
            const baseTitle = match[1].trim();
            const id = match[2].trim();
            // @ts-ignore
            const translatedBase = t("apartmentNames", baseTitle);
            console.log("parseTitle translatedBase:", { baseTitle, id, translatedBase });
            if (translatedBase && translatedBase !== baseTitle) {
                return `${translatedBase} (${id})`;
            }
        }
        return title;
    };
    
    const router = useRouter();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);




    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const apartment = {
        title: data.title,
        shortTitle: data.shortTitle,
        description: data.description,
        mainImage: data.mainImage.startsWith('/')
            ? data.mainImage.replace(/\.(jpe?g|png)$/i, '.webp')
            : data.mainImage,
        gallery: data.gallery
    };

    const amenitySections = [
        { key: "living", label: t("details", "items.roomSalon") || "Salon", icon: "/images/icons/SOFA.svg" },
        { key: "kitchen", label: t("details", "items.roomKitchen") || "Kuchnia", icon: "/images/icons/KITCHEN.svg" },
        { key: "bedroom", label: data.amenities.bedroom2 ? "Sypialnia 1" : (t("details", "items.roomBedroom") || "Sypialnia"), icon: "/images/icons/BED.svg" },
        { key: "bedroom2", label: "Sypialnia 2", icon: "/images/icons/BED.svg" },
        { key: "bathroom", label: data.amenities.bathroom2 ? "Łazienka 1" : (t("details", "items.roomBathroom") || "Łazienka"), icon: "/images/icons/SHOWER.svg" },
        { key: "bathroom2", label: "Łazienka 2", icon: "/images/icons/SHOWER.svg" },
        { key: "terrace", label: data.amenities.terrace2 ? "Taras dolny" : "Taras", icon: "/images/icons/TERRACE.svg" },
        { key: "terrace2", label: "Taras dachowy", icon: "/images/icons/TERRACE.svg" },
        { key: "general", label: "Pozostałe", icon: "/images/icons/TERRACE.svg" },
    ] as const;
    const bookingUrl = data.customBookingUrl || `https://client37851.idobooking.com/book-now/index.php?ob[${data.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`;

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pb-24 lg:pb-0">
            <Navbar />

            {/* Hero image without text overlays */}
            <section className="relative w-full h-[clamp(260px,70vw,390px)] md:h-[clamp(320px,37.5vw,560px)]">
                <Image
                    src={apartment.mainImage}
                    alt={apartment.title}
                    fill
                    className="object-cover"
                    priority
                />
            </section>

            {/* Content Section */}
            <section className="py-8 md:py-10 px-4 max-w-7xl mx-auto">
                <button
                    onClick={() => backUrl ? router.push(backUrl) : router.back()}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>{t("details", "backToList") || "Powrót"}</span>
                </button>

                <div className="mb-10 max-w-5xl">
                    {data.subtitle && (
                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                            <MapPin className="w-4 h-4" />
                            <span>{data.subtitle}</span>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-3">
                        {parseTitle(apartment.shortTitle || apartment.title)}
                    </h1>
                    {apartment.shortTitle && (
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-snug">
                            {parseTitle(apartment.title)}
                        </p>
                    )}
                    {!!data.highlights?.length && (
                        <div className="flex flex-wrap gap-3 mt-6" aria-label="Najważniejsze cechy obiektu">
                            {data.highlights.map((highlight) => {
                                const normalized = highlight.toLowerCase();
                                const Icon = normalized.includes("sypial") || normalized.includes("studio")
                                    ? BedDouble
                                    : normalized.includes("jacuzzi")
                                        ? Waves
                                        : normalized.includes("piętro") || normalized.includes("parter")
                                            ? Building2
                                            : MapPin;
                                return (
                                    <div
                                        key={highlight}
                                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
                                    >
                                        <Icon className="w-4 h-4 text-amber-500 shrink-0" />
                                        <span>{highlight}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white">{data.customAboutTitle || t("details", "about")}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-[1.5] whitespace-pre-line">
                                {apartment.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {apartment.gallery.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white text-center md:text-left">{t("details", "gallery") || "Galeria"}</h2>

                                {/* First 3 images - always visible */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                    {apartment.gallery.slice(0, 3).map((img: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                            onClick={() => {
                                                setLightboxIndex(idx);
                                                setLightboxOpen(true);
                                            }}
                                        >
                                            <Image
                                                src={getThumbPath(img)}
                                                alt={`${apartment.title} view ${idx + 1}`}
                                                fill
                                                quality={60}
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Remaining images - collapsible */}
                                {(apartment.gallery.length > 3 || data.virtualTourUrl) && (
                                    <div className="mt-6">
                                        <div className="flex flex-row gap-2 mb-2">
                                            {apartment.gallery.length > 3 && (
                                                <button
                                                    onClick={() => setGalleryExpanded(!galleryExpanded)}
                                                    className={`px-2 py-3 sm:px-6 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${data.virtualTourUrl ? 'w-1/2' : 'w-full'}`}
                                                >
                                                    {galleryExpanded ? `▲ ${t("details", "collapseGallery") || "Zwiń"}` : `▼ ${t("details", "seeMorePhotos") || "Więcej zdjęć"}`}
                                                </button>
                                            )}
                                            
                                            {data.virtualTourUrl && (
                                                <a
                                                    href={data.virtualTourUrl}
                                                    className={`px-2 py-3 sm:px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-1 sm:gap-2 text-sm sm:text-base ${apartment.gallery.length > 3 ? 'w-1/2' : 'w-full'}`}
                                                >
                                                    <span>Zdjęcia 360°</span>
                                                </a>
                                            )}
                                        </div>

                                        {apartment.gallery.length > 3 && galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {apartment.gallery.slice(3).map((img: string, idx: number) => (
                                                    <div
                                                        key={idx + 3}
                                                        className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                                        onClick={() => {
                                                            setLightboxIndex(idx + 3);
                                                            setLightboxOpen(true);
                                                        }}
                                                    >
                                                        <Image
                                                            src={getThumbPath(img)}
                                                            alt={`${apartment.title} view ${idx + 4}`}
                                                            fill
                                                            quality={60}
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            loading="lazy"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Amenities */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">{data.customAmenitiesTitle || t("details", "amenities") || "Udogodnienia w apartamencie"}</h3>

                            <div className="flex flex-wrap gap-4">
                                {amenitySections.map(({ key, label, icon }) => {
                                    const items = data.amenities[key];
                                    if (!items?.length) return null;
                                    const sectionLabel = data.sectionLabels?.[key] || label;
                                    return (
                                    <div key={key} className="flex-1 min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath(icon)} alt={sectionLabel} fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{sectionLabel}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {items.map((item: string) => t("amenityNames", item) || item).join(", ")}
                                        </p>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-sans mb-2 relative z-10">{t("apartments", "bookingTitle") || "Zarezerwuj pobyt"}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    {t("apartments", "bookingDesc") || "Wybierz daty i sprawdź dostępność."}
                                </p>
                            </div>

                            <a
                                href={bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full px-6 py-4 bg-[#00c853] hover:bg-[#00e676] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2"
                            >
                                {(t("apartments", "bookBtn") as string) || "ZAREZERWUJ GO"}
                            </a>

                            {data.navigationUrl && (
                                <a
                                    href={data.navigationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/60 bg-amber-500/10 px-6 py-3 font-semibold text-amber-600 transition-colors hover:bg-amber-500 hover:text-white dark:text-amber-400"
                                >
                                    <MapPin className="h-5 w-5" />
                                    {data.navigationLabel || "Otwórz w Mapach"}
                                </a>
                            )}

                            {/* Contact Box */}
                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 text-center">
                                    {t("details", "needHelp") || "Potrzebujesz pomocy?"}
                                </p>
                                <a
                                    href="tel:+48730067027"
                                    className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-medium rounded-xl transition-colors"
                                >
                                    +48 730 067 027
                                </a>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-sans mb-4 text-slate-900 dark:text-white">{t("details", "availability") || "Dostępność"}</h3>
                                {data.icalUrl ? (
                                    <ICalCalendar
                                        icalUrl={data.icalUrl}
                                        apartmentId={data.shortTitle || data.id || "1"}
                                        bookingUrl={bookingUrl}
                                    />
                                ) : (
                                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/50">
                                        <div className="mb-3 flex items-center gap-2 text-slate-800 dark:text-white">
                                            <CalendarDays className="h-5 w-5 text-amber-500" />
                                            <p className="font-semibold">Aktualne terminy online</p>
                                        </div>
                                        <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                            Dostępność tego obiektu jest prowadzona bezpośrednio w systemie rezerwacji.
                                        </p>
                                        <a
                                            href={bookingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                                        >
                                            Sprawdź dostępność
                                        </a>
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-3 pb-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[100] lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#00c853] hover:bg-[#00e676] text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    {(t("apartments", "bookBtn") as string) || "ZAREZERWUJ GO"}
                </a>

            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={apartment.gallery}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={apartment.title}
                />
            )}

            <Footer />
        </main>
    );
}
