import type { Metadata } from "next";
import ClientPage from "./page.client";

export const metadata: Metadata = {
    title: "Tawerna Stranda",
    description: "Tawerna Stranda nad jeziorem Kisajno — kuchnia sezonowa, śniadania, pizza z pieca i piwo z Browaru Stranda.",
    alternates: {
        canonical: "/tawerna",
    },
};

export default function Page() {
    return <ClientPage />;
}
