const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Audyt Od A do Z - Mazury.Holiday</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 40px;
    }
    h1 {
      color: #1a56db;
      font-size: 28px;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    h2 {
      color: #2563eb;
      font-size: 22px;
      margin-top: 30px;
    }
    h3 {
      color: #1e40af;
      font-size: 18px;
    }
    p {
      margin: 10px 0;
    }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }
    .badge.success { background-color: #10b981; }
    .badge.warning { background-color: #f59e0b; }
    .badge.error { background-color: #ef4444; }
    .badge.info { background-color: #3b82f6; }
    
    .section {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
    }
    ul {
      margin-top: 5px;
      padding-left: 20px;
    }
    li {
      margin-bottom: 5px;
    }
    .footer {
      margin-top: 50px;
      font-size: 12px;
      text-align: center;
      color: #6b7280;
    }
  </style>
</head>
<body>

  <h1>Audyt Projektu: Mazury.Holiday (Od A do Z)</h1>
  <p><strong>Data audytu:</strong> 11 Czerwca 2026</p>
  <p><strong>Analiza:</strong> Kompleksowa weryfikacja technologii, UX, SEO, oraz integracji dla aplikacji Next.js Mazury Holiday.</p>

  <div class="section">
    <h2>1. Audyt Techniczny i Architektura (Next.js)</h2>
    <p><span class="badge success">Dobrze</span> <strong>App Router & React Server Components:</strong> Aplikacja jest zbudowana na najnowszym Next.js App Router (katalog <code>src/app</code>), co zapewnia świetną architekturę i skalowalność.</p>
    <p><span class="badge success">Dobrze</span> <strong>Stylizacja Tailwind CSS:</strong> Użycie TailwindCSS z wbudowanym systemem Dark Mode zapewnia nowoczesny i łatwy w modyfikacji UI.</p>
    <p><span class="badge error">Krytyczne</span> <strong>Optymalizacja Zdjęć:</strong> Do projektu zostały właśnie wgrane surowe zdjęcia o wadze dochodzącej do 5-10MB (np. z katalogu "Nowe 4K" lub "2026_sync"). Niezbędne jest skonfigurowanie komponentu <code>&lt;Image&gt;</code> (next/image) z dynamicznym ładowaniem WebP/AVIF oraz przeskalowaniem, inaczej strona będzie ładować się bardzo długo na urządzeniach mobilnych.</p>
    <p><span class="badge warning">Ostrzeżenie</span> <strong>Stan Lokalny (Zarządzanie):</strong> Zastosowano Context API (np. ChatContext, LanguageContext). Przy większym wzroście skomplikowania warto rozważyć Zustand w celu lepszej izolacji re-renderowania.</p>
  </div>

  <div class="section">
    <h2>2. Audyt SEO i Meta Tagi</h2>
    <p><span class="badge success">Dobrze</span> <strong>Główne Meta Tagi:</strong> Plik <code>layout.tsx</code> prawidłowo eksportuje podstawowe parametry Metadata, w tym tytuł i opis główny oraz podstawowe OpenGraph.</p>
    <p><span class="badge warning">Wymaga poprawy</span> <strong>SEO dla konkretnych apartamentów:</strong> Aktualnie podstrony z apartamentami (np. dynamiczne <code>/apartamenty/[id]</code>) mogą korzystać z globalnego tytułu. Warto dodać funkcję <code>generateMetadata()</code> na podstronach apartamentów, aby generować tytuł na podstawie nazwy apartamentu (np. "Apartament C z 2 sypialniami - Mazury Holiday").</p>
    <p><span class="badge info">Zalecenie</span> <strong>Mapa strony i robots.txt:</strong> Należy wygenerować dynamiczny <code>sitemap.xml</code> obejmujący wszystkie apartamenty, wpisy na blogu i podstrony, aby ułatwić indeksację Google.</p>
  </div>

  <div class="section">
    <h2>3. UX, Interfejs i Multijęzyczność</h2>
    <p><span class="badge success">Dobrze</span> <strong>Obsługa wielojęzyczności:</strong> LanguageProvider ładnie spina obsługę PL, EN i DE, co jest kluczowe w branży turystycznej.</p>
    <p><span class="badge success">Dobrze</span> <strong>Pływający Chat i Popup:</strong> Wbudowany asystent AI i promo popup to nowoczesne narzędzia sprzedażowe, podnoszące konwersję.</p>
    <p><span class="badge warning">Do weryfikacji</span> <strong>Mobilne menu:</strong> Należy upewnić się, że nawigacja na smartfonach jest łatwo dostępna jedną ręką (tzw. "thumb zone").</p>
  </div>

  <div class="section">
    <h2>4. Integracja IdoBooking</h2>
    <p><span class="badge success">Dobrze</span> <strong>Poprawki na kalendarzach:</strong> Usunięcie podkreślników i ID deweloperskich z nazw kalendarzy (np. zmiana na "Apartament C z 1 sypialnią") znacznie poprawia profesjonalny odbiór strony.</p>
    <p><span class="badge info">Uwaga</span> <strong>Rozbieżności tytułów API:</strong> Skrypt wykazał, że IdoBooking podaje np. dla ID 43 "Apartament z 2 sypialniami", a dla ID 44 "Apartament z 1 sypialnią". Twoje ustawienia zostały nadpisane ręcznie. Należy dbać, by klienci po kliknięciu "Rezerwuj" nie byli zdezorientowani różnicą w nazwie na stronie IdoBooking, jeśli te się nie pokrywają z nazwami lokalnymi.</p>
  </div>

  <div class="section">
    <h2>5. Plan Działania (A do Z - Rekomendacje)</h2>
    <ul>
      <li><strong>[Krok 1] Konwersja Grafiki:</strong> Wdrożyć skrypt konwertujący wielkie JPG do formatu WebP w trakcie budowania aplikacji (np. za pomocą pakietu <code>sharp</code>) oraz wymusić <code>next/image</code> dla galerii apartamentów.</li>
      <li><strong>[Krok 2] Dynamiczne SEO:</strong> Dodać <code>generateMetadata</code> do szablonów apartamentów i łodzi.</li>
      <li><strong>[Krok 3] Analityka:</strong> Podpiąć Google Tag Manager (GTM) oraz Google Analytics 4 z celami nastawionymi na kliknięcia w rezerwacje (IdoBooking iframe/przyciski).</li>
      <li><strong>[Krok 4] Wydajność (Core Web Vitals):</strong> Przeprowadzić test Google Lighthouse na wersji produkcyjnej serwera (Vercel lub lokalny <code>next start</code>) by usunąć zbędny kod blokujący renderowanie.</li>
    </ul>
  </div>

  <div class="footer">
    Raport wygenerowany automatycznie przez Antigravity (AI) &bull; Mazury Holiday 2026
  </div>

</body>
</html>
`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  const outputPath = '/Users/karolbohdanowicz/Downloads/Audyt_Mazury_Holiday.pdf';
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });
  
  console.log(`PDF successfully generated at ${outputPath}`);
  await browser.close();
})();
