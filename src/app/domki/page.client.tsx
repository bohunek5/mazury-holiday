'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { skorupkiData } from '@/data/skorupki-data';
import { fuledzkieZaciszeData } from '@/data/fuledzkie-zacisze-data';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DomkiPage() {
    const { t } = useLanguage();
    const hub = t('cottagePages', 'hub') as Record<string, string>;
    const cottages = [
        { id: 'skorupki', title: hub.skorupkiTitle, location: hub.skorupkiLocation, image: skorupkiData.gallery.heroImage },
        { id: 'fuledzkie-zacisze', title: hub.fuledzkieTitle, location: hub.fuledzkieLocation, image: fuledzkieZaciszeData.gallery.heroImage },
    ];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />

            <section className="relative flex h-[60vh] min-h-[430px] items-center justify-center overflow-hidden">
                <Image
                    src={skorupkiData.gallery.heroImage}
                    alt={hub.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-slate-950/50" />
                <div className="relative z-10 px-4 text-center text-white">
                    <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-amber-400">{hub.eyebrow}</p>
                    <h1 className="text-4xl md:text-7xl">{hub.title}</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-2xl">
                        {hub.description}
                    </p>
                </div>
            </section>

            <section className="px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-4xl text-slate-900 dark:text-white md:text-6xl">{hub.chooseTitle}</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {cottages.map(cottage => (
                            <Link key={cottage.id} href={`/domki/${cottage.id}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                                <div className="relative h-72">
                                    <Image src={cottage.image} alt={cottage.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-500">{cottage.location}</p>
                                    <h2 className="text-2xl text-slate-900 dark:text-white">{cottage.title}</h2>
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
