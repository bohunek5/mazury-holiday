import { strandaApartments } from '@/data/stranda-apartments';
import { fuledaApartments } from '@/data/fuleda-data';
import { pokojeFuledaData } from '@/data/pokoje-fuleda-data';

export function getAssistantResponse(message: string): string {
    const msg = message.toLowerCase();

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
                    ...apartment.amenities.bathroom.slice(0, 3)
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
        return "Apartament **Kisajno** (2+2 os.) to luksusowa opcja w Giżycku z pięknym widokiem. [Zobacz i zarezerwuj Kisajno](/apartamenty/kisajno)";
    }

    // 7. Skorupki
    if (msg.includes('domek') || msg.includes('skorupk')) {
        return "Nasz kompleks **Domki Skorupki** to idealne miejsce na rodzinne wakacje. [Zobacz nasze domki](/domki)";
    }

    // 8. Czarter
    if (msg.includes('jacht') || msg.includes('stillo') || msg.includes('łódź') || msg.includes('lodz') || msg.includes('czarter')) {
        return "Marzysz o rejsie? Czarterujemy luksusowy jacht motorowy **Stillo 30 VIP**! 🚤\n\n" +
            "Co ważne: do jego prowadzenia **nie jest wymagany patent motorowodny** – po krótkim przeszkoleniu możesz samodzielnie sterować tym luksusowym 'domem na wodzie'.\n\n" +
            "[Zobacz szczegóły czarteru](/czarter)";
    }

    // 9. Attractions & Location
    if (msg.includes('atrakcj') || msg.includes('co robić') || msg.includes('zwiedz') || msg.includes('okolicy')) {
        return "Okolica naszych obiektów (Giżycko, Fuleda, Skorupki) obfituje w atrakcje!\n\n" +
            "🏰 **Twierdza Boyen** w Giżycku\n" +
            "🌉 **Most Obrotowy** w Giżycku\n" +
            "🌳 **Park wodny i marina Stranda**\n" +
            "👣 **Strefa ciszy nad jeziorem Dobskim** (przy apartamentach Fuleda)\n" +
            "🚲 **Liczne ścieżki rowerowe**\n\n" +
            "Jeśli szukasz konkretnych rekomendacji restauracji lub chcesz wiedzieć, jak do nas trafić, zapraszamy do [kontaktu bezpośredniego](/kontakt) – chętnie podpowiemy!";
    }

    if (msg.includes('lokalizacj') || msg.includes('dojazd') || msg.includes('gdzie jescze') || msg.includes('trafi')) {
        return "Nasze obiekty znajdują się w sercu Mazur (Giżycko i okolice). Dokładne mapy dojazdu oraz numery telefonów znajdziesz na naszej stronie [Kontakt](/kontakt). Zapraszamy!";
    }

    // Standard items
    if (msg.includes('cena') || msg.includes('ceny') || msg.includes('koszt')) {
        return "Ceny zależą od obiektu i terminu:\n- Pokoje Fuleda od 375 zł\n- Mniejsze apartamenty od ok. 250 zł\n- Apartamenty z jacuzzi od ok. 450-500 zł.\n\nNajlepiej sprawdzić cenę bezpośrednio w systemie rezerwacji przy konkretnym obiekcie.";
    }

    if (msg.includes('osób') || msg.includes('osob') || msg.includes('ile miejsc')) {
        return "Mamy opcje dla każdego! Od par (2 os.), przez rodziny (2+2, 4+2) aż po większe apartamenty. Dla ilu osób szukasz noclegu?";
    }

    if (msg.includes('cześć') || msg.includes('czesc') || msg.includes('hej') || msg.includes('dzień dobry')) {
        return "Dzień dobry! Chętnie pomogę Ci znaleźć idealne miejsce na Mazurach. Szukasz apartamentu z jacuzzi, domku dla rodziny, czy może chcesz wynająć jacht?";
    }

    return "Ciekawy temat! Przypomnę, że mogę Ci pomóc znaleźć apartament (np. dla 4 osób), sprawdzić wyposażenie konkretnego numeru (np. A104) lub opowiedzieć o naszych lokalizacjach (Stranda, Fuleda, Kisajno, Skorupki). O co chcesz zapytać?";
}
