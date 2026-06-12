'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    const extraPoints = [
        { id: 'parking', label: 'Parking', x: 49.0, y: 9.0, align: 'left-full top-1/2 -translate-y-1/2 ml-1.5 sm:ml-2' },
        { id: 'playground', label: 'Plac zabaw', x: 35.5, y: 54.7, align: 'right-full top-1/2 -translate-y-1/2 mr-1.5 sm:mr-2' },
        { id: 'sauna', label: 'Sauna', x: 30.5, y: 72.2, align: 'right-full top-1/2 -translate-y-1/2 mr-1.5 sm:mr-2' },
        { id: 'beach', label: 'Plaża', x: 38.1, y: 60.6, align: 'right-full top-1/2 -translate-y-1/2 mr-1.5 sm:mr-2' },
        { id: 'scooters', label: 'Wypożyczalnia skuterów', x: 26.3, y: 66.9, align: 'right-full top-1/2 -translate-y-1/2 mr-1.5 sm:mr-2' },
        { id: 'beachbar', label: 'Beach Bar', x: 41.0, y: 68.0, align: 'top-full left-1/2 -translate-x-1/2 mt-1.5 sm:mt-2' },
        { id: 'tavern', label: 'Tawerna', x: 50.0, y: 68.0, align: 'top-full left-1/2 -translate-x-1/2 mt-1.5 sm:mt-2' },
        { id: 'shop', label: 'Sklepik portowy', x: 58.0, y: 71.0, align: 'top-full left-1/2 -translate-x-1/2 mt-1.5 sm:mt-2' },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto mt-8 p-3 sm:p-5 bg-white border border-slate-200 rounded-[2rem] shadow-xl">
            <div className="relative w-full aspect-[1024/457] rounded-xl md:rounded-2xl overflow-hidden bg-sky-50">
                
                <Image 
                    src="/images/stranda_map_crop.png" 
                    alt="Mapa lokalizacji budynków Stranda" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1024px"
                    priority
                />

                {buildings.map((building) => (
                    <div 
                        key={building.id}
                        className="absolute z-20 pointer-events-none"
                        style={{ left: `${building.x}%`, top: `${building.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-red-600/90 text-white rounded-full font-bold text-[10px] sm:text-sm shadow-[0_0_10px_rgba(220,38,38,0.5)] border-2 border-white/90">
                            {building.id}
                        </div>
                    </div>
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
    );
}
