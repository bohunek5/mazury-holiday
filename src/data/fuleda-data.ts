import { getAssetPath } from '@/utils/assetPath';
export type FuledaApartment = {
    id: string;
    type: string;
    price: number;
    guests: string;
    description: string;
    customAboutTitle?: string;
    amenities: {
        living?: string[];
        kitchen?: string[];
        bedroom?: string[];
        bathroom?: string[];
        terrace?: string[];
        terrace2?: string[];
        general?: string[];
    };
    sectionLabels?: Partial<Record<'living' | 'kitchen' | 'bedroom' | 'bathroom' | 'terrace' | 'terrace2' | 'general', string>>;
    gallery: {
        heroImage: string;
        images: string[];
    };
    idoBookingId?: string;
    icalUrl?: string;
};

const baseFuledaApartments: Record<string, FuledaApartment> = {
    'parter': {
        id: 'parter',
        type: 'Parter',
        customAboutTitle: 'O domku',
        price: 250,
        guests: '2+2',
        idoBookingId: '26',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/26/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: `Apartament z dwoma sypialniami zlokalizowany na parterze budynku to pięknie i stylowo wykończony obiekt. Położony nad jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.
Nasze apartamenty ulokowane są w miejscowości Fuleda na półwyspie nad brzegiem jeziora. Rozpościera się z niego piękny widok na panoramę jezioro Dobskiego, wyspę Kormoranów, wyspę Heleny.  Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z prywatnego dostępu do wody, grilla i ogniska. Giżycko (oddalone o około 12km) umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym i historycznym.
Apartament Fuleda (parter) z bezpośrednim widokiem na jezioro Dobskie znajduje się na parterze budynku, posiada dwie sypialnie, aneks kuchenny, łazienkę z prysznicem i dwa zadaszone tarasy: jeden z przodu budynku z bezpośrednim widokiem na jezioro Dobskie, drugi z tyłu budynku.
Położenie: parter
Maksymalna ilość osób: 2+2
Wyposażenie kuchni: kapsułkowy ekspres do kawy, kuchenka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców
Wyposażenie sypialni 1: TV, kominek, rozkładana sofa 2os., stół, krzesła, odkurzacz, żelazko, deska do prasowania, klimatyzacja, suszarka na ubrania, szafa
Wyposażenie sypialni 2: TV, łózko 160x200, dwie szafki nocne, komplet pościeli, szafa
Wyposażenie łazienki: prysznic, pralka, suszarka do włosów, prostownica, ręczniki, żel pod prysznic, mydło, balsam do ciała
Taras przód: fotele, stolik, kokon
Taras tył: zestaw mebli tarasowych, grill
Prywatne dojście do jeziora z miejscem na ognisko i grilla, hamak, dwa leżaki
Pozostałe: internet, wifi
Apartament jest kompleksowo wyposażony, ogrzewany, zapewnia komfortowy wypoczynek przez cały rok.
Fuleda położona jest około 10km od Giżycka, 20km od Kętrzyna i Gierłoży gdzie znajduje się Wilczy Szaniec - kwatera Hitlera. W pobliżu lasy, łąki, trasy rowerowe, płac zabaw,. Najbliższy sklep około 3km.`,
        amenities: {
            living: [],
            kitchen: [],
            bedroom: ['Dwie sypialnie', 'Łóżko 180x200', 'Sofa 2-osobowa', 'Klimatyzacja', 'Kominek', 'TV', 'Stół i krzesła', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko', 'WiFi'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_korytarz_1.webp"),
            images: [
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_korytarz_1.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_kuchnia1_2.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_sypialnia_3.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_taras_przo_d2_4.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_kuchnia_5.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_salon_6.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_salon1_7.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_zima_8.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_zima1_9.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter__azienka_10.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter__azienka1_11.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_12.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_taras_przo_d_55.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_taras_przo_d1_56.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_taras_ty__57.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_parter_taras_ty_1__58.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014789_25.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014815_26.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014817_27.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014819_28.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014821_29.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014825_30.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka_31.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima_32.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima1_33.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima3_34.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260216143847_0174_D_35.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260216144037_0177_D_36.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260216144125_0178_D_37.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112211_0107_D_38.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112348_0110_D_39.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112432_0112_D_40.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112516_0113_D_41.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112542_0114_D_42.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112614_0115_D_43.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112714_0116_D_44.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112904_0119_D_45.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515113004_0121_D_46.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014793_47.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014800_48.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014801_49.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014804_50.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014806_51.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014807_52.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014808_53.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112238_0108_D_54.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112306_0109_D_59.webp"),
            getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112413_0111_D_60.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014812_61.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014814_62.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014818_63.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014822_64.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014823_65.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_plaz_a_66.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_67.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda1_68.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014813_72.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014816_73.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014820_74.webp"),
            getAssetPath("/images/fuleda/nowe_2026/P1014824_75.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka1_76.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka2_77.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka3_78.webp"),
            getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka4_79.webp")
            ]
        }
    },
    'pietro': {
        id: 'pietro',
        type: 'Piętro',
        customAboutTitle: 'O domku',
        price: 200,
        guests: '2+1',
        idoBookingId: '27',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/27/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        description: `Apartament z dwoma sypialniami zlokalizowany na piętrze budynku to pięknie i stylowo wykończony obiekt. Położony nad jeziorem Dobskim, które jest objęte strefą ciszy to gwarancja wypoczynku w ciszy i spokoju, na łonie pięknej, nieskazitelnej mazurskiej przyrody.
Nasze apartamenty ulokowane są w miejscowości Fuleda na półwyspie nad brzegiem jeziora. Rozpościera się z niego piękny widok na panoramę jezioro Dobskiego, wyspę Kormoranów, wyspę Heleny.  Apartament jest luksusowo wykończony i zapewnia wysoki komfort wypoczynku. Na miejscu można skorzystać z prywatnego dostępu do wody, grilla i ogniska. Giżycko (oddalone o około 12km) umożliwia korzystanie z wielu atrakcji turystycznych, ofert wielu restauracji i pubów. Lokalizacja obiektu, ułatwia również poznawanie Mazur pod kątem przyrodniczym i historycznym.
Apartament Fuleda (piętro) z bezpośrednim widokiem na jezioro Dobskie znajduje się na piętrze budynku, posiada dwie sypialnie, aneks kuchenny, łazienkę z prysznicem i dwa zadaszone tarasy: jeden z przodu budynku z bezpośrednim widokiem na jezioro Dobskie, drugi z tyłu budynku.
Położenie: 1 piętro (poddasze)
Maksymalna ilość osób: 2+1
Wyposażenie kuchni: kapsułkowy ekspres do kawy, kuchenka, piekarnik, lodówka, zmywarka, komplet naczyń i sztućców
Wyposażenie sypialni 1: TV, kominek, rozkładana sofa 2os., stół, krzesła, odkurzacz, żelazko, deska do prasowania, klimatyzacja, suszarka na ubrania, szafa
Wyposażenie sypialni 2: TV, łózko 160x200, dwie szafki nocne, komplet pościeli, szafa
Wyposażenie łazienki: prysznic, pralka, suszarka do włosów, prostownica, ręczniki, żel pod prysznic, mydło, balsam do ciała
Taras z widokiem na jezioro: dwa leżaki, fotele, stolik
Prywatne dojście do jeziora z miejscem na ognisko i grilla, hamak, dwa leżaki
Pozostałe: internet, wifi
Apartament jest kompleksowo wyposażony, ogrzewany, zapewnia komfortowy wypoczynek przez cały rok.
Fuleda położona jest około 10km od Giżycka, 20km od Kętrzyna i Gierłoży gdzie znajduje się Wilczy Szaniec - kwatera Hitlera. W pobliżu lasy, łąki, trasy rowerowe, płac zabaw,. Najbliższy sklep około 3km.`,
        amenities: {
            living: [],
            kitchen: [],
            bedroom: ['Dwie sypialnie', 'Łóżko 180x200', 'Sofa 2-osobowa', 'Klimatyzacja', 'Kominek', 'TV', 'Stół i krzesła', 'Komplet pościeli', 'Suszarka na ubrania', 'Deska do prasowania', 'Żelazko', 'WiFi'],
            bathroom: ['Prysznic', 'Pralka', 'Suszarka do włosów', 'Prostownica', 'Ręczniki', 'Szlafroki', 'Kosmetyki'],
            terrace: ['Meble wypoczynkowe', 'Prywatne zejście do jeziora', 'Miejsce na grilla', 'Miejsce na ognisko']
        },
        gallery: {
            heroImage: getAssetPath("/images/fuleda/ido_pietro_27_1.webp"),
            images: [
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_kuchnia_13.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_salon_14.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_salon1_15.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_salon2_16.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_sypialnia_17.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_sypialnia1_18.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_sypialnia2_19.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro_zima_20.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro__azienka_21.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pietro__azienka1_22.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pie_tro_taras_23.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pie_tro_taras1_24.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pie_tro_taras2_69.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pie_tro_taras3_70.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_pie_tro_wejs_cie_71.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014789_25.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014815_26.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014817_27.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014819_28.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014821_29.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014825_30.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka_31.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima_32.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima1_33.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_zima3_34.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260216143847_0174_D_35.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260216144037_0177_D_36.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260216144125_0178_D_37.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112211_0107_D_38.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112348_0110_D_39.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112432_0112_D_40.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112516_0113_D_41.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112542_0114_D_42.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112614_0115_D_43.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112714_0116_D_44.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112904_0119_D_45.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515113004_0121_D_46.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014793_47.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014800_48.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014801_49.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014804_50.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014806_51.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014807_52.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014808_53.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112238_0108_D_54.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112306_0109_D_59.webp"),
                getAssetPath("/images/fuleda/nowe_2026/DJI_20260515112413_0111_D_60.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014812_61.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014814_62.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014818_63.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014822_64.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014823_65.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_plaz_a_66.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_67.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda1_68.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014813_72.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014816_73.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014820_74.webp"),
                getAssetPath("/images/fuleda/nowe_2026/P1014824_75.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka1_76.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka2_77.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka3_78.webp"),
                getAssetPath("/images/fuleda/nowe_2026/Fuleda_dzia_ka4_79.webp")
            ]
        }
    }
};

export const fuledaApartments: Record<string, FuledaApartment> = {
    parter: {
        ...baseFuledaApartments.parter,
        description: 'Całoroczny apartament na parterze w Fuledzie, nad jeziorem Dobskim. Do dyspozycji gości są salon, kuchnia, sypialnia, łazienka, dwa tarasy oraz prywatny dostęp do jeziora nr 2.',
        amenities: {
            living: ['TV', 'kominek', 'rozkładana sofa dwuosobowa', 'stół', 'krzesła', 'odkurzacz', 'żelazko', 'deska do prasowania', 'klimatyzacja', 'suszarka na ubrania', 'szafa'],
            kitchen: ['kapsułkowy ekspres do kawy', 'kuchenka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 160x200', 'dwie szafki nocne', 'komplet pościeli', 'szafa'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['komplet mebli wypoczynkowych', 'stół', 'wiszący kokon'],
            terrace2: ['komplet mebli tarasowych', 'grill'],
            general: ['zadaszona i oświetlona wiata', 'grill', 'hamak', 'dwa leżaki', 'komplet mebli wypoczynkowych', 'internet', 'WiFi'],
        },
        sectionLabels: { terrace: 'Taras przedni', terrace2: 'Taras tylny', general: 'Prywatny dostęp do jeziora nr 2' },
    },
    pietro: {
        ...baseFuledaApartments.pietro,
        description: 'Całoroczny apartament na piętrze w Fuledzie, nad jeziorem Dobskim. Do dyspozycji gości są salon, kuchnia, sypialnia, łazienka, taras oraz prywatny dostęp do jeziora nr 3.',
        amenities: {
            living: ['TV', 'kominek', 'rozkładana sofa dwuosobowa', 'stół', 'krzesła', 'odkurzacz', 'żelazko', 'deska do prasowania', 'klimatyzacja', 'suszarka na ubrania', 'szafa'],
            kitchen: ['kapsułkowy ekspres do kawy', 'kuchenka', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['TV', 'łóżko 160x200', 'komplet pościeli', 'szafa'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['komplet mebli wypoczynkowych', 'stół', 'dwa leżaki', 'markiza'],
            general: ['miejsce na ognisko', 'grill', 'dwa leżaki', 'komplet mebli wypoczynkowych', 'internet', 'WiFi'],
        },
        sectionLabels: { terrace: 'Taras przedni', general: 'Prywatny dostęp do jeziora nr 3' },
    },
};
