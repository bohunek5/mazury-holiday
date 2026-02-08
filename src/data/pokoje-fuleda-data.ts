export type PokojeData = {
    id: string;
    title: string;
    price: string;
    guests: string;
    description: string;
    amenities: {
        room1: string[];
        room2: string[];
        bathroom: string[];
        kitchen: string[];
        terrace: string[];
    };
    gallery: {
        heroImage: string;
        images: string[];
    };
};

export const pokojeFuledaData: PokojeData = {
    id: 'pokoje',
    title: 'Fuleda Pokoje',
    price: 'od 375 zł/doba',
    guests: '4',
    description: `Oferujemy do wynajęcia dwa pokoje: jeden z łóżkiem podwójnym, drugi z dwoma pojedynczymi, łazienka z prysznicem i wc. Przy pokojach zadaszony taras. W osobnym budynku oddalonym o 10m od pokoi kuchnia z dodatkowym wc. Wszystko znajduje się na półwyspie Fuledzki Róg nad brzegiem jeziora Dobskie ze strefą ciszy na ogrodzonym terenie Folwark Fuleda.

Wspaniałe miejsce dla osób ceniących sobie dziką naturę, ciszę i spokój. Z dala od miasta.

Budynek szeregowy zlokalizowany na prywatnych ogródkach działkowych nad jeziorem Dobskim. W głównym budynku do prywatnego użytku są dwa pokoje, łazienka z prysznicem i wc, zadaszony taras. Na przeciwko tarasu w odległości około 10m jest budynek w którym znajduje się kuchnia z drugim WC (również do prywatnego użytku). Z drugiej strony budynku w odległości około 20m jest prywatne dojście do jeziora na którym znajduje się taras widokowy z grillem, miejsce na ognisko oraz łódź wiosłowa.

W odległości około 250m znajduje się ogólnodostępna plaża. Fuleda położona jest około 10km od Giżycka, 20km od Kętrzyna i Gierłoży gdzie znajduje się Wilczy Szaniec kwatera Hitlera. W pobliżu lasy, łąki, trasy rowerowe, płac zabaw. Najbliższy sklep około 3km.

Polecany rodzinom z dziećmi, wędkarzom, grzybiarzom i miłośnikom natury.`,
    amenities: {
        room1: ['Łóżko dla 2 osób', 'Wyjście na taras', 'Odkurzacz', 'Suszarka', 'Żelazko', 'Deska do prasowania'],
        room2: ['Dwa łóżka pojedyncze', 'TV', 'Wyjście na taras'],
        bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
        kitchen: ['Lodówka', 'Zmywarka', 'Mikrofalówka', 'Toster', 'Komplet naczyń i sztućców', 'Kuchnia gazowa', 'Ekspres do kawy'],
        terrace: ['Przestronny taras', 'Prywatne zejście do jeziora', 'Miejsce na grilla i ognisko', 'Łódź wiosłowa', 'Taras widokowy']
    },
    gallery: {
        heroImage: '/mazury-holiday/images/pokoje_fuleda/104029_8.webp',
        images: [
            '/mazury-holiday/images/pokoje_fuleda/104029_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104030_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104036_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104037_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104040_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104043_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104044_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104045_8.webp',
            '/mazury-holiday/images/pokoje_fuleda/104046_8.webp'
        ]
    }
};
