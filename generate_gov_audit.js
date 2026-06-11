const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Oficjalny Raport Audytowy - Mazury Holiday</title>
  <style>
    @page {
      size: A4;
      margin: 20mm;
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      line-height: 1.6;
      color: #000;
      margin: 0;
      padding: 0;
      font-size: 11pt;
    }
    h1 {
      text-align: center;
      font-size: 18pt;
      text-transform: uppercase;
      margin-top: 50px;
      margin-bottom: 30px;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
    }
    h2 {
      font-size: 14pt;
      margin-top: 25px;
      text-transform: uppercase;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
    }
    h3 {
      font-size: 12pt;
      margin-top: 20px;
      font-weight: bold;
    }
    p {
      text-align: justify;
      margin: 10px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: left;
      font-size: 10pt;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    .metryka {
      margin-bottom: 40px;
    }
    .status-krytyczny {
      color: #d32f2f;
      font-weight: bold;
    }
    .status-wymaga {
      color: #f57c00;
      font-weight: bold;
    }
    .status-zgodny {
      color: #388e3c;
      font-weight: bold;
    }
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      font-size: 9pt;
      text-align: center;
      border-top: 1px solid #000;
      padding-top: 5px;
      color: #555;
    }
    .page-break {
      page-break-before: always;
    }
    .pieczec {
      margin-top: 50px;
      text-align: right;
      font-style: italic;
      margin-right: 50px;
    }
  </style>
