export type Apartment = {
    id: string;
    building: 'A' | 'B' | 'C';
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
    additionalInfo: string[];
    gallery: {
        heroImage: string;
        images: string[];
    };
};

export const strandaApartments: Record<string, Apartment> = {
    'A103': {
        id: 'A103',
        building: 'A',
        type: 'Suite',
        price: 300,
        guests: '2+2',
        description: 'Apartament A103 Suite leży na pierwszej kondygnacji budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży taras z meblami.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'Smart TV', 'WiFi'],
            kitchen: ['Zmywarka', 'Płyta indukcyjna', 'Lodówka', 'Kuchenka mikrofalowa', 'Komplet naczyń'],
            bedroom: ['Łóżko 180x200', 'TV', 'Szafa'],
            bathroom: ['Prysznic', 'Suszarka do włosów', 'Ręczniki', 'Pralka'],
            terrace: ['Meble wypoczynkowe', 'Widok na port Stranda']
        },
        additionalInfo: ['Bezpłatne WiFi', 'Miejsce parkingowe w cenie'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A103/0T1A8736.jpg',
            images: [
                '/mazury-holiday/images/stranda/A103/0T1A8736.jpg',
                '/mazury-holiday/images/stranda/A103/0T1A8742.jpg',
                '/mazury-holiday/images/stranda/A103/0T1A8747.jpg',
                '/mazury-holiday/images/stranda/A103/0T1A8745.jpg',
                '/mazury-holiday/images/stranda/A103/A103 łazienkaa.jpg'
            ]
        }
    },
    'A104': {
        id: 'A104',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        description: 'Apartament A104 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku A. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'Smart TV'],
            kitchen: ['Aneks kuchenny', 'Zmywarka', 'Płyta indukcyjna'],
            bedroom: ['Łóżko podwójne', 'TV'],
            bathroom: ['Prysznic', 'Suszarka do włosów'],
            terrace: ['Prywatne jacuzzi', 'Meble tarasowe', 'Widok na jezioro Kisajno']
        },
        additionalInfo: ['Prywatne jacuzzi w cenie', 'Miejsce parkingowe'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A104/A104j.jpg',
            images: [
                '/mazury-holiday/images/stranda/A104/A104k.jpg',
                '/mazury-holiday/images/stranda/A104/A104j.jpg',
                '/mazury-holiday/images/stranda/A104/A104i.jpg',
                '/mazury-holiday/images/stranda/A104/A104h.jpg',
                '/mazury-holiday/images/stranda/A104/A104g.jpg'
            ]
        }
    },
    'A105': {
        id: 'A105',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        description: 'Apartament A105 to luksusowa jednostka z jacuzzi, oferująca komfortowy wypoczynek w nowoczesnym wnętrzu.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'Smart TV'],
            kitchen: ['Aneks kuchenny', 'Zmywarka', 'Ekspres do kawy'],
            bedroom: ['Łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Zestaw kosmetyków'],
            terrace: ['Prywatne jacuzzi', 'Widok na marinę']
        },
        additionalInfo: ['Dostęp do WiFi', 'Gwarancja jakości'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A105/hero.jpg',
            images: []
        }
    },
    'C404': {
        id: 'C404',
        building: 'C',
        type: 'Studio',
        price: 500,
        guests: '2+2',
        description: 'Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda.',
        amenities: {
            living: ['Salon z aneksem', 'Sofa 2-osobowa', 'TV'],
            kitchen: ['Płyta indukcyjna', 'Lodówka'],
            bedroom: ['Łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Ręczniki'],
            terrace: ['Widok na port', 'Meble balkonowe']
        },
        additionalInfo: ['Top Floor', 'Panoramiczny widok'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/C404/hero.jpg',
            images: []
        }
    },
    'B102': {
        id: 'B102',
        building: 'B',
        type: 'Delux z jacuzzi',
        price: 500,
        guests: '2+2',
        description: 'Apartament B102 położony na parterze budynku B posiada przestronny salon z aneksem kuchennym oraz własne jacuzzi na tarasie.',
        amenities: {
            living: ['Salon z aneksem', 'Sofa 2-osobowa', 'TV'],
            kitchen: ['Płyta indukcyjna', 'Lodówka', 'Zmywarka'],
            bedroom: ['Łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Ręczniki'],
            terrace: ['Prywatne jacuzzi', 'Meble tarasowe']
        },
        additionalInfo: ['Parter', 'Prywatne jacuzzi'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/B102/hero.jpg',
            images: []
        }
    },
    'B106': {
        id: 'B106',
        building: 'B',
        type: 'Suite',
        price: 500,
        guests: '4+2',
        description: 'Luksusowy apartament na parterze z dwiema sypialniami i dużym salonem.',
        amenities: {
            living: ['Duży salon', 'Sofa 2-osobowa', 'TV'],
            kitchen: ['Pełne wyposażenie AGD', 'Zmywarka'],
            bedroom: ['Dwie oddzielne sypialnie', 'Łóżka małżeńskie'],
            bathroom: ['Prysznic', 'Suszarka'],
            terrace: ['Duży taras', 'Meble ogrodowe']
        },
        additionalInfo: ['Idealny dla rodzin', '2 Sypialnie'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/B106/hero.jpg',
            images: []
        }
    },
    'B202': {
        id: 'B202',
        building: 'B',
        type: 'Delux z sauną i jacuzzi',
        price: 500,
        guests: '2+2',
        description: 'Wyjątkowy apartament na pierwszym piętrze z prywatną sauną i jacuzzi na tarasie.',
        amenities: {
            living: ['Klimatyzacja', 'Smart TV', 'Sofa'],
            kitchen: ['Zmywarka', 'Ekspres do kawy', 'Płyta indukcyjna'],
            bedroom: ['Dwie sypialnie', 'Komfortowe łóżka'],
            bathroom: ['Prywatna sauna', 'Prysznic', 'Pralka'],
            terrace: ['Jacuzzi na tarasie', 'Widok na zatokę Tracz']
        },
        additionalInfo: ['Prywatna sauna', 'Jacuzzi', 'Widok na jezioro'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/B202/hero.jpg',
            images: []
        }
    }
};
