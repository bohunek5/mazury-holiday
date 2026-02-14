"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { BedDouble, TentTree, Flame, Dog } from "lucide-react";

export default function CottageDetailsClient({ id }: { id: string }) {
    const { t } = useLanguage();
    // const params = useParams(); // Removed in favor of prop
    // const id = params?.id as string; // Removed in favor of prop
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Using the same images as the main gallery for now
    const galleryIndices = Array.from({ length: 43 }, (_, i) => i + 4);
    const galleryImages = galleryIndices.map(num => `/mazury-holiday/images/skorupki/skorupki_${num}.webp`);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/skorupki/skorupki_1.webp')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-500 font-bold tracking-widest mb-2 uppercase bg-white/10 backdrop-blur-sm inline-block px-4 py-1 rounded-full">{t('skorupki', 'title')}</span>
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">Domek {id}</h1>
                    <p className="text-xl md:text-3xl font-light">{t('skorupki', 'details.price')}</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Description */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Wnetrze */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white">{t('skorupki', 'details.interiorTitle')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t('skorupki', 'details.interiorDesc')}
                            </p>
                        </div>

                        {/* Taras */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white">{t('skorupki', 'details.terraceTitle')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t('skorupki', 'details.terraceDesc')}
                            </p>
                        </div>

                        {/* Aktywnosc */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white">{t('skorupki', 'details.activityTitle')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t('skorupki', 'details.activityDesc')}
                            </p>
                        </div>

                        {/* Lokalizacja */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white">{t('skorupki', 'details.locationTitle')}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t('skorupki', 'details.locationDesc')}
                            </p>
                        </div>

                        {/* Gallery Preview */}
                        <div>
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">{t('skorupki', 'galleryTitle')}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {galleryIndices.slice(0, 4).map((num, idx) => (
                                    <div
                                        key={num}
                                        className="relative h-32 rounded-xl overflow-hidden cursor-pointer shadow-md hover:opacity-90 transition-opacity"
                                        onClick={() => openLightbox(idx)}
                                    >
                                        <Image
                                            src={`/mazury-holiday/images/skorupki/skorupki_${num}.webp`}
                                            alt="Galeria"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => openLightbox(0)}
                                className="w-full mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/30"
                            >
                                {t('skorupki', 'expandGallery')}
                            </button>
                        </div>

                    </div>

                    {/* Right Column: Amenities & Booking */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                                {t('skorupki', 'details.amenitiesBlockTitle')}
                            </h3>

                            <div className="space-y-8">
                                {/* Bedroom */}
                                <div>
                                    <div className="flex items-center gap-4 mb-3 text-amber-500">
                                        <BedDouble size={40} strokeWidth={1.5} />
                                        <h4 className="font-bold text-lg">{t('skorupki', 'details.bedroomTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-14">
                                        {(t('skorupki', 'details.bedroomItems') as unknown as string[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 block min-w-[6px] w-[6px] h-[6px] rounded-full bg-slate-300 dark:bg-slate-700" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cottage Amenities */}
                                <div>
                                    <div className="flex items-center gap-4 mb-3 text-amber-500">
                                        <TentTree size={40} strokeWidth={1.5} />
                                        <h4 className="font-bold text-lg">{t('skorupki', 'details.cottageAmenitiesTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-14">
                                        {(t('skorupki', 'details.cottageAmenitiesItems') as unknown as string[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 block min-w-[6px] w-[6px] h-[6px] rounded-full bg-slate-300 dark:bg-slate-700" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Common Areas */}
                                <div>
                                    <div className="flex items-center gap-4 mb-3 text-amber-500">
                                        <Flame size={40} strokeWidth={1.5} />
                                        <h4 className="font-bold text-lg">{t('skorupki', 'details.commonAreasTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-14">
                                        {(t('skorupki', 'details.commonAreasItems') as unknown as string[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 block min-w-[6px] w-[6px] h-[6px] rounded-full bg-slate-300 dark:bg-slate-700" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional */}
                                <div>
                                    <div className="flex items-center gap-4 mb-3 text-amber-500">
                                        <Dog size={40} strokeWidth={1.5} />
                                        <h4 className="font-bold text-lg">{t('skorupki', 'details.additionalTitle')}</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 pl-14">
                                        {(t('skorupki', 'details.additionalItems') as unknown as string[]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-1.5 block min-w-[6px] w-[6px] h-[6px] rounded-full bg-slate-300 dark:bg-slate-700" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a href="tel:+48607241090" className="block w-full bg-[#50B848] hover:bg-[#45a041] text-white text-center font-bold py-4 rounded-xl mt-8 transition-colors shadow-lg hover:shadow-green-500/30 uppercase tracking-widest">
                                {t('skorupki', 'details.bookBtn')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={`Domek ${id}`}
                />
            )}

            <Footer />
        </main>
    );
}
