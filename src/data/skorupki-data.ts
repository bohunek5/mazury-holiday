import { getAssetPath } from '@/utils/assetPath';

export type SkorupkiData = {
    id: string;
    title: string;
    price: number;
    guests: string;
    unitsCount: number;
    idoBookingId?: string;
    icalUrl?: string;
    customBookingUrl?: string;
    description: string;
    gallery: {
        heroImage: string;
        images: string[];
    };
    customAboutTitle?: string;
    customAmenitiesTitle?: string;
};

export const skorupkiData: SkorupkiData = {
    id: "skorupki",
    title: "Domki Skorupki",
    price: 600,
    guests: "6",
    unitsCount: 10,
    idoBookingId: "47",
    icalUrl: "https://client37851.idosell.com/panel/offer/icalexport/itemid/47/key/da39a3ee5e6b4b0d3255bfef95601890afd80709",
    customBookingUrl: "https://client37851.idobooking.com/book-now/index.php?ob[47]=&showOtherOffers=true&currency=0&language=0&from_own_button=1",
    description: `Domki Skorupki to kameralna osada eleganckich domków wypoczynkowych w spokojnej części Mazur. Oferta łączy prywatność, wysoki standard, bliskość jeziora i dopracowane wnętrza przygotowane zarówno na rodzinny wypoczynek, jak i dłuższy pobyt.`,
    customAboutTitle: "O domkach",
    customAmenitiesTitle: "Udogodnienia w domkach",
    gallery: {
        heroImage: getAssetPath("/images/skorupki/skorupki_21.webp"),
        images: [
            getAssetPath("/images/skorupki/skorupki_1.webp"),
            getAssetPath("/images/skorupki/skorupki_2.webp"),
            getAssetPath("/images/skorupki/skorupki_3.webp"),
            getAssetPath("/images/skorupki/skorupki_6.webp"),
            getAssetPath("/images/skorupki/skorupki_7.webp"),
            getAssetPath("/images/skorupki/skorupki_8.webp"),
            getAssetPath("/images/skorupki/skorupki_9.webp"),
            getAssetPath("/images/skorupki/skorupki_10.webp"),
            getAssetPath("/images/skorupki/skorupki_11.webp"),
            getAssetPath("/images/skorupki/skorupki_12.webp"),
            getAssetPath("/images/skorupki/skorupki_13.webp"),
            getAssetPath("/images/skorupki/skorupki_14.webp"),
            getAssetPath("/images/skorupki/skorupki_15.webp"),
            getAssetPath("/images/skorupki/skorupki_16.webp"),
            getAssetPath("/images/skorupki/skorupki_17.webp"),
            getAssetPath("/images/skorupki/skorupki_18.webp"),
            getAssetPath("/images/skorupki/skorupki_19.webp"),
            getAssetPath("/images/skorupki/skorupki_20.webp"),
            getAssetPath("/images/skorupki/skorupki_21.webp"),
            getAssetPath("/images/skorupki/skorupki_22.webp"),
            getAssetPath("/images/skorupki/skorupki_23.webp"),
            getAssetPath("/images/skorupki/skorupki_24.webp"),
            getAssetPath("/images/skorupki/skorupki_25.webp"),
            getAssetPath("/images/skorupki/skorupki_26.webp"),
            getAssetPath("/images/skorupki/skorupki_27.webp"),
            getAssetPath("/images/skorupki/skorupki_28.webp"),
            getAssetPath("/images/skorupki/skorupki_29.webp"),
            getAssetPath("/images/skorupki/skorupki_30.webp"),
            getAssetPath("/images/skorupki/skorupki_31.webp"),
            getAssetPath("/images/skorupki/skorupki_32.webp"),
            getAssetPath("/images/skorupki/skorupki_33.webp"),
            getAssetPath("/images/skorupki/skorupki_34.webp"),
            getAssetPath("/images/skorupki/skorupki_35.webp"),
            getAssetPath("/images/skorupki/skorupki_36.webp"),
            getAssetPath("/images/skorupki/skorupki_37.webp"),
            getAssetPath("/images/skorupki/skorupki_38.webp"),
            getAssetPath("/images/skorupki/skorupki_39.webp"),
            getAssetPath("/images/skorupki/skorupki_40.webp"),
            getAssetPath("/images/skorupki/skorupki_41.webp"),
            getAssetPath("/images/skorupki/skorupki_42.webp"),
            getAssetPath("/images/skorupki/skorupki_43.webp"),
            getAssetPath("/images/skorupki/skorupki_44.webp"),
            getAssetPath("/images/skorupki/skorupki_45.webp"),
            getAssetPath("/images/skorupki/skorupki_46.webp"),
            getAssetPath("/images/skorupki/skorupki_47.webp"),
            getAssetPath("/images/skorupki/skorupki_48.webp"),
            getAssetPath("/images/skorupki/skorupki_49.webp"),
            getAssetPath("/images/skorupki/skorupki_50.webp"),
            getAssetPath("/images/skorupki/skorupki_51.webp"),
            getAssetPath("/images/skorupki/skorupki_52.webp"),
            getAssetPath("/images/skorupki/skorupki_53.webp"),
            getAssetPath("/images/skorupki/skorupki_54.webp"),
            getAssetPath("/images/skorupki/skorupki_55.webp"),
            getAssetPath("/images/skorupki/skorupki_56.webp"),
            getAssetPath("/images/skorupki/skorupki_57.webp"),
            getAssetPath("/images/skorupki/skorupki_58.webp")
        ]
    }
};
