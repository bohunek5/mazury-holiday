export type FuledaApartment = {
    id: string;
    type: string;
    price: number;
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
        price: 250,
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
            heroImage: '/images/fuleda/parter/Fuleda parter1.webp',
            images: [
                '/images/fuleda/parter/Fuleda parter1.webp',
                '/images/fuleda/parter/Fuleda parter.webp',
                '/images/fuleda/parter/Fuleda parter3.webp',
                '/images/fuleda/parter/Fuleda parter4.webp',
                '/images/fuleda/parter/Fuleda parter5.webp',
                '/images/fuleda/parter/Fuleda parter6.webp',
                '/images/fuleda/parter/Fuleda parter7.webp',
                '/images/fuleda/parter/Fuleda parter8.webp',
                '/images/fuleda/parter/Fuleda parter9.webp',
                '/images/fuleda/parter/Fuleda parter10.webp',
                '/images/fuleda/parter/Fuleda parter11.webp'
            ]
        }
    },
    'pietro': {
        id: 'pietro',
        type: 'Piętro',
        price: 200,
        guests: '2+1',
        idoBookingId: '27',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/27/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament Fuleda z jedną sypialnią położony na piętrze jest kompleksowo wyposażony, ogrzewany i zapewnia komfortowy wypoczynek przez cały rok. Posiada klimatyzację oraz przytulny kominek.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'TV', 'Stół i krzesła', 'Kominek', 'WiFi'],
            kitchen: ['Ekspres do kawy', 'Kuchenka', 'Lodówka', 'Zmywarka', 'Chłodziarka do wina', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: '/images/fuleda/parter/Fuleda parter1.webp',
            images: [
                '/images/fuleda/pietro/Fuleda pietro1.webp',
                '/images/fuleda/pietro/Fuleda pietro.webp',
                '/images/fuleda/pietro/Fuleda pietro2.webp',
                '/images/fuleda/pietro/Fuleda pietro3.webp',
                '/images/fuleda/pietro/Fuleda pietro4.webp',
                '/images/fuleda/pietro/Fuleda pietro5.webp',
                '/images/fuleda/pietro/Fuleda pietro6.webp',
                '/images/fuleda/pietro/Fuleda pietro7.webp',
                '/images/fuleda/pietro/Fuleda pietro8.webp',
                '/images/fuleda/pietro/Fuleda pietro9.webp'
            ]
        }
    }
};


