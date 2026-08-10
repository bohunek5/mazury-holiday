export type ApartmentAmenities = {
    living: string[];
    kitchen: string[];
    bedroom: string[];
    bedroom2?: string[];
    bathroom: string[];
    bathroom2?: string[];
    terrace: string[];
    terrace2?: string[];
    general?: string[];
};

export type ApartmentSectionLabels = Partial<Record<keyof ApartmentAmenities, string>>;

export type ApartmentGallery = {
    heroImage: string;
    images: string[];
};

export type Apartment = {
    id: string;
    building: string;
    type: string;
    title?: string;
    shortTitle?: string;
    subtitle?: string;
    price: number;
    guests: string;
    description: string;
    amenities: ApartmentAmenities;
    sectionLabels?: ApartmentSectionLabels;
    additionalInfo?: string[];
    idoBookingId?: string;
    icalUrl?: string;
    virtualTourUrl?: string;
    virtualTourImage?: string;
    virtualTourImages?: string[];
    gallery: ApartmentGallery;
};
