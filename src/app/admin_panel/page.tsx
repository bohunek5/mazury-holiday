"use client";

import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { Lock, User } from 'lucide-react';

export default function AdminPanelPage() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const auth = localStorage.getItem('mh_admin_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login === 'k@rol' && password === '123') {
            setIsAuthenticated(true);
            localStorage.setItem('mh_admin_auth', 'true');
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isMounted) return null;

    if (isAuthenticated) {
        return <Dashboard onLogout={() => {
            setIsAuthenticated(false);
            localStorage.removeItem('mh_admin_auth');
        }} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 bg-cover bg-center" style={{ backgroundImage: 'url(/images/skorupki/skorupki_1.webp)' }}>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-0"></div>
            
            <div className="relative z-10 w-full max-w-md p-8 bg-white/10 dark:bg-black/50 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Mazury Holiday</h1>
                    <p className="text-slate-300">Panel Administratora</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                <User size={20} />
                            </div>
                            <input
                                type="text"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                placeholder="Login"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                <Lock size={20} />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                placeholder="Hasło"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-400 text-sm text-center font-medium animate-in fade-in slide-in-from-top-1">
                            Nieprawidłowy login lub hasło
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 active:scale-[0.98]"
                    >
                        Zaloguj się
                    </button>
                </form>
            </div>
        </div>
    );
}
