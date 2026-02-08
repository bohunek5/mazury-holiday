"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Clock, Camera, Waves } from "lucide-react";

export default function AttractionsPage() {
    const { t } = useLanguage();

    const attractions = [
        {
            id: "boyen",
            title: t("attractionsPage", "boyen.title"),
            desc: t("attractionsPage", "boyen.desc"),
            image: "/mazury-holiday/images/attractions/boyen.png",
            icon: <Camera className="w-6 h-6" />,
            tags: ["Historia", "Architektura", "Edukacja"]
        },
        {
            id: "bridge",
            title: t("attractionsPage", "bridge.title"),
            desc: t("attractionsPage", "bridge.desc"),
            image: "/mazury-holiday/images/attractions/bridge.png",
            icon: <Clock className="w-6 h-6" />,
            tags: ["Zabytek", "Technika", "Giżycko"]
        },
        {
            id: "port",
            title: t("attractionsPage", "port.title"),
            desc: t("attractionsPage", "port.desc"),
            image: "/mazury-holiday/images/attractions/port.png",
            icon: <Waves className="w-6 h-6" />,
            tags: ["Żeglarstwo", "Rekreacja", "Centrum"]
        },
        {
            id: "water",
            title: t("attractionsPage", "water.title"),
            desc: t("attractionsPage", "water.desc"),
            image: "/mazury-holiday/images/hero_bg.webp",
            icon: <Waves className="w-6 h-6" />,
            tags: ["Natura", "Cisza", "Krajobraz"]
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <Image
                    src="/mazury-holiday/images/DJI_0059_1_optimized.jpg"
                    alt="Atrakcje Mazury"
                    fill
                    className="object-cover"
                    priority
                    quality={60}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">{t("attractionsPage", "title")}</h1>
                    <p className="text-xl md:text-3xl font-light">{t("attractionsPage", "subtitle")}</p>
                </div>
            </section>

            {/* Attractions List */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {attractions.map((attr, index) => (
                        <motion.div
                            key={attr.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={attr.image}
                                    alt={attr.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                                <div className="absolute top-6 left-6 p-3 bg-amber-500 rounded-2xl text-white shadow-lg">
                                    {attr.icon}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {attr.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                                    {attr.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {attr.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
