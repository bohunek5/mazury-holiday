"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityState {
    highContrast: boolean;
    largeText: boolean;
    dyslexiaFont: boolean;
    highlightLinks: boolean;
    stopAnimations: boolean;
    grayscale: boolean;
}

interface AccessibilityContextType {
    state: AccessibilityState;
    toggleSetting: (key: keyof AccessibilityState) => void;
    reset: () => void;
}

const defaultState: AccessibilityState = {
    highContrast: false,
    largeText: false,
    dyslexiaFont: false,
    highlightLinks: false,
    stopAnimations: false,
    grayscale: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<AccessibilityState>(defaultState);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('wcag-settings');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setState(prev => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error("Error parsing WCAG settings", e);
            }
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem('wcag-settings', JSON.stringify(state));

        const html = document.documentElement;
        
        html.classList.toggle('wcag-high-contrast', state.highContrast);
        html.classList.toggle('wcag-large-text', state.largeText);
        html.classList.toggle('wcag-dyslexia', state.dyslexiaFont);
        html.classList.toggle('wcag-highlight-links', state.highlightLinks);
        html.classList.toggle('wcag-stop-animations', state.stopAnimations);
        html.classList.toggle('wcag-grayscale', state.grayscale);
        
    }, [state, mounted]);

    const toggleSetting = (key: keyof AccessibilityState) => {
        setState(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const reset = () => {
        setState(defaultState);
    };

    return (
        <AccessibilityContext.Provider value={{ state, toggleSetting, reset }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
}
