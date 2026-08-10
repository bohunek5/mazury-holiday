"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { getAssetPath } from "@/utils/assetPath";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Music, MapPin, Calendar, X, ZoomIn } from "lucide-react";

export default function KoncertyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Block body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
                <div className="absolute inset-0 bg-slate-900/60 z-10" />
                <Image
                    src={getAssetPath("/images/stranda.webp")}
                    alt="Port Stranda"
                    fill
                    className="object-cover object-[center_70%] scale-105"
                    priority
                    quality={80}
                />
                <div className="relative z-20 text-center text-white p-4 max-w-4xl mx-auto mt-8 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-full mb-6 shadow-xl">
                            <Music className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-7xl font-sans font-bold mb-6">Koncerty w Porcie Stranda</h1>
                        <p className="text-xl md:text-2xl font-light text-slate-200">
                            Muzyczne serce Mazur nad jeziorem Kisajno
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Opis */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                Letnie wieczory pełne dźwięków
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                W sezonie letnim Tawerna w Porcie Stranda zamienia się w tętniące życiem muzyczne serce Mazur. 
                                Regularnie gościmy artystów wykonujących szanty, muzykę żeglarską, rock oraz folk. 
                                To idealne miejsce, aby po dniu pełnym wrażeń na wodzie zrelaksować się przy dobrym jedzeniu, 
                                chłodnym napoju i doskonałej muzyce na żywo.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Zapoznaj się z naszym oficjalnym plakatem koncertowym i dołącz do nas. 
                                Gwarantujemy niesamowity klimat i niezapomniane mazurskie wieczory!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 dark:bg-slate-900 rounded-xl text-blue-600 dark:text-amber-500 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Lokalizacja</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Tawerna Port Stranda<br/>Giżycko, Kisajno</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 dark:bg-slate-900 rounded-xl text-blue-600 dark:text-amber-500 shrink-0">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Kiedy?</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Sezon letni<br/>Wstęp wolny!</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Plakat */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex justify-center items-center group cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className="relative w-full flex justify-center items-center">
                            <img
                                src={getAssetPath("/images/koncerty.webp")}
                                alt="Plakat Koncertowy"
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-2 bg-white/95 text-slate-900 px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
                                    <ZoomIn className="w-6 h-6" />
                                    Powiększ plakat
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* Fullscreen Image Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-2 md:p-6"
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* Close Button */}
                        <button 
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsModalOpen(false);
                            }}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Modal Image */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative flex items-center justify-center w-full h-full"
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <img
                                src={getAssetPath("/images/koncerty.webp")}
                                alt="Plakat Koncertowy (Pełny Rozmiar)"
                                className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
