import { strandaApartments } from "@/data/stranda-apartments";
import { fuledaApartments } from "@/data/fuleda-data";
import { pokojeFuledaData } from "@/data/pokoje-fuleda-data";
import { kisajnoApartments } from "@/data/kisajno-data";
import { skorupkiData } from "@/data/skorupki-data";
import { mikolajkiData } from "@/data/mikolajki-data";
import { fuledzkieZaciszeData } from "@/data/fuledzkie-zacisze-data";
import type { Language } from "@/lib/translations";

export type AssistantFeature =
    | "jacuzzi"
    | "sauna"
    | "lakeView"
    | "lakeAccess"
    | "wifi"
    | "airConditioning"
    | "fireplace"
    | "washingMachine"
    | "dishwasher"
    | "parking"
    | "quiet"
    | "cityCenter";

export type AssistantContext = {
    lastOfferIds: string[];
    lastLocation?: string;
    guests?: number;
    features: AssistantFeature[];
    arrival?: string;
    departure?: string;
    bookingFlow?: boolean;
    awaiting?: "dates" | "guests" | "preferences";
    turn: number;
};

export type AvailabilityQuery = {
    from: string;
    to: string;
    guests: number;
    language: Language;
    offerIds: string[];
    idoBookingIds: string[];
};

export type AvailabilityApiResult = {
    ok: boolean;
    from?: string;
    to?: string;
    nights?: number;
    results?: Array<{
        id: string;
        available: boolean;
        reason?: string;
    }>;
    error?: string;
};

export type AssistantResult = {
    answer: string;
    context: AssistantContext;
    availabilityQuery?: AvailabilityQuery;
};

type Offer = {
    id: string;
    name: string;
    locationKey: LocationKey;
    location: string;
    lake?: string;
    category: "apartment" | "cottage" | "rooms" | "charter" | "upcoming";
    maxGuests?: number;
    price?: number;
    route: string;
    idoBookingId?: string;
    bookingUrl?: string;
    description: string;
    features: AssistantFeature[];
    amenities: string[];
    availableForBooking: boolean;
};

type LocationKey = "stranda" | "kisajno" | "fuleda" | "skorupki" | "mikolajki" | "zeglarska" | "charter";

const bookingUrl = (id: string) =>
    `https://client37851.idobooking.com/book-now/index.php?ob[${id}]=&showOtherOffers=true&currency=0&language=0&from_own_button=1`;

