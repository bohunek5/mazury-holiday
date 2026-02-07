"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

export default function FuledaPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const galleryImages = [
        "/mazury-holiday/images/fuleda/fuleda_1.png",
        "/mazury-holiday/images/fuleda/fuleda_2.png"
    ];
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/hero_bg.jpg')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-playfair mb-4">Apartamenty Fuleda</h1>
                    <p className="text-xl md:text-2xl font-light">Cisza, spokój, natura nad jeziorem Dobskim</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                                onClick={() => {
                                    setLightboxIndex(0);
                                    setLightboxOpen(true);
                                }}
                            >
                                <Image src="/mazury-holiday/images/fuleda/fuleda_1.png" alt="Widok na Fuledę" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                            <div
                                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mt-12 cursor-pointer group"
                                onClick={() => {
                                    setLightboxIndex(1);
                                    setLightboxOpen(true);
                                }}
                            >
                                <Image src="/mazury-holiday/images/fuleda/fuleda_2.png" alt="Plaża w Fuledzie" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-playfair mb-6 text-slate-900 dark:text-white">Oaza spokoju w strefie ciszy</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Lokalizacja Fuleda to propozycja dla tych, którzy pragną całkowitego odcięcia od zgiełku cywilizacji.
                            Położona nad objętym strefą ciszy jeziorem Dobskim, oferuje warunki do prawdziwego relaksu w otoczeniu rezerwatu przyrody.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-emerald-600">Apartament Parter (od 250 PLN)</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Przestronny salon z kominkiem, klimatyzacją, sypialnia oraz wielki taras z bezpośrednim wyjściem na jezioro.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-emerald-600">Apartament Piętro (od 200 PLN)</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Stylowo wykończony apartament z widokiem na rezerwat, wyposażony w klimatyzację i pełne udogodnienia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Udogodnienia Premium</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: "Klimatyzacja", icon: "❄️" },
                            { name: "Kominek", icon: "🔥" },
                            { name: "Prywatna plaża", icon: "🏖️" },
                            { name: "Miejsce na ognisko", icon: "🔥" },
                            { name: "WiFi", icon: "📶" },
                            { name: "Pełna kuchnia", icon: "🍳" },
                            { name: "Pralka", icon: "🧺" },
                            { name: "Dostęp do pomostu", icon: "🚤" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors group">
                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix="Fuleda"
                />
            )}

            <Footer />
        </main>
    );
}
