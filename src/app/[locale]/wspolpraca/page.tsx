"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Handshake, TrendingUp, ShieldCheck, Sparkles, MessageCircle, BarChart3, Key, Camera, CheckCircle2 } from "lucide-react";
import { getAssetPath } from "@/utils/assetPath";

export default function CooperationPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/60 z-10" />
                <Image
                    src={getAssetPath("/images/hero-mazury-holiday-final.webp")}
                    alt="Zarządzanie Apartamentami Mazury Holiday"
                    fill
                    className="object-cover scale-105"
                    priority
                    quality={80}
                />
                <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-amber-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                            B2B & Zarządzanie Nieruchomościami
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold mb-6 drop-shadow-xl leading-tight">
                            Twój apartament w rękach profesjonalistów
                        </h1>
                        <p className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            Zarabiaj więcej, martw się mniej. Kompleksowa obsługa najmu krótkoterminowego na Mazurach. Maksymalizujemy Twoje zyski, dbając o każdy detal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-6 md:p-8 border border-slate-100 dark:border-slate-800">
                    <div className="text-center p-4 border-r border-slate-100 dark:border-slate-800">
                        <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">90%+</p>
                        <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">Obłożenia w sezonie</p>
                    </div>
                    <div className="text-center p-4 border-r-0 md:border-r border-slate-100 dark:border-slate-800">
                        <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">24/7</p>
                        <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">Wsparcie dla gości</p>
                    </div>
                    <div className="text-center p-4 border-r border-slate-100 dark:border-slate-800">
                        <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">100%</p>
                        <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">Transparentności</p>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">Premium</p>
                        <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">Standard obsługi</p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 dark:text-white mb-4">
                        Kompleksowy zakres obsługi
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Od stworzenia profesjonalnej oferty, przez zarządzanie rezerwacjami, aż po sprzątanie i dbanie o stan techniczny nieruchomości.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingUp className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Optymalizacja Zysków</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Dynamiczne zarządzanie cenami, profesjonalne audyty rentowności i optymalizacja kanałów sprzedaży (Booking, Airbnb, własna strona).
                        </p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Camera className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Marketing Premium</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Sesje zdjęciowe, wirtualne spacery 3D, copywriting oraz kampanie reklamowe, które wyróżnią Twój obiekt na tle konkurencji.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Key className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Pełna Obsługa Gości</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Zameldowanie, wymeldowanie, komunikacja 24/7, rekomendacje lokalnych atrakcji oraz zarządzanie relacjami i opiniami.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Sparkles className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Sprzątanie i Pralnia</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Standardy hotelowe. Profesjonalne ekipy sprzątające, wysokiej jakości pościel hotelowa, pranie i maglowanie.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Utrzymanie Techniczne</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Bieżące naprawy, przeglądy instalacji, pielęgnacja zieleni. Twój apartament zawsze pozostaje w idealnym stanie.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <BarChart3 className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Panel Inwestora</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Miesięczne raporty, dostęp do bieżącego kalendarza rezerwacji, przejrzyste fakturowanie i pełna kontrola nad własnymi pobytami.
                        </p>
                    </div>
                </div>
            </section>

            {/* Split Content */}
            <section className="py-20 px-4 md:px-8 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-amber-500 font-bold tracking-widest uppercase text-sm">Dlaczego Mazury Holiday?</p>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold">
                            Zaufaj lokalnym ekspertom.
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Znamy rynek mazurski jak nikt inny. Nasza baza powracających klientów, partnerstwa B2B oraz zaawansowane narzędzia technologiczne sprawiają, że obiekty pod naszym zarządzaniem pracują wydajniej.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                "Brak ukrytych kosztów – jasny model prowizyjny",
                                "Osobisty opiekun Twojego apartamentu",
                                "Zabezpieczenia kaucjami i ubezpieczeniami",
                                "Skuteczny marketing na rynkach zagranicznych"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0" />
                                    <span className="text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-white/10"
                    >
                        <Image
                            src={getAssetPath("/images/wspolpraca-radlight.webp")}
                            alt="Luxury management"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-slate-950 relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 text-slate-900 dark:text-white">
                        Gotowy na pasywny dochód?
                    </h2>
                    <p className="text-lg md:text-xl mb-10 text-slate-600 dark:text-slate-400">
                        Zostaw nam kontakt, a przygotujemy darmowy audyt i prognozę zysków dla Twojej nieruchomości.
                    </p>
                    <Link
                        href="/kontakt#formularz"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 text-slate-950 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl"
                    >
                        <MessageCircle size={22} /> Porozmawiajmy o współpracy
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
