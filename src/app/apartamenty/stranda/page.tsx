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
import StrandaMap from "@/components/StrandaMap";

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
    const buildings = useMemo(() => getBuildingsData(), []);
    const buildingKeys: Array<"A" | "B" | "C"> = ["A", "B", "C"];

    // Filter states
    const [filterJacuzzi, setFilterJacuzzi] = useState(false);
    const [filterSauna, setFilterSauna] = useState(false);
    const [filterCapacity, setFilterCapacity] = useState<'all' | '2' | '3' | '4' | '5' | '6'>('all');
    const [filterFloor, setFilterFloor] = useState<'all' | 'parter' | 'pietro1' | 'pietro2' | 'pietro3'>('all');

    const filteredBuildings = useMemo(() => {
        const result: Record<"A" | "B" | "C", typeof buildings.A> = { A: [], B: [], C: [] };
        
        for (const buildingKey of buildingKeys) {
            result[buildingKey] = buildings[buildingKey].filter((unit) => {
                const aptData = strandaApartments[unit.id as keyof typeof strandaApartments];
                if (!aptData) return false;
                
                // Check Jacuzzi
                if (filterJacuzzi) {
                    const hasJacuzzi = (aptData.amenities?.terrace?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                        || (aptData.amenities?.bathroom?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                        || (aptData.title?.toLowerCase().includes('jacuzzi') || false);
                    if (!hasJacuzzi) return false;
                }

                // Check Sauna
                if (filterSauna) {
                    const hasSauna = (aptData.amenities?.bathroom?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                        || (aptData.amenities?.living?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                        || (aptData.title?.toLowerCase().includes('sauna') || false);
                    if (!hasSauna) return false;
                }
                
                if (filterCapacity !== 'all') {
                    const guestsStr = aptData.guests || "4";
                    const parts = guestsStr.split('+').map(n => parseInt(n.trim(), 10) || 0);
                    const totalGuests = parts.reduce((a, b) => a + b, 0);
                    
                    const filterNum = parseInt(filterCapacity, 10);
                    
                    // Typowy filtr hotelowy: pokaż wszystkie apartamenty, które pomieszczą minimum 'filterNum' osób
                    if (totalGuests < filterNum) return false; 
                }
                
                // Check Floor
                if (filterFloor !== 'all') {
                    let floorDigit: number | null = null;
                    const match = unit.id.match(/[a-cA-C](\d)\d\d/);
                    if (match) {
                        floorDigit = parseInt(match[1], 10);
                    }
                    
                    if (floorDigit !== null) {
                        const isParter = floorDigit === 1;
                        const isP1 = floorDigit === 2;
                        const isP2 = floorDigit === 3;
                        const isP3 = floorDigit === 4;
                        
                        if (filterFloor === 'parter' && !isParter) return false;
                        if (filterFloor === 'pietro1' && !isP1) return false;
                        if (filterFloor === 'pietro2' && !isP2) return false;
                        if (filterFloor === 'pietro3' && !isP3) return false;
                    } else {
                        // Units without clear floor number in ID (like c-studio) 
                        return false; 
                    }
                }
                
                return true;
            });
        }
        return result;
    }, [buildings, filterJacuzzi, filterSauna, filterCapacity, filterFloor]);

    const filtersLabels = (t("stranda", "filters") as any) || {};

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-[center_30%]"
                    style={{ backgroundImage: `url('${getAssetPath('/images/stranda/stranda_hero_jacuzzi.jpg')}')` }}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-4">Giżycko, Jezioro Kisajno</div>
                    <h1 className="text-4xl md:text-7xl font-sans mb-2">Stranda Residence</h1>
                    <p className="text-xl md:text-3xl font-light">{t("stranda", "subtitle")}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {t("stranda", "description")}
                    </p>
                </div>

                {/* Filters Panel */}
                <div className="mb-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                        
                        {/* Toggles Group */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            {/* Jacuzzi Toggle */}
                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{filtersLabels.jacuzzi || "Jacuzzi"}</span>
                                <button
                                    onClick={() => setFilterJacuzzi(!filterJacuzzi)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${filterJacuzzi ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                                >
                                    {filterJacuzzi ? "✓ Jacuzzi" : "○ Jacuzzi"}
                                </button>
                            </div>

                            {/* Sauna Toggle */}
                            <div className="flex flex-col gap-3 w-full sm:w-auto">
                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{filtersLabels.sauna || "Sauna"}</span>
                                <button
                                    onClick={() => setFilterSauna(!filterSauna)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${filterSauna ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                                >
                                    {filterSauna ? "✓ Sauna" : "○ Sauna"}
                                </button>
                            </div>
                        </div>

                        {/* Capacity Selector */}
                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{filtersLabels.size || "Rozmiar"}</span>
                            <div className="flex bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 flex-wrap">
                                {['all', '2', '3', '4', '5', '6'].map((cap) => (
                                    <button
                                        key={cap}
                                        onClick={() => setFilterCapacity(cap as any)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${filterCapacity === cap ? 'bg-amber-500 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                                    >
                                        {cap === 'all' ? (filtersLabels.sizeAny || "Dowolna") : `${cap} os.`}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Floor Selector */}
                        <div className="flex flex-col gap-3 w-full md:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{filtersLabels.floor || "Kondygnacja"}</span>
                            <div className="flex bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 flex-wrap">
                                {['all', 'parter', 'pietro1', 'pietro2', 'pietro3'].map((floor) => (
                                    <button
                                        key={floor}
                                        onClick={() => setFilterFloor(floor as any)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${filterFloor === floor ? 'bg-amber-500 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                                    >
                                        {floor === 'all' ? (filtersLabels.floorAny || "Dowolna") : floor === 'parter' ? (filtersLabels.floorParter || "Parter") : floor === 'pietro1' ? "1 Piętro" : floor === 'pietro2' ? "2 Piętro" : "3 Piętro"}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Map */}
                <div className="mb-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm text-center max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-6">Lokalizacja budynków</h2>
                    <StrandaMap />
                </div>

                {/* Building Sections */}
                {buildingKeys.map((buildingKey) => {
                    if (filteredBuildings[buildingKey].length === 0) return null;
                    
                    return (
                        <motion.div layout key={buildingKey} id={`building-${buildingKey}`} className="mb-24 last:mb-0 scroll-mt-32">
                            {/* Section Header with Large Button */}
                            <motion.div layout className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12">
                                {/* Building Label */}
                                <div className="w-full sm:w-auto px-6 py-3 md:px-12 md:py-5 bg-amber-500 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg md:shadow-xl shadow-amber-500/20 text-center tracking-widest uppercase">
                                    {t("stranda", "building")} {buildingKey}
                                </div>
                            </motion.div>

                            {/* Units Grid */}
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                <AnimatePresence mode="popLayout">
                                    {filteredBuildings[buildingKey].map((unit) => {
                                        const aptData = strandaApartments[unit.id as keyof typeof strandaApartments];
                                        return (
                                            <motion.div 
                                                layout
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                key={unit.id} 
                                                className="group flex flex-col h-full space-y-4"
                                            >
                                                <Link href={`/apartamenty/stranda/${unit.id}`} className="block flex-grow">
                                                    <div
                                                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
                                                    >
                                                        <div className="relative h-64 w-full overflow-hidden">
                                                            <Image
                                                                src={unit.image}
                                                                alt={`Apartament ${unit.id}`}
                                                                fill
                                                                quality={95}
                                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                                            <div className="absolute bottom-4 left-5 text-white">
                                                                <h3 className="text-lg md:text-2xl font-bold font-sans">
                                                                    {aptData?.title || unit.id}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <a
                                                    href={`https://engine37851.idobooking.com/index.php?ob[${aptData?.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-[#00c853] hover:bg-[#00e676] text-white text-center py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95 uppercase tracking-widest"
                                                >
                                                    {(t("apartments", "bookBtn") as string) || "ZAREZERWUJ GO"}
                                                </a>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </section>
            
            <Footer />
        </main>
    );
}
