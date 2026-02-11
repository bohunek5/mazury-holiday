"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Anchor, LifeBuoy } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import ICalCalendar from "@/components/ICalCalendar";

export default function CharterPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);

    const galleryImages = [
        "/mazury-holiday/images/czarter/gallery/stillo_1.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_2.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_3.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_4.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_5.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_6.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_7.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_8.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_9.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_10.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_11.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_12.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_13.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_14.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_15.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_16.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_17.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_18.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_19.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_20.webp",
        "/mazury-holiday/images/czarter/gallery/stillo_21.webp"
    ];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };



    const specs = [
        { label: "Długość", value: "9.10 m" },
        { label: "Szerokość", value: "3.25 m" },
        { label: "Zanurzenie", value: "0.50 m" },
        { label: "Silnik", value: "Craftsman 52KM Diesel" },
        { label: "Kabiny", value: "3 zamykane" },
        { label: "Załoga", value: "max 8 osób" }
    ];

    const equipment = [
        "Ster strumieniowy na dziobie i rufie",
        "Stolik kokpitowy",
        "TV SMART (Netflix, HBO, YouTube)",
        "WiFi (bez limitów), Radio/Bluetooth",
        "Gniazda 12V (4 szt.) i 230V (4 szt.)",
        "Ogrzewanie Webasto",
        "Ciepła woda (Bojler 30L)",
        "WC Morskie z prysznicem",
        "Kostkarka do lodu, Toster, Czajnik",
        "Ekspres Nespresso (+kapsułki)",
        "Pełne wyposażenie kuchenne",
        "Elektryczna winda kotwiczna",
        "Echosonda, Nawigacja - Ploter"
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 z-10" />
                <Image
                    src="/mazury-holiday/images/czarter/gallery/stillo_1.webp"
                    alt="Stillo 30 VIP"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="relative z-20 text-center text-white p-4">
                    <h1 className="text-5xl md:text-7xl font-playfair mb-4">Stillo 30 VIP</h1>
                    <p className="text-xl md:text-3xl font-light text-amber-400">Jacht motorowy Stillo 30 VIP</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* Left Column: Description & Gallery (Span 2) */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-playfair mb-8 text-slate-900 dark:text-white">Twój luksusowy dom na wodzie</h2>

                        <div className="prose prose-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
                            <p className="mb-6">
                                <strong>Stillo 30 VIP</strong> to następca sprawdzonej i cenionej Futury 870. Jest jednostką mającą na celu zaspokojenie oczekiwań najbardziej wymagających armatorów w sektorze jachtów wypornościowych i pół ślizgowych typu Houseboat. Walory nautyczne, sprawdzone w wielokrotnie nagradzanym poprzedniku, połączone z rewolucyjną praktycznością.
                            </p>
                            <p className="mb-6">
                                Na pokładzie znajdziesz do <strong>6 miejsc do spania</strong>, pełnowymiarową łazienkę oraz salon z panoramicznymi oknami i wysokim (ok. 190 cm) stropem, co daje poczucie prawdziwego apartamentu na wodzie. Szerokie półpokłady prowadzą na dziobowy taras do opalania, a niska platforma kąpielowa u rufy ułatwia zejście do wody oraz cumowanie przy pomoście.
                            </p>
                            <p className="mb-6">
                                Podstawowe atuty to mocny silnik stacjonarny 52KM, <strong>dwa stery strumieniowe</strong>, elektryczna winda kotwiczna, materace z pianką termoplastyczną, WiFi bez ograniczeń, TV z Netflix, HBO Max, ekspres do kawy Nespresso i wiele innych…
                            </p>
                            <p>
                                Co ważne dla czarteru: jednostka utrzymuje prędkość poniżej 15 km/h, więc w Polsce można nią sterować <strong>bez patentu</strong> – po krótkim przeszkoleniu odbierasz jacht i ruszasz w trasę. Stillo 30 oferuje więc luksus, wygodę i pełnię mazurskiej przygody, a jednocześnie jest idealnym wyborem dla rodzin i grup przyjaciół szukających pierwszego doświadczenia z własnym „domem na wodzie”.
                            </p>
                        </div>

                        {/* Amenities Grid (Clean Cards) */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-playfair mb-8 text-slate-900 dark:text-white">Udogodnienia VIP</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                                    <div className="relative w-14 h-14 mx-auto mb-6">
                                        <Image src="/mazury-holiday/icons/LOCATION.svg" alt="Technika" fill className="object-contain dark:invert opacity-80" />
                                    </div>
                                    <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Nawigacja i Napęd</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Stery strumieniowe (Dziób/Rufa), Tablet z mapami jezior, Silnik 52KM
                                    </p>
                                </div>

                                <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                                    <div className="relative w-14 h-14 mx-auto mb-6">
                                        <Image src="/mazury-holiday/icons/AIR_CONDITIONER.svg" alt="Komfort" fill className="object-contain dark:invert opacity-80" />
                                    </div>
                                    <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Standard VIP</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Klimatyzacja & Ogrzewanie, WiFi bez limitu, Netflix & HBO Max, Ekspres Nespresso
                                    </p>
                                </div>

                                <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                                    <div className="relative w-14 h-14 mx-auto mb-6">
                                        <Image src="/mazury-holiday/icons/FIRE_EXTINGUISHER.svg" alt="Bezpieczeństwo" fill className="object-contain dark:invert opacity-80" />
                                    </div>
                                    <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Bezpieczeństwo</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Pełne wyposażenie ratunkowe, Instalacja 230V Non-Stop, Elektryczna winda kotwiczna
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {galleryImages.length > 0 && (
                            <div>
                                <h3 className="2xl font-playfair mb-8 text-slate-900 dark:text-white">Galeria Zdjęć</h3>

                                {/* First 3 images - always visible */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {galleryImages.slice(0, 3).map((src, idx) => (
                                        <div
                                            key={idx}
                                            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                            onClick={() => openLightbox(idx)}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Jacht Stillo 30 - zdjęcie ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                priority={idx === 0}
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                        </div>
                                    ))}
                                </div>

                                {/* Remaining images - collapsible */}
                                {galleryImages.length > 3 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                                            className="w-full mb-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {galleryImages.slice(3).map((src, idx) => (
                                                    <div
                                                        key={idx + 3}
                                                        className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                                        onClick={() => openLightbox(idx + 3)}
                                                    >
                                                        <Image
                                                            src={src}
                                                            alt={`Jacht Stillo 30 - zdjęcie ${idx + 4}`}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Sticky Specifications Block (Span 1) */}
                    <div className="lg:col-span-1 h-full relative">
                        <div className="sticky top-32 space-y-8">
                            {/* Main CTA Card */}
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden transform transition-all hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-bl-full -mr-10 -mt-10" />
                                <h3 className="text-2xl font-playfair mb-6 relative z-10">Zarezerwuj Termin</h3>
                                <p className="text-slate-300 mb-8 relative z-10 text-sm">
                                    Sprawdź dostępność w naszym kalendarzu online i zarezerwuj swoje wakacje marzeń już dziś.
                                </p>
                                <a
                                    href="https://engine37851.idobooking.com/index.php?ob[31]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 rounded-xl transition-all mb-8 whitespace-nowrap uppercase tracking-wider shadow-lg hover:shadow-green-500/25 active:scale-95"
                                >
                                    ZAREZERWUJ GO
                                </a>
                                <div className="mt-6">
                                    <ICalCalendar
                                        icalUrl="https://client37851.idosell.com/panel/offer/icalexport/itemid/31/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"
                                        apartmentId="Stillo 30 VIP"
                                    />
                                </div>
                            </div>

                            {/* Technical Specs & Equipment */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
                                <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                                    <Anchor className="text-amber-500" size={20} />
                                    Dane Techniczne
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                                    {specs.map((spec, idx) => (
                                        <li key={idx} className="flex justify-between items-center">
                                            <span>{spec.label}</span>
                                            <span className="font-semibold text-slate-900 dark:text-white">{spec.value}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                                    <LifeBuoy className="text-amber-500" size={20} />
                                    Wyposażenie
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                    {equipment.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-amber-500 mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href="https://engine37851.idobooking.com/index.php?ob[31]=&showOtherOffers=true&currency=0&language=0&from_own_button=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    ZAREZERWUJ GO
                </a>
            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix="Jacht Stillo 30"
                />
            )}

            <Footer />
        </main>
    );
}
