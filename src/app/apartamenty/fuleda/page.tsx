"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";
import { Thermometer, Flame, Umbrella, Tent, Wifi, Utensils, WashingMachine, Ship } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { fuledaApartments } from "@/data/fuleda-data";

import { getAssetPath } from "@/utils/assetPath";

export default function FuledaPage() {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const galleryImages = [
        getAssetPath("/images/fuleda/Front Apartamenty.webp"),
        getAssetPath("/images/fuleda/front apartamenty jeziorko.webp"),
        getAssetPath("/images/fuleda/jeziorko.webp"),
        getAssetPath("/images/fuleda/linia plaza.webp"),
        getAssetPath("/images/fuleda/plaza cdd.webp"),
        getAssetPath("/images/fuleda/fuleda_1.webp")
    ];

    const apartments = [
        {
            id: 'parter',
            title: `Apartament Fuleda ${fuledaApartments.parter.type}`,
            guests: fuledaApartments.parter.guests,
            image: getAssetPath(fuledaApartments.parter.gallery.heroImage),
            features: fuledaApartments.parter.amenities.terrace.slice(0, 4)
        },
        {
            id: 'pietro',
            title: `Apartament Fuleda ${fuledaApartments.pietro.type}`,
            guests: fuledaApartments.pietro.guests,
            image: getAssetPath(fuledaApartments.pietro.gallery.heroImage),
            features: fuledaApartments.pietro.amenities.terrace.slice(0, 4)
        }
    ];


    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div className="absolute inset-0">
                    <Image
                        src={getAssetPath("/images/fuleda/parter/Fuleda parter1.webp")}
                        alt="Fuleda"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-sans mb-2">{t("fuledaPage", "title")}</h1>
                    <p className="text-xl md:text-2xl font-light">{t("fuledaPage", "subtitle")}</p>
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
                                <Image src={getAssetPath("/images/fuleda/Front Apartamenty.webp")} alt="Front Apartamentów Fuleda" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                            <div
                                className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mt-12 cursor-pointer group"
                                onClick={() => {
                                    setLightboxIndex(2);
                                    setLightboxOpen(true);
                                }}
                            >
                                <Image src={getAssetPath("/images/fuleda/jeziorko.webp")} alt="Jeziorko Fuleda" fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="eager" sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-sans mb-6 text-slate-900 dark:text-white">{t("fuledaPage", "introTitle")}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {t("fuledaPage", "description")}
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-emerald-600">{t("fuledaPage", "groundFloorTitle")}</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {t("fuledaPage", "groundFloorDesc")}
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-emerald-600">{t("fuledaPage", "firstFloorTitle")}</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {t("fuledaPage", "firstFloorDesc")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apartment Cards */}
                <div className="mb-24">
                    <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">Nasze Apartamenty</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {apartments.map((apartment) => (
                            <Link
                                key={apartment.id}
                                href={`/apartamenty/fuleda/${apartment.id}`}
                                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-800"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={getAssetPath(apartment.image)}
                                        alt={apartment.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold">
                                        {apartment.guests} osoby
                                    </div>

                                </div>
                                <div className="p-6">
                                    <h4 className="text-2xl font-sans mb-2 text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                        {apartment.title}
                                    </h4>
                                    <ul className="space-y-2 mb-6">
                                        {apartment.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <span className="text-amber-500">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-amber-500 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                        Zobacz szczegóły →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div className="mb-24">
                    <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">{t("fuledaPage", "amenitiesTitle")}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { key: "ac", icon: <Thermometer size={32} strokeWidth={1.5} /> },
                            { key: "fireplace", icon: <Flame size={32} strokeWidth={1.5} /> },
                            { key: "beach", icon: <Umbrella size={32} strokeWidth={1.5} /> },
                            { key: "bonfire", icon: <Tent size={32} strokeWidth={1.5} /> },
                            { key: "wifi", icon: <Wifi size={32} strokeWidth={1.5} /> },
                            { key: "kitchen", icon: <Utensils size={32} strokeWidth={1.5} /> },
                            { key: "washer", icon: <WashingMachine size={32} strokeWidth={1.5} /> },
                            { key: "pier", icon: <Ship size={32} strokeWidth={1.5} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors group">
                                <span className="mb-2 group-hover:scale-110 transition-transform text-slate-700 dark:text-slate-300 group-hover:text-amber-500">{item.icon}</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200 text-center">{t("fuledaPage", `amenities.${item.key}`)}</span>
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
