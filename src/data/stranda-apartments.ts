import { getAssetPath } from '@/utils/assetPath';
import { Apartment } from '@/types/apartment';

export const strandaApartments: Record<string, Apartment> = {

    'A204': {
        id: 'A204',
        title: "Z jedną sypialnią (A204)",
        shortTitle: "Z jedną sypialnią (A204)",
        description: "Apartament A204 Suite leży na pierwszym piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym, rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA204 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',


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
        title: "Z jacuzzi na tarasie (A105)",
        shortTitle: "Z jacuzzi na tarasie (A105)",
        description: "Apartament A105 Suite leży na parterze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras z prywatnym jacuzzi z widokiem na jezioro Kisajno.\nJacuzzi jest czynne przez cały rok.\nA105 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+2',


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
        title: "Z jedną sypialnią (A103)",
        shortTitle: "Z jedną sypialnią (A103)",
        description: "Apartament A103 Suite leży na parterze budynku, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA103 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',


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
        title: "Z jedną sypialnią (A205)",
        shortTitle: "Z jedną sypialnią (A205)",
        description: "Apartament A205 Suite leży na pierwszym piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym, rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA205 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',


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
        title: "Z jedną sypialnią i jacuzzi (A104)",
        shortTitle: "Z jedną sypialnią i jacuzzi (A104)",
        description: "Apartament A104 Suite leży na parterze budynku A, posiada duży i przestronny salon z aneksem kuchennym i sofą, sypialnię, łazienkę z prysznicem i taras z prywatnym jacuzzi z widokiem na jezioro Kisajno.\nA104 Suite z jedną sypialnią (maksymalna ilość osób 3)",
        building: 'A',
        type: 'oneBedroomJacuzzi',
        price: 450,
        guests: '2+1',


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
        title: "Z dwoma sypialniami(A306)",
        shortTitle: "Z dwoma sypialniami(A306)",
        description: "Apartament A306 Suite leży na drugim piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem i duży taras z widokiem na jezioro Kisajno\nA306 Suite z dwoma sypialniami (maksymalna ilość osób 6)",
        building: 'A',
        type: 'twoBedrooms',
        price: 500,
        guests: '4+2',


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
        title: "Z jedną sypialnią (A305)",
        shortTitle: "Z jedną sypialnią (A305)",
        description: "Apartament A305 Suite leży na piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA305 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '2+2',


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
        title: "Z jacuzzi na tarasie (B102)",
        shortTitle: "Z jacuzzi na tarasie (B102)",
        description: "Apartament B102 Suite leży na parterze budynku A, posiada duży i przestronny salon z aneksem kuchennym i sofą, sypialnię, łazienkę z prysznicem i taras z prywatnym jacuzzi z widokiem na zatokę Tracz i Port Stranda.\nJacuzzi jest czynne cały rok.\nB102 Suite z jedną sypialnią (maksymalna ilość osób 3)",
        building: 'B',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+1',


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
        title: "Z 1 sypialnią i jacuzzi na dachu (A403)",
        shortTitle: "Z 1 sypialnią i jacuzzi na dachu (A403)",
        description: "Apartament A403 Suite leży na najwyższym 3 piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na jezioro Kisajno.\nJacuzzi jest czynne przez cały rok.\nA403 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
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
        idoBookingId: '17',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/17/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B404': {
        id: 'B404',
        title: "Z 1 sypialnią i jacuzzi na dachu  (B404)",
        shortTitle: "Z 1 sypialnią i jacuzzi na dachu  (B404)",
        description: "Apartament B404 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz\nB404 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
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
        title: "C304 Studio",
        shortTitle: "C304 Studio",
        description: "Apartament C304 Studio znajduje się na drugim piętrze budynku C, posiada miejsce noclegowe z łóżkiem podwójnym, rozkładaną sofę 2os., salon z aneksem kuchennym, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda.\nC304 Studio (maksymalna ilość osób 4)\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja, łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko, klimatyzacja",
        building: 'C',
        type: 'studio',
        price: 300,
        guests: '4',
        amenities: {
            living: [],
            kitchen: ['płyta indukcyjna', 'mikrofalówka', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['dwa fotele', 'stolik', 'leżak']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C304/2026_sync/0T1A8815.JPG"),
            images: [
                getAssetPath("/images/stranda/C304/2026_sync/0T1A8815.JPG"),
                getAssetPath("/images/stranda/C304/2026_sync/0T1A8819.JPG"),
                getAssetPath("/images/stranda/C304/2026_sync/0T1A8821.JPG"),
                getAssetPath("/images/stranda/C304/2026_sync/0T1A8824.JPG"),
                getAssetPath("/images/stranda/C304/2026_sync/0T1A8828.JPG")
            ]
        },
        idoBookingId: '30',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/30/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B201': {
        id: 'B201',
        title: "Z dwoma sypialniami i jacuzzi (B201)",
        shortTitle: "Z dwoma sypialniami i jacuzzi (B201)",
        description: "Apartament B201 Suite położony jest na pierwszym piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym, dwie sypialnie, dwie łazienki, jedna z prysznicem, druga z wanną, duży taras z widokiem na zatokę Tracz i jezioro Kisajno na którym znajduje się prywatne jacuzzi czynne cały rok.\nB201 Suite z dwoma sypialniami (maksymalna ilość osób 4)\nWyposażenie łazienki 1: prysznic, suszarka do włosów, ręczniki, żel pod prysznic, mydło, balsam do ciała\nWyposażenie łazienki 2: wanna/prysznic, ręczniki, żel pod prysznic, mydło, balsam do ciała",
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'piekarnik', 'mikrofala', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'ręczniki', 'suszarka do włosów', 'zestaw kosmetyków'],
            terrace: ['stolik', 'kanapa', 'dwa fotele', 'jacuzzi']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/B201/2026_sync/5S5A0445_03295944488.JPG"),
            images: [
                getAssetPath("/images/stranda/B201/2026_sync/5S5A0445_03295944488.JPG"),
                getAssetPath("/images/stranda/B201/2026_sync/5S5A0446_03311645113.JPG"),
                getAssetPath("/images/stranda/B201/2026_sync/5S5A0447_03320045474.JPG"),
                getAssetPath("/images/stranda/B201/2026_sync/5S5A0448_03331746097.JPG"),
                getAssetPath("/images/stranda/B201/2026_sync/IMG_6625.jpg")
            ]
        },
        idoBookingId: '39',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/39/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B401': {
        id: 'B401',
        title: "Z 2 sypialniami i jacuzzi na dachu (B401)",
        shortTitle: "Z 2 sypialniami i jacuzzi na dachu (B401)",
        description: "Apartament B401 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, 2 sypialnie, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz\nJacuzzi jest czynne cały rok\nB401 Suite z dwoma sypialniami (maksymalna ilość osób 6)",
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
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
        title: "Z dwoma sypialniami (C301)",
        shortTitle: "Z dwoma sypialniami (C301)",
        description: "Apartament C301 Suite znajduje się na drugim piętrze budynku C, posiada przestronny salon z aneksem kuchennym i sofę, dwie sypialnie, łazienkę z prysznicem i taras z widokiem na zatokę Tracz i port Stranda\nC301 z dwoma sypialniami (maksymalna ilość osób 4)",
        building: 'C',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C301/2026_sync/5S5A0481_03561157299.JPG"),
            images: [
                getAssetPath("/images/stranda/C301/2026_sync/5S5A0481_03561157299.JPG"),
                getAssetPath("/images/stranda/C301/2026_sync/5S5A0486_04001359274.JPG")
            ]
        },
        idoBookingId: '40',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/40/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B202': {
        id: 'B202',
        title: "Z 2 sypialniami jacuzzi i sauną (B202)",
        shortTitle: "Z 2 sypialniami jacuzzi i sauną (B202)",
        description: "Apartament B202 Suite leży na pierwszym piętrze budynku B, posiada salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem, saunę i duży zadaszony taras z jacuzzi i widokiem na zatokę Tracz\nB202 Suite z dwoma sypialniami (maksymalna ilość osób 4)",
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['sauna', 'prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/B202/2026_sync/5S5A0455_03380248427.JPG"),
            images: [
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0455_03380248427.JPG"),
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0456_03391949056.JPG"),
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0460_03432151021.JPG"),
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0461_03440551385.JPG"),
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0464_03472252986.JPG"),
                getAssetPath("/images/stranda/B202/2026_sync/5S5A0469_03500554318.JPG")
            ]
        },
        idoBookingId: '38',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/38/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B402': {
        id: 'B402',
        title: "Z 1 sypialnią i jacuzzi na dachu (B402)",
        shortTitle: "Z 1 sypialnią i jacuzzi na dachu (B402)",
        description: "Apartament B402 Suite leży na najwyższym 3 piętrze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i taras dolny oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i Zatokę Tracz.\nJacuzzi jest czynne przez cały rok.\nB402 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
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
        title: "Z jedną sypialnią (A302)",
        shortTitle: "Z jedną sypialnią (A302)",
        description: "Apartament A302 Suite leży na piętrze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, sypialnię, łazienkę z prysznicem i zadaszony taras z widokiem na jezioro Kisajno..\nA302 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'A',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'lodówka', 'zmywarka', 'chłodziarka do wina', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/B402/2026_sync/B402 balkon.jpg"),
            images: [
                getAssetPath("/images/stranda/B402/2026_sync/B402 balkon.jpg"),
                getAssetPath("/images/stranda/B402/2026_sync/B402 balkon1.jpg"),
                getAssetPath("/images/stranda/B402/2026_sync/P1001074.jpg"),
                getAssetPath("/images/stranda/B402/2026_sync/P1014603.jpg"),
                getAssetPath("/images/stranda/B402/2026_sync/P1014604.jpg")
            ]
        },
        idoBookingId: '42',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/42/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C404': {
        id: 'C404',
        title: "Studio z jacuzzi na dachu (C404)",
        shortTitle: "Studio z jacuzzi na dachu (C404)",
        description: "Apartament C404 typu Studio leży na najwyższym 3 piętrze budynku C, posiada wydzielone miejscem sypialniane z jednym łóżkiem podwójnym, salon z rozkładaną sofą, aneks kuchennym oraz łazienkę z prysznicem. Apartament posiada także taras dolny z meblami oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i zatokę Tracz\nJacuzzi jest czynne przez cały rok.\nC404 Studio przeznaczone jest dla maksymalnie 4 osób\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko",
        building: 'C',
        type: 'jacuzzi',
        price: 300,
        guests: '4',
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
        title: "Z jacuzzi na tarasie (B103)",
        shortTitle: "Z jacuzzi na tarasie (B103)",
        description: "Apartament B103 Suite leży na parterze budynku A, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofą, sypialnię, łazienkę z prysznicem i taras z prywatnym jacuzzi z widokiem na zatokę Tracz i Port Stranda.\nJacuzzi jest czynne cały rok.\nB103 Suite z jedną sypialnią (maksymalna ilość osób 4)",
        building: 'B',
        type: 'jacuzziTerrace',
        price: 450,
        guests: '2+1',


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
        title: "B106 z dwoma sypialniami",
        shortTitle: "B106 z dwoma sypialniami",
        description: "Apartament B106 Suite leży na parterze budynku B, posiada duży i przestronny salon z aneksem kuchennym i rozkładaną sofę, dwie sypialnie, łazienkę z prysznicem i duży taras z widokiem na port Stranda, zatokę Tracz oraz jezioro Kisajno\nB106 Suite z dwoma sypialniami (maksymalna ilość osób 6)",
        building: 'B',
        type: 'twoBedrooms',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: []
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C404/2026_sync/5S5A0505_04162167171.JPG"),
            images: [
                getAssetPath("/images/stranda/C404/2026_sync/5S5A0505_04162167171.JPG"),
                getAssetPath("/images/stranda/C404/2026_sync/5S5A0509_04202269139.JPG"),
                getAssetPath("/images/stranda/C404/2026_sync/5S5A0511_04222370123.JPG"),
                getAssetPath("/images/stranda/C404/2026_sync/5S5A0512_04233170679.JPG")
            ]
        },
        idoBookingId: '22',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/22/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'C402': {
        id: 'C402',
        title: "Studio z jacuzzi na dachu (C402)",
        shortTitle: "Studio z jacuzzi na dachu (C402)",
        description: "Apartament C402 typu Studio leży na najwyższym 3 piętrze budynku C, posiada wydzielone miejscem sypialniane z jednym łóżkiem podwójnym, salon z rozkładaną sofą, aneks kuchennym oraz łazienkę z prysznicem. Apartament posiada także taras dolny z meblami oraz taras na dachu z prywatnym jacuzzi z widokiem na port Stranda i zatokę Tracz\nJacuzzi jest czynne przez cały rok.\nC404 Studio przeznaczone jest dla maksymalnie 4 osób\nWyposażenie: TV, sofa 2os., stół, krzesła, odkurzacz, klimatyzacja\nWyposażenie: łóżko 180x200, komplet pościeli, suszarka na ubrania, deska do prasowania, żelazko",
        building: 'C',
        type: 'jacuzzi',
        price: 300,
        guests: '4',
        amenities: {
            living: [],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'lodówka', 'zmywarka', 'piekarnik', 'pralka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko małżeńskie', 'komplet pościeli', 'szafa', 'suszarka na ubrania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała Wyposażenie tarasu dolnego'],
            terrace: ['komplet mebli ogodowych', 'stolik', 'prywatne jacuzzi czynne przez cały rok']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/C402/2026_sync/P1001052.jpg"),
            images: [
                getAssetPath("/images/stranda/C402/2026_sync/P1001052.jpg"),
                getAssetPath("/images/stranda/C402/2026_sync/P1014578.jpg"),
                getAssetPath("/images/stranda/C402/2026_sync/P1014584.jpg"),
                getAssetPath("/images/stranda/C402/2026_sync/P1014585.jpg"),
                getAssetPath("/images/stranda/C402/2026_sync/P1014588.jpg")
            ]
        },
        idoBookingId: '46',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/46/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'B304': {
        id: 'B304',
        title: "B304",
        shortTitle: "B304",
        description: "Apartamenty z 1 sypialnią znajdują się w budynku C, w sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób.",
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',

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
                getAssetPath("/images/stranda/B304/new_3.webp"),
                getAssetPath("/images/stranda/B304/new_4.webp"),
                getAssetPath("/images/stranda/B304/new_5.webp"),
                getAssetPath("/images/stranda/B304/new_6.webp"),
                getAssetPath("/images/stranda/B304/new_7.webp"),
                getAssetPath("/images/stranda/B304/new_8.webp"),
                getAssetPath("/images/stranda/B304/new_9.webp"),
                getAssetPath("/images/stranda/B304/new_10.webp"),
                getAssetPath("/images/stranda/B304/new_11.webp"),
                getAssetPath("/images/stranda/B304/new_12.webp"),
                getAssetPath("/images/stranda/B304/new_13.webp"),
                getAssetPath("/images/stranda/B304/new_14.webp"),
                getAssetPath("/images/stranda/B304/new_15.webp"),
                getAssetPath("/images/stranda/B304/new_16.webp"),
                getAssetPath("/images/stranda/B304/new_17.webp"),
                getAssetPath("/images/stranda/B304/new_18.webp"),
                getAssetPath("/images/stranda/B304/new_19.webp")
            ]
        },
        
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/44/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },
    'B305': {
        id: 'B305',
        title: "B305",
        shortTitle: "B305",
        description: "Apartamenty z 1 sypialnią znajdują się w budynku C, w sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób.",
        building: 'B',
        type: 'oneBedroom',
        price: 300,
        guests: '4',

        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'mikrofalówka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 180x200', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko', 'klimatyzacja'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['stolik', 'kanapa', 'dwa fotele', 'dwa leżaki']
        },
        idoBookingId: '44',
        gallery: {
            "heroImage": getAssetPath("/images/stranda/B305/nowe_2026/P1001104_1.webp"),
            "images": [
                getAssetPath("/images/stranda/B305/nowe_2026/P1001104_1.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1001105_2.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1001108_3.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014662_4.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014667_5.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014670_6.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014672_7.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014673_8.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014675_9.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014677_10.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014678_11.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014679_12.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014680_13.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014681_14.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_balkon_15.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_balkon1_16.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_jadalnia_17.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_kuchnia_18.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_salon_19.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_salon1_20.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_sypialnia_21.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305_sypialnia1_22.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305__azienka_23.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/B305__azienka1_24.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1001104_Poprawione_25.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1001107_26.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014663_27.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1001106_28.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014668_29.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014660_30.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014665_31.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014666_32.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014669_33.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014671_34.webp"),
                getAssetPath("/images/stranda/B305/nowe_2026/P1014676_35.webp")
            ]
        },
        
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/44/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },



    'Studio': {
        id: 'Studio',
        title: "Apartament C Studio",
        shortTitle: "Apartament C Studio",
        description: "Apartamenty typu Studio znajdują się w budynku C, są to miejsce noclegowe z jednym łóżkiem podwójnym, rozkładaną sofą dla 2 osób, salonem z aneksem kuchennym, łazienką z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób.",
        building: 'C',
        type: 'studio',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'klimatyzacja'],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres do kawy'],
            bedroom: ['łóżko 180x200', 'komplet pościeli', 'deska do prasowania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/c-studio/2026_sync/5S5A2356-standard.jpg"),
            images: [
                getAssetPath("/images/stranda/c-studio/2026_sync/5S5A2356-standard.jpg"),
                getAssetPath("/images/stranda/c-studio/2026_sync/5S5A2359-standard.jpg"),
                getAssetPath("/images/stranda/c-studio/2026_sync/5S5A2366-standard.jpg"),
                getAssetPath("/images/stranda/c-studio/2026_sync/5S5A2367-standard.jpg")
            ]
        },
        idoBookingId: '32',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/32/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'c-z-jedna-sypialnia': {
        id: 'c-z-jedna-sypialnia',
        title: "Apartament C z 1 sypialnią",
        shortTitle: "Apartament C z 1 sypialnią",
        description: "Studio z 1 sypialnią znajduje się w budynku C, w sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 4 osób.",
        building: 'C',
        type: 'oneBedroom',
        price: 300,
        guests: '4',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'klimatyzacja'],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres do kawy'],
            bedroom: ['łóżko 180x200', 'komplet pościeli', 'deska do prasowania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik', 'leżaki']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 balkon .JPG"),
            images: [
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 balkon .JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 balkon1.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 kuchnia.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 salon.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 sypialnia.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 sypialnia1.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 sypialnia2.JPG"),
                getAssetPath("/images/stranda/c-z-jedna-sypialnia/2026_sync/C101 łazienka.JPG")
            ]
        },
        idoBookingId: '43',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/43/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

    'c-z-dwoma-sypialniami': {
        id: 'c-z-dwoma-sypialniami',
        title: "Apartament C z 2 sypialniami",
        shortTitle: "Apartament C z 2 sypialniami",
        description: "Studio z 2 sypialniami znajduje się w budynku C, w każdej sypialni łóżko podwójne, salon z aneksem kuchennym z rozkładaną sofą dla 2 osób, łazienka z prysznicem i tarasem z widokiem na zatokę Tracz i port Stranda. Przeznaczone dla maksymalnie 6 osób.",
        building: 'C',
        type: 'twoBedroom',
        price: 300,
        guests: '6',
        amenities: {
            living: ['TV', 'sofa 2os.', 'stół', 'krzesła', 'klimatyzacja'],
            kitchen: ['płyta indukcyjna', 'lodówka', 'komplet naczyń i sztućców', 'ekspres do kawy'],
            bedroom: ['łóżko 180x200', 'komplet pościeli', 'deska do prasowania', 'żelazko'],
            bathroom: ['prysznic', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic'],
            terrace: ['dwa krzesła', 'stolik']
        },
        gallery: {
            heroImage: getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 balkon.JPG"),
            images: [
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 balkon.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 jadalnia.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 kuchnia.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 salon.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 salon1.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 sypialnia.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 sypialnia1.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 łazienka.JPG"),
                getAssetPath("/images/stranda/c-z-dwoma-sypialniami/2026_sync/C201 łazienka1.JPG")
            ]
        },
        idoBookingId: '43',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/43/key/da39a3ee5e6b4b0d3255bfef95601890afd80709'
    },

};
