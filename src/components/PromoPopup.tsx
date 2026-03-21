"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, ArrowRight, Sparkles } from "lucide-react";

interface PromoPopupProps {
  imagePath?: string;
}

export function PromoPopup({ imagePath = "/images/DJI_0017.webp" }: PromoPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const isClosed = localStorage.getItem("mh-promo-sunday-closed");
    if (isClosed) return;

    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    }, 7000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasBeenShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("mh-promo-sunday-closed", "true");
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40, rotateX: 5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-[12px] overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 dark:border-white/10 flex flex-col md:flex-row"
          >
            {/* Visual Side (Image) */}
            <div className="relative h-64 md:h-auto md:w-[45%] overflow-hidden group">
               <Image 
                  src={imagePath} 
                  alt="Mazury Holiday Aerial View" 
                  fill 
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  priority
                />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10 dark:md:to-slate-900/20" />
               
               {/* Image Overlay Label */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 }}
                 className="absolute bottom-6 left-6 flex items-center gap-2 text-white/90 text-[10px] font-medium tracking-[0.1em]"
               >
                 <Sparkles className="w-3 h-3 text-orange-400" />
                 EKSKLUZYWNA LOKALIZACJA
               </motion.div>
            </div>

            {/* Content Side */}
            <div className="relative flex-1 p-8 md:p-14 flex flex-col justify-center items-start overflow-hidden">
              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

              <motion.button
                variants={itemVariants}
                onClick={handleClose}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors z-20 group"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5 text-slate-400 group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              <motion.div variants={itemVariants} className="mb-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-600/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-600/20 shadow-sm">
                    Rezerwacja Bezpośrednia
                 </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants} 
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight font-serif italic"
              >
                Ciesz się niedzielą <br />
                <span className="text-orange-600 dark:text-orange-500 font-sans not-italic">aż do 18:00</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 mb-10 max-w-sm leading-relaxed text-base">
                Zostań z nami dłużej bez dodatkowych opłat. Rezerwując pobyt przez naszą stronę, sprawiamy, że Twój weekend trwa w nieskończoność.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={() => {
                    handleClose();
                    window.location.href = "/#rezerwacja";
                  }}
                  className="group relative flex-1 sm:flex-initial bg-[#E94E1B] hover:bg-[#d14418] text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-wider text-sm">Zarezerwuj teraz</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Button Shine Effect */}
                  <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/20 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-700 pointer-events-none" />
                </button>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                className="mt-10 flex items-center gap-6 pt-10 border-t border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center gap-2 opacity-60">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Do 30.04.2026</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/10" />
                <div className="flex items-center gap-2 opacity-60">
                   <Sparkles className="w-4 h-4 text-orange-500" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Premium Only</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
