"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";
export type Currency = "OMR" | "AED" | "SAR" | "USD";

interface ThemeContextType {
    lang: Language;
    currency: Currency;
    setLang: (lang: Language) => void;
    setCurrency: (currency: Currency) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");
    const [currency, setCurrency] = useState<Currency>("OMR");

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        if (typeof window !== "undefined") {
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = newLang;
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = lang;
        }
    }, [lang]);

    return (
        <ThemeContext.Provider value={{ lang, currency, setLang, setCurrency }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider");
    }
    return context;
}
