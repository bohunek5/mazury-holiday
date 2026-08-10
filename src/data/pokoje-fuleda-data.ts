import { getAssetPath } from '@/utils/assetPath';
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
        general?: string[];
    };
    gallery: {
        heroImage: string;
        images: string[];
    };
    idoBookingId?: string;
    icalUrl?: string;
    customAboutTitle?: string;
    customAmenitiesTitle?: string;
};

export const pokojeFuledaData: PokojeData = {
    id: 'pokoje',
    title: 'Fuleda - Dwa pokoje z łazienką',
    price: 'od 375 zł/doba',
    guests: '4',
    idoBookingId: '28',
    icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/28/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
    customAboutTitle: 'O pokojach',
    customAmenitiesTitle: 'Udogodnienia w pokojach',
    description: `Dwa pokoje z łazienką i tarasem w Fuledzie, nad jeziorem Dobskim. Obiekt nie ma salonu. Prywatna kuchnia z dodatkowym WC znajduje się w osobnym budynku, około 15 metrów od tarasu. Uwaga: pokoje nie są ogrzewane.`,
    amenities: {
        room1: ['łóżko dwuosobowe', 'wyjście na taras', 'odkurzacz', 'suszarka na ubrania', 'żelazko', 'deska do prasowania'],
        room2: ['dwa łóżka pojedyncze', 'TV', 'wyjście na taras'],
        bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
        kitchen: ['osobny budynek 15 m od tarasu', 'lodówka', 'mikrofalówka', 'komplet naczyń i sztućców', 'kuchenka gazowa', 'WC'],
        terrace: ['taras od strony podwórza', 'stół', 'ławki', 'krzesła'],
        general: ['grill i miejsce na ognisko', 'wiata grillowa', 'hamak', 'pomost', 'taras widokowy', 'brak ogrzewania']
    },
    gallery: {
        heroImage: getAssetPath("/images/pokoje_fuleda/fuleda_pokoje_hero.webp"),
        images: [
            getAssetPath("/images/pokoje_fuleda/fuleda_pokoje_hero.webp"),
            getAssetPath("/images/pokoje_fuleda/335.webp"),
            getAssetPath("/images/pokoje_fuleda/336.webp"),
            getAssetPath("/images/pokoje_fuleda/337.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_2.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_3.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_4.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_5.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_6.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_7.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_8.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_9.webp"),
            getAssetPath("/images/pokoje_fuleda/pokoje/pokoje_10.webp"),
            getAssetPath("/images/pokoje_fuleda/314.webp"),
            getAssetPath("/images/pokoje_fuleda/315.webp"),
            getAssetPath("/images/pokoje_fuleda/316.webp"),
            getAssetPath("/images/pokoje_fuleda/317.webp"),
            getAssetPath("/images/pokoje_fuleda/318.webp"),
            getAssetPath("/images/pokoje_fuleda/319.webp"),
            getAssetPath("/images/pokoje_fuleda/321.webp"),
            getAssetPath("/images/pokoje_fuleda/322.webp"),
            getAssetPath("/images/pokoje_fuleda/326.webp"),
            getAssetPath("/images/pokoje_fuleda/327.webp"),
            getAssetPath("/images/pokoje_fuleda/329.webp"),
            getAssetPath("/images/pokoje_fuleda/331.webp"),
            getAssetPath("/images/pokoje_fuleda/332.webp"),
            getAssetPath("/images/pokoje_fuleda/104029_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104030_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104036_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104037_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104040_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104043_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104044_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104045_8.webp"),
            getAssetPath("/images/pokoje_fuleda/104046_8.webp")
        ]
    }
};
