"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Apartments() {
    const { t } = useLanguage();

    const mainApartments = [
        {
            id: 1,
            title: t("apartments", "items.stranda.title"),
            description: t("apartments", "items.stranda.description"),
            image: "/mazury-holiday/images/stranda/A103_images/A103 salonn.webp",
            link: "/apartamenty/stranda",
            location: t("apartments", "items.stranda.location")
        },
        {
            id: 2,
            title: t("apartments", "items.kisajno.title"),
            description: t("apartments", "items.kisajno.description"),
            image: "/mazury-holiday/images/kisajno/kisajno_1.webp",
            link: "/apartamenty/kisajno",
            location: t("apartments", "items.kisajno.location")
        },
        {
            id: 3,
            title: t("apartments", "items.fuleda.title"),
            description: t("apartments", "items.fuleda.description"),
            image: "/mazury-holiday/images/fuleda/parter/parter_1.webp",
            link: "/apartamenty/fuleda",
            location: t("apartments", "items.fuleda.location")
        }
    ];

    const additionalOffers = [
        {
            id: 4,
            title: t("apartments", "items.domkiSkorupki.title"),
            location: t("apartments", "items.domkiSkorupki.location"),
            description: t("apartments", "items.domkiSkorupki.description"),
            image: "/mazury-holiday/images/skorupki/skorupki_1.webp",
            people: "6-8",
            link: "/domki",
            price: "600 zł"
        },
        {
            id: 5,
            title: t("apartments", "items.pokojeFuleda.title"),
            location: t("apartments", "items.pokojeFuleda.location"),
            description: t("apartments", "items.pokojeFuleda.description"),
            image: "/mazury-holiday/images/pokoje_fuleda/pokoje/pokoje_1.webp",
            people: "4",
            link: "/pokoje/fuleda",
            price: "375 zł"
        }
    ];

    return (
        <>
            {/* Section 1: Nasze Apartamenty (Overlay Style) */}
            <section id="apartamenty" className="pt-24 pb-12 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4">
                            {t("apartments", "title")}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t("apartments", "description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mainApartments.map((apt) => (
                            <Link
                                key={apt.id}
                                href={apt.link}
                                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={apt.image}
                                    alt={apt.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:translate-y-[-10px] transition-transform duration-300">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2 decoration-amber-500 group-hover:text-amber-400">
                                        {apt.title}
                                    </h3>
                                    <p className="text-slate-200 text-sm line-clamp-2 opacity-90 group-hover:opacity-100 mb-4">
                                        {apt.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <span className="inline-block text-amber-500 text-sm font-bold uppercase tracking-widest group-hover:text-amber-400 transition-colors">
                                            {t("apartments", "details")} &rarr;
                                        </span>
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const idoMap: Record<string, string> = {
                                                    'stranda': '1', // Default or specific
                                                    'kisajno': '45',
                                                    'fuleda': '26'
                                                };
                                                const id = apt.link.split('/').pop() || 'stranda';
                                                window.open(`https://engine37851.idobooking.com/index.php?ob[${idoMap[id] || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`, '_blank');
                                            }}
                                            className="bg-[#50B848] hover:bg-[#45a041] text-white text-[10px] font-bold py-2 px-3 rounded-lg uppercase tracking-wider transition-all transform active:scale-95 shadow-lg"
                                        >
                                            ZAREZERWUJ GO
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Nasze domki i pokoje (Detailed Card Style) */}
            <section id="domki-pokoje" className="pt-12 pb-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4">
                            {t("cottagesAndRooms", "title")}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t("cottagesAndRooms", "description")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {additionalOffers.map((apt) => (
                            <Link
                                key={apt.id}
                                href={apt.link}
                                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={apt.image}
                                        alt={apt.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-900 dark:text-white shadow-sm">
                                        {t("apartments", "pricePrefix")} {apt.price}/{t("apartments", "night")}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-3">
                                        <MapPin size={16} />
                                        {apt.location}
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">
                                        {apt.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-2">
                                        {apt.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                        <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                            <Users size={16} />
                                            {apt.people} {t("apartments", "people")}
                                        </span>

                                        <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                                            {t("apartments", "details")}
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
