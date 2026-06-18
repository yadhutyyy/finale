"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Search, Globe, MessageSquare } from "lucide-react";
import { useSiteContext, BRAND } from "@/context/SiteContext";

const Logo = ({ size }: { size: "mobile" | "header" }) => (
  <div style={{
    width: size === "mobile" ? '40px' : '56px',
    height: size === "mobile" ? '40px' : '56px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #E8B84B',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  }}>
    <img src="/logo-1.png" alt="Diyar Arabia" style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
  </div>
);

function HeaderContent() {
  const { lang, setLang, searchQuery, setSearchQuery } = useSiteContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCat = searchParams.get("category");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 80));

  const isAr = lang === "ar";
  const t = {
    tagline: isAr ? "شريكك في التوريد الغذائي" : "Your Food Supply Partner · Muscat, Oman",
    search: isAr ? "ابحث عن المنتجات..." : "Search pulses, spices, grains...",
    categories: isAr
      ? ["الأرز والحبوب", "البقوليات", "التوابل والأعشاب", "المكسرات والفواكه المجففة", "الزيوت والسمن", "المجموعة العضوية", "طلب بالجملة"]
      : ["Grains & Rice", "Pulses", "Spices & Herbs", "Nuts & Dried Fruits", "Oils & Ghee", "Organic Range", "Bulk Enquiry"]
  };

  const cats = ["grains-rice", "pulses", "spices-herbs", "nuts-dried-fruits", "oils-ghee", "organic-range", "bulk-enquiry"];
  const catPaths = [
    "/?category=grains-rice",
    "/?category=pulses",
    "/?category=spices-herbs",
    "/?category=nuts-dried-fruits",
    "/?category=oils-ghee",
    "/?category=organic-range",
    "/contact"
  ];

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
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1"><MessageSquare className="w-3.5 h-3.5 fill-current" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zone 2 — Main Header */}
      <div className={`border-b border-gray-150/40 shadow-sm flex items-center w-full transition-all duration-200 ${isScrolled ? "h-14" : "h-20"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center gap-4">
          <Link href="/">
            {isAr ? (
              /* RTL Mode layout */
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexDirection: 'row-reverse' }}>
                {/* Circle logo */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  border: '2px solid #E8B84B', overflow: 'hidden',
                  backgroundColor: '#fff', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <img src="/logo-1.png" alt="Al Diyar Al Arabia" style={{ width: '88%', height: '88%', objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', textAlign: 'right' }}>
                  {/* Arabic FIRST and LARGER in RTL mode */}
                  <div style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#1A1A1A',
                    direction: 'rtl',
                    letterSpacing: '0.02em'
                  }}>
                    الديار العربية الوطنية ش ش و
                  </div>
                  {/* English smaller in RTL mode */}
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#4A4A4A',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase'
                  }}>
                    AL DIYAR AL ARABIA NATIONAL SPC
                  </div>
                  <div style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '10px',
                    color: '#7A7A7A',
                    direction: 'rtl',
                    letterSpacing: '0.05em'
                  }}>
                    شريكك في توريد الغذاء
                  </div>
                </div>
              </div>
            ) : (
              /* LTR Mode layout */
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Circle logo */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  border: '2px solid #E8B84B', overflow: 'hidden',
                  backgroundColor: '#fff', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <img src="/logo-1.png" alt="Al Diyar Al Arabia" style={{ width: '88%', height: '88%', objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {/* Arabic — RIGHT aligned, proper RTL */}
                  <div style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#3D5229',
                    direction: 'rtl',
                    textAlign: 'right',
                    letterSpacing: '0.02em',
                    lineHeight: '1.4'
                  }}>
                    الديار العربية الوطنية ش ش و
                  </div>
                  {/* English — LEFT aligned, bold, ALL CAPS */}
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#1A1A1A',
                    letterSpacing: '0.04em',
                    lineHeight: '1.2',
                    textTransform: 'uppercase'
                  }}>
                    AL DIYAR AL ARABIA NATIONAL SPC
                  </div>
                  {/* Tagline */}
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '10px',
                    fontWeight: '400',
                    color: '#7A7A7A',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    lineHeight: '1.4'
                  }}>
                    Your Food Supply Partner
                  </div>
                </div>
              </div>
            )}
          </Link>

          <div className="hidden md:flex flex-grow max-w-md relative">
            <Search className="w-4 h-4 text-[#5C7A3E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.search} className="w-full bg-gray-50 border border-gray-250/60 rounded-full py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-[#E8B84B] focus:border-transparent focus:outline-none" />
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Enquire Now WhatsApp Button */}
            <a
              href="https://wa.me/96896912000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Enquire Now
            </a>
            <button onClick={() => setIsMobileOpen(true)} className="md:hidden text-gray-500 hover:text-brand-green cursor-pointer"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </div>

      {/* Zone 3 — Category nav */}
      <div className="bg-[#F4F7F0] h-11 border-b border-gray-150/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center overflow-x-auto whitespace-nowrap scrollbar-none space-x-6 rtl:space-x-reverse">
          {t.categories.map((c, i) => {
            const path = catPaths[i];
            const active = path.startsWith("/contact")
              ? pathname === "/contact"
              : pathname === "/" && currentCat === cats[i];
            return (
              <Link key={c} href={path} className={`text-xs font-semibold h-full flex items-center px-1 border-b-2 transition-all duration-150 ${active ? "border-[#E8B84B] text-[#5C7A3E]" : "border-transparent text-gray-600 hover:text-[#5C7A3E]"}`}>{c}</Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black z-50 cursor-pointer md:hidden" />
            <motion.div initial={{ x: isAr ? "100%" : "-100%" }} animate={{ x: 0 }} exit={{ x: isAr ? "100%" : "-100%" }} transition={{ type: "tween" as const, duration: 0.3 }} className="fixed top-0 bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden border-r rtl:border-l border-gray-200">
              <div className="p-4 border-b border-gray-150 flex justify-between items-center">
                <Link href="/" onClick={() => setIsMobileOpen(false)}>
                  {isAr ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: 'row-reverse' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        border: '2px solid #E8B84B', overflow: 'hidden',
                        backgroundColor: '#fff', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <img src="/logo-1.png" alt="Al Diyar Al Arabia" style={{ width: '88%', height: '88%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', textAlign: 'right' }}>
                        <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: '12px', fontWeight: '800', color: '#1A1A1A', direction: 'rtl' }}>الديار العربية الوطنية ش ش و</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', fontWeight: '500', color: '#4A4A4A', textTransform: 'uppercase' }}>AL DIYAR AL ARABIA NATIONAL SPC</div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        border: '2px solid #E8B84B', overflow: 'hidden',
                        backgroundColor: '#fff', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <img src="/logo-1.png" alt="Al Diyar Al Arabia" style={{ width: '88%', height: '88%', objectFit: 'contain' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: '10px', fontWeight: '600', color: '#3D5229', direction: 'rtl', textAlign: 'right' }}>الديار العربية الوطنية ش ش و</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '800', color: '#1A1A1A', textTransform: 'uppercase' }}>AL DIYAR AL ARABIA NATIONAL SPC</div>
                      </div>
                    </div>
                  )}
                </Link>
                <button onClick={() => setIsMobileOpen(false)} className="text-gray-400 hover:text-brand-green cursor-pointer"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center relative"><Search className="w-4 h-4 text-[#5C7A3E] absolute left-7 top-1/2 -translate-y-1/2" /><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.search} className="w-full bg-white border border-gray-250/60 rounded-full py-1.5 pl-9 pr-4 text-xs focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" /></div>
              <div className="flex-grow overflow-y-auto p-4 space-y-4 text-xs font-semibold text-gray-700">
                {t.categories.map((c, i) => (
                  <Link key={c} href={catPaths[i]} onClick={() => setIsMobileOpen(false)} className="block py-2.5 px-2 hover:bg-brand-green/10 rounded-lg">{c}</Link>
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

export function Header() {
  return (
    <Suspense fallback={<header className="w-full bg-white h-20 border-b border-gray-150/40" />}>
      <HeaderContent />
    </Suspense>
  );
}

export default Header;
