"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { useState, useEffect } from "react";
import type { ApartmentMarkdownData } from "@/utils/apartmentMarkdownParser";

interface ApartmentMarkdownViewProps {
    data: ApartmentMarkdownData;
}

export default function ApartmentMarkdownView({ data }: ApartmentMarkdownViewProps) {
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

    const heroImage = data.images[0] || '/mazury-holiday/images/apartments_1.jpg';
    const title = `Apartament ${data.id} ${data.type}`;

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Stranda Residence</span>
                        <h1 className="text-5xl md:text-7xl font-playfair mb-4">{title}</h1>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">O apartamencie</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                                {data.description}
                            </p>
                            {data.extendedDescription && (
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                    {data.extendedDescription}
                                </p>
                            )}
                        </div>

                        {/* Gallery */}
                        {data.images.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Galeria</h2>

                                {/* First 3 images */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {data.images.slice(0, 3).map((img, idx) => (
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
                                                alt={`${title} widok ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Remaining images - collapsible */}
                                {data.images.length > 3 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                                            className="w-full mb-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć (${data.images.length - 3})`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {data.images.slice(3).map((img, idx) => (
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
                                                            alt={`${title} widok ${idx + 4}`}
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

                        {/* Amenities - New Format */}
                        <div>
                            <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Udogodnienia w apartamencie</h3>

                            <div className="space-y-8">
                                {data.amenities.map((amenityGroup, groupIdx) => (
                                    <div key={groupIdx} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                                        {/* Room Header */}
                                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
                                            <span className="text-4xl">{amenityGroup.icon}</span>
                                            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">{amenityGroup.name}</h4>
                                        </div>

                                        {/* Items List */}
                                        <div className="space-y-3">
                                            {amenityGroup.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
                                                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                                                >
                                                    <span className="text-amber-500 mt-1">✓</span>
                                                    <span className="text-lg">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 sticky top-32 shadow-xl">
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">Rezerwacja</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Sprawdź dostępność i zarezerwuj
                            </p>

                            {/* Phone Call Button */}
                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4"
                            >
                                Zadzwoń: +48 607 241 090
                            </a>

                            {/* iDoBooking Widget Button */}
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
                                Rezerwuj
                            </button>

                            <p className="text-xs text-center text-slate-500 mb-6">
                                Gwarancja najniższej ceny
                            </p>

                            {/* Availability Calendar */}
                            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white text-center">
                                    Dostępność
                                </h4>
                                <div
                                    id="idobooking-calendar"
                                    className="iai_calendar_widget"
                                    data-client="37851"
                                    data-object="1"
                                    data-show-legend="true"
                                    data-show-prices="false"
                                    data-language="0"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {lightboxOpen && (
                <ImageLightbox
                    images={data.images}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={title}
                />
            )}

            <Footer />
        </main>
    );
}
