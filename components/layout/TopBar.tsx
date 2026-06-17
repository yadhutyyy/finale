"use client";

import React from "react";
import { Globe, MessageSquare, ChevronDown } from "lucide-react";
import { useSiteContext, Currency } from "@/context/SiteContext";

const translations = {
    en: {
        tagline: "Your Food Supply Partner • Muscat, Oman",
        whatsapp: "WhatsApp",
    },
    ar: {
        tagline: "شريكك في التوريد الغذائي • مسقط، عُمان",
        whatsapp: "واتساب",
    }
};

export function TopBar() {
    const { lang, currency, setLang, setCurrency } = useSiteContext();
    const t = translations[lang];

    const toggleLanguage = () => {
        setLang(lang === "en" ? "ar" : "en");
    };

    return (
        <div className="bg-brand-topbar text-brand-gold text-xs h-9 overflow-hidden border-b border-white/5 relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
                {/* Left: Tagline */}
                <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
                    {t.tagline}
                </span>

                {/* Right: Selectors & WhatsApp */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    {/* Language Switch */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-1.5 rtl:space-x-reverse hover:text-white transition-colors cursor-pointer font-bold"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{lang === "en" ? "عربي" : "EN"}</span>
                    </button>

                    <span className="text-white/20 select-none">|</span>

                    {/* Currency Selector */}
                    <div className="relative group">
                        <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-white transition-colors cursor-pointer font-bold">
                            <span>{currency}</span>
                            <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1 w-20 bg-white text-brand-dark rounded-md shadow-lg border border-gray-150 hidden group-hover:block transition-all duration-200 z-50">
                            {(["OMR", "AED", "SAR", "USD"] as Currency[]).map((cur) => (
                                <button
                                    key={cur}
                                    onClick={() => setCurrency(cur)}
                                    className={`w-full text-left rtl:text-right px-3 py-1.5 text-[11px] hover:bg-brand-green/10 hover:text-brand-green transition-colors block cursor-pointer ${
                                        currency === cur ? "font-bold text-brand-green" : "text-gray-650"
                                    }`}
                                >
                                    {cur}
                                </button>
                            ))}
                        </div>
                    </div>

                    <span className="text-white/20 select-none">|</span>

                    {/* WhatsApp Quick Link */}
                    <a
                        href="https://wa.me/96896912000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 rtl:space-x-reverse text-brand-gold hover:text-white transition-colors font-medium"
                    >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">{t.whatsapp}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
