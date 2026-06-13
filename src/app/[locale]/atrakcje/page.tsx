"use client";

import Navbar from "@/components/Navbar";
import { getAssetPath } from "@/utils/assetPath";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Clock, Camera, Waves, Trees, Landmark, Eye, MapPin } from "lucide-react";

export default function AttractionsPage() {
    const { t } = useLanguage();

    const attractions = [
        {
            id: "boyen",
            title: t("attractionsPage", "boyen.title"),
            desc: t("attractionsPage", "boyen.desc"),
            image: getAssetPath("/images/attractions/twierdza-boyen.webp"),
            icon: <Camera className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.history"), t("attractionsPage", "tags.architecture"), t("attractionsPage", "tags.education")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Twierdza+Boyen+Giżycko"
        },
        {
            id: "bridge",
            title: t("attractionsPage", "bridge.title"),
            desc: t("attractionsPage", "bridge.desc"),
            image: getAssetPath("/images/attractions/most-obrotowy.webp"),
            icon: <Clock className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.monument"), t("attractionsPage", "tags.technology"), t("attractionsPage", "tags.gizycko")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Most+Obrotowy+Giżycko"
        },
        {
            id: "port",
            title: t("attractionsPage", "port.title"),
            desc: t("attractionsPage", "port.desc"),
            image: getAssetPath("/images/attractions/eko-marina.webp"),
            icon: <Waves className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.sailing"), t("attractionsPage", "tags.recreation"), t("attractionsPage", "tags.center")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Ekomarina+Giżycko"
        },
        {
            id: "water",
            title: t("attractionsPage", "water.title"),
            desc: t("attractionsPage", "water.desc"),
            image: getAssetPath("/images/attractions/kisajno-dobskie.webp"),
            icon: <Waves className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.nature"), t("attractionsPage", "tags.silence"), t("attractionsPage", "tags.landscape")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Jezioro+Kisajno"
        },
        {
            id: "wolfsLair",
            title: t("attractionsPage", "wolfsLair.title"),
            desc: t("attractionsPage", "wolfsLair.desc"),
            image: getAssetPath("/images/attractions/wilczy-szaniec.webp"),
            icon: <MapPin className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.history"), t("attractionsPage", "tags.ww2"), t("attractionsPage", "tags.museum")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Wilczy+Szaniec+Gierłoż"
        },
        {
            id: "waterTower",
            title: t("attractionsPage", "waterTower.title"),
            desc: t("attractionsPage", "waterTower.desc"),
            image: getAssetPath("/images/attractions/wieza-cisnien.webp"),
            icon: <Eye className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.view"), t("attractionsPage", "tags.cafe"), t("attractionsPage", "tags.monument")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Wieża+Ciśnień+Giżycko"
        },
        {
            id: "castle",
            title: t("attractionsPage", "castle.title"),
            desc: t("attractionsPage", "castle.desc"),
            image: getAssetPath("/images/attractions/krzyzacki-zamek.webp"),
            icon: <Landmark className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.history"), t("attractionsPage", "tags.architecture"), t("attractionsPage", "tags.hotel")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+St.+Bruno+Giżycko"
        },
        {
            id: "bison",
            title: t("attractionsPage", "bison.title"),
            desc: t("attractionsPage", "bison.desc"),
            image: getAssetPath("/images/attractions/zagroda-zubrow.webp"),
            icon: <Trees className="w-6 h-6" />,
            tags: [t("attractionsPage", "tags.nature"), t("attractionsPage", "tags.animals"), t("attractionsPage", "tags.education")],
            mapLink: "https://www.google.com/maps/search/?api=1&query=Zagroda+Żubrów+Wolisko"
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <Image
                    src={getAssetPath("/images/attractions/gizycko-hero.webp")}
                    alt="Atrakcje Mazury"
                    fill
                    className="object-cover"
                    priority
                    quality={60}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-7xl font-sans mb-4">{t("attractionsPage", "title")}</h1>
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
                                <h3 className="text-2xl font-sans font-bold mb-4 text-slate-900 dark:text-white">
                                    {attr.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {attr.desc}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href={attr.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors group/link"
                                    >
                                        <MapPin className="w-5 h-5 transition-transform group-hover/link:-translate-y-1" />
                                        <span>{t("attractionsPage", "showOnMap")}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
