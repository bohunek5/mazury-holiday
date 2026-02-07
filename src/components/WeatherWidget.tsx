"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherData {
    temp: string;
    condition: string;
    code: string;
}

export function WeatherWidget({ className }: { className?: string }) {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const res = await fetch("https://wttr.in/Gizycko?format=j1");
                const data = await res.json();
                const current = data.current_condition[0];
                setWeather({
                    temp: current.temp_C,
                    condition: current.weatherDesc[0].value,
                    code: current.weatherCode,
                });
            } catch (error) {
                console.error("Failed to fetch weather:", error);
                // Fallback to a mock if API fails
                setWeather({
                    temp: "-2",
                    condition: "Cloudy",
                    code: "122",
                });
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
        // Refresh every 30 minutes
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const getIcon = (code: string) => {
        const c = parseInt(code);
        if (c === 113) return <Sun className="text-amber-400 group-hover:rotate-12 transition-transform" size={20} />;
        if ([116, 119, 122].includes(c)) return <Cloud className="text-slate-400" size={20} />;
        if ([263, 266, 293, 296, 299, 302, 305, 308, 353, 356, 359].includes(c)) return <CloudRain className="text-blue-400" size={20} />;
        if ([323, 326, 329, 332, 335, 338, 368, 371, 392, 395].includes(c)) return <CloudSnow className="text-white" size={20} />;
        if ([200, 386, 389, 391].includes(c)) return <CloudLightning className="text-yellow-400" size={20} />;
        return <Wind className="text-slate-300" size={20} />;
    };

    if (loading) return <div className="w-12 h-6 bg-slate-800 animate-pulse rounded-full" />;

    return (
        <AnimatePresence>
            {weather && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group cursor-default hover:bg-slate-800/60 transition-colors",
                        className
                    )}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {getIcon(weather.code)}
                    </motion.div>
                    <span className="text-sm font-semibold text-white tracking-tight">
                        {weather.temp}°C
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest hidden xl:inline">
                        Giżycko
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
