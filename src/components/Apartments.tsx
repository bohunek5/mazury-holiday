"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Trees } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import { fuledaApartments } from "@/data/fuleda-data";
import { kisajnoData } from "@/data/kisajno-data";
import { skorupkiData } from "@/data/skorupki-data";
import { getAssetPath } from "@/utils/assetPath";

const lowestStrandaPrice = Math.min(...Object.values(strandaApartments).map((apartment) => apartment.price));
const lowestFuledaPrice = Math.min(...Object.values(fuledaApartments).map((apartment) => apartment.price));

export default function Apartments() {
    const { t } = useLanguage();



    const mainApartments = [
        {
            id: 1,
            title: t("apartments", "items.stranda.title"),
            description: t("apartments", "items.stranda.description"),
            image: getAssetPath("/images/stranda/C304/C304_1.webp"),
            link: "/apartamenty/stranda",
            location: t("apartments", "items.stranda.location"),
            price: `${lowestStrandaPrice} zł`
        },
        {
            id: 2,
            title: t("apartments", "items.kisajno.title"),
            description: t("apartments", "items.kisajno.description"),
            image: getAssetPath("/images/kisajno/kisajno_1.webp"),
            link: "/apartamenty/kisajno",
            location: t("apartments", "items.kisajno.location"),
            price: `${kisajnoData.price} zł`
        },
        {
            id: 3,
            title: t("apartments", "items.fuleda.title"),
            description: t("apartments", "items.fuleda.description"),
            image: getAssetPath("/images/fuleda/pietro/Fuleda pietro1.webp"),
            link: "/apartamenty/fuleda",
            location: t("apartments", "items.fuleda.location"),
            price: `${lowestFuledaPrice} zł`
        }
    ];

    const additionalOffers = [
        {
            id: 4,
            title: t("apartments", "items.domkiSkorupki.title"),
            location: t("apartments", "items.domkiSkorupki.location"),
            description: t("apartments", "items.domkiSkorupki.description"),
            image: getAssetPath("/images/skorupki/skorupki_1.webp"),
            people: skorupkiData.guests,
            link: "/domki",
            price: `${skorupkiData.price} zł`
        },
        {
            id: 5,
            title: t("apartments", "items.pokojeFuleda.title"),
            location: t("apartments", "items.pokojeFuleda.location"),
            description: t("apartments", "items.pokojeFuleda.description"),
            image: getAssetPath("/images/pokoje_fuleda/334.webp"),
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
                                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                                className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-amber-400 text-sm font-bold bg-slate-900/40 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/20">
                                            {t("apartments", "pricePrefix")} {apt.price}/{t("apartments", "night")}
                                        </div>
                                        <div className="text-white text-xs font-medium flex items-center gap-1 bg-slate-900/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                            <Users size={14} className="text-amber-500" />
                                            {apt.people} {t("apartments", "people")}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-white mb-3 decoration-amber-500 group-hover:text-amber-400">
                                        {apt.title}
                                    </h3>
                                    
                                    <div className="flex gap-2 mb-4 overflow-hidden">
                                        {apt.id === 4 ? (
                                            <>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="WiFi">
                                                    <Image src={getAssetPath("/icons/WIFI.svg")} alt="WiFi" width={20} height={20} className="invert" />
                                                </div>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="Klimatyzacja">
                                                    <Image src={getAssetPath("/icons/AIR_CONDITIONER.svg")} alt="AC" width={20} height={20} className="invert" />
                                                </div>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="Parking">
                                                    <Image src={getAssetPath("/icons/PARKING.svg")} alt="Parking" width={20} height={20} className="invert" />
                                                </div>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="TV">
                                                    <Image src={getAssetPath("/icons/TV.svg")} alt="TV" width={20} height={20} className="invert" />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="Plaża">
                                                    <Image src={getAssetPath("/icons/LOCATION.svg")} alt="Plaża" width={20} height={20} className="invert" />
                                                </div>
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/10" title="Las">
                                                    <Trees size={20} className="text-white" />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <p className="text-slate-200 text-sm line-clamp-2 opacity-90 group-hover:opacity-100 mb-6">
                                        {apt.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <span className="inline-block text-amber-500 text-sm font-bold uppercase tracking-widest group-hover:text-amber-400 transition-all group-hover:gap-3 flex items-center gap-2">
                                            {t("apartments", "details")} <span>&rarr;</span>
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
