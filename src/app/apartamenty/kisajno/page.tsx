"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ICalCalendar from "@/components/ICalCalendar";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KisajnoPage() {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    const galleryImages = [
        "/mazury-holiday/images/kisajno/kisajno_1.webp",
        "/mazury-holiday/images/kisajno/kisajno_2.webp",
        "/mazury-holiday/images/kisajno/kisajno_3.webp",
        "/mazury-holiday/images/kisajno/kisajno_4.webp",
        "/mazury-holiday/images/kisajno/kisajno_5.webp",
        "/mazury-holiday/images/kisajno/kisajno_6.webp",
        "/mazury-holiday/images/kisajno/kisajno_7.webp",
        "/mazury-holiday/images/kisajno/kisajno_8.webp",
        "/mazury-holiday/images/kisajno/kisajno_9.webp",
        "/mazury-holiday/images/kisajno/kisajno_10.webp",
        "/mazury-holiday/images/kisajno/kisajno_11.webp"
    ];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mazury-holiday/images/DJI_0017_optimized.webp"
                        alt="Kisajno Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-playfair mb-4">{t("kisajnoPage", "title")}</h1>
                    <p className="text-xl md:text-2xl font-light">{t("kisajnoPage", "subtitle")}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Left Column: Description & Features */}
                    <div>
                        <h2 className="text-4xl font-playfair mb-6 text-slate-900 dark:text-white">{t("kisajnoPage", "introTitle")}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {t("kisajnoPage", "description")}
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>{t("kisajnoPage", "features.0")}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>{t("kisajnoPage", "features.1")}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>{t("kisajnoPage", "features.2")}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>{t("kisajnoPage", "features.3")}</span>
                            </li>
                        </ul>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-slate-500 uppercase text-sm tracking-widest">{t("kisajnoPage", "priceLabel")}</span>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">{t("kisajnoPage", "priceValue")}</span>
                            <span className="text-slate-500">{t("kisajnoPage", "priceUnit")}</span>
                        </div>
                    </div>

                    {/* Right Column: Teaser Images & Gallery Button */}
                    <div className="space-y-4">
                        <div
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                            onClick={() => openLightbox(0)}
                        >
                            <Image
                                src={galleryImages[0]}
                                alt="Kisajno wnętrze 1"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div
                            className="relative h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                            onClick={() => openLightbox(1)}
                        >
                            <Image
                                src={galleryImages[1]}
                                alt="Kisajno wnętrze 2"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Gallery Button and Collapsible Grid */}
                        <div className="pt-4">
                            <button
                                onClick={() => setGalleryExpanded(!galleryExpanded)}
                                className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 uppercase tracking-wide flex items-center justify-center gap-2"
                            >
                                {galleryExpanded ? (
                                    <>
                                        <span>Zwiń galerię</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Zobacz więcej zdjęć</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {galleryExpanded && (
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {galleryImages.slice(2).map((img, idx) => (
                                        <div
                                            key={idx + 2}
                                            className="relative h-48 rounded-xl overflow-hidden shadow-md cursor-pointer group"
                                            onClick={() => openLightbox(idx + 2)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Kisajno widok ${idx + 3}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">{t("kisajnoPage", "amenitiesTitle")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src="/mazury-holiday/icons/ROOM.svg" alt="Komfort" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Komfort i Multimedia</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("kisajnoPage", "amenities.ac")}, {t("kisajnoPage", "amenities.wifi")}, {t("kisajnoPage", "amenities.smartTv")}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src="/mazury-holiday/icons/CUTLERY.svg" alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Kuchnia i Wyposażenie</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("kisajnoPage", "amenities.kitchen")}, {t("kisajnoPage", "amenities.dishwasher")}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src="/mazury-holiday/icons/LOCATION.svg" alt="Lokalizacja" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Otoczenie</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("kisajnoPage", "amenities.view")}, {t("kisajnoPage", "amenities.parking")}, {t("kisajnoPage", "amenities.port")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                    <h3 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">{t("kisajnoPage", "bookingTitle")}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        {t("kisajnoPage", "bookingDesc")}
                    </p>
                    <a
                        href="https://engine37851.idobooking.com/index.php?ob[45]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#50B848] hover:bg-[#45a041] text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/25 whitespace-nowrap uppercase tracking-wider mb-4 md:mb-0 md:mr-4 active:scale-95"
                    >
                        ZAREZERWUJ GO
                    </a>
                    <a
                        href="tel:+48730067027"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 whitespace-nowrap"
                    >
                        {t("kisajnoPage", "callAction")}: +48 730 067 027
                    </a>
                    <div className="mt-8 max-w-4xl mx-auto">
                        <ICalCalendar
                            icalUrl="https://client37851.idosell.com/panel/offer/icalexport/itemid/45/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"
                            apartmentId="Kisajno"
                        />
                    </div>
                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href="https://engine37851.idobooking.com/index.php?ob[45]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    {t("nav", "bookBtn")}
                </a>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix="Kisajno"
                />
            )}

            <Footer />
        </main>
    );
}
