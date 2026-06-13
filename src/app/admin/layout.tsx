import { AdminGate } from "@/components/admin/AdminGate";
import "../globals.css";

export default async function AdminLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <body>
                <AdminGate>{children}</AdminGate>
            </body>
        </html>
    );
}
