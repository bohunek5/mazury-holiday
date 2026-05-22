"use client";

import ICalCalendar from "@/components/ICalCalendar";
import { getAssetPath } from "@/utils/assetPath";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { fuledaApartments } from "@/data/fuleda-data";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

interface FuledaDetailClientProps {
    id: 'parter' | 'pietro';
}

export default function FuledaDetailClient({ id }: FuledaDetailClientProps) {
    const { t } = useLanguage();
    const data = fuledaApartments[id];
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

    const title = `Apartament Fuleda ${id === 'parter' ? 'Parter' : 'Piętro'}`;

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pb-24 lg:pb-0">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={data.gallery.heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Removed overlay to fix foggy look */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-4">Fuleda, Jezioro Dobskie</div>
                        <h1 className="text-5xl md:text-7xl font-sans mb-2">{title}</h1>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white">{t("details", "about")}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {data.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {data.gallery.images.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white text-center md:text-left">Galeria</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                    {data.gallery.images.slice(0, 3).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                            onClick={() => {
                                                setLightboxIndex(idx);
                                                setLightboxOpen(true);
                                            }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${title} view ${idx + 1}`}
                                                fill
                                                quality={90}
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {data.gallery.images.length > 3 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                                            className="w-full mb-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {data.gallery.images.slice(3).map((img, idx) => (
                                                    <div
                                                        key={idx + 3}
                                                        className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                                        onClick={() => {
                                                            setLightboxIndex(idx + 3);
                                                            setLightboxOpen(true);
                                                        }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`${title} view ${idx + 4}`}
                                                            fill
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
                            <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">Udogodnienia w apartamencie</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Living Room */}
                                {data.amenities.living.length > 0 && (
                                    <div className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-3">
                                            <Image src={getAssetPath("/icons/SOFA.svg")} alt="Salon" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Salon</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.living.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Kitchen */}
                                {data.amenities.kitchen.length > 0 && (
                                    <div className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-3">
                                            <Image src={getAssetPath("/icons/CUTLERY.svg")} alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Kuchnia</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.kitchen.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bedroom */}
                                {data.amenities.bedroom.length > 0 && (
                                    <div className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-3">
                                            <Image src={getAssetPath("/icons/BED.svg")} alt="Sypialnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Sypialnia</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.bedroom.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bathroom */}
                                {data.amenities.bathroom.length > 0 && (
                                    <div className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-3">
                                            <Image src={getAssetPath("/icons/SHOWER.svg")} alt="Łazienka" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Łazienka</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.bathroom.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Terrace */}
                                {data.amenities.terrace.length > 0 && (
                                    <div className="p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                        <div className="relative w-8 h-8 mx-auto mb-3">
                                            <Image src={getAssetPath("/icons/TERRACE.svg")} alt="Taras i otoczenie" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Taras i otoczenie</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.terrace.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking */}
                    <div className="lg:col-span-1 h-full relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden transform transition-all hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-bl-full -mr-10 -mt-10" />
                                <h3 className="text-2xl font-sans mb-2 relative z-10">{t("details", "booking")}</h3>
                                <p className="text-3xl font-bold text-amber-500 mb-2 relative z-10">{data.price}</p>
                                <p className="text-slate-300 mb-8 relative z-10 text-sm">
                                    {t("details", "checkAvailability")}
                                </p>
                                <div className="flex gap-2">
                                    <a
                                        href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '26'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center text-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-2 rounded-xl transition-all mb-8 whitespace-nowrap uppercase tracking-wider shadow-lg hover:shadow-green-600/25 active:scale-95"
                                    >
                                        ZAREZERWUJ GO
                                    </a>
                                    <a
                                        href="tel:+48730067027"
                                        className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all mb-8 shadow-lg active:scale-95"
                                        title={t("details", "callBtn")}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </a>
                                </div>
                                <div className="text-center text-xs text-slate-400 mb-6 pb-6 border-b border-slate-800">
                                    {t("details", "lowPrice")}
                                </div>
                                <div className="mt-6">
                                    {data.icalUrl && (
                                        <ICalCalendar
                                            icalUrl={data.icalUrl}
                                            apartmentId={`Apartament ${id === 'parter' ? 'Parter' : 'Piętro'}`}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-3 pb-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-[100] lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '26'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    ZAREZERWUJ GO
                </a>

            </div>

            {
                lightboxOpen && (
                    <ImageLightbox
                        images={data.gallery.images}
                        currentIndex={lightboxIndex}
                        onClose={() => setLightboxOpen(false)}
                        altPrefix={title}
                    />
                )
            }

            <Footer />
        </main >
    );
}
