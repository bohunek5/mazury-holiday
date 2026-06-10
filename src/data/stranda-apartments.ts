import { getAssetPath } from '@/utils/assetPath';
import { Apartment } from '@/types/apartment';

export const strandaApartments: Record<string, Apartment> = {

    'B101': {
        id: 'B101',
        title: `Apartament B101 Suite 2+2`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: `Apartament B101 znajduje się na parterze budynku B.`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '35',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B104': {
        id: 'B104',
        title: `Apartament B104 Suite 2+2`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: `Apartament B104 znajduje się na parterze budynku B.`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '20',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B105': {
        id: 'B105',
        title: `Apartament B105 Suite 2+2`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: `Apartament B105 znajduje się na parterze budynku B.`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '21',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },
    'B302': {
        id: 'B302',
        title: `Apartament B302 Suite 2+2`,
        building: 'B',
        type: 'standard',
        price: 350,
        guests: '2+2',
        description: `Apartament B302 znajduje się na drugim piętrze budynku B.`,
        amenities: {
            "living": ["TV", "sofa 2os.", "stół", "krzesła", "stolik kawowy", "szafa", "klimatyzacja"],
            "kitchen": ["lodówka", "płyta indukcyjna", "zmywarka", "czajnik elektryczny", "przybory kuchenne", "zastawa stołowa", "ekspres do kawy"],
            "bedroom": ["łóżko podwójne", "pościel", "szafki nocne", "szafa"],
            "bathroom": ["prysznic", "WC", "umywalka", "ręczniki", "suszarka do włosów", "zestaw kosmetyków"],
            "terrace": ["meble wypoczynkowe"]
        },
        idoBookingId: '36',
        gallery: {
            heroImage: '/images/apartments/stranda/b304/1.jpg',
            images: [
                '/images/apartments/stranda/b304/1.jpg',
                '/images/apartments/stranda/b304/2.jpg'
            ]
        }
    },




    'A204': {
        id: 'A204',
        title: `Apartament A204 Suite 2+2`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',
        description: `Apartament A204 Suite leży na pierwszym piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym, rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "stół",
                "krzesła",
                "sofa dla 2 osób",
                "wyjście na taras"
            ],
            "kitchen": [
                "ekspres do kawy",
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko"
            ],
            "bathroom": [
                "prysznic",
                "pralka",
                "suszarka do włosów",
                "ręczniki"
            ],
            "terrace": [
                "dwa leżaki",
                "stolik",
                "widok na jezioro"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '12',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/12/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A204/A204_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A204/A204_1.webp"),
                getAssetPath("/images/stranda/A204/A204_2.webp"),
                getAssetPath("/images/stranda/A204/A204_3.webp"),
                getAssetPath("/images/stranda/A204/A204_4.webp"),
                getAssetPath("/images/stranda/A204/A204_5.webp"),
                getAssetPath("/images/stranda/A204/A204_6.webp"),
                getAssetPath("/images/stranda/A204/A204_7.webp"),
                getAssetPath("/images/stranda/A204/A204_8.webp"),
                getAssetPath("/images/stranda/A204/A204_9.webp"),
                getAssetPath("/images/stranda/A204/A204_10.webp"),
                getAssetPath("/images/stranda/A204/A204_11.webp")
            ]
        }
    },

    'A105': {
        id: 'A105',
        title: `Apartament A105 Delux 2+2 z Jacuzzi`,
        building: 'A',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+2',
        description: `Apartament A105 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku A. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi. Całość z pięknym widokiem na jezioro Kisajno. 

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda v apartamentowcach Stranda Residence A,B i C, nad brzegiem jeziora Kisajno i zatoki Tracz. Z tarasu rozpościera się piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament Delux jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "sofa 2os.",
                "stół",
                "krzesła",
                "klimatyzacja",
                "wifi"
            ],
            "kitchen": [
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "mikrofalówka",
                "komplet naczyń i sztućców",
                "zestaw startowy (woda, kawa, herbata)"
            ],
            "bedroom": [
                "TV",
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "suszarka do włosów",
                "szlafroki",
                "mydło",
                "żel pod prysznic",
                "balsam do ciała",
                "komplet ręczników"
            ],
            "terrace": [
                "komplet mebli wypoczynkowych",
                "leżak",
                "stolik",
                "prywatne jacuzzi"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '10',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/10/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A105/A105_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A105/A105_1.webp"),
                getAssetPath("/images/stranda/A105/A105_2.webp"),
                getAssetPath("/images/stranda/A105/A105_3.webp"),
                getAssetPath("/images/stranda/A105/A105_4.webp"),
                getAssetPath("/images/stranda/A105/A105_5.webp"),
                getAssetPath("/images/stranda/A105/A105_6.webp"),
                getAssetPath("/images/stranda/A105/A105_7.webp"),
                getAssetPath("/images/stranda/A105/A105_8.webp"),
                getAssetPath("/images/stranda/A105/A105_9.webp"),
                getAssetPath("/images/stranda/A105/A105_10.webp"),
                getAssetPath("/images/stranda/A105/A105_11.webp")
            ]
        }
    },

    'A103': {
        id: 'A103',
        title: `Apartament A103 Suite 2+2`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',
        description: `Apartament A103 Suite leży na pierwszej kondygnacji budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży taras z meblami.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "stół",
                "krzesła",
                "sofa dla 2 osób",
                "wyjście na taras",
                "klimatyzacja",
                "wifi"
            ],
            "kitchen": [
                "ekspres do kawy",
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "chłodziarka do wina",
                "komplet naczyń i sztućców",
                "zestaw startowy (woda, kawa, herbata)"
            ],
            "bedroom": [
                "łóżko 180x200",
                "TV",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "pralka",
                "suszarka do włosów",
                "prostownica",
                "ręczniki",
                "żel pod prysznic",
                "balsam"
            ],
            "terrace": [
                "przestronny taras",
                "dwa leżaki",
                "stolik",
                "widok na jezioro"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '1',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/1/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A103/A103_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A103/A103_1.webp"),
                getAssetPath("/images/stranda/A103/A103_2.webp"),
                getAssetPath("/images/stranda/A103/A103_3.webp"),
                getAssetPath("/images/stranda/A103/A103_4.webp"),
                getAssetPath("/images/stranda/A103/A103_5.webp"),
                getAssetPath("/images/stranda/A103/A103_6.webp"),
                getAssetPath("/images/stranda/A103/A103_7.webp"),
                getAssetPath("/images/stranda/A103/A103_8.webp"),
                getAssetPath("/images/stranda/A103/A103_9.webp"),
                getAssetPath("/images/stranda/A103/A103_10.webp"),
                getAssetPath("/images/stranda/A103/A103_11.webp"),
                getAssetPath("/images/stranda/A103/A103_12.webp")
            ]
        }
    },

    'A205': {
        id: 'A205',
        title: `Apartament A205 Suite 2+2`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',
        description: `Apartament A205 Suite posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży zadaszony taras z meblami. Znajduje się na drugiej kondygnacji budynku.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "stół",
                "krzesła",
                "sofa dla 2 osób",
                "klimatyzacja",
                "wyjście na taras"
            ],
            "kitchen": [
                "ekspres do kawy",
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "pralka",
                "suszarka do włosów",
                "żel pod prysznic",
                "balsam do ciała"
            ],
            "terrace": [
                "meble tarasowe",
                "leżak",
                "stolik",
                "widok na jezioro"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '13',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/13/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A205/A205_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A205/A205_1.webp"),
                getAssetPath("/images/stranda/A205/A205_2.webp"),
                getAssetPath("/images/stranda/A205/A205_3.webp"),
                getAssetPath("/images/stranda/A205/A205_4.webp"),
                getAssetPath("/images/stranda/A205/A205_5.webp"),
                getAssetPath("/images/stranda/A205/A205_6.webp"),
                getAssetPath("/images/stranda/A205/A205_7.webp"),
                getAssetPath("/images/stranda/A205/A205_8.webp"),
                getAssetPath("/images/stranda/A205/A205_9.webp"),
                getAssetPath("/images/stranda/A205/A205_10.webp"),
                getAssetPath("/images/stranda/A205/A205_11.webp"),
                getAssetPath("/images/stranda/A205/A205_12.webp"),
                getAssetPath("/images/stranda/A205/A205_13.webp"),
                getAssetPath("/images/stranda/A205/A205_14.webp"),
                getAssetPath("/images/stranda/A205/A205_15.webp"),
                getAssetPath("/images/stranda/A205/A205_16.webp")
            ]
        }
    },

    'A104': {
        id: 'A104',
        title: `Apartament A104 Delux 2+2 z Jacuzzi`,
        building: 'A',
        type: 'oneBedroomJacuzzi',
        price: 450,
        guests: '2+1',
        description: `Apartament A104 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku A. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienkę z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi. Całość z pięknym widokiem na jezioro Kisajno. 

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda v apartamentowcach Stranda Residence A,B i C, nad brzegiem jeziora Kisajno i zatoki Tracz. Z tarasu rozpościera się piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament Delux jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "sofa 1os.",
                "stół",
                "krzesła",
                "klimatyzacja",
                "wifi"
            ],
            "kitchen": [
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "mikrofalówka",
                "komplet naczyń i sztućców",
                "zestaw startowy (woda, kawa, herbata)"
            ],
            "bedroom": [
                "TV",
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "suszarka do włosów",
                "szlafroki",
                "mydło",
                "żel pod prysznic",
                "balsam do ciała",
                "komplet ręczników"
            ],
            "terrace": [
                "komplet mebli wypoczynkowych",
                "leżak",
                "stolik",
                "prywatne jacuzzi"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '2',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/2/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A104/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A104/hero_1.webp"),
                getAssetPath("/images/stranda/A104/new_1.webp"),
                getAssetPath("/images/stranda/A104/new_2.webp"),
                getAssetPath("/images/stranda/A104/new_3.webp"),
                getAssetPath("/images/stranda/A104/new_4.webp")
            ]
        }
    },

    'A306': {
        id: 'A306',
        title: `Apartament A306 Suite 4+2`,
        building: 'A',
        type: 'twoBedrooms',
        price: 500,
        guests: '4+2',
        description: `Apartament A306 Suite posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem i duży zadaszony taras z meblami. Leży na trzeciej kondygnacji budynku.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "stół",
                "krzesła",
                "sofa dla 2 osób",
                "klimatyzacja",
                "wyjście na taras"
            ],
            "kitchen": [
                "ekspres do kawy",
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "chłodziarka do wina",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "łóżko 180x200",
                "TV",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "pralka",
                "suszarka do włosów",
                "żel pod prysznic",
                "mydło",
                "balsam do ciała"
            ],
            "terrace": [
                "meble tarasowe",
                "dwa leżaki",
                "stolik",
                "widok na jezioro"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '15',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/15/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A306/A306_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A306/A306_1.webp"),
                getAssetPath("/images/stranda/A306/A306_2.webp"),
                getAssetPath("/images/stranda/A306/A306_3.webp"),
                getAssetPath("/images/stranda/A306/A306_4.webp"),
                getAssetPath("/images/stranda/A306/A306_5.webp"),
                getAssetPath("/images/stranda/A306/A306_6.webp"),
                getAssetPath("/images/stranda/A306/A306_7.webp"),
                getAssetPath("/images/stranda/A306/A306_8.webp"),
                getAssetPath("/images/stranda/A306/A306_9.webp"),
                getAssetPath("/images/stranda/A306/A306_10.webp"),
                getAssetPath("/images/stranda/A306/A306_11.webp"),
                getAssetPath("/images/stranda/A306/A306_12.webp"),
                getAssetPath("/images/stranda/A306/A306_13.webp"),
                getAssetPath("/images/stranda/A306/A306_14.webp"),
                getAssetPath("/images/stranda/A306/A306_15.webp"),
                getAssetPath("/images/stranda/A306/A306_16.webp"),
                getAssetPath("/images/stranda/A306/A306_17.webp")
            ]
        }
    },

    'A305': {
        id: 'A305',
        title: `Apartament A305 Suite 2+2`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',
        description: `Apartament A305 Suite leży na trzeciej kondygnacji budynku, z której rozpościera się piękny widok na jezioro Kisajno. Posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i duży zadaszony taras z meblami.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence, nad brzegiem jeziora Kisajno (zatoka Tracz). Rozpościera się z niego piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "stół",
                "krzesła",
                "sofa dla 2 osób",
                "klimatyzacja",
                "wyjście na taras"
            ],
            "kitchen": [
                "ekspres do kawy",
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "chłodziarka do wina",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "łóżko 180x200",
                "TV",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "pralka",
                "suszarka do włosów",
                "żel pod prysznic",
                "mydło",
                "balsam do ciała"
            ],
            "terrace": [
                "dwa leżaki",
                "meble tarasowe",
                "stolik",
                "widok na jezioro"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '14',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/14/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A305/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A305/hero_1.webp"),
                getAssetPath("/images/stranda/A305/new_1.webp"),
                getAssetPath("/images/stranda/A305/new_2.webp"),
                getAssetPath("/images/stranda/A305/new_3.webp"),
                getAssetPath("/images/stranda/A305/new_4.webp"),
                getAssetPath("/images/stranda/A305/new_5.webp"),
                getAssetPath("/images/stranda/A305/new_6.webp"),
                getAssetPath("/images/stranda/A305/new_7.webp"),
                getAssetPath("/images/stranda/A305/new_8.webp"),
                getAssetPath("/images/stranda/A305/new_9.webp"),
                getAssetPath("/images/stranda/A305/new_10.webp"),
                getAssetPath("/images/stranda/A305/new_11.webp"),
                getAssetPath("/images/stranda/A305/new_12.webp"),
                getAssetPath("/images/stranda/A305/new_13.webp"),
                getAssetPath("/images/stranda/A305/new_14.webp"),
                getAssetPath("/images/stranda/A305/new_15.webp"),
                getAssetPath("/images/stranda/A305/new_16.webp"),
                getAssetPath("/images/stranda/A305/new_17.webp"),
                getAssetPath("/images/stranda/A305/new_18.webp"),
                getAssetPath("/images/stranda/A305/new_19.webp"),
                getAssetPath("/images/stranda/A305/new_20.webp"),
                getAssetPath("/images/stranda/A305/new_21.webp")
            ]
        }
    },

    'B102': {
        id: 'B102',
        title: `Apartament B102 Delux 2+2 z Jacuzzi`,
        building: 'B',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+1',
        description: `Apartament B102 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku B. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi. Całość z pięknym widokiem na jezioro Kisajno, zatokę Tracz i port Stranda.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence A,B i C, nad brzegiem jeziora Kisajno i zatoki Tracz. Z tarasu rozpościera się piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament Delux jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "sofa 2os.",
                "stół",
                "krzesła",
                "klimatyzacja",
                "wifi"
            ],
            "kitchen": [
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "mikrofalówka",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "TV",
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "suszarka do włosów",
                "szlafroki",
                "balsam do ciała"
            ],
            "terrace": [
                "komplet mebli wypoczynkowych",
                "leżak",
                "stolik",
                "prywatne jacuzzi"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '18',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/18/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B102/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B102/hero_1.webp"),
                getAssetPath("/images/stranda/B102/new_1.webp")
            ]
        }
    },

    'A403': {
        id: 'A403',
        title: `Apartament A403 Delux 2+2 z Jacuzzi`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartament A403 Suite leży na najwyższym 3 piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz\nJacuzzi jest czynne cały rok.\nA403 Suite z jedną sypialnią (maksymalna ilość osób 4)\nWyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała\nWyposażenie tarasu dolnego: stolik, kanapa, dwa fotele, dwa leżaki\nWyposażenie tarasu górnego na dachu: dwa leżaki, stolik\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['dwa leżaki', 'stolik', 'prywatne jacuzzi na dachu']
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/A403/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/A403/hero_1.webp"),
                getAssetPath("/images/stranda/A403/new_1.webp"),
                getAssetPath("/images/stranda/A403/new_2.webp"),
                getAssetPath("/images/stranda/A403/new_3.webp"),
                getAssetPath("/images/stranda/A403/new_4.webp"),
                getAssetPath("/images/stranda/A403/new_5.webp")
            ]
        },
        idoBookingId: '25',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/25/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B404': {
        id: 'B404',
        title: `Apartament B404 Suite 2+2 z Jacuzzi`,
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartament B404 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz\nB404 Suite z jedną sypialnią (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: stolik, kanapa, dwa fotele, dwa leżaki\nWyposażenie tarasu górnego na dachu: dwa leżaki, stolik\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['dwa leżaki', 'stolik']
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B404/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B404/hero_1.webp"),
                getAssetPath("/images/stranda/B404/new_1.webp"),
                getAssetPath("/images/stranda/B404/new_2.webp"),
                getAssetPath("/images/stranda/B404/new_3.webp"),
                getAssetPath("/images/stranda/B404/new_4.webp"),
                getAssetPath("/images/stranda/B404/new_5.webp"),
                getAssetPath("/images/stranda/B404/new_6.webp")
            ]
        },
        idoBookingId: '25',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/25/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C304': {
        id: 'C304',
        title: `Apartament C304 Studio 2+2`,
        shortTitle: 'Apartament typu Studio',
        building: 'C',
        type: 'studio',
        price: 300,
        guests: '4',
        description: `Apartament C304 Studio znajduje się na drugim piętrze budynku C, posiada miejsce noclegowe z łóżkiem podwójnym, rozkładaną sofę 2os., salon z aneksem kuchennym, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda.\nC304 Studio (maksymalna ilość osób 4) Wyposażenie kuchni: płyta indukcyjna, mikrofalówka, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała\nWyposażenie tarasu: dwa fotele, stolik, leżak\nPozostałe: internet, wifi, komplet pościeli i ręczników, kosmetyki w łazience, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['płyta indukcyjna', 'mikrofalówka', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['dwa fotele', 'stolik', 'leżak']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C304/0T1A8808.webp"),
            images: [
                getAssetPath("/images/stranda/C304/0T1A8808.webp"),
                getAssetPath("/images/stranda/C304/0T1A8809.webp"),
                getAssetPath("/images/stranda/C304/0T1A8810.webp"),
                getAssetPath("/images/stranda/C304/0T1A8814.webp"),
                getAssetPath("/images/stranda/C304/0T1A8815.webp"),
                getAssetPath("/images/stranda/C304/0T1A8816.webp"),
                getAssetPath("/images/stranda/C304/0T1A8818.webp"),
                getAssetPath("/images/stranda/C304/0T1A8819.webp"),
                getAssetPath("/images/stranda/C304/0T1A8824.webp"),
                getAssetPath("/images/stranda/C304/0T1A8825.webp"),
                getAssetPath("/images/stranda/C304/0T1A8826.webp"),
                getAssetPath("/images/stranda/C304/0T1A8828.webp"),
                getAssetPath("/images/stranda/C304/C304_1.webp"),
                getAssetPath("/images/stranda/C304/C304_10.webp"),
                getAssetPath("/images/stranda/C304/C304_11.webp"),
                getAssetPath("/images/stranda/C304/C304_12.webp"),
                getAssetPath("/images/stranda/C304/C304_13.webp"),
                getAssetPath("/images/stranda/C304/C304_14.webp"),
                getAssetPath("/images/stranda/C304/C304_15.webp"),
                getAssetPath("/images/stranda/C304/C304_16.webp"),
                getAssetPath("/images/stranda/C304/C304_17.webp"),
                getAssetPath("/images/stranda/C304/C304_18.webp"),
                getAssetPath("/images/stranda/C304/C304_19.webp"),
                getAssetPath("/images/stranda/C304/C304_2.webp"),
                getAssetPath("/images/stranda/C304/C304_20.webp"),
                getAssetPath("/images/stranda/C304/C304_21.webp"),
                getAssetPath("/images/stranda/C304/C304_22.webp"),
                getAssetPath("/images/stranda/C304/C304_23.webp"),
                getAssetPath("/images/stranda/C304/C304_24.webp"),
                getAssetPath("/images/stranda/C304/C304_3.webp"),
                getAssetPath("/images/stranda/C304/C304_4.webp"),
                getAssetPath("/images/stranda/C304/C304_5.webp"),
                getAssetPath("/images/stranda/C304/C304_6.webp"),
                getAssetPath("/images/stranda/C304/C304_7.webp"),
                getAssetPath("/images/stranda/C304/C304_8.webp"),
                getAssetPath("/images/stranda/C304/C304_9.webp")
            ]
        },
        idoBookingId: '30',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/30/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B201': {
        id: 'B201',
        title: `Apartament B201 Suite 2+2 z Jacuzzi`,
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartament B201 Suite położony jest na pierwszym piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym, dwie sypialnie, dwie łazienki, jedna z prysznicem, druga z wanną, duży taras z widokiem na zatokę Tracz i jezioro Kisajno na którym znajduje się prywatne jacuzzi czynne cały rok.\nB201 Suite z dwoma sypialniami (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, lodówka, piekarnik, mikrofala, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa, stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni 1: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie sypialni 2: łóżko 180x200, komplet pościeli, klimatyzacja\nWyposażenie łazienki 1: prysznic, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała\nWyposażenie łazienki 2: wanna/prysznic, ręczniki, żel pod prysznic, mydło, balsam do ciała\nWyposażenie tarasu: stolik, kanapa, dwa fotele, jacuzzi\nPozostałe: internet, wifi, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'piekarnik', 'mikrofala', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'ręczniki', 'suszarka do włosów', 'zestaw kosmetyków'],
            terrace: ['stolik', 'kanapa', 'dwa fotele', 'jacuzzi']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/ido_39_1.jpg"),
            images: [
                getAssetPath("/images/stranda/ido_39_1.jpg"),
                getAssetPath("/images/stranda/ido_39_2.jpg"),
                getAssetPath("/images/stranda/ido_39_3.jpg"),
                getAssetPath("/images/stranda/ido_39_4.jpg"),
                getAssetPath("/images/stranda/ido_39_5.jpg"),
                getAssetPath("/images/stranda/ido_39_6.jpg"),
                getAssetPath("/images/stranda/ido_39_7.jpg"),
                getAssetPath("/images/stranda/ido_39_8.jpg"),
                getAssetPath("/images/stranda/ido_39_9.jpg"),
                getAssetPath("/images/stranda/ido_39_10.jpg"),
                getAssetPath("/images/stranda/ido_39_11.jpg"),
                getAssetPath("/images/stranda/ido_39_12.jpg"),
                getAssetPath("/images/stranda/ido_39_13.jpg"),
                getAssetPath("/images/stranda/ido_39_14.jpg"),
                getAssetPath("/images/stranda/ido_39_15.jpg"),
                getAssetPath("/images/stranda/ido_39_16.jpg"),
                getAssetPath("/images/stranda/ido_39_17.jpg"),
                getAssetPath("/images/stranda/ido_39_18.jpg"),
                getAssetPath("/images/stranda/ido_39_19.jpg"),
                getAssetPath("/images/stranda/ido_39_20.jpg")
            ]
        },
        idoBookingId: '39',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/39/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B401': {
        id: 'B401',
        title: `Apartament B401 Suite 4+2 z Jacuzzi`,
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartament B401 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, 2 sypialnie, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz\nJacuzzi jest czynne cały rok\nB401 Suite z dwoma sypialniami (maksymalna ilość osób 6)\nWyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni 1: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie sypialni 2: TV, łóżko 180x200, komplet pościeli, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: stolik, kanapa, dwa fotele, dwa leżaki\nWyposażenie tarasu górnego na dachu: dwa leżaki, stolik\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['dwa leżaki', 'stolik']
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B401/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B401/hero_1.webp"),
                getAssetPath("/images/stranda/B401/new_1.webp"),
                getAssetPath("/images/stranda/B401/new_2.webp"),
                getAssetPath("/images/stranda/B401/new_3.webp"),
                getAssetPath("/images/stranda/B401/new_4.webp"),
                getAssetPath("/images/stranda/B401/new_5.webp"),
                getAssetPath("/images/stranda/B401/new_6.webp"),
                getAssetPath("/images/stranda/B401/new_7.webp"),
                getAssetPath("/images/stranda/B401/new_8.webp")
            ]
        },
        idoBookingId: '23',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/23/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C301': {
        id: 'C301',
        title: `Apartament C301 Suite 2+2`,
        building: 'C',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartament C301 Suite znajduje się na drugim piętrze budynku C, posiada przestronny salon z aneksem kuchennym i sofę, dwie sypialnie, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda\nC301 z dwoma sypialniami (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa, stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni 1: łóżko 180x200, klimatyzacja, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie sypialni 2: łóżko piętrowe, komplet pościeli, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu: stolik, kanapa, dwa fotele\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C301/wow.webp"),
            images: [
                getAssetPath("/images/stranda/C301/wow.webp"),
                getAssetPath("/images/stranda/C301/wow.webp"),
                getAssetPath("/images/stranda/C301/C301_2.webp"),
                getAssetPath("/images/stranda/C301/C301_13.webp"),
                getAssetPath("/images/stranda/C301/5S5A0481_03561157299.webp"),
                getAssetPath("/images/stranda/C301/5S5A0495_04081663216.webp"),
                getAssetPath("/images/stranda/C301/5S5A2482_004309228.webp"),
                getAssetPath("/images/stranda/C301/5S5A2486_004319307.webp"),
                getAssetPath("/images/stranda/C301/5S5A0500_04122065207.webp"),
                getAssetPath("/images/stranda/C301/C301_12.webp"),
                getAssetPath("/images/stranda/C301/Salon1a.webp"),
                getAssetPath("/images/stranda/C301/C301_3.webp"),
                getAssetPath("/images/stranda/C301/C301_8.webp"),
                getAssetPath("/images/stranda/C301/C301_4.webp"),
                getAssetPath("/images/stranda/C301/C301_15.webp"),
                getAssetPath("/images/stranda/C301/Sypialnia2a.webp"),
                getAssetPath("/images/stranda/C301/5S5A2481_004259144.webp"),
                getAssetPath("/images/stranda/C301/C301_14.webp"),
                getAssetPath("/images/stranda/C301/C301_5.webp"),
                getAssetPath("/images/stranda/C301/Sypialnia2.webp"),
                getAssetPath("/images/stranda/C301/5S5A0502_04132765753.webp"),
                getAssetPath("/images/stranda/C301/C301_9.webp"),
                getAssetPath("/images/stranda/C301/Salon1d.webp"),
                getAssetPath("/images/stranda/C301/5S5A0498_04102064223.webp"),
                getAssetPath("/images/stranda/C301/C301_6.webp"),
                getAssetPath("/images/stranda/C301/Sypialnia1.webp"),
                getAssetPath("/images/stranda/C301/C301_7.webp"),
                getAssetPath("/images/stranda/C301/Kuchnia1.webp"),
                getAssetPath("/images/stranda/C301/5S5A0486_04001359274.webp"),
                getAssetPath("/images/stranda/C301/C301_11.webp"),
                getAssetPath("/images/stranda/C301/C301_1.webp"),
                getAssetPath("/images/stranda/C301/Salon1c.webp"),
                getAssetPath("/images/stranda/C301/C301_10.webp")
            ]
        },
        idoBookingId: '40',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/40/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B202': {
        id: 'B202',
        title: `Apartament B202 Suite 2+2 z Sauną i Jacuzzi`,
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartament B202 Suite leży na pierwszym piętrze budynku B, posiada salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem, saunę i duży zadaszony taras z jacuzzi i widokiem na zatokę Tracz\nB202 Suite z dwoma sypialniami (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni 1: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie sypialni 2: rozkladana kanapa 2os., komplet pościeli, klimatyzacja\nWyposażenie łazienki: sauna, prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu: jacuzzi, stolik, kanapa, dwa fotele, dwa rozkładane fotele\nPozostałe: internet, wifi, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['sauna', 'prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/B202/5S5A0454_03371948074.webp"),
            images: [
                getAssetPath("/images/stranda/B202/5S5A0454_03371948074.webp"),
                getAssetPath("/images/stranda/B202/5S5A0455_03380248427.webp"),
                getAssetPath("/images/stranda/B202/5S5A0456_03391949056.webp"),
                getAssetPath("/images/stranda/B202/5S5A0457_03400349410.webp"),
                getAssetPath("/images/stranda/B202/5S5A0460_03432151021.webp"),
                getAssetPath("/images/stranda/B202/5S5A0461_03440551385.webp"),
                getAssetPath("/images/stranda/B202/5S5A0462_03452152003.webp"),
                getAssetPath("/images/stranda/B202/5S5A0464_03472252986.webp"),
                getAssetPath("/images/stranda/B202/5S5A0465_03480753351.webp"),
                getAssetPath("/images/stranda/B202/5S5A0469_03500554318.webp"),
                getAssetPath("/images/stranda/B202/5S5A0471_03512454958.webp"),
                getAssetPath("/images/stranda/B202/5S5A0474_03520755308.webp"),
                getAssetPath("/images/stranda/B202/B202_1.webp"),
                getAssetPath("/images/stranda/B202/B202_10.webp"),
                getAssetPath("/images/stranda/B202/B202_11.webp"),
                getAssetPath("/images/stranda/B202/B202_12.webp"),
                getAssetPath("/images/stranda/B202/B202_13.webp"),
                getAssetPath("/images/stranda/B202/B202_14.webp"),
                getAssetPath("/images/stranda/B202/B202_15.webp"),
                getAssetPath("/images/stranda/B202/B202_16.webp"),
                getAssetPath("/images/stranda/B202/B202_2.webp"),
                getAssetPath("/images/stranda/B202/B202_3.webp"),
                getAssetPath("/images/stranda/B202/B202_4.webp"),
                getAssetPath("/images/stranda/B202/B202_5.webp"),
                getAssetPath("/images/stranda/B202/B202_6.webp"),
                getAssetPath("/images/stranda/B202/B202_7.webp"),
                getAssetPath("/images/stranda/B202/B202_8.webp"),
                getAssetPath("/images/stranda/B202/B202_9.webp")
            ]
        },
        idoBookingId: '38',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/38/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B402': {
        id: 'B402',
        title: `Apartament B402 Suite 2+2 z Jacuzzi`,
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartament B402 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz.\nJacuzzi jest czynne przez cały rok.\nB402 Suite z jedną sypialnią (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: stolik, kanapa, dwa fotele, dwa leżaki\nWyposażenie tarasu górnego na dachu: dwa leżaki, stolik\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['dwa leżaki', 'stolik']
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B402/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B402/hero_1.webp"),
                getAssetPath("/images/stranda/B402/new_1.webp"),
                getAssetPath("/images/stranda/B402/new_2.webp"),
                getAssetPath("/images/stranda/B402/new_3.webp"),
                getAssetPath("/images/stranda/B402/new_4.webp")
            ]
        },
        idoBookingId: '24',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/24/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'A302': {
        id: 'A302',
        title: `Apartament A302 Suite 2+2`,
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartament A302 Suite leży na piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA302 Suite z jedną sypialnią (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, lodówka, zmywarka, chłodziarka do wina, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu: stolik, kanapa, dwa fotele, leżak\nPozostałe: internet, wifi, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'lodówka', 'zmywarka', 'chłodziarka do wina', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/ido_42_1.jpg"),
            images: [
                getAssetPath("/images/stranda/ido_42_1.jpg"),
                getAssetPath("/images/stranda/ido_42_2.jpg"),
                getAssetPath("/images/stranda/ido_42_3.jpg"),
                getAssetPath("/images/stranda/ido_42_4.jpg"),
                getAssetPath("/images/stranda/ido_42_5.jpg"),
                getAssetPath("/images/stranda/ido_42_6.jpg"),
                getAssetPath("/images/stranda/ido_42_7.jpg"),
                getAssetPath("/images/stranda/ido_42_8.jpg"),
                getAssetPath("/images/stranda/ido_42_9.jpg"),
                getAssetPath("/images/stranda/ido_42_10.jpg"),
                getAssetPath("/images/stranda/ido_42_11.jpg"),
                getAssetPath("/images/stranda/ido_42_12.jpg"),
                getAssetPath("/images/stranda/ido_42_13.jpg"),
                getAssetPath("/images/stranda/ido_42_14.jpg"),
                getAssetPath("/images/stranda/ido_42_15.jpg")
            ]
        },
        idoBookingId: '42',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/42/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C404': {
        id: 'C404',
        title: `Apartament C404 Studio z Jacuzzi`,
        building: 'C',
        type: 'jacuzzi',
        price: 300,
        guests: '4',
        description: `Apartament C404 typu Studio leży na najwyższym 3 piętrze budynku C, posiada wydzielone miejscem sypialniane z jednym łóżkiem podwójnym, salon z rozkładaną sofą, aneks kuchennym oraz łazienkę z prysznicem. Apartament posiada także taras dolny z meblami oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i zatokę Tracz\nJacuzzi jest czynne przez cały rok.\nC404 Studio przeznaczone jest dla maksymalnie 4 osób Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, lodówka, zmywarka, piekarnik, pralka, komplet naczyń i sztućców\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: fotel, stolik\nWyposażenie tarasu górnego na dachu: komplet mebli ogodowych, stolik, prywatne jacuzzi czynne przez cały rok\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'zmywarka', 'piekarnik', 'pralka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['komplet mebli ogodowych', 'stolik', 'prywatne jacuzzi czynne przez cały rok']
        },
        gallery: {
            "heroImage": getAssetPath("/images/stranda/C404/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/C404/hero_1.webp"),
                getAssetPath("/images/stranda/C404/new_1.webp"),
                getAssetPath("/images/stranda/C404/new_2.webp"),
                getAssetPath("/images/stranda/C404/new_3.webp")
            ]
        },
        idoBookingId: '41',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/41/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B103': {
        id: 'B103',
        title: `Apartament B103 Delux 2+2 z Jacuzzi`,
        building: 'B',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+1',
        description: `Apartament B103 Delux z prywatnym jacuzzi na tarasie położony jest na parterze budynku B. Składa się z przestronnego salonu z aneksem kuchennym i sofą, sypialni z jednym łóżkiem podwójnym, łazienki z prysznicem, tarasu gdzie znajduje się prywatne jacuzzi. Całość z pięknym widokiem na jezioro Kisajno, zatokę Tracz i port Stranda.

Nasze apartamenty ulokowane są w Giżycku, przy porcie Stranda w apartamentowcach Stranda Residence A,B i C, nad brzegiem jeziora Kisajno i zatoki Tracz. Z tarasu rozpościera się piękny widok na panoramę jezioro Kisajno i szlak żeglowny Wielkich Jezior Mazurskich. Apartament Delux jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z zasobów portu takich jak: tawerna, koncerty w sezonie letnim, marina, wypożyczalnia sprzętu wodnego, itp.

Bliskość do centrum Giżycka umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym, historycznym i rozrywkowym. Do większości miejsc wartych odwiedzenia i poznania jest około 15-35 minut drogi samochodem.`,
        amenities: {
            "living": [
                "TV",
                "sofa 2os.",
                "stół",
                "krzesła",
                "klimatyzacja",
                "wifi"
            ],
            "kitchen": [
                "płyta indukcyjna",
                "lodówka",
                "zmywarka",
                "mikrofalówka",
                "komplet naczyń i sztućców"
            ],
            "bedroom": [
                "TV",
                "łóżko 180x200",
                "komplet pościeli",
                "suszarka na ubrania",
                "deska do prasowania",
                "żelazko",
                "klimatyzacja"
            ],
            "bathroom": [
                "prysznic",
                "suszarka do włosów",
                "szlafroki",
                "balsam do ciała"
            ],
            "terrace": [
                "komplet mebli wypoczynkowych",
                "leżak",
                "stolik",
                "prywatne jacuzzi"
            ]
        },
        additionalInfo: ['Widok na jezioro'],
        idoBookingId: '19',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/19/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B103/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B103/hero_1.webp"),
                getAssetPath("/images/stranda/B103/new_1.webp")
            ]
        }
    },

    'B106': {
        id: 'B106',
        title: `Apartament B106 Suite 4+2`,
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartament B106 Suite leży na parterze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem i duży taras z widokiem na port Stranda, zatokę Tracz oraz jezioro Kisajno\nB106 Suite z dwoma sypialniami (maksymalna ilość osób 6) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców\nWyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie sypialni 1: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie sypialni 2: TV, łóżko 180x200, komplet pościeli, klimatyzacja\nWyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: stolik, kanapa, dwa fotele, dwa leżaki\nPozostałe: internet, wifi, komplet pościeli i ręczników, kosmetyki w łazience, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/ido_22_1.jpg"),
            images: [
                getAssetPath("/images/stranda/ido_22_1.jpg"),
                getAssetPath("/images/stranda/ido_22_2.jpg"),
                getAssetPath("/images/stranda/ido_22_3.jpg"),
                getAssetPath("/images/stranda/ido_22_4.jpg"),
                getAssetPath("/images/stranda/ido_22_5.jpg"),
                getAssetPath("/images/stranda/ido_22_6.jpg"),
                getAssetPath("/images/stranda/ido_22_7.jpg"),
                getAssetPath("/images/stranda/ido_22_8.jpg"),
                getAssetPath("/images/stranda/ido_22_9.jpg"),
                getAssetPath("/images/stranda/ido_22_10.jpg"),
                getAssetPath("/images/stranda/ido_22_11.jpg")
            ]
        },
        idoBookingId: '22',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/22/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'c-studio': {
        id: 'c-studio',
        title: 'Giżycko Stranda - Apartament typu Studio - C Studio',
        shortTitle: 'Apartament typu Studio',
        building: 'C',
        type: 'studio',
        price: 300,
        guests: '4',
        description: `Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób Wyposażenie kuchni: płyta indukcyjna, lodówka, komplet naczyń i sztućców, ekspres kapsułkowy do kawy Tchibo\nWyposażenie: TV, sofa 2os., stół, krzesła, klimatyzacja, łóżko 180x200, komplet pościeli, deska do prasowania, żelazko\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic\nWyposażenie tarasu: dwa krzesła, stolik\nPozostałe: komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres kapsułkowy do kawy Tchibo'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C_Studio/5S5A0547_04453781500.webp"),
            images: [
                getAssetPath("/images/stranda/C_Studio/5S5A0547_04453781500.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A0549_04473882485.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A0550_04483582949.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A0553_04503583932.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A0554_04513984453.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2313-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2338-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2339-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2343-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2344-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2354-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2356-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2359-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2363-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2364-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2366-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2367-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2371-standard.webp"),
                getAssetPath("/images/stranda/C_Studio/5S5A2372-standard.webp")
            ]
        },
        idoBookingId: '32',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/32/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'c-z-dwoma-sypialniami': {
        id: 'c-z-dwoma-sypialniami',
        title: 'Giżycko Stranda - Apartament z 2 sypialniami - C z 2 sypialniami',
        shortTitle: 'Apartament z 2 sypialniami',
        building: 'C',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        description: `Apartamenty z 2 sypialniami znajdują się w budynku C, są to miejsce noclegowe z dwoma sypialniami, w każdej łóżko podwójne, salonem z aneksem kuchennym z rokładaną sofą dla 2 osoób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 6 osób Wyposażenie kuchni: płyta indukcyjna, lodówka, komplet naczyń i sztućców, ekspres kapsułkowy do kawy Tchibo\nWyposażenie: TV, sofa 2os., stół, krzesła, klimatyzacja, łóżko 180x200, komplet pościeli, deska do prasowania, żelazko\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic\nWyposażenie tarasu: dwa krzesła, stolik\nPozostałe: komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres kapsułkowy do kawy Tchibo'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/ido_43_1.jpg"),
            images: [
                getAssetPath("/images/stranda/ido_43_1.jpg"),
                getAssetPath("/images/stranda/ido_43_2.jpg"),
                getAssetPath("/images/stranda/ido_43_3.jpg"),
                getAssetPath("/images/stranda/ido_43_4.jpg"),
                getAssetPath("/images/stranda/ido_43_5.jpg"),
                getAssetPath("/images/stranda/ido_43_6.jpg"),
                getAssetPath("/images/stranda/ido_43_7.jpg"),
                getAssetPath("/images/stranda/ido_43_8.jpg"),
                getAssetPath("/images/stranda/ido_43_9.jpg"),
                getAssetPath("/images/stranda/ido_43_10.jpg"),
                getAssetPath("/images/stranda/ido_43_11.jpg"),
                getAssetPath("/images/stranda/ido_43_12.jpg"),
                getAssetPath("/images/stranda/ido_43_13.jpg"),
                getAssetPath("/images/stranda/ido_43_14.jpg")
            ]
        },
        idoBookingId: '43',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/43/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'c-z-jedna-sypialnia': {
        id: 'c-z-jedna-sypialnia',
        title: 'Giżycko Stranda - Apartament z 1 sypialnią - C z jedną sypialnią',
        shortTitle: 'Apartament z 1 sypialnią',
        building: 'C',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartamenty z 1 sypialnią znajdują się w budynku C, w sypialni łóżko podwójne, salon z aneksem kuchennym z rokładaną sofą dla 2 osoób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób Wyposażenie kuchni: płyta indukcyjna, lodówka, komplet naczyń i sztućców, ekspres kapsułkowy do kawy Tchibo\nWyposażenie: TV, sofa 2os., stół, krzesła, klimatyzacja, łóżko 180x200, komplet pościeli, deska do prasowania, żelazko\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic\nWyposażenie tarasu: dwa krzesła, stolik, leżaki\nPozostałe: komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres kapsułkowy do kawy Tchibo'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik', 'leżaki']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/ido_44_1.jpg"),
            images: [
                getAssetPath("/images/stranda/ido_44_1.jpg"),
                getAssetPath("/images/stranda/ido_44_2.jpg"),
                getAssetPath("/images/stranda/ido_44_3.jpg"),
                getAssetPath("/images/stranda/ido_44_4.jpg"),
                getAssetPath("/images/stranda/ido_44_5.jpg"),
                getAssetPath("/images/stranda/ido_44_6.jpg"),
                getAssetPath("/images/stranda/ido_44_7.jpg"),
                getAssetPath("/images/stranda/ido_44_8.jpg"),
                getAssetPath("/images/stranda/ido_44_9.jpg"),
                getAssetPath("/images/stranda/ido_44_10.jpg"),
                getAssetPath("/images/stranda/ido_44_11.jpg"),
                getAssetPath("/images/stranda/ido_44_12.jpg"),
                getAssetPath("/images/stranda/ido_44_13.jpg"),
                getAssetPath("/images/stranda/ido_44_14.jpg"),
                getAssetPath("/images/stranda/ido_44_15.jpg"),
                getAssetPath("/images/stranda/ido_44_16.jpg")
            ]
        },
        idoBookingId: '44',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/44/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C402': {
        id: 'C402',
        title: `Apartament C402 Studio z Jacuzzi`,
        building: 'C',
        type: 'jacuzzi',
        price: 300,
        guests: '4',
        description: `Apartament C402 typu Studio leży na najwyższym 3 piętrze budynku C, posiada wydzielone miejscem sypialniane z jednym łóżkiem podwójnym, salon z rozkładaną sofą, aneks kuchennym oraz łazienkę z prysznicem. Apartament posiada także taras dolny z meblami oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i zatokę Tracz\nJacuzzi jest czynne przez cały rok.\nC404 Studio przeznaczone jest dla maksymalnie 4 osób Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, lodówka, zmywarka, piekarnik, pralka, komplet naczyń i sztućców\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko\nWyposażenie łazienki: prysznic, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała Wyposażenie tarasu dolnego: fotel, stolik\nWyposażenie tarasu górnego na dachu: komplet mebli ogodowych, stolik, prywatne jacuzzi czynne przez cały rok\nPozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: [],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'zmywarka', 'piekarnik', 'pralka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['komplet mebli ogodowych', 'stolik', 'prywatne jacuzzi czynne przez cały rok']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C402/P1001052.webp"),
            images: [
                getAssetPath("/images/stranda/C402/P1001052.webp"),
                getAssetPath("/images/stranda/C402/P1001054.webp"),
                getAssetPath("/images/stranda/C402/P1001055.webp"),
                getAssetPath("/images/stranda/C402/P1001057.webp"),
                getAssetPath("/images/stranda/C402/P1001058.webp"),
                getAssetPath("/images/stranda/C402/P1001060.webp"),
                getAssetPath("/images/stranda/C402/P1014574.webp"),
                getAssetPath("/images/stranda/C402/P1014576.webp"),
                getAssetPath("/images/stranda/C402/P1014577.webp"),
                getAssetPath("/images/stranda/C402/P1014578.webp"),
                getAssetPath("/images/stranda/C402/P1014579.webp"),
                getAssetPath("/images/stranda/C402/P1014580.webp"),
                getAssetPath("/images/stranda/C402/P1014582.webp"),
                getAssetPath("/images/stranda/C402/P1014583.webp"),
                getAssetPath("/images/stranda/C402/P1014584.webp"),
                getAssetPath("/images/stranda/C402/P1014585.webp"),
                getAssetPath("/images/stranda/C402/P1014586.webp"),
                getAssetPath("/images/stranda/C402/P1014587.webp"),
                getAssetPath("/images/stranda/C402/P1014588.webp"),
                getAssetPath("/images/stranda/C402/P1014589.webp")
            ]
        },
        idoBookingId: '46',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/46/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B304': {
        id: 'B304',
        title: `Apartament B304 Suite 2+2`,
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        description: `Apartament B304 Suite leży na 2 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofą, sypialnię, łazienkę z prysznicem i taras.
B304 Suite z jedną sypialnią (maksymalna ilość osób 4) Wyposażenie kuchni: ekspres do kawy, płyta indukcyjna, mikrofalówka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców
Wyposażenie salonu: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja
Wyposażenie sypialni: TV, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja
Wyposażenie łazienki: prysznic, pralka, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała
Wyposażenie tarasu: stolik, kanapa, dwa fotele, dwa leżaki
Pozostałe: internet, wifi, komplet pościeli i ręczników, zestaw startowy (woda, kawa, herbata).`,
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['stolik', 'kanapa', 'dwa fotele', 'dwa leżaki']
        },
        idoBookingId: '44',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B304/hero_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B304/hero_1.webp"),
                getAssetPath("/images/stranda/B304/new_1.webp"),
                getAssetPath("/images/stranda/B304/new_2.webp"),
                getAssetPath("/images/stranda/B304/new_3.webp")
            ]
        },
        
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/24/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },


};
