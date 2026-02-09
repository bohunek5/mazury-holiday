"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ImageLightbox from "@/components/ImageLightbox";
import { useState, useEffect } from "react";
import { getAmenityIcon } from "@/utils/amenityIcons";
import ICalCalendar from "@/components/ICalCalendar";



interface ApartmentDetailClientProps {
    id?: string;
}

export default function ApartmentDetailClient({ id }: ApartmentDetailClientProps) {
    const { t } = useLanguage();
    const data = strandaApartments[id as keyof typeof strandaApartments];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    // Load iDoBooking widget script
    useEffect(() => {
        // Load main widget script
        const script = document.createElement('script');
        script.src = 'https://engine37851.idobooking.com/widget/script/loadScriptsForOwnPage?1712752373';
        script.async = true;

        // Initialize widgets after script loads
        script.onload = () => {
            // Initialize booking button
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

            // Initialize calendar widget
            if (typeof win.iai_calendar_widget === 'function') {
                win.iai_calendar_widget({});
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);


    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const apartment = {
        id: id,
        title: `${t("stranda", "apartment")} ${id} ${data.type}`,
        building: data.building,
        description: `${t("strandaDescriptions", id as string)}\n\n${t("strandaDescriptions", "genericDesc")}\n\n${t("strandaDescriptions", "locationDesc")}`,
        amenities: [
            ...data.amenities.living,
            ...data.amenities.kitchen,
            ...data.amenities.bedroom,
            ...data.amenities.bathroom,
            ...data.amenities.terrace
        ],
        mainImage: data.gallery.heroImage,
        gallery: data.gallery.images
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={apartment.mainImage}
                    alt={apartment.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Stranda Residence</span>
                        <h1 className="text-5xl md:text-7xl font-playfair mb-4">{apartment.title}</h1>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "about")}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {apartment.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {apartment.gallery.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white text-center md:text-left">Galeria</h2>

                                {/* First 3 images - always visible */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {apartment.gallery.slice(0, 3).map((img, idx) => (
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
                                                alt={`${apartment.title} view ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Remaining images - collapsible */}
                                {apartment.gallery.length > 3 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                                            className="w-full mb-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć (${apartment.gallery.length - 3})`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {apartment.gallery.slice(3).map((img, idx) => (
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
                                                            alt={`${apartment.title} view ${idx + 4}`}
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
                            <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Udogodnienia w apartamencie</h3>

                            {/* Living Room */}
                            {data.amenities.living.length > 0 && (
                                <div className="mb-12 text-center md:text-left">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Salon</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.living.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-sm md:text-base text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Kitchen */}
                            {data.amenities.kitchen.length > 0 && (
                                <div className="mb-12 text-center md:text-left">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Kuchnia</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.kitchen.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-sm md:text-base text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bedroom */}
                            {data.amenities.bedroom.length > 0 && (
                                <div className="mb-12 text-center md:text-left">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Sypialnia</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.bedroom.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-sm md:text-base text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bathroom */}
                            {data.amenities.bathroom.length > 0 && (
                                <div className="mb-12 text-center md:text-left">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Łazienka</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.bathroom.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-sm md:text-base text-slate-800 dark:text-slate-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Terrace */}
                            {data.amenities.terrace.length > 0 && (
                                <div className="mb-12 text-center md:text-left">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Taras</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.terrace.map((item, idx) => (
                                            <div key={idx} className="flex flex-col items-center p-6 md:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                                <span className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{getAmenityIcon(item)}</span>
                                                <span className="font-medium text-center text-sm md:text-base text-slate-800 dark:text-slate-200">{item}</span>
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
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "booking")}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                {t("details", "checkAvailability")}
                            </p>

                            {/* Phone Call Button - First */}
                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4 whitespace-nowrap"
                            >
                                {t("details", "callBtn")}: +48 607 241 090
                            </a>

                            {/* iDoBooking Widget Button - Desktop Only */}
                            <button
                                className="hidden lg:block i_do_sell_booking_widget_start w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors mb-4"
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
                                {t("details", "lowPrice")}
                            </p>

                            {/* Availability Calendar */}
                            <div className="pt-6">
                                <div
                                    id="idobooking-calendar"
                                    className="iai_calendar_widget"
                                    data-client="37851"
                                    data-object={data.idoBookingId || "1"}
                                    data-item={data.idoBookingId || ""}
                                    data-show-legend="true"
                                    data-show-prices="false"
                                    data-language="0"
                                />

                                {data.icalUrl && (
                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                                        <h4 className="text-sm font-bold mb-4 text-slate-500 uppercase tracking-widest text-center">
                                            Kalendarz Obłożenia (iCal)
                                        </h4>
                                        <ICalCalendar icalUrl={data.icalUrl} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href="tel:+48607241090"
                    className="flex-1 flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                >
                    tel. +48...
                </a>
                <button
                    className="flex-[2] i_do_sell_booking_widget_start text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-colors text-lg shadow-lg"
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
                    Zarezerwuj
                </button>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={apartment.gallery}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={apartment.title}
                />
            )}

            <Footer />
        </main>
    );
}
