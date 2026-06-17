"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";
export type Currency = "OMR" | "AED" | "SAR" | "USD";

interface SiteContextType {
    lang: Language;
    currency: Currency;
    setLang: (lang: Language) => void;
    setCurrency: (currency: Currency) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>("en");
    const [currency, setCurrencyState] = useState<Currency>("OMR");
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("lang") as Language;
            const savedCurrency = localStorage.getItem("currency") as Currency;
            if (savedLang) {
                setLangState(savedLang);
                document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
                document.documentElement.lang = savedLang;
            }
            if (savedCurrency) setCurrencyState(savedCurrency);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        if (typeof window !== "undefined") {
            localStorage.setItem("lang", newLang);
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = newLang;
        }
    };

    const setCurrency = (newCurrency: Currency) => {
        setCurrencyState(newCurrency);
        if (typeof window !== "undefined") {
            localStorage.setItem("currency", newCurrency);
        }
    };

    return (
        <SiteContext.Provider value={{ lang, currency, setLang, setCurrency, searchQuery, setSearchQuery }}>
            {children}
        </SiteContext.Provider>
    );
}

export function useSiteContext() {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error("useSiteContext must be used within a SiteProvider");
    }
    return context;
}
