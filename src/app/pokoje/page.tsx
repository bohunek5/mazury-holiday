"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RoomsPage() {

    const rooms = [
        {
            id: "fuleda",
            title: "Pokoje Fuleda",
            description: "Komfortowe pokoje nad jeziorem Dobskim w strefie ciszy. Idealne dla rodzin i miłośników natury.",
            image: "/mazury-holiday/images/pokoje_fuleda/pokoje/pokoje_1.webp",
            link: "/pokoje/fuleda",
            price: "od 375 zł/doba",
            features: ["2 pokoje", "Łazienka", "Kuchnia", "Taras", "Dostęp do jeziora"]
        }
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Removed overlay to fix foggy look */}
                <Image
                    src="/mazury-holiday/images/pokoje_fuleda/pokoje/pokoje_1.webp"
                    alt="Pokoje na Mazurach"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Mazury Holiday</span>
                    <h1 className="text-4xl md:text-7xl font-playfair mb-4">Pokoje na Mazurach</h1>
                    <p className="text-xl md:text-3xl font-light">Komfortowe pokoje w spokojnej okolicy</p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image */}
                                <Link href={room.link} className="relative h-64 md:h-auto w-full overflow-hidden block">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </Link>

                                {/* Content */}
                                <div className="p-8 bg-white dark:bg-slate-900 flex flex-col">
                                    <h3 className="text-2xl font-playfair font-bold text-slate-900 dark:text-white mb-2">{room.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">{room.description}</p>

                                    <div className="space-y-3 mb-8">
                                        {room.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Cena</p>
                                            <p className="text-lg font-bold text-slate-900 dark:text-white">{room.price}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Link
                                                href={room.link}
                                                className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors uppercase"
                                            >
                                                Szczegóły
                                            </Link>
                                            <a
                                                href="https://engine37851.idobooking.com/index.php?ob[28]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#50B848] hover:bg-[#45a041] text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md uppercase active:scale-95"
                                            >
                                                ZAREZERWUJ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="mt-16 text-center max-w-2xl mx-auto">
                    <p className="text-slate-600 dark:text-slate-400">
                        Szukasz większych apartamentów? Sprawdź nasze{" "}
                        <Link href="/apartamenty/fuleda" className="text-amber-500 hover:text-amber-600 font-semibold">
                            Apartamenty Fuleda
                        </Link>
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
