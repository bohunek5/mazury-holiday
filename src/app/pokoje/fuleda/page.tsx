"use client";

import ICalCalendar from "@/components/ICalCalendar";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";


export default function PokojeFuledaPage() {
    useLanguage();
    const data = pokojeFuledaData;
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);



    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={data.gallery.heroImage}
                    alt={data.title}
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Removed overlay to fix foggy look */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Fuleda Residence</span>
                        <h1 className="text-5xl md:text-7xl font-playfair mb-4">{data.title}</h1>
                        <p className="text-xl md:text-2xl opacity-90">{data.price}</p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">O pokojach</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {data.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {data.gallery.images.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Galeria</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {data.gallery.images.slice(0, 3).map((img: string, idx: number) => (
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
                                                alt={`${data.title} view ${idx + 1}`}
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
                                            className="w-full mb-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {data.gallery.images.slice(3).map((img: string, idx: number) => (
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
                                                            alt={`${data.title} view ${idx + 4}`}
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
                            <h3 className="text-3xl font-playfair mb-12 text-slate-900 dark:text-white">Wyposażenie</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Room 1 */}
                                {data.amenities.room1.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/BED.svg" alt="Pokój 1" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Pokój 1 (2-osobowy)</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.room1.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Room 2 */}
                                {data.amenities.room2.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/BED.svg" alt="Pokój 2" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Pokój 2 (2 łóżka)</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.room2.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Kitchen */}
                                {data.amenities.kitchen.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/CUTLERY.svg" alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Kuchnia</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            <span className="block italic mb-2 text-amber-500 font-medium">(oddzielny budynek 10m)</span>
                                            {data.amenities.kitchen.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bathroom */}
                                {data.amenities.bathroom.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/SHOWER.svg" alt="Łazienka" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Łazienka</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.bathroom.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Terrace */}
                                {data.amenities.terrace.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/TERRACE.svg" alt="Taras i otoczenie" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Taras i otoczenie</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.terrace.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 sticky top-32 shadow-xl">
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">Rezerwacja</h3>
                            <div className="mb-6">
                                <p className="text-3xl font-bold text-amber-500 mb-2">{data.price}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    Sprawdź dostępność i zarezerwuj swój pobyt
                                </p>
                            </div>

                            <a
                                href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '28'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 rounded-xl transition-all mb-4 whitespace-nowrap uppercase tracking-wider shadow-lg hover:shadow-green-500/25 active:scale-95"
                            >
                                ZAREZERWUJ GO
                            </a>

                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4 whitespace-nowrap"
                            >
                                Zadzwoń: +48 607 241 090
                            </a>



                            <p className="text-xs text-center text-slate-500 mb-6">
                                Najlepsze ceny - rezerwuj bezpośrednio
                            </p>

                            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                {data.icalUrl && (
                                    <ICalCalendar
                                        icalUrl={data.icalUrl}
                                        apartmentId={data.title}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6_px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '28'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    ZAREZERWUJ GO
                </a>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={data.gallery.images}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={data.title}
                />
            )}

            <Footer />
        </main>
    );
}
