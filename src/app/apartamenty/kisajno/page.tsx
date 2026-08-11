'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { kisajnoApartments } from '@/data/kisajno-data';
import { getAssetPath } from '@/utils/assetPath';
import Image from 'next/image';
import Link from 'next/link';

export default function KisajnoPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <section className="relative flex h-[50vh] min-h-[430px] items-center justify-center overflow-hidden">
                <Image
                    src={getAssetPath('/images/kisajno/kisajno_1.webp')}
                    alt={t('apartments', 'items.kisajno.title')}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/55" />
                <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
                    <div className="mb-5 inline-block rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold uppercase tracking-wider shadow-lg">
                        {t('apartments', 'items.kisajno.location')}
                    </div>
                    <h1 className="text-4xl font-bold md:text-7xl">{t('kisajnoHub', 'title')}</h1>
                    <p className="mt-4 text-lg font-light text-white/90 md:text-2xl">{t('kisajnoHub', 'subtitle')}</p>
                </div>
            </section>

            <section className="px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl text-slate-900 dark:text-white md:text-6xl">{t('kisajnoHub', 'chooseTitle')}</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Object.values(kisajnoApartments).map(apartment => (
                            <Link key={apartment.id} href={`/apartamenty/kisajno/${apartment.id.toLowerCase()}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                                <div className="relative h-72">
                                    <Image src={apartment.gallery.heroImage} alt={apartment.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-500">{t('kisajnoHub', 'apartmentLabel')} {apartment.id}</p>
                                    <h2 className="text-2xl text-slate-900 dark:text-white">{apartment.title}</h2>
                                    <p className="mt-3 text-slate-600 dark:text-slate-300">{t('kisajnoHub', 'upToGuests').replace('{count}', String(apartment.guests))}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
