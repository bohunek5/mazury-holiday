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
    idoBookingId?: string;
    icalUrl?: string;
};

export const strandaApartments: Record<string, Apartment> = {
    'A103': {
        id: 'A103',
        building: 'A',
        type: 'Suite',
        price: 300,
        guests: '2+2',
        idoBookingId: '2',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/2/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
            heroImage: '/mazury-holiday/images/stranda/A103_images/0T1A8736.webp',
            images: [
                '/mazury-holiday/images/stranda/A103_images/0T1A8736.webp',
                '/mazury-holiday/images/stranda/A103_images/0T1A8742.webp',
                '/mazury-holiday/images/stranda/A103_images/0T1A8747.webp',
                '/mazury-holiday/images/stranda/A103_images/0T1A8745.webp',
                '/mazury-holiday/images/stranda/A103_images/A103 łazienkaa.webp'
            ]
        }
    },
    'A104': {
        id: 'A104',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '3',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/3/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
            heroImage: '/mazury-holiday/images/stranda/A104_images/A104j.webp',
            images: [
                '/mazury-holiday/images/stranda/A104_images/A104k.webp',
                '/mazury-holiday/images/stranda/A104_images/A104j.webp',
                '/mazury-holiday/images/stranda/A104_images/A104i.webp',
                '/mazury-holiday/images/stranda/A104_images/A104h.webp',
                '/mazury-holiday/images/stranda/A104_images/A104g.webp'
            ]
        }
    },
    'A105': {
        id: 'A105',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '10',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/10/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
            heroImage: '/mazury-holiday/images/stranda/A105_images/5S5A0390_02411120613.webp',
            images: [
                '/mazury-holiday/images/stranda/A105_images/5S5A0390_02411120613.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0387_023740.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0388_02391019628.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0389_02394119878.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0392_024142.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0393_02431221600.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0394_02434221848.webp',
                '/mazury-holiday/images/stranda/A105_images/5S5A0395_02451022567.webp'
            ]
        }
    },
    'A204': {
        id: 'A204',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '12',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/12/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament A204 to luksusowa jednostka z jacuzzi na wyższej kondygnacji, oferująca niezapomniane widoki i komfort.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'Smart TV'],
            kitchen: ['Aneks kuchenny', 'Zmywarka', 'Ekspres do kawy'],
            bedroom: ['Łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Suszarka'],
            terrace: ['Prywatne jacuzzi', 'Meble tarasowe']
        },
        additionalInfo: ['WiFi', 'Miejsce postojowe'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A104_images/A104j.webp',
            images: []
        }
    },
    'A205': {
        id: 'A205',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '13',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/13/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament A205 łączy luksus z nowoczesnością, zapewniając relaks w prywatnym jacuzzi z widokiem na okolicę.',
        amenities: {
            living: ['Klimatyzacja', 'Smart TV', 'Sofa'],
            kitchen: ['Zmywarka', 'Płyta indukcyjna', 'Lodówka'],
            bedroom: ['Łóżko podwójne'],
            bathroom: ['Prysznic', 'Ręczniki'],
            terrace: ['Prywatne jacuzzi', 'Widok na jezioro']
        },
        additionalInfo: ['Bezpłatne WiFi', 'Parking'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A105_images/5S5A0390_02411120613.webp',
            images: []
        }
    },
    'A302': {
        id: 'A302',
        building: 'A',
        type: 'Suite',
        price: 350,
        guests: '2+2',
        idoBookingId: '50',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/50/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament A302 typu Suite oferuje przestronne wnętrza i wysoki standard wykończenia dla wymagających gości.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa 2-osobowa', 'Smart TV'],
            kitchen: ['Pełne wyposażenie kuchni', 'Zmywarka'],
            bedroom: ['Duże łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Pralka'],
            terrace: ['Balkon', 'Meble wypoczynkowe']
        },
        additionalInfo: ['WiFi', 'Winda w budynku'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A103_images/0T1A8736.webp',
            images: []
        }
    },
    'A305': {
        id: 'A305',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '14',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/14/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament A305 to elegancja i relaks w jednym - prywatne jacuzzi na tarasie to idealny sposób na odpoczynek.',
        amenities: {
            living: ['Klimatyzacja', 'Smart TV', 'Sofa'],
            kitchen: ['Zmywarka', 'Ekspres do kawy'],
            bedroom: ['Łóżko 180x200'],
            bathroom: ['Prysznic', 'Suszarka'],
            terrace: ['Prywatne jacuzzi', 'Panoramiczny widok']
        },
        additionalInfo: ['Premium Service', 'WiFi'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A105_images/5S5A0390_02411120613.webp',
            images: []
        }
    },
    'A306': {
        id: 'A306',
        building: 'A',
        type: 'Delux z jacuzzi',
        price: 450,
        guests: '2+2',
        idoBookingId: '15',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/15/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament A306 oferuje luksusowy standard oraz najwyższej jakości udogodnienia, w tym prywatne jacuzzi.',
        amenities: {
            living: ['Klimatyzacja', 'Sofa', 'TV'],
            kitchen: ['Zmywarka', 'Aneks kuchenny'],
            bedroom: ['Łóżko małżeńskie'],
            bathroom: ['Prysznic', 'Zestaw ręczników'],
            terrace: ['Prywatne jacuzzi', 'Widok na marinę']
        },
        additionalInfo: ['Bezpłatny parking', 'WiFi'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A104_images/A104j.webp',
            images: []
        }
    },
    'A403': {
        id: 'A403',
        building: 'A',
        type: 'Premium Suite',
        price: 500,
        guests: '2+2',
        idoBookingId: '17',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/17/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Najwyżej położony apartament A403 Premium Suite to gwarancja prywatności i najlepszych widoków w całym kompleksie.',
        amenities: {
            living: ['Klimatyzacja', 'Designerskie wnętrze', 'Smart TV'],
            kitchen: ['Wysoki standard AGD', 'Zmywarka'],
            bedroom: ['Łóżko King Size'],
            bathroom: ['Luksusowy prysznic', 'Pralka'],
            terrace: ['Duży taras', 'Widok panoramiczny']
        },
        additionalInfo: ['Top Floor', 'VIP Access', 'WiFi'],
        gallery: {
            heroImage: '/mazury-holiday/images/stranda/A103_images/0T1A8736.webp',
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
            heroImage: '/mazury-holiday/images/stranda/C404_images/hero.webp',
            images: []
        }
    },
    'B102': {
        id: 'B102',
        building: 'B',
        type: 'Delux z jacuzzi',
        price: 500,
        guests: '2+2',
        idoBookingId: '18',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/18/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
            heroImage: '/mazury-holiday/images/stranda/B102_images/hero.webp',
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
            heroImage: '/mazury-holiday/images/stranda/B106_images/hero.webp',
            images: []
        }
    },
    'B202': {
        id: 'B202',
        building: 'B',
        type: 'Delux z sauną i jacuzzi',
        price: 500,
        guests: '2+2',
        idoBookingId: '46',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/46/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
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
            heroImage: '/mazury-holiday/images/stranda/B202_images/hero.webp',
            images: []
        }
    },
    'C304': {
        id: 'C304',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '30',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/30/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C304',
        amenities: {
            living: [],
            kitchen: [],
            bedroom: [],
            bathroom: [],
            terrace: []
        },
        additionalInfo: [],
        gallery: {
            heroImage: '',
            images: []
        }
    },
    'B103': {
        id: 'B103',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '19',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/19/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B103',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B201': {
        id: 'B201',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '47',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/47/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B201',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B304': {
        id: 'B304',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '54',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/54/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B304',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B305': {
        id: 'B305',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '55',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/55/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B305',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B401': {
        id: 'B401',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '23',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/23/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B401',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B402': {
        id: 'B402',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '24',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/24/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B402',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'B404': {
        id: 'B404',
        building: 'B',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '25',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/25/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament B404',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C101': {
        id: 'C101',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '51',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/51/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C101',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C102': {
        id: 'C102',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '38',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/38/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C102',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C103': {
        id: 'C103',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '34',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/34/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C103',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C104': {
        id: 'C104',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '35',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/35/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C104',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C105': {
        id: 'C105',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '36',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/36/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C105',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C201': {
        id: 'C201',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '52',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/52/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C201',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C202': {
        id: 'C202',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '40',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/40/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C202',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C203': {
        id: 'C203',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '39',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/39/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C203',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C204': {
        id: 'C204',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '37',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/37/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C204',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C205': {
        id: 'C205',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '53',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/53/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C205',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    },
    'C301': {
        id: 'C301',
        building: 'C',
        type: 'Apartament',
        price: 0,
        guests: '2+2',
        idoBookingId: '48',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/48/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: 'Apartament C301',
        amenities: { living: [], kitchen: [], bedroom: [], bathroom: [], terrace: [] },
        additionalInfo: [],
        gallery: { heroImage: '', images: [] }
    }
};
