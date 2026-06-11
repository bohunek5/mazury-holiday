import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// Note: To run this script without path alias issues, we will just read the files using regex or ts-node with tsconfig-paths.
// Actually, reading them dynamically via import is tricky due to `@/` aliases if we don't have tsconfig-paths setup perfectly.
// Let's use tsconfig-paths for executing this script.
import { strandaApartments } from '../src/data/stranda-apartments';
import { cottages } from '../src/data/cottages-data';
import { pokojeFuledaData } from '../src/data/pokoje-fuleda-data';
import { fuledaData } from '../src/data/fuleda-data';
import { kisajnoData } from '../src/data/kisajno-data';
import { mikolajkiData } from '../src/data/mikolajki-data';
import { skorupkiData } from '../src/data/skorupki-data';

// Combine amenities into a single string
function formatAmenities(amenities: any) {
    if (!amenities) return "";
    let parts: string[] = [];
    if (amenities.living) parts.push("Salon: " + amenities.living.join(", "));
    if (amenities.kitchen) parts.push("Kuchnia: " + amenities.kitchen.join(", "));
    if (amenities.bedroom) parts.push("Sypialnia: " + amenities.bedroom.join(", "));
    if (amenities.bathroom) parts.push("Łazienka: " + amenities.bathroom.join(", "));
    if (amenities.terrace) parts.push("Taras/Balkon: " + amenities.terrace.join(", "));
    return parts.join(" | ");
}

// Convert a dataset to a format suitable for excel
function extractDataset(datasetName: string, dataRecord: any) {
    const rows: any[] = [];
    if (!dataRecord) return rows;
    
    for (const [key, item] of Object.entries(dataRecord)) {
        const apt: any = item;
        rows.push({
            "ID Obiektu": apt.id || key,
            "Tytuł": apt.title || apt.shortTitle || "",
            "Opis (teksty)": apt.description || "",
            "Liczba gości (miejsce noclegowe)": apt.guests || "",
            "IdoSell ID (Spięte)": apt.idoBookingId || apt.idoId || "",
            "Liczba zdjęć": apt.gallery?.images?.length || 0,
            "Udogodnienia": formatAmenities(apt.amenities),
        });
    }
    return rows;
}

function run() {
    const wb = xlsx.utils.book_new();

    // 1. Strona główna
    const homepageData = [{
        "Sekcja": "Strona Główna (Home)",
        "Liczba Zdjęć (orientacyjnie)": "Około 10 (Hero, Atrakcje, Wyposażenie)",
        "Główne teksty": "Twój Luksusowy Wypoczynek na Mazurach. Poczuj magię Mazur... Zapoznaj się z naszą ofertą czarteru itp."
    }];
    const wsHome = xlsx.utils.json_to_sheet(homepageData);
    xlsx.utils.book_append_sheet(wb, wsHome, "Strona Główna");

    // 2. Apartamenty Stranda
    const wsStranda = xlsx.utils.json_to_sheet(extractDataset("Stranda", strandaApartments));
    xlsx.utils.book_append_sheet(wb, wsStranda, "Apartamenty Stranda");

    // 3. Pokoje Fuleda
    const wsPokojeFuleda = xlsx.utils.json_to_sheet(extractDataset("Pokoje Fuleda", pokojeFuledaData));
    xlsx.utils.book_append_sheet(wb, wsPokojeFuleda, "Pokoje Fuleda");

    // 4. Domki
    // cottages-data.ts actually contains all domki? Let's check its export name
    const wsDomki = xlsx.utils.json_to_sheet(extractDataset("Domki", cottages));
    xlsx.utils.book_append_sheet(wb, wsDomki, "Domki (Stranda)");

    // 5. Inne
    const wsFuleda = xlsx.utils.json_to_sheet(extractDataset("Fuleda", fuledaData));
    xlsx.utils.book_append_sheet(wb, wsFuleda, "Fuleda");

    const wsKisajno = xlsx.utils.json_to_sheet(extractDataset("Kisajno", kisajnoData));
    xlsx.utils.book_append_sheet(wb, wsKisajno, "Kisajno");

    const wsMikolajki = xlsx.utils.json_to_sheet(extractDataset("Mikolajki", mikolajkiData));
    xlsx.utils.book_append_sheet(wb, wsMikolajki, "Mikołajki");

    const wsSkorupki = xlsx.utils.json_to_sheet(extractDataset("Skorupki", skorupkiData));
    xlsx.utils.book_append_sheet(wb, wsSkorupki, "Skorupki");

    const outPath = path.resolve(process.env.HOME || '', "Downloads", "MazuryHoliday_Analiza_Strony.xlsx");
    xlsx.writeFile(wb, outPath);
    console.log(`Zapisano do: ${outPath}`);
}

run();
