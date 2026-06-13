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
}

export default function Dashboard({ onLogout }: DashboardProps) {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGallery, setSelectedGallery] = useState<{images: string[], index: number} | null>(null);
    const [stats, setStats] = useState<{sizesByItem: Record<string, string>, translationStats: {en: number, de: number, totalSizeAllMB: string}} | null>(null);

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
                    ...(apt.icalUrl ? [{ name: 'iCal', url: apt.icalUrl }] : []),
                    ...(apt.icalLink ? [{ name: 'iCal', url: apt.icalLink }] : [])
                ],
                amenities: flattenAmenities(apt.amenities)
            });
        });

        // 2. Skorupki (złączone w jeden domek bez kalendarza - usunięte na rzecz listy poszczególnych domków)

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
            amenities: flattenAmenities(mikolajkiData.amenities)
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
            amenities: flattenAmenities(pokojeFuledaData.amenities)
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
                amenities: flattenAmenities(apt.amenities)
            });
        });

        // 6. Kisajno
        if (kisajnoData) {
            items.push({
                id: `Kisajno-${kisajnoData.id}`,
                name: kisajnoData.title,
                location: 'Kisajno',
                heroImage: kisajnoData.gallery?.heroImage || kisajnoData.gallery?.images?.[0] || kisajnoData.images?.[0] || '/images/kisajno/kisajno_1.webp',
                images: kisajnoData.gallery?.images || kisajnoData.images || [],
                photoCount: kisajnoData.gallery?.images?.length || kisajnoData.images?.length || 0,
                guests: kisajnoData.guests || 'Brak',
                price: kisajnoData.price || 'Brak',
                calendarLinks: [
                    ...(kisajnoData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${kisajnoData.idoBookingId}` }] : []),
                    ...(kisajnoData.icalUrl ? [{ name: 'iCal', url: kisajnoData.icalUrl }] : []),
                    ...(kisajnoData.icalLink ? [{ name: 'iCal', url: kisajnoData.icalLink }] : [])
                ],
                amenities: flattenAmenities(kisajnoData.amenities)
            });
        }

        // 7. Cottages (Skorupki poszczególne domki)
        if (Array.isArray(cottagesData)) {
            cottagesData.forEach((cottage) => {
                items.push({
                    id: `Skorupki-S${cottage.id}`,
                    name: cottage.name || `Domek S${cottage.id}`,
                    location: 'Skorupki',
                    heroImage: cottage.heroImage || '/images/skorupki/skorupki_1.webp',
                    images: [],
                    photoCount: 0,
                    guests: cottage.guests || 'Brak',
                    price: cottage.price || 'Brak',
                    calendarLinks: [], // "w domki skorupki nie ma kalendarza wiec tam nie dawaj"
                    amenities: flattenAmenities(cottage.amenities)
                });
            });
        }

        // 8. Stillo
        items.push({
            id: `Stillo-1`,
            name: 'Jacht Motorowy Stillo 30 VIP',
            location: 'Stillo',
            heroImage: '/images/czarter/gallery/stillo_1.webp',
            images: Array.from({ length: 21 }, (_, i) => `/images/czarter/gallery/stillo_${i + 1}.webp`),
            photoCount: 21,
            guests: '6-8',
            price: 'Brak',
            calendarLinks: [],
            amenities: ['Ster strumieniowy', 'Ogrzewanie', 'Lodówka', 'TV', 'Prysznic']
        });

        // Custom sort logic
        const locationOrder = ['Stranda', 'Kisajno', 'Fuleda', 'Pokoje Fuleda', 'Skorupki', 'Stillo', 'Mikołajki'];
        
        items.sort((a, b) => {
            const locA = locationOrder.indexOf(a.location);
            const locB = locationOrder.indexOf(b.location);
            
            if (locA !== locB) {
                const aIdx = locA === -1 ? 999 : locA;
                const bIdx = locB === -1 ? 999 : locB;
                return aIdx - bIdx;
            }
            
            // If same location, sort Stranda by ID to keep A, B, C order
            if (a.location === 'Stranda') {
                const aCode = a.id.replace('Stranda-', '');
                const bCode = b.id.replace('Stranda-', '');
                
                // Studio and C304 are part of C, but standard string sort puts Studio after C. That's fine or we can force C prefix.
                // Let's just use string localeCompare which works well for A, B, C
                return aCode.localeCompare(bCode, 'pl');
            }
            
            return a.name.localeCompare(b.name, 'pl');
        });

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

    useEffect(() => {
        const fetchStats = async () => {
            const imagesByItem: Record<string, string[]> = {};
            allItems.forEach(item => {
                imagesByItem[item.id] = item.images.length > 0 ? item.images : [item.heroImage].filter(Boolean);
            });
            try {
                const res = await fetch('/api/admin/stats', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ imagesByItem })
                });
                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (e) {
                console.error(e);
            }
        };
        if (allItems.length > 0) fetchStats();
    }, [allItems]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
            {/* Blurred Background Image */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <img 
                    src="/images/hero_1.webp" 
                    alt="" 
                    className="w-full h-full object-cover opacity-10 blur-3xl scale-110" 
                />
            </div>

            {/* Header */}
            <header className={`sticky top-0 z-40 border-b backdrop-blur-md px-6 py-4 flex items-center justify-between transition-colors duration-300 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
                <div className="flex items-center space-x-4">
                    <img 
                        src="/images/logo-poziom.svg" 
                        alt="Mazury Holiday" 
                        className={`h-8 w-auto ${darkMode ? 'brightness-0 invert opacity-90' : ''}`}
                    />
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-bold tracking-tight">Mazury Holiday</h1>
                        <p className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Przegląd Oferty</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative group">
                        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                        <input 
                            type="text" 
                            placeholder="Szukaj obiektu..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`pl-9 pr-4 py-2 w-64 text-sm rounded-xl outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                                darkMode 
                                    ? 'bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:bg-slate-800' 
                                    : 'bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white'
                            }`}
                        />
                    </div>

                    <button 
                        onClick={toggleTheme}
                        className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-600'}`}
                        title="Przełącz motyw dzień/noc"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <div className={`h-8 w-px ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

                    <button 
                        onClick={onLogout}
                        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-500/90 hover:bg-red-500 rounded-xl transition-all shadow-lg shadow-red-500/20 active:scale-95"
                    >
                        <span>Wyloguj</span>
                        <LogOut size={16} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-2 sm:p-6 w-full relative z-10">
                {/* Stats row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Layers size={24} /></div>
                        <div>
                            <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Suma Obiektów</p>
                            <p className="text-2xl font-bold">{allItems.length}</p>
                        </div>
                    </div>
                    {stats && (
                        <>
                            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl"><ImageIcon size={24} /></div>
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Waga Danych</p>
                                    <p className="text-2xl font-bold">{stats.translationStats.totalSizeAllMB} MB</p>
                                </div>
                            </div>
                            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><span className="text-lg font-bold">EN</span></div>
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Tłumaczenie EN</p>
                                    <p className="text-2xl font-bold">{stats.translationStats.en}%</p>
                                </div>
                            </div>
                            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl"><span className="text-lg font-bold">DE</span></div>
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Tłumaczenie DE</p>
                                    <p className="text-2xl font-bold">{stats.translationStats.de}%</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Table */}
                <div className={`rounded-2xl border overflow-hidden shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className={`text-xs uppercase font-semibold ${darkMode ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>
                                <tr>
                                    <th className="px-6 py-4 font-medium">Miniatura</th>
                                    <th className="px-6 py-4 font-medium">ID / Nazwa</th>
                                    <th className="px-6 py-4 font-medium">Lokalizacja</th>
                                    <th className="px-6 py-4 font-medium">Zdjęcia</th>
                                    <th className="px-6 py-4 font-medium">Waga (MB)</th>
                                    <th className="px-6 py-4 font-medium">Goście</th>
                                    <th className="px-6 py-4 font-medium">Udogodnienia</th>
                                    <th className="px-6 py-4 font-medium">Cena</th>
                                    <th className="px-6 py-4 font-medium">Kalendarz</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${darkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                                {filteredItems.map((item) => (
                                    <tr key={item.id} className={`transition-colors hover:${darkMode ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
                                        <td className="px-6 py-3">
                                            <button 
                                                onClick={() => setSelectedGallery({ images: item.images.length > 0 ? item.images : [item.heroImage], index: 0 })}
                                                className="relative group block w-16 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                title="Kliknij by powiększyć galerię"
                                            >
                                                <img src={item.heroImage} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <Search size={14} className="text-white opacity-0 group-hover:opacity-100 drop-shadow-md" />
                                                </div>
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold">{item.name}</div>
                                            <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{item.id}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                                <MapPin size={12} className="mr-1" />
                                                {item.location}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-1.5">
                                                <ImageIcon size={14} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
                                                <span className="font-medium">{item.photoCount}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-medium">{stats?.sizesByItem[item.id] ? `${stats.sizesByItem[item.id]} MB` : '...'}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-1.5">
                                                <User size={14} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
                                                <span className="font-medium">{item.guests}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400 max-w-xs">
                                            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                                                {item.amenities && item.amenities.length > 0 ? (
                                                    item.amenities.map((amenity, i) => (
                                                        <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${darkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                                                            {amenity}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className={`text-xs italic ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Brak danych</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-4 align-top">
                                            {item.calendarLinks.length > 0 ? (
                                                <div className="flex flex-col gap-4 w-[320px]">
                                                    {item.calendarLinks.map((link, i) => (
                                                        link.name === 'iCal' ? (
                                                            <div key={i} className="transform scale-[0.85] origin-top-left">
                                                                <ICalCalendar icalUrl={link.url} apartmentId={item.name} />
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                key={i} 
                                                                href={link.url} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center space-x-1 px-3 py-2 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 rounded-lg text-sm font-medium transition-colors w-max"
                                                            >
                                                                <Calendar size={14} />
                                                                <span>{link.name} panel</span>
                                                            </a>
                                                        )
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className={`text-xs italic ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Brak kalendarza</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {filteredItems.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                                            Nie znaleziono wyników dla "{searchTerm}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
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
