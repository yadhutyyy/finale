"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    motion, 
    AnimatePresence, 
    useScroll, 
    useMotionValueEvent 
} from "framer-motion";
import { 
    Search, 
    User, 
    Heart, 
    ShoppingBag, 
    Menu, 
    X, 
    ChevronDown, 
    MessageSquare,
    Globe
} from "lucide-react";
import { useThemeContext, Language, Currency } from "./ThemeContext";

const translations = {
    en: {
        topbarText: "Your Food Supply Partner • Oman",
        searchPlaceholder: "Search spices, pulses, grains...",
        account: "Account",
        wishlist: "Wishlist",
        cart: "Cart",
        allCategories: "All Categories",
        categories: [
            "Pulses",
            "Spices & Herbs",
            "Grains & Rice",
            "Nuts & Dried Fruits",
            "Oils & Ghee",
            "Organic Range",
            "Bulk Orders",
            "Offers"
        ]
    },
    ar: {
        topbarText: "شريكك في التوريد الغذائي • عُمان",
        searchPlaceholder: "ابحث عن التوابل، البقوليات، الحبوب...",
        account: "الحساب",
        wishlist: "المفضلة",
        cart: "السلة",
        allCategories: "جميع الفئات",
        categories: [
            "البقوليات",
            "التوابل والأعشاب",
            "الحبوب والأرز",
            "المكسرات والفواكه المجففة",
            "الزيوت والسمن",
            "المجموعة العضوية",
            "طلبات الجملة",
            "العروض"
        ]
    }
};

