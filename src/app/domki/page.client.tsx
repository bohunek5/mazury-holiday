'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { skorupkiData } from '@/data/skorupki-data';
import { fuledzkieZaciszeData } from '@/data/fuledzkie-zacisze-data';
import Image from 'next/image';
import Link from 'next/link';

const cottages = [
    { id: 'skorupki', title: 'Domki Skorupki', location: 'Skorupki, jezioro Tałty', image: skorupkiData.gallery.heroImage },
    { id: 'fuledzkie-zacisze', title: fuledzkieZaciszeData.title, location: 'Fuleda', image: fuledzkieZaciszeData.gallery.heroImage },
];

export default function DomkiPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <section className="px-4 pb-20 pt-32">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-amber-500">Mazury Holiday</p>
                        <h1 className="text-4xl text-slate-900 dark:text-white md:text-6xl">Wybierz domek</h1>
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
