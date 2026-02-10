"use client";

import ICalCalendar from "@/components/ICalCalendar";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import ImageLightbox from "@/components/ImageLightbox";
import { useState, useEffect } from "react";
import { getAmenityIcon } from "@/utils/amenityIcons";

export default function PokojeFuledaPage() {
    useLanguage();
    const data = pokojeFuledaData;
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    // Load iDoBooking widget script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://engine37851.idobooking.com/widget/script/loadScriptsForOwnPage?1712752373';
        script.async = true;

        script.onload = () => {
            const win = window as typeof window & {
                iai_booking_button?: (config: Record<string, unknown>) => void;
                iai_calendar_widget?: (config: Record<string, unknown>) => void;
            };

            if (typeof win.iai_booking_button === 'function') {
                win.iai_booking_button({
                    "langNew": "0",
                    "langIdCodes": { "1": "pl", "pl": 1 },
                    "literalsInLang": {
                        "1": {
                            "label1": "Od",
                            "label2": "Do",
                            "label3": "Osoby",
                            "label4": null,
                            "label5": "Lokalizacje",
                            "button": "Zarezerwuj go",
                            "days": ["Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
                            "months": ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                            "trigger": "Rezerwacja online"
                        }
                    }
                });
            }

            if (typeof win.iai_calendar_widget === 'function') {
                win.iai_calendar_widget({});
            }
        };

        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

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
                />
                <div className="absolute inset-0 bg-black/40" />
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
                                                alt={`${data.title} view ${idx + 1}`}
                                                fill
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
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć (${data.gallery.images.length - 3})`}
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

                        {/* Amenities */}
                        <div>
                            <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Wyposażenie</h3>

                            {/* Room 1 */}
                            {data.amenities.room1.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Pokój 1 (dla 2 osób)</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.room1.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Room 2 */}
                            {data.amenities.room2.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Pokój 2 (2 łóżka pojedyncze)</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.room2.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bathroom */}
                            {data.amenities.bathroom.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Łazienka</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.bathroom.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Kitchen */}
                            {data.amenities.kitchen.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Kuchnia (oddzielny budynek 10m)</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.kitchen.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Terrace */}
                            {data.amenities.terrace.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Taras i otoczenie</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.terrace.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
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
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4 whitespace-nowrap"
                            >
                                Zadzwoń: +48 607 241 090
                            </a>

                            <button
                                className="i_do_sell_booking_widget_start block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors mb-4"
                                data-currency="0"
                                data-client="37851"
                                data-location=""
                                data-object="1"
                                data-show-other-objects="true"
                                data-language="0"
                                onClick={(e) => {
                                    const win = window as typeof window & { generateWidgetIdoSellBooking?: (el: HTMLElement) => void };
                                    if (typeof win.generateWidgetIdoSellBooking === 'function') {
                                        win.generateWidgetIdoSellBooking(e.currentTarget);
                                    }
                                }}
                            >
                                Rezerwuj online
                            </button>

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
