import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicyPage() {
    const { t, language } = useLanguage();
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-amber-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <span className="text-sm font-medium uppercase tracking-widest text-amber-500">
                        {t("privacyPolicy", "title")}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 dark:text-white mb-6">
                    {t("privacyPolicy", "title")}
                </h1>

                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light border-l-4 border-amber-500 pl-6 my-8 italic">
                    {t("privacyPolicy", "intro")}
                </p>

                <div className="prose prose-lg dark:prose-invert prose-headings:font-playfair prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-a:text-amber-600 dark:prose-a:text-amber-400 hover:prose-a:text-amber-700 dark:hover:prose-a:text-amber-300 prose-strong:text-slate-800 dark:prose-strong:text-slate-200">
                    {language === 'pl' ? (
                        <>

                            <p>
                                Niniejsza Polityka dotycząca Ciasteczek odnosi się do wszystkich stron internetowych <strong>mazury.holiday</strong> nazywanych w dalszej części regulaminu Stronami mazury.holiday. Przez używanie Stron mazury.holiday wyrażasz zgodę na używanie ciasteczek zgodnie z tą Polityką Ciasteczek. Jeżeli nie zgadzasz się na używanie przez nas ciasteczek, powinieneś zmienić ustawienia swojej przeglądarki w odpowiedni sposób lub zrezygnować z używania Stron mazury.holiday.
                            </p>

                            <h2>Co to są ciasteczka?</h2>
                            <p>
                                Ciasteczka (ang. <em>cookies</em>) – niewielkie informacje tekstowe, wysyłane przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj na twardym dysku). Domyślne parametry ciasteczek pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Ciasteczka są stosowane najczęściej w przypadku liczników, sond, sklepów internetowych, stron wymagających logowania, reklam i do monitorowania aktywności odwiedzających.
                            </p>

                            <h2>Do czego używamy ciasteczek?</h2>
                            <p>Strony mazury.holiday używają ciasteczek w różnych celach:</p>
                            <ul>
                                <li>by strony mazury.holiday działały szybciej i były łatwiejsze w użyciu,</li>
                                <li>aby lepiej dopasować treści i reklamy dostępne na Stronach mazury.holiday do Twoich oczekiwań i zainteresowań,</li>
                                <li>do zbierania anonimowych, zagregowanych statystyk, które pozwalają nam zrozumieć jak ludzie używają naszych stron i pomagają w poprawianiu ich funkcjonalności i zawartości.</li>
                            </ul>
                            <p>
                                Używając ciasteczek w wyżej opisany sposób nigdy nie identyfikujemy tożsamości użytkowników na podstawie informacji przechowywanych w ciasteczkach.
                            </p>

                            <h2>Czas przechowywania danych w „cookies”</h2>
                            <p>
                                Używamy dwa rodzaje ciasteczek – <strong>sesyjne</strong> oraz <strong>stałe</strong>. Te pierwsze pozostają na Twoim urządzeniu jedynie podczas korzystania ze Stron mazury.holiday. Ciasteczka stałe pozostają na Twoim urządzeniu tak długo jak długo mają ustawiony czas funkcjonowania lub do momentu kiedy użytkownik je usunie.
                            </p>

                            <h2>Cookies podmiotów trzecich</h2>
                            <p>
                                Podczas korzystania ze Stron mazury.holiday możesz otrzymywać ciasteczka pochodzące od współpracujących z nami podmiotów trzecich takich jak np. Facebook, Google, a także od firm realizujących kampanie reklamowe. Więcej informacji na temat tych ciasteczek możesz znaleźć na stronach internetowych poszczególnych podmiotów trzecich.
                            </p>

                            <h2>Jak usunąć lub zmienić ustawienia „cookies”?</h2>
                            <p>
                                Większość przeglądarek internetowych jest początkowo ustawionych na automatyczne przyjmowanie ciasteczek. Możesz jednak zmienić ustawienia przeglądarki tak, aby ciasteczka były blokowane – w całości lub w jakiejś części, np. tylko od stron trzecich, albo aby każdorazowo otrzymywać komunikat w momencie kiedy ciasteczka są wysyłane na Twoje urządzenie.
                            </p>
                            <p>
                                Pamiętaj jednak, że jeżeli zablokujesz używane przez nas ciasteczka, może to negatywnie wpłynąć na wygodę korzystania ze Stron mazury.holiday, na przykład możesz nie być w stanie odwiedzić pewnych obszarów Stron mazury.holiday bądź nie otrzymywać spersonalizowanych informacji podczas ich przeglądania. Uniemożliwisz nam także zbieranie anonimowych informacji nt. używania naszych stron w celu stałego poprawiania zawartości Stron i usług mazury.holiday.
                            </p>
                            <p>
                                Jeśli użytkownik nie chce otrzymywać plików cookie, może zmienić ustawienia przeglądarki.
                            </p>

                            <h3>Przydatne linki</h3>
                            <p>Użytkownicy powinni przeczytać politykę ochrony prywatności tych firm, aby poznać ich zasady korzystania z plików cookie:</p>
                            <ul>
                                <li>Polityka ochrony prywatności Gemius S.A.</li>
                                <li>Polityka ochrony prywatności Google Analytics</li>
                            </ul>

                            <p>W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-6">
                                {['Chrome', 'Safari', 'Firefox', 'Opera'].map(browser => (
                                    <div key={browser} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <ExternalLink className="w-4 h-4 text-amber-500" />
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{browser}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 font-bold">Urządzenia mobilne:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-4">
                                {['Android', 'Safari (iOS)'].map(system => (
                                    <div key={system} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <ExternalLink className="w-4 h-4 text-amber-500" />
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{system}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>{t("privacyPolicy", "content")}</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
