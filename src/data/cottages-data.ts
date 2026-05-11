export type Cottage = {
    id: number;
    name: string;
    tagline: string;
    price: number;
    priceWeekend: number;
    guests: number;
    bedrooms: number;
    bathrooms: number;
    area: number; // m²
    heroImage: string;
    galleryStart: number; // first skorupki image index
    description: string;
    amenities: {
        category: string;
        icon: string;
        items: string[];
    }[];
    highlights: { icon: string; label: string }[];
    rules: string[];
};

export const cottagesData: Cottage[] = [
    {
        id: 1,
        name: "Domek Mazurski I",
        tagline: "Blisko jeziora, z widokiem na las",
        price: 600,
        priceWeekend: 750,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 60,
        heroImage: "/images/skorupki/skorupki_1.webp",
        galleryStart: 4,
        description: "Przytulny domek z pełnym wyposażeniem, idealny dla rodzin z dziećmi lub grupy przyjaciół. Drewniane wykończenia, duży taras z meblami ogrodowymi i bezpośredni dostęp do ciszy mazurskiej przyrody.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie (łóżko 2-os. + 2 łóżka 1-os.)", "Pościel i poduszki", "Szafa z wieszakami", "Zasłony zaciemniające"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Aneks kuchenny", "Lodówka z zamrażarką", "Płyta indukcyjna", "Ekspres do kawy", "Czajnik", "Naczynia i sztućce", "Kuchenka mikrofalowa"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Ręczniki", "Suszarka do włosów", "Środki czystości"]
            },
            {
                category: "Salon & Udogodnienia",
                icon: "TV.svg",
                items: ["Telewizor Smart TV 50\"", "Wi-Fi", "Klimatyzacja", "Sofa rozkładana", "Kominek elektryczny"]
            },
            {
                category: "Taras & Na zewnątrz",
                icon: "TERRACE.svg",
                items: ["Taras z meblami", "Leżaki", "Grill ogrodowy", "Ognisko (miejsce wyznaczone)", "Parking przy domku"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "FRIDGE.svg", label: "Lodówka" },
            { icon: "TV.svg", label: "Smart TV" },
        ],
        rules: ["Zakaz palenia w domku", "Zwierzęta za opłatą 50 zł/pobyt", "Cisza nocna od 22:00 do 7:00", "Check-in: 15:00, Check-out: 11:00"]
    },
    {
        id: 2,
        name: "Domek Mazurski II",
        tagline: "Romantyczny azyl dla par i rodzin",
        price: 600,
        priceWeekend: 750,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 62,
        heroImage: "/images/skorupki/skorupki_2.webp",
        galleryStart: 8,
        description: "Elegancki domek z drewnianą werandą i panoramicznym widokiem na las. Wyposażony w nowoczesną kuchnię i wygodny salon z kominkiem. Idealne miejsce na romantyczny wyjazd lub spokojne rodzinne wakacje.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie (łóżko 2-os. + 2 łóżka 1-os.)", "Pościel premium", "Komoda i szafa", "Lampki nocne"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Pełna kuchnia", "Lodówka z zamrażarką", "Płyta ceramiczna 4-palnikowa", "Piekarnik", "Zmywarka", "Ekspres ciśnieniowy", "Komplet naczyń i sztućców"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Ręczniki kąpielowe i do rąk", "Suszarka do włosów", "Zestaw szamponów i mydła"]
            },
            {
                category: "Salon",
                icon: "SOFA.svg",
                items: ["Smart TV 55\"", "Wi-Fi szerokopasmowe", "Kominek elektryczny", "Sofa narożna", "Stół z krzesłami"]
            },
            {
                category: "Zewnętrze",
                icon: "TERRACE.svg",
                items: ["Weranda ze stolikiem", "Meble ogrodowe", "Grill ogrodowy", "Huśtawka ogrodowa", "Parking dedykowany"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "WASHING_MACHINE.svg", label: "Zmywarka" },
            { icon: "FIRE_EXTINGUISHER.svg", label: "Kominek" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta za opłatą", "Cisza nocna 22:00–7:00", "Check-in: 15:00, Check-out: 11:00"]
    },
    {
        id: 3,
        name: "Domek Mazurski III",
        tagline: "Idealny na rodzinny wypoczynek",
        price: 600,
        priceWeekend: 750,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 58,
        heroImage: "/images/skorupki/skorupki_3.webp",
        galleryStart: 12,
        description: "Przestronny domek z ogrodem i miejscem na ognisko. Duże przeszklenia wpuszczają mnóstwo światła i otwierają widok na zieloną okolicę. Doskonały wybór dla aktywnych rodzin.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie", "Łóżko małżeńskie 160×200", "2 łóżka jednoosobowe", "Pościel i ręczniki"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Aneks kuchenny", "Lodówka dwudrzwiowa", "Kuchenka indukcyjna", "Microfalówka", "Ekspres do kawy", "Naczynia i sztućce"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic walk-in", "Ręczniki", "Suszarka do włosów"]
            },
            {
                category: "Salon",
                icon: "TV.svg",
                items: ["Smart TV", "Wi-Fi", "Klimatyzacja", "Sofa", "Kominek"]
            },
            {
                category: "Zewnętrze",
                icon: "TERRACE.svg",
                items: ["Taras zadaszony", "Ognisko w ogrodzie", "Meble ogrodowe", "Parking"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "BAR.svg", label: "Ognisko" },
            { icon: "FRIDGE.svg", label: "Lodówka" },
            { icon: "TV.svg", label: "Smart TV" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta za opłatą", "Cisza nocna 22:00", "Check-in: 15:00"]
    },
    {
        id: 4,
        name: "Domek Mazurski IV",
        tagline: "Spokój i natura w czystej postaci",
        price: 620,
        priceWeekend: 780,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 65,
        heroImage: "/images/skorupki/skorupki_4.webp",
        galleryStart: 16,
        description: "Wyróżniający się przestronią i nowoczesnym wnętrzem domek. Otwarta przestrzeń dzienna łączy salon z jadalnią i kuchnią, tworząc idealne miejsce do wspólnego spędzania czasu.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie (2+2 osoby)", "Łóżka z materacami premium", "Pościel i poduszki", "Szafy wnękowe"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Kuchnia otwarta na salon", "Lodówka", "Płyta indukcyjna", "Piekarnik", "Zmywarka", "Ekspres do kawy", "Naczynia"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Wanna", "Ręczniki", "Suszarka do włosów"]
            },
            {
                category: "Salon",
                icon: "SOFA.svg",
                items: ["Smart TV 58\"", "Wi-Fi", "Klimatyzacja", "Sofa L-shape", "Stół jadalniany"]
            },
            {
                category: "Zewnętrze",
                icon: "TERRACE.svg",
                items: ["Duży taras", "Leżaki i parasol", "Grill", "Parking"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "BATHTUB.svg", label: "Wanna" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "WASHING_MACHINE.svg", label: "Zmywarka" },
            { icon: "SUNBED.svg", label: "Leżaki" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta po uzgodnieniu", "Cisza nocna 22:00", "Check-in: 15:00"]
    },
    {
        id: 5,
        name: "Domek Mazurski V",
        tagline: "Drewniany klimat, nowoczesny komfort",
        price: 600,
        priceWeekend: 750,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 60,
        heroImage: "/images/skorupki/skorupki_5.webp",
        galleryStart: 20,
        description: "Domek w stylu skandynawskim z drewnianymi akcentami i przytulną atmosferą. Idealne połączenie rustykalnego uroku z nowoczesnym komfortem. Okolica bogata w szlaki rowerowe i piesze.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie", "Łóżko 2-osobowe", "2 łóżka 1-osobowe", "Pościel", "Szafa"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Kuchnia", "Lodówka", "Kuchenka", "Ekspres do kawy", "Naczynia i sztućce"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Ręczniki", "Suszarka"]
            },
            {
                category: "Salon",
                icon: "TV.svg",
                items: ["Smart TV", "Wi-Fi", "Klimatyzacja", "Kominek", "Sofa"]
            },
            {
                category: "Zewnętrze",
                icon: "TERRACE.svg",
                items: ["Taras", "Meble ogrodowe", "Ognisko", "Parking"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "FIRE_EXTINGUISHER.svg", label: "Kominek" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "BAR.svg", label: "Ognisko" },
            { icon: "COFFEE.svg", label: "Ekspres" },
            { icon: "TV.svg", label: "Smart TV" },
        ],
        rules: ["Zakaz palenia", "Cisza nocna 22:00", "Check-in: 15:00", "Check-out: 11:00"]
    },
    {
        id: 6,
        name: "Domek Mazurski VI",
        tagline: "Raj dla aktywnych i wodniaków",
        price: 650,
        priceWeekend: 800,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 63,
        heroImage: "/images/skorupki/skorupki_6.webp",
        galleryStart: 24,
        description: "Jeden z najbardziej popularnych domków — położony najbliżej dostępu do wody. Doskonały punkt startowy dla miłośników kajaków, łodzi motorowych i żeglarstwa. W pobliżu wypożyczalnia sprzętu wodnego.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie (6 miejsc)", "Łóżka z materacami sprężynowymi", "Pościel i poduszki"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Aneks kuchenny", "Lodówka", "Płyta indukcyjna", "Mikrofalówka", "Ekspres", "Naczynia"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Ręczniki", "Suszarka do włosów"]
            },
            {
                category: "Salon",
                icon: "SOFA.svg",
                items: ["Smart TV", "Wi-Fi", "Klimatyzacja", "Sofa rozkładana"]
            },
            {
                category: "Zewnętrze",
                icon: "SWIMMING.svg",
                items: ["Taras z widokiem", "Grill", "Bliskość jeziora", "Parking", "Rower wodny w cenie"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "SWIMMING.svg", label: "Blisko jeziora" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "SUNBED.svg", label: "Leżaki" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta za opłatą", "Cisza nocna 22:00", "Check-in: 15:00"]
    },
    {
        id: 7,
        name: "Domek Mazurski VII",
        tagline: "Przestrzeń dla dużej rodziny",
        price: 650,
        priceWeekend: 800,
        guests: 8,
        bedrooms: 3,
        bathrooms: 1,
        area: 75,
        heroImage: "/images/skorupki/skorupki_7.webp",
        galleryStart: 28,
        description: "Największy domek w kompleksie — idealny dla rodzin wieloosobowych lub grupy przyjaciół. Trzy sypialnie, przestronny salon i duży ogród z miejscem na ognisko gwarantują niezapomniane chwile.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["3 sypialnie (8 miejsc)", "Łóżka podwójne i pojedyncze", "Pościel premium", "Szafy i lustra"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Duża kuchnia", "Lodówka side-by-side", "Płyta indukcyjna", "Piekarnik", "Zmywarka", "Ekspres do kawy", "Komplet naczyń"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Wanna", "Ręczniki", "Suszarka", "Lustro z oświetleniem"]
            },
            {
                category: "Salon",
                icon: "TV.svg",
                items: ["Smart TV 65\"", "Wi-Fi", "Klimatyzacja", "Kanapa L", "Stół 8-osobowy"]
            },
            {
                category: "Zewnętrze",
                icon: "TERRACE.svg",
                items: ["Duży taras 30m²", "Leżaki x6", "Grill węglowy i gazowy", "Ognisko", "2 miejsca parkingowe"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "BATHTUB.svg", label: "Wanna" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "WASHING_MACHINE.svg", label: "Zmywarka" },
            { icon: "SUNBED.svg", label: "Leżaki" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta do uzgodnienia", "Cisza nocna 22:00", "Check-in: 15:00", "Check-out: 11:00"]
    },
    {
        id: 8,
        name: "Domek Mazurski VIII",
        tagline: "Ekskluzywna cisza i prywatność",
        price: 680,
        priceWeekend: 850,
        guests: 6,
        bedrooms: 2,
        bathrooms: 2,
        area: 70,
        heroImage: "/images/skorupki/skorupki_8.webp",
        galleryStart: 32,
        description: "Domek premium z dwiema łazienkami i tarasemsem SPA. Wyjątkowy wystrój, jacuzzi na zewnętrznym tarasie i intymna lokalizacja na skraju lasu. Dla tych, którzy nie chcą rezygnować z luksusu nawet na wakacjach.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "DOUBLE_BED.svg",
                items: ["2 sypialnie premium", "Łóżka z materacami memory foam", "Pościel satynowa", "Szafy wnękowe", "TV w sypialni"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Kuchnia premium", "Lodówka wine cooler", "Płyta indukcyjna", "Piekarnik parowy", "Zmywarka", "Ekspres Nespresso", "Komplet naczyń premium"]
            },
            {
                category: "Łazienki (2)",
                icon: "BATHTUB.svg",
                items: ["Łazienka z wanną wolnostojącą", "Łazienka z prysznicem deszczowym", "Ręczniki pluszowe", "Suszarka Dyson", "Zestaw kosmetyków"]
            },
            {
                category: "Salon",
                icon: "SOFA.svg",
                items: ["Smart TV OLED 65\"", "Wi-Fi gigabit", "Klimatyzacja", "Sofa premium", "System audio"]
            },
            {
                category: "Taras SPA",
                icon: "SPA.svg",
                items: ["Jacuzzi zewnętrzne", "Leżaki premium", "Zadaszony taras", "Grill gazowy", "Parking VIP"]
            }
        ],
        highlights: [
            { icon: "SPA.svg", label: "Jacuzzi" },
            { icon: "BATHTUB.svg", label: "Wanna" },
            { icon: "WIFI.svg", label: "Wi-Fi Gigabit" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "BAR.svg", label: "Grill gazowy" },
            { icon: "TV.svg", label: "OLED TV" },
        ],
        rules: ["Zakaz palenia", "Bez zwierząt", "Cisza nocna 22:00", "Check-in: 15:00", "Kaucja: 500 zł"]
    },
    {
        id: 9,
        name: "Domek Mazurski IX",
        tagline: "Natury pełna garść dla całej rodziny",
        price: 600,
        priceWeekend: 750,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 60,
        heroImage: "/images/skorupki/skorupki_9.webp",
        galleryStart: 36,
        description: "Sielski domek otoczony sosnowym lasem. Doskonały dla rodzin z dziećmi — bezpieczna, zamknięta posesja, piaskownica, huśtawki i mnóstwo przestrzeni do zabawy na świeżym powietrzu.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "BED.svg",
                items: ["2 sypialnie", "Łóżko 2-osobowe + 2 pojedyncze", "Pościel", "Szafy"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Aneks kuchenny", "Lodówka", "Kuchenka", "Ekspres", "Naczynia"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic", "Ręczniki", "Suszarka"]
            },
            {
                category: "Salon",
                icon: "TV.svg",
                items: ["Smart TV", "Wi-Fi", "Klimatyzacja", "Sofa", "Stół"]
            },
            {
                category: "Plac zabaw",
                icon: "TOURIST.svg",
                items: ["Huśtawka ogrodowa", "Piaskownica", "Grill", "Ognisko", "Parking", "Ogrodzony ogród"]
            }
        ],
        highlights: [
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "TOURIST.svg", label: "Plac zabaw" },
            { icon: "PARKING.svg", label: "Parking" },
            { icon: "BAR.svg", label: "Ognisko" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "TV.svg", label: "Smart TV" },
        ],
        rules: ["Zakaz palenia", "Zwierzęta za opłatą", "Cisza nocna 22:00", "Check-in: 15:00"]
    },
    {
        id: 10,
        name: "Domek Mazurski X",
        tagline: "Luksus nad samą wodą",
        price: 700,
        priceWeekend: 900,
        guests: 6,
        bedrooms: 2,
        bathrooms: 1,
        area: 68,
        heroImage: "/images/skorupki/skorupki_10.webp",
        galleryStart: 40,
        description: "Flagowy domek kompleksu Skorupki. Bezpośredni dostęp do pomostu, widok na jezioro z tarasu, piękne drewniane wnętrza. Jedyne miejsce, gdzie możesz o świcie wyjść z domku wprost na pomost i zacząć dzień od porannej kąpieli.",
        amenities: [
            {
                category: "Sypialnia",
                icon: "DOUBLE_BED.svg",
                items: ["2 sypialnie z widokiem na jezioro", "Łóżka premium", "Pościel", "Szafy", "Rolety elektryczne"]
            },
            {
                category: "Kuchnia",
                icon: "CUTLERY.svg",
                items: ["Kuchnia premium", "Lodówka", "Płyta indukcyjna", "Piekarnik", "Ekspres do kawy", "Naczynia premium"]
            },
            {
                category: "Łazienka",
                icon: "SHOWER.svg",
                items: ["Prysznic deszczowy", "Ręczniki pluszowe", "Suszarka Dyson", "Zestaw kosmetyków"]
            },
            {
                category: "Salon",
                icon: "SOFA.svg",
                items: ["Smart TV 60\"", "Wi-Fi", "Klimatyzacja", "Sofa z widokiem na jezioro"]
            },
            {
                category: "Pomost i zewnętrze",
                icon: "SWIMMING.svg",
                items: ["Własny pomost", "Taras z widokiem na jezioro", "Leżaki", "Kajak w cenie", "Grill", "Parking"]
            }
        ],
        highlights: [
            { icon: "SWIMMING.svg", label: "Własny pomost" },
            { icon: "WIFI.svg", label: "Wi-Fi" },
            { icon: "AIR_CONDITIONER.svg", label: "Klimatyzacja" },
            { icon: "BAR.svg", label: "Grill" },
            { icon: "SUNBED.svg", label: "Leżaki" },
            { icon: "TV.svg", label: "Smart TV 60\"" },
        ],
        rules: ["Zakaz palenia", "Bez zwierząt", "Cisza nocna 22:00", "Check-in: 15:00", "Kaucja: 500 zł"]
    }
];

export function getCottageById(id: number): Cottage | undefined {
    return cottagesData.find(c => c.id === id);
}
