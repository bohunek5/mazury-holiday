"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export default function RodoPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white">
                            Klauzula informacyjna (RODO)
                        </h1>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
                        <p className="font-medium text-slate-900 dark:text-slate-200">
                            Zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. (Dz. Urz. UE L 119 z 04.05.2016) informuję, iż:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Administratorem Pani/Pana danych osobowych jest:</strong> RAD'LIGHT, Myśliwska 3, 11-500 Giżycko.
                            </li>
                            <li>
                                <strong>Kontakt z Administratorem Danych Osobowych:</strong> rezerwacje@mazury.holiday
                            </li>
                            <li>
                                Pani/Pana dane osobowe przetwarzane będą w celach wykonania usługi na podstawie Art. 6 ust. 1 lit. a ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r.
                            </li>
                            <li>
                                Pani/Pana dane osobowe przechowywane będą do momentu odwołania zgody.
                            </li>
                            <li>
                                Posiada Pani/Pan prawo do żądania od administratora dostępu do danych osobowych, prawo do ich sprostowania usunięcia lub ograniczenia przetwarzania, prawo do cofnięcia zgody oraz prawo do przenoszenia danych.
                            </li>
                            <li>
                                Podanie danych osobowych jest dobrowolne, jednakże niepodanie danych może skutkować niemożliwością skontaktowania się z Państwem w celu wykonania usługi. Jednocześnie zgodnie z art.6 ust.1 lit. a ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu telefonicznego lub e-mail dotyczącego ustalenia wykonania usługi.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
