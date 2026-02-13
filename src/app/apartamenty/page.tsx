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
            title: "Stranda Residence",
            description: t("stranda", "description"),
            image: "/mazury-holiday/images/stranda/C304/C304_1.webp",
            link: "/apartamenty/stranda",
        },
        {
            id: "kisajno",
            title: t("apartments", "items.kisajno.title"),
            description: t("apartments", "items.kisajno.description"),
            image: "/mazury-holiday/images/kisajno/kisajno_1.webp",
            link: "/apartamenty/kisajno",
        },
        {
            id: "fuleda",
            title: t("apartments", "items.fuleda.title"),
            description: t("apartments", "items.fuleda.description"),
            image: "/mazury-holiday/images/fuleda/pietro/pietro_20.webp",
            link: "/apartamenty/fuleda",
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
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">{t("apartments", "title")}</h1>
                    <p className="text-xl md:text-3xl font-light">{t("apartments", "description")}</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apartments.map((apt, index) => (
                        <motion.div
                            key={apt.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Link href={apt.link} className="block h-full">
                                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                    <Image
                                        src={apt.image}
                                        alt={apt.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white transform group-hover:translate-y-[-10px] transition-transform duration-300">
                                        <h3 className="text-2xl font-playfair mb-2">{apt.title}</h3>
                                        <p className="text-sm text-slate-200 line-clamp-2">
                                            {apt.description} {/* Translations needed ideally */}
                                        </p>
                                        <span className="inline-block mt-4 text-amber-400 text-sm font-semibold tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            ZOBACZ SZCZEGÓŁY &rarr;
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
