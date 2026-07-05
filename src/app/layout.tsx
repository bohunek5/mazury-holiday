import type { Metadata, Viewport } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
});


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mazuryholiday.pl"),
  title: {
    default: "Mazury.Holiday - Apartamenty, Domki, Pokoje i Czarter na Mazurach",
    template: "%s | Mazury.Holiday"
  },
  description: "Luksusowe apartamenty w Giżycku (Stranda, Kisajno), domki w Skorupkach, pokoje w Fuledzie oraz czarter jachtów na Mazurach. Sprawdź i zarezerwuj online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mazury.Holiday - Noclegi i Czarter na Mazurach",
    description: "Luksusowe apartamenty w Giżycku (Stranda, Kisajno), domki w Skorupkach, pokoje w Fuledzie oraz czarter jachtów na Mazurach.",
    url: "https://mazuryholiday.pl",
    siteName: "Mazury.Holiday",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // We assume a default OG image exists or will be added
        width: 1200,
        height: 630,
        alt: "Mazury.Holiday - Wypoczynek na Mazurach",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazury.Holiday - Noclegi i Czarter na Mazurach",
    description: "Luksusowe apartamenty w Giżycku, domki w Skorupkach i czarter jachtów.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ChatProvider } from "@/contexts/ChatContext";
import { AiAssistant } from "@/components/AiAssistant";
import { CookieConsent } from "@/components/CookieConsent";
import { PromoPopup } from "@/components/PromoPopup";
import { StructuredData } from "@/components/StructuredData";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
                window.location.href = window.location.href.replace('http:', 'https:');
              }
            `,
          }}
        />
        <StructuredData data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mazury.Holiday",
            "url": "https://mazuryholiday.pl",
            "logo": "https://mazuryholiday.pl/icon.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+48 730 067 027",
              "contactType": "customer service"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://mazuryholiday.pl",
            "name": "Mazury.Holiday",
            "description": "Luksusowe apartamenty, domki i czarter jachtów na Mazurach."
          },
          {
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Mazury.Holiday",
            "image": "https://mazuryholiday.pl/icon.svg",
            "description": "Luksusowe apartamenty w Giżycku i Fuledzie, domki w Skorupkach oraz czarter jachtów na Mazurach.",
            "url": "https://mazuryholiday.pl",
            "telephone": "+48 730 067 027",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Myśliwska 3",
              "addressLocality": "Giżycko",
              "postalCode": "11-500",
              "addressRegion": "warmińsko-mazurskie",
              "addressCountry": "PL"
            },
            "brand": {
              "@type": "Brand",
              "name": "Ralight.pl - Zarządzanie Najmem",
              "url": "https://ralight.pl"
            }
          }
        ]} />
      </head>
      <body
        className={`${inter.variable} ${lato.variable} antialiased bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AccessibilityProvider>
              <ChatProvider>
                {children}
                <AiAssistant />
                <CookieConsent />
                <PromoPopup />
              </ChatProvider>
            </AccessibilityProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
