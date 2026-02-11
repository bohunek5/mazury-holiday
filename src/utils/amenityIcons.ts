export function getAmenityIcon(amenity: string): string {
    const normalized = amenity.toLowerCase();

    // Default icon
    let icon = 'ROOM.svg';

    // Kitchen
    if (normalized.includes('lodów') || normalized.includes('lodowk') || normalized.includes('chłodziarka')) icon = 'FRIDGE.svg';
    else if (normalized.includes('zmywark')) icon = 'WASHING_MACHINE.svg';
    else if (normalized.includes('mikrofal') || normalized.includes('kuchenka mikrofal')) icon = 'TOASTER.svg';
    else if (normalized.includes('płyta induk') || normalized.includes('plyta induk') || normalized.includes('kuchenka')) icon = 'CUTLERY.svg';
    else if (normalized.includes('ekspres') && normalized.includes('kaw')) icon = 'COFFEE.svg';
    else if (normalized.includes('czajnik')) icon = 'HOT_TEA.svg';
    else if (normalized.includes('toster')) icon = 'TOASTER.svg';
    else if (normalized.includes('naczynia') || normalized.includes('sztućce') || normalized.includes('sztucce')) icon = 'CUTLERY.svg';
    else if (normalized.includes('kuchnia') || normalized.includes('aneks')) icon = 'CUTLERY.svg';

    // Living Room
    else if (normalized.includes('klimatyzac')) icon = 'AIR_CONDITIONER.svg';
    else if (normalized.includes('sofa') || normalized.includes('kanapa')) icon = 'SOFA.svg';
    else if (normalized.includes('tv') || normalized.includes('telewizor')) icon = 'TV.svg';
    else if (normalized.includes('wi-fi') || normalized.includes('wifi')) icon = 'WIFI.svg';
    else if (normalized.includes('stół') || normalized.includes('stol')) icon = 'ROOM.svg'; // Better than lamp
    else if (normalized.includes('kominek')) icon = 'FIRE_EXTINGUISHER.svg';
    else if (normalized.includes('odkurzacz')) icon = 'CLEANING_STAFF.svg';
    else if (normalized.includes('żelazko') || normalized.includes('zelazko')) icon = 'IRON.svg';
    else if (normalized.includes('prasowan')) icon = 'IRON.svg';

    // Bedroom
    else if (normalized.includes('łóżko') || normalized.includes('lozko')) icon = 'BED.svg';
    else if (normalized.includes('pościel') || normalized.includes('posciel')) icon = 'PILLOWS.svg';
    else if (normalized.includes('szafa')) icon = 'LUGGAGE.svg';
    else if (normalized.includes('sypialnia')) icon = 'ROOM.svg';
    else if (normalized.includes('suszarka na ubrania')) icon = 'HANGER.svg';

    // Bathroom
    else if (normalized.includes('prysznic') || normalized.includes('prysnic')) icon = 'SHOWER.svg';
    else if (normalized.includes('wanna')) icon = 'BATHTUB.svg';
    else if (normalized.includes('pralka')) icon = 'WASHING_MACHINE.svg';
    else if (normalized.includes('suszarka do włos')) icon = 'HAIR_DRYER.svg';
    else if (normalized.includes('ręcznik') || normalized.includes('recznik')) icon = 'TOWEL.svg';
    else if (normalized.includes('mydło') || normalized.includes('szampon') || normalized.includes('kosmetyk')) icon = 'SOAP.svg';
    else if (normalized.includes('prostownica')) icon = 'HAIR_DRYER.svg';
    else if (normalized.includes('szlafrok')) icon = 'BATHROBE.svg';

    // Terrace / Outdoor
    else if (normalized.includes('jacuzzi')) icon = 'SPA.svg';
    else if (normalized.includes('sauna')) icon = 'SPA.svg';
    else if (normalized.includes('taras') || normalized.includes('balkon')) icon = 'TERRACE.svg';
    else if (normalized.includes('wyjście') || normalized.includes('wyjscie')) icon = 'DOOR_HANDLE.svg';
    else if (normalized.includes('meble') || normalized.includes('leżak')) icon = 'SUNBED.svg';
    else if (normalized.includes('widok')) icon = 'LOCATION.svg';
    else if (normalized.includes('grill')) icon = 'BAR.svg';
    else if (normalized.includes('ognisko')) icon = 'BAR.svg'; // Fallback

    // General
    else if (normalized.includes('parking')) icon = 'PARKING.svg';
    else if (normalized.includes('ogrzewanie')) icon = 'AIR_CONDITIONER.svg';
    else if (normalized.includes('osób') || normalized.includes('osob')) icon = 'BED.svg';
    else if (normalized.includes('stery') || normalized.includes('strumieniow')) icon = 'THRUSTERS.svg';

    return `/mazury-holiday/icons/${icon}`;
}
