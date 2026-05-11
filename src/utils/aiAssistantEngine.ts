import { strandaApartments } from '@/data/stranda-apartments';
import { fuledaApartments } from '@/data/fuleda-data';
import { pokojeFuledaData } from '@/data/pokoje-fuleda-data';
import { kisajnoData } from '@/data/kisajno-data';
import { skorupkiData } from '@/data/skorupki-data';

export function getAssistantResponse(message: string): string {
    const msg = message.toLowerCase();

    // 0. Specific Q&A Knowledge Base
    // Category 1: Location and differences
    if ((msg.includes('różni') || msg.includes('rozn')) && (msg.includes('giżyck') || msg.includes('gizyck')) && (msg.includes('fuled'))) {
        return "Oferujemy dwa różne style wypoczynku. Apartamenty w Giżycku (Stranda i Kisajno) to propozycja dla osób lubiących tętniące życiem otoczenie portowe, bliskość tawerny, koncertów i atrakcji miejskich. Z kolei Fuleda, położona nad jeziorem Dobskim, to strefa ciszy na terenie rezerwatu przyrody – idealna dla osób szukających absolutnego spokoju, kontaktu z naturą i \"slow tourism\".";
    }
    if ((msg.includes('daleko') || msg.includes('odległość') || msg.includes('odleglosc')) && msg.includes('fuled') && (msg.includes('giżyck') || msg.includes('gizyck'))) {
        return "Fuleda znajduje się około 18 km od Giżycka, co zapewnia ciszę z dala od miasta, ale pozwala na dojazd w około 15-35 minut samochodem.";
    }
    if ((msg.includes('gdzie') || msg.includes('lokalizacja')) && (msg.includes('giżyck') || msg.includes('gizyck'))) {
        return "Posiadamy dwie lokalizacje w Giżycku. Apartamenty \"Stranda\" znajdują się przy porcie Stranda (ul. Pierkunowo), natomiast apartamenty \"Kisajno\" zlokalizowane są przy porcie Neptun. Obie lokalizacje leżą nad brzegiem jeziora Kisajno.";
    }

    // Category 2: Equipment and standard
    if (msg.includes('jacuzzi') && (msg.includes('który') || msg.includes('ktory') || msg.includes('wybrać') || msg.includes('szukam'))) {
        return "Mamy szeroki wybór apartamentów z prywatnym jacuzzi. W budynku A są to apartamenty Delux na parterze (np. A104, A105) oraz luksusowe apartamenty na dachu z tarasami widokowymi (A402, A403). W budynku B jacuzzi posiadają m.in. B102, B201 oraz B202.";
    }
    if (msg.includes('saun')) {
        return "Tak, polecamy wyjątkowy Apartament B202 Delux, który posiada zarówno prywatną saunę, jak i jacuzzi, a do tego dwie sypialnie i widok na zatokę Tracz.";
    }
    if ((msg.includes('kuchni') || msg.includes('aneks')) && (msg.includes('gotowa') || msg.includes('wyposaż') || msg.includes('co jest'))) {
        return "Tak, nasze aneksy kuchenne są kompleksowo wyposażone. Znajdą Państwo w nich płytę indukcyjną, lodówkę, zmywarkę, ekspres do kawy oraz komplet naczyń i sztućców. W niektórych apartamentach premium (np. A403) dostępna jest także chłodziarka do wina.";
    }
    if (msg.includes('klimatyzacj') || msg.includes('klima')) {
        return "Tak, większość naszych apartamentów, w tym te w budynku A i B oraz w Fuledzie, jest wyposażona w klimatyzację, co zapewnia komfort w upalne dni.";
    }
    if (msg.includes('internet') || msg.includes('wifi') || msg.includes('wi-fi')) {
        return "Oczywiście, zapewniamy bezpłatne Wi-Fi we wszystkich apartamentach. Jest ono wystarczające nawet do pracy zdalnej.";
    }

    // Category 3: Yacht Charter
    if ((msg.includes('jacht') || msg.includes('stillo')) && (msg.includes('patent') || msg.includes('uprawnienia') || msg.includes('bez patentu'))) {
        return "Nie, jacht motorowy Stillo 30 można prowadzić bez patentu. Zapewniamy pełne przeszkolenie przed rejsem.";
    }
    if ((msg.includes('jacht') || msg.includes('stillo')) && (msg.includes('ile osób') || msg.includes('ile osob') || msg.includes('spać') || msg.includes('spac'))) {
        return "Jacht posiada 3 zamykane kabiny (jedną dziobową i dwie rufowe) oraz miejsce w mesie, co pozwala na komfortowy nocleg dla 8 osób.";
    }
    if ((msg.includes('jacht') || msg.includes('stillo')) && (msg.includes('zimno') || msg.includes('ogrzewanie') || msg.includes('webasto'))) {
        return "Jacht jest przygotowany na każdą pogodę. Posiada ogrzewanie Webasto, a materace w sypialniach wykonane są z pianki termoaktywnej dla najwyższego komfortu.";
    }
    if ((msg.includes('jacht') || msg.includes('stillo')) && msg.includes('wyposaż')) {
        return "Jacht jest wyposażony w standardzie VIP. Posiada m.in. ster strumieniowy (dziobowy i rufowy), ciepłą wodę, TV ze Smart TV (Netflix, HBO), Wi-Fi bez limitu, kostkarkę do lodu oraz ekspres Nespresso.";
    }

    // Category 4: Booking, Prices, Policy
    if (msg.includes('zameldowani') || msg.includes('wymeldowani') || msg.includes('doba') || msg.includes('godzin') || msg.includes('przyjazd') || msg.includes('wyjazd')) {
        return "Zameldowanie odbywa się w godzinach od 15:00 do 23:00, natomiast wymeldowanie możliwe jest od 01:00 do 11:00.";
    }
    if (msg.includes('zwierz') || msg.includes('psa') || msg.includes('pies') || msg.includes('kot') || msg.includes('pupil')) {
        return "W apartamentach Kisajno zwierzęta nie są akceptowane. W przypadku innych lokalizacji prosimy o bezpośredni kontakt w celu potwierdzenia zasad.";
    }
    if (msg.includes('ręcznik') || msg.includes('recznik') || msg.includes('pościel') || msg.includes('posciel')) {
        return "Nie, zapewniamy komplet pościeli i ręczników dla każdego gościa. Dodatkowo w łazienkach znajdują się szlafroki, suszarka do włosów, a nawet prostownica.";
    }
    // Specific price check happens in generic block below or handle here if strictly asking "ceny za dobę"
    if (msg.includes('ceny za dobę') || msg.includes('ceny za dobe') || msg.includes('cena za dobę')) {
        return "Ceny są dynamiczne i zależą od terminu oraz standardu. Ceny startują od 200 zł za dobę (np. studia lub pokoje w Fuledzie), przez 300-450 zł za apartamenty Suite, aż do 550 zł za apartamenty Delux z jacuzzi na dachu. Dokładną wycenę dla wybranego terminu można sprawdzić w naszym systemie rezerwacji online.";
    }

    // Category 5: Surroundings and Attractions
    if ((msg.includes('robić') || msg.includes('robic') || msg.includes('atrakcj')) && msg.includes('okolic')) {
        return "Giżycko oferuje mnóstwo atrakcji. W pobliżu znajduje się Twierdza Boyen, zabytkowy Most Obrotowy oraz Wieża Ciśnień. Dla rodzin polecamy Park Linowy Wiewióra, Park Wodny Boyen lub odwiedziny w Papugarni. Zimą zapraszamy na kryte lodowisko.";
    }
    if (msg.includes('widok') && msg.includes('jezior')) {
        return "Tak, większość naszych apartamentów posiada tarasy z widokiem na jezioro Kisajno (w Giżycku) lub jezioro Dobskie (w Fuledzie). Możesz nawet sprawdzić aktualny widok dzięki naszym kamerom online dostępnym na stronie.";
    }
    if (msg.includes('parking') || msg.includes('parkować') || msg.includes('samochód') || msg.includes('auto')) {
        return "Na terenie obiektów zapewniamy prywatny parking dla naszych gości.";
    }

    // Category 6: Contact
    if (msg.includes('kontakt') || msg.includes('telefon') || msg.includes('mail') || msg.includes('numer')) {
        return "Możesz dzwonić pod numer rezerwacyjny +48 730 067 027 lub do biura +48 607 241 090. Jesteśmy też dostępni pod mailem: rezerwacje@mazury.holiday";
    }

    // 1. General Offer / "Where are you?" Questions
    if (msg.includes('oferta') || msg.includes('gdzie') || msg.includes('miejsce') || msg.includes('nocleg') || msg.includes('obiekty')) {
        return "Mamy świetne lokalizacje na Mazurach! Oto co oferujemy:\n\n" +
            "📍 **Apartamenty Stranda** (Giżycko) - luksusowe apartamenty w marinie, niektóre z jacuzzi lub sauną. [Zobacz szczegóły](/apartamenty/stranda)\n\n" +
            "📍 **Apartamenty Fuleda** (Fuleda) - oaza spokoju w strefie ciszy nad jeziorem Dobskim. [Zobacz szczegóły](/apartamenty/fuleda)\n\n" +
            "📍 **Apartament Kisajno** (Giżycko) - komfortowy apartament z widokiem na jezioro. [Zobacz szczegóły](/apartamenty/kisajno)\n\n" +
            "📍 **Domki Skorupki** - przytulne domki dla rodzin. [Zobacz szczegóły](/domki)\n\n" +
            "⛵ **Czarter Jachtu** - luksusowy Stillo 30 VIP. [Zobacz szczegóły](/czarter)\n\n" +
            "Wybierz którąś z opcji lub zapytaj mnie o konkretną liczbę osób, a pomogę Ci dopasować ofertę!";
    }

    // 2. Guest Count Filtering (e.g. "dla 6 osób")
    const guestMatch = msg.match(/(\d+)\s?(osób|osob|osb|os)/);
    if (guestMatch) {
        const count = parseInt(guestMatch[1]);
        const matches: string[] = [];

        // Check Stranda
        Object.entries(strandaApartments).forEach(([id, apt]) => {
            // Logic for "2+2", "4+2", "2" etc.
            const parts = apt.guests.includes('+') ? apt.guests.split('+').map((n: string) => parseInt(n)) : [parseInt(apt.guests)];
            const total = parts.reduce((a: number, b: number) => a + b, 0);
            if (total >= count && count > 0) {
                matches.push(`**${id}** (${apt.type} dla ${apt.guests} os.)`);
            }
        });

        // Check Fuleda
        Object.entries(fuledaApartments).forEach(([id, apt]) => {
            const parts = apt.guests.includes('+') ? apt.guests.split('+').map((n: string) => parseInt(n)) : [parseInt(apt.guests)];
            const total = parts.reduce((a: number, b: number) => a + b, 0);
            if (total >= count && count > 0) {
                matches.push(`**Fuleda ${apt.type}** (${apt.guests} os.)`);
            }
        });

        if (matches.length > 0) {
            return `Dla ${count} osób mogę polecić następujące opcje:\n\n` +
                matches.slice(0, 8).join('\n') +
                (matches.length > 8 ? `\n...i jeszcze ${matches.length - 8} innych.` : "") +
                "\n\nKtóryś z nich Cię zainteresował? Możesz zapytać o szczegóły konkretnego numeru!";
        } else {
            return `Niestety nie mam w bazie obiektu Typowo dla ${count} osób naraz, ale możemy rozdzielić Waszą grupę na dwa apartamenty obok siebie! Czy to by Cię interesowało?`;
        }
    }

    // 3. Specific Apartment Check (Stranda A/B/C)
    const strandaMatch = msg.match(/[abc]\s?(\d{3})/i);
    if (strandaMatch) {
        const id = strandaMatch[0].toUpperCase().replace(/\s/g, '');
        const apartment = strandaApartments[id];
        if (apartment) {
            let response = `Apartament **${id}** to ${apartment.type} w budynku ${apartment.building}.\n\n`;
            response += `🏠 **Liczba gości:** ${apartment.guests}\n`;
            response += `💰 **Cena:** od ${apartment.price} zł\n`;

            if (apartment.type.includes('jacuzzi')) response += "🛁 **Bonus:** posiada prywatne jacuzzi na tarasie!\n";
            if (apartment.type.includes('saun')) response += "🧖‍♂️ **Bonus:** posiada własną saunę!\n";

            response += `\n[Kliknij tutaj, aby zobaczyć galerię i zarezerwować ten apartament](/apartamenty/stranda/${id})\n\n`;

            if (msg.includes('wyposaż') || msg.includes('co jest') || msg.includes('udogod')) {
                const someAmenities = [
                    ...apartment.amenities.living.slice(0, 3),
                    ...apartment.amenities.kitchen.slice(0, 3),
                    ...(apartment.amenities.bathroom || []).slice(0, 3)
                ];
                response += `Wyposażenie obejmuje m.in.: ${someAmenities.join(', ')}...`;
            } else {
                response += "Czy chciałbyś poznać pełną listę wyposażenia tego apartamentu?";
            }
            return response;
        }
    }

    // 4. Features Check
    if (msg.includes('jacuzzi') || msg.includes('dżakuzi')) {
        const jacuzziApts = Object.keys(strandaApartments).filter(id => strandaApartments[id].type.toLowerCase().includes('jacuzzi'));
        return `Prywatne jacuzzi na tarasie to nasza specjalność! Posiadają je m.in. apartamenty: **${jacuzziApts.join(', ')}**. Który sprawdzić dla Ciebie?`;
    }

    if (msg.includes('sauna') || msg.includes('saunę')) {
        const saunaApts = Object.keys(strandaApartments).filter(id => strandaApartments[id].type.toLowerCase().includes('sauna'));
        return `Jeśli szukasz relaksu w saunie, polecam apartamenty: **${saunaApts.join(', ')}**. Masz ochotę na seans? 😉`;
    }

    // 5. Fuleda & Pokoj Check
    if (msg.includes('fuled')) {
        if (msg.includes('pokoj')) {
            const d = pokojeFuledaData;
            return `**${d.title}** to idealne miejsce dla osób ceniących naturę.\n\n` +
                `👥 Dla ${d.guests} osób\n` +
                `💰 Cena: ${d.price}\n\n` +
                `[Zobacz Pokoje Fuleda](/pokoje/fuleda)`;
        }

        const fParter = fuledaApartments['parter'];
        const fPietro = fuledaApartments['pietro'];

        if (msg.includes('parter') && fParter) {
            return `**Fuleda Parter** (${fParter.guests} os.) to salon z kominkiem i bezpośrednie dojście do jeziora. Posiada nawet chłodziarkę do wina! 🍷 [Zobacz szczegóły](/apartamenty/fuleda/parter)`;
        }
        if ((msg.includes('piętro') || msg.includes('pietro')) && fPietro) {
            return `**Fuleda Piętro** (${fPietro.guests} os.) jest klimatyzowane i oferuje niepowtarzalny widok na jezioro Dobskie. 🌅 [Zobacz szczegóły](/apartamenty/fuleda/pietro)`;
        }
        return "Na Fuledzie mamy dwa luksusowe apartamenty (Parter i Piętro) oraz oddzielne Pokoje. Całość leży w strefie ciszy. [Sprawdź całą Fuledę](/apartamenty/fuleda)";
    }

    // 6. Kisajno
    if (msg.includes('kisajn')) {
        return `**${kisajnoData.title || 'Apartament Kisajno'}** to wyjątkowa lokalizacja w Giżycku.\n\n${kisajnoData.description}\n\n[Zobacz i zarezerwuj Kisajno](/apartamenty/kisajno)`;
    }

    // 7. Skorupki
    if (msg.includes('domek') || msg.includes('skorupk')) {
        // Fallback description
        const desc = skorupkiData?.description?.length > 50 ? skorupkiData.description : "Nasz kompleks **Domki Skorupki** to idealne miejsce na rodzinne wakacje w otoczeniu starych drzew.";
        return `${desc}\n\n[Zobacz nasze domki](/domki)`;
    }

    // Category 3b: Yacht Specs (Stillo 30)
    if ((msg.includes('jacht') || msg.includes('stillo')) && (msg.includes('metr') || msg.includes('długość') || msg.includes('dlugosc') || msg.includes('szerokość') || msg.includes('szerokosc') || msg.includes('zanurzeni') || msg.includes('silnik'))) {
        return "Nasz jacht Stillo 30 VIP ma następujące parametry:\n\n" +
            "📏 **Długość:** 9.10 m\n" +
            "↔️ **Szerokość:** 3.25 m\n" +
            "🌊 **Zanurzenie:** 0.50 m\n" +
            "⚙️ **Silnik:** Craftsman 52KM Diesel\n\n" +
            "Jest to jednostka spacerowa, bardzo stabilna i bezpieczna. [Zobacz pełną specyfikację](/czarter)";
    }

    // 8. Czarter
    if (msg.includes('czarter')) {
        return "Marzysz o rejsie? Czarterujemy luksusowy jacht motorowy **Stillo 30 VIP**! 🚤\n\n" +
            "Co ważne: do jego prowadzenia **nie jest wymagany patent motorowodny** – po krótkim przeszkoleniu możesz samodzielnie sterować tym luksusowym 'domem na wodzie'.\n\n" +
            "[Zobacz szczegóły czarteru](/czarter)";
    }

    // Standard items
    if (msg.includes('cena') || msg.includes('ceny') || msg.includes('koszt')) {
        return "Ceny zależą od obiektu i terminu:\n- Pokoje Fuleda od 375 zł\n- Mniejsze apartamenty od ok. 250 zł\n- Apartamenty z jacuzzi od ok. 450-500 zł.\n\nNajlepiej sprawdzić cenę bezpośrednio w systemie rezerwacji przy konkretnym obiekcie.";
    }

    if (msg.includes('osób') || msg.includes('osob') || msg.includes('ile miejsc')) {
        return "Mamy opcje dla każdego! Od par (2 os.), przez rodziny (2+2, 4+2) aż po większe apartamenty. Dla ilu osób szukasz noclegu?";
    }

    if (msg.includes('cześć') || msg.includes('czesc') || msg.includes('hej') || msg.includes('dzień dobry') || msg.includes('witam')) {
        return "Dzień dobry! Chętnie pomogę Ci znaleźć idealne miejsce na Mazurach. Szukasz apartamentu z jacuzzi, domku dla rodziny, czy może chcesz wynająć jacht?";
    }

    return "Ciekawy temat! Przypomnę, że mogę Ci pomóc znaleźć apartament (np. dla 4 osób), sprawdzić wyposażenie konkretnego numeru (np. A104) lub opowiedzieć o naszych lokalizacjach (Stranda, Fuleda, Kisajno, Skorupki). O co chcesz zapytać?";
}
