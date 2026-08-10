import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { kisajnoApartments } from '@/data/kisajno-data';
import Image from 'next/image';
import Link from 'next/link';

export default function KisajnoPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Navbar />
            <section className="px-4 pb-20 pt-32">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 text-center">
                        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-amber-500">Giżycko, jezioro Kisajno</p>
                        <h1 className="text-4xl text-slate-900 dark:text-white md:text-6xl">Wybierz apartament</h1>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Object.values(kisajnoApartments).map(apartment => (
                            <Link key={apartment.id} href={`/apartamenty/kisajno/${apartment.id.toLowerCase()}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                                <div className="relative h-72">
                                    <Image src={apartment.gallery.heroImage} alt={apartment.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-500">Apartament {apartment.id}</p>
                                    <h2 className="text-2xl text-slate-900 dark:text-white">{apartment.title}</h2>
                                    <p className="mt-3 text-slate-600 dark:text-slate-300">Do {apartment.guests} osób</p>
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
