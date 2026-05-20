"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ICalCalendar from "@/components/ICalCalendar";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { mikolajkiData } from "@/data/mikolajki-data";
import { getAssetPath } from "@/utils/assetPath";

export default function MikolajkiPage() {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    const galleryImages = mikolajkiData.gallery.images;

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    // Safely fetch translated values with fallbacks to PL data if not defined
    const title = t("mikolajkiPage", "title") || mikolajkiData.title;
    const subtitle = t("mikolajkiPage", "subtitle") || "Centrum Mikołajek – Plac Wolności";
    const introTitle = t("mikolajkiPage", "introTitle") || "Komfortowy apartament w sercu Mikołajek";
    const description = t("mikolajkiPage", "description") || mikolajkiData.description;
    const priceLabel = t("mikolajkiPage", "priceLabel") || "Cena od";
    const priceUnit = t("mikolajkiPage", "priceUnit") || "zł / doba";
    const guestsSuffix = t("apartments", "people") || "osoby";
    const amenitiesTitle = t("mikolajkiPage", "amenitiesTitle") || "Udogodnienia";
    const bookingTitle = t("mikolajkiPage", "bookingTitle") || "Zarezerwuj swój pobyt";
    const bookingDesc = t("mikolajkiPage", "bookingDesc") || "Skontaktuj się z nami bezpośrednio lub dokonaj natychmiastowej rezerwacji online za pomocą przycisku poniżej.";
    const callAction = t("mikolajkiPage", "callAction") || "Zadzwoń";

    // Direct booking URL provided by the user
    const bookingUrl = `https://client37851.idobooking.com/book-now/index.php?ob[${mikolajkiData.idoBookingId || "31"}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`;

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={mikolajkiData.gallery.heroImage}
                        alt="Mikołajki Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-playfair mb-4">{title}</h1>
                    <p className="text-xl md:text-2xl font-light">{subtitle}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Left Column: Description & Features */}
                    <div>
                        <h2 className="text-4xl font-playfair mb-6 text-slate-900 dark:text-white">{introTitle}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {description}
                        </p>
                        <ul className="space-y-4 mb-8">
                            {mikolajkiData.amenities.map((amenity) => (
                                <li key={amenity} className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                    <span>{amenity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-slate-500 uppercase text-sm tracking-widest">{priceLabel}</span>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">{mikolajkiData.price}</span>
                            <span className="text-slate-500">{priceUnit} • {mikolajkiData.guests} {guestsSuffix}</span>
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
                                alt="Mikołajki wnętrze 1"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="eager"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {galleryImages.length > 1 && (
                            <div
                                className="relative h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                                onClick={() => openLightbox(1)}
                            >
                                <Image
                                    src={galleryImages[1]}
                                    alt="Mikołajki wnętrze 2"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="eager"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        )}

                        {/* Gallery Button and Collapsible Grid */}
                        {galleryImages.length > 2 && (
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
                                    <div className="grid grid-cols-2 gap-4 mt-4 animate-in fade-in duration-300">
                                        {galleryImages.slice(2).map((img, idx) => (
                                            <div
                                                key={idx + 2}
                                                className="relative h-48 rounded-xl overflow-hidden shadow-md cursor-pointer group"
                                                onClick={() => openLightbox(idx + 2)}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Mikołajki widok ${idx + 3}`}
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
                        )}
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">{amenitiesTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/ROOM.svg")} alt="Komfort" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Komfort i Wyposażenie</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("mikolajkiPage", "amenities.ac") || "Sypialnia z łóżkiem 180x200"}, {t("mikolajkiPage", "amenities.wifi") || "Szybkie WiFi"}, {t("mikolajkiPage", "amenities.smartTv") || "Salon z TV i rozkładaną sofą"}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/CUTLERY.svg")} alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Kuchnia i Łazienka</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("mikolajkiPage", "amenities.kitchen") || "Aneks kuchenny ze zmywarką"}, Nowoczesna łazienka z prysznicem, Zestaw startowy (kawa, herbata)
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/LOCATION.svg")} alt="Lokalizacja" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Otoczenie i Lokalizacja</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("mikolajkiPage", "amenities.view") || "Widok na wewnętrzny dziedziniec"}, Prywatne wejście, Ścisłe centrum Mikołajek przy Placu Wolności
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                    <h3 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">{bookingTitle}</h3>
                    <div className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        <p>{bookingDesc}</p>
                        <p className="text-3xl font-bold text-amber-500 mb-4 mt-4">od {mikolajkiData.price} zł / doba</p>
                    </div>
                    <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#50B848] hover:bg-[#45a041] text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/25 whitespace-nowrap uppercase tracking-wider mb-4 md:mb-0 md:mr-4 active:scale-95 animate-pulse"
                    >
                        ZAREZERWUJ GO
                    </a>
                    <a
                        href="tel:+48730067027"
                        className="inline-block bg-amber-50 hover:bg-amber-600 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 whitespace-nowrap"
                    >
                        {callAction}: 730 067 027
                    </a>
                    <div className="mt-8 max-w-4xl mx-auto">
                        <ICalCalendar
                            icalUrl={mikolajkiData.icalUrl || ""}
                            apartmentId="Mikołajki"
                        />
                    </div>
                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={bookingUrl}
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
                    altPrefix="Mikołajki"
                />
            )}

            <Footer />
        </main>
    );
}
