"use client";

import { useState } from "react";
import { AdminToast } from "@/components/admin/AdminToast";
import type { FuledaApartment } from "@/data/fuleda-data";
import type { Apartment } from "@/types/apartment";

type KisajnoData = {
    id: string;
    title: string;
    price: number;
    guests: string;
    description: string;
    amenities: string[];
    gallery: {
        heroImage: string;
        images: string[];
    };
    idoBookingId?: string;
    icalUrl?: string;
};

type ApartmentsEditorProps = {
    initialStranda: Record<string, Apartment>;
    initialFuleda: Record<string, FuledaApartment>;
    initialKisajno: KisajnoData;
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
    initialKisajno
}: ApartmentsEditorProps) {
    const [stranda, setStranda] = useState(initialStranda);
    const [fuleda, setFuleda] = useState(initialFuleda);
    const [kisajno, setKisajno] = useState(initialKisajno);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; tone: "success" | "error" } | null>(null);

    function updateStrandaApartment(id: string, field: keyof Apartment, value: Apartment[keyof Apartment]) {
        setStranda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                [field]: value
            }
        }));
    }

    function updateStrandaAmenities(id: string, key: StrandaAmenityKey, value: string) {
        setStranda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                amenities: {
                    ...current[id].amenities,
                    [key]: parseList(value)
                }
            }
        }));
    }

    function updateFuledaApartment(id: string, field: keyof FuledaApartment, value: FuledaApartment[keyof FuledaApartment]) {
        setFuleda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                [field]: value
            }
        }));
    }

    function updateFuledaAmenities(id: string, key: FuledaAmenityKey, value: string) {
        setFuleda((current) => ({
            ...current,
            [id]: {
                ...current[id],
                amenities: {
                    ...current[id].amenities,
                    [key]: parseList(value)
                }
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
                        kisajno
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
        <div className="space-y-8">
            <AdminToast message={toast?.message ?? null} tone={toast?.tone} />

            <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs uppercase tracking-widest text-amber-300/90">Apartamenty</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Edytor obiektów noclegowych</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    Ta sekcja zapisuje dane do plików `stranda-apartments.ts`, `fuleda-data.ts` i `kisajno-data.ts`.
                    Każdy rekord ma link do publicznego podglądu.
                </p>
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Stranda Residence</h3>
                    <span className="text-sm text-slate-400">{Object.keys(stranda).length} apartamentów</span>
                </div>

                {Object.values(stranda).map((apartment) => (
                    <details
                        key={apartment.id}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                            <div>
                                <p className="text-lg font-semibold">{apartment.id}</p>
                                <p className="text-sm text-slate-400">
                                    {apartment.type} • {apartment.price} zł • max {apartment.guests}
                                </p>
                            </div>
                            <a
                                href={`/apartamenty/stranda/${apartment.id}`}
                                onClick={(event) => event.stopPropagation()}
                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-amber-400/40 hover:text-white"
                            >
                                Podgląd na stronie
                            </a>
                        </summary>

                        <div className="mt-6 grid gap-6">
                            <div className="grid gap-4 md:grid-cols-3">
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Nazwa</span>
                                    <input
                                        value={apartment.type}
                                        onChange={(event) => updateStrandaApartment(apartment.id, "type", event.target.value)}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Cena</span>
                                    <input
                                        type="number"
                                        value={apartment.price}
                                        onChange={(event) => updateStrandaApartment(apartment.id, "price", Number(event.target.value))}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Max osób</span>
                                    <input
                                        value={apartment.guests}
                                        onChange={(event) => updateStrandaApartment(apartment.id, "guests", event.target.value)}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                            </div>

                            <label className="grid gap-2 text-sm text-slate-300">
                                <span>Opis</span>
                                <textarea
                                    value={apartment.description}
                                    onChange={(event) => updateStrandaApartment(apartment.id, "description", event.target.value)}
                                    rows={7}
                                    className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                />
                            </label>

                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {(
                                    [
                                        ["living", "Salon"],
                                        ["kitchen", "Kuchnia"],
                                        ["bedroom", "Sypialnia"],
                                        ["bathroom", "Łazienka"],
                                        ["terrace", "Taras"]
                                    ] as Array<[StrandaAmenityKey, string]>
                                ).map(([key, label]) => (
                                    <label key={key} className="grid gap-2 text-sm text-slate-300">
                                        <span>{label}</span>
                                        <textarea
                                            value={listValue(apartment.amenities[key])}
                                            onChange={(event) => updateStrandaAmenities(apartment.id, key, event.target.value)}
                                            rows={6}
                                            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </details>
                ))}
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Fuleda</h3>
                    <span className="text-sm text-slate-400">{Object.keys(fuleda).length} apartamenty</span>
                </div>

                {Object.values(fuleda).map((apartment) => (
                    <details
                        key={apartment.id}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                            <div>
                                <p className="text-lg font-semibold">{apartment.id}</p>
                                <p className="text-sm text-slate-400">
                                    {apartment.type} • {apartment.price} zł • max {apartment.guests}
                                </p>
                            </div>
                            <a
                                href={`/apartamenty/fuleda/${apartment.id}`}
                                onClick={(event) => event.stopPropagation()}
                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-amber-400/40 hover:text-white"
                            >
                                Podgląd na stronie
                            </a>
                        </summary>

                        <div className="mt-6 grid gap-6">
                            <div className="grid gap-4 md:grid-cols-3">
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Nazwa</span>
                                    <input
                                        value={apartment.type}
                                        onChange={(event) => updateFuledaApartment(apartment.id, "type", event.target.value)}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Cena</span>
                                    <input
                                        type="number"
                                        value={apartment.price}
                                        onChange={(event) => updateFuledaApartment(apartment.id, "price", Number(event.target.value))}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm text-slate-300">
                                    <span>Max osób</span>
                                    <input
                                        value={apartment.guests}
                                        onChange={(event) => updateFuledaApartment(apartment.id, "guests", event.target.value)}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                    />
                                </label>
                            </div>

                            <label className="grid gap-2 text-sm text-slate-300">
                                <span>Opis</span>
                                <textarea
                                    value={apartment.description}
                                    onChange={(event) => updateFuledaApartment(apartment.id, "description", event.target.value)}
                                    rows={6}
                                    className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                />
                            </label>

                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {(
                                    [
                                        ["living", "Salon"],
                                        ["kitchen", "Kuchnia"],
                                        ["bedroom", "Sypialnia"],
                                        ["bathroom", "Łazienka"],
                                        ["terrace", "Taras"]
                                    ] as Array<[FuledaAmenityKey, string]>
                                ).map(([key, label]) => (
                                    <label key={key} className="grid gap-2 text-sm text-slate-300">
                                        <span>{label}</span>
                                        <textarea
                                            value={listValue(apartment.amenities[key])}
                                            onChange={(event) => updateFuledaAmenities(apartment.id, key, event.target.value)}
                                            rows={5}
                                            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </details>
                ))}
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Kisajno</h3>
                        <p className="mt-1 text-sm text-slate-400">Pojedynczy rekord oferty</p>
                    </div>
                    <a
                        href="/apartamenty/kisajno"
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-amber-400/40 hover:text-white"
                    >
                        Podgląd na stronie
                    </a>
                </div>

                <div className="mt-6 grid gap-6">
                    <div className="grid gap-4 md:grid-cols-3">
                        <label className="grid gap-2 text-sm text-slate-300">
                            <span>Nazwa</span>
                            <input
                                value={kisajno.title}
                                onChange={(event) => setKisajno((current) => ({ ...current, title: event.target.value }))}
                                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                            />
                        </label>
                        <label className="grid gap-2 text-sm text-slate-300">
                            <span>Cena</span>
                            <input
                                type="number"
                                value={kisajno.price}
                                onChange={(event) => setKisajno((current) => ({ ...current, price: Number(event.target.value) }))}
                                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                            />
                        </label>
                        <label className="grid gap-2 text-sm text-slate-300">
                            <span>Max osób</span>
                            <input
                                value={kisajno.guests}
                                onChange={(event) => setKisajno((current) => ({ ...current, guests: event.target.value }))}
                                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                            />
                        </label>
                    </div>

                    <label className="grid gap-2 text-sm text-slate-300">
                        <span>Opis</span>
                        <textarea
                            value={kisajno.description}
                            onChange={(event) => setKisajno((current) => ({ ...current, description: event.target.value }))}
                            rows={7}
                            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                        />
                    </label>

                    <label className="grid gap-2 text-sm text-slate-300">
                        <span>Lista udogodnień</span>
                        <textarea
                            value={listValue(kisajno.amenities)}
                            onChange={(event) => setKisajno((current) => ({ ...current, amenities: parseList(event.target.value) }))}
                            rows={6}
                            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-amber-400"
                        />
                    </label>
                </div>
            </section>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={handleSave}
                    disabled={loading}
                    className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Zapisywanie..." : "Zapisz apartamenty"}
                </button>
            </div>
        </div>
    );
}
