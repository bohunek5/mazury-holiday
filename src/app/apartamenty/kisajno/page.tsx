"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

export default function KisajnoPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const galleryImages = [
        "/mazury-holiday/images/kisajno/kisajno_1.jpg",
        "/mazury-holiday/images/kisajno/kisajno_2.jpg"
    ];
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/apartments_2.jpg')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-playfair mb-4">Apartamenty Kisajno</h1>
                    <p className="text-xl md:text-2xl font-light">Port Neptun, Giżycko</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl font-playfair mb-6 text-slate-900 dark:text-white">Wyjątkowy standard nad jeziorem</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Oferujemy nowoczesny apartament o powierzchni 55 m², położony na parterze z bezpośrednim dostępem do uroków jeziora Kisajno.
                            Idealny dla rodzin lub grup znajomych, zapewnia komfortowy wypoczynek w standardzie premium.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>2 Oddzielne sypialnie z dużymi łóżkami</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>Salon z wygodną sofą i TV</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>Pełna kuchnia: zmywarka, mikrofala, lodówka</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-700 dark:text-slate-200">
                                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                <span>Klimatyzacja i szybkie WiFi</span>
                            </li>
                        </ul>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-slate-500 uppercase text-sm tracking-widest">Cena od</span>
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">500 PLN</span>
                            <span className="text-slate-500">/ doba</span>
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
                            <Image src="/mazury-holiday/images/kisajno/kisajno_1.jpg" alt="Kisajno wnętrze 1" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div
                            className="relative h-64 rounded-2xl overflow-hidden shadow-lg mt-8 cursor-pointer group"
                            onClick={() => {
                                setLightboxIndex(1);
                                setLightboxOpen(true);
                            }}
                        >
                            <Image src="/mazury-holiday/images/kisajno/kisajno_2.jpg" alt="Kisajno wnętrze 2" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>

                {/* Amenities Grid */}
                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Udogodnienia</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Widok na jezioro", icon: "🌊" },
                            { name: "Klimatyzacja", icon: "❄️" },
                            { name: "Smart TV", icon: "📺" },
                            { name: "WiFi", icon: "📶" },
                            { name: "Pełna kuchnia", icon: "🍳" },
                            { name: "Zmywarka", icon: "🧼" },
                            { name: "Parking", icon: "🚗" },
                            { name: "Port Neptun", icon: "⛵" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                    <h3 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Zarezerwuj swój pobyt</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        Skontaktuj się z nami bezpośrednio, aby uzyskać najlepszą ofertę i sprawdzić dostępność w wybranym terminie.
                    </p>
                    <a
                        href="tel:+48607241090"
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25"
                    >
                        Zadzwoń: +48 607 241 090
                    </a>
                </div>
            </section>

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
