import "../globals.css";

export default function AdminPanelLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    );
}
