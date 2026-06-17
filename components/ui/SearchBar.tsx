"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { useSiteContext } from "@/context/SiteContext";

export function SearchBar() {
    const { lang, searchQuery, setSearchQuery } = useSiteContext();
    const [isFocused, setIsFocused] = useState(false);

    const placeholders = {
        en: "Search pulses, spices, grains...",
        ar: "ابحث عن البقوليات، التوابل، الحبوب..."
    };

    return (
        <div className={`relative w-full transition-all duration-300 rounded-full border bg-[#FAFAF7]/50 flex items-center px-4 ${
            isFocused 
                ? "border-brand-gold ring-2 ring-brand-gold/20 bg-white max-w-lg" 
                : "border-gray-200 max-w-md"
        }`}>
            <Search className="w-4 h-4 text-brand-green mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={placeholders[lang]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-transparent py-2.5 text-xs text-brand-dark placeholder-gray-400 focus:outline-none"
            />
            {searchQuery && (
                <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 hover:bg-gray-100 rounded-full text-gray-400 hover:text-brand-green cursor-pointer flex-shrink-0"
                    aria-label="Clear search"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            )}
        </div>
    );
}

export default SearchBar;
