import { getAssetPath } from '@/utils/assetPath';

export type KisajnoData = {
    id: string;
    title: string;
    price: number;
    guests: string;
    description: string;
    amenities: {
        living?: string[];
        kitchen?: string[];
        bedroom?: string[];
        bedroom2?: string[];
        bathroom?: string[];
        terrace?: string[];
        general?: string[];
    };
    gallery: { heroImage: string; images: string[] };
    idoBookingId?: string;
    icalUrl?: string;
    customBookingUrl?: string;
};

const k11Images = [
    '/images/kisajno/5fa85862-bc95-41b7-90bf-a8041d18c07f.webp',
    '/images/kisajno/a0c37bde-dd6b-406e-bdae-badc6b5b5bf3.webp',
    '/images/kisajno/kis.webp',
    '/images/kisajno/kis1.webp',
    '/images/kisajno/kis2.webp',
].map(getAssetPath);

const k15Images = Array.from({ length: 11 }, (_, index) => getAssetPath(`/images/kisajno/kisajno_${index + 1}.webp`));

export const kisajnoApartments: Record<string, KisajnoData> = {
    K11: {
        id: 'K11',
        title: 'Giżycko Kisajno — Apartament K11',
        price: 350,
        guests: '4',
        description: 'Apartament K11 nad jeziorem Kisajno jest przeznaczony dla maksymalnie czterech osób. Ma salon z aneksem kuchennym, osobną sypialnię, łazienkę oraz taras z widokiem na parking.',
        amenities: {
            living: ['TV', 'sofa dwuosobowa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko 160x200', 'sofa', 'komplet pościeli', 'suszarka na ubrania', 'deska do prasowania', 'żelazko'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['widok na parking'],
        },
        gallery: { heroImage: k11Images[0], images: k11Images },
        idoBookingId: '49',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/49/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
        customBookingUrl: 'https://client37851.idobooking.com/book-now/index.php?ob[49]=&showOtherOffers=true&currency=0&language=0&from_own_button=1',
    },
    K15: {
        id: 'K15',
        title: 'Giżycko Kisajno — Apartament K15 z dwiema sypialniami',
        price: 500,
        guests: '6',
        description: 'Apartament K15 znajduje się na parterze. Ma salon z aneksem kuchennym i rozkładaną sofą, dwie sypialnie, łazienkę z prysznicem oraz taras z bocznym widokiem na jezioro Kisajno i zatokę Tracz.',
        amenities: {
            living: ['TV', 'sofa dwuosobowa', 'stół', 'krzesła', 'odkurzacz', 'klimatyzacja'],
            kitchen: ['ekspres do kawy', 'płyta indukcyjna', 'piekarnik', 'lodówka', 'zmywarka', 'komplet naczyń i sztućców'],
            bedroom: ['łóżko dwuosobowe', 'TV', 'komplet pościeli'],
            bedroom2: ['łóżko dwuosobowe', 'komplet pościeli'],
            bathroom: ['prysznic', 'pralka', 'suszarka do włosów', 'ręczniki', 'żel pod prysznic', 'mydło', 'balsam do ciała'],
            terrace: ['komplet mebli wypoczynkowych', 'boczny widok na jezioro Kisajno i zatokę Tracz'],
            general: ['internet', 'WiFi', 'zestaw startowy: woda, kawa i herbata'],
        },
        gallery: { heroImage: k15Images[0], images: k15Images },
        idoBookingId: '45',
        icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/45/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
    },
};

export const kisajnoData = kisajnoApartments.K15;
