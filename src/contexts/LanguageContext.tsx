"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (section: keyof typeof translations.pl, key: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = "pl" }: { children: ReactNode; initialLanguage?: Language }) {
    const [language, setLanguage] = useState<Language>(initialLanguage);

    const t = (section: keyof typeof translations.pl, key: string): any => {
        const getVal = (lang: Language, sec: keyof typeof translations.pl, k: string) => {
            const keys = k.split('.');
            const validLang = translations && translations[lang] ? lang : "pl";
            
            if (!translations || !translations[validLang]) {
                return undefined;
            }
            
            let result: unknown = (translations[validLang] as any)[sec];
            if (result === undefined) return undefined;
            
            for (const keyChunk of keys) {
                if (result && typeof result === 'object' && keyChunk in (result as Record<string, unknown>)) {
                    result = (result as Record<string, unknown>)[keyChunk];
                } else {
                    return undefined;
                }
            }
            return result;
        };

        const value = getVal(language, section, key);
        if (value !== undefined) return value;

        const fallbackEn = getVal("en", section, key); // Fallback to English
        if (fallbackEn !== undefined) return fallbackEn;

        const fallbackPl = getVal("pl", section, key); // Final fallback to Polish
        return (fallbackPl !== undefined ? fallbackPl : key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
