'use client';

import React from 'react';
import Image from 'next/image';

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
    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Outer container provides the viewport window */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[1024/457] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100">
                
                {/* Inner container holds the actual map image and scales/pans on mobile */}
                <div className="absolute md:relative w-[170%] sm:w-[150%] md:w-full left-[-40%] sm:left-[-25%] md:left-0 top-[0%] md:top-0 aspect-[1024/457]">
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
                            onClick={() => document.getElementById(`building-${b.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300 group outline-none"
                            style={{ left: `${b.x}%`, top: `${b.y}%` }}
                            title={`Przejdź do budynków ${b.id}`}
                        >
                            <div className="relative flex items-center justify-center">
                                <div className="animate-ping absolute inline-flex h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 rounded-full bg-red-500 opacity-75 group-hover:bg-red-400"></div>
                                <div className="relative flex items-center justify-center rounded-full h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 bg-red-600 border border-white md:border-2 shadow-md text-white font-bold text-[10px] sm:text-xs md:text-base group-hover:bg-red-500">
                                    {b.id}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
