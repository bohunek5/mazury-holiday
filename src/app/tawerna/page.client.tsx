"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
    Beer,
    Clock3,
    Coffee,
    ExternalLink,
    MapPin,
    Music,
    Phone,
    Pizza,
    Utensils,
    Waves,
} from "lucide-react";
import Link from "next/link";

const STRANDA_PAGE = "https://stranda.pl/tawerna";
const STRANDA_PHONE = "+48501122625";

const photos = [
    {
        src: "https://stranda.pl/img/galerie/101880_7.webp",
        alt: "Taras Tawerny Stranda przy marinie",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "https://stranda.pl/img/galerie/101872_7.webp",
        alt: "Wnętrze Tawerny Stranda",
        className: "",
    },
    {
        src: "https://stranda.pl/img/galerie/101875_7.webp",
        alt: "Tawerna Stranda wieczorem",
        className: "",
    },
];

export default function TawernaPage() {
    const { t } = useLanguage();

    const menuItems = [
        { icon: Coffee, title: t("tavernPage", "breakfastTitle"), description: t("tavernPage", "breakfastDescription") },
        { icon: Utensils, title: t("tavernPage", "seasonalTitle"), description: t("tavernPage", "seasonalDescription") },
        { icon: Pizza, title: t("tavernPage", "pizzaTitle"), description: t("tavernPage", "pizzaDescription") },
        { icon: Beer, title: t("tavernPage", "beerTitle"), description: t("tavernPage", "beerDescription") },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
            <Navbar />

            <section className="relative flex h-[68vh] min-h-[520px] items-center justify-center overflow-hidden sm:min-h-[560px]">
                <img
                    src="https://stranda.pl/img/galerie/101888_7.webp"
                    alt="Tawerna Stranda i marina nad jeziorem Kisajno o zachodzie słońca"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/45 to-slate-950/85" />
                <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-md sm:px-5 sm:text-sm sm:tracking-[0.18em]">
                            <Waves className="h-4 w-4 text-amber-400" />
                            {t("tavernPage", "eyebrow")}
                        </div>
                        <h1 className="font-sans text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl">
                            {t("tavernPage", "title")}
                        </h1>
                        <p className="mx-auto mt-5 max-w-3xl text-base font-light text-white/90 sm:mt-6 sm:text-xl md:text-2xl">
                            {t("tavernPage", "subtitle")}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">
                            {t("tavernPage", "aboutEyebrow")}
                        </span>
                        <h2 className="mt-4 font-sans text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
                            {t("tavernPage", "aboutTitle")}
                        </h2>
                        <div className="mt-7 space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            <p>{t("tavernPage", "aboutFirst")}</p>
                            <p>{t("tavernPage", "aboutSecond")}</p>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                                <span className="text-sm leading-relaxed">{t("tavernPage", "address")}</span>
                            </div>
                            <div className="flex items-start gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
                                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                                <span className="text-sm leading-relaxed">{t("tavernPage", "season")}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative min-h-[430px] overflow-hidden rounded-[2rem] shadow-2xl md:min-h-[560px]"
                    >
                        <img
                            src="https://stranda.pl/img/podstrony/909_tawerna_6.webp"
                            alt="Wejście i taras Tawerny Stranda"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white">
                            <p className="font-sans text-2xl font-bold">{t("tavernPage", "terraceTitle")}</p>
                            <p className="mt-2 text-white/80">{t("tavernPage", "terraceDescription")}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative bg-slate-950 px-4 py-20 text-white md:px-8 md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.13),transparent_42%)]" />
                <div className="relative mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                            {t("tavernPage", "menuEyebrow")}
                        </span>
                        <h2 className="mt-4 font-sans text-4xl font-bold md:text-6xl">{t("tavernPage", "menuTitle")}</h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-300">{t("tavernPage", "menuIntro")}</p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-6 font-sans text-2xl font-bold">{item.title}</h3>
                                    <p className="mt-3 leading-relaxed text-slate-300">{item.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-amber-400/25 bg-amber-400/10 p-6 text-center md:flex-row md:text-left">
                        <p className="max-w-2xl text-sm leading-relaxed text-amber-50">{t("tavernPage", "menuNote")}</p>
                        <a
                            href={STRANDA_PAGE}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-400"
                        >
                            {t("tavernPage", "officialButton")}
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500">Stranda</span>
                        <h2 className="mt-3 font-sans text-4xl font-bold md:text-6xl">{t("tavernPage", "galleryTitle")}</h2>
                    </div>
                    <a href={STRANDA_PAGE} target="_blank" rel="noreferrer" className="text-sm text-slate-500 underline-offset-4 hover:text-amber-500 hover:underline dark:text-slate-400">
                        {t("tavernPage", "sourceNote")}
                    </a>
                </div>

                <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 md:auto-rows-[300px]">
                    {photos.map((photo) => (
                        <figure key={photo.src} className={`group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 ${photo.className}`}>
                            <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        </figure>
                    ))}
                </div>
            </section>

            <section className="px-4 pb-24 md:px-8">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-amber-500 px-6 py-12 text-slate-950 md:px-12 md:py-16">
                    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-3xl">
                            <h2 className="font-sans text-4xl font-bold md:text-5xl">{t("tavernPage", "contactTitle")}</h2>
                            <p className="mt-4 text-lg text-slate-900/75">{t("tavernPage", "contactDescription")}</p>
                        </div>
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <a href={`tel:${STRANDA_PHONE}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800">
                                <Phone className="h-5 w-5" />
                                {t("tavernPage", "callButton")}
                            </a>
                            <Link href="/koncerty" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/25 px-7 py-4 font-bold transition hover:bg-white/30">
                                <Music className="h-5 w-5" />
                                {t("tavernPage", "concertsButton")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
