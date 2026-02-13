import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mazury.Holiday - Apartamenty - Domki - Pokoje i Czarter na Mazurach",
  description: "Luksusowe apartamenty w Giżycku i Fuledzie, domki w Skorupkach oraz czarter jachtów na Mazurach. Sprawdź naszą ofertę.",
  openGraph: {
    title: "Mazury.Holiday - Apartamenty - Domki - Pokoje i Czarter na Mazurach",
    description: "Luksusowe apartamenty w Giżycku i Fuledzie, domki w Skorupkach oraz czarter jachtów na Mazurach. Sprawdź naszą ofertę.",
    url: "https://mazury.holiday",
    siteName: "Mazury.Holiday",
    locale: "pl_PL",
    type: "website",
  },
};

import { ChatProvider } from "@/contexts/ChatContext";
import { AiAssistant } from "@/components/AiAssistant";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ChatProvider>
              {children}
              <AiAssistant />
            </ChatProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
