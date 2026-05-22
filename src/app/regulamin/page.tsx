"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function RegulaminPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 dark:text-white">
                            Regulamin serwisu
                        </h1>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
                        <p className="font-medium">
                            Poniższy Regulamin określa zasady korzystania z usług wynajmu apartamentów, domków oraz usług czarterowych oferowanych przez Mazury.Holiday. Dokonanie rezerwacji jest jednoznaczne z zapoznaniem się i akceptacją postanowień Regulaminu.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">§1. Postanowienia ogólne</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Usługodawcą i administratorem obiektu jest firma RAD'LIGHT, ul. Myśliwska 3, 11-500 Giżycko.</li>
                            <li>Niniejszy Regulamin ma zastosowanie do wszystkich rezerwacji dokonywanych poprzez stronę internetową mazury.holiday, drogą telefoniczną oraz mailową.</li>
                            <li>Doba hotelowa rozpoczyna się o godzinie 15:00 w dniu przyjazdu, a kończy o godzinie 11:00 w dniu wyjazdu.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">§2. Rezerwacja i płatności</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Rezerwacji można dokonywać za pośrednictwem systemu rezerwacyjnego, telefonicznie lub e-mailowo.</li>
                            <li>Rezerwacja uzyskuje status gwarantowanej po wpłaceniu zadatku w wysokości 30% wartości całego pobytu w terminie wyznaczonym przez Usługodawcę.</li>
                            <li>Brak wpłaty zadatku w ustalonym terminie jest równoznaczny z anulowaniem rezerwacji.</li>
                            <li>Pozostała kwota za pobyt pobierana jest najpóźniej w dniu przyjazdu, w trakcie przekazywania kluczy.</li>
                            <li>W przypadku rezygnacji z pobytu wpłacony zadatek nie podlega zwrotowi. Skrócenie pobytu nie obliguje Usługodawcy do zwrotu wniesionych opłat za niewykorzystane dni.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">§3. Zasady pobytu</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Gość zobowiązany jest do okazania dokumentu tożsamości z fotografią w momencie zameldowania.</li>
                            <li>Liczba osób przebywających w obiekcie nie może przekraczać liczby podanej w rezerwacji. Osoby niezgłoszone mogą przebywać na terenie obiektu wyłącznie w godzinach 8:00 - 22:00 za zgodą Usługodawcy.</li>
                            <li>W apartamentach oraz domkach obowiązuje całkowity zakaz palenia wyrobów tytoniowych oraz e-papierosów. Palenie dozwolone jest wyłącznie na zewnątrz w miejscach do tego wyznaczonych.</li>
                            <li>Gość ponosi pełną odpowiedzialność materialną za wszelkiego rodzaju uszkodzenia lub zniszczenia przedmiotów wyposażenia i urządzeń technicznych powstałe z jego winy lub z winy odwiedzających go osób.</li>
                            <li>W obiektach obowiązuje zachowanie ciszy nocnej od godziny 22:00 do godziny 7:00 dnia następnego.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">§4. Pobyt ze zwierzętami</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Pobyt ze zwierzętami domowymi jest możliwy wyłącznie po wcześniejszym zgłoszeniu i uzyskaniu akceptacji Usługodawcy podczas dokonywania rezerwacji.</li>
                            <li>Za pobyt zwierzęcia może zostać doliczona dodatkowa opłata zgodnie z obowiązującym cennikiem.</li>
                            <li>Właściciel zwierzęcia ponosi pełną odpowiedzialność finansową i prawną za ewentualne szkody wyrządzone przez zwierzę na terenie obiektu.</li>
                            <li>Zwierzęta nie mogą pozostawać same w apartamencie lub domku bez opieki. Psy na terenach wspólnych muszą być wyprowadzane na smyczy.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">§5. Postanowienia końcowe</h3>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Usługodawca nie ponosi odpowiedzialności za mienie Gości pozostawione w obiekcie.</li>
                            <li>Usługodawca zastrzega sobie prawo do odmowy przyjęcia Gościa, który podczas poprzedniego pobytu rażąco naruszył Regulamin, wyrządzając szkodę na mieniu obiektu lub innych Gości.</li>
                            <li>W przypadku naruszenia postanowień Regulaminu, Usługodawca ma prawo do wymeldowania Gościa w trybie natychmiastowym bez zwrotu poniesionych opłat.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
