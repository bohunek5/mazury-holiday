"use client";

import ICalCalendar from "@/components/ICalCalendar";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { fuledaApartments } from "@/data/fuleda-data";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";
import { getAmenityIcon } from "@/utils/amenityIcons";

interface FuledaDetailClientProps {
    id: 'parter' | 'pietro';
}

export default function FuledaDetailClient({ id }: FuledaDetailClientProps) {
    const { t } = useLanguage();
    const data = fuledaApartments[id];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);



    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const title = `Apartament Fuleda ${id === 'parter' ? 'Parter' : 'Piętro'}`;

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={data.gallery.heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Fuleda Residence</span>
                        <h1 className="text-5xl md:text-7xl font-playfair mb-4">{title}</h1>
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
                                {data.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {data.gallery.images.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white text-center md:text-left">Galeria</h2>

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
                                                alt={`${title} view ${idx + 1}`}
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
                                                            alt={`${title} view ${idx + 4}`}
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
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Taras i otoczenie</h4>
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

                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4 whitespace-nowrap"
                            >
                                {t("details", "callBtn")}: +48 607 241 090
                            </a>



                            <p className="text-xs text-center text-slate-500 mb-6">
                                {t("details", "lowPrice")}
                            </p>

                            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                                {data.icalUrl && (
                                    <ICalCalendar
                                        icalUrl={data.icalUrl}
                                        apartmentId={`Apartament ${id === 'parter' ? 'Parter' : 'Piętro'}`}
                                    />
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

            </div>

            {
                lightboxOpen && (
                    <ImageLightbox
                        images={data.gallery.images}
                        currentIndex={lightboxIndex}
                        onClose={() => setLightboxOpen(false)}
                        altPrefix={title}
                    />
                )
            }

            <Footer />
        </main >
    );
}
