"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useLanguage();
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const navLinks = [
        { name: t("nav", "apartments"), href: "/apartamenty" },
        { name: t("nav", "rooms"), href: "/pokoje" },
        { name: t("nav", "cottages"), href: "/domki" },
        { name: t("nav", "charter"), href: "/czarter" },
        { name: t("nav", "attractions"), href: "/atrakcje" },
        { name: t("nav", "cooperation"), href: "/wspolpraca" },
        { name: t("nav", "contact"), href: "/kontakt" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const buttonClass = cn(
        "transition-all duration-300 px-4 py-2 rounded-full border text-sm font-medium uppercase tracking-wide",
        isScrolled || !isHomePage
            ? "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            : "border-white/50 text-white hover:border-white hover:bg-white/10"
    );

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,border-color,box-shadow] duration-300 ease-in-out",
                isScrolled || !isHomePage
                    ? "bg-slate-900/95 shadow-lg py-4 border-b border-white/10"
                    : "bg-transparent py-8"
            )}
        >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative h-10 w-40 md:h-19 md:w-77 flex items-center z-50">
                    <Image
                        src="/mazury-holiday/images/logo-poziom.svg"
                        alt="Mazury.Holiday"
                        fill
                        className="object-contain object-left filter brightness-0 invert"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={buttonClass}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 z-50">
                    {/* Desktop Controls */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className={cn("h-6 w-px lg:block hidden", isScrolled || !isHomePage ? "bg-slate-700" : "bg-white/20")} />
                        <LanguageSwitcher className={isScrolled || !isHomePage ? "text-slate-200" : "text-white"} />
                        <div className={cn("h-6 w-px", isScrolled || !isHomePage ? "bg-slate-700" : "bg-white/20")} />
                        <ThemeToggle className={isScrolled || !isHomePage ? "text-slate-200 hover:bg-slate-800" : "text-white hover:bg-white/10"} />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        {/* Removed ThemeToggle from here to avoid clutter, can be added inside menu if needed, 
                            but typically one toggle is enough or it can stay next to hamburger if desired. 
                            Keeping it consistent with desktop: usually user wants easy access. 
                            Let's keep it next to hamburger for now, but ensure visibility. */}
                        <ThemeToggle className={isScrolled || !isHomePage || isMobileMenuOpen ? "text-slate-200" : "text-white hover:bg-white/10"} />

                        <button
                            className={cn(
                                "transition-colors duration-300",
                                isScrolled || !isHomePage || isMobileMenuOpen
                                    ? "text-slate-200 hover:text-amber-500"
                                    : "text-white hover:text-amber-400"
                            )}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={32} className="text-amber-500" />
                            ) : (
                                <Menu size={32} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-start pt-32 gap-6 lg:hidden overflow-y-auto"
                    >
                        {/* Background Pattern or Gradient could be added here for 'rich aesthetics' */}
                        <div className="absolute inset-0 bg-[url('/mazury-holiday/images/pattern.svg')] opacity-5 pointer-events-none" />

                        <div className="flex flex-col items-center w-full px-6 gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.1 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-slate-200 hover:text-amber-500 text-2xl font-medium py-2 w-full text-center transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-4 mt-0 mb-8"
                        >
                            <div className="w-16 h-px bg-slate-800" />
                            <div className="flex items-center gap-4">
                                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Język</span>
                                <LanguageSwitcher className="text-white" dropUp={true} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

