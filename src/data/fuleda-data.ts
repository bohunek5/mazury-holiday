export type FuledaApartment = {
    id: string;
    type: string;
    guests: string;
    description: string;
    amenities: {
        living: string[];
        kitchen: string[];
        bedroom: string[];
        bathroom: string[];
        terrace: string[];
    };
    gallery: {
        heroImage: string;
        images: string[];
    };
    idoBookingId?: string;
    icalUrl?: string;
};

export const fuledaApartments: Record<string, FuledaApartment> = {
    'parter': {
        id: 'parter',
        type: 'Parter',
        guests: '2+2',
        idoBookingId: '26',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/26/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: `Apartamenty na Fuledzie to pięknie i stylowo wykończony obiekt. Lokalizacja nad samym jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.

Apartament Fuleda Parter jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Posiada klimatyzację, przytulny kominek oraz dwa tarasy z widokiem na jezioro. Dostęp do prywatnego zejścia do jeziora z miejscem na ognisko i grilla sprawia, że jest to idealne miejsce dla osób ceniących bliskość natury.

Fuleda położona jest około 10km od Giżycka, 20km od Kętrzyna i Gierłoży (Wilczy Szaniec). W pobliżu znajdują się lasy, łąki oraz liczne trasy rowerowe.`,
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'TV', 'Stół i krzesła', 'Kominek', 'WiFi'],
            kitchen: ['Ekspres do kawy', 'Kuchenka', 'Lodówka', 'Zmywarka', 'Chłodziarka do wina', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: '/mazury-holiday/images/fuleda/parter/parter_1.webp',
            images: [
                '/mazury-holiday/images/fuleda/parter/parter_1.webp',
                '/mazury-holiday/images/fuleda/parter/parter_2.webp',
                '/mazury-holiday/images/fuleda/parter/parter_3.webp',
                '/mazury-holiday/images/fuleda/parter/parter_4.webp',
                '/mazury-holiday/images/fuleda/parter/parter_5.webp',
                '/mazury-holiday/images/fuleda/parter/parter_6.webp',
                '/mazury-holiday/images/fuleda/parter/parter_7.webp',
                '/mazury-holiday/images/fuleda/parter/parter_8.webp',
                '/mazury-holiday/images/fuleda/parter/parter_9.webp',
                '/mazury-holiday/images/fuleda/parter/parter_10.webp',
                '/mazury-holiday/images/fuleda/parter/parter_11.webp',
                '/mazury-holiday/images/fuleda/parter/parter_12.webp',
                '/mazury-holiday/images/fuleda/parter/parter_13.webp',
                '/mazury-holiday/images/fuleda/parter/parter_14.webp',
                '/mazury-holiday/images/fuleda/parter/parter_15.webp',
                '/mazury-holiday/images/fuleda/parter/parter_16.webp',
                '/mazury-holiday/images/fuleda/parter/parter_17.webp',
                '/mazury-holiday/images/fuleda/parter/parter_18.webp',
                '/mazury-holiday/images/fuleda/parter/parter_19.webp'
            ]
        }
    },
    'pietro': {
        id: 'pietro',
        type: 'Piętro',
        guests: '2+1',
        idoBookingId: '27',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/27/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartamenty na Fuledzie to pięknie i stylowo wykończony obiekt. Lokalizacja nad samym jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.\n\nApartament Fuleda z jedną sypialnią położony na piętrze jest kompleksowo wyposażony, ogrzewany i zapewnia komfortowy wypoczynek przez cały rok. Posiada klimatyzację oraz przytulny kominek.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'TV', 'Stół i krzesła', 'Kominek', 'WiFi'],
            kitchen: ['Ekspres do kawy', 'Kuchenka', 'Lodówka', 'Zmywarka', 'Chłodziarka do wina', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: '/mazury-holiday/images/fuleda/pietro/pietro_1.webp',
            images: [
                '/mazury-holiday/images/fuleda/pietro/pietro_1.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_2.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_3.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_4.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_5.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_6.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_7.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_8.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_9.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_10.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_11.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_12.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_13.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_14.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_15.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_16.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_17.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_18.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_19.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_20.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_21.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_22.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_23.webp',
                '/mazury-holiday/images/fuleda/pietro/pietro_24.webp'
            ]
        }
    }
};
