"use client";

import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Anchor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

// Dynamically import below-the-fold components
const LuxuryBenefits = dynamic(() => import("@/components/LuxuryBenefits"));
const Apartments = dynamic(() => import("@/components/Apartments"));
const CharterSection = dynamic(() => import("@/components/CharterSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <motion.section 
        id="about" 
        className="py-16 md:py-18 bg-white dark:bg-slate-900 transition-colors duration-300 scroll-mt-20 md:scroll-mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <Anchor className="mx-auto h-12 w-12 text-amber-500 mb-6" />
          <h2 className="text-3xl md:text-4xl font-sans text-slate-900 dark:text-white mb-6 transition-colors">
            {t("intro", "title")} <span className="text-amber-500">{t("intro", "titleHighlight")}</span>
          </h2>
          <div className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-[1.5] transition-colors space-y-3">
            <p>{t("intro", "p1")}</p>
            <p>{t("intro", "p2")}</p>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <LuxuryBenefits />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Apartments />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <CharterSection />
      </motion.div>

      <Footer />
    </main>
  );
}
