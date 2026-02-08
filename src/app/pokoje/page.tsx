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
            image: "/mazury-holiday/images/pokoje_fuleda/104029_8.jpg",
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
                <div className="absolute inset-0 bg-slate-900/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-[url('/mazury-holiday/images/pokoje_fuleda/104029_8.jpg')]"
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
                            <Link href={room.link} className="block h-full">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image */}
                                    <div className="relative h-64 md:h-auto w-full overflow-hidden">
                                        <Image
                                            src={room.image}
                                            alt={room.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white dark:bg-slate-900 p-8 flex flex-col justify-center">
                                        <div className="inline-block self-start px-4 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-sm mb-4">
                                            {room.price}
                                        </div>

                                        <h3 className="text-3xl font-playfair mb-4 text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                            {room.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                                            {room.description}
                                        </p>

                                        <ul className="space-y-2 mb-6">
                                            {room.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                    <span className="text-amber-500">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="text-amber-500 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                            Zobacz szczegóły →
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