const normalize = (value: string) =>
    value
        .toLocaleLowerCase("pl")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ł/g, "l")
        .replace(/[^a-z0-9+]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

const flattenAmenities = (amenities: Record<string, string[] | undefined>) =>
    Object.values(amenities).flatMap((items) => items || []);

const maxGuests = (value: string | number) => {
    if (typeof value === "number") return value;
    return value
        .split("+")
        .map((part) => Number.parseInt(part.trim(), 10) || 0)
        .reduce((sum, part) => sum + part, 0);
};

const featureFromText = (values: string[]): AssistantFeature[] => {
    const text = normalize(values.join(" "));
    const features: AssistantFeature[] = [];
    const add = (feature: AssistantFeature, condition: boolean) => condition && features.push(feature);

    add("jacuzzi", text.includes("jacuzzi") || text.includes("dzakuzi"));
    add("sauna", text.includes("saun"));
    add("lakeView", text.includes("widok na jezior") || text.includes("widokiem na jezior"));
    add("lakeAccess", text.includes("dostep do jezior") || text.includes("dojscie do jezior") || text.includes("zejscie do jezior"));
    add("wifi", text.includes("wifi") || text.includes("internet"));
    add("airConditioning", text.includes("klimatyzac"));
    add("fireplace", text.includes("kominek"));
    add("washingMachine", text.includes("pralka"));
    add("dishwasher", text.includes("zmywarka"));
    add("parking", text.includes("parking"));
    return features;
};

const strandaOffers: Offer[] = Object.entries(strandaApartments).map(([id, apartment]) => {
    const amenities = flattenAmenities(apartment.amenities);
    return {
        id,
        name: `Apartament ${id} — ${apartment.title || apartment.shortTitle || "Stranda"}`,
        locationKey: "stranda",
        location: "Giżycko, Port Stranda",
        lake: "Kisajno",
        category: "apartment",
        maxGuests: maxGuests(apartment.guests),
        price: apartment.price,
        route: `/apartamenty/stranda/${id}`,
        idoBookingId: apartment.idoBookingId,
        bookingUrl: apartment.idoBookingId ? bookingUrl(apartment.idoBookingId) : undefined,
        description: apartment.description,
        features: featureFromText([
            apartment.title || "",
            apartment.type,
            apartment.description,
            ...(apartment.additionalInfo || []),
            ...amenities,
        ]),
        amenities,
        availableForBooking: Boolean(apartment.idoBookingId),
    };
});

const fuledaOffers: Offer[] = Object.entries(fuledaApartments).map(([id, apartment]) => {
    const amenities = flattenAmenities(apartment.amenities);
    return {
        id: `fuleda-${id}`,
        name: `Apartament Fuleda ${apartment.type}`,
        locationKey: "fuleda",
        location: "Fuleda",
        lake: "Dobskie",
        category: "apartment",
        maxGuests: maxGuests(apartment.guests),
        price: apartment.price,
        route: `/apartamenty/fuleda/${id}`,
        idoBookingId: apartment.idoBookingId,
        bookingUrl: apartment.idoBookingId ? bookingUrl(apartment.idoBookingId) : undefined,
        description: apartment.description,
        features: Array.from(new Set<AssistantFeature>([
            ...featureFromText([apartment.description, ...amenities]),
            "lakeAccess",
            "quiet",
        ])),
        amenities,
        availableForBooking: Boolean(apartment.idoBookingId),
    };
});

const kisajnoOffers: Offer[] = Object.entries(kisajnoApartments).map(([id, apartment]) => {
    const amenities = flattenAmenities(apartment.amenities);
    return {
        id,
        name: apartment.title,
        locationKey: "kisajno",
        location: "Giżycko, Port Neptun",
        lake: "Kisajno",
        category: "apartment",
        maxGuests: maxGuests(apartment.guests),
        price: apartment.price,
        route: `/apartamenty/kisajno/${id.toLowerCase()}`,
        idoBookingId: apartment.idoBookingId,
        bookingUrl: apartment.customBookingUrl || (apartment.idoBookingId ? bookingUrl(apartment.idoBookingId) : undefined),
        description: apartment.description,
        features: featureFromText([apartment.description, ...amenities]),
        amenities,
        availableForBooking: Boolean(apartment.idoBookingId),
    };
});

const fixedOffers: Offer[] = [
    {
        id: "pokoje-fuleda",
        name: pokojeFuledaData.title,
        locationKey: "fuleda",
        location: "Fuleda",
        lake: "Dobskie",
        category: "rooms",
        maxGuests: maxGuests(pokojeFuledaData.guests),
        price: 375,
        route: "/pokoje/fuleda",
        idoBookingId: pokojeFuledaData.idoBookingId,
        bookingUrl: pokojeFuledaData.idoBookingId ? bookingUrl(pokojeFuledaData.idoBookingId) : undefined,
        description: pokojeFuledaData.description,
        features: ["lakeAccess", "quiet", ...featureFromText([pokojeFuledaData.description, ...flattenAmenities(pokojeFuledaData.amenities)])],
        amenities: flattenAmenities(pokojeFuledaData.amenities),
        availableForBooking: true,
    },
    {
        id: "skorupki",
        name: skorupkiData.title,
        locationKey: "skorupki",
        location: "Skorupki",
        category: "cottage",
        maxGuests: maxGuests(skorupkiData.guests),
        price: skorupkiData.price,
        route: "/domki/skorupki",
        idoBookingId: skorupkiData.idoBookingId,
        bookingUrl: skorupkiData.customBookingUrl,
        description: `${skorupkiData.description} Osada obejmuje ${skorupkiData.unitsCount} domków; jezioro i prywatna strefa rekreacyjna znajdują się około 350 metrów od domków.`,
        features: ["quiet", "parking", "wifi", "airConditioning", "fireplace", "dishwasher"],
        amenities: ["2 sypialnie", "kuchnia", "łazienka", "zadaszony taras", "grill", "parking", "Wi-Fi"],
        availableForBooking: true,
    },
    {
        id: "fuledzkie-zacisze",
        name: fuledzkieZaciszeData.title,
        locationKey: "fuleda",
        location: "Fuleda",
        lake: "Dobskie",
        category: "cottage",
        maxGuests: 6,
        route: "/domki/fuledzkie-zacisze",
        idoBookingId: fuledzkieZaciszeData.idoBookingId,
        bookingUrl: fuledzkieZaciszeData.customBookingUrl,
        description: fuledzkieZaciszeData.description,
        features: ["quiet", "fireplace", "parking", "dishwasher", ...featureFromText([fuledzkieZaciszeData.description, ...flattenAmenities(fuledzkieZaciszeData.amenities)])],
        amenities: flattenAmenities(fuledzkieZaciszeData.amenities),
        availableForBooking: true,
    },
    {
        id: "mikolajki",
        name: mikolajkiData.title,
        locationKey: "mikolajki",
        location: "Mikołajki, Plac Wolności",
        category: "apartment",
        maxGuests: maxGuests(mikolajkiData.guests),
        price: mikolajkiData.price,
        route: "/apartamenty/mikolajki",
        idoBookingId: mikolajkiData.idoBookingId,
        bookingUrl: mikolajkiData.idoBookingId ? bookingUrl(mikolajkiData.idoBookingId) : undefined,
        description: mikolajkiData.description,
        features: ["cityCenter", ...featureFromText([mikolajkiData.description, ...flattenAmenities(mikolajkiData.amenities)])],
        amenities: flattenAmenities(mikolajkiData.amenities),
        availableForBooking: true,
    },
    {
        id: "zeglarska",
        name: "Apartamenty Żeglarska",
        locationKey: "zeglarska",
        location: "Giżycko",
        lake: "Niegocin",
        category: "upcoming",
        route: "/apartamenty",
        description: "Nowa lokalizacja w Giżycku nad jeziorem Niegocin. Oferta jest w przygotowaniu.",
        features: ["lakeView", "cityCenter"],
        amenities: [],
        availableForBooking: false,
    },
];

const offers: Offer[] = [...strandaOffers, ...fuledaOffers, ...kisajnoOffers, ...fixedOffers];
const offersById = new Map(offers.map((offer) => [offer.id.toUpperCase(), offer]));

const featureTerms: Record<AssistantFeature, string[]> = {
    jacuzzi: ["jacuzzi", "dzakuzi", "hot tub", "whirlpool"],
    sauna: ["sauna", "saune", "pirtis"],
    lakeView: ["widok na jezioro", "lake view", "seeblick", "vaizdas i ezera", "vyhled na jezero"],
    lakeAccess: ["dostep do jeziora", "nad jeziorem", "lake access", "am see", "prie ezero", "u jezera"],
    wifi: ["wifi", "wi fi", "internet"],
    airConditioning: ["klimatyzacja", "klima", "air conditioning", "klimaanlage", "oro kondicionierius", "klimatizace"],
    fireplace: ["kominek", "fireplace", "kamin", "zidinys", "krb"],
    washingMachine: ["pralka", "washing machine", "waschmaschine", "skalbimo masin", "pracka"],
    dishwasher: ["zmywarka", "dishwasher", "spulmaschine", "indaplove", "mycka"],
    parking: ["parking", "parkow", "parkplatz", "parkav"],
    quiet: ["cisza", "spokoj", "quiet", "ruhe", "ramyb", "klid"],
    cityCenter: ["centrum", "center", "centre", "stadtzentrum", "miesto cent", "centru"],
};

const locationTerms: Record<LocationKey, string[]> = {
    stranda: ["stranda", "port stranda", "marina stranda", "pierkunowo 36", "zatoka tracz", "tracz bay"],
    kisajno: ["kisajno", "k11", "k15", "port neptun", "neptun"],
    fuleda: ["fuleda", "fuledzie", "fuledy", "fuledzkie zacisze", "dobskie"],
    skorupki: ["skorupki", "domek skorupki", "domki skorupki"],
    mikolajki: ["mikolajki", "gigu", "plac wolnosci"],
    zeglarska: ["zeglarska", "niegocin"],
    charter: ["czarter", "jacht", "stillo", "yacht", "boot", "laivas", "lod"],
};

const intentTerms = {
    compare: ["porownaj", "porownanie", "roznica", "czym sie rozni", "compare", "difference", "versus", "vs", "vergleichen", "unterschied", "palygink", "skirtumas", "porovnej", "rozdil"],
    availability: ["dostepnosc", "dostepny", "dostepna", "dostepne", "wolny termin", "wolne", "rezerw", "availability", "available", "book", "frei", "verfugbar", "buchen", "laisv", "rezerv", "voln", "rezervace"],
    price: ["cena", "koszt", "ile kosztuje", "price", "cost", "preis", "koster", "kaina", "cena", "kolik"],
    location: ["gdzie", "lokalizacja", "adres", "mapa", "where", "location", "address", "wo", "adresse", "kur", "vieta", "kde", "adresa"],
    details: ["wiecej", "szczegoly", "wyposazenie", "udogodnienia", "co ma", "tell me more", "details", "amenities", "mehr", "ausstattung", "placiau", "patogum", "vice", "vybaveni"],
    offer: ["oferta", "nocleg", "apartament", "domek", "pokoj", "offer", "stay", "apartment", "cottage", "room", "unterkunft", "wohnung", "ferienhaus", "apgyvendin", "butas", "namelis", "ubytovani", "apartman", "chata"],
    contact: ["kontakt", "telefon", "mail", "email", "contact", "phone", "kontaktieren", "ruf", "susisiekti", "zavolat"],
    greeting: ["czesc", "hej", "dzien dobry", "witam", "hello", "hi", "good morning", "hallo", "guten tag", "labas", "sveiki", "ahoj", "dobry den"],
    pets: ["zwierze", "pies", "psa", "kot", "pet", "dog", "cat", "haustier", "hund", "katze", "augintin", "suo", "kocka", "pes"],
    checkIn: ["zameldowanie", "wymeldowanie", "doba", "przyjazd", "wyjazd", "check in", "check out", "ankunft", "abreise", "atvyk", "isvyk", "prijezd", "odjezd"],
    tavern: ["tawerna", "restauracja", "jedzenie", "menu", "sniadanie", "piwo", "browar", "tavern", "restaurant", "food", "breakfast", "beer", "essen", "fruhstuck", "bier", "brauerei", "maistas", "pusryciai", "alus", "jidlo", "snidane", "pivo"],
    concerts: ["koncert", "muzyka", "szanty", "rock", "concert", "music", "konzert", "musik", "muzika", "koncerty", "hudba"],
    joke: ["zart", "dowcip", "rozsmiesz", "umiesz zartowac", "joke", "funny", "make me laugh", "witz", "lustig", "pokstas", "juokinga", "vtip", "legrace"],
};

const locale = {
    pl: {
        hello: "Cześć! Pomogę dobrać nocleg na podstawie liczby osób, lokalizacji i udogodnień. Mogę też porównać konkretne obiekty oraz skierować do aktualnego kalendarza IdoBooking.",
        ask: "Napisz proszę, dla ilu osób szukasz noclegu i co jest dla Ciebie najważniejsze: jezioro, cisza, centrum, jacuzzi czy sauna?",
        noMatch: "Nie znalazłem obiektu spełniającego wszystkie podane warunki. Mogę poluzować jeden z nich albo zaproponować dwa obiekty obok siebie dla większej grupy.",
        found: (count: number) => `Najlepiej pasujące propozycje (${count}):`,
        guests: "maks. osób",
        from: "od",
        indicative: "Cena widoczna w bazie jest orientacyjna. Aktualną kwotę dla konkretnego terminu pokaże IdoBooking.",
        details: "Szczegóły",
        booking: "Sprawdź termin i cenę w IdoBooking",
        unavailable: "Ta lokalizacja jest oznaczona jako „wkrótce” i nie ma jeszcze aktywnego kalendarza rezerwacji.",
        availability: "Podaj termin oraz liczbę osób, a sprawdzę kalendarze obiektów w IdoBooking.",
        askDates: "Podaj dokładny termin przyjazdu i wyjazdu, np. **15–18 sierpnia** albo **15.08–18.08.2026**.",
        askGuests: "Termin mam zapisany. Dla ilu osób mam szukać?",
        dateError: "Nie udało mi się jednoznacznie odczytać terminu. Wpisz proszę dwie daty: przyjazd i wyjazd, np. **15.08–18.08.2026**.",
        pastDate: "Ten termin już minął. Podaj proszę przyszłą datę przyjazdu i wyjazdu.",
        longStay: "Jednorazowo sprawdzam pobyty do 28 nocy. Podaj krótszy zakres albo skontaktuj się z rezerwacją: 730 067 027.",
        checking: "Sprawdzam kalendarze IdoBooking dla podanego terminu…",
        liveFound: (count: number, range: string) => `Sprawdziłem IdoBooking dla terminu **${range}**. Wolne obiekty (${count}):`,
        liveNone: (range: string) => `Sprawdziłem IdoBooking dla terminu **${range}** — wśród dopasowanych obiektów nie znalazłem wolnego. Możesz zmienić daty albo poluzować jedno wymaganie.`,
        liveError: "Nie udało się teraz pobrać kalendarza IdoBooking. Poniżej podaję bezpośrednie linki do dopasowanych obiektów, żeby można było sprawdzić je ręcznie:",
        compare: "Porównanie",
        location: "Lokalizacja",
        lake: "Jezioro",
        features: "Najważniejsze cechy",
        price: "Cena od",
        contact: "Rezerwacje: **730 067 027** lub **rezerwacje@mazury.holiday**.",
        checkIn: "Standardowo zameldowanie jest od 15:00, a wymeldowanie do 11:00. Jeśli potrzebujesz innych godzin, potwierdź je przed przyjazdem pod numerem 730 067 027.",
        pets: "Zasady dotyczące zwierząt zależą od obiektu. Nie chcę podawać niepewnej informacji — przed rezerwacją potwierdź konkretny obiekt pod numerem 730 067 027.",
        allOffers: "Oferta Mazury.Holiday obejmuje apartamenty w Giżycku przy jeziorze Kisajno, Fuledę nad jeziorem Dobskim, apartament w centrum Mikołajek, Domki Skorupki, Domek Fuledzkie Zacisze oraz czarter Stillo 30 VIP. Apartamenty Żeglarska nad Niegocinem są oznaczone jako „wkrótce”.",
        followUp: "Mogę zawęzić wybór po liczbie osób, cenie orientacyjnej albo udogodnieniach.",
        charter: "Stillo 30 VIP stacjonuje w Porcie Stranda. To jacht motorowy dla maksymalnie 8 osób, z trzema zamykanymi kabinami, ogrzewaniem Webasto i wyposażeniem turystycznym. Zgodnie z informacją w ofercie można nim pływać bez patentu po przeszkoleniu.",
        tavern: "Tawerna Stranda jest częścią Portu Stranda nad jeziorem Kisajno, pod adresem Pierkunowo 36 w Giżycku. Serwuje śniadania, dania sezonowe, pizzę z pieca i piwo z Browaru Stranda. Karta oraz godziny zmieniają się sezonowo, więc aktualne informacje warto potwierdzić bezpośrednio w Tawernie.",
        concerts: "Koncerty szantowo-rockowe odbywają się w sezonie letnim przy Tawernie w Porcie Stranda nad Kisajnem. Bieżący program i plakat są na podstronie koncertowej.",
    },
    en: {
        hello: "Hello! I can match accommodation to your group size, preferred location and amenities. I can also compare properties and direct you to the live IdoBooking calendar.",
        ask: "Tell me how many guests you have and what matters most: the lake, peace and quiet, the town centre, a hot tub or a sauna?",
        noMatch: "I could not find a property matching every condition. I can relax one filter or suggest two nearby units for a larger group.",
        found: (count: number) => `Best matches (${count}):`,
        guests: "max. guests", from: "from", indicative: "The listed price is indicative. IdoBooking will show the current total for your dates.",
        details: "Details", booking: "Check dates and price in IdoBooking", unavailable: "This location is marked as coming soon and does not have an active booking calendar yet.",
        availability: "Tell me your dates and group size, and I will check the property calendars in IdoBooking.",
        askDates: "Enter exact arrival and departure dates, for example **15–18 August** or **15/08–18/08/2026**.",
        askGuests: "I have saved the dates. How many guests should I search for?",
        dateError: "I could not read the dates unambiguously. Please enter both arrival and departure, for example **15/08–18/08/2026**.",
        pastDate: "Those dates have already passed. Please enter a future arrival and departure date.",
        longStay: "I can check stays of up to 28 nights at once. Enter a shorter range or contact reservations at +48 730 067 027.",
        checking: "Checking the IdoBooking calendars for your dates…",
        liveFound: (count: number, range: string) => `I checked IdoBooking for **${range}**. Available properties (${count}):`,
        liveNone: (range: string) => `I checked IdoBooking for **${range}** and found no availability among the matching properties. Try different dates or relax one requirement.`,
        liveError: "I could not retrieve the IdoBooking calendar just now. Here are direct links to the matching properties for a manual check:",
        compare: "Comparison", location: "Location", lake: "Lake", features: "Key features", price: "Price from",
        contact: "Reservations: **+48 730 067 027** or **rezerwacje@mazury.holiday**.",
        checkIn: "Standard check-in starts at 15:00 and check-out is by 11:00. Please confirm any different arrangement before arrival at +48 730 067 027.",
        pets: "Pet rules vary by property. To avoid giving you uncertain information, please confirm the specific property before booking at +48 730 067 027.",
        allOffers: "Mazury.Holiday offers apartments in Giżycko by Lake Kisajno, stays in Fuleda by Lake Dobskie, an apartment in central Mikołajki, Skorupki cottages, Fuledzkie Zacisze cottage and a Stillo 30 VIP charter. Żeglarska apartments by Lake Niegocin are marked as coming soon.",
        followUp: "I can narrow the list by group size, indicative price or amenities.",
        charter: "Stillo 30 VIP is based at Port Stranda. It is a motor yacht for up to 8 guests, with three lockable cabins, Webasto heating and touring equipment. According to the offer, it can be operated without a licence after training.",
        tavern: "Tawerna Stranda is part of Port Stranda on Lake Kisajno, at Pierkunowo 36 in Giżycko. It serves breakfast, seasonal dishes, wood-fired pizza and beer from Stranda Brewery. The menu and opening hours vary by season, so please confirm current details directly with the tavern.",
        concerts: "Shanty and rock concerts take place in summer by the tavern at Port Stranda on Lake Kisajno. The current programme and poster are available on the concert page.",
    },
    de: {
        hello: "Hallo! Ich finde eine Unterkunft passend zur Personenzahl, Lage und Ausstattung. Ich kann Objekte vergleichen und zum aktuellen IdoBooking-Kalender führen.",
        ask: "Für wie viele Personen suchen Sie und was ist Ihnen wichtig: See, Ruhe, Zentrum, Whirlpool oder Sauna?",
        noMatch: "Ich habe kein Objekt gefunden, das alle Bedingungen erfüllt. Ich kann einen Filter lockern oder zwei nahe Unterkünfte für eine größere Gruppe vorschlagen.",
        found: (count: number) => `Beste Treffer (${count}):`,
        guests: "max. Gäste", from: "ab", indicative: "Der angezeigte Preis ist ein Richtwert. Den aktuellen Gesamtpreis für Ihren Termin zeigt IdoBooking.",
        details: "Details", booking: "Termin und Preis in IdoBooking prüfen", unavailable: "Dieser Standort ist als „demnächst“ markiert und hat noch keinen aktiven Buchungskalender.",
        availability: "Nennen Sie Reisedaten und Personenzahl; ich prüfe dann die Objektkalender in IdoBooking.",
        askDates: "Bitte nennen Sie Anreise und Abreise, zum Beispiel **15.–18. August** oder **15.08.–18.08.2026**.",
        askGuests: "Die Reisedaten sind gespeichert. Für wie viele Personen soll ich suchen?",
        dateError: "Ich konnte den Zeitraum nicht eindeutig erkennen. Bitte geben Sie Anreise und Abreise ein, zum Beispiel **15.08.–18.08.2026**.",
        pastDate: "Dieser Zeitraum liegt bereits in der Vergangenheit. Bitte geben Sie zukünftige Reisedaten ein.",
        longStay: "Ich prüfe Aufenthalte bis 28 Nächte. Bitte wählen Sie einen kürzeren Zeitraum oder rufen Sie +48 730 067 027 an.",
        checking: "Ich prüfe die IdoBooking-Kalender für den gewünschten Zeitraum…",
        liveFound: (count: number, range: string) => `Ich habe IdoBooking für **${range}** geprüft. Verfügbare Objekte (${count}):`,
        liveNone: (range: string) => `Ich habe IdoBooking für **${range}** geprüft und unter den passenden Objekten nichts Freies gefunden. Ändern Sie den Zeitraum oder lockern Sie eine Bedingung.`,
        liveError: "Der IdoBooking-Kalender konnte gerade nicht geladen werden. Hier sind direkte Links zu den passenden Objekten für eine manuelle Prüfung:",
        compare: "Vergleich", location: "Lage", lake: "See", features: "Wichtigste Merkmale", price: "Preis ab",
        contact: "Reservierung: **+48 730 067 027** oder **rezerwacje@mazury.holiday**.",
        checkIn: "Der Check-in beginnt normalerweise um 15:00 Uhr, der Check-out ist bis 11:00 Uhr. Abweichende Zeiten bitte vor der Anreise unter +48 730 067 027 bestätigen.",
        pets: "Die Regeln für Haustiere unterscheiden sich je nach Objekt. Bitte bestätigen Sie das konkrete Objekt vor der Buchung unter +48 730 067 027.",
        allOffers: "Mazury.Holiday bietet Apartments in Giżycko am Kisajno-See, Unterkünfte in Fuleda am Dobskie-See, ein Apartment im Zentrum von Mikołajki, die Ferienhäuser Skorupki, das Haus Fuledzkie Zacisze und die Yacht Stillo 30 VIP. Die Apartments Żeglarska am Niegocin-See sind als „demnächst“ markiert.",
        followUp: "Ich kann die Auswahl nach Personenzahl, Richtpreis oder Ausstattung eingrenzen.",
        charter: "Die Stillo 30 VIP liegt im Port Stranda. Sie ist eine Motoryacht für bis zu 8 Personen, mit drei abschließbaren Kabinen, Webasto-Heizung und Reiseausstattung. Laut Angebot darf sie nach einer Einweisung ohne Führerschein gefahren werden.",
        tavern: "Die Tawerna Stranda gehört zum Port Stranda am Kisajno-See, Pierkunowo 36 in Giżycko. Angeboten werden Frühstück, saisonale Gerichte, Holzofenpizza und Bier aus der Stranda-Brauerei. Karte und Öffnungszeiten ändern sich saisonal; aktuelle Angaben bitte direkt bestätigen.",
        concerts: "Im Sommer finden Shanty- und Rockkonzerte bei der Tawerna im Port Stranda am Kisajno-See statt. Das aktuelle Programm und Plakat stehen auf der Konzertseite.",
    },
    lt: {
        hello: "Sveiki! Galiu parinkti nakvynę pagal žmonių skaičių, vietą ir patogumus, palyginti objektus ir nukreipti į aktualų „IdoBooking“ kalendorių.",
        ask: "Parašykite, kiek žmonių atvyks ir kas svarbiausia: ežeras, ramybė, centras, sūkurinė vonia ar sauna?",
        noMatch: "Neradau objekto, atitinkančio visas sąlygas. Galiu sušvelninti vieną filtrą arba didesnei grupei pasiūlyti du netolimus objektus.",
        found: (count: number) => `Tinkamiausi variantai (${count}):`,
        guests: "daug. svečių", from: "nuo", indicative: "Nurodyta kaina yra orientacinė. Dabartinę kainą pasirinktoms datoms parodys „IdoBooking“.",
        details: "Išsamiau", booking: "Tikrinti datas ir kainą „IdoBooking“", unavailable: "Ši vieta pažymėta „netrukus“ ir dar neturi aktyvaus rezervavimo kalendoriaus.",
        availability: "Nurodykite datas ir žmonių skaičių, o aš patikrinsiu objektų kalendorius „IdoBooking“.",
        askDates: "Nurodykite tikslias atvykimo ir išvykimo datas, pvz., **rugpjūčio 15–18 d.** arba **2026-08-15–2026-08-18**.",
        askGuests: "Datas išsaugojau. Keliems žmonėms ieškoti?",
        dateError: "Nepavyko vienareikšmiškai suprasti datų. Įrašykite atvykimą ir išvykimą, pvz., **2026-08-15–2026-08-18**.",
        pastDate: "Šios datos jau praėjo. Nurodykite būsimas atvykimo ir išvykimo datas.",
        longStay: "Vienu metu tikrinu iki 28 naktų. Nurodykite trumpesnį laikotarpį arba skambinkite +48 730 067 027.",
        checking: "Tikrinami „IdoBooking“ kalendoriai pagal jūsų datas…",
        liveFound: (count: number, range: string) => `Patikrinau „IdoBooking“ laikotarpiui **${range}**. Laisvi objektai (${count}):`,
        liveNone: (range: string) => `Patikrinau „IdoBooking“ laikotarpiui **${range}**, tačiau tarp tinkamų objektų laisvų vietų neradau. Pakeiskite datas arba vieną reikalavimą.`,
        liveError: "Šiuo metu nepavyko gauti „IdoBooking“ kalendoriaus. Pateikiu tiesiogines tinkamų objektų nuorodas rankiniam patikrinimui:",
        compare: "Palyginimas", location: "Vieta", lake: "Ežeras", features: "Svarbiausi patogumai", price: "Kaina nuo",
        contact: "Rezervacija: **+48 730 067 027** arba **rezerwacje@mazury.holiday**.",
        checkIn: "Įprastai atvykimas nuo 15:00, išvykimas iki 11:00. Kitą laiką prieš atvykstant patvirtinkite telefonu +48 730 067 027.",
        pets: "Gyvūnų taisyklės priklauso nuo objekto. Prieš rezervuodami konkretų objektą patvirtinkite telefonu +48 730 067 027.",
        allOffers: "„Mazury.Holiday“ siūlo apartamentus Gižycke prie Kisajno ežero, Fuledoje prie Dobskie ežero, apartamentą Mikolaikų centre, Skorupki namelius, Fuledzkie Zacisze namą ir „Stillo 30 VIP“ nuomą. Żeglarska apartamentai prie Niegocin ežero pažymėti „netrukus“.",
        followUp: "Galiu susiaurinti pasirinkimą pagal žmonių skaičių, orientacinę kainą arba patogumus.",
        charter: "„Stillo 30 VIP“ laikoma Port Stranda. Tai motorinė jachta iki 8 žmonių, su trimis uždaromomis kajutėmis, „Webasto“ šildymu ir turistine įranga. Pagal pasiūlymą po instruktažo ją galima valdyti be licencijos.",
        tavern: "„Tawerna Stranda“ yra Port Stranda dalis prie Kisajno ežero, adresu Pierkunowo 36, Gižyckas. Čia siūlomi pusryčiai, sezoniniai patiekalai, krosnyje kepta pica ir Stranda alaus daryklos alus. Meniu ir darbo laikas keičiasi sezoniškai, todėl juos patvirtinkite tiesiogiai.",
        concerts: "Vasarą prie Port Stranda tavernos, šalia Kisajno ežero, vyksta šantų ir roko koncertai. Dabartinė programa ir plakatas pateikti koncertų puslapyje.",
    },
    cs: {
        hello: "Dobrý den! Vyberu ubytování podle počtu osob, lokality a vybavení, porovnám objekty a nasměruji vás na aktuální kalendář IdoBooking.",
        ask: "Napište, pro kolik osob hledáte ubytování a co je nejdůležitější: jezero, klid, centrum, vířivka nebo sauna?",
        noMatch: "Nenašel jsem objekt splňující všechny podmínky. Mohu jeden filtr zmírnit nebo navrhnout dvě blízká ubytování pro větší skupinu.",
        found: (count: number) => `Nejvhodnější možnosti (${count}):`,
        guests: "max. osob", from: "od", indicative: "Uvedená cena je orientační. Aktuální cenu pro váš termín zobrazí IdoBooking.",
        details: "Podrobnosti", booking: "Ověřit termín a cenu v IdoBooking", unavailable: "Tato lokalita je označena jako „již brzy“ a zatím nemá aktivní rezervační kalendář.",
        availability: "Napište termín a počet osob; zkontroluji kalendáře objektů v IdoBooking.",
        askDates: "Zadejte přesný příjezd a odjezd, například **15.–18. srpna** nebo **15.08.–18.08.2026**.",
        askGuests: "Termín mám uložený. Pro kolik osob mám hledat?",
        dateError: "Termín se mi nepodařilo jednoznačně přečíst. Zadejte příjezd i odjezd, například **15.08.–18.08.2026**.",
        pastDate: "Tento termín už uplynul. Zadejte budoucí datum příjezdu a odjezdu.",
        longStay: "Najednou kontroluji pobyty do 28 nocí. Zadejte kratší období nebo volejte +48 730 067 027.",
        checking: "Kontroluji kalendáře IdoBooking pro zadaný termín…",
        liveFound: (count: number, range: string) => `Zkontroloval jsem IdoBooking pro **${range}**. Volné objekty (${count}):`,
        liveNone: (range: string) => `Zkontroloval jsem IdoBooking pro **${range}**, ale mezi odpovídajícími objekty není nic volného. Změňte termín nebo zmírněte jeden požadavek.`,
        liveError: "Kalendář IdoBooking se nyní nepodařilo načíst. Zde jsou přímé odkazy na odpovídající objekty pro ruční kontrolu:",
        compare: "Porovnání", location: "Lokalita", lake: "Jezero", features: "Hlavní vlastnosti", price: "Cena od",
        contact: "Rezervace: **+48 730 067 027** nebo **rezerwacje@mazury.holiday**.",
        checkIn: "Standardní příjezd je od 15:00 a odjezd do 11:00. Jiný čas potvrďte před příjezdem na +48 730 067 027.",
        pets: "Pravidla pro zvířata se liší podle objektu. Konkrétní objekt před rezervací potvrďte na +48 730 067 027.",
        allOffers: "Mazury.Holiday nabízí apartmány v Giżycku u jezera Kisajno, ubytování ve Fuledě u jezera Dobskie, apartmán v centru Mikołajek, chaty Skorupki, dům Fuledzkie Zacisze a pronájem Stillo 30 VIP. Apartmány Żeglarska u jezera Niegocin jsou označeny „již brzy“.",
        followUp: "Výběr mohu zúžit podle počtu osob, orientační ceny nebo vybavení.",
        charter: "Stillo 30 VIP kotví v Portu Stranda. Je to motorová jachta až pro 8 osob se třemi uzamykatelnými kajutami, topením Webasto a turistickým vybavením. Podle nabídky ji lze po zaškolení řídit bez průkazu.",
        tavern: "Tawerna Stranda je součástí Portu Stranda u jezera Kisajno, Pierkunowo 36 v Giżycku. Nabízí snídaně, sezónní jídla, pizzu z pece a pivo z pivovaru Stranda. Menu a otevírací doba se mění podle sezóny, proto je potvrďte přímo v taverně.",
        concerts: "V létě se u taverny v Portu Stranda na jezeře Kisajno konají šantové a rockové koncerty. Aktuální program a plakát najdete na stránce koncertů.",
    },
} satisfies Record<Language, Record<string, unknown>>;

const dialogueVariants: Record<Language, { dates: string[]; guests: string[]; general: string[] }> = {
    pl: {
        dates: [
            "Podaj dokładny termin przyjazdu i wyjazdu, np. **15–18 sierpnia**.",
            "Najpierw termin: od kiedy do kiedy chcesz przyjechać? Możesz wpisać np. **15.08–18.08.2026**.",
            "Żebym uruchomił sprawdzanie kalendarzy, potrzebuję dwóch dat: przyjazdu i wyjazdu.",
        ],
        guests: [
            "Termin zapisany. Ile osób przyjeżdża?",
            "Daty mam. Teraz podaj liczbę gości.",
            "Dla ilu osób mam sprawdzić wolne obiekty?",
        ],
        general: [
            "Ile osób przyjeżdża i co jest najważniejsze: jezioro, cisza, centrum, jacuzzi czy sauna?",
            "Podaj liczbę gości oraz jedno lub dwa wymagania, a zawężę ofertę.",
            "Szukamy apartamentu, domku czy pokoju? Dopisz liczbę osób i ważne udogodnienia.",
        ],
    },
    en: {
        dates: ["Enter arrival and departure dates, for example **15–18 August**.", "What dates should I check? You can type **15/08–18/08/2026**.", "I need both arrival and departure to check the calendars."],
        guests: ["Dates saved. How many guests are coming?", "I have the dates; now enter the group size.", "How many guests should I search for?"],
        general: ["How many guests are coming, and what matters most: lake, quiet, centre, hot tub or sauna?", "Enter your group size and one or two requirements, and I will narrow the list.", "Apartment, cottage or room? Add the number of guests and the amenities you need."],
    },
    de: {
        dates: ["Bitte Anreise und Abreise eingeben, zum Beispiel **15.–18. August**.", "Welchen Zeitraum soll ich prüfen? Zum Beispiel **15.08.–18.08.2026**.", "Für die Kalenderprüfung brauche ich Anreise und Abreise."],
        guests: ["Zeitraum gespeichert. Wie viele Personen kommen?", "Die Daten habe ich; jetzt fehlt die Personenzahl.", "Für wie viele Personen soll ich freie Objekte suchen?"],
        general: ["Wie viele Personen kommen, und was ist wichtig: See, Ruhe, Zentrum, Whirlpool oder Sauna?", "Nennen Sie Personenzahl und ein oder zwei Wünsche; ich grenze die Auswahl ein.", "Apartment, Ferienhaus oder Zimmer? Bitte Personenzahl und gewünschte Ausstattung ergänzen."],
    },
    lt: {
        dates: ["Nurodykite atvykimo ir išvykimo datas, pvz., **2026-08-15–2026-08-18**.", "Kokį laikotarpį patikrinti? Reikia atvykimo ir išvykimo datų.", "Kalendoriams patikrinti įrašykite abi datas."],
        guests: ["Datos išsaugotos. Kiek žmonių atvyks?", "Datas turiu; dabar nurodykite žmonių skaičių.", "Keliems žmonėms ieškoti laisvų objektų?"],
        general: ["Kiek žmonių atvyks ir kas svarbiausia: ežeras, ramybė, centras, sūkurinė vonia ar sauna?", "Nurodykite žmonių skaičių ir vieną ar du reikalavimus.", "Apartamentai, namelis ar kambarys? Pridėkite žmonių skaičių ir patogumus."],
    },
    cs: {
        dates: ["Zadejte příjezd a odjezd, například **15.–18. srpna**.", "Jaký termín mám zkontrolovat? Můžete napsat **15.08.–18.08.2026**.", "Pro kontrolu kalendářů potřebuji datum příjezdu i odjezdu."],
        guests: ["Termín uložen. Kolik osob přijede?", "Data mám; nyní zadejte počet osob.", "Pro kolik osob mám hledat volné objekty?"],
        general: ["Kolik osob přijede a co je důležité: jezero, klid, centrum, vířivka nebo sauna?", "Zadejte počet osob a jeden nebo dva požadavky; zúžím nabídku.", "Apartmán, chata nebo pokoj? Přidejte počet osob a požadované vybavení."],
    },
};

const dialoguePrompt = (language: Language, kind: keyof (typeof dialogueVariants)[Language], turn: number) => {
    const variants = dialogueVariants[language][kind];
    return variants[turn % variants.length];
};

const strandaKnowledge: Record<Language, string> = {
    pl: "**Stranda** to nie jeden apartament, lecz port i kompleks Stranda Residence w Giżycku, nad jeziorem Kisajno i zatoką Tracz. Apartamenty Mazury.Holiday znajdują się w budynkach A, B i C. W porcie działają marina, wypożyczalnia sprzętu wodnego i Tawerna Stranda, a latem odbywają się koncerty szantowo-rockowe. Stąd dostępny jest też czarter Stillo 30 VIP. Część apartamentów ma prywatne jacuzzi; B202 ma również saunę. Adres Tawerny i portu: Pierkunowo 36, 11-500 Giżycko.\n\nApartamenty Kisajno K11 i K15 leżą nad tym samym jeziorem, ale w osobnej lokalizacji — przy Porcie Neptun. To częsta pomyłka, więc pilnuję jej za Ciebie.\n\n[Zobacz apartamenty Stranda](/apartamenty/stranda) · [Tawerna](/tawerna) · [Koncerty](/koncerty) · [Czarter](/czarter)",
    en: "**Stranda** is not one apartment but a marina and the Stranda Residence complex in Giżycko, on Lake Kisajno and Tracz Bay. Mazury.Holiday apartments are located in buildings A, B and C. The port includes a marina, water-equipment rental and Tawerna Stranda, with shanty and rock concerts in summer. Stillo 30 VIP charter is also based here. Selected apartments have a private hot tub; B202 also has a sauna. The port and tavern address is Pierkunowo 36, 11-500 Giżycko.\n\nKisajno apartments K11 and K15 are on the same lake but at a separate location, Port Neptun. It is an easy mix-up, so I keep the distinction clear.\n\n[Stranda apartments](/apartamenty/stranda) · [Tavern](/tawerna) · [Concerts](/koncerty) · [Charter](/czarter)",
    de: "**Stranda** ist nicht ein einzelnes Apartment, sondern ein Hafen und der Komplex Stranda Residence in Giżycko am Kisajno-See und an der Tracz-Bucht. Die Apartments von Mazury.Holiday liegen in den Gebäuden A, B und C. Zum Hafen gehören Marina, Wassersportverleih und Tawerna Stranda; im Sommer gibt es Shanty- und Rockkonzerte. Auch die Stillo 30 VIP liegt hier. Ausgewählte Apartments haben einen privaten Whirlpool, B202 zusätzlich eine Sauna. Adresse von Hafen und Taverne: Pierkunowo 36, 11-500 Giżycko.\n\nDie Kisajno-Apartments K11 und K15 liegen am selben See, aber an einem anderen Ort — Port Neptun. Diese Standorte werden leicht verwechselt; ich trenne sie sauber.\n\n[Stranda Apartments](/apartamenty/stranda) · [Taverne](/tawerna) · [Konzerte](/koncerty) · [Charter](/czarter)",
    lt: "**Stranda** – tai ne vieni apartamentai, o uostas ir „Stranda Residence“ kompleksas Gižycke, prie Kisajno ežero ir Tracz įlankos. „Mazury.Holiday“ apartamentai yra A, B ir C pastatuose. Uoste veikia marina, vandens įrangos nuoma ir „Tawerna Stranda“, o vasarą vyksta šantų bei roko koncertai. Čia laikoma ir „Stillo 30 VIP“. Kai kuriuose apartamentuose yra privati sūkurinė vonia, B202 – dar ir sauna. Adresas: Pierkunowo 36, 11-500 Giżycko.\n\nKisajno K11 ir K15 yra prie to paties ežero, tačiau kitoje vietoje — Port Neptun. Šias vietas lengva supainioti, todėl jas aiškiai atskiriu.\n\n[Stranda apartamentai](/apartamenty/stranda) · [Taverna](/tawerna) · [Koncertai](/koncerty) · [Jachtos nuoma](/czarter)",
    cs: "**Stranda** není jeden apartmán, ale přístav a komplex Stranda Residence v Giżycku u jezera Kisajno a zátoky Tracz. Apartmány Mazury.Holiday jsou v budovách A, B a C. V přístavu je marina, půjčovna vodního vybavení a Tawerna Stranda; v létě se zde konají šantové a rockové koncerty. Kotví zde také Stillo 30 VIP. Vybrané apartmány mají soukromou vířivku, B202 navíc saunu. Adresa přístavu a taverny: Pierkunowo 36, 11-500 Giżycko.\n\nApartmány Kisajno K11 a K15 leží u stejného jezera, ale na jiném místě — v Portu Neptun. Tyto lokality se snadno pletou, proto je rozlišuji.\n\n[Apartmány Stranda](/apartamenty/stranda) · [Taverna](/tawerna) · [Koncerty](/koncerty) · [Pronájem jachty](/czarter)",
};

const jokes: Record<Language, Record<"stranda" | "fuleda" | "jacuzzi" | "charter" | "general", string>> = {
    pl: {
        stranda: "W Strandzie plan dnia jest prosty: rano jezioro, potem Tawerna, wieczorem koncert. Najtrudniejsza decyzja? Czy wracać do apartamentu przed bisem.",
        fuleda: "Fuleda jest tak cicha, że nawet powiadomienia w telefonie zaczynają szeptać.",
        jacuzzi: "Apartament z jacuzzi to jedyne miejsce, gdzie zdanie „mam dziś dużo bąbelków” brzmi jak bardzo dobry plan.",
        charter: "Dlaczego jacht nie wdaje się w kłótnie? Bo woli płynąć z nurtem. Stillo ma tylko jedną uwagę: nie zapomnij szkolenia przed rejsem.",
        general: "Na Mazurach są dwa rodzaje pogody: dobra na jezioro i dobra na Tawernę. Prognoza zawsze się zgadza.",
    },
    en: {
        stranda: "A day at Stranda is simple: lake in the morning, tavern later, concert at night. The hard part is deciding whether to leave before the encore.",
        fuleda: "Fuleda is so quiet that even phone notifications start to whisper.",
        jacuzzi: "A hot-tub apartment is the one place where saying ‘I need more bubbles today’ sounds like an excellent plan.",
        charter: "Why does the yacht avoid arguments? It prefers to go with the flow. Stillo only insists on one thing: training before departure.",
        general: "Masuria has two kinds of weather: good for the lake and good for the tavern. The forecast is always right.",
    },
    de: {
        stranda: "Der Tagesplan in Stranda ist einfach: morgens See, später Taverne, abends Konzert. Schwierig wird nur die Frage, ob man vor der Zugabe ins Apartment zurückgeht.",
        fuleda: "In Fuleda ist es so ruhig, dass sogar Handy-Benachrichtigungen anfangen zu flüstern.",
        jacuzzi: "Ein Apartment mit Whirlpool ist der einzige Ort, an dem ‘Ich brauche heute mehr Blasen’ nach einem ausgezeichneten Plan klingt.",
        charter: "Warum streitet die Yacht nicht? Sie fährt lieber mit der Strömung. Stillo besteht nur auf der Einweisung vor der Abfahrt.",
        general: "In Masuren gibt es zwei Wetterlagen: gut für den See oder gut für die Taverne. Die Vorhersage stimmt immer.",
    },
    lt: {
        stranda: "Diena Strandoje paprasta: ryte ežeras, vėliau taverna, vakare koncertas. Sunkiausia nuspręsti, ar grįžti į apartamentus prieš bisą.",
        fuleda: "Fuledoje taip tylu, kad net telefono pranešimai pradeda šnabždėti.",
        jacuzzi: "Apartamentai su sūkurine vonia – vienintelė vieta, kur „šiandien noriu daugiau burbuliukų“ skamba kaip puikus planas.",
        charter: "Kodėl jachta nesiginčija? Ji mieliau plaukia pasroviui. „Stillo“ primena tik viena: prieš kelionę būtinas instruktažas.",
        general: "Mozūrijoje būna dvejopas oras: tinkamas ežerui arba tinkamas tavernai. Prognozė visada teisinga.",
    },
    cs: {
        stranda: "Den ve Strandě je jednoduchý: ráno jezero, potom taverna, večer koncert. Nejtěžší je rozhodnout se, zda odejít do apartmánu před přídavkem.",
        fuleda: "Ve Fuledě je takové ticho, že i oznámení v telefonu začnou šeptat.",
        jacuzzi: "Apartmán s vířivkou je jediné místo, kde věta „dnes potřebuji více bublinek“ zní jako výborný plán.",
        charter: "Proč se jachta nehádá? Raději pluje s proudem. Stillo připomíná jen jedno: před plavbou je nutné zaškolení.",
        general: "V Mazursku jsou dva druhy počasí: vhodné k jezeru a vhodné do taverny. Předpověď vždy vyjde.",
    },
};

const recommendationQuips: Record<Language, Partial<Record<AssistantFeature, string>>> = {
    pl: { jacuzzi: "Bąbelki są, pozostaje wybrać widok.", sauna: "Tu relaks ma własny termostat.", quiet: "Cisza w pakiecie, budzika nie polecam." },
    en: { jacuzzi: "The bubbles are sorted; now choose the view.", sauna: "Here, relaxation has its own thermostat.", quiet: "Peace and quiet included; alarm clock not recommended." },
    de: { jacuzzi: "Die Blasen sind geklärt; jetzt fehlt nur noch der Ausblick.", sauna: "Hier hat Entspannung ihr eigenes Thermostat.", quiet: "Ruhe inklusive; Wecker nicht empfohlen." },
    lt: { jacuzzi: "Burbuliukai paruošti – belieka išsirinkti vaizdą.", sauna: "Čia poilsis turi savo termostatą.", quiet: "Ramybė įskaičiuota, žadintuvas nerekomenduojamas." },
    cs: { jacuzzi: "Bublinky jsou vyřešené, zbývá vybrat výhled.", sauna: "Tady má odpočinek vlastní termostat.", quiet: "Klid je v ceně, budík nedoporučuji." },
};

const featureLabels: Record<Language, Record<AssistantFeature, string>> = {
    pl: { jacuzzi: "prywatne jacuzzi", sauna: "prywatna sauna", lakeView: "widok na jezioro", lakeAccess: "dostęp do jeziora", wifi: "Wi-Fi", airConditioning: "klimatyzacja", fireplace: "kominek", washingMachine: "pralka", dishwasher: "zmywarka", parking: "parking", quiet: "spokojna okolica", cityCenter: "centrum miasta" },
    en: { jacuzzi: "private hot tub", sauna: "private sauna", lakeView: "lake view", lakeAccess: "lake access", wifi: "Wi-Fi", airConditioning: "air conditioning", fireplace: "fireplace", washingMachine: "washing machine", dishwasher: "dishwasher", parking: "parking", quiet: "quiet setting", cityCenter: "town centre" },
    de: { jacuzzi: "privater Whirlpool", sauna: "private Sauna", lakeView: "Seeblick", lakeAccess: "See-Zugang", wifi: "WLAN", airConditioning: "Klimaanlage", fireplace: "Kamin", washingMachine: "Waschmaschine", dishwasher: "Spülmaschine", parking: "Parkplatz", quiet: "ruhige Lage", cityCenter: "Stadtzentrum" },
    lt: { jacuzzi: "privati sūkurinė vonia", sauna: "privati sauna", lakeView: "vaizdas į ežerą", lakeAccess: "priėjimas prie ežero", wifi: "Wi-Fi", airConditioning: "oro kondicionierius", fireplace: "židinys", washingMachine: "skalbimo mašina", dishwasher: "indaplovė", parking: "automobilių stovėjimo vieta", quiet: "rami vieta", cityCenter: "miesto centras" },
    cs: { jacuzzi: "soukromá vířivka", sauna: "soukromá sauna", lakeView: "výhled na jezero", lakeAccess: "přístup k jezeru", wifi: "Wi-Fi", airConditioning: "klimatizace", fireplace: "krb", washingMachine: "pračka", dishwasher: "myčka", parking: "parkování", quiet: "klidná lokalita", cityCenter: "centrum města" },
};

const locationDescriptions: Record<Language, Record<Exclude<LocationKey, "charter">, string>> = {
    pl: {
        stranda: "Giżycko, marina nad Kisajnem; blisko Tawerny Stranda i koncertów. Największy wybór apartamentów, w tym jacuzzi i sauna.",
        kisajno: "Giżycko, Port Neptun nad Kisajnem. K11 jest dla 4 osób, K15 dla 6 osób.",
        fuleda: "Fuleda nad jeziorem Dobskim, strefa ciszy i spokojne otoczenie. Są tu apartamenty, dwa pokoje oraz Domek Fuledzkie Zacisze.",
        skorupki: "Kameralna osada 10 domków. Domki są dla 6 osób, około 350 m od jeziora i prywatnej strefy rekreacyjnej.",
        mikolajki: "Apartament Gigu przy Placu Wolności, w centrum Mikołajek, dla maksymalnie 4 osób. Nie ma osobnego salonu ani tarasu.",
        zeglarska: "Giżycko nad jeziorem Niegocin. Lokalizacja jest w przygotowaniu i została oznaczona jako „wkrótce”.",
    },
    en: {
        stranda: "Giżycko marina on Lake Kisajno, close to Tawerna Stranda and seasonal concerts. The widest choice of apartments, including hot tubs and a sauna.",
        kisajno: "Port Neptun in Giżycko on Lake Kisajno. K11 sleeps 4 and K15 sleeps 6.",
        fuleda: "Fuleda on Lake Dobskie, in a quiet-zone setting. It offers apartments, two rooms and Fuledzkie Zacisze cottage.",
        skorupki: "A small settlement of 10 cottages. Each sleeps 6 and is about 350 m from the lake and private recreation area.",
        mikolajki: "Gigu apartment at Plac Wolności in central Mikołajki, for up to 4 guests. It has no separate living room or terrace.",
        zeglarska: "Giżycko by Lake Niegocin. This location is being prepared and is marked as coming soon.",
    },
    de: {
        stranda: "Marina in Giżycko am Kisajno-See, nahe Tawerna Stranda und Saisonkonzerten. Größte Apartmentauswahl, darunter Whirlpool und Sauna.",
        kisajno: "Port Neptun in Giżycko am Kisajno-See. K11 ist für 4, K15 für 6 Personen.",
        fuleda: "Fuleda am Dobskie-See in einer Ruhezone. Hier gibt es Apartments, zwei Zimmer und das Haus Fuledzkie Zacisze.",
        skorupki: "Kleine Anlage mit 10 Ferienhäusern. Jedes ist für 6 Personen und etwa 350 m vom See und Privatbereich entfernt.",
        mikolajki: "Apartment Gigu am Plac Wolności im Zentrum von Mikołajki, für bis zu 4 Personen. Ohne separates Wohnzimmer und Terrasse.",
        zeglarska: "Giżycko am Niegocin-See. Der Standort wird vorbereitet und ist als „demnächst“ markiert.",
    },
    lt: {
        stranda: "Gižycko marina prie Kisajno ežero, šalia „Tawerna Stranda“ ir sezoninių koncertų. Didžiausias apartamentų pasirinkimas, taip pat su sūkurine vonia ir sauna.",
        kisajno: "Port Neptun Gižycke prie Kisajno ežero. K11 skirtas 4, K15 – 6 žmonėms.",
        fuleda: "Fuleda prie Dobskie ežero, ramybės zonoje. Čia yra apartamentai, du kambariai ir Fuledzkie Zacisze namas.",
        skorupki: "Nedidelė 10 namelių gyvenvietė. Kiekvienas skirtas 6 žmonėms, apie 350 m nuo ežero ir privačios poilsio zonos.",
        mikolajki: "Gigu apartamentai Plac Wolności aikštėje, Mikolaikų centre, iki 4 žmonių. Nėra atskiros svetainės ar terasos.",
        zeglarska: "Gižyckas prie Niegocin ežero. Vieta ruošiama ir pažymėta „netrukus“.",
    },
    cs: {
        stranda: "Marina v Giżycku u jezera Kisajno, blízko Tawerny Stranda a sezónních koncertů. Největší výběr apartmánů včetně vířivky a sauny.",
        kisajno: "Port Neptun v Giżycku u jezera Kisajno. K11 je pro 4 a K15 pro 6 osob.",
        fuleda: "Fuleda u jezera Dobskie v klidové zóně. Nabízí apartmány, dva pokoje a dům Fuledzkie Zacisze.",
        skorupki: "Komorní osada 10 chat. Každá je pro 6 osob a asi 350 m od jezera a soukromé rekreační zóny.",
        mikolajki: "Apartmán Gigu na Plac Wolności v centru Mikołajek, až pro 4 osoby. Nemá samostatný obývací pokoj ani terasu.",
        zeglarska: "Giżycko u jezera Niegocin. Lokalita se připravuje a je označena „již brzy“.",
    },
};

const levenshtein = (left: string, right: string) => {
    const rows = Array.from({ length: left.length + 1 }, (_, index) => index);
    for (let column = 1; column <= right.length; column += 1) {
        let previous = rows[0];
        rows[0] = column;
        for (let row = 1; row <= left.length; row += 1) {
            const stored = rows[row];
            rows[row] = Math.min(
                rows[row] + 1,
                rows[row - 1] + 1,
                previous + (left[row - 1] === right[column - 1] ? 0 : 1),
            );
            previous = stored;
        }
    }
    return rows[left.length];
};

const fuzzyWord = (messageWord: string, termWord: string) => {
    if (messageWord === termWord) return true;
    if (termWord.length < 5 || Math.abs(messageWord.length - termWord.length) > 2) return false;
    return levenshtein(messageWord, termWord) <= (termWord.length >= 8 ? 2 : 1);
};

const hasAny = (message: string, terms: string[]) => {
    const normalizedMessage = normalize(message);
    const words = normalizedMessage.split(" ");
    return terms.some((rawTerm) => {
        const term = normalize(rawTerm);
        if (normalizedMessage.includes(term)) return true;
        if (term.includes(" ")) return false;
        return words.some((word) => fuzzyWord(word, term));
    });
};

const jokeResponse = (message: string, language: Language) => {
    if (hasAny(message, locationTerms.stranda)) return jokes[language].stranda;
    if (hasAny(message, locationTerms.fuleda)) return jokes[language].fuleda;
    if (hasAny(message, featureTerms.jacuzzi)) return jokes[language].jacuzzi;
    if (hasAny(message, locationTerms.charter)) return jokes[language].charter;
    return jokes[language].general;
};

const recommendationQuip = (language: Language, features: AssistantFeature[]) => {
    const feature = features.find((item) => recommendationQuips[language][item]);
    return feature ? recommendationQuips[language][feature] : undefined;
};

const detectedFeatures = (message: string) =>
    (Object.keys(featureTerms) as AssistantFeature[]).filter((feature) => hasAny(message, featureTerms[feature]));

const detectedLocations = (message: string) => {
    const detected = (Object.keys(locationTerms) as LocationKey[]).filter((location) => hasAny(message, locationTerms[location]));
    if (hasAny(message, ["gizycko", "gizycku", "gizycka"])) {
        (["stranda", "kisajno", "zeglarska"] as LocationKey[]).forEach((location) => {
            if (!detected.includes(location)) detected.push(location);
        });
    }
    return detected;
};

const detectGuests = (message: string) => {
    const normalized = normalize(message);
    const match =
        normalized.match(/(\d{1,2})\s*(?:osob|osoby|os|people|persons|guests|personen|gaste|zmon|sveci|svec|lidi)/) ||
        normalized.match(/(?:dla|for|fur|fuer|iki|pro)\s*(\d{1,2})/);
    if (!match) return undefined;
    const count = Number.parseInt(match[1], 10);
    return count > 0 && count <= 30 ? count : undefined;
};

type StayDateResult = {
    arrival?: string;
    departure?: string;
    error?: "invalid" | "past" | "tooLong";
};

const monthAliases: Array<[number, string[]]> = [
    [1, ["styczen", "stycznia", "january", "jan", "januar", "sausis", "sausio", "leden", "ledna"]],
    [2, ["luty", "lutego", "february", "feb", "februar", "vasaris", "vasario", "unor", "unora"]],
    [3, ["marzec", "marca", "march", "mar", "marz", "kovas", "kovo", "brezen", "brezna"]],
    [4, ["kwiecien", "kwietnia", "april", "apr", "balandis", "balandzio", "duben", "dubna"]],
    [5, ["maj", "maja", "may", "mai", "geguze", "geguzes", "kveten", "kvetna"]],
    [6, ["czerwiec", "czerwca", "june", "jun", "juni", "birzelis", "birzelio", "cerven", "cervna"]],
    [7, ["lipiec", "lipca", "july", "jul", "juli", "liepa", "liepos", "cervenec", "cervence"]],
    [8, ["sierpien", "sierpnia", "august", "aug", "rugpjutis", "rugpjucio", "srpen", "srpna"]],
    [9, ["wrzesien", "wrzesnia", "september", "sep", "sept", "rugsejis", "rugsejo", "zari"]],
    [10, ["pazdziernik", "pazdziernika", "october", "oct", "oktober", "spalis", "spalio", "rijen", "rijna"]],
    [11, ["listopad", "listopada", "november", "nov", "lapkritis", "lapkricio", "listopadu"]],
    [12, ["grudzien", "grudnia", "december", "dec", "dezember", "gruodis", "gruodzio", "prosinec", "prosince"]],
];

const monthByAlias = new Map(monthAliases.flatMap(([month, aliases]) => aliases.map((alias) => [alias, month] as const)));
const monthPattern = Array.from(monthByAlias.keys()).sort((left, right) => right.length - left.length).join("|");

const padDate = (value: number) => String(value).padStart(2, "0");
const toIsoDate = (year: number, month: number, day: number) => `${year}-${padDate(month)}-${padDate(day)}`;
const isoToUtc = (value: string) => {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
};
const addUtcDays = (value: string, days: number) => {
    const date = isoToUtc(value);
    date.setUTCDate(date.getUTCDate() + days);
    return toIsoDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
};

const validIsoParts = (year: number, month: number, day: number) => {
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() + 1 === month && date.getUTCDate() === day;
};

const inferredYear = (month: number, day: number, explicitYear: number | undefined, today: Date) => {
    if (explicitYear) return explicitYear < 100 ? 2000 + explicitYear : explicitYear;
    const currentYear = today.getFullYear();
    const candidate = new Date(Date.UTC(currentYear, month - 1, day));
    const todayUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    return candidate < todayUtc ? currentYear + 1 : currentYear;
};

const detectStayDates = (message: string, today = new Date()): StayDateResult => {
    const dateText = message
        .toLocaleLowerCase("pl")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ł/g, "l");
    const found: Array<{ index: number; iso: string }> = [];
    const addDate = (index: number, day: number, month: number, year?: number) => {
        const resolvedYear = inferredYear(month, day, year, today);
        if (validIsoParts(resolvedYear, month, day)) found.push({ index, iso: toIsoDate(resolvedYear, month, day) });
    };

    const sameMonth = new RegExp(`(\\d{1,2})\\s*(?:-|–|—|do|to|bis|iki|az)\\s*(\\d{1,2})\\s*(?:d\\.?\\s*)?(${monthPattern})(?:\\s+(\\d{4}))?`, "i").exec(dateText);
    if (sameMonth) {
        const month = monthByAlias.get(sameMonth[3]);
        if (month) {
            addDate(sameMonth.index, Number(sameMonth[1]), month, sameMonth[4] ? Number(sameMonth[4]) : undefined);
            addDate(sameMonth.index + sameMonth[0].length, Number(sameMonth[2]), month, sameMonth[4] ? Number(sameMonth[4]) : undefined);
        }
    }

    if (!found.length) {
        const isoRegex = /(?<!\d)(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})(?!\d)/g;
        for (const match of dateText.matchAll(isoRegex)) addDate(match.index || 0, Number(match[3]), Number(match[2]), Number(match[1]));

        const numericRegex = /(?<!\d)(\d{1,2})[./](\d{1,2})(?:[./](\d{2,4}))?(?!\d)/g;
        for (const match of dateText.matchAll(numericRegex)) addDate(match.index || 0, Number(match[1]), Number(match[2]), match[3] ? Number(match[3]) : undefined);

        const dashedRegex = /(?<!\d)(\d{1,2})-(\d{1,2})-(\d{2,4})(?!\d)/g;
        for (const match of dateText.matchAll(dashedRegex)) addDate(match.index || 0, Number(match[1]), Number(match[2]), Number(match[3]));

        const namedRegex = new RegExp(`(\\d{1,2})\\s*(?:d\\.?\\s*)?(${monthPattern})(?:\\s+(\\d{4}))?`, "gi");
        for (const match of dateText.matchAll(namedRegex)) {
            const month = monthByAlias.get(match[2]);
            if (month) addDate(match.index || 0, Number(match[1]), month, match[3] ? Number(match[3]) : undefined);
        }
    }

    const unique = Array.from(new Map(found.sort((left, right) => left.index - right.index).map((item) => [item.iso, item])).values());
    if (!unique.length) {
        const relativeStart = hasAny(message, ["jutro", "tomorrow", "morgen", "rytoj", "zitra"])
            ? addUtcDays(toIsoDate(today.getFullYear(), today.getMonth() + 1, today.getDate()), 1)
            : undefined;
        const nights = Number(normalize(message).match(/(\d{1,2})\s*(?:noc|nocy|noce|night|nights|nachte|nakvyn|noci)/)?.[1] || 0);
        if (relativeStart && nights > 0) return { arrival: relativeStart, departure: addUtcDays(relativeStart, nights) };
        return {};
    }

    const arrival = unique[0]?.iso;
    let departure = unique[1]?.iso;
    if (arrival && !departure) {
        const nights = Number(normalize(message).match(/(\d{1,2})\s*(?:noc|nocy|noce|night|nights|nachte|nakvyn|noci)/)?.[1] || 0);
        if (nights > 0) departure = addUtcDays(arrival, nights);
    }
    if (!arrival || !departure) return { arrival, error: "invalid" };

    const arrivalTime = isoToUtc(arrival).getTime();
    const departureTime = isoToUtc(departure).getTime();
    const todayTime = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    if (arrivalTime < todayTime) return { error: "past" };
    if (departureTime <= arrivalTime) return { error: "invalid" };
    if ((departureTime - arrivalTime) / 86_400_000 > 28) return { error: "tooLong" };
    return { arrival, departure };
};

