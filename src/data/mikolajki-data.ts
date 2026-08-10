import { getAssetPath } from '@/utils/assetPath';

export type MikolajkiData = {
    id: string;
    title: string;
    price: number;
    guests: string;
    description: string;
    amenities: {
        living?: string[];
        kitchen?: string[];
        bedroom?: string[];
        bathroom?: string[];
        terrace?: string[];
        general?: string[];
    };
    gallery: {
        heroImage: string;
        images: string[];
    };
    idoBookingId?: string;
    icalUrl?: string;
};

export const mikolajkiData: MikolajkiData = {
    id: "mikolajki",
    title: "Mikołajki - Apartament Gigu z 1 sypialnią",
    price: 350,
    guests: "4",
    description: `Apartament znajduje się w centrum Mikołajek, przy Placu Wolności. Jest przeznaczony dla maksymalnie czterech osób i składa się z sypialni, aneksu kuchennego oraz łazienki. Obiekt nie ma osobnego salonu ani tarasu.`,
    amenities: {
        bedroom: ["łóżko 160x200", "świeża pościel i ręczniki", "rozkładana sofa", "TV", "szybkie, bezpłatne WiFi"],
        kitchen: ["ekspres do kawy", "płyta indukcyjna", "lodówka", "zmywarka", "komplet naczyń i sztućców", "zestaw startowy: woda, kawa i herbata"],
        bathroom: ["prysznic", "pralka", "suszarka do włosów", "ręczniki", "żel pod prysznic", "balsam do ciała"],
        general: ["centrum Mikołajek — Plac Wolności", "dla maksymalnie 4 osób"]
    },
    gallery: {
        heroImage: getAssetPath("/images/mikolajki/hero.webp"),
        images: [
            getAssetPath("/images/mikolajki/hero.webp"),
            getAssetPath("/images/mikolajki/mikolajki_1.webp"),
            getAssetPath("/images/mikolajki/mikolajki_3.webp"),
            getAssetPath("/images/mikolajki/mikolajki_4.webp"),
            getAssetPath("/images/mikolajki/mikolajki_5.webp"),
            getAssetPath("/images/mikolajki/mikolajki_6.webp"),
            getAssetPath("/images/mikolajki/mikolajki_7.webp"),
            getAssetPath("/images/mikolajki/mikolajki_8.webp")
        ]
    },
    idoBookingId: "48",
    icalUrl: "https://client37851.idosell.com/panel/offer/icalexport/itemid/48/key/da39a3ee5e6b4b0d3255bfef95601890afd80709"
};