export function Header() {
    const { lang, currency, setLang, setCurrency } = useThemeContext();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [cartBounce, setCartBounce] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(2);
    const [cartCount, setCartCount] = useState(3);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80);
    });

    const t = translations[lang];

    const toggleLanguage = () => {
        setLang(lang === "en" ? "ar" : "en");
    };

    const handleCartClick = () => {
        setCartBounce(true);
        setTimeout(() => setCartBounce(false), 500);
    };

    return (
        <header className="w-full sticky top-0 z-50 flex flex-col transition-all duration-300">
            {/* Zone 1 — Top Bar */}
            <AnimatePresence initial={false}>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 36, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="bg-brand-topbar text-brand-gold text-xs overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
                            {/* Left: Tagline */}
                            <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
                                {t.topbarText}
                            </span>

                            {/* Right: Selectors & Language */}
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                {/* Language Toggle */}
                                <button 
                                    onClick={toggleLanguage}
                                    className="flex items-center space-x-1.5 rtl:space-x-reverse hover:text-white transition-colors cursor-pointer font-medium"
                                >
                                    <Globe className="w-3.5 h-3.5" />
                                    <span>{lang === "en" ? "عربي" : "EN"}</span>
                                </button>

                                <span className="text-white/30 text-sm">|</span>

                                {/* Currency Selector */}
                                <div className="relative group">
                                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-white transition-colors cursor-pointer font-medium">
                                        <span>{currency}</span>
                                        <ChevronDown className="w-3 h-3" />
                                    </button>
                                    <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1 w-20 bg-white text-brand-dark rounded-md shadow-lg border border-gray-100 hidden group-hover:block transition-all duration-200 z-50">
                                        {(["OMR", "AED", "SAR", "USD"] as Currency[]).map((cur) => (
                                            <button
                                                key={cur}
                                                onClick={() => setCurrency(cur)}
                                                className={`w-full text-left rtl:text-right px-3 py-1.5 text-[11px] hover:bg-brand-green/10 hover:text-brand-green transition-colors block cursor-pointer ${
                                                    currency === cur ? "font-bold text-brand-green" : ""
                                                }`}
                                            >
                                                {cur}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <span className="text-white/30 text-sm">|</span>

                                {/* WhatsApp Link */}
                                <a 
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96824501234"}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-1 rtl:space-x-reverse text-brand-gold hover:text-white transition-colors"
                                >
                                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                                    <span className="hidden sm:inline font-medium">WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Zone 2 — Main Header */}
            <div className="bg-white border-b border-gray-150/40 shadow-xs h-20 sm:h-[88px] flex items-center transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center gap-4">
                    
                    {/* Logo & Brand Lockup */}
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0 group">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105">
                            <Image 
                                src="/logo-1.png" 
                                alt="Al Diyar Al Arabia Logo" 
                                fill 
                                sizes="56px"
                                className="object-contain" 
                                priority
                            />
                        </div>
                        <div className="flex flex-col text-left rtl:text-right">
                            <span className="font-arabic font-extrabold text-sm sm:text-base text-brand-green leading-none mb-0.5 tracking-wide">
                                الديار العربية الوطنية <span className="text-[9px] sm:text-[10px] font-medium text-brand-dark">ش ش و</span>
                            </span>
                            <span className="font-sans font-extrabold text-[11px] sm:text-[13px] tracking-tight text-brand-dark leading-none uppercase">
                                Al Diyar Al Arabia <span className="text-[8px] sm:text-[9px] font-semibold text-gray-500 lowercase">National SPC</span>
                            </span>
                            <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-brand-gold uppercase mt-1 leading-none">
                                Your Food Supply Partner
                            </span>
                        </div>
                    </Link>

                    {/* Center Search Bar */}
                    <div className="hidden md:flex flex-grow justify-center max-w-lg transition-all duration-300">
                        <div className={`relative w-full transition-all duration-300 rounded-full border bg-gray-50/50 flex items-center px-4 ${
                            isSearchFocused 
                                ? "border-brand-gold ring-2 ring-brand-gold/20 bg-white max-w-xl" 
                                : "border-gray-200 max-w-md"
                        }`}>
                            <Search className="w-4 h-4 text-brand-green mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
                            <input 
                                type="text"
                                placeholder={t.searchPlaceholder}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="w-full bg-transparent py-2.5 text-xs text-brand-dark placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Right Icon Cluster */}
                    <div className="flex items-center space-x-6 rtl:space-x-reverse flex-shrink-0">
                        {/* Account */}
                        <Link href="/account" className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors">
                            <User className="w-5 h-5 group-hover:scale-105 transition-transform" />
                            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider">{t.account}</span>
                        </Link>

                        {/* Wishlist */}
                        <Link href="/wishlist" className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors relative">
                            <div className="relative">
                                <Heart className="w-5 h-5 group-hover:scale-105 transition-transform" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-dark font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                        {wishlistCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider">{t.wishlist}</span>
                        </Link>

                        {/* Cart */}
                        <button 
                            onClick={handleCartClick}
                            className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors relative cursor-pointer"
                        >
                            <motion.div 
                                animate={cartBounce ? { y: [0, -6, 2, -2, 0] } : {}}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-brand-green text-white font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                        {cartCount}
                                    </span>
                                )}
                            </motion.div>
                            <span className="text-[10px] font-medium mt-1 uppercase tracking-wider">{t.cart}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-1 text-gray-500 hover:text-brand-green hover:bg-gray-150/40 rounded-lg cursor-pointer"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>

            {/* Zone 3 — Category Nav Bar */}
            <AnimatePresence initial={false}>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 44, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="bg-[#F4F7F0] border-b border-gray-150/30 overflow-hidden hidden md:block"
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                            {/* All Categories Trigger */}
                            <button className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-brand-green hover:text-brand-topbar transition-colors cursor-pointer">
                                <Menu className="w-4 h-4" />
                                <span className="uppercase tracking-wider">{t.allCategories}</span>
                            </button>

                            {/* Category Items */}
                            <nav className="flex items-center space-x-6 rtl:space-x-reverse overflow-x-auto no-scrollbar scroll-smooth">
                                {t.categories.map((cat, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/categories/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                        className="text-[11px] uppercase tracking-wider font-semibold text-gray-600 hover:text-brand-green py-3 border-b-2 border-transparent hover:border-brand-gold transition-all duration-250 block whitespace-nowrap"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Slide-Over Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black z-50 cursor-pointer"
                        />

                        {/* Mobile Drawer */}
                        <motion.div
                            initial={{ x: lang === "ar" ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: lang === "ar" ? "100%" : "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <Image src="/logo-1.png" alt="Logo" width={40} height={40} />
                                    <div className="flex flex-col text-left rtl:text-right">
                                        <span className="font-arabic font-bold text-xs text-brand-green leading-none">
                                            الديار العربية الوطنية
                                        </span>
                                        <span className="font-sans font-bold text-[10px] tracking-tight text-brand-dark leading-none uppercase">
                                            Al Diyar Al Arabia
                                        </span>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-brand-green cursor-pointer"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Mobile Search */}
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="relative w-full rounded-lg border border-gray-200 bg-white flex items-center px-3">
                                    <Search className="w-4 h-4 text-brand-green mr-2 rtl:mr-0 rtl:ml-2" />
                                    <input 
                                        type="text"
                                        placeholder={t.searchPlaceholder}
                                        className="w-full bg-transparent py-2 text-xs text-brand-dark focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Drawer Links */}
                            <div className="flex-grow overflow-y-auto p-4 space-y-6">
                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                                        {lang === "en" ? "Product Categories" : "فئات المنتجات"}
                                    </h4>
                                    <div className="space-y-1">
                                        {t.categories.map((cat, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/categories/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-3 py-2 text-xs font-semibold rounded-lg text-gray-700 hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                                            >
                                                {cat}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 space-y-4">
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                                        {lang === "en" ? "Preferences" : "التفضيلات"}
                                    </h4>
                                    
                                    {/* Language Switch */}
                                    <div className="flex justify-between items-center px-3 text-xs">
                                        <span className="text-gray-500 font-medium">{lang === "en" ? "Language" : "اللغة"}</span>
                                        <button 
                                            onClick={toggleLanguage}
                                            className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full font-bold hover:bg-brand-green/20 transition-colors"
                                        >
                                            {lang === "en" ? "العربية" : "English"}
                                        </button>
                                    </div>

                                    {/* Currency Switch */}
                                    <div className="flex justify-between items-center px-3 text-xs">
                                        <span className="text-gray-500 font-medium">{lang === "en" ? "Currency" : "العملة"}</span>
                                        <select 
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value as Currency)}
                                            className="bg-gray-50 border border-gray-200 rounded-md py-1 px-2 font-semibold text-brand-green focus:outline-none"
                                        >
                                            <option value="OMR">OMR</option>
                                            <option value="AED">AED</option>
                                            <option value="SAR">SAR</option>
                                            <option value="USD">USD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Drawer Footer */}
                            <div className="p-4 border-t border-gray-100 bg-gray-50">
                                <a 
                                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96824501234"}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full py-3 bg-brand-green hover:bg-brand-topbar text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors"
                                >
                                    <MessageSquare className="w-4 h-4 fill-current" />
                                    <span>{lang === "en" ? "WhatsApp Business" : "واتساب الأعمال"}</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;
