"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; name: string; flag: React.ReactNode }[] = [
    {
        code: "pl",
        name: "Polski",
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" className="w-5 h-auto rounded-sm shadow-sm border border-slate-200/20">
                <rect width="16" height="10" fill="#fff" />
                <rect width="16" height="5" y="5" fill="#dc143c" />
            </svg>
        )
    },
    {
        code: "en",
        name: "English",
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" className="w-5 h-auto rounded-sm shadow-sm border border-slate-200/20">
                <clipPath id="s">
                    <path d="M0,0 v30 h50 v-30 z" />
                </clipPath>
                <path d="M0,0 v30 h50 v-30 z" fill="#012169" />
                <path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L50,30 M50,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                <path d="M25,0 v30 M0,15 h50" stroke="#fff" strokeWidth="10" />
                <path d="M25,0 v30 M0,15 h50" stroke="#C8102E" strokeWidth="6" />
            </svg>
        )
    },
    {
        code: "de",
        name: "Deutsch",
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-auto rounded-sm shadow-sm border border-slate-200/20">
                <rect width="5" height="3" y="0" fill="#000" />
                <rect width="5" height="2" y="1" fill="#D00" />
                <rect width="5" height="1" y="2" fill="#FFCE00" />
            </svg>
        )
    },
    {
        code: "lt",
        name: "Lietuvių",
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-5 h-auto rounded-sm shadow-sm border border-slate-200/20">
                <rect width="5" height="1" fill="#FDB913" />
                <rect width="5" height="1" y="1" fill="#006A44" />
                <rect width="5" height="1" y="2" fill="#C1272D" />
            </svg>
        )
    },
    {
        code: "cs",
        name: "Čeština",
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-auto rounded-sm shadow-sm border border-slate-200/20">
                <rect width="3" height="2" fill="#fff" />
                <rect width="3" height="1" y="1" fill="#D7141A" />
                <path d="M0,0 L1.5,1 L0,2 Z" fill="#11457E" />
            </svg>
        )
    }
];

interface LanguageSwitcherProps {
    className?: string;
    dropUp?: boolean;
    alignCenter?: boolean;
}

export function LanguageSwitcher({ className, dropUp = false, alignCenter = false }: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { language, setLanguage } = useLanguage();
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const selectedLang = languages.find(l => l.code === language) || languages[0];

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={selectedLang.name}
            >
                <div className="w-6 h-6 rounded-full overflow-hidden shadow-sm flex items-center justify-center border border-slate-200/20 bg-slate-100 dark:bg-slate-800">
                    {React.cloneElement(selectedLang.flag as React.ReactElement, { 
                        className: "w-full h-full",
                        preserveAspectRatio: "xMidYMid slice"
                    })}
                </div>
            </button>

            {isOpen && (
                <div className={cn(
                    "absolute bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden",
                    alignCenter ? "left-1/2 -translate-x-1/2" : "right-0",
                    dropUp ? "bottom-full mb-2 origin-bottom" : "top-full mt-2 origin-top-right"
                )}>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto w-max p-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                title={lang.name}
                                className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full transition-transform hover:scale-110 relative cursor-pointer",
                                    language === lang.code
                                        ? "ring-2 ring-amber-500 ring-offset-2 dark:ring-offset-slate-900"
                                        : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                            >
                                <div className="w-full h-full rounded-full overflow-hidden shadow-sm flex items-center justify-center border border-slate-200/20 bg-slate-100 dark:bg-slate-800">
                                    {React.cloneElement(lang.flag as React.ReactElement, { 
                                        className: "w-full h-full",
                                        preserveAspectRatio: "xMidYMid slice"
                                    })}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
