"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

// Helper function to get unique icon for each amenity
function getAmenityIcon(amenity: string): string {
    const iconMap: Record<string, string> = {
        // Living room
        'Klimatyzacja': '❄️',
        'Sofa 2-osobowa': '🛋️',
        'Smart TV': '📺',
        'TV': '📺',
        'WiFi': '📶',
        'Salon z aneksem': '🏠',
        'Duży salon': '🛋️',
        'Sofa': '🛋️',

        // Kitchen
        'Zmywarka': '🧼',
        'Płyta indukcyjna': '🔥',
        'Lodówka': '🧊',
        'Kuchenka mikrofalowa': '📟',
        'Komplet naczyń': '🍽️',
        'Aneks kuchenny': '🍳',
        'Ekspres do kawy': '☕',
        'Pełne wyposażenie AGD': '🏠',

        // Bedroom
        'Łóżko 180x200': '🛏️',
        'Łóżko podwójne': '🛏️',
        'Łóżko małżeńskie': '🛏️',
        'Szafa': '👔',
        'Dwie oddzielne sypialnie': '🚪',
        'Łóżka małżeńskie': '🛏️',
        'Dwie sypialnie': '🚪',
        'Komfortowe łóżka': '🛏️',

        // Bathroom
        'Prysznic': '🚿',
        'Suszarka do włosów': '💨',
        'Ręczniki': '🧺',
        'Pralka': '🧺',
        'Zestaw kosmetyków': '🧴',
        'Prywatna sauna': '🧖',
        'Suszarka': '💨',

        // Terrace
        'Meble wypoczynkowe': '🪑',
        'Widok na port Stranda': '⛵',
        'Prywatne jacuzzi': '🛁',
        'Meble tarasowe': '🪑',
        'Widok na jezioro Kisajno': '🌊',
        'Widok na marinę': '⛵',
        'Widok na port': '⛵',
        'Meble balkonowe': '🪑',
        'Duży taras': '🌿',
        'Meble ogrodowe': '🌳',
        'Jacuzzi na tarasie': '🛁',
        'Widok na zatokę Tracz': '🌊'
    };

    return iconMap[amenity] || '✨'; // Default icon if not found
}

export default function ApartmentDetailClient({ id }: { id: string }) {
    const { t } = useLanguage();
    const data = strandaApartments[id as keyof typeof strandaApartments];
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

    const apartment = {
        id: id,
        title: `${t("stranda", "apartment")} ${id} ${data.type}`,
        building: data.building,
        description: data.description,
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
                        <div>
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "about")}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {apartment.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {apartment.gallery.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Galeria</h2>

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
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Salon</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.living.map((item, idx) => (
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
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Kuchnia</h4>
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

                            {/* Bedroom */}
                            {data.amenities.bedroom.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Sypialnia</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {data.amenities.bedroom.map((item, idx) => (
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

                            {/* Terrace */}
                            {data.amenities.terrace.length > 0 && (
                                <div className="mb-12">
                                    <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">Taras</h4>
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
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "booking")}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                {t("details", "checkAvailability")}
                            </p>
                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4"
                            >
                                {t("details", "callBtn")}: +48 607 241 090
                            </a>
                            <p className="text-xs text-center text-slate-500">
                                {t("details", "lowPrice")}
                            </p>
                        </div>
                    </div>

                </div>
            </section>

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
