"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Handshake, TrendingUp, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

export default function CooperationPage() {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
            title: t("cooperationPage", "marketing.title"),
            desc: t("cooperationPage", "marketing.desc")
        },
        {
            icon: <Handshake className="w-8 h-8 text-amber-500" />,
            title: t("cooperationPage", "guests.title"),
            desc: t("cooperationPage", "guests.desc")
        },
        {
            icon: <Sparkles className="w-8 h-8 text-amber-500" />,
            title: t("cooperationPage", "maintenance.title"),
            desc: t("cooperationPage", "maintenance.desc")
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
            title: "Pełne Bezpieczeństwo",
            desc: "Dbamy o Twój obiekt jak o własny, zapewniając stały nadzór i ubezpieczenie."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-10 blur-3xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
                            {t("cooperationPage", "title")}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
                            {t("cooperationPage", "subtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
                            {t("cooperationPage", "services.title")}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t("cooperationPage", "services.desc")}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-md w-fit">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{benefit.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
                    >
                        <Image
                            src="/mazury-holiday/images/stranda/A103_images/A103 salonn.webp"
                            alt="Luxury management"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/20" />
                    </motion.div>
                </div>

                {/* New Why Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center">
                        {t("cooperationPage", "whyUs.title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                                    {num}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 font-medium">
                                    {t("cooperationPage", `whyUs.point${num}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-amber-500 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Gotowy na współpracę?</h2>
                    <p className="text-xl mb-12 opacity-90">
                        Skontaktuj się z nami, aby porozmawiać o potencjale Twojej nieruchomości na Mazurach.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-500 hover:bg-slate-900 hover:text-white rounded-full font-bold text-lg transition-all shadow-xl"
                    >
                        <MessageCircle /> Porozmawiajmy
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
