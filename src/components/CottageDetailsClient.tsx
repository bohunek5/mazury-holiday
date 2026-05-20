"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { Users, BedDouble, Bath, Maximize2, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import { getCottageById } from "@/data/cottages-data";
import { getAssetPath } from "@/utils/assetPath";

export default function CottageDetailsClient({ id }: { id: string }) {
    const { t } = useLanguage();
    const cottageId = parseInt(id, 10);
    const cottage = getCottageById(cottageId);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    // Gallery images from skorupki folder
    const galleryStart = cottage?.galleryStart ?? 4;
    const galleryCount = 12;
    const galleryImages = Array.from({ length: galleryCount }, (_, i) => {
        const idx = ((galleryStart + i - 1) % 55) + 4;
        return getAssetPath(`/images/skorupki/skorupki_${idx}.webp`);
    });

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    if (!cottage) {
        return (
            <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <h1 className="text-4xl font-playfair text-slate-900 dark:text-white mb-4">Domek nie znaleziony</h1>
                        <Link href="/domki" className="text-amber-500 hover:underline">← Wróć do listy domków</Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const prevId = cottage.id > 1 ? cottage.id - 1 : null;
    const nextId = cottage.id < 10 ? cottage.id + 1 : null;

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={galleryImages[0]}
                        alt={cottage.name}
                        fill
                        priority
                        className="object-cover"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Strona główna</Link>
                        <span>/</span>
                        <Link href="/domki" className="hover:text-white transition-colors">Domki Skorupki</Link>
                        <span>/</span>
                        <span className="text-amber-400">{cottage.name}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="inline-block bg-amber-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                                Mazury Holiday — Skorupki
                            </span>
                            <h1 className="text-5xl md:text-7xl font-playfair text-white mb-2">{cottage.name}</h1>
                            <p className="text-xl text-white/80 font-light">{cottage.tagline}</p>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex gap-4 flex-wrap">
                            {[
                                { icon: Users, label: `${cottage.guests} osób` },
                                { icon: BedDouble, label: `${cottage.bedrooms} sypialnie` },
                                { icon: Bath, label: `${cottage.bathrooms} łaz.` },
                                { icon: Maximize2, label: `${cottage.area} m²` },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2 text-white">
                                    <Icon size={18} className="text-amber-400" />
                                    <span className="text-sm font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Prev/Next Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 flex flex-col gap-2">
                    {prevId && (
                        <Link href={`/domki/${prevId}`} className="bg-white/20 hover:bg-amber-500 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white transition-all hover:scale-110 shadow-lg">
                            <ChevronLeft size={20} />
                        </Link>
                    )}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                    {nextId && (
                        <Link href={`/domki/${nextId}`} className="bg-white/20 hover:bg-amber-500 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white transition-all hover:scale-110 shadow-lg">
                            <ChevronRight size={20} />
                        </Link>
                    )}
                </div>
            </section>

            {/* Quick Highlights Strip */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                        {cottage.highlights.map((h) => (
                            <div key={h.label} className="flex items-center gap-2 flex-shrink-0">
                                <div className="relative w-6 h-6">
                                    <Image src={h.icon} alt={h.label} fill className="object-contain dark:invert" />
                                </div>
                                <span className="text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap">{h.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT: Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white">O domku</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{cottage.description}</p>
                        </div>

                        {/* Amenities with Icon Tabs */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-8 text-slate-900 dark:text-white">Wyposażenie</h2>

                            {/* Tab Buttons */}
                            <div className="flex gap-2 flex-wrap mb-8">
                                {cottage.amenities.map((cat, idx) => (
                                    <button
                                        key={cat.category}
                                        onClick={() => setActiveTab(idx)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                            activeTab === idx
                                                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                                                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300"
                                        }`}
                                    >
                                        <div className={`relative w-4 h-4 ${activeTab === idx ? "" : "dark:invert"}`}>
                                            <Image src={cat.icon} alt={cat.category} fill className={`object-contain ${activeTab === idx ? "invert" : ""}`} />
                                        </div>
                                        {cat.category}
                                    </button>
                                ))}
                            </div>

                            {/* Active Tab Content */}
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-14 h-14 bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-3">
                                        <Image
                                            src={cottage.amenities[activeTab].icon}
                                            alt={cottage.amenities[activeTab].category}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-playfair text-slate-900 dark:text-white">
                                        {cottage.amenities[activeTab].category}
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {cottage.amenities[activeTab].items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* All amenities compact grid */}
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {cottage.amenities.map((cat, idx) => (
                                    idx !== activeTab && (
                                        <button
                                            key={cat.category}
                                            onClick={() => setActiveTab(idx)}
                                            className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 text-left hover:border-amber-300 transition-colors group"
                                        >
                                            <div className="relative w-8 h-8 mb-2">
                                                <Image src={cat.icon} alt={cat.category} fill className="object-contain dark:invert opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat.category}</p>
                                            <p className="text-xs text-slate-400">{cat.items.length} pozycji</p>
                                        </button>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Galeria zdjęć</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((src, idx) => (
                                    <div
                                        key={src}
                                        className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 ${idx === 0 ? "col-span-2 row-span-2 h-80" : "h-36"}`}
                                        onClick={() => openLightbox(idx)}
                                    >
                                        <Image
                                            src={getAssetPath(src)}
                                            alt={`${cottage.name} - zdjęcie ${idx + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading={idx < 4 ? "eager" : "lazy"}
                                        />
                                        {idx === galleryImages.length - 1 && (
                                            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">+więcej</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rules */}
                        <div>
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">Zasady pobytu</h2>
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                                <ul className="space-y-3">
                                    {cottage.rules.map((rule) => (
                                        <li key={rule} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Booking Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 sticky top-24">

                            {/* Price */}
                            <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-slate-900 dark:text-white">od {cottage.price} zł</span>
                                    <span className="text-slate-500 dark:text-slate-400">/doba</span>
                                </div>
                                {cottage.priceWeekend !== cottage.price && (
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Weekend: od {cottage.priceWeekend} zł/doba</p>
                                )}
                            </div>

                            {/* Quick info */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { label: "Goście", value: `${cottage.guests} osób`, icon: Users },
                                    { label: "Sypialnie", value: `${cottage.bedrooms}`, icon: BedDouble },
                                    { label: "Łazienki", value: `${cottage.bathrooms}`, icon: Bath },
                                    { label: "Powierzchnia", value: `${cottage.area} m²`, icon: Maximize2 },
                                ].map(({ label, value, icon: Icon }) => (
                                    <div key={label} className="text-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-3">
                                        <Icon size={20} className="mx-auto mb-1 text-amber-500" />
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <a
                                href="tel:+48730067027"
                                className="flex items-center justify-center gap-3 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-amber-500/30 mb-3 text-lg"
                            >
                                <Phone size={20} />
                                +48 730 067 027
                            </a>
                            <a
                                href="mailto:rezerwacje@mazury.holiday"
                                className="flex items-center justify-center gap-3 w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold py-4 rounded-2xl transition-all mb-6"
                            >
                                <Mail size={18} />
                                Wyślij zapytanie
                            </a>

                            <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                                Dostępność i dokładna cena — potwierdzamy telefonicznie
                            </p>

                            {/* Navigation to other cottages */}
                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 text-center">Inne domki</p>
                                <div className="flex justify-between">
                                    {prevId ? (
                                        <Link href={`/domki/${prevId}`} className="text-sm text-amber-500 hover:underline flex items-center gap-1">
                                            <ChevronLeft size={14} /> Domek {prevId}
                                        </Link>
                                    ) : <span />}
                                    <Link href="/domki" className="text-sm text-slate-500 hover:text-amber-500 transition-colors">Lista domków</Link>
                                    {nextId ? (
                                        <Link href={`/domki/${nextId}`} className="text-sm text-amber-500 hover:underline flex items-center gap-1">
                                            Domek {nextId} <ChevronRight size={14} />
                                        </Link>
                                    ) : <span />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={cottage.name}
                />
            )}

            <Footer />
        </main>
    );
}
