"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ApartmentsHub() {
    const { t } = useLanguage();

    const apartments = [
        {
            id: "stranda",
            title: t("apartments", "items.stranda.title"),
            description: t("apartments", "items.stranda.description"),
            image: "/mazury-holiday/images/stranda/C304/C304_1.webp",
            link: "/apartamenty/stranda",
            location: t("apartments", "items.stranda.location"),
            price: "450 zł"
        },
        {
            id: "kisajno",
            title: t("apartments", "items.kisajno.title"),
            description: t("apartments", "items.kisajno.description"),
            image: "/mazury-holiday/images/kisajno/kisajno_1.webp",
            link: "/apartamenty/kisajno",
            location: t("apartments", "items.kisajno.location"),
            price: "400 zł"
        },
        {
            id: "fuleda",
            title: t("apartments", "items.fuleda.title"),
            description: t("apartments", "items.fuleda.description"),
            image: "/mazury-holiday/images/fuleda/pietro/pietro_20.webp",
            link: "/apartamenty/fuleda",
            location: t("apartments", "items.fuleda.location"),
            price: "1200 zł"
        },
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/apartments_2.webp')]"
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
                    <h1 className="text-4xl md:text-7xl font-serif mb-4">{t("apartments", "title")}</h1>
                    <p className="text-xl md:text-3xl font-light">{t("apartments", "description")}</p>
                </div>
            </section>

            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apartments.map((apt, index) => (
                        <motion.div
                            key={apt.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Link
                                href={apt.link}
                                className="group relative block h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={apt.image}
                                    alt={apt.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {apt.location}
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:translate-y-[-10px] transition-transform duration-300">
                                    <div className="text-amber-400 text-sm font-bold mb-2">
                                        {t("apartments", "pricePrefix")} {apt.price} / {t("apartments", "night")}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                                        {apt.title}
                                    </h3>
                                    <p className="text-slate-200 text-sm line-clamp-2 opacity-90 group-hover:opacity-100 mb-4">
                                        {apt.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <span className="inline-block text-amber-500 text-sm font-bold uppercase tracking-widest group-hover:text-amber-400 transition-colors">
                                            {t("apartments", "details")} &rarr;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
