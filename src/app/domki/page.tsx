"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import Link from "next/link";
import { Users, BedDouble, Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { skorupkiData } from "@/data/skorupki-data";
import { cottagesData } from "@/data/cottages-data";
import { getAssetPath } from "@/utils/assetPath";
import ICalCalendar from "@/components/ICalCalendar";

export default function DomkiPage() {
    const { t } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    const galleryIndices = Array.from({ length: 55 }, (_, i) => i + 4); // 4 to 58
    const galleryImages = galleryIndices.map(num => getAssetPath(`/images/skorupki/skorupki_${num}.webp`));

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
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${getAssetPath('/images/skorupki/skorupki_1.webp')}')` }}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-4">Mazury Holiday</div>
                    <h1 className="text-4xl md:text-7xl font-sans mb-2">{skorupkiData.title}</h1>
                    <p className="text-xl md:text-3xl font-light">{t('skorupki', 'subtitle')}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <h2 className="text-4xl font-sans mb-8 text-slate-900 dark:text-white">{t('skorupki', 'introTitle')}</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>{skorupkiData.description}</p>
                            <p>{t('skorupki', 'descriptionPart1')}</p>
                            <p>{t('skorupki', 'descriptionPart2')}</p>
                            <p>{t('skorupki', 'descriptionPart3')}</p>
                            <p>{t('skorupki', 'descriptionPart4')}</p>
                            <p className="mt-6 font-semibold text-slate-800 dark:text-slate-200">{t('skorupki', 'externalAmenities')}</p>
                        </div>

                        <div className="mt-12">
                            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-amber-500 mb-2">{t('skorupki', 'areaTitle')}</h4>
                                <div className="space-y-1">
                                    {t('skorupki', 'areaDesc').split('\n').map((line: string, index: number) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={getAssetPath("/images/skorupki/skorupki_2.webp")}
                                alt="Domki Skorupki wnętrze"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={getAssetPath("/images/skorupki/skorupki_3.webp")}
                                alt="Domki Skorupki okolica"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Booking Button & Calendar */}
                <div className="flex flex-col items-center justify-center mb-24 max-w-4xl mx-auto">
                    <a
                        href="https://engine37851.idobooking.com/index.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-2xl hover:shadow-green-600/40 whitespace-nowrap mb-12"
                    >
                        Zarezerwuj
                    </a>
                    <div className="w-full bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-sans mb-6 text-center text-slate-900 dark:text-white">Dostępność</h3>
                        <ICalCalendar
                            icalUrl="https://client37851.idosell.com/panel/offer/icalexport/itemid/45/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"
                            apartmentId="Domki Skorupki"
                        />
                    </div>
                </div>

                {/* Amenities Grid */}
                <div className="mb-24">
                    <h3 className="text-2xl font-sans mb-8 text-center text-slate-900 dark:text-white">{t('skorupki', 'amenitiesTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-2">
                                <Image src={getAssetPath("/icons/ROOM.svg")} alt="Domki" width={32} height={32} className="dark:invert opacity-80" />
                            </div>
                            <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Wyposażenie</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.fullEquip')}, {t('skorupki', 'amenities.ac')}
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-2">
                                <Image src={getAssetPath("/icons/LOCATION.svg")} alt="Teren" width={32} height={32} className="dark:invert opacity-80" />
                            </div>
                            <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Teren i Relaks</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.garden')}, {t('skorupki', 'amenities.bonfire')}
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-2">
                                <Image src={getAssetPath("/icons/PARKING.svg")} alt="Udogodnienia" width={32} height={32} className="dark:invert opacity-80" />
                            </div>
                            <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Dostępność</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.parking')}, {t('skorupki', 'amenities.waterAccess')}
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-center mb-2">
                                <Image src={getAssetPath("/icons/WIFI.svg")} alt="Media" width={32} height={32} className="dark:invert opacity-80" />
                            </div>
                            <h4 className="text-base font-sans mb-1 text-slate-900 dark:text-white">Media</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.wifi')}, Smart TV
                            </p>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-24">
                    <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">{t('skorupki', 'galleryTitle')}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {galleryIndices.slice(0, 3).map((num, idx) => (
                            <div
                                key={num}
                                className="relative h-64 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                <Image
                                    src={getAssetPath(`/images/skorupki/skorupki_${num}.webp`)}
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
                            className="w-full mb-6 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            {galleryExpanded ? `▲ ${t('skorupki', 'collapseGallery')}` : `▼ ${t('skorupki', 'expandGallery')}`}
                        </button>

                        {galleryExpanded && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                                {galleryIndices.slice(3).map((num, idx) => (
                                    <div
                                        key={num}
                                        className="relative h-64 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                        onClick={() => openLightbox(idx + 3)}
                                    >
                                        <Image
                                            src={getAssetPath(`/images/skorupki/skorupki_${num}.webp`)}
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
                    <div 
                        className="absolute inset-0 opacity-20 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${getAssetPath('/images/skorupki/skorupki_1.webp')}')` }}
                    />
                    <div className="relative z-10">
                        <h3 className="text-4xl font-sans mb-6">{t('skorupki', 'ctaTitle')}</h3>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            {t('skorupki', 'ctaDesc')}
                        </p>
                        <a
                            href="tel:+48730067027"
                            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-2xl hover:shadow-green-600/40 whitespace-nowrap"
                        >
                            730 067 027
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
