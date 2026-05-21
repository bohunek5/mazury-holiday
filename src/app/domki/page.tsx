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
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
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

                {/* Cottages Grid */}
                <div className="mb-24">
                    <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">Wybierz swój domek</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cottagesData.map((cottage) => (
                            <Link href={`/domki/${cottage.id}`} key={cottage.id} className="group block">
                                <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 h-full flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={getAssetPath(cottage.heroImage)}
                                            alt={cottage.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {cottage.id === 8 || cottage.id === 10 ? (
                                            <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Premium</div>
                                        ) : null}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h4 className="text-xl font-sans font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-500 transition-colors">{cottage.name}</h4>
                                        <p className="text-sm text-amber-500 font-medium mb-3">{cottage.tagline}</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 line-clamp-2">
                                            {cottage.description}
                                        </p>

                                        {/* Quick highlights icons */}
                                        <div className="flex gap-2 mb-2 flex-wrap">
                                            {cottage.highlights.slice(0, 4).map((h) => (
                                                <div key={h.label} title={h.label} className="relative w-7 h-7 bg-slate-50 dark:bg-slate-800 rounded-lg p-1">
                                                    <Image src={h.icon} alt={h.label} fill className="object-contain dark:invert p-1" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                                <span className="flex items-center gap-1"><Users size={14} /> Max. ilość osób: {cottage.guests}</span>
                                                <span className="flex items-center gap-1"><BedDouble size={14} /> {cottage.bedrooms} syp.</span>
                                                <span className="flex items-center gap-1"><Maximize2 size={14} /> {cottage.area}m²</span>
                                            </div>
                                            <span className="text-amber-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-sm">
                                                Szczegóły &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Amenities Grid */}
                <div className="mb-24">
                    <h3 className="text-3xl font-sans mb-12 text-center text-slate-900 dark:text-white">{t('skorupki', 'amenitiesTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/ROOM.svg")} alt="Domki" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-sans mb-2 text-slate-900 dark:text-white">Wyposażenie</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.fullEquip')}, {t('skorupki', 'amenities.ac')}, {t('skorupki', 'amenities.wifi')}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/LOCATION.svg")} alt="Teren" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-sans mb-2 text-slate-900 dark:text-white">Teren i Relaks</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.garden')}, {t('skorupki', 'amenities.bonfire')}, {t('skorupki', 'amenities.peace')}
                            </p>
                        </div>

                        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative w-14 h-14 mx-auto mb-6">
                                <Image src={getAssetPath("/icons/PARKING.svg")} alt="Udogodnienia" fill className="object-contain dark:invert opacity-80" />
                            </div>
                            <h4 className="text-2xl font-sans mb-2 text-slate-900 dark:text-white">Dostępność</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t('skorupki', 'amenities.parking')}, {t('skorupki', 'amenities.waterAccess')}
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
                            className="w-full mb-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
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
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-5 rounded-full transition-all text-xl shadow-2xl hover:shadow-amber-500/40 whitespace-nowrap"
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
