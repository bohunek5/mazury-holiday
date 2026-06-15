"use client";

import React, { useState, useMemo } from 'react';
import { LogOut, Search, Moon, Sun, Calendar, Info, MapPin, Layers, Image as ImageIcon, User } from 'lucide-react';

import { strandaApartments } from '@/data/stranda-apartments';
import { skorupkiData } from '@/data/skorupki-data';
import { mikolajkiData } from '@/data/mikolajki-data';
import { pokojeFuledaData } from '@/data/pokoje-fuleda-data';
import { fuledaApartments } from '@/data/fuleda-data';
import { kisajnoData } from '@/data/kisajno-data';
import { cottagesData } from '@/data/cottages-data';
import { czarterData } from '@/data/czarter-data';
import ICalCalendar from '@/components/ICalCalendar';

interface DashboardProps {
    onLogout: () => void;
}

// Unified item interface for the table
interface UnifiedItem {
    id: string;
    name: string;
    location: string;
    heroImage: string;
    images: string[];
    photoCount: number;
    guests: string | number;
    price: number | string;
    calendarLinks: { name: string; url: string }[];
    amenities: string[];
    icalUrl?: string;
    idoBookingId?: string;
}

export default function Dashboard({ onLogout }: DashboardProps) {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGallery, setSelectedGallery] = useState<{images: string[], index: number} | null>(null);

    // Prepare unified data
    const allItems = useMemo<UnifiedItem[]>(() => {
        const items: UnifiedItem[] = [];

        const flattenAmenities = (amenitiesObj: any): string[] => {
            if (!amenitiesObj) return [];
            const list: string[] = [];
            
            if (Array.isArray(amenitiesObj)) {
                amenitiesObj.forEach((item: any) => {
                    if (typeof item === 'string') {
                        list.push(item);
                    } else if (item && typeof item === 'object' && Array.isArray(item.items)) {
                        list.push(...item.items);
                    }
                });
                return list;
            }
            
            Object.values(amenitiesObj).forEach((arr: any) => {
                if (Array.isArray(arr)) list.push(...arr);
            });
            return list;
        };

        // 1. Stranda
        Object.values(strandaApartments).forEach((apt: any) => {
            items.push({
                id: `Stranda-${apt.id}`,
                name: apt.title,
                location: 'Stranda',
                heroImage: apt.gallery?.heroImage || apt.gallery?.images?.[0] || apt.images?.[0] || '/images/hero_1.webp',
                images: apt.gallery?.images || apt.images || [],
                photoCount: apt.gallery?.images?.length || apt.images?.length || 0,
                guests: apt.guests || 'Brak',
                price: apt.price || 'Brak',
                calendarLinks: [
                    ...(apt.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${apt.idoBookingId}` }] : []),
                    ...(apt.icalLink ? [{ name: 'iCal', url: apt.icalLink }] : [])
                ],
                amenities: flattenAmenities(apt.amenities),
                icalUrl: apt.icalUrl || apt.icalLink,
                idoBookingId: apt.idoBookingId
            });
        });

        // 2. Skorupki (poszczególne domki)
        cottagesData.forEach((cottage: any, index: number) => {
            const nextCottage = cottagesData[index + 1];
            const endIdx = nextCottage ? nextCottage.galleryStart : skorupkiData.gallery?.images?.length || 0;
            const cottageImages = skorupkiData.gallery?.images?.slice(cottage.galleryStart, endIdx) || [];
            const allCottageImages = cottage.heroImage ? [cottage.heroImage, ...cottageImages] : cottageImages;
            
            const sData: any = skorupkiData;
            items.push({
                id: `Skorupki-${cottage.id}`,
                name: cottage.name || `Domek Skorupki ${index + 1}`,
                location: 'Skorupki',
                heroImage: cottage.heroImage || cottageImages[0] || '/images/skorupki/skorupki_1.webp',
                images: allCottageImages,
                photoCount: allCottageImages.length,
                guests: cottage.guests?.toString() || sData.guests || '6',
                price: cottage.price?.toString() || sData.price || 'Brak',
                calendarLinks: [
                    ...(sData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${sData.idoBookingId}` }] : []),
                    ...(sData.icalUrl ? [{ name: 'iCal', url: sData.icalUrl }] : [])
                ],
                amenities: flattenAmenities(cottage.amenities),
                icalUrl: sData.icalUrl,
                idoBookingId: sData.idoBookingId
            });
        });

        // 3. Mikołajki
        items.push({
            id: `Mikolajki-${mikolajkiData.id}`,
            name: mikolajkiData.title,
            location: 'Mikołajki',
            heroImage: mikolajkiData.gallery?.heroImage || mikolajkiData.gallery?.images?.[0] || '/images/mikolajki/mikolajki_1.webp',
            images: mikolajkiData.gallery?.images || [],
            photoCount: mikolajkiData.gallery?.images?.length || 0,
            guests: mikolajkiData.guests || 'Brak',
            price: mikolajkiData.price || 'Brak',
            calendarLinks: [
                ...(mikolajkiData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${mikolajkiData.idoBookingId}` }] : []),
                ...(mikolajkiData.icalUrl ? [{ name: 'iCal', url: mikolajkiData.icalUrl }] : [])
            ],
            amenities: flattenAmenities(mikolajkiData.amenities),
            icalUrl: mikolajkiData.icalUrl,
            idoBookingId: mikolajkiData.idoBookingId
        });

        // 4. Pokoje Fuleda
        items.push({
            id: `PokojeFuleda-${pokojeFuledaData.id}`,
            name: pokojeFuledaData.title,
            location: 'Pokoje Fuleda',
            heroImage: pokojeFuledaData.gallery?.heroImage || pokojeFuledaData.gallery?.images?.[0] || '/images/pokoje_fuleda/fuleda_pokoj_1.webp',
            images: pokojeFuledaData.gallery?.images || [],
            photoCount: pokojeFuledaData.gallery?.images?.length || 0,
            guests: pokojeFuledaData.guests || 'Brak',
            price: pokojeFuledaData.price || 'Brak',
            calendarLinks: [
                ...(pokojeFuledaData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${pokojeFuledaData.idoBookingId}` }] : []),
                ...(pokojeFuledaData.icalUrl ? [{ name: 'iCal', url: pokojeFuledaData.icalUrl }] : [])
            ],
            amenities: flattenAmenities(pokojeFuledaData.amenities),
            icalUrl: pokojeFuledaData.icalUrl,
            idoBookingId: pokojeFuledaData.idoBookingId
        });

        // 5. Fuleda
        Object.values(fuledaApartments || {}).forEach((apt: any) => {
            items.push({
                id: `Fuleda-${apt.id}`,
                name: apt.title || apt.type,
                location: 'Fuleda',
                heroImage: apt.gallery?.heroImage || apt.gallery?.images?.[0] || apt.images?.[0] || '/images/fuleda/fuleda_1.webp',
                images: apt.gallery?.images || apt.images || [],
                photoCount: apt.gallery?.images?.length || apt.images?.length || 0,
                guests: apt.guests || 'Brak',
                price: apt.price || 'Brak',
                calendarLinks: [
                    ...(apt.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${apt.idoBookingId}` }] : []),
                    ...(apt.icalUrl ? [{ name: 'iCal', url: apt.icalUrl }] : []),
                    ...(apt.icalLink ? [{ name: 'iCal', url: apt.icalLink }] : [])
                ],
                amenities: flattenAmenities(apt.amenities),
                icalUrl: apt.icalUrl || apt.icalLink,
                idoBookingId: apt.idoBookingId
            });
        });

        // 6. Kisajno
        if (kisajnoData) {
            const kData: any = kisajnoData;
            items.push({
                id: `Kisajno-${kData.id}`,
                name: kData.title,
                location: 'Kisajno',
                heroImage: kData.gallery?.heroImage || kData.gallery?.images?.[0] || kData.images?.[0] || '/images/kisajno/kisajno_1.webp',
                images: kData.gallery?.images || kData.images || [],
                photoCount: kData.gallery?.images?.length || kData.images?.length || 0,
                guests: kData.guests || 'Brak',
                price: kData.price || 'Brak',
                calendarLinks: [
                    ...(kData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${kData.idoBookingId}` }] : []),
                    ...(kData.icalUrl ? [{ name: 'iCal', url: kData.icalUrl }] : [])
                ],
                amenities: flattenAmenities(kData.amenities),
                icalUrl: kData.icalUrl,
                idoBookingId: kData.idoBookingId
            });
        }

        // 7. Czarter
        if (czarterData) {
            items.push({
                id: `Czarter-${czarterData.id}`,
                name: czarterData.title,
                location: 'Port Stranda Giżycko',
                heroImage: czarterData.images?.[0] || '/images/czarter/gallery/stillo_1.webp',
                images: czarterData.images || ['/images/czarter/gallery/stillo_1.webp'],
                photoCount: czarterData.images?.length || 1,
                guests: 'max 8',
                price: 'Brak',
                calendarLinks: [
                    ...(czarterData.idoBookingId ? [{ name: 'IdoBooking', url: `https://client37851.idobooking.com/book-now/index.php?ob[${czarterData.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` }] : []),
                    ...(czarterData.icalUrl ? [{ name: 'iCal', url: czarterData.icalUrl }] : [])
                ],
                amenities: ['Ogrzewanie', 'WiFi', 'Nawigacja', 'Bezpieczeństwo'],
                icalUrl: czarterData.icalUrl,
                idoBookingId: czarterData.idoBookingId
            });
        }

        return items;
    }, []);

    const filteredItems = useMemo(() => {
        if (!searchTerm) return allItems;
        const lower = searchTerm.toLowerCase();
        return allItems.filter(item => 
            item.name.toLowerCase().includes(lower) || 
            item.location.toLowerCase().includes(lower) ||
            item.id.toLowerCase().includes(lower)
        );
    }, [allItems, searchTerm]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
            {/* Header */}
            <header className={`sticky top-0 z-40 border-b backdrop-blur-md px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors duration-300 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
                <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 shrink-0 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                            <Layers size={22} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">Mazury Holiday</h1>
                            <p className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Przegląd Oferty (Panel)</p>
                        </div>
                    </div>
                    {/* Logout button on mobile can go here or at the bottom of the header */}
                </div>

                <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                    <div className="relative group flex-1 md:flex-none">
                        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                        <input 
                            type="text" 
                            placeholder="Szukaj..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`pl-9 pr-4 py-2 w-full md:w-64 text-sm rounded-xl outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                                darkMode 
                                    ? 'bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:bg-slate-800' 
                                    : 'bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white'
                            }`}
                        />
                    </div>

                    <button 
                        onClick={toggleTheme}
                        className={`p-2 shrink-0 rounded-xl transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-600'}`}
                        title="Przełącz motyw dzień/noc"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <div className={`hidden md:block h-8 w-px ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

                    <button 
                        onClick={onLogout}
                        className="flex items-center justify-center shrink-0 space-x-2 px-3 md:px-4 py-2 text-sm font-medium text-white bg-red-500/90 hover:bg-red-500 rounded-xl transition-all shadow-lg shadow-red-500/20 active:scale-95"
                    >
                        <span className="hidden sm:inline">Wyloguj</span>
                        <LogOut size={16} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-4 md:p-6 w-full max-w-full overflow-hidden">
                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className={`p-4 md:p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Layers size={24} /></div>
                        <div>
                            <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Suma Obiektów</p>
                            <p className="text-2xl font-bold">{allItems.length}</p>
                        </div>
                    </div>
                </div>

                {/* List View */}
                <div className="flex flex-col space-y-6">
                    {filteredItems.map((item) => (
                        <div key={item.id} className={`grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border shadow-sm transition-colors overflow-visible ${darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800/50' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
                            {/* Calendar (1st column) */}
                            <div className="flex flex-col w-full min-h-[250px] xl:min-h-auto">
                                <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Kalendarz</h3>
                                {item.icalUrl ? (
                                    <div className="w-full bg-slate-950/50 rounded-xl border border-white/5 shadow-md h-full">
                                        <div className="p-2 border-b border-white/5 text-center bg-black/20">
                                            <div className="font-bold text-sm text-amber-500">
                                                {item.name} {item.idoBookingId ? `| ID: ${item.idoBookingId}` : ''}
                                            </div>
                                        </div>
                                        <div className="p-2 h-full">
                                            <ICalCalendar icalUrl={item.icalUrl} apartmentId={item.id} forceLanguage="pl" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full min-h-[250px] flex items-center justify-center rounded-xl border border-dashed border-slate-700 text-sm text-slate-500 flex-1">
                                        Brak kalendarza
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail (2nd column) */}
                            <div className="flex flex-col w-full">
                                <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Miniatura</h3>
                                <button 
                                    onClick={() => setSelectedGallery({ images: item.images.length > 0 ? item.images : [item.heroImage], index: 0 })}
                                    className="relative group block w-full h-full min-h-[250px] sm:min-h-[350px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1"
                                    title="Kliknij by powiększyć galerię"
                                >
                                    <img src={item.heroImage} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                        <Search size={24} className="text-white opacity-0 group-hover:opacity-100 drop-shadow-md transform scale-50 group-hover:scale-100 transition-all duration-300" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5 text-white text-xs font-medium">
                                        <ImageIcon size={12} />
                                        {item.photoCount}
                                    </div>
                                </button>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col w-full">
                                <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Szczegóły</h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                    {/* Column A */}
                                    <div className="space-y-4">
                                        <div>
                                            <p className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Nazwa & ID</p>
                                            <p className="font-bold text-lg leading-tight">{item.name}</p>
                                            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.id}</p>
                                        </div>
                                        
                                        <div>
                                            <p className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Lokalizacja</p>
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                                                <MapPin size={14} className="mr-1.5" />
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Column B */}
                                    <div className="space-y-4">
                                        <div>
                                            <p className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Pojemność & Cena</p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`p-1.5 rounded-lg ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                                                        <User size={16} />
                                                    </div>
                                                    <span className="font-semibold">{item.guests}</span>
                                                </div>
                                                <div className="font-bold text-orange-500">
                                                    {item.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Szybkie Linki</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.calendarLinks.length > 0 ? (
                                                    item.calendarLinks.map((link, i) => (
                                                        <a 
                                                            key={i} 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 rounded-lg text-xs font-semibold transition-colors"
                                                        >
                                                            <Calendar size={14} />
                                                            <span>{link.name}</span>
                                                        </a>
                                                    ))
                                                ) : (
                                                    <span className={`text-sm italic ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Brak linków</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column C */}
                                    <div className="sm:col-span-2 mt-2">
                                        <p className={`text-[10px] uppercase font-bold tracking-wider mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Udogodnienia</p>
                                        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                            {item.amenities && item.amenities.length > 0 ? (
                                                item.amenities.map((amenity, i) => (
                                                    <span key={i} className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium border ${darkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                                                        {amenity}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className={`text-sm italic ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Brak danych</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {filteredItems.length === 0 && (
                        <div className={`p-12 text-center rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-500'}`}>
                            Nie znaleziono wyników dla "{searchTerm}"
                        </div>
                    )}
                </div>
            </main>

            {/* Image Gallery Modal */}
            {selectedGallery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedGallery(null)}>
                    <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200"></div>
                    <div 
                        className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col items-center animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            onClick={() => setSelectedGallery(null)}
                            className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <LogOut size={24} className="rotate-180" />
                        </button>
                        
                        {/* Main Image */}
                        <div className="relative w-full h-[70vh] flex items-center justify-center mb-4">
                            <img 
                                src={selectedGallery.images[selectedGallery.index]} 
                                alt={`Zdjęcie ${selectedGallery.index + 1}`} 
                                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
                            />
                            
                            {/* Navigation */}
                            {selectedGallery.images.length > 1 && (
                                <>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedGallery({
                                                ...selectedGallery,
                                                index: selectedGallery.index === 0 ? selectedGallery.images.length - 1 : selectedGallery.index - 1
                                            });
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedGallery({
                                                ...selectedGallery,
                                                index: selectedGallery.index === selectedGallery.images.length - 1 ? 0 : selectedGallery.index + 1
                                            });
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {selectedGallery.images.length > 1 && (
                            <div className="w-full flex justify-center gap-2 overflow-x-auto pb-2 custom-scrollbar max-w-4xl">
                                {selectedGallery.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedGallery({ ...selectedGallery, index: idx })}
                                        className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                                            idx === selectedGallery.index 
                                                ? 'border-orange-500 opacity-100 scale-110' 
                                                : 'border-transparent opacity-50 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                        
                        {/* Counter */}
                        <div className="absolute -bottom-8 text-white/70 text-sm font-medium">
                            {selectedGallery.index + 1} / {selectedGallery.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
