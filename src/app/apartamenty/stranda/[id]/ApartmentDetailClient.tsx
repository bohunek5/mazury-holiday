"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { strandaApartments } from "@/data/stranda-apartments";
import ImageLightbox from "@/components/ImageLightbox";
import { useState } from "react";
import ICalCalendar from "@/components/ICalCalendar";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";



interface ApartmentDetailClientProps {
    id?: string;
}

export default function ApartmentDetailClient({ id }: ApartmentDetailClientProps) {
    const { t } = useLanguage();
    const router = useRouter();
    const data = strandaApartments[id as keyof typeof strandaApartments];
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [galleryExpanded, setGalleryExpanded] = useState(false);




    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Apartament nie odnaleziony.</p>
            </div>
        );
    }

    const apartment = {
        id: id,
        title: `${t("stranda", "apartment")} ${id} ${data.type}`,
        building: data.building,
        description: data.description,
        amenities: [
            ...data.amenities.living,
            ...data.amenities.kitchen,
            ...data.amenities.bedroom,
            ...data.amenities.bathroom,
            ...data.amenities.terrace
        ],
        mainImage: data.gallery.heroImage,
        gallery: data.gallery.images
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero / Header Image */}
            <section className="relative h-[60vh] w-full">
                <Image
                    src={apartment.mainImage}
                    alt={apartment.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <span className="block text-amber-400 font-bold tracking-widest mb-2 uppercase">Stranda Residence</span>
                        <h1 className="text-5xl md:text-7xl font-playfair mb-4">{apartment.title}</h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>{t("details", "backToList") || "Powrót"}</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "about")}</h2>
                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                                {apartment.description}
                            </p>
                        </div>

                        {/* Gallery */}
                        {apartment.gallery.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-playfair mb-6 text-slate-900 dark:text-white text-center md:text-left">Galeria</h2>

                                {/* First 3 images - always visible */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    {apartment.gallery.slice(0, 3).map((img: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                            onClick={() => {
                                                setLightboxIndex(idx);
                                                setLightboxOpen(true);
                                            }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${apartment.title} view ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Remaining images - collapsible */}
                                {apartment.gallery.length > 3 && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => setGalleryExpanded(!galleryExpanded)}
                                            className="w-full mb-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            {galleryExpanded ? '▲ Zwiń galerię' : `▼ Zobacz więcej zdjęć`}
                                        </button>

                                        {galleryExpanded && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                                                {apartment.gallery.slice(3).map((img: string, idx: number) => (
                                                    <div
                                                        key={idx + 3}
                                                        className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                                        onClick={() => {
                                                            setLightboxIndex(idx + 3);
                                                            setLightboxOpen(true);
                                                        }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`${apartment.title} view ${idx + 4}`}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            loading="lazy"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Amenities */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-playfair mb-12 text-center text-slate-900 dark:text-white">Udogodnienia w apartamencie</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Living Room */}
                                {data.amenities.living.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/SOFA.svg" alt="Salon" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Salon</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.living.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Kitchen */}
                                {data.amenities.kitchen.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/CUTLERY.svg" alt="Kuchnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Kuchnia</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.kitchen.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bedroom */}
                                {data.amenities.bedroom.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/BED.svg" alt="Sypialnia" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Sypialnia</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.bedroom.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Bathroom */}
                                {data.amenities.bathroom.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/SHOWER.svg" alt="Łazienka" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Łazienka</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.bathroom.join(", ")}
                                        </p>
                                    </div>
                                )}

                                {/* Terrace */}
                                {data.amenities.terrace.length > 0 && (
                                    <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                        <div className="relative w-14 h-14 mx-auto mb-6">
                                            <Image src="/mazury-holiday/icons/TERRACE.svg" alt="Taras" fill className="object-contain dark:invert opacity-80" />
                                        </div>
                                        <h4 className="text-2xl font-playfair mb-4 text-slate-900 dark:text-white">Taras</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {data.amenities.terrace.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Booking */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 sticky top-32 shadow-xl">
                            <h3 className="text-2xl font-playfair mb-6 text-slate-900 dark:text-white">{t("details", "booking")}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                {t("details", "checkAvailability")}
                            </p>

                            {/* Booking Button - iDoBooking Link */}
                            <a
                                href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 rounded-xl transition-all mb-4 whitespace-nowrap uppercase tracking-wider shadow-lg hover:shadow-green-500/25 active:scale-95"
                            >
                                ZAREZERWUJ GO
                            </a>

                            {/* Phone Call Button - Second */}
                            <a
                                href="tel:+48607241090"
                                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mb-4 whitespace-nowrap"
                            >
                                {t("details", "callBtn")}: +48 607 241 090
                            </a>

                            {/* iDoBooking Widget Button - Desktop Only */}


                            <div className="mb-6 space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                                    <span className="text-slate-500">{t("details", "priceFrom") || "Cena od"}:</span>
                                    <span className="text-2xl font-bold text-amber-500">{data.price} zł</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                                    <span className="text-slate-500">{t("details", "guests") || "Liczba osób"}:</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{data.guests}</span>
                                </div>
                            </div>

                            <p className="text-xs text-center text-slate-500 mb-6">
                                {t("details", "lowPrice")}
                            </p>

                            {/* Availability Calendar (iCal) */}
                            {data.icalUrl && (
                                <div className="mb-8">
                                    <ICalCalendar icalUrl={data.icalUrl} apartmentId={id} />
                                </div>
                            )}


                        </div>
                    </div>

                </div>
            </section>

            {/* Mobile Floating Booking Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 lg:hidden flex gap-4 border-t border-slate-200 dark:border-slate-800">
                <a
                    href={`https://engine37851.idobooking.com/index.php?ob[${data.idoBookingId || '1'}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-[#50B848] hover:bg-[#45a041] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider active:scale-95"
                >
                    ZAREZERWUJ GO
                </a>

            </div>

            {lightboxOpen && (
                <ImageLightbox
                    images={apartment.gallery}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                    altPrefix={apartment.title}
                />
            )}

            <Footer />
        </main>
    );
}
