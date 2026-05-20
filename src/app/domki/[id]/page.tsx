import CottageDetailsClient from "@/components/CottageDetailsClient";

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <CottageDetailsClient id={id} />;
}
