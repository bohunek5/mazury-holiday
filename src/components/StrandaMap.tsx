'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

type Point = {
    id: string;
    x: number;
    y: number;
};

const buildings: Point[] = [
    { id: 'A', x: 39, y: 13 },
    { id: 'B', x: 48, y: 31 },
    { id: 'C', x: 59, y: 27 },
];

export default function StrandaMap() {
    const { t } = useLanguage();
    const mapLabels = (t('stranda', 'mapLabels') as Record<string, string>) || {};

    const extraPoints = [
        { id: 'parking', label: mapLabels.parking || 'PARKING', x: 49.0, y: 8.0, align: 'left-full top-1/2 -translate-y-1/2 ml-1.5 sm:ml-2' },
        { id: 'playground', label: mapLabels.playground || 'PLAC ZABAW', x: 37.5, y: 55.0, align: 'bottom-full right-full mb-1 sm:mb-2 mr-1 sm:mr-2' },
        { id: 'sauna', label: mapLabels.sauna || 'SAUNA', x: 32.0, y: 66.0, align: 'top-0 right-full mr-0.5 sm:mr-1' },
        { id: 'beach', label: mapLabels.beach || 'PLAŻA', x: 34.0, y: 74.0, align: 'top-1/2 right-full mt-0 mr-0.5 sm:mr-1' },
        { id: 'scooters', label: mapLabels.scooters || 'WYPOŻYCZALNIA', x: 37.0, y: 86.0, align: 'top-full left-1/2 -translate-x-1/2 mt-0.5 sm:mt-1' },
        { id: 'beachbar', label: mapLabels.beachbar || 'BEACH BAR', x: 41.0, y: 68.0, align: 'bottom-full left-1/2 mb-0.5 sm:mb-1' },
        { id: 'tavern', label: mapLabels.tavern || 'TAWERNA', x: 50.5, y: 72.0, align: 'top-full left-1/2 -translate-x-[75%] sm:-translate-x-1/2 mt-0.5 sm:mt-1' },
        { id: 'shop', label: mapLabels.shop || 'SKLEPIK', x: 58.0, y: 74.0, align: 'top-full left-1/2 -translate-x-1/2 mt-0.5 sm:mt-1' },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Outer container provides the viewport window */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[1024/457] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100">
                
                {/* Inner container holds the actual map image and scales/pans on mobile */}
                <div className="absolute md:relative w-[170%] sm:w-[150%] md:w-full left-[-30%] sm:left-[-20%] md:left-0 top-[0%] md:top-0 aspect-[1024/457]">
                    <Image 
                        src="/images/stranda_map_crop.png" 
                        alt="Mapa lokalizacji budynków Stranda" 
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority
                    />

                    {buildings.map((b) => (
                        <button 
                            key={b.id}
                            onClick={() => {
                                document.getElementById(`building-${b.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 outline-none cursor-pointer group z-40 transition-transform hover:scale-110"
                            style={{ left: `${b.x}%`, top: `${b.y}%` }}
                            aria-label={`Przejdź do budynku ${b.id}`}
                        >
                            <div className="relative flex items-center justify-center">
                                <div className="animate-ping absolute inline-flex h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 rounded-full bg-red-500 opacity-75 group-hover:bg-amber-500"></div>
                                <div className="relative flex items-center justify-center rounded-full h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 bg-red-600 group-hover:bg-amber-600 border border-white md:border-2 shadow-md text-white font-bold text-[8px] sm:text-[10px] md:text-sm transition-colors">
                                    {b.id}
                                </div>
                            </div>
                        </button>
                    ))}

                    {extraPoints.map((point) => (
                        <div 
                            key={point.id}
                            className="absolute z-30 group"
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                        >
                            <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
                                <div className="absolute inset-0 bg-white rounded-full opacity-75 animate-ping"></div>
                                <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white border border-slate-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
                            </div>

                            <div className={`absolute whitespace-nowrap text-[8px] sm:text-[10px] font-bold text-slate-800 bg-white/95 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded shadow-md border border-slate-200 pointer-events-none transition-opacity ${point.align}`}>
                                {point.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
