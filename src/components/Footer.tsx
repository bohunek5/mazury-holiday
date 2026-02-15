"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 py-12 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left text-sm md:text-base">
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="relative h-20 w-64 md:h-24 md:w-80 mb-6 md:mb-8 block">
                        <Image
                            src="/mazury-holiday/images/logo-poziom.svg"
                            alt="Mazury.Holiday"
                            fill
                            className="object-contain object-center md:object-left opacity-90 transition-all duration-300 dark:brightness-0 dark:invert"
                        />
                    </Link>
                    <p className="leading-relaxed max-w-xs md:max-w-sm mb-8 opacity-80 text-slate-500 dark:text-slate-400 mx-auto md:mx-0">
                        {t("footer", "brandDesc")}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-amber-500 hover:text-white transition-all text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-amber-500"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-amber-500 hover:text-white transition-all text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-amber-500"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-slate-900 dark:text-white font-serif font-bold text-xl mb-6 relative inline-block">
                        {t("footer", "contactTitle")}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <ul className="space-y-4 md:space-y-6 w-full flex flex-col items-center md:items-start">
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0 border border-slate-200 dark:border-slate-700">
                                <Phone size={18} />
                            </div>
                            <a href="tel:+48730067027" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-white transition-colors font-medium text-left whitespace-nowrap">
                                +48 730 067 027
                            </a>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0 border border-slate-200 dark:border-slate-700">
                                <Mail size={18} />
                            </div>
                            <a href="mailto:rezerwacje@mazury.holiday" className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-white transition-colors text-left">
                                rezerwacje@mazury.holiday
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-slate-900 dark:text-white font-serif font-bold text-xl mb-6 relative inline-block">
                        {t("footer", "linksTitle")}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <ul className="space-y-3 flex flex-col items-center md:items-start">
                        {[
                            { id: "about", href: "/#about" },
                            { id: "apartments", href: "/apartamenty" },
                            { id: "rooms", href: "/pokoje" },
                            { id: "cottages", href: "/domki" },
                            { id: "charter", href: "/czarter" },
                            { id: "contact", href: "/kontakt" }
                        ].map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-all hover:translate-x-1 group"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors"></span>
                                    {t("nav", link.id)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 md:mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} mazury.holiday. {t("footer", "rights")}.
            </div>
        </footer>
    );
}