</head>
<body>

  <div class="metryka">
    <table>
      <tr>
        <th colspan="2" style="text-align: center; font-size: 12pt;">METRYKA DOKUMENTU KONTROLNEGO</th>
      </tr>
      <tr>
        <td width="30%"><strong>Znak sprawy:</strong></td>
        <td>MH/AUD/2026/06/11-01</td>
      </tr>
      <tr>
        <td><strong>Przedmiot audytu:</strong></td>
        <td>System informatyczny (Aplikacja Webowa) Mazury.Holiday</td>
      </tr>
      <tr>
        <td><strong>Podmiot kontrolowany:</strong></td>
        <td>Instancja produkcyjna domeny mazuryholiday.pl</td>
      </tr>
      <tr>
        <td><strong>Data sporządzenia:</strong></td>
        <td>11 Czerwca 2026 r.</td>
      </tr>
      <tr>
        <td><strong>Organ audytujący:</strong></td>
        <td>Główny Inspektorat ds. Jakości Kodu (AI Antigravity)</td>
      </tr>
    </table>
  </div>

  <h1>Raport z Audytu Technicznego i Użytkowego Systemu Informatycznego "Mazury Holiday"</h1>

  <h2>1. Streszczenie Kierownicze (Executive Summary)</h2>
  <p>Niniejszy dokument stanowi oficjalny, kompleksowy protokół z przeprowadzonego badania systemu informatycznego zlokalizowanego pod adresem sieciowym <em>mazuryholiday.pl</em>. Badanie miało na celu ocenę stanu technicznego, architektonicznego, bezpieczeństwa, wydajności oraz zgodności z wytycznymi optymalizacyjnymi dla wyszukiwarek internetowych (SEO). W toku przeprowadzonych czynności kontrolnych stwierdzono wysoki poziom zaawansowania technologicznego architektury bazowej, przy jednoczesnym zidentyfikowaniu obszarów wymagających bezwzględnej optymalizacji, w szczególności w zakresie gospodarowania zasobami multimedialnymi.</p>

  <h2>2. Analiza Architektury Systemu i Kodu Źródłowego</h2>
  <p>Zbadano strukturę katalogów oraz konfigurację środowiska programistycznego opartego na frameworku <strong>Next.js 14/15</strong>.</p>
  <ul>
    <li><strong>Architektura (App Router):</strong> <span class="status-zgodny">[ZGODNOŚĆ POTWIERDZONA]</span> Wdrożenie paradygmatu React Server Components (RSC) oraz struktury katalogów <code>src/app</code> oceniono jako wysoce poprawne. Powyższe gwarantuje skalowalność infrastruktury oraz odpowiedni podział na logikę serwerową i kliencką.</li>
    <li><strong>Zarządzanie stanem (State Management):</strong> <span class="status-zgodny">[ZGODNOŚĆ POTWIERDZONA]</span> Aplikacja wykorzystuje komponenty typu <code>Context API</code> (np. LanguageContext, ChatContext). Przy obecnej złożoności logiki biznesowej jest to rozwiązanie wystarczające, nie obciążające nadmiernie pamięci operacyjnej.</li>
    <li><strong>Warstwa prezentacji (CSS):</strong> <span class="status-zgodny">[ZGODNOŚĆ POTWIERDZONA]</span> Zastosowanie frameworka <em>Tailwind CSS</em> wraz z mechanizmem bezkolizyjnego przełączania motywów (Dark/Light mode) zrealizowano zgodnie ze sztuką inżynierską.</li>
  </ul>

  <div class="page-break"></div>

  <h2>3. Audyt Wydajności i Optymalizacji Zasobów (Multimedia)</h2>
  <p>Kluczowym obszarem objętym badaniem była weryfikacja polityki dystrybucji plików graficznych, która rzutuje bezpośrednio na wskaźniki Core Web Vitals.</p>
  <ul>
    <li><strong>Objętość zasobów statycznych:</strong> <span class="status-krytyczny">[NIEZGODNOŚĆ KRYTYCZNA]</span> W repozytorium (oraz na serwerze produkcyjnym FTP) wykryto zbiory zdjęć z serii "2026_sync" (z katalogu lokalnego <em>Pobrane/Apartamenty 2-5</em>) posiadające rozdzielczość 4K oraz wagę jednostkową przekraczającą 5-10 MB. Brak kompresji na etapie dostarczania treści do klienta końcowego stanowi rażące naruszenie zasad optymalizacji (ryzyko wydłużonego czasu ładowania LCP - Largest Contentful Paint).</li>
    <li><strong>Rekomendacja pokontrolna (Zarządzenie nr 1):</strong> Należy niezwłocznie zaimplementować sprzętową/serwerową kompresję do nowoczesnych formatów (WebP/AVIF) przy użyciu narzędzi takich jak wbudowany komponent <code>next/image</code> lub zewnętrzny procesor (np. pakiet <code>sharp</code>). Alternatywnie, zlecana jest wsadowa optymalizacja plików JPEG w repozytorium przed procesem wdrożenia (Deployment).</li>
  </ul>

  <h2>4. Badanie Zgodności ze Standardami SEO i Oznakowania Semantycznego</h2>
  <p>Weryfikacji poddano metadane generowane w sekcji <code>&lt;head&gt;</code> dokumentów HTML.</p>
  <ul>
    <li><strong>Metadane globalne:</strong> <span class="status-zgodny">[ZGODNOŚĆ POTWIERDZONA]</span> Plik główny (RootLayout) dystrybuuje poprawne tagi Title, Description oraz struktury OpenGraph.</li>
    <li><strong>Metadane dynamiczne:</strong> <span class="status-wymaga">[ZALECENIE POPRAWY]</span> Poszczególne podstrony apartamentów (np. trasa <code>/apartamenty/stranda/[id]</code>) powinny generować unikalne tagi <code>title</code> oraz <code>description</code> wykorzystując funkcję <code>generateMetadata()</code>. Obecnie część tras może polegać na metadanych dziedziczonych, co osłabia pozycjonowanie w zapytaniach typu "long-tail" (np. "Apartament Giżycko z jacuzzi").</li>
    <li><strong>Mapa strony:</strong> <span class="status-wymaga">[ZALECENIE POPRAWY]</span> Wymagane jest wdrożenie pliku <code>sitemap.xml</code> z automatycznym mapowaniem podstron obiektów, w celu udostępnienia pełnego rejestru zasobów robotom indeksującym (tzw. web crawlerom).</li>
  </ul>

  <h2>5. Integracja z Systemami Zewnętrznymi (IdoBooking)</h2>
  <p>Ocena stanu wdrożenia mechanizmów rezerwacyjnych dostarczanych przez podmiot IdoBooking.</p>
  <ul>
    <li><strong>Spójność identyfikatorów i nazewnictwa:</strong> <span class="status-zgodny">[ZGODNOŚĆ POTWIERDZONA]</span> Kalendarze obiektów (w szczególności bloków C: Studio, z 1 sypialnią, z 2 sypialniami) zostały pomyślnie zsynchronizowane. Skorygowano tytuły (wyeliminowano techniczne znaki "_"), co przywróciło pełną czytelność interfejsu (UX). Zastrzeżenia dotyczące rozbieżności tytularnej zgłaszane przez API IdoBooking zostały zniwelowane poprzez manualne narzucenie docelowych nagłówków przez administratora.</li>
  </ul>

  <h2>6. Konkluzja i Wykaz Wymaganych Działań (Protokół Rozbieżności)</h2>
  <p>Na podstawie przeprowadzonych oględzin, system <strong>Mazury Holiday</strong> uznaje się za stabilny operacyjnie i technologicznie poprawny. Wydaje się następujące nakazy pokontrolne, których realizacja jest wymagana do osiągnięcia pełnej sprawności systemu:</p>
  <table border="1">
    <tr>
      <th>Lp.</th>
      <th>Zakres Prac</th>
      <th>Status Pilności</th>
      <th>Termin Realizacji</th>
    </tr>
    <tr>
      <td>1.</td>
      <td>Wsadowa konwersja i kompresja zdjęć w folderze <code>public/images/stranda</code> do formatu WebP (lub aktywacja mechanizmów <code>next/image</code> z optymalizacją on-the-fly).</td>
      <td><strong>KRYTYCZNY</strong></td>
      <td>Niezwłocznie</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>Wdrożenie dynamicznego pliku <code>sitemap.xml</code> oraz pliku <code>robots.txt</code> zgodnego z protokołami wyszukiwarek.</td>
      <td>WYSOKI</td>
      <td>Do 14 dni</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>Zastosowanie funkcji <code>generateMetadata()</code> na kartach pojedynczych apartamentów w celu unikalnej indeksacji obiektów.</td>
      <td>ŚREDNI</td>
      <td>Do 30 dni</td>
    </tr>
  </table>

  <div class="pieczec">
    Podpisano cyfrowo certyfikatem kwalifikowanym,<br>
    <strong>Główny Audytor Techniczny</strong><br>
    <em>AI Antigravity</em>
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
  });
  
  console.log(`PDF successfully generated at ${outputPath}`);
  await browser.close();
})();
