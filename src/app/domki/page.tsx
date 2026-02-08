"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function DomkiPage() {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    const galleryImages = [4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => `/mazury-holiday/images/skorupki/skorupki_${num}.webp`);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/skorupki/skorupki_1.webp')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">{t('skorupki', 'title')}</h1>
                    <p className="text-xl md:text-3xl font-light">{t('skorupki', 'subtitle')}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <h2 className="text-4xl font-playfair mb-8 text-slate-900 dark:text-white">{t('skorupki', 'introTitle')}</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>{t('skorupki', 'descriptionPart1')}</p>
                            <p>{t('skorupki', 'descriptionPart2')}</p>
                            <p>{t('skorupki', 'descriptionPart3')}</p>
                            <p>{t('skorupki', 'descriptionPart4')}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-amber-500 mb-2">{t('skorupki', 'areaTitle')}</h4>
                                <p>{t('skorupki', 'areaDesc')}</p>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-amber-500 mb-2">{t('skorupki', 'locationTitle')}</h4>
                                <p>{t('skorupki', 'locationDesc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/mazury-holiday/images/skorupki/skorupki_2.webp"
                                alt="Domki Skorupki wnętrze"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/mazury-holiday/images/skorupki/skorupki_3.webp"
                                alt="Domki Skorupki okolica"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Amenities Grid */}
                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">{t('skorupki', 'amenitiesTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { key: "fullEquip", icon: "🏠" },
                            { key: "garden", icon: "🌳" },
                            { key: "bonfire", icon: "🔥" },
                            { key: "parking", icon: "🚗" },
                            { key: "wifi", icon: "📶" },
                            { key: "ac", icon: "❄️" },
                            { key: "waterAccess", icon: "🌊" },
                            { key: "peace", icon: "🧘" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors group">
                                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200 text-center">{t('skorupki', `amenities.${item.key}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-24">
                    <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">{t('skorupki', 'galleryTitle')}</h3>

                    {/* First 3 images - always visible */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {[4, 5, 6].map((num, idx) => (
                            <div
                                key={num}
                                className="relative h-64 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                <Image
                                    src={`/mazury-holiday/images/skorupki/skorupki_${num}.webp`}
                                    alt={`Domki Skorupki - widok ${num}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="eager"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Remaining images - collapsible */}
                    <div>
                        <button
                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                            className="w-full mb-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            {galleryExpanded ? `▲ ${t('skorupki', 'collapseGallery')}` : `▼ ${t('skorupki', 'expandGallery')} (6)`}
                        </button>

                        {galleryExpanded && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                                {[7, 8, 9, 10, 11, 12].map((num, idx) => (
                                    <div
                                        key={num}
                                        className="relative h-64 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                        onClick={() => openLightbox(idx + 3)}
                                    >
                                        <Image
                                            src={`/mazury-holiday/images/skorupki/skorupki_${num}.webp`}
                                            alt={`Domki Skorupki - widok ${num}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('/mazury-holiday/images/skorupki/skorupki_1.webp')] bg-cover bg-center" />
                    <div className="relative z-10">
                        <h3 className="text-4xl font-playfair mb-6">{t('skorupki', 'ctaTitle')}</h3>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            {t('skorupki', 'ctaDesc')}
                        </p>
                        <a
                            href="tel:+48607241090"
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-2xl hover:shadow-amber-500/40 whitespace-nowrap"
                        >
                            +48 607 241 090
                        </a>
                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix="Domki Skorupki"
                />
            )}

            <Footer />
        </main>
    );
}
