"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, MessageSquare, Search } from "lucide-react";
import Link from "next/link";
import { useSiteContext, Currency } from "@/context/SiteContext";
import LogoCircle from "../ui/LogoCircle";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const translations = {
    en: {
        categories: "Product Categories",
        preferences: "Preferences",
        language: "Language",
        currency: "Currency",
        searchPlaceholder: "Search pulses, spices, grains...",
        whatsappBtn: "WhatsApp Business",
        allCategories: "All Categories",
        menuItems: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Our Products", href: "/products" },
            { name: "Bulk Orders", href: "/bulk-orders" },
            { name: "Quality Standards", href: "/quality" },
            { name: "Contact Us", href: "/contact" }
        ],
        categoryItems: [
            { name: "Pulses", href: "/categories/pulses" },
            { name: "Spices & Herbs", href: "/categories/spices-herbs" },
            { name: "Grains & Rice", href: "/categories/grains-rice" },
            { name: "Nuts & Dried Fruits", href: "/categories/nuts-dried-fruits" },
            { name: "Oils & Ghee", href: "/categories/oils-ghee" },
            { name: "Offers", href: "/offers" }
        ]
    },
    ar: {
        categories: "فئات المنتجات",
        preferences: "التفضيلات",
        language: "اللغة",
        currency: "العملة",
        searchPlaceholder: "ابحث عن البقوليات، التوابل، الحبوب...",
        whatsappBtn: "واتساب الأعمال",
        allCategories: "جميع الفئات",
        menuItems: [
            { name: "الرئيسية", href: "/" },
            { name: "من نحن", href: "/about" },
            { name: "منتجاتنا", href: "/products" },
            { name: "طلبات الجملة", href: "/bulk-orders" },
            { name: "معايير الجودة", href: "/quality" },
            { name: "اتصل بنا", href: "/contact" }
        ],
        categoryItems: [
            { name: "البقوليات", href: "/categories/pulses" },
            { name: "التوابل والأعشاب", href: "/categories/spices-herbs" },
            { name: "الحبوب والأرز", href: "/categories/grains-rice" },
            { name: "المكسرات والفواكه المجففة", href: "/categories/nuts-dried-fruits" },
            { name: "الزيوت والسمن", href: "/categories/oils-ghee" },
            { name: "العروض", href: "/offers" }
        ]
    }
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const { lang, currency, setLang, setCurrency, searchQuery, setSearchQuery } = useSiteContext();
    const t = translations[lang];

    const toggleLanguage = () => {
        setLang(lang === "en" ? "ar" : "en");
    };

    const drawerVariants = {
        hidden: { x: lang === "ar" ? "100%" : "-100%" },
        visible: { x: 0, transition: { type: "tween" as const, duration: 0.3 } },
        exit: { x: lang === "ar" ? "100%" : "-100%", transition: { type: "tween" as const, duration: 0.3 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-50 cursor-pointer"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col border-r rtl:border-r-0 rtl:border-l border-gray-200"
                    >
                        {/* Header Section */}
                        <div className="p-4 border-b border-gray-150 flex justify-between items-center">
                            <Link href="/" onClick={onClose} className="flex items-center space-x-2.5 rtl:space-x-reverse">
                                <LogoCircle size="mobile" />
                                <div className="flex flex-col text-left rtl:text-right">
                                    <span className="font-arabic font-bold text-xs text-brand-green leading-none mb-0.5">
                                        الديار العربية الوطنية ش ش و
                                    </span>
                                    <span className="font-sans font-extrabold text-[10px] tracking-tight text-brand-dark leading-none uppercase">
                                        Diyar Arabia National SPC
                                    </span>
                                </div>
                            </Link>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Search Bar in Mobile Menu */}
                        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                            <div className="relative w-full rounded-full border border-gray-200 bg-white flex items-center px-3">
                                <Search className="w-4 h-4 text-brand-green mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t.searchPlaceholder}
                                    className="w-full bg-transparent py-2 text-xs text-brand-dark focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Nav Links Body */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-6">
                            {/* Primary Navigation Links */}
                            <div className="space-y-1">
                                {t.menuItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        onClick={onClose}
                                        className="block px-3 py-2.5 text-xs font-bold rounded-lg text-gray-700 hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Product Categories */}
                            <div className="space-y-2 border-t border-gray-100 pt-5">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3">
                                    {t.categories}
                                </h4>
                                <div className="space-y-0.5">
                                    <Link
                                        href="/categories"
                                        onClick={onClose}
                                        className="block px-3 py-2 text-xs font-semibold rounded-lg text-brand-green hover:bg-brand-green/10 transition-colors"
                                    >
                                        {t.allCategories}
                                    </Link>
                                    {t.categoryItems.map((cat, idx) => (
                                        <Link
                                            key={idx}
                                            href={cat.href}
                                            onClick={onClose}
                                            className="block px-3 py-2 text-xs font-semibold rounded-lg text-gray-600 hover:bg-brand-green/10 hover:text-brand-green transition-colors"
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Preferences & Selectors */}
                            <div className="border-t border-gray-100 pt-5 space-y-4">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3">
                                    {t.preferences}
                                </h4>
                                
                                {/* Language */}
                                <div className="flex justify-between items-center px-3 text-xs">
                                    <span className="text-gray-500 font-medium">{t.language}</span>
                                    <button 
                                        onClick={toggleLanguage}
                                        className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full font-bold hover:bg-brand-green/20 transition-colors"
                                    >
                                        {lang === "en" ? "العربية" : "English"}
                                    </button>
                                </div>

                                {/* Currency */}
                                <div className="flex justify-between items-center px-3 text-xs">
                                    <span className="text-gray-500 font-medium">{t.currency}</span>
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
                                href="https://wa.me/96896912000" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-brand-green hover:bg-brand-topbar text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors"
                            >
                                <MessageSquare className="w-4 h-4 fill-current" />
                                <span>{t.whatsappBtn}</span>
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;
