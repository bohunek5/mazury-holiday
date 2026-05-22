"use client";

import ICalCalendar from "@/components/ICalCalendar";
import { getAssetPath } from "@/utils/assetPath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import { translations } from "@/lib/translations";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

export default function PokojeFuledaPage() {
    const { language } = useLanguage();
    const data = pokojeFuledaData;
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    // Safely access current language translations, falling back to English then Polish
    const getCurrentTranslations = () => {
        // @ts-expect-error - we know key might not exist on all languages types yet
        return translations[language]?.pokojeFuledaPage || translations['en']?.pokojeFuledaPage || translations['pl'].pokojeFuledaPage;
    };

    const trans = getCurrentTranslations();

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pb-24 lg:pb-0">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={data.gallery.heroImage}
                    alt={trans.heroTitle}
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Removed overlay to fix foggy look */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-4">Fuleda, Jezioro Dobskie</div>
                        <h1 className="text-5xl md:text-7xl font-sans mb-2">Fuleda Pokoje</h1>

                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white">{trans.heroTitle}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {trans.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {data.gallery.images.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-sans mb-6 text-slate-900 dark:text-white">{trans.galleryTitle}</h2>

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
                                                alt={`${trans.heroTitle} view ${idx + 1}`}
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
                                            {galleryExpanded ? `▲ ${trans.collapseGallery}` : `▼ ${trans.expandGallery}`}
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
                                                            alt={`${trans.heroTitle} view ${idx + 4}`}
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

                        {/* Amenities - Grouped like other apartments */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-sans mb-12 text-slate-900 dark:text-white">{trans.amenitiesTitle}</h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Room 1 */}
                                {trans.room1Items?.length > 0 && (
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath("/icons/BED.svg")} alt="Pokój 1" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{trans.room1Title}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {trans.room1Items.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Room 2 */}
                                {trans.room2Items?.length > 0 && (
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath("/icons/BED.svg")} alt="Pokój 2" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{trans.room2Title}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {trans.room2Items.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Kitchen */}
                                {trans.kitchenItems?.length > 0 && (
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath("/icons/CUTLERY.svg")} alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{trans.kitchenTitle}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            <span className="block italic mb-1 text-amber-500 font-medium">{trans.kitchenNote}</span>
                                            {trans.kitchenItems.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bathroom */}
                                {trans.bathroomItems?.length > 0 && (
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath("/icons/SHOWER.svg")} alt="Łazienka" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{trans.bathroomTitle}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {trans.bathroomItems.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Terrace */}
                                {trans.terraceItems?.length > 0 && (
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow col-span-2 lg:col-span-4">
                                        <div className="relative w-8 h-8 mx-auto mb-2">
                                            <Image src={getAssetPath("/icons/TERRACE.svg")} alt="Taras i otoczenie" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">{trans.terraceTitle}</h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {trans.terraceItems.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 sticky top-32 shadow-xl">
                            <h3 className="text-2xl font-sans mb-6 text-slate-900 dark:text-white">{trans.bookingTitle}</h3>
                            <div className="mb-6">

                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {trans.bookingDesc}
                                </p>
                            </div>

                            <a
                                href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '28'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all mb-2 whitespace-nowrap uppercase tracking-wider shadow-lg hover:shadow-green-600/25 active:scale-95"
                            >
                                {trans.bookBtn}
                            </a>

                            <a
                                href="tel:+48730067027"
                                className="block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors mb-2 whitespace-nowrap"
                            >
                                {trans.callBtn}
                            </a>

                            <p className="text-xs text-center text-slate-500 mb-6">
                                {trans.bestPrice}
                            </p>

                            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                {data.icalUrl && (
                                    <ICalCalendar
                                        icalUrl={data.icalUrl}
                                        apartmentId={trans.heroTitle}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6_px_-1px_rgba(0,0,0,0.1)] z-[100] lg:hidden flex gap-4 pb-8 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '28'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    {trans.bookBtn}
                </a>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={data.gallery.images}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={trans.heroTitle}
                />
            )}

            <Footer />
        </main>
    );
}
