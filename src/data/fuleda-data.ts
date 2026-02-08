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
};

export const fuledaApartments: Record<string, FuledaApartment> = {
    'parter': {
        id: 'parter',
        type: 'Parter',
        guests: '2+2',
        description: 'Apartamenty na Fuledzie to pięknie i stylowo wykończony obiekt. Lokalizacja nad samym jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.\n\nApartament na parterze posiada prywatne dojście do jeziora z miejscem na ognisko i grilla. Wyposażony jest w klimatyzację oraz kominek, co zapewnia komfort o każdej porze roku.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'TV', 'Stół i krzesła', 'Kominek', 'WiFi'],
            kitchen: ['Ekspres do kawy', 'Kuchenka', 'Lodówka', 'Zmywarka', 'Chłodziarka do wina', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: '/mazury-holiday/images/fuleda/parter/104001_8.jpg',
            images: [
                '/mazury-holiday/images/fuleda/parter/104001_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104002_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104003_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104004_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104005_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104006_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104007_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104008_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104011_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104012_8.jpg',
                '/mazury-holiday/images/fuleda/parter/104013_8.jpg'
            ]
        }
    },
    'pietro': {
        id: 'pietro',
        type: 'Piętro',
        guests: '2+1',
        description: 'Apartamenty na Fuledzie to pięknie i stylowo wykończony obiekt. Lokalizacja nad samym jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.\n\nApartament Fuleda z jedną sypialnią położony na piętrze jest kompleksowo wyposażony, ogrzewany i zapewnia komfortowy wypoczynek przez cały rok. Posiada klimatyzację oraz przytulny kominek.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'TV', 'Stół i krzesła', 'Kominek', 'WiFi'],
            kitchen: ['Ekspres do kawy', 'Kuchenka', 'Lodówka', 'Zmywarka', 'Chłodziarka do wina', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: '/mazury-holiday/images/fuleda/pietro/104019_8.jpg',
            images: [
                '/mazury-holiday/images/fuleda/pietro/104014_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104015_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104016_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104018_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104019_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104020_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104021_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104022_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104025_8.jpg',
                '/mazury-holiday/images/fuleda/pietro/104026_8.jpg'
            ]
        }
    }
};
