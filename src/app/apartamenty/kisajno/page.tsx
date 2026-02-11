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

    const galleryImages = [
        "/mazury-holiday/images/kisajno/kisajno_1.webp",
        "/mazury-holiday/images/kisajno/kisajno_2.webp"
    ];
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/apartments_2.webp')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-playfair mb-4">{t("kisajnoPage", "title")}</h1>
                    <p className="text-xl md:text-2xl font-light">{t("kisajnoPage", "subtitle")}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                            onClick={() => {
                                setLightboxIndex(0);
                                setLightboxOpen(true);
                            }}
                        >
                            <Image src="/mazury-holiday/images/kisajno/kisajno_1.webp" alt="Kisajno wnętrze 1" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div
                            className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8 cursor-pointer group"
                            onClick={() => {
                                setLightboxIndex(1);
                                setLightboxOpen(true);
                            }}
                        >
                            <Image src="/mazury-holiday/images/kisajno/kisajno_2.webp" alt="Kisajno wnętrze 2" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
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
                        href="tel:+48607241090"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 whitespace-nowrap"
                    >
                        {t("kisajnoPage", "callAction")}: +48 607 241 090
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
                    ZAREZERWUJ GO
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
