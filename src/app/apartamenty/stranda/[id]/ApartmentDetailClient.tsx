"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";

export default function ApartmentDetailClient({ id }: { id: string }) {
    const { t } = useLanguage();
    const data = strandaApartments[id as keyof typeof strandaApartments];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {apartment.gallery.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`relative h-64 rounded-xl overflow-hidden cursor-pointer group ${idx === 0 && apartment.gallery.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
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
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Amenities */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-8 text-slate-900 dark:text-white">Udogodnienia</h2>

                            <div className="space-y-8">
                                {/* Living Room */}
                                {data.amenities.living.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <span>🛋️</span> Salon
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {data.amenities.living.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Kitchen */}
                                {data.amenities.kitchen.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <span>🍳</span> Kuchnia
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {data.amenities.kitchen.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Bedroom */}
                                {data.amenities.bedroom.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <span>🛏️</span> Sypialnia
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {data.amenities.bedroom.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Bathroom */}
                                {data.amenities.bathroom.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <span>🚿</span> Łazienka
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {data.amenities.bathroom.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Terrace */}
                                {data.amenities.terrace.length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                            <span>🌿</span> Taras
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {data.amenities.terrace.map((item, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
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
