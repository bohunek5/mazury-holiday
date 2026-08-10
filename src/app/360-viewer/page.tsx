'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { strandaApartments } from '@/data/stranda-apartments';

const Pannellum = dynamic(
  () => import('pannellum-react').then((mod) => mod.Pannellum),
  { ssr: false }
);

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

function ViewerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!id) {
    return <div className="p-8 text-center">Brak ID apartamentu</div>;
  }

  const apartment = strandaApartments[id];
  
  if (!apartment) {
    return <div className="p-8 text-center">Nie znaleziono apartamentu</div>;
  }

  // Fallback to older virtualTourImage if images array isn't present
  const images = apartment.virtualTourImages || (apartment.virtualTourImage ? [apartment.virtualTourImage] : []);

  if (images.length === 0) {
    return <div className="p-8 text-center">Brak zdjęć 360 dla tego apartamentu</div>;
  }

  const currentImage = images[currentIndex];
  const localImage = currentImage.replace(/\.(jpe?g|png)$/i, '.webp');
  
  // Format the name nicely from the path
  const formatRoomName = (path: string) => {
    const filename = path.split('/').pop() || '';
    let name = filename.replace(/\.(jpe?g|png|webp)$/i, '');
    if (name.includes('PIC_')) return `Widok ${currentIndex + 1}`;
    return name;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full h-[100dvh] relative bg-black">
      {/* Top Bar with Back Button and Title */}
      <div className="absolute top-0 left-0 w-full p-4 z-50 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
        <button 
          onClick={() => router.back()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md px-4 py-2 rounded-md flex items-center transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Powrót
        </button>
        <div className="text-white text-lg font-semibold drop-shadow-md">
          {apartment.title}
        </div>
        <div className="w-[100px]"></div> {/* Spacer for centering */}
      </div>

      <Pannellum
        key={currentImage} // Force re-render on image change
        width="100%"
        height="100%"
        image={getAssetPath(localImage)}
        pitch={0}
        yaw={0}
        hfov={115}
        autoLoad
        showZoomCtrl={true}
        showFullscreenCtrl={true}
      />

      {/* Bottom Bar for Room Selection if multiple images exist */}
      {images.length > 1 && (
        <div className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Poprzednie pomieszczenie"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-white min-w-[150px] text-center font-medium">
            {formatRoomName(currentImage)}
            <div className="text-xs text-white/70">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Następne pomieszczenie"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function VirtualTourPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-black flex items-center justify-center text-white">Ładowanie...</div>}>
      <ViewerContent />
    </Suspense>
  );
}
