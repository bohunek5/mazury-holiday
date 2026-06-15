import { getAssetPath } from '@/utils/assetPath';

export type CzarterData = {
    id: string;
    title: string;
    idoBookingId: string;
    icalUrl: string;
    images: string[];
};

export const czarterData: CzarterData = {
    id: "stillo30",
    title: "Stillo 30 VIP",
    idoBookingId: "31",
    icalUrl: "https://client37851.idosell.com/panel/offer/icalexport/itemid/31/key/da39a3ee5e6b4b0d3255bfef95601890afd80709",
    images: [
        getAssetPath("/images/czarter/gallery/stillo_1.webp"),
        getAssetPath("/images/czarter/gallery/stillo_2.webp"),
        getAssetPath("/images/czarter/gallery/stillo_3.webp"),
        getAssetPath("/images/czarter/gallery/stillo_4.webp"),
        getAssetPath("/images/czarter/gallery/stillo_5.webp"),
        getAssetPath("/images/czarter/gallery/stillo_6.webp"),
        getAssetPath("/images/czarter/gallery/stillo_7.webp"),
        getAssetPath("/images/czarter/gallery/stillo_8.webp"),
        getAssetPath("/images/czarter/gallery/stillo_9.webp"),
        getAssetPath("/images/czarter/gallery/stillo_10.webp"),
        getAssetPath("/images/czarter/gallery/stillo_11.webp"),
        getAssetPath("/images/czarter/gallery/stillo_12.webp"),
        getAssetPath("/images/czarter/gallery/stillo_13.webp"),
        getAssetPath("/images/czarter/gallery/stillo_14.webp"),
        getAssetPath("/images/czarter/gallery/stillo_15.webp"),
        getAssetPath("/images/czarter/gallery/stillo_16.webp"),
        getAssetPath("/images/czarter/gallery/stillo_17.webp"),
        getAssetPath("/images/czarter/gallery/stillo_18.webp"),
        getAssetPath("/images/czarter/gallery/stillo_19.webp"),
        getAssetPath("/images/czarter/gallery/stillo_20.webp"),
        getAssetPath("/images/czarter/gallery/stillo_21.webp")
    ]
};
