"use client";

import React, { useState, useMemo } from 'react';
import { strandaApartments } from '@/data/stranda-apartments';
import { skorupkiData } from '@/data/skorupki-data';
import { mikolajkiData } from '@/data/mikolajki-data';
import { pokojeFuledaData } from '@/data/pokoje-fuleda-data';
import { fuledaApartments } from '@/data/fuleda-data';
import { kisajnoData } from '@/data/kisajno-data';
import { useICalAvailability } from '@/hooks/useICalAvailability';
import { Calendar, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { getAssetPath } from '@/utils/assetPath';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper to flatten amenities
const flattenAmenities = (amenitiesObj: any): string[] => {
    if (!amenitiesObj) return [];
    if (Array.isArray(amenitiesObj)) return amenitiesObj.slice(0, 4);
    
    const list: string[] = [];
    Object.values(amenitiesObj).forEach(arr => {
        if (Array.isArray(arr)) list.push(...arr);
    });
    return list.slice(0, 4);
};

export default function DostepnoscTestPage() {
    const { checkAvailability } = useICalAvailability();
    const router = useRouter();
    const { t } = useLanguage();
    
    const [loading, setLoading] = useState(false);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [availableApartments, setAvailableApartments] = useState<any[]>([]);
    const [scannedCount, setScannedCount] = useState(0);

    // Filters
    const [filterJacuzzi, setFilterJacuzzi] = useState(false);
    const [filterSauna, setFilterSauna] = useState(false);
    const [filterAC, setFilterAC] = useState(false);
    const [filterLake, setFilterLake] = useState(false);
    const [filterCapacity, setFilterCapacity] = useState<'all' | '2' | '3' | '4' | '5' | '6'>('all');

    const allApartments = useMemo(() => {
        const items: any[] = [];

        Object.values(strandaApartments).forEach((apt: any) => {
            items.push({
                id: `Stranda-${apt.id}`,
                name: apt.title,
                location: 'Stranda',
                heroImage: apt.gallery?.heroImage || apt.gallery?.images?.[0] || apt.images?.[0] || '/images/hero_1.webp',
                guests: apt.guests || 'Brak',
                price: apt.price || 'Zapytaj',
                amenities: flattenAmenities(apt.amenities),
                icalUrl: apt.icalUrl || apt.icalLink,
                idoBookingId: apt.idoBookingId,
                href: `/apartamenty/stranda/${apt.id}`,
                type: apt.type,
                description: apt.description,
                rawAmenities: apt.amenities
            });
        });

        items.push({
            id: `Skorupki-all`,
            name: skorupkiData.title || 'Domki Skorupki (Wszystkie)',
            location: 'Skorupki',
            heroImage: skorupkiData.gallery?.heroImage || skorupkiData.gallery?.images?.[0] || '/images/skorupki/skorupki_1.webp',
            guests: skorupkiData.guests || '6',
            price: skorupkiData.price || 'Zapytaj',
            amenities: flattenAmenities(skorupkiData.amenities),
            icalUrl: null,
            idoBookingId: skorupkiData.idoBookingId,
            href: `/domki/skorupki`,
            type: 'domki',
            description: skorupkiData.description,
            rawAmenities: skorupkiData.amenities
        });

        items.push({
            id: `Mikolajki-${mikolajkiData.id}`,
            name: mikolajkiData.title,
            location: 'Mikołajki',
            heroImage: mikolajkiData.gallery?.heroImage || mikolajkiData.gallery?.images?.[0] || '/images/mikolajki/mikolajki_1.webp',
            guests: mikolajkiData.guests || 'Brak',
            price: mikolajkiData.price || 'Zapytaj',
            amenities: flattenAmenities(mikolajkiData.amenities),
            icalUrl: mikolajkiData.icalUrl,
            idoBookingId: mikolajkiData.idoBookingId,
            href: `/apartamenty/mikolajki`,
            type: 'apartament',
            description: mikolajkiData.description,
            rawAmenities: mikolajkiData.amenities
        });

        items.push({
            id: `PokojeFuleda-${pokojeFuledaData.id}`,
            name: pokojeFuledaData.title,
            location: 'Pokoje Fuleda',
            heroImage: pokojeFuledaData.gallery?.heroImage || pokojeFuledaData.gallery?.images?.[0] || '/images/pokoje_fuleda/fuleda_pokoj_1.webp',
            guests: pokojeFuledaData.guests || 'Brak',
            price: pokojeFuledaData.price || 'Zapytaj',
            amenities: flattenAmenities(pokojeFuledaData.amenities),
            icalUrl: pokojeFuledaData.icalUrl,
            idoBookingId: pokojeFuledaData.idoBookingId,
            href: `/pokoje/fuleda`,
            type: 'pokój',
            description: pokojeFuledaData.description,
            rawAmenities: pokojeFuledaData.amenities
        });

        Object.values(fuledaApartments || {}).forEach((apt: any) => {
            items.push({
                id: `Fuleda-${apt.id}`,
                name: apt.title || apt.type,
                location: 'Fuleda',
                heroImage: apt.gallery?.heroImage || apt.gallery?.images?.[0] || apt.images?.[0] || '/images/fuleda/fuleda_1.webp',
                guests: apt.guests || 'Brak',
                price: apt.price || 'Zapytaj',
                amenities: flattenAmenities(apt.amenities),
                icalUrl: apt.icalUrl || apt.icalLink,
                idoBookingId: apt.idoBookingId,
                href: `/domki/fuleda/${apt.id}`,
                type: apt.type,
                description: apt.description,
                rawAmenities: apt.amenities
            });
        });

        if (kisajnoData) {
            items.push({
                id: `Kisajno-${kisajnoData.id}`,
                name: kisajnoData.title,
                location: 'Kisajno',
                heroImage: kisajnoData.gallery?.heroImage || kisajnoData.gallery?.images?.[0] || kisajnoData.images?.[0] || '/images/kisajno/kisajno_1.webp',
                guests: kisajnoData.guests || 'Brak',
                price: kisajnoData.price || 'Zapytaj',
                amenities: flattenAmenities(kisajnoData.amenities),
                icalUrl: kisajnoData.icalUrl,
                idoBookingId: kisajnoData.idoBookingId,
                href: `/apartamenty/kisajno`,
                type: 'apartament',
                description: kisajnoData.description,
                rawAmenities: kisajnoData.amenities
            });
        }

        return items;
    }, []);

    const filterOptions = [
        { id: 'next_3', label: 'Najbliższe 3 dni', days: 3 },
        { id: 'next_5', label: 'Najbliższe 5 dni', days: 5 },
        { id: 'this_week', label: 'Ten tydzień (do niedzieli)', type: 'this_week' },
        { id: 'next_week', label: 'Następny tydzień', type: 'next_week' }
    ];

    const getDatesForFilter = (filter: any): { start: Date, end: Date } => {
        const start = new Date();
        start.setHours(14, 0, 0, 0); 

        let end = new Date(start);
        if (filter.days) {
            end.setDate(start.getDate() + filter.days);
        } else if (filter.type === 'this_week') {
            const day = start.getDay();
            const diff = start.getDate() + (day === 0 ? 0 : 7 - day); 
            end.setDate(diff);
        } else if (filter.type === 'next_week') {
            const day = start.getDay();
            const nextMonday = new Date(start);
            nextMonday.setDate(start.getDate() + (day === 0 ? 1 : 8 - day));
            start.setTime(nextMonday.getTime());
            
            end = new Date(start);
            end.setDate(start.getDate() + 6); 
        }
        end.setHours(10, 0, 0, 0); 
        return { start, end };
    };

    const handleFilter = async (filter: any) => {
        setActiveFilter(filter.id);
        setLoading(true);
        setScannedCount(0);
        setAvailableApartments([]);

        const { start, end } = getDatesForFilter(filter);
        const available: any[] = [];

        const promises = allApartments.map(async (apt) => {
            if (!apt.icalUrl) {
                available.push(apt);
                setScannedCount(prev => prev + 1);
                return;
            }

            const isFree = await checkAvailability(apt.icalUrl, start, end);
            if (isFree) {
                available.push(apt);
            }
            setScannedCount(prev => prev + 1);
        });

        await Promise.allSettled(promises);
        
        available.sort((a, b) => {
            const isStrandaA = a.id.startsWith('Stranda-');
            const isStrandaB = b.id.startsWith('Stranda-');
            
            if (isStrandaA && isStrandaB) {
                return a.id.localeCompare(b.id, 'pl');
            }
            if (isStrandaA) return -1;
            if (isStrandaB) return 1;
            
            return a.name.localeCompare(b.name, 'pl');
        });
        
        setAvailableApartments(available);
        setLoading(false);
    };

    const filteredApartments = useMemo(() => {
        return availableApartments.filter(apt => {
            const titleLow = (apt.name || '').toLowerCase();
            const descLow = (apt.description || '').toLowerCase();
            
            // Check Jacuzzi
            if (filterJacuzzi) {
                const hasJacuzzi = (apt.rawAmenities?.terrace?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                    || (apt.rawAmenities?.bathroom?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                    || titleLow.includes('jacuzzi');
                if (!hasJacuzzi) return false;
            }
            
            // Check Sauna
            if (filterSauna) {
                const hasSauna = (apt.rawAmenities?.bathroom?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                    || (apt.rawAmenities?.living?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                    || titleLow.includes('sauna');
                if (!hasSauna) return false;
            }
            
            // Check AC
            if (filterAC) {
                const hasAC = (apt.rawAmenities?.living?.some((item: string) => item.toLowerCase().includes('klimatyzacj')) || false)
                    || (apt.rawAmenities?.bedroom?.some((item: string) => item.toLowerCase().includes('klimatyzacj')) || false)
                    || titleLow.includes('klimatyzacj') || descLow.includes('klimatyzacj');
                if (!hasAC) return false;
            }

            // Check Lake
            if (filterLake) {
                const hasLake = (apt.rawAmenities?.terrace?.some((item: string) => item.toLowerCase().includes('jezioro') || item.toLowerCase().includes('lake')) || false)
                    || titleLow.includes('jezior') || descLow.includes('jezior');
                if (!hasLake) return false;
            }

            // Check Capacity
            if (filterCapacity !== 'all') {
                const guestsStr = apt.guests || "4";
                const parts = guestsStr.split('+').map((n: string) => parseInt(n.trim(), 10) || 0);
                const totalGuests = parts.reduce((a: number, b: number) => a + b, 0);
                const filterNum = parseInt(filterCapacity, 10);
                if (totalGuests < filterNum) return false; 
            }
            
            return true;
        });
    }, [availableApartments, filterJacuzzi, filterSauna, filterAC, filterLake, filterCapacity]);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            
            <Hero />

            <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <div className="mb-8">
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                        Wybierz przedział czasowy, aby przeszukać wszystkie nasze kalendarze na żywo. Pokazujemy tylko te apartamenty i domki, które są w 100% wolne w zadanym terminie.
                    </p>
                </div>

                {/* Termin filter */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {filterOptions.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilter(filter)}
                            disabled={loading}
                            className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
                                ${activeFilter === filter.id 
                                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}
                                ${loading && activeFilter !== filter.id ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                        >
                            {loading && activeFilter === filter.id && <Loader2 className="w-4 h-4 animate-spin" />}
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Additional Filters */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm mb-12 flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 items-start md:items-end">
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-wrap">
                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Jacuzzi</span>
                            <button
                                onClick={() => setFilterJacuzzi(!filterJacuzzi)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${filterJacuzzi ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                            >
                                {filterJacuzzi ? "✓ Jacuzzi" : "○ Jacuzzi"}
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sauna</span>
                            <button
                                onClick={() => setFilterSauna(!filterSauna)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${filterSauna ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                            >
                                {filterSauna ? "✓ Sauna" : "○ Sauna"}
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Klimatyzacja</span>
                            <button
                                onClick={() => setFilterAC(!filterAC)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${filterAC ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                            >
                                {filterAC ? "✓ Klimatyzowana" : "○ Klimatyzowana"}
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 w-full sm:w-auto">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Widok</span>
                            <button
                                onClick={() => setFilterLake(!filterLake)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all ${filterLake ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50'}`}
                            >
                                {filterLake ? "✓ Na jezioro" : "○ Na jezioro"}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Rozmiar</span>
                        <div className="flex bg-slate-50 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 flex-wrap">
                            {['all', '2', '3', '4', '5', '6'].map((cap) => (
                                <button
                                    key={cap}
                                    onClick={() => setFilterCapacity(cap as any)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${filterCapacity === cap ? 'bg-amber-500 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                                >
                                    {cap === 'all' ? "Dowolna" : `${cap} os.`}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {loading && (
                    <div className="py-20 text-center flex flex-col items-center">
                        <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
                        <h3 className="text-xl font-medium text-slate-800 dark:text-white mb-2">Skanowanie kalendarzy...</h3>
                        <p className="text-slate-500 dark:text-slate-400">Sprawdzono {scannedCount} z {allApartments.length} obiektów</p>
                        
                        <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-6 overflow-hidden">
                            <div 
                                className="h-full bg-amber-500 transition-all duration-300 ease-out" 
                                style={{ width: `${(scannedCount / allApartments.length) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {!loading && activeFilter && filteredApartments.length === 0 && (
                    <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-slate-800 dark:text-white mb-2">Brak wolnych obiektów</h3>
                        <p className="text-slate-500 dark:text-slate-400">Niestety w wybranym terminie wszystkie obiekty są zajęte lub nie spełniają kryteriów.</p>
                    </div>
                )}

                {!loading && filteredApartments.length > 0 && (
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredApartments.map((apt) => {
                                const bookingUrl = apt.idoBookingId 
                                    ? `https://engine37851.idobooking.com/index.php?ob[${apt.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`
                                    : apt.href;

                                const typeLow = (apt.type || '').toLowerCase();
                                const titleLow = (apt.name || '').toLowerCase();
                                const descLow = (apt.description || '').toLowerCase();
                                
                                const features = [];
                                
                                if (typeLow.includes('studio') || titleLow.includes('studio') || descLow.includes('studio')) {
                                    features.push('Studio');
                                }
                                
                                if (typeLow.includes('twobedroom') || titleLow.includes('dwoma sypialniami') || titleLow.includes('2 sypialni') || descLow.includes('2 sypialnie')) {
                                    features.push('2 sypialnie');
                                } else if (typeLow.includes('onebedroom') || titleLow.includes('jedną sypialnią') || titleLow.includes('1 sypialni') || descLow.includes('1 sypialnią') || descLow.includes('sypialnię')) {
                                    features.push('1 Sypialnia');
                                } else if (descLow.includes('sypialni') && !features.includes('2 sypialnie')) {
                                    features.push('1 Sypialnia');
                                }

                                const hasJacuzzi = (apt.rawAmenities?.terrace?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                                    || (apt.rawAmenities?.bathroom?.some((item: string) => item.toLowerCase().includes('jacuzzi')) || false)
                                    || titleLow.includes('jacuzzi');
                                if (hasJacuzzi) features.push('Jacuzzi');

                                const hasSauna = (apt.rawAmenities?.bathroom?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                                    || (apt.rawAmenities?.living?.some((item: string) => item.toLowerCase().includes('sauna')) || false)
                                    || titleLow.includes('sauna');
                                if (hasSauna) features.push('Sauna');

                                const featuresText = features.join(' | ') || apt.name;

                                return (
                                    <motion.div 
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        key={apt.id} 
                                        className="group flex flex-col h-full space-y-4"
                                    >
                                        <Link href={apt.href} className="block flex-grow">
                                            <div
                                                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
                                            >
                                                <div className="relative h-64 w-full overflow-hidden">
                                                    <Image
                                                        src={getAssetPath(apt.heroImage)}
                                                        alt={`Apartament ${apt.name}`}
                                                        fill
                                                        quality={95}
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                                    {/* Yellow badge top left */}
                                                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                                        {apt.id.replace(apt.location + '-', '').replace('Mikolajki-', '').replace('Skorupki-', '').toUpperCase().replace(/-/g, ' ')}
                                                    </div>

                                                    {/* Location badge top right */}
                                                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-white uppercase shadow-lg z-10">
                                                        {apt.location.toUpperCase()}
                                                    </div>

                                                    {/* Features bottom */}
                                                    <div className="absolute bottom-4 left-5 text-white pr-4">
                                                        <h3 className="text-lg md:text-xl font-bold font-sans">
                                                            {featuresText}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <a
                                            href={bookingUrl}
                                            target={apt.idoBookingId ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="w-full bg-[#00c853] hover:bg-[#00e676] text-white text-center py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95 uppercase tracking-widest block"
                                        >
                                            ZAREZERWUJ
                                        </a>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                )}

            </div>
            <Footer />
        </main>
    );
}
