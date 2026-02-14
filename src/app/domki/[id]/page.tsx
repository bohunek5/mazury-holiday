import CottageDetailsClient from "@/components/CottageDetailsClient";

export function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default function Page({ params }: { params: { id: string } }) {
    return <CottageDetailsClient id={params.id} />;
}
