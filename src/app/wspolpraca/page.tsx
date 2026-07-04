// @ts-nocheck
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Handshake, TrendingUp, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

import { getAssetPath } from "@/utils/assetPath";

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
            title: t("coopExtra", "securityTitle"),
            desc: t("coopExtra", "securityDesc")
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <Image
                    src={getAssetPath("/images/hero-mazury-holiday-final.webp")}
                    alt="Współpraca Mazury Holiday"
                    fill
                    className="object-cover"
                    priority
                    quality={60}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-4xl md:text-7xl font-sans font-bold mb-4 drop-shadow-lg">{t("coopExtra", "heroTitle")}</h1>
                    <p className="text-sm md:text-base lg:text-lg font-sans font-light tracking-[0.2em] mb-12 text-white/95 max-w-4xl mx-auto uppercase drop-shadow-md leading-relaxed">{t("coopExtra", "heroSubtitle")}</p>
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
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white">
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
                            src={getAssetPath("/images/wspolpraca-radlight.webp")}
                            alt="Luxury management"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/20" />
                    </motion.div>
                </div>

                {/* New Cooperation Models Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <h3 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white mb-12 text-center">
                        {t("coopModels", "title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Model 1 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:border-amber-500/30 group">
                            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-amber-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {t("coopModels", "full_title")}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("coopModels", "full_desc")}
                            </p>
                        </div>
                        
                        {/* Model 2 */}
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:border-amber-500/30 group">
                            <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-8 h-8 text-amber-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                {t("coopModels", "marketing_title")}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {t("coopModels", "marketing_desc")}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* New Cooperation Steps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-12 text-center">
                        {t("coopSteps", "title")}
                    </h3>
                    
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden lg:block" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform ring-8 ring-white dark:ring-slate-900">
                                        {step}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                        {t("coopSteps", `step${step}_title`)}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {t("coopSteps", `step${step}_desc`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Why Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-white dark:bg-slate-900 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-8 text-center">
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
                    <h2 className="text-3xl md:text-5xl font-sans font-bold mb-8">{t("coopExtra", "readyTitle")}</h2>
                    <p className="text-xl mb-12 opacity-90">
                        {t("coopExtra", "readyDesc")}
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-500 hover:bg-slate-900 hover:text-white rounded-full font-bold text-lg transition-all shadow-xl"
                    >
                        <MessageCircle /> {t("coopExtra", "letsTalk")}
                    </Link>
                </div>
            </section>


            <Footer />
        </main>
    );
}