const mentionedUnitIds = (message: string) => {
    const normalizedMessage = message.toUpperCase().replace(/\s+/g, "");
    const ids = new Set<string>();
    normalizedMessage.match(/[ABC]\d{3}/g)?.forEach((id) => ids.add(id));
    normalizedMessage.match(/K1[15]/g)?.forEach((id) => ids.add(id));
    if (hasAny(message, ["fuleda parter", "parter fuleda"])) ids.add("FULEDA-PARTER");
    if (hasAny(message, ["fuleda pietro", "pietro fuleda", "fuleda piętro"])) ids.add("FULEDA-PIETRO");
    if (hasAny(message, ["pokoje fuleda", "fuleda pokoje"])) ids.add("POKOJE-FULEDA");
    if (hasAny(message, ["fuledzkie zacisze", "domek fuleda"])) ids.add("FULEDZKIE-ZACISZE");
    if (hasAny(message, ["domki skorupki", "domek skorupki"])) ids.add("SKORUPKI");
    if (hasAny(message, ["apartament gigu", "gigu"])) ids.add("MIKOLAJKI");
    return Array.from(ids).map((id) => offersById.get(id)).filter((offer): offer is Offer => Boolean(offer));
};

const responseLanguage = (message: string, preferred: Language): Language => {
    const scores: Record<Language, number> = { pl: 0, en: 0, de: 0, lt: 0, cs: 0 };
    const markers: Record<Language, string[]> = {
        pl: ["dla", "osob", "gdzie", "cena", "porownaj", "szukam", "wolny"],
        en: ["for", "people", "where", "price", "compare", "looking", "available"],
        de: ["fur", "personen", "wo", "preis", "vergleichen", "suche", "frei"],
        lt: ["zmoniu", "kur", "kaina", "palygink", "ieskau", "laisva"],
        cs: ["pro", "osob", "kde", "cena", "porovnej", "hledam", "volny"],
    };
    const words = normalize(message).split(" ");
    (Object.keys(markers) as Language[]).forEach((language) => {
        scores[language] = markers[language].filter((marker) => words.includes(marker)).length;
    });
    const best = (Object.keys(scores) as Language[]).sort((a, b) => scores[b] - scores[a])[0];
    return scores[best] >= 2 ? best : preferred;
};

