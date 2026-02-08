"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <Link href="/" className="relative h-24 w-96 flex items-center mb-8 mx-auto md:mx-0 justify-center md:justify-start">
                        <Image
                            src="/mazury-holiday/images/logo-poziom.svg"
                            alt="Mazury.Holiday"
                            fill
                            className="object-contain object-left filter brightness-0 invert opacity-90"
                        />
                    </Link>
                    <p className="text-base leading-relaxed max-w-sm mb-8 opacity-80 text-slate-400">
                        {t("footer", "brandDesc")}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-white transition-all text-slate-400 border border-slate-700 hover:border-amber-500"
                            aria-label="Facebook"
                        >
                            <Facebook size={22} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-white transition-all text-slate-400 border border-slate-700 hover:border-amber-500"
                            aria-label="Instagram"
                        >
                            <Instagram size={22} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-serif font-bold text-xl mb-6 relative inline-block">
                        {t("footer", "contactTitle")}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group cursor-pointer justify-center md:justify-start">
                            <div className="p-2 rounded-full bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                <MapPin size={20} />
                            </div>
                            <span className="text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                                ul. Portowa 12<br />
                                11-500 Giżycko
                            </span>
                        </li>
                        <li className="flex items-center gap-4 group justify-center md:justify-start">
                            <div className="p-2 rounded-full bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                <Phone size={20} />
                            </div>
                            <a href="tel:+48607241090" className="text-slate-400 hover:text-white transition-colors font-medium">
                                +48 607 241 090
                            </a>
                        </li>
                        <li className="flex items-center gap-4 group justify-center md:justify-start">
                            <div className="p-2 rounded-full bg-slate-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                <Mail size={20} />
                            </div>
                            <a href="mailto:kontakt@mazury.holiday" className="text-slate-400 hover:text-white transition-colors">
                                kontakt@mazury.holiday
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-serif font-bold text-xl mb-6 relative inline-block">
                        {t("footer", "linksTitle")}
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-amber-500 rounded-full"></span>
                    </h3>
                    <ul className="space-y-3">
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
                                    className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-all hover:translate-x-1 group justify-center md:justify-start"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors"></span>
                                    {t("nav", link.id)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} mazury.holiday. {t("footer", "rights")}.
            </div>
        </footer>
    );
}
