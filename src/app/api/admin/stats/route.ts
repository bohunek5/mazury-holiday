import { NextResponse } from 'next/server';
import { strandaApartments } from '@/data/stranda-apartments';
import { skorupkiData } from '@/data/skorupki-data';
import { mikolajkiData } from '@/data/mikolajki-data';
import { pokojeFuledaData } from '@/data/pokoje-fuleda-data';
import { fuledaApartments } from '@/data/fuleda-data';
import { kisajnoData } from '@/data/kisajno-data';
import { cottagesData } from '@/data/cottages-data';
import fs from 'fs';
import path from 'path';

// Helper to count translated fields in an object
function checkTranslations(obj: any) {
    let total = 0;
    let translatedEn = 0;
    let translatedDe = 0;

    const checkNode = (node: any) => {
        if (!node || typeof node !== 'object') return;
        
        // Base keys that usually need translation
        const translatableKeys = ['title', 'description', 'subtitle', 'label', 'text'];
        
        for (const key of translatableKeys) {
            if (node[key] && typeof node[key] === 'string') {
                total++;
                if (node[`${key}En`]) translatedEn++;
                if (node[`${key}De`]) translatedDe++;
            }
        }

        // Recursively check
        Object.values(node).forEach(val => {
            if (Array.isArray(val)) {
                val.forEach(item => checkNode(item));
            } else if (val && typeof val === 'object') {
                checkNode(val);
            }
        });
    };

    checkNode(obj);
    return { total, translatedEn, translatedDe };
}

function getFileSize(urlPath: string): number {
    try {
        if (!urlPath || urlPath.startsWith('http')) return 0;
        // remove query params if any
        const cleanPath = urlPath.split('?')[0];
        const filePath = path.join(process.cwd(), 'public', cleanPath);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            return stats.size;
        }
    } catch (e) {
        console.error("Error reading file stat", urlPath, e);
    }
    return 0;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { imagesByItem } = body; // { [id]: string[] }

        // 1. Calculate File Sizes
        const sizesByItem: Record<string, string> = {};
        let totalSizeAll = 0;

        if (imagesByItem) {
            for (const [id, images] of Object.entries(imagesByItem)) {
                let totalBytes = 0;
                const imgArray = images as string[];
                imgArray.forEach(img => {
                    totalBytes += getFileSize(img);
                });
                totalSizeAll += totalBytes;
                sizesByItem[id] = (totalBytes / (1024 * 1024)).toFixed(2); // MB
            }
        }

        // 2. Calculate Translations
        const allData = [strandaApartments, skorupkiData, mikolajkiData, pokojeFuledaData, fuledaApartments, kisajnoData, cottagesData];
        let globalTotal = 0;
        let globalEn = 0;
        let globalDe = 0;

        allData.forEach(data => {
            const res = checkTranslations(data);
            globalTotal += res.total;
            globalEn += res.translatedEn;
            globalDe += res.translatedDe;
        });

        // Calculate percentage (rounded to nearest 5%)
        const roundTo5 = (val: number) => Math.round(val / 5) * 5;
        
        const pctEnRaw = globalTotal > 0 ? (globalEn / globalTotal) * 100 : 0;
        const pctDeRaw = globalTotal > 0 ? (globalDe / globalTotal) * 100 : 0;

        const translationStats = {
            en: roundTo5(pctEnRaw),
            de: roundTo5(pctDeRaw),
            totalSizeAllMB: (totalSizeAll / (1024 * 1024)).toFixed(2)
        };

        return NextResponse.json({ sizesByItem, translationStats });
    } catch (error) {
        console.error("Stats API error:", error);
        return NextResponse.json({ error: "Failed to calculate stats" }, { status: 500 });
    }
}
