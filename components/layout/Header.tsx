"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    motion, 
    AnimatePresence, 
    useScroll, 
    useMotionValueEvent 
} from "framer-motion";
import { 
    User, 
    Heart, 
    ShoppingBag, 
    Menu 
} from "lucide-react";
import { useSiteContext } from "@/context/SiteContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import LogoCircle from "../ui/LogoCircle";
import SearchBar from "../ui/SearchBar";
import TopBar from "./TopBar";
import CategoryNav from "./CategoryNav";
import MobileMenu from "./MobileMenu";
import CartDrawer from "../ui/CartDrawer";
import toast from "react-hot-toast";

const headerTranslations = {
    en: {
        account: "Account",
        wishlist: "Wishlist",
        cart: "Cart",
        companyName: "Diyar Arabia National SPC",
        companyNameAr: "الديار العربية الوطنية ش ش و",
        tagline: "Your Food Supply Partner",
        comingSoon: "Coming soon — we're working on it!"
    },
    ar: {
        account: "الحساب",
        wishlist: "المفضلة",
        cart: "السلة",
        companyName: "Diyar Arabia National SPC",
        companyNameAr: "الديار العربية الوطنية ش ش و",
        tagline: "Your Food Supply Partner",
        comingSoon: "قريباً — نحن نعمل على ذلك!"
    }
};

export function Header() {
    const { lang } = useSiteContext();
    const { cartCount, setIsCartOpen } = useCart();
    const { wishlistCount } = useWishlist();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 80);
    });

    const t = headerTranslations[lang];

    const handleAccountClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toast(t.comingSoon, { icon: "👤" });
    };

    return (
        <header className="w-full sticky top-0 z-50 flex flex-col transition-all duration-300">
            {/* Zone 1 — Top Utility Bar */}
            <AnimatePresence initial={false}>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 36, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <TopBar />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Zone 2 — Main Header */}
            <motion.div 
                animate={{ height: isScrolled ? 56 : 80 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-b border-gray-150/40 shadow-sm flex items-center w-full"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center gap-4">
                    {/* Left: Logo + Name Lockup */}
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse flex-shrink-0 group">
                        <LogoCircle size={isScrolled ? "mobile" : "header"} />
                        
                        {/* Name Lockup */}
                        <div className="flex flex-col text-left rtl:text-right">
                            <span className="font-arabic font-semibold text-[13px] text-[#4A4A4A] leading-none mb-0.5 tracking-wide">
                                {t.companyNameAr}
                            </span>
                            <span className="font-sans font-bold text-[15px] text-[#1A1A1A] leading-none">
                                {t.companyName}
                            </span>
                            <span className="font-sans font-normal text-[11px] text-[#7A7A7A] tracking-wider uppercase mt-1 leading-none">
                                {t.tagline}
                            </span>
                        </div>
                    </Link>

                    {/* Center: Search Bar */}
                    <div className="hidden md:flex flex-grow justify-center max-w-lg transition-all duration-300">
                        <SearchBar />
                    </div>

                    {/* Right: Icon Cluster */}
                    <div className="flex items-center space-x-6 rtl:space-x-reverse flex-shrink-0">
                        {/* Account */}
                        <Link 
                            href="/account" 
                            onClick={handleAccountClick}
                            className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors"
                        >
                            <User className="w-5 h-5 group-hover:scale-105 transition-transform" />
                            <span className="text-[10px] font-semibold mt-1 uppercase tracking-wider">{t.account}</span>
                        </Link>

                        {/* Wishlist */}
                        <Link 
                            href="/wishlist" 
                            className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors relative"
                        >
                            <div className="relative">
                                <Heart className="w-5 h-5 group-hover:scale-105 transition-transform" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-dark font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                        {wishlistCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-semibold mt-1 uppercase tracking-wider">{t.wishlist}</span>
                        </Link>

                        {/* Cart */}
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="flex flex-col items-center group text-gray-500 hover:text-brand-green transition-colors relative cursor-pointer"
                        >
                            <div className="relative">
                                <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-brand-dark font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-[10px] font-semibold mt-1 uppercase tracking-wider">{t.cart}</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-1.5 text-gray-500 hover:text-brand-green hover:bg-gray-100 rounded-lg cursor-pointer"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Zone 3 — Category Navigation Bar */}
            <CategoryNav />

            {/* Slide-out Cart Drawer */}
            <CartDrawer />

            {/* Mobile Navigation Drawer */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
}

export default Header;