const formatFeatures = (offer: Offer, language: Language, limit = 4) => {
    const selected = offer.features.slice(0, limit).map((feature) => featureLabels[language][feature]);
    return selected.length ? selected.join(", ") : "—";
};

const formatOffer = (offer: Offer, language: Language) => {
    const copy = locale[language];
    const facts = [
        offer.maxGuests ? `${copy.guests}: ${offer.maxGuests}` : undefined,
        offer.price ? `${copy.from} ${offer.price} zł` : undefined,
        formatFeatures(offer, language, 3) !== "—" ? formatFeatures(offer, language, 3) : undefined,
    ].filter(Boolean).join(" · ");
    return `- **${offer.name}** — ${facts}\n  [${copy.details}](${offer.route})`;
};

const detailResponse = (offer: Offer, language: Language) => {
    const copy = locale[language];
    const lines = [
        `**${offer.name}**`,
        offer.description,
        `- ${copy.location}: ${offer.location}`,
        offer.lake ? `- ${copy.lake}: ${offer.lake}` : undefined,
        offer.maxGuests ? `- ${copy.guests}: ${offer.maxGuests}` : undefined,
        offer.price ? `- ${copy.price}: ${offer.price} zł` : undefined,
        `- ${copy.features}: ${formatFeatures(offer, language, 7)}`,
        `\n[${copy.details}](${offer.route})`,
    ].filter(Boolean);
    if (offer.availableForBooking && offer.bookingUrl) lines.push(`[${copy.booking}](${offer.bookingUrl})`);
    if (!offer.availableForBooking) lines.push(copy.unavailable);
    if (offer.price) lines.push(`\n_${copy.indicative}_`);
    return lines.join("\n");
};

