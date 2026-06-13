import ApartmentDetailClient from "./ApartmentDetailClient";
import { strandaApartments } from "@/data/stranda-apartments";

export async function generateStaticParams() {
    const allIds = Object.keys(strandaApartments);
    const locales = ['pl', 'en', 'de', 'lt', 'cs'];
    const params = [];
    for (const locale of locales) {
        for (const id of allIds) {
            params.push({ locale, id });
        }
    }
    return params;
}

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ApartmentDetailClient id={id} />;
}
