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

interface DashboardProps {
    onLogout: () => void;
}

// Unified item interface for the table
interface UnifiedItem {
    id: string;
    name: string;
    location: string;
    heroImage: string;
    photoCount: number;
    guests: string | number;
    price: number | string;
    calendarLinks: { name: string; url: string }[];
    amenities: string[];
}

export default function Dashboard({ onLogout }: DashboardProps) {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Prepare unified data
    const allItems = useMemo<UnifiedItem[]>(() => {
        const items: UnifiedItem[] = [];

        const flattenAmenities = (amenitiesObj: any): string[] => {
            if (!amenitiesObj) return [];
            if (Array.isArray(amenitiesObj)) return amenitiesObj;
            const list: string[] = [];
            Object.values(amenitiesObj).forEach((arr: any) => {
                if (Array.isArray(arr)) list.push(...arr);
            });
            return list;
        };

        // 1. Stranda
        Object.values(strandaApartments).forEach(apt => {
            items.push({
                id: `Stranda-${apt.id}`,
                name: apt.title,
                location: 'Stranda',
                heroImage: apt.images?.[0] || '/images/hero_1.webp',
                photoCount: apt.images?.length || 0,
                guests: apt.guests || 'Brak',
                price: apt.price || 'Brak',
                calendarLinks: [
                    ...(apt.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${apt.idoBookingId}` }] : []),
                    ...(apt.icalLink ? [{ name: 'iCal', url: apt.icalLink }] : [])
                ],
                amenities: flattenAmenities(apt.amenities)
            });
        });

        // 2. Skorupki (skorupkiData properties)
        items.push({
            id: `Skorupki`,
            name: skorupkiData.title || 'Domki Skorupki',
            location: 'Skorupki',
            heroImage: skorupkiData.gallery?.heroImage || cottagesData[0]?.heroImage || '/images/skorupki/skorupki_1.webp',
            photoCount: skorupkiData.gallery?.images?.length || 58,
            guests: skorupkiData.guests || '6',
            price: skorupkiData.price || 'Brak',
            calendarLinks: [
                ...(skorupkiData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${skorupkiData.idoBookingId}` }] : []),
                ...(skorupkiData.icalUrl ? [{ name: 'iCal', url: skorupkiData.icalUrl }] : [])
            ],
            amenities: flattenAmenities(skorupkiData.amenities)
        });

        // 3. Mikołajki
        items.push({
            id: `Mikolajki-${mikolajkiData.id}`,
            name: mikolajkiData.title,
            location: 'Mikołajki',
            heroImage: mikolajkiData.gallery?.heroImage || mikolajkiData.gallery?.images?.[0] || '/images/mikolajki/mikolajki_1.webp',
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
                photoCount: kisajnoData.gallery?.images?.length || kisajnoData.images?.length || 0,
                guests: kisajnoData.guests || 'Brak',
                price: kisajnoData.price || 'Brak',
                calendarLinks: [
                    ...(kisajnoData.idoBookingId ? [{ name: 'IdoBooking', url: `https://panel.idobooking.com/reservation.php?apartment_id=${kisajnoData.idoBookingId}` }] : []),
                    ...(kisajnoData.icalUrl ? [{ name: 'iCal', url: kisajnoData.icalUrl }] : [])
                ],
                amenities: flattenAmenities(kisajnoData.amenities)
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
            <header className={`sticky top-0 z-40 border-b backdrop-blur-md px-6 py-4 flex items-center justify-between transition-colors duration-300 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                        <Layers size={22} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">Mazury Holiday</h1>
                        <p className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Przegląd Oferty (Panel)</p>
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
            <main className="p-6 max-w-7xl mx-auto">
                {/* Stats row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex items-center space-x-4 shadow-sm`}>
                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl"><Layers size={24} /></div>
                        <div>
                            <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Suma Obiektów</p>
                            <p className="text-2xl font-bold">{allItems.length}</p>
                        </div>
                    </div>
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
                                                onClick={() => setSelectedImage(item.heroImage)}
                                                className="relative group block w-16 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                title="Kliknij by powiększyć"
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
                                        <td className="px-6 py-4">
                                            {item.calendarLinks.length > 0 ? (
                                                <div className="flex space-x-2">
                                                    {item.calendarLinks.map((link, i) => (
                                                        <a 
                                                            key={i} 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center space-x-1 px-2.5 py-1 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 rounded-md text-xs font-medium transition-colors"
                                                        >
                                                            <Calendar size={12} />
                                                            <span>{link.name}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className={`text-xs italic ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>Brak linków</span>
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

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200"></div>
                    <div 
                        className="relative z-10 max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <LogOut size={20} className="rotate-180" />
                        </button>
                        <img src={selectedImage} alt="Powiększenie" className="w-full h-full object-contain bg-black/50" style={{ maxHeight: '90vh' }} />
                    </div>
                </div>
            )}
        </div>
    );
}
