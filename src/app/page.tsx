"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Apartments from "@/components/Apartments";
import Footer from "@/components/Footer";
import { Anchor } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <Anchor className="mx-auto h-12 w-12 text-amber-500 mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-6 transition-colors">
            {t("intro", "title")} <span className="text-amber-500">{t("intro", "titleHighlight")}</span>
          </h2>
          <div className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed transition-colors space-y-4">
            <p>{t("intro", "p1")}</p>
            <p>{t("intro", "p2")}</p>
          </div>
        </div>
      </section>

      {/* Luxury Benefits Section */}
      <section className="relative py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/mazury-holiday/images/DJI_0017_optimized.jpg')] bg-cover bg-fixed bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-bold tracking-widest mb-4 uppercase">Zalety naszej oferty</p>
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">
              Luksus tkwi w szczegółach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Wysoka jakość wykończenia</h3>
              <p className="text-slate-300 leading-relaxed">
                W każdym naszym apartamencie zadbaliśmy o wykończenie. Mamy nadzieję, że dostrzeżesz wszystkie ukryte i widoczne szczegóły
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Widoki na jezioro</h3>
              <p className="text-slate-300 leading-relaxed">
                W piękne słoneczne dni, od wschodu do zachodu słońca - TV i filmy na Netflixie, mogą zastąpić Ci piękne widocki na jezioro Kisajno lub Dobskie
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">😴</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Sen w komfortowych warunkach</h3>
              <p className="text-slate-300 leading-relaxed">
                Sen jest niezbędny do wypoczynku i wpływa na jakość Państwa pobytu u nas. Wszystkie łóżka są wyposażone w bardzo dobre i wygodne materace
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📶</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Bezpłatne Wi-Fi</h3>
              <p className="text-slate-300 leading-relaxed">
                Na terenie naszych apartamentów przygotowaliśmy połączenie Wi-Fi. Nie jest one niezbędne podczas wypoczynku, ale pomaga np. w zdalnej pracy
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Zestaw startowy</h3>
              <p className="text-slate-300 leading-relaxed">
                Dla każdego z naszych gości przygotowaliśmy niewielki upominek, który jest elementem naszej oferty wypoczynkowej w apartamentach
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Elastyczna rezerwacja</h3>
              <p className="text-slate-300 leading-relaxed">
                Rozumiemy, że nie każdy wyjazd można w pełni zaplanować. Dlatego oferujemy elastyczne warunki rezerwacji i odwołania
              </p>
            </div>
          </div>
        </div>
      </section>

      <Apartments />

      {/* Charter Section */}
      <section id="czarter" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/mazury-holiday/images/czarter/main.webp')] bg-cover bg-fixed center" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm mb-6 border border-amber-500/30">
                {t("charter", "premiumFleet")}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t("charter", "title")}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {t("charter", "description")}
              </p>

              <ul className="space-y-4 mb-10 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⚓</span>
                  <span>Bez patentu</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  <span>Stery strumieniowe</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">❄️</span>
                  <span>Ogrzewanie & Klimatyzacja</span>
                </li>
              </ul>

              <a
                href="/mazury-holiday/czarter"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-all shadow-lg shadow-amber-500/20"
              >
                SPRAWDŹ SZCZEGÓŁY
              </a>
            </div>

            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/mazury-holiday/images/czarter/main.webp"
                alt="Jacht motorowy Stillo 30"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 text-amber-400 mb-2 font-medium">
                  <span className="text-2xl">⚓</span>
                  <span>Stillo 30 VIP</span>
                </div>
                <p className="text-white text-2xl font-serif">Luksusowy Houseboat bez patentu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
