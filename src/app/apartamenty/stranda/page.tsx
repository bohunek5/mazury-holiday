"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";

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
                image: apt.gallery.heroImage || apt.gallery.images[0] || "/mazury-holiday/images/placeholder.webp",
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
    // Default to building "A"
    const [activeBuilding, setActiveBuilding] = useState<"A" | "B" | "C">("A");

    // Clear saved building preference on component mount to ensure fresh start
    useEffect(() => {
        localStorage.removeItem("activeStrandaBuilding");
    }, []);

    const handleBuildingChange = (building: "A" | "B" | "C") => {
        setActiveBuilding(building);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/apartments_2.webp')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">Stranda Residence</h1>
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

                {/* Building Tabs */}
                <div className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
                    {(Object.keys(buildings) as Array<keyof typeof buildings>).map((building) => (
                        <button
                            key={building}
                            onClick={() => handleBuildingChange(building)}
                            className={clsx(
                                "w-full sm:w-auto px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 border-2",
                                activeBuilding === building
                                    ? "bg-amber-500 border-amber-500 text-white shadow-lg scale-105"
                                    : "bg-transparent border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-amber-400 hover:text-amber-500"
                            )}
                        >
                            {t("stranda", "building")} {building}
                        </button>
                    ))}
                </div>

                {/* Units Grid */}
                <motion.div
                    key={activeBuilding}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {buildings[activeBuilding].map((unit) => {
                        const aptData = strandaApartments[unit.id as keyof typeof strandaApartments];
                        return (
                            <div key={unit.id} className="group flex flex-col h-full space-y-3">
                                <Link href={`/apartamenty/stranda/${unit.id}`} className="block flex-grow">
                                    <div
                                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full"
                                    >
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={unit.image}
                                                alt={`Apartament ${unit.id}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            <div className="absolute bottom-3 left-4 text-white">
                                                <span className="text-xs uppercase tracking-widest opacity-80">{t("stranda", "apartment")}</span>
                                                <h3 className="text-xl font-bold font-playfair">{unit.id}</h3>
                                                {aptData?.price && (
                                                    <p className="text-sm mt-1 text-amber-300 font-semibold">od {aptData.price} zł/noc</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <a
                                    href={`https://engine37851.idobooking.com/index.php?ob[${aptData?.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#50B848] hover:bg-[#45a041] text-white text-center py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-green-500/20 active:scale-95 uppercase tracking-wide"
                                >
                                    {t("nav", "bookBtn")}
                                </a>
                            </div>
                        );
                    })}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
