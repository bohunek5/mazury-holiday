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
};

export type AssistantResult = {
    answer: string;
    context: AssistantContext;
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
    stranda: ["stranda", "port stranda", "marina stranda"],
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
    tavern: ["tawerna", "restauracja", "jedzenie", "menu", "sniadanie", "tavern", "restaurant", "food", "breakfast", "essen", "fruhstuck", "maistas", "pusryciai", "jidlo", "snidane"],
    concerts: ["koncert", "muzyka", "concert", "music", "konzert", "musik", "muzika", "koncerty", "hudba"],
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
        availability: "Nie odczytuję wolnych terminów bezpośrednio w czacie, dlatego nie będę zgadywać. Poniżej masz właściwy kalendarz IdoBooking z aktualną dostępnością:",
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
        charter: "Stillo 30 VIP to jacht motorowy dla maksymalnie 8 osób, z trzema zamykanymi kabinami, ogrzewaniem Webasto i wyposażeniem turystycznym. Zgodnie z informacją w ofercie można nim pływać bez patentu po przeszkoleniu.",
        tavern: "Tawerna Stranda działa przy marinie w Giżycku. Na stronie znajdziesz opis śniadań, dań sezonowych, pizzy i napojów. Aktualne menu oraz godziny warto potwierdzić bezpośrednio w Tawernie.",
        concerts: "Koncerty odbywają się w sezonie przy Strandzie. Bieżący program i plakat są na podstronie koncertowej.",
    },
    en: {
        hello: "Hello! I can match accommodation to your group size, preferred location and amenities. I can also compare properties and direct you to the live IdoBooking calendar.",
        ask: "Tell me how many guests you have and what matters most: the lake, peace and quiet, the town centre, a hot tub or a sauna?",
        noMatch: "I could not find a property matching every condition. I can relax one filter or suggest two nearby units for a larger group.",
        found: (count: number) => `Best matches (${count}):`,
        guests: "max. guests", from: "from", indicative: "The listed price is indicative. IdoBooking will show the current total for your dates.",
        details: "Details", booking: "Check dates and price in IdoBooking", unavailable: "This location is marked as coming soon and does not have an active booking calendar yet.",
        availability: "I cannot read live vacancies inside the chat, so I will not guess. Use the correct IdoBooking calendar below for current availability:",
        compare: "Comparison", location: "Location", lake: "Lake", features: "Key features", price: "Price from",
        contact: "Reservations: **+48 730 067 027** or **rezerwacje@mazury.holiday**.",
        checkIn: "Standard check-in starts at 15:00 and check-out is by 11:00. Please confirm any different arrangement before arrival at +48 730 067 027.",
        pets: "Pet rules vary by property. To avoid giving you uncertain information, please confirm the specific property before booking at +48 730 067 027.",
        allOffers: "Mazury.Holiday offers apartments in Giżycko by Lake Kisajno, stays in Fuleda by Lake Dobskie, an apartment in central Mikołajki, Skorupki cottages, Fuledzkie Zacisze cottage and a Stillo 30 VIP charter. Żeglarska apartments by Lake Niegocin are marked as coming soon.",
        followUp: "I can narrow the list by group size, indicative price or amenities.",
        charter: "Stillo 30 VIP is a motor yacht for up to 8 guests, with three lockable cabins, Webasto heating and touring equipment. According to the offer, it can be operated without a licence after training.",
        tavern: "Tawerna Stranda is located by the marina in Giżycko. The page covers breakfast, seasonal dishes, pizza and drinks. Please confirm the current menu and opening hours directly with the tavern.",
        concerts: "Concerts take place seasonally at Stranda. The current programme and poster are available on the concert page.",
    },
    de: {
        hello: "Hallo! Ich finde eine Unterkunft passend zur Personenzahl, Lage und Ausstattung. Ich kann Objekte vergleichen und zum aktuellen IdoBooking-Kalender führen.",
        ask: "Für wie viele Personen suchen Sie und was ist Ihnen wichtig: See, Ruhe, Zentrum, Whirlpool oder Sauna?",
        noMatch: "Ich habe kein Objekt gefunden, das alle Bedingungen erfüllt. Ich kann einen Filter lockern oder zwei nahe Unterkünfte für eine größere Gruppe vorschlagen.",
        found: (count: number) => `Beste Treffer (${count}):`,
        guests: "max. Gäste", from: "ab", indicative: "Der angezeigte Preis ist ein Richtwert. Den aktuellen Gesamtpreis für Ihren Termin zeigt IdoBooking.",
        details: "Details", booking: "Termin und Preis in IdoBooking prüfen", unavailable: "Dieser Standort ist als „demnächst“ markiert und hat noch keinen aktiven Buchungskalender.",
        availability: "Ich kann freie Termine nicht live im Chat lesen und werde daher nicht raten. Der passende IdoBooking-Kalender zeigt die aktuelle Verfügbarkeit:",
        compare: "Vergleich", location: "Lage", lake: "See", features: "Wichtigste Merkmale", price: "Preis ab",
        contact: "Reservierung: **+48 730 067 027** oder **rezerwacje@mazury.holiday**.",
        checkIn: "Der Check-in beginnt normalerweise um 15:00 Uhr, der Check-out ist bis 11:00 Uhr. Abweichende Zeiten bitte vor der Anreise unter +48 730 067 027 bestätigen.",
        pets: "Die Regeln für Haustiere unterscheiden sich je nach Objekt. Bitte bestätigen Sie das konkrete Objekt vor der Buchung unter +48 730 067 027.",
        allOffers: "Mazury.Holiday bietet Apartments in Giżycko am Kisajno-See, Unterkünfte in Fuleda am Dobskie-See, ein Apartment im Zentrum von Mikołajki, die Ferienhäuser Skorupki, das Haus Fuledzkie Zacisze und die Yacht Stillo 30 VIP. Die Apartments Żeglarska am Niegocin-See sind als „demnächst“ markiert.",
        followUp: "Ich kann die Auswahl nach Personenzahl, Richtpreis oder Ausstattung eingrenzen.",
        charter: "Die Stillo 30 VIP ist eine Motoryacht für bis zu 8 Personen, mit drei abschließbaren Kabinen, Webasto-Heizung und Reiseausstattung. Laut Angebot darf sie nach einer Einweisung ohne Führerschein gefahren werden.",
        tavern: "Die Tawerna Stranda liegt an der Marina in Giżycko. Auf der Seite finden Sie Frühstück, saisonale Gerichte, Pizza und Getränke. Aktuelle Karte und Öffnungszeiten bitte direkt bei der Tawerna bestätigen.",
        concerts: "In der Saison finden Konzerte bei Stranda statt. Das aktuelle Programm und Plakat stehen auf der Konzertseite.",
    },
    lt: {
        hello: "Sveiki! Galiu parinkti nakvynę pagal žmonių skaičių, vietą ir patogumus, palyginti objektus ir nukreipti į aktualų „IdoBooking“ kalendorių.",
        ask: "Parašykite, kiek žmonių atvyks ir kas svarbiausia: ežeras, ramybė, centras, sūkurinė vonia ar sauna?",
        noMatch: "Neradau objekto, atitinkančio visas sąlygas. Galiu sušvelninti vieną filtrą arba didesnei grupei pasiūlyti du netolimus objektus.",
        found: (count: number) => `Tinkamiausi variantai (${count}):`,
        guests: "daug. svečių", from: "nuo", indicative: "Nurodyta kaina yra orientacinė. Dabartinę kainą pasirinktoms datoms parodys „IdoBooking“.",
        details: "Išsamiau", booking: "Tikrinti datas ir kainą „IdoBooking“", unavailable: "Ši vieta pažymėta „netrukus“ ir dar neturi aktyvaus rezervavimo kalendoriaus.",
        availability: "Pokalbyje nematau laisvų datų realiuoju laiku, todėl nespėliosiu. Aktualią informaciją rasite šiame „IdoBooking“ kalendoriuje:",
        compare: "Palyginimas", location: "Vieta", lake: "Ežeras", features: "Svarbiausi patogumai", price: "Kaina nuo",
        contact: "Rezervacija: **+48 730 067 027** arba **rezerwacje@mazury.holiday**.",
        checkIn: "Įprastai atvykimas nuo 15:00, išvykimas iki 11:00. Kitą laiką prieš atvykstant patvirtinkite telefonu +48 730 067 027.",
        pets: "Gyvūnų taisyklės priklauso nuo objekto. Prieš rezervuodami konkretų objektą patvirtinkite telefonu +48 730 067 027.",
        allOffers: "„Mazury.Holiday“ siūlo apartamentus Gižycke prie Kisajno ežero, Fuledoje prie Dobskie ežero, apartamentą Mikolaikų centre, Skorupki namelius, Fuledzkie Zacisze namą ir „Stillo 30 VIP“ nuomą. Żeglarska apartamentai prie Niegocin ežero pažymėti „netrukus“.",
        followUp: "Galiu susiaurinti pasirinkimą pagal žmonių skaičių, orientacinę kainą arba patogumus.",
        charter: "„Stillo 30 VIP“ yra motorinė jachta iki 8 žmonių, su trimis uždaromomis kajutėmis, „Webasto“ šildymu ir turistine įranga. Pagal pasiūlymą po instruktažo ją galima valdyti be licencijos.",
        tavern: "„Tawerna Stranda“ yra prie Gižycko marinos. Puslapyje rasite informaciją apie pusryčius, sezoninius patiekalus, picą ir gėrimus. Dabartinį meniu ir darbo laiką patvirtinkite tiesiogiai tavernoje.",
        concerts: "Sezono metu „Stranda“ vyksta koncertai. Dabartinė programa ir plakatas pateikti koncertų puslapyje.",
    },
    cs: {
        hello: "Dobrý den! Vyberu ubytování podle počtu osob, lokality a vybavení, porovnám objekty a nasměruji vás na aktuální kalendář IdoBooking.",
        ask: "Napište, pro kolik osob hledáte ubytování a co je nejdůležitější: jezero, klid, centrum, vířivka nebo sauna?",
        noMatch: "Nenašel jsem objekt splňující všechny podmínky. Mohu jeden filtr zmírnit nebo navrhnout dvě blízká ubytování pro větší skupinu.",
        found: (count: number) => `Nejvhodnější možnosti (${count}):`,
        guests: "max. osob", from: "od", indicative: "Uvedená cena je orientační. Aktuální cenu pro váš termín zobrazí IdoBooking.",
        details: "Podrobnosti", booking: "Ověřit termín a cenu v IdoBooking", unavailable: "Tato lokalita je označena jako „již brzy“ a zatím nemá aktivní rezervační kalendář.",
        availability: "V chatu nevidím volné termíny živě, proto nebudu hádat. Aktuální dostupnost ukazuje příslušný kalendář IdoBooking:",
        compare: "Porovnání", location: "Lokalita", lake: "Jezero", features: "Hlavní vlastnosti", price: "Cena od",
        contact: "Rezervace: **+48 730 067 027** nebo **rezerwacje@mazury.holiday**.",
        checkIn: "Standardní příjezd je od 15:00 a odjezd do 11:00. Jiný čas potvrďte před příjezdem na +48 730 067 027.",
        pets: "Pravidla pro zvířata se liší podle objektu. Konkrétní objekt před rezervací potvrďte na +48 730 067 027.",
        allOffers: "Mazury.Holiday nabízí apartmány v Giżycku u jezera Kisajno, ubytování ve Fuledě u jezera Dobskie, apartmán v centru Mikołajek, chaty Skorupki, dům Fuledzkie Zacisze a pronájem Stillo 30 VIP. Apartmány Żeglarska u jezera Niegocin jsou označeny „již brzy“.",
        followUp: "Výběr mohu zúžit podle počtu osob, orientační ceny nebo vybavení.",
        charter: "Stillo 30 VIP je motorová jachta až pro 8 osob se třemi uzamykatelnými kajutami, topením Webasto a turistickým vybavením. Podle nabídky ji lze po zaškolení řídit bez průkazu.",
        tavern: "Tawerna Stranda se nachází u mariny v Giżycku. Stránka popisuje snídaně, sezónní jídla, pizzu a nápoje. Aktuální menu a otevírací dobu potvrďte přímo v taverně.",
        concerts: "V sezóně se u Strandy konají koncerty. Aktuální program a plakát najdete na stránce koncertů.",
    },
} satisfies Record<Language, Record<string, unknown>>;

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

