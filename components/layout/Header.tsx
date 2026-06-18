"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { User, Heart, ShoppingBag, Menu, X, Search, Globe, MessageSquare } from "lucide-react";
import { useSiteContext, BRAND } from "@/context/SiteContext";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import Cart from "../Cart";
import toast from "react-hot-toast";

const Logo = ({ size }: { size: "mobile" | "header" }) => (
  <div className={`${size === "mobile" ? "w-10 h-10" : "w-12 h-12"} rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-[#E8B84B] shadow-xs flex-shrink-0 hover:ring-3 hover:ring-[#E8B84B]/30 transition-all duration-300`}>
    <Image src="/assets/logo-1.png" alt={BRAND.nameEn} width={size === "mobile" ? 40 : 48} height={size === "mobile" ? 40 : 48} className="w-full h-full object-contain p-1" priority />
  </div>
);

export function Header() {
  const { lang, currency, setLang, setCurrency, searchQuery, setSearchQuery } = useSiteContext();
  const { setIsCartOpen, cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 80));

  const isAr = lang === "ar";
  const t = {
    tagline: isAr ? "شريكك في التوريد الغذائي" : "Your Food Supply Partner · Muscat, Oman",
    search: isAr ? "ابحث عن البقوليات، التوابل..." : "Search pulses, spices, grains...",
    categories: isAr
      ? ["الكل", "بقوليات", "توابل وأعشاب", "حبوب وأرز", "مكسرات وفواكه مجففة", "زيوت وسمن", "طلبات الجملة", "عروض"]
      : ["All Categories", "Pulses", "Spices & Herbs", "Grains & Rice", "Nuts & Dried Fruits", "Oils & Ghee", "Bulk Orders", "Offers"],
    comingSoon: isAr ? "قريباً — نحن نعمل على ذلك!" : "Coming soon — we're working on it!"
  };

  const cats = ["all", "pulses", "spices-herbs", "grains-rice", "nuts-dried-fruits", "oils-ghee", "bulk-orders", "offers"];

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col bg-white">
      {/* Zone 1 — Top utility bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 36, opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-[#3D5229] text-xs font-semibold text-[#E8B84B] px-4 flex justify-between items-center overflow-hidden">
            <span className="uppercase text-[10px] tracking-wider font-sans">{t.tagline}</span>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button onClick={() => setLang(isAr ? "en" : "ar")} className="hover:text-white cursor-pointer">{isAr ? "EN" : "عربي"}</button>
              <span className="text-white/20">|</span>
              <select value={currency} onChange={(e) => setCurrency(e.target.value as any)} className="bg-transparent text-[#E8B84B] border-none font-bold focus:outline-none cursor-pointer">
                {["OMR", "AED", "SAR", "USD"].map(c => <option key={c} value={c} className="text-black">{c}</option>)}
              </select>
              <span className="text-white/20">|</span>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1"><MessageSquare className="w-3.5 h-3.5 fill-current" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zone 2 — Main Header */}
      <div className={`border-b border-gray-150/40 shadow-sm flex items-center w-full transition-all duration-200 ${isScrolled ? "h-14" : "h-20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo size={isScrolled ? "mobile" : "header"} />
            <div className="flex flex-col text-left rtl:text-right">
              <span className="font-arabic text-[13px] text-[#4A4A4A] leading-none mb-0.5">{BRAND.nameAr}</span>
              <span className="font-sans font-bold text-[15px] text-[#1A1A1A] leading-none">{BRAND.nameEn}</span>
              <span className="font-sans text-[11px] text-[#7A7A7A] uppercase tracking-wider mt-1 leading-none">{BRAND.tagline}</span>
            </div>
          </Link>

          <div className="hidden md:flex flex-grow max-w-md relative">
            <Search className="w-4 h-4 text-[#5C7A3E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.search} className="w-full bg-gray-50 border border-gray-250/60 rounded-full py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent focus:outline-none" />
          </div>

          <div className="flex items-center space-x-5 rtl:space-x-reverse">
            <button onClick={() => toast(t.comingSoon, { icon: "👤" })} className="flex flex-col items-center text-gray-500 hover:text-brand-green cursor-pointer"><User className="w-5 h-5" /><span className="text-[9px] font-bold mt-1 uppercase tracking-wider">{isAr ? "الحساب" : "Account"}</span></button>
            <Link href="/wishlist" className="flex flex-col items-center text-gray-500 hover:text-brand-green relative"><Heart className="w-5 h-5" />{wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-[#E8B84B] text-brand-dark font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">{wishlistCount}</span>}<span className="text-[9px] font-bold mt-1 uppercase tracking-wider">{isAr ? "المفضلة" : "Wishlist"}</span></Link>
            <button onClick={() => setIsCartOpen(true)} className="flex flex-col items-center text-gray-500 hover:text-brand-green relative cursor-pointer"><ShoppingBag className="w-5 h-5" />{cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#E8B84B] text-brand-dark font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center border border-white">{cartCount}</span>}<span className="text-[9px] font-bold mt-1 uppercase tracking-wider">{isAr ? "السلة" : "Cart"}</span></button>
            <button onClick={() => setIsMobileOpen(true)} className="md:hidden text-gray-500 hover:text-brand-green cursor-pointer"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </div>

      {/* Zone 3 — Category nav */}
      <div className="bg-[#F4F7F0] h-11 border-b border-gray-150/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center overflow-x-auto whitespace-nowrap scrollbar-none space-x-6 rtl:space-x-reverse">
          {t.categories.map((c, i) => {
            const path = cats[i] === "all" ? "/" : `/categories/${cats[i]}`;
            const active = pathname === path;
            return (
              <Link key={c} href={path} className={`text-xs font-semibold h-full flex items-center px-1 border-b-2 transition-all duration-150 ${active ? "border-[#E8B84B] text-[#5C7A3E]" : "border-transparent text-gray-600 hover:text-[#5C7A3E]"}`}>{c}</Link>
            );
          })}
        </div>
      </div>

      <Cart />

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black z-50 cursor-pointer md:hidden" />
            <motion.div initial={{ x: isAr ? "100%" : "-100%" }} animate={{ x: 0 }} exit={{ x: isAr ? "100%" : "-100%" }} transition={{ type: "tween" as const, duration: 0.3 }} className="fixed top-0 bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden border-r rtl:border-l border-gray-200">
              <div className="p-4 border-b border-gray-150 flex justify-between items-center">
                <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center space-x-2.5 rtl:space-x-reverse"><Logo size="mobile" /><div className="flex flex-col text-left rtl:text-right"><span className="font-arabic font-bold text-xs text-brand-green leading-none mb-0.5">{BRAND.nameAr}</span><span className="font-sans font-bold text-[10px] text-brand-dark leading-none">{BRAND.nameEn}</span></div></Link>
                <button onClick={() => setIsMobileOpen(false)} className="text-gray-400 hover:text-brand-green cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center relative"><Search className="w-4 h-4 text-[#5C7A3E] absolute left-7 top-1/2 -translate-y-1/2" /><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.search} className="w-full bg-white border border-gray-250/60 rounded-full py-1.5 pl-9 pr-4 text-xs focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" /></div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs font-semibold text-gray-700">
                {t.categories.map((c, i) => (
                  <Link key={c} href={cats[i] === "all" ? "/" : `/categories/${cats[i]}`} onClick={() => setIsMobileOpen(false)} className="block py-2.5 px-2 hover:bg-brand-green/10 rounded-lg">{c}</Link>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col space-y-3">
                <button onClick={() => { setLang(isAr ? "en" : "ar"); setIsMobileOpen(false); }} className="w-full py-2 bg-gray-200 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer"><Globe className="w-4 h-4" /><span>{isAr ? "English" : "العربية"}</span></button>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#25D366] text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-2"><MessageSquare className="w-4 h-4 fill-current" /><span>{isAr ? "واتساب الأعمال" : "WhatsApp Business"}</span></a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