const comparisonResponse = (selected: Offer[], language: Language) => {
    const copy = locale[language];
    return [
        `**${copy.compare}**`,
        ...selected.slice(0, 4).map((offer) => [
            `\n**${offer.name}**`,
            `- ${copy.location}: ${offer.location}${offer.lake ? `, ${offer.lake}` : ""}`,
            offer.maxGuests ? `- ${copy.guests}: ${offer.maxGuests}` : undefined,
            offer.price ? `- ${copy.price}: ${offer.price} zł` : undefined,
            `- ${copy.features}: ${formatFeatures(offer, language, 5)}`,
            `[${copy.details}](${offer.route})`,
        ].filter(Boolean).join("\n")),
    ].join("\n");
};

const locationComparison = (locations: LocationKey[], language: Language) => {
    const copy = locale[language];
    return [
        `**${copy.compare}**`,
        ...locations
            .filter((location): location is Exclude<LocationKey, "charter"> => location !== "charter")
            .slice(0, 4)
            .map((location) => `\n**${location === "mikolajki" ? "Mikołajki" : location[0].toUpperCase() + location.slice(1)}**\n${locationDescriptions[language][location]}`),
    ].join("\n");
};

const matchesFeature = (offer: Offer, feature: AssistantFeature) => {
    if (feature === "lakeAccess") return Boolean(offer.lake) || offer.features.includes("lakeAccess");
    return offer.features.includes(feature);
};

