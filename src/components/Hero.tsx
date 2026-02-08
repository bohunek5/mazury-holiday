"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0"
      >
        <Image
          src="/mazury-holiday/images/apartments_2.webp"
          alt="Mazury Landscape"
          fill
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-slate-900/40" /> {/* Overlay */}
      </div>

      <div className="container relative z-10 px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
          {t("hero", "title")}
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90 max-w-3xl mx-auto uppercase">
          {t("hero", "subtitle")}
        </p>

        <div className="flex justify-center">
          <a
            href="tel:+48607241090"
            className="px-8 py-4 bg-white/10 hover:bg-amber-500 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium transition-all flex items-center justify-center gap-3 group"
          >
            <span className="p-2 bg-amber-500 rounded-full group-hover:bg-white group-hover:text-amber-500 transition-colors">
              <Phone size={20} className="text-white group-hover:text-amber-500 transition-colors" />
            </span>
            {t("hero", "charterBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}

