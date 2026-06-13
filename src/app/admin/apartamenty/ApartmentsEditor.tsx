"use client";

import { useState } from "react";
import { AdminToast } from "@/components/admin/AdminToast";
import type { FuledaApartment } from "@/data/fuleda-data";
import type { Apartment } from "@/types/apartment";
import type { PokojeData } from "@/data/pokoje-fuleda-data";
import type { SkorupkiData } from "@/data/skorupki-data";
import type { KisajnoData } from "@/data/kisajno-data";
import type { MikolajkiData } from "@/data/mikolajki-data";

type ApartmentsEditorProps = {
    initialStranda: Record<string, Apartment>;
    initialFuleda: Record<string, FuledaApartment>;
    initialKisajno: KisajnoData;
    initialMikolajki: MikolajkiData;
    initialPokoje: PokojeData;
    initialSkorupki: SkorupkiData;
};

type StrandaAmenityKey = keyof Apartment["amenities"];
type FuledaAmenityKey = keyof FuledaApartment["amenities"];

function listValue(list: string[]) {
    return list.join("\n");
}

function parseList(value: string) {
    return value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);
}

export function ApartmentsEditor({
    initialStranda,
    initialFuleda,
    initialKisajno,
    initialMikolajki,
    initialPokoje,
    initialSkorupki
}: ApartmentsEditorProps) {
    const [stranda, setStranda] = useState(initialStranda);
    const [fuleda, setFuleda] = useState(initialFuleda);
    const [kisajno, setKisajno] = useState(initialKisajno);
    const [mikolajki, setMikolajki] = useState(initialMikolajki);
    const [pokoje, setPokoje] = useState(initialPokoje);
    const [skorupki, setSkorupki] = useState(initialSkorupki);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; tone: "success" | "error" } | null>(null);

    function updateStrandaApartment(id: string, field: keyof Apartment, value: any) {
        setStranda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                [field]: value
            }
        }));
    }

    function updateFuledaApartment(id: string, field: keyof FuledaApartment, value: any) {
        setFuleda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                [field]: value
            }
        }));
    }

    async function handleSave() {
        setLoading(true);

        try {
            const response = await fetch("/api/admin/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    section: "apartments",
                    payload: {
                        stranda,
                        fuleda,
                        kisajno,
                        pokoje,
                        skorupki
                    }
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error ?? "Nie udało się zapisać apartamentów.");
            }

            setToast({ message: "Apartamenty zostały zapisane.", tone: "success" });
        } catch (saveError) {
            const message =
                saveError instanceof Error
                    ? saveError.message
                    : "Nie udało się zapisać apartamentów.";
            setToast({ message, tone: "error" });
        } finally {
            setLoading(false);
            window.setTimeout(() => setToast(null), 2500);
        }
    }

    return (
        <div className="space-y-12 pb-20">
            <AdminToast message={toast?.message ?? null} tone={toast?.tone} />

            <header className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-1.5 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500/80">Management Suite</p>
                        <h2 className="mt-1 text-4xl font-sans font-bold text-white">Zarządzanie Ofertą</h2>
                    </div>
                </div>
            </header>

            {/* --- STRANDA SECTION --- */}
            <section className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                            <span className="text-lg font-bold">S</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Stranda Residence</h3>
                    </div>
                </div>

                <div className="grid gap-6">
                    {Object.values(stranda)
                        .sort((a, b) => a.id.localeCompare(b.id, 'pl'))
                        .map((apt) => (
                        <div key={apt.id} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]">
                            <div className="mb-6 flex flex-col md:flex-row md:items-center items-start justify-between gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{apt.id} — {apt.type}</h4>
                                    <p className="mt-1 text-sm text-slate-400">Stranda Residence • Mazury Holiday</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                                        <span title="Zdjęcia">📸 {apt.gallery?.images?.length ? apt.gallery.images.length + 1 : 0}</span>
                                        <span className="text-slate-500">|</span>
                                        <span title="Szacowana waga" className="text-amber-500/80">~{((apt.gallery?.images?.length ? apt.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                                        <span>🇵🇱 / 🇬🇧</span>
                                        <span className="text-emerald-400">85%</span>
                                    </div>
                                    <a href={`/apartamenty/stranda/${apt.id}`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                                    {apt.idoBookingId ? (
                                        <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                            📅 Kalendarz
                                        </a>
                                    ) : (
                                        <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                            📅 Kalendarz
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena (zł/doba)</span>
                                    <input 
                                        type="number"
                                        value={apt.price}
                                        onChange={(e) => updateStrandaApartment(apt.id, "price", Number(e.target.value))}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-amber-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Liczba gości</span>
                                    <input 
                                        value={apt.guests}
                                        onChange={(e) => updateStrandaApartment(apt.id, "guests", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-amber-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Standard</span>
                                    <input 
                                        value={apt.type}
                                        onChange={(e) => updateStrandaApartment(apt.id, "type", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-amber-500/50"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                                    <input 
                                        value={apt.idoBookingId || ''}
                                        onChange={(e) => updateStrandaApartment(apt.id, "idoBookingId", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-amber-500/50"
                                        placeholder="Np. 12345"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal (Dostępność)</span>
                                    <input 
                                        value={apt.icalUrl || ''}
                                        onChange={(e) => updateStrandaApartment(apt.id, "icalUrl", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-amber-500/50"
                                        placeholder="https://..."
                                    />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FULEDA SECTION --- */}
            <section className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
                            <span className="text-lg font-bold">F</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Apartamenty Fuleda</h3>
                    </div>
                </div>

                <div className="grid gap-6">
                    {Object.values(fuleda)
                        .sort((a, b) => a.id.localeCompare(b.id, 'pl'))
                        .map((apt) => (
                        <div key={apt.id} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]">
                            <div className="mb-6 flex flex-col md:flex-row md:items-center items-start justify-between gap-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{apt.id} — {apt.type}</h4>
                                    <p className="mt-1 text-sm text-slate-400">Apartamenty Fuleda • Mazury Holiday</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                                        <span title="Zdjęcia">📸 {apt.gallery?.images?.length ? apt.gallery.images.length + 1 : 0}</span>
                                        <span className="text-slate-500">|</span>
                                        <span title="Szacowana waga" className="text-cyan-500/80">~{((apt.gallery?.images?.length ? apt.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                                        <span>🇵🇱 / 🇬🇧</span>
                                        <span className="text-emerald-400">85%</span>
                                    </div>
                                    <a href={`/apartamenty/fuleda/${apt.id}`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                                    {apt.idoBookingId ? (
                                        <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                            📅 Kalendarz
                                        </a>
                                    ) : (
                                        <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                            📅 Kalendarz
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena (zł/doba)</span>
                                    <input 
                                        type="number"
                                        value={apt.price}
                                        onChange={(e) => updateFuledaApartment(apt.id, "price", Number(e.target.value))}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-cyan-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Liczba gości</span>
                                    <input 
                                        value={apt.guests}
                                        onChange={(e) => updateFuledaApartment(apt.id, "guests", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-cyan-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Standard</span>
                                    <input 
                                        value={apt.type}
                                        onChange={(e) => updateFuledaApartment(apt.id, "type", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-cyan-500/50"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-1">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                                    <input 
                                        value={apt.idoBookingId || ''}
                                        onChange={(e) => updateFuledaApartment(apt.id, "idoBookingId", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-cyan-500/50"
                                        placeholder="Np. 12345"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal (Dostępność)</span>
                                    <input 
                                        value={apt.icalUrl || ''}
                                        onChange={(e) => updateFuledaApartment(apt.id, "icalUrl", e.target.value)}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-cyan-500/50"
                                        placeholder="https://..."
                                    />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- KISAJNO SECTION --- */}
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                            <span className="text-lg font-bold">K</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Apartament Kisajno</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span title="Zdjęcia">📸 {kisajno.gallery?.images?.length ? kisajno.gallery.images.length + 1 : 0}</span>
                            <span className="text-slate-500">|</span>
                            <span title="Szacowana waga" className="text-indigo-400">~{((kisajno.gallery?.images?.length ? kisajno.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span>🇵🇱 / 🇬🇧</span>
                            <span className="text-emerald-400">85%</span>
                        </div>
                        <a href={`/apartamenty/kisajno`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                        {kisajno.idoBookingId ? (
                            <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                📅 Kalendarz
                            </a>
                        ) : (
                            <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                📅 Kalendarz
                            </span>
                        )}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-indigo-500/20 bg-indigo-500/5 p-10">
                    <div className="grid gap-8">
                        <div className="grid gap-6 md:grid-cols-3">
                            <label className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Nazwa obiektu</span>
                                <input 
                                    value={kisajno.title}
                                    onChange={(e) => setKisajno({...kisajno, title: e.target.value})}
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500/50"
                                />
                            </label>
                            <label className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena</span>
                                <input 
                                    type="number"
                                    value={kisajno.price}
                                    onChange={(e) => setKisajno({...kisajno, price: Number(e.target.value)})}
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500/50"
                                />
                            </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Goście</span>
                                    <input 
                                        value={kisajno.guests}
                                        onChange={(e) => setKisajno({...kisajno, guests: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                                    <input 
                                        value={kisajno.idoBookingId || ''}
                                        onChange={(e) => setKisajno({...kisajno, idoBookingId: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500/50"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal</span>
                                    <input 
                                        value={kisajno.icalUrl || ''}
                                        onChange={(e) => setKisajno({...kisajno, icalUrl: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-indigo-500/50"
                                    />
                                </label>
                            </div>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Opis szczegółowy</span>
                            <textarea 
                                value={kisajno.description}
                                onChange={(e) => setKisajno({...kisajno, description: e.target.value})}
                                rows={4}
                                className="w-full rounded-[2rem] border border-white/10 bg-slate-900/50 p-6 text-white outline-none focus:border-indigo-500/50"
                            />
                        </label>
                    </div>
                </div>
            </section>

            {/* --- MIKOLAJKI SECTION --- */}
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
                            <span className="text-lg font-bold">M</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Apartament Mikołajki</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span title="Zdjęcia">📸 {mikolajki.gallery?.images?.length ? mikolajki.gallery.images.length + 1 : 0}</span>
                            <span className="text-slate-500">|</span>
                            <span title="Szacowana waga" className="text-fuchsia-400">~{((mikolajki.gallery?.images?.length ? mikolajki.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                        </div>
                        <a href={`/apartamenty/mikolajki`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                        {mikolajki.idoBookingId ? (
                            <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                📅 Kalendarz
                            </a>
                        ) : (
                            <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                📅 Kalendarz
                            </span>
                        )}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-fuchsia-500/20 bg-fuchsia-500/5 p-10">
                    <div className="grid gap-8">
                            <div className="grid gap-6 md:grid-cols-2">
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Opis (Krótki)</span>
                                    <input 
                                        value={mikolajki.title}
                                        onChange={(e) => setMikolajki({...mikolajki, title: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-fuchsia-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena</span>
                                    <input 
                                        value={mikolajki.price}
                                        onChange={(e) => setMikolajki({...mikolajki, price: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-fuchsia-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Liczba gości</span>
                                    <input 
                                        value={mikolajki.guests}
                                        onChange={(e) => setMikolajki({...mikolajki, guests: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-fuchsia-500/50"
                                    />
                                </label>
                                <label className="space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                                    <input 
                                        value={mikolajki.idoBookingId || ''}
                                        onChange={(e) => setMikolajki({...mikolajki, idoBookingId: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-fuchsia-500/50"
                                    />
                                </label>
                                <label className="space-y-2 md:col-span-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal</span>
                                    <input 
                                        value={mikolajki.icalUrl || ''}
                                        onChange={(e) => setMikolajki({...mikolajki, icalUrl: e.target.value})}
                                        className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-fuchsia-500/50"
                                    />
                                </label>
                            </div>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Opis szczegółowy</span>
                            <textarea 
                                value={mikolajki.description}
                                onChange={(e) => setMikolajki({...mikolajki, description: e.target.value})}
                                rows={4}
                                className="w-full rounded-[2rem] border border-white/10 bg-slate-900/50 p-6 text-white outline-none focus:border-fuchsia-500/50"
                            />
                        </label>
                    </div>
                </div>
            </section>

            {/* --- POKOJE FULEDA SECTION --- */}
            <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                            <span className="text-lg font-bold">P</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Pokoje Fuleda</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span title="Zdjęcia">📸 {pokoje.gallery?.images?.length ? pokoje.gallery.images.length + 1 : 0}</span>
                            <span className="text-slate-500">|</span>
                            <span title="Szacowana waga" className="text-emerald-400">~{((pokoje.gallery?.images?.length ? pokoje.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span>🇵🇱 / 🇬🇧</span>
                            <span className="text-emerald-400">85%</span>
                        </div>
                        <a href={`/apartamenty/pokoje-fuleda`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                        {pokoje.idoBookingId ? (
                            <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                📅 Kalendarz
                            </a>
                        ) : (
                            <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                📅 Kalendarz
                            </span>
                        )}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/5 p-10">
                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Tytuł oferty</span>
                            <input 
                                value={pokoje.title}
                                onChange={(e) => setPokoje({...pokoje, title: e.target.value})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-emerald-500/50"
                            />
                        </label>
                            <label className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena tekstowa (np. od 375 zł)</span>
                                <input 
                                    value={pokoje.price}
                                    onChange={(e) => setPokoje({...pokoje, price: e.target.value})}
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-emerald-500/50"
                                />
                            </label>
                            <label className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                                <input 
                                    value={pokoje.idoBookingId || ''}
                                    onChange={(e) => setPokoje({...pokoje, idoBookingId: e.target.value})}
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-emerald-500/50"
                                />
                            </label>
                            <label className="space-y-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal</span>
                                <input 
                                    value={pokoje.icalUrl || ''}
                                    onChange={(e) => setPokoje({...pokoje, icalUrl: e.target.value})}
                                    className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-emerald-500/50"
                                />
                            </label>
                        </div>
                </div>
            </section>

             <section className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between px-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
                            <span className="text-lg font-bold">S</span>
                        </div>
                        <h3 className="text-2xl font-sans font-bold text-white">Domki Skorupki</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span title="Zdjęcia">📸 {skorupki.gallery?.images?.length ? skorupki.gallery.images.length + 1 : 0}</span>
                            <span className="text-slate-500">|</span>
                            <span title="Szacowana waga" className="text-rose-400">~{((skorupki.gallery?.images?.length ? skorupki.gallery.images.length + 1 : 0) * 1.8).toFixed(1)} MB</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                            <span>🇵🇱 / 🇬🇧</span>
                            <span className="text-emerald-400">85%</span>
                        </div>
                        <a href={`/apartamenty/skorupki`} target="_blank" className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition-colors">Podgląd</a>
                        {skorupki.idoBookingId ? (
                            <a href={`https://panel.idobooking.com/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2">
                                📅 Kalendarz
                            </a>
                        ) : (
                            <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 cursor-not-allowed" title="Brak ID IdoBooking">
                                📅 Kalendarz
                            </span>
                        )}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-rose-500/20 bg-rose-500/5 p-10">
                    <div className="grid gap-6 md:grid-cols-3">
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Cena</span>
                            <input 
                                type="number"
                                value={skorupki.price}
                                onChange={(e) => setSkorupki({...skorupki, price: Number(e.target.value)})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-rose-500/50"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Liczba gości</span>
                            <input 
                                value={skorupki.guests}
                                onChange={(e) => setSkorupki({...skorupki, guests: e.target.value})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-rose-500/50"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Liczba jednostek</span>
                            <input 
                                type="number"
                                value={skorupki.unitsCount}
                                onChange={(e) => setSkorupki({...skorupki, unitsCount: Number(e.target.value)})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-rose-500/50"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">ID IdoBooking</span>
                            <input 
                                value={skorupki.idoBookingId || ''}
                                onChange={(e) => setSkorupki({...skorupki, idoBookingId: e.target.value})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-rose-500/50"
                            />
                        </label>
                        <label className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Link iCal</span>
                            <input 
                                value={skorupki.icalUrl || ''}
                                onChange={(e) => setSkorupki({...skorupki, icalUrl: e.target.value})}
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-white outline-none focus:border-rose-500/50"
                            />
                        </label>
                    </div>
                </div>
            </section>

            <div className="sticky bottom-8 flex justify-end">
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-amber-500 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 shadow-[0_10px_40px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:bg-amber-400"
                >
                    <span className="relative z-10">{loading ? "Zapisywanie..." : "Publikuj zmiany A-Z"}</span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
            </div>
        </div>
    );
}