const recommendations = (guests: number | undefined, features: AssistantFeature[], locations: LocationKey[], limit = 6) => {
    const eligibleLocations = locations.filter((location): location is Exclude<LocationKey, "charter"> => location !== "charter");
    return offers
        .filter((offer) => offer.category !== "upcoming")
        .filter((offer) => !guests || (offer.maxGuests || 0) >= guests)
        .filter((offer) => !eligibleLocations.length || (offer.locationKey !== "charter" && eligibleLocations.includes(offer.locationKey)))
        .filter((offer) => features.every((feature) => matchesFeature(offer, feature)))
        .map((offer) => ({
            offer,
            score:
                (guests && offer.maxGuests ? 20 - Math.min(19, offer.maxGuests - guests) : 0) +
                features.filter((feature) => matchesFeature(offer, feature)).length * 10 +
                (offer.availableForBooking ? 3 : 0),
        }))
        .sort((left, right) => right.score - left.score || (left.offer.price || 99999) - (right.offer.price || 99999))
        .map(({ offer }) => offer)
        .slice(0, limit);
};

const languageLocales: Record<Language, string> = {
    pl: "pl-PL",
    en: "en-GB",
    de: "de-DE",
    lt: "lt-LT",
    cs: "cs-CZ",
};

const formatDateRange = (from: string, to: string, language: Language) => {
    const formatter = new Intl.DateTimeFormat(languageLocales[language], {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
    return `${formatter.format(isoToUtc(from))} – ${formatter.format(isoToUtc(to))}`;
};

const offersForAvailabilityQuery = (query: AvailabilityQuery) =>
    query.offerIds
        .map((id) => offersById.get(id.toUpperCase()))
        .filter((offer): offer is Offer => Boolean(offer?.idoBookingId && offer.availableForBooking));

export const getAvailabilityFallback = (query: AvailabilityQuery) => {
    const copy = locale[query.language];
    const candidates = offersForAvailabilityQuery(query).slice(0, 6);
    return [
        copy.liveError,
        ...candidates.map((offer) => `- **${offer.name}** — [${copy.booking}](${offer.bookingUrl})`),
    ].join("\n");
};

export const completeAvailabilityResponse = (query: AvailabilityQuery, apiResult: AvailabilityApiResult) => {
    if (!apiResult.ok || !apiResult.results) return getAvailabilityFallback(query);
    const copy = locale[query.language];
    const availableIds = new Set(apiResult.results.filter((result) => result.available).map((result) => result.id));
    const candidates = offersForAvailabilityQuery(query);
    const available = candidates.filter((offer) => offer.idoBookingId && availableIds.has(offer.idoBookingId)).slice(0, 6);
    const range = formatDateRange(query.from, query.to, query.language);
    if (!available.length) return `${copy.liveNone(range)}\n\n${copy.contact}`;

    return [
        copy.liveFound(available.length, range),
        ...available.map((offer) => {
            const facts = [
                offer.maxGuests ? `${copy.guests}: ${offer.maxGuests}` : undefined,
                formatFeatures(offer, query.language, 3) !== "—" ? formatFeatures(offer, query.language, 3) : undefined,
            ].filter(Boolean).join(" · ");
            return `- **${offer.name}** — ${facts}\n  [${copy.details}](${offer.route}) · [${copy.booking}](${offer.bookingUrl})`;
        }),
        `_${copy.indicative}_`,
    ].join("\n");
};

export const createAssistantContext = (): AssistantContext => ({ lastOfferIds: [], features: [], turn: 0 });

export const getAssistantGreeting = (language: Language) => locale[language].hello;

export const assistantUi: Record<Language, { placeholder: string; send: string; close: string; title: string; online: string; quickQuestions: string[] }> = {
    pl: { placeholder: "Np. 4 osoby, jacuzzi, Giżycko…", send: "Wyślij wiadomość", close: "Zamknij czat", title: "Doradca Mazury Holiday", online: "Online", quickQuestions: ["Nocleg dla 4 osób", "Apartament z jacuzzi", "Co to jest Stranda?", "Sprawdź dostępność", "Opowiedz mazurski żart"] },
    en: { placeholder: "E.g. 4 guests, hot tub, Giżycko…", send: "Send message", close: "Close chat", title: "Mazury Holiday adviser", online: "Online", quickQuestions: ["Stay for 4 guests", "Apartment with a hot tub", "What is Stranda?", "Check availability", "Tell me a Masurian joke"] },
    de: { placeholder: "Z. B. 4 Personen, Whirlpool, Giżycko…", send: "Nachricht senden", close: "Chat schließen", title: "Mazury Holiday Beratung", online: "Online", quickQuestions: ["Unterkunft für 4 Personen", "Apartment mit Whirlpool", "Was ist Stranda?", "Verfügbarkeit prüfen", "Erzähl einen Masuren-Witz"] },
    lt: { placeholder: "Pvz., 4 žmonės, sūkurinė vonia…", send: "Siųsti žinutę", close: "Uždaryti pokalbį", title: "Mazury Holiday konsultantas", online: "Prisijungęs", quickQuestions: ["Nakvynė 4 žmonėms", "Apartamentai su sūkurine vonia", "Kas yra Stranda?", "Tikrinti laisvas datas", "Papasakok Mozūrijos pokštą"] },
    cs: { placeholder: "Např. 4 osoby, vířivka, Giżycko…", send: "Odeslat zprávu", close: "Zavřít chat", title: "Poradce Mazury Holiday", online: "Online", quickQuestions: ["Ubytování pro 4 osoby", "Apartmán s vířivkou", "Co je Stranda?", "Ověřit dostupnost", "Řekni mazurský vtip"] },
};

export function getAssistantResponse(
    message: string,
    preferredLanguage: Language = "pl",
    previousContext: AssistantContext = createAssistantContext(),
): AssistantResult {
    const language = responseLanguage(message, preferredLanguage);
    const copy = locale[language];
    const resetRequested = hasAny(message, ["od nowa", "zacznij od nowa", "wyczysc", "reset", "start over", "von vorne", "neu starten", "is naujo", "znovu"]);
    if (resetRequested) return { answer: `${copy.hello}\n\n${copy.ask}`, context: createAssistantContext() };

    const locations = detectedLocations(message);
    const messageFeatures = detectedFeatures(message);
    const detectedDates = detectStayDates(message);
    const bookingIntent = hasAny(message, intentTerms.availability);
    const continuingBooking = Boolean(previousContext.bookingFlow || previousContext.awaiting === "dates" || previousContext.awaiting === "guests");
    const bookingRequested = bookingIntent || continuingBooking || Boolean(detectedDates.arrival || detectedDates.departure);
    const features = bookingRequested
        ? Array.from(new Set<AssistantFeature>([...previousContext.features, ...messageFeatures]))
        : messageFeatures;
    const shortGuestReply = previousContext.awaiting === "guests" && /^\s*\d{1,2}\s*$/.test(message)
        ? Number.parseInt(message.trim(), 10)
        : undefined;
    const guests = detectGuests(message) ?? (shortGuestReply && shortGuestReply <= 30 ? shortGuestReply : undefined) ?? previousContext.guests;
    const units = mentionedUnitIds(message);
    const isFollowUp = hasAny(message, ["ten", "ta", "to", "one", "je", "wiecej", "szczegoly", "it", "this", "them", "these", "dieser", "diese", "mehr", "sis", "sitas", "daugiau", "tenhle", "tyto"]);
    const contextualOffers = (isFollowUp || continuingBooking || bookingIntent)
        ? previousContext.lastOfferIds.map((id) => offersById.get(id.toUpperCase())).filter((offer): offer is Offer => Boolean(offer))
        : [];
    const selected = units.length ? units : contextualOffers;
    const arrival = detectedDates.arrival || previousContext.arrival;
    const departure = detectedDates.departure || previousContext.departure;
    const nextContext: AssistantContext = {
        lastOfferIds: selected.map((offer) => offer.id),
        lastLocation: locations.find((location) => location !== "charter") || previousContext.lastLocation,
        guests,
        features: features.length ? features : previousContext.features,
        arrival,
        departure,
        bookingFlow: bookingRequested,
        awaiting: previousContext.awaiting,
        turn: previousContext.turn + 1,
    };

    if (hasAny(message, intentTerms.greeting) && normalize(message).split(" ").length <= 5) {
        return { answer: `${copy.hello}\n\n${copy.ask}`, context: createAssistantContext() };
    }
    if (hasAny(message, intentTerms.joke)) return { answer: jokeResponse(message, language), context: nextContext };
    if (hasAny(message, intentTerms.contact)) return { answer: copy.contact, context: nextContext };
    if (hasAny(message, intentTerms.checkIn)) return { answer: copy.checkIn, context: nextContext };
    if (hasAny(message, intentTerms.pets)) return { answer: copy.pets, context: nextContext };
    if (hasAny(message, intentTerms.tavern)) return { answer: `${copy.tavern}\n\n[${copy.details}](/tawerna)`, context: nextContext };
    if (hasAny(message, intentTerms.concerts)) return { answer: `${copy.concerts}\n\n[${copy.details}](/koncerty)`, context: nextContext };
    if (locations.includes("charter")) {
        return { answer: `${copy.charter}\n\n[${copy.details}](/czarter)`, context: { ...nextContext, lastOfferIds: [] } };
    }

    const compareRequested = hasAny(message, intentTerms.compare);
    if (compareRequested && units.length >= 2) {
        return { answer: comparisonResponse(units, language), context: { ...nextContext, lastOfferIds: units.map((offer) => offer.id) } };
    }
    if (compareRequested && selected.length >= 2) {
        return { answer: comparisonResponse(selected, language), context: { ...nextContext, lastOfferIds: selected.map((offer) => offer.id) } };
    }
    if (compareRequested && locations.filter((location) => location !== "charter").length >= 2) {
        return { answer: locationComparison(locations, language), context: nextContext };
    }

    if (bookingRequested) {
        if (locations.length === 1 && locations[0] === "zeglarska") {
            return {
                answer: `**Apartamenty Żeglarska** — ${copy.unavailable}`,
                context: { ...nextContext, lastOfferIds: ["zeglarska"], bookingFlow: false, awaiting: undefined },
            };
        }
        if (detectedDates.error) {
            const errorCopy = detectedDates.error === "past"
                ? copy.pastDate
                : detectedDates.error === "tooLong"
                    ? copy.longStay
                    : copy.dateError;
            return {
                answer: errorCopy,
                context: { ...nextContext, arrival: undefined, departure: undefined, bookingFlow: true, awaiting: "dates" },
            };
        }
        if (!arrival || !departure) {
            return {
                answer: dialoguePrompt(language, "dates", nextContext.turn),
                context: { ...nextContext, bookingFlow: true, awaiting: "dates" },
            };
        }
        if (!guests) {
            return {
                answer: dialoguePrompt(language, "guests", nextContext.turn),
                context: { ...nextContext, bookingFlow: true, awaiting: "guests" },
            };
        }

        const effectiveLocations = locations.length
            ? locations
            : previousContext.lastLocation
                ? [previousContext.lastLocation as LocationKey]
                : [];
        let availabilityOffers = units.length
            ? units
            : contextualOffers.length && !locations.length && !messageFeatures.length
                ? contextualOffers
                : recommendations(guests, features, effectiveLocations, 40);
        availabilityOffers = availabilityOffers.filter((offer) => offer.availableForBooking && Boolean(offer.idoBookingId));
        if (!availabilityOffers.length) {
            return {
                answer: `${copy.noMatch}\n\n${copy.contact}`,
                context: { ...nextContext, bookingFlow: true, awaiting: "preferences" },
            };
        }

        const idoBookingIds = Array.from(new Set(availabilityOffers.map((offer) => offer.idoBookingId).filter((id): id is string => Boolean(id))));
        const availabilityQuery: AvailabilityQuery = {
            from: arrival,
            to: departure,
            guests,
            language,
            offerIds: availabilityOffers.map((offer) => offer.id),
            idoBookingIds,
        };
        return {
            answer: copy.checking,
            context: {
                ...nextContext,
                lastOfferIds: availabilityOffers.map((offer) => offer.id),
                bookingFlow: true,
                awaiting: "preferences",
            },
            availabilityQuery,
        };
    }

    if (selected.length === 1 && (units.length === 1 || hasAny(message, intentTerms.details) || hasAny(message, intentTerms.price) || isFollowUp)) {
        return { answer: detailResponse(selected[0], language), context: { ...nextContext, lastOfferIds: [selected[0].id] } };
    }

    if (locations.length === 1 && locations[0] === "stranda" && !guests && !features.length) {
        return { answer: strandaKnowledge[language], context: { ...nextContext, lastLocation: "stranda" } };
    }

    const shouldRecommend = Boolean(guests || features.length || locations.length);
    if (shouldRecommend) {
        const result = recommendations(guests, features, locations);
        if (!result.length) return { answer: `${copy.noMatch}\n\n${copy.ask}`, context: nextContext };
        const quip = recommendationQuip(language, features);
        return {
            answer: `${copy.found(result.length)}\n\n${result.map((offer) => formatOffer(offer, language)).join("\n")}\n\n${copy.indicative}${quip ? `\n\n${quip}` : ""}`,
            context: { ...nextContext, lastOfferIds: result.map((offer) => offer.id) },
        };
    }

    if (hasAny(message, intentTerms.offer) || hasAny(message, intentTerms.location) || hasAny(message, intentTerms.price)) {
        return {
            answer: `${copy.allOffers}\n\n- [Stranda](/apartamenty/stranda)\n- [Kisajno](/apartamenty/kisajno)\n- [Fuleda](/apartamenty/fuleda)\n- [Mikołajki](/apartamenty/mikolajki)\n- [Domki](/domki)\n- [${copy.details}](/apartamenty)\n\n${copy.followUp}`,
            context: nextContext,
        };
    }

    return { answer: `${dialoguePrompt(language, "general", nextContext.turn)}\n\n${copy.followUp}`, context: nextContext };
}
