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
    const buildings = useMemo(() => getBuildingsData(), []);
    const buildingKeys: Array<"A" | "B" | "C"> = ["A", "B", "C"];



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
                    return (
                        <div key={buildingKey} className="mb-24 last:mb-0">
                            {/* Section Header with Large Button */}
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12">
                                {/* Building Label */}
                                <div className="w-full sm:w-auto px-12 py-5 bg-amber-500 text-white rounded-full font-bold text-xl md:text-2xl shadow-xl shadow-amber-500/20 text-center tracking-widest uppercase">
                                    {t("stranda", "building")} {buildingKey}
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
            
            <Footer />
        </main>
    );
}
