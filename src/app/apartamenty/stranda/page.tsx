"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import { getAssetPath } from "@/utils/assetPath";


// Update buildings data structure to include images from strandaApartments data
const getBuildingsData = () => {
    const buildings: Record<"A" | "B" | "C", { id: string; image: string }[]> = {
        A: [],
        B: [],
        C: [],
    };

    Object.values(strandaApartments).forEach((apt) => {
        const b = apt.building as "A" | "B" | "C";
        if (buildings[b]) {
            buildings[b].push({
                id: apt.id,
                image: apt.gallery.heroImage || apt.gallery.images[0] || getAssetPath("/images/placeholder.webp"),
            });
        }
    });

    // Ensure they are sorted by ID
    buildings.A.sort((a, b) => a.id.localeCompare(b.id));
    buildings.B.sort((a, b) => a.id.localeCompare(b.id));
    buildings.C.sort((a, b) => a.id.localeCompare(b.id));

    return buildings;
};

export default function StrandaPage() {
    const { t } = useLanguage();
    const [selectedView, setSelectedView] = useState<string | null>(null);
    const buildings = useMemo(() => getBuildingsData(), []);
    const buildingKeys: Array<"A" | "B" | "C"> = ["A", "B", "C"];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedView(null);
        };

        if (selectedView) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedView]);

    const getBuildingLakeView = (key: string) => {
        switch (key) {
            case "A": return getAssetPath("/images/stranda/A205/A205_15.webp");
            case "B": return getAssetPath("/images/stranda/B401/B401_1.webp");
            case "C": return getAssetPath("/images/stranda/C404/C404_17.webp");
            default: return getAssetPath("/images/hero_bg.webp");
        }
    };

    const getBuildingVisuals = (key: string) => {
        switch (key) {
            case "A": return getAssetPath("/images/stranda/A205/A205_15.webp");
            case "B": return getAssetPath("/images/stranda/B401/B401_1.webp");
            case "C": return getAssetPath("/images/stranda/C404/C404_17.webp");
            default: return getAssetPath("/images/hero_bg.webp");
        }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${getAssetPath('/images/apartments_2.webp')}')` }}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-4">Giżycko, Jezioro Kisajno</div>
                    <h1 className="text-4xl md:text-7xl font-sans mb-2">Stranda Residence</h1>
                    <p className="text-xl md:text-3xl font-light">{t("stranda", "subtitle")}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {t("stranda", "description")}
                    </p>
                </div>

                {/* Building Sections */}
                {buildingKeys.map((buildingKey) => {
                    const lakeViewPhoto = getBuildingLakeView(buildingKey);
                    const buttonBgImage = getBuildingVisuals(buildingKey);

                    return (
                        <div key={buildingKey} className="mb-24 last:mb-0">
                            {/* Section Header with Two Large Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12">
                                {/* Left Button: Building Label */}
                                <div className="w-full sm:w-auto px-12 py-5 bg-amber-500 text-white rounded-full font-bold text-xl md:text-2xl shadow-xl shadow-amber-500/20 text-center tracking-widest uppercase">
                                    {t("stranda", "building")} {buildingKey}
                                </div>

                                {/* Right Button: Interactive Lake View */}
                                <button
                                    onClick={() => setSelectedView(lakeViewPhoto)}
                                    className="group relative w-full sm:w-auto px-10 py-5 rounded-full overflow-hidden shadow-xl transition-all active:scale-95 flex items-center justify-center"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={buttonBgImage}
                                            alt="Widok tło"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                                    </div>
                                    <span className="relative z-10 text-white font-bold text-lg md:text-xl tracking-wide uppercase flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        widok z budynku
                                    </span>
                                </button>

                                <div className="hidden lg:flex flex-col ml-4">
                                    <p className="text-slate-400 font-light text-sm tracking-widest uppercase italic border-l-2 border-amber-500 pl-4 py-1">
                                        {buildingKey === "A" && "Port i zatoka"}
                                        {buildingKey === "B" && "Główny basen Kisajna"}
                                        {buildingKey === "C" && "Zachody słońca i marina"}
                                    </p>
                                </div>
                            </div>

                            {/* Units Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {buildings[buildingKey].map((unit) => {
                                    const aptData = strandaApartments[unit.id as keyof typeof strandaApartments];
                                    return (
                                        <div key={unit.id} className="group flex flex-col h-full space-y-4">
                                            <Link href={`/apartamenty/stranda/${unit.id}`} className="block flex-grow">
                                                <div
                                                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
                                                >
                                                    <div className="relative h-64 w-full overflow-hidden">
                                                        <Image
                                                            src={unit.image}
                                                            alt={`Apartament ${unit.id}`}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                                        <div className="absolute bottom-4 left-5 text-white">
                                                            <span className="text-xs uppercase tracking-widest opacity-90 font-medium mb-1 block">{t("stranda", "apartment")}</span>
                                                            <h3 className="text-2xl font-bold font-sans">
                                                                {unit.id}
                                                                {aptData?.amenities?.terrace?.some((item: string) => item.includes('jacuzzi')) && aptData?.amenities?.living?.some((item: string) => item.includes('sauna')) 
                                                                    ? " z sauną i jacuzzi"
                                                                    : aptData?.amenities?.terrace?.some((item: string) => item.includes('jacuzzi')) && aptData?.description?.includes('na dachu')
                                                                    ? " z jacuzzi na dachu"
                                                                    : aptData?.amenities?.terrace?.some((item: string) => item.includes('jacuzzi'))
                                                                    ? " z jacuzzi"
                                                                    : aptData?.amenities?.living?.some((item: string) => item.includes('sauna'))
                                                                    ? " z sauną"
                                                                    : ""}
                                                            </h3>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <a
                                                href={`https://engine37851.idobooking.com/index.php?ob[${aptData?.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-green-600 hover:bg-green-500 text-white text-center py-4 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-green-600/30 active:scale-95 uppercase tracking-widest"
                                            >
                                                {t("nav", "bookBtn")}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* View Modal */}
            <AnimatePresence>
                {selectedView && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedView(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative z-10 w-full max-w-6xl aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <Image
                                src={selectedView}
                                alt="Building View"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                            <button
                                onClick={() => setSelectedView(null)}
                                title="Zamknij"
                                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-20 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>

                            <div className="absolute bottom-8 left-8 text-white z-20">
                                <h3 className="text-3xl font-sans font-bold mb-2">Bezpośredni widok na jezioro</h3>
                                <p className="text-white/70 font-light tracking-widest uppercase text-sm">Doświadcz luksusu w Stranda Residence</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
