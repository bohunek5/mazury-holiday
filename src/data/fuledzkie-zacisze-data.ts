import { getAssetPath } from '@/utils/assetPath';

export const fuledzkieZaciszeData = {
    id: 'fuledzkie-zacisze',
    title: 'Domek Fuledzkie Zacisze',
    idoBookingId: '52',
    icalUrl: 'https://client37851.idosell.com/panel/offer/icalexport/itemid/52/key/da39a3ee5e6b4b0d3255bfef95601890afd80709',
    customBookingUrl: 'https://client37851.idobooking.com/book-now/index.php?ob[52]=&showOtherOffers=true&currency=0&language=0&from_own_button=1',
    description: 'Domek w Fuledzie dla rodzin i grup szukających spokojnego wypoczynku. Ma dwie sypialnie, salon z kominkiem, wyposażoną kuchnię, łazienkę, taras oraz duży ogród. Publiczna plaża gminna znajduje się około 400 metrów od obiektu.',
    amenities: {
        living: ['TV', 'stół', 'krzesła', 'rozkładana sofa', 'kominek'],
        kitchen: ['płyta indukcyjna', 'lodówka', 'zmywarka', 'mikrofalówka', 'komplet naczyń i sztućców', 'zestaw startowy'],
        bedroom: ['łóżko dwuosobowe', 'łóżko pojedyncze', 'komoda'],
        bedroom2: ['łóżko dwuosobowe', 'łóżko pojedyncze'],
        bathroom: ['prysznic', 'suszarka do włosów', 'mydło', 'żel pod prysznic', 'balsam do ciała', 'ręczniki'],
        terrace: ['stół', 'ławki', 'grill gazowy'],
        general: ['plac zabaw', 'trampolina', 'sad', 'parking', 'miejsce na ognisko', 'publiczna plaża gminna 400 m'],
    },
    gallery: {
        heroImage: getAssetPath('/images/fuleda_2.webp'),
        images: [
            '/images/fuleda_2.webp',
            '/images/fuleda_1.webp',
            '/images/fuleda/nowe_2026/Fuleda_dzia_ka_31.webp',
            '/images/fuleda/nowe_2026/Fuleda_dzia_ka1_76.webp',
            '/images/fuleda/nowe_2026/Fuleda_dzia_ka2_77.webp',
            '/images/fuleda/nowe_2026/Fuleda_dzia_ka3_78.webp',
            '/images/fuleda/nowe_2026/Fuleda_dzia_ka4_79.webp',
        ].map(getAssetPath),
    },
};