const availabilityResponse = (selected: Offer[], language: Language) => {
    const copy = locale[language];
    if (!selected.length) return `${copy.availability}\n\n${copy.ask}`;
    const active = selected.filter((offer) => offer.availableForBooking && offer.bookingUrl).slice(0, 5);
    const upcoming = selected.filter((offer) => !offer.availableForBooking);
    return [
        copy.availability,
        ...active.map((offer) => `- **${offer.name}** — [${copy.booking}](${offer.bookingUrl})`),
        ...upcoming.map((offer) => `- **${offer.name}** — ${copy.unavailable}`),
    ].join("\n");
};

const matchesFeature = (offer: Offer, feature: AssistantFeature) => {
    if (feature === "lakeAccess") return Boolean(offer.lake) || offer.features.includes("lakeAccess");
    return offer.features.includes(feature);
};

const recommendations = (guests: number | undefined, features: AssistantFeature[], locations: LocationKey[]) => {
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
        .slice(0, 6);
};

export const createAssistantContext = (): AssistantContext => ({ lastOfferIds: [], features: [] });

export const getAssistantGreeting = (language: Language) => locale[language].hello;

export const assistantUi: Record<Language, { placeholder: string; send: string; close: string; title: string; online: string; quickQuestions: string[] }> = {
    pl: { placeholder: "Np. 4 osoby, jacuzzi, Giżycko…", send: "Wyślij wiadomość", close: "Zamknij czat", title: "Doradca Mazury Holiday", online: "Online", quickQuestions: ["Nocleg dla 4 osób", "Apartament z jacuzzi", "Porównaj Strandę i Fuledę", "Sprawdź dostępność"] },
    en: { placeholder: "E.g. 4 guests, hot tub, Giżycko…", send: "Send message", close: "Close chat", title: "Mazury Holiday adviser", online: "Online", quickQuestions: ["Stay for 4 guests", "Apartment with a hot tub", "Compare Stranda and Fuleda", "Check availability"] },
    de: { placeholder: "Z. B. 4 Personen, Whirlpool, Giżycko…", send: "Nachricht senden", close: "Chat schließen", title: "Mazury Holiday Beratung", online: "Online", quickQuestions: ["Unterkunft für 4 Personen", "Apartment mit Whirlpool", "Stranda und Fuleda vergleichen", "Verfügbarkeit prüfen"] },
    lt: { placeholder: "Pvz., 4 žmonės, sūkurinė vonia…", send: "Siųsti žinutę", close: "Uždaryti pokalbį", title: "Mazury Holiday konsultantas", online: "Prisijungęs", quickQuestions: ["Nakvynė 4 žmonėms", "Apartamentai su sūkurine vonia", "Palygink Stranda ir Fuleda", "Tikrinti laisvas datas"] },
    cs: { placeholder: "Např. 4 osoby, vířivka, Giżycko…", send: "Odeslat zprávu", close: "Zavřít chat", title: "Poradce Mazury Holiday", online: "Online", quickQuestions: ["Ubytování pro 4 osoby", "Apartmán s vířivkou", "Porovnej Stranda a Fuleda", "Ověřit dostupnost"] },
};

