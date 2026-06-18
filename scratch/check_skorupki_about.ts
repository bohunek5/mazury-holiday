import { translations } from './src/lib/translations';

const getVal = (lang: string, sec: string, k: string) => {
    const keys = k.split('.');
    let result: any = (translations as any)[lang]?.[sec];
    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return undefined;
        }
    }
    return result;
};

const t = (lang: string, section: string, key: string) => {
    const value = getVal(lang, section, key);
    if (value !== undefined) return value;
    const fallbackEn = getVal("en", section, key);
    if (fallbackEn !== undefined) return fallbackEn;
    const fallbackPl = getVal("pl", section, key);
    return (fallbackPl !== undefined ? fallbackPl : key);
};

['pl', 'en', 'de', 'lt', 'cs', 'es', 'it'].forEach(lang => {
    console.log(`${lang}: ${t(lang, 'skorupki', 'aboutTitle')}`);
});
