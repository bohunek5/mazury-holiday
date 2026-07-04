import { strandaApartments } from "@/data/stranda-apartments";
import { fuledaApartments } from "@/data/fuleda-data";
import { kisajnoData } from "@/data/kisajno-data";
import { mikolajkiData } from "@/data/mikolajki-data";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import { czarterData } from "@/data/czarter-data";
import ICalCalendar from "@/components/ICalCalendar";

export default function KalendarzePage() {
    // Generowanie tablicy danych
    const list = [
        ...Object.entries(strandaApartments).map(([id, data]) => ({
            lokalizacja: "Stranda",
            kod: id,
            nazwa: typeof data.title === 'string' ? data.title : data.id,
            ido: data.idoBookingId,
            icalUrl: data.icalUrl,
            url: data.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${data.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        })),
        ...Object.entries(fuledaApartments).map(([id, data]) => ({
            lokalizacja: "Fuleda (Domki)",
            kod: id,
            nazwa: id,
            ido: data.idoBookingId,
            icalUrl: data.icalUrl,
            url: data.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${data.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        })),
        {
            lokalizacja: "Kisajno",
            kod: "kisajno",
            nazwa: typeof kisajnoData.title === 'string' ? kisajnoData.title : (kisajnoData.title as any)?.pl || "Willa Kisajno",
            ido: kisajnoData.idoBookingId,
            icalUrl: kisajnoData.icalUrl,
            url: kisajnoData.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${kisajnoData.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        },
        {
            lokalizacja: "Mikołajki",
            kod: "mikolajki",
            nazwa: typeof mikolajkiData.title === 'string' ? mikolajkiData.title : (mikolajkiData.title as any)?.pl || "Apartament Mikołajki",
            ido: mikolajkiData.idoBookingId,
            icalUrl: mikolajkiData.icalUrl,
            url: mikolajkiData.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${mikolajkiData.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        },
        {
            lokalizacja: "Fuleda (Pokoje)",
            kod: "pokoje",
            nazwa: typeof pokojeFuledaData.title === 'string' ? pokojeFuledaData.title : (pokojeFuledaData.title as any)?.pl || "Pokoje",
            ido: pokojeFuledaData.idoBookingId,
            icalUrl: pokojeFuledaData.icalUrl,
            url: pokojeFuledaData.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${pokojeFuledaData.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        },
        {
            lokalizacja: "Czarter",
            kod: czarterData.id,
            nazwa: czarterData.title,
            ido: czarterData.idoBookingId,
            icalUrl: czarterData.icalUrl,
            url: czarterData.idoBookingId ? `https://client37851.idobooking.com/book-now/index.php?ob[${czarterData.idoBookingId}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1` : null
        }
    ].filter(i => i.ido || i.icalUrl);

    return (
        <div className="w-full space-y-6">
            <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/30 w-full">
                <p className="text-xs uppercase tracking-widest text-amber-300/90">
                    IdoBooking
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                    Zestawienie Kalendarzy
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                    Poniżej znajduje się podgląd kalendarzy wszystkich obiektów. Każdy panel zawiera bezpośredni link do systemu rezerwacyjnego.
                </p>
            </section>

            <section className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                    {list.map((item, index) => (
                        <div key={index} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-lg transition hover:bg-white/10">
                            <div className="p-5 border-b border-white/10 flex flex-col items-center text-center space-y-2">
                                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                                    {item.lokalizacja}
                                </span>
                                <h3 className="font-bold text-lg text-white leading-tight">
                                    {item.kod.toUpperCase()} - {item.nazwa}
                                </h3>
                                <p className="text-sm font-medium text-slate-400">
                                    ID (IDO): <span className="text-amber-300">{item.ido || "Brak"}</span>
                                </p>
                                
                                {item.url && (
                                    <a 
                                        href={item.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-2 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center justify-center gap-1"
                                    >
                                        Idź do IdoBooking
                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                )}
                            </div>
                            
                            <div className="p-4 flex-1 flex flex-col bg-slate-950/50">
                                {item.icalUrl ? (
                                    <div className="scale-90 origin-top w-[111%] -mb-[10%]">
                                        <ICalCalendar icalUrl={item.icalUrl} apartmentId={item.kod} />
                                    </div>
                                ) : (
                                    <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 text-sm text-slate-400">
                                        Brak linku iCal
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
