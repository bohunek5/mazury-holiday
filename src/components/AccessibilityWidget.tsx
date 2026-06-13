"use client";

import * as React from "react";
import { Accessibility, Type, Link, ZapOff, Contrast, Palette, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface AccessibilityWidgetProps {
    className?: string;
    dropUp?: boolean;
    alignCenter?: boolean;
}

export function AccessibilityWidget({ className, dropUp = false, alignCenter = false }: AccessibilityWidgetProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const { state, toggleSetting, reset } = useAccessibility();
    const { t } = useLanguage(); // Will fallback to default strings if not translated

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const options = [
        { id: "highContrast", label: "Wysoki kontrast", icon: Contrast, active: state.highContrast },
        { id: "largeText", label: "Większy tekst", icon: Type, active: state.largeText },
        { id: "dyslexiaFont", label: "Czcionka dla dyslektyków", icon: Type, active: state.dyslexiaFont },
        { id: "highlightLinks", label: "Podświetl linki", icon: Link, active: state.highlightLinks },
        { id: "stopAnimations", label: "Zatrzymaj animacje", icon: ZapOff, active: state.stopAnimations },
        { id: "grayscale", label: "Skala szarości", icon: Palette, active: state.grayscale },
    ];

    const activeCount = Object.values(state).filter(Boolean).length;

    return (
        <div className={cn("relative", className)} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title="Dostępność (WCAG)"
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
                <Accessibility className="w-5 h-5" />
                {activeCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold border-2 border-white dark:border-slate-900">
                        {activeCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className={cn(
                    "absolute w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-4 z-50 animate-in fade-in zoom-in-95 duration-200",
                    alignCenter ? "left-1/2 -translate-x-1/2" : "-right-4 sm:right-0",
                    dropUp ? "bottom-full mb-2 origin-bottom" : "top-full mt-2 origin-top-right"
                )}>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Accessibility className="w-4 h-4 text-blue-600" />
                            Dostępność
                        </h3>
                        {activeCount > 0 && (
                            <button 
                                onClick={reset}
                                className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors"
                                title="Resetuj ustawienia"
                            >
                                <RefreshCcw className="w-3 h-3" />
                                Reset
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        {options.map((opt) => {
                            const Icon = opt.icon;
                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => toggleSetting(opt.id as any)}
                                    className={cn(
                                        "flex items-center justify-between w-full p-2.5 rounded-xl transition-all duration-200 text-sm text-left group cursor-pointer",
                                        opt.active 
                                            ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium ring-1 ring-blue-500/30" 
                                            : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                    )}
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon className={cn(
                                            "w-4 h-4", 
                                            opt.active ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                                        )} />
                                        {opt.label}
                                    </span>
                                    
                                    <div className={cn(
                                        "w-8 h-4 rounded-full flex items-center p-0.5 transition-colors",
                                        opt.active ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
                                    )}>
                                        <div className={cn(
                                            "w-3 h-3 bg-white rounded-full shadow-sm transition-transform",
                                            opt.active ? "translate-x-4" : "translate-x-0"
                                        )} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