export function getAssistantResponse(
    message: string,
    preferredLanguage: Language = "pl",
    previousContext: AssistantContext = createAssistantContext(),
): AssistantResult {
    const language = responseLanguage(message, preferredLanguage);
    const copy = locale[language];
    const locations = detectedLocations(message);
    const features = detectedFeatures(message);
    const guests = detectGuests(message) ?? previousContext.guests;
    const units = mentionedUnitIds(message);
    const isFollowUp = hasAny(message, ["ten", "ta", "to", "one", "je", "wiecej", "szczegoly", "it", "this", "them", "these", "dieser", "diese", "mehr", "sis", "sitas", "daugiau", "tenhle", "tyto"]);
    const contextualOffers = isFollowUp
        ? previousContext.lastOfferIds.map((id) => offersById.get(id.toUpperCase())).filter((offer): offer is Offer => Boolean(offer))
        : [];
    const selected = units.length ? units : contextualOffers;
    const nextContext: AssistantContext = {
        lastOfferIds: selected.map((offer) => offer.id),
        lastLocation: locations.find((location) => location !== "charter") || previousContext.lastLocation,
        guests,
        features: features.length ? features : previousContext.features,
    };

    if (hasAny(message, intentTerms.greeting) && normalize(message).split(" ").length <= 5) {
        return { answer: `${copy.hello}\n\n${copy.ask}`, context: createAssistantContext() };
    }
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

    if (hasAny(message, intentTerms.availability)) {
        let availabilityOffers = selected.length
            ? selected
            : previousContext.lastOfferIds.map((id) => offersById.get(id.toUpperCase())).filter((offer): offer is Offer => Boolean(offer));
        if (!availabilityOffers.length && locations.length) {
            availabilityOffers = offers.filter((offer) => locations.includes(offer.locationKey)).slice(0, 6);
        }
        return {
            answer: availabilityResponse(availabilityOffers, language),
            context: { ...nextContext, lastOfferIds: availabilityOffers.map((offer) => offer.id) },
        };
    }

    if (selected.length === 1 && (units.length === 1 || hasAny(message, intentTerms.details) || hasAny(message, intentTerms.price) || isFollowUp)) {
        return { answer: detailResponse(selected[0], language), context: { ...nextContext, lastOfferIds: [selected[0].id] } };
    }

    const shouldRecommend = Boolean(guests || features.length || locations.length);
    if (shouldRecommend) {
        const result = recommendations(guests, features, locations);
        if (!result.length) return { answer: `${copy.noMatch}\n\n${copy.ask}`, context: nextContext };
        return {
            answer: `${copy.found(result.length)}\n\n${result.map((offer) => formatOffer(offer, language)).join("\n")}\n\n${copy.indicative}`,
            context: { ...nextContext, lastOfferIds: result.map((offer) => offer.id) },
        };
    }

    if (hasAny(message, intentTerms.offer) || hasAny(message, intentTerms.location) || hasAny(message, intentTerms.price)) {
        return {
            answer: `${copy.allOffers}\n\n- [Stranda](/apartamenty/stranda)\n- [Kisajno](/apartamenty/kisajno)\n- [Fuleda](/apartamenty/fuleda)\n- [Mikołajki](/apartamenty/mikolajki)\n- [Domki](/domki)\n- [${copy.details}](/apartamenty)\n\n${copy.followUp}`,
            context: nextContext,
        };
    }

    return { answer: `${copy.ask}\n\n${copy.followUp}`, context: nextContext };
}
