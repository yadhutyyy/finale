"use client";

import React from "react";
import Link from "next/link";
import { 
    MapPin, 
    Phone, 
    Mail, 
    Globe, 
    MessageSquare, 
    Instagram, 
    Linkedin 
} from "lucide-react";
import { useSiteContext } from "@/context/SiteContext";
import LogoCircle from "../ui/LogoCircle";

const footerDict = {
    en: {
        description: "Premium quality food ingredients sourced and delivered across the GCC. Trusted by businesses and households across Oman, UAE, and Saudi Arabia.",
        explore: "Explore / استكشف",
        support: "Support / الدعم",
        contact: "Contact / تواصل معنا",
        whatsappCTA: "Chat on WhatsApp",
        copyright: "© 2025 Al Diyar Al Arabia National SPC. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap",
        companyNameAr: "الديار العربية الوطنية ش ش و",
        companyName: "Al Diyar Al Arabia National SPC",
        tagline: "Your Food Supply Partner",
        links: {
            home: "Home",
            about: "About Us",
            products: "Our Products",
            bulk: "Bulk Orders",
            quality: "Quality Standards",
            contact: "Contact Us",
            track: "Track My Order",
            faqs: "FAQs",
            shipping: "Shipping Info",
            returns: "Returns Policy"
        }
    },
    ar: {
        description: "مكونات غذائية عالية الجودة يتم توريدها وتوصيلها في جميع أنحاء الخليج العربي. موضع ثقة الشركات والعائلات في عُمان والإمارات والمملكة العربية السعودية.",
        explore: "Explore / استكشف",
        support: "Support / الدعم",
        contact: "Contact / تواصل معنا",
        whatsappCTA: "تواصل عبر الواتساب",
        copyright: "© ٢٠٢٥ شركة ديار العربية الوطنية ش ش و. جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        sitemap: "خريطة الموقع",
        companyNameAr: "الديار العربية الوطنية ش ش و",
        companyName: "Al Diyar Al Arabia National SPC",
        tagline: "Your Food Supply Partner",
        links: {
            home: "الرئيسية",
            about: "من نحن",
            products: "منتجاتنا",
            bulk: "طلبات الجملة",
            quality: "معايير الجودة",
            contact: "اتصل بنا",
            track: "تتبع طلبي",
            faqs: "الأسئلة الشائعة",
            shipping: "معلومات الشحن",
            returns: "سياسة الإرجاع"
        }
    }
};

export function Footer() {
    const { lang } = useSiteContext();
    const t = footerDict[lang];

    return (
        <footer className="bg-[#1C2B12] text-white relative overflow-hidden border-t-3 border-[#E8B84B] mt-auto">
            {/* Non-interactive wheat grain watermark in bottom-right (opacity 0.04) */}
            <div className="absolute bottom-[-20px] right-[-20px] rtl:right-auto rtl:left-[-20px] opacity-4 pointer-events-none select-none z-0">
                <svg className="w-64 h-64 text-[#E8B84B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                    
                    {/* Column 1 — Brand Column */}
                    <div className="col-span-1 md:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center space-x-3.5 rtl:space-x-reverse group">
                            <LogoCircle size="footer" />
                            <div className="flex flex-col text-left rtl:text-right">
                                <span className="font-arabic font-semibold text-[13px] text-[#E8B84B] leading-none mb-0.5 tracking-wide">
                                    {t.companyNameAr}
                                </span>
                                <span className="font-sans font-bold text-[15px] text-white leading-none">
                                    {t.companyName}
                                </span>
                                <span className="font-sans font-normal text-[11px] text-white/50 tracking-wider uppercase mt-1 leading-none">
                                    {t.tagline}
                                </span>
                            </div>
                        </Link>

                        <p className="text-white/70 text-xs leading-relaxed max-w-sm font-arabic-sub text-justify">
                            {t.description}
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3.5 rtl:space-x-reverse">
                            <a 
                                href="https://wa.me/96896912000" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-[#E8B84B] text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="WhatsApp"
                            >
                                <MessageSquare className="w-4 h-4 fill-current" />
                            </a>
                            <a 
                                href="https://instagram.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-[#E8B84B] text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://linkedin.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-[#E8B84B] text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a 
                                href="mailto:hemanth.aldiyar@outlook.com"
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-[#E8B84B] text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[12px] font-bold tracking-widest uppercase text-[#E8B84B] border-b border-white/10 pb-3 mb-5">
                            {t.explore}
                        </h4>
                        <ul className="space-y-3.5 text-xs text-white/55">
                            <li><Link href="/" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.home}</Link></li>
                            <li><Link href="/about" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.about}</Link></li>
                            <li><Link href="/products" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.products}</Link></li>
                            <li><Link href="/bulk-orders" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.bulk}</Link></li>
                            <li><Link href="/quality" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.quality}</Link></li>
                            <li><Link href="/contact" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 — Customer Support */}
                    <div className="col-span-1 md:col-span-3 space-y-6">
                        <div>
                            <h4 className="text-[12px] font-bold tracking-widest uppercase text-[#E8B84B] border-b border-white/10 pb-3 mb-5">
                                {t.support}
                            </h4>
                            <ul className="space-y-3.5 text-xs text-white/55 font-medium">
                                <li><Link href="/track-order" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.track}</Link></li>
                                <li><Link href="/faqs" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.faqs}</Link></li>
                                <li><Link href="/shipping" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.shipping}</Link></li>
                                <li><Link href="/returns" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.links.returns}</Link></li>
                                <li><Link href="/privacy" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.privacy}</Link></li>
                                <li><Link href="/terms" className="hover:text-[#E8B84B] transition-colors duration-200 block">{t.terms}</Link></li>
                            </ul>
                        </div>

                        {/* WhatsApp Pill Button */}
                        <a 
                            href="https://wa.me/96896912000" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2.5 rtl:space-x-reverse bg-[#25D366] hover:bg-[#E8B84B] hover:text-[#1C2B12] text-white font-bold text-xs px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <MessageSquare className="w-4 h-4 fill-current" />
                            <span>💬 {t.whatsappCTA}</span>
                        </a>
                    </div>

                    {/* Column 4 — Contact Details */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-[12px] font-bold tracking-widest uppercase text-[#E8B84B] border-b border-white/10 pb-3 mb-5">
                            {t.contact}
                        </h4>
                        <ul className="space-y-4 text-xs text-white/55">
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 text-[#E8B84B] mr-2.5 rtl:mr-0 rtl:ml-2.5 mt-0.5 flex-shrink-0" />
                                <span>Muscat, Oman</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 text-[#E8B84B] mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
                                <a href="tel:+96896912000" className="hover:text-[#E8B84B] transition-colors">+968 96912000</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 text-[#E8B84B] mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
                                <a href="mailto:hemanth.aldiyar@outlook.com" className="hover:text-[#E8B84B] transition-colors break-all">hemanth.aldiyar@outlook.com</a>
                            </li>
                            <li className="flex items-center">
                                <Globe className="w-4 h-4 text-[#E8B84B] mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
                                <a href="https://www.aldiyaralarabia.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B84B] transition-colors">www.aldiyaralarabia.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/50 space-y-4 md:space-y-0">
                    <div className="text-center md:text-left rtl:md:text-right font-medium">
                        {t.copyright}
                    </div>

                    {/* Visa / MC / Apple Pay Payment Badges */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse bg-black/15 px-4 py-2 rounded-xl border border-white/5">
                        <span className="font-bold text-[8px] tracking-wider text-[#E8B84B] uppercase mr-1.5 rtl:mr-0 rtl:ml-1.5">Payment</span>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-extrabold text-blue-900 shadow-2xs tracking-tight select-none">VISA</span>
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-extrabold text-red-600 shadow-2xs tracking-tight select-none">MC</span>
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-bold text-black shadow-2xs tracking-tight flex items-center select-none">Pay</span>
                        </div>
                    </div>

                    <div className="flex space-x-6 rtl:space-x-reverse font-medium">
                        <Link href="/privacy" className="hover:text-[#E8B84B] transition-colors">{t.privacy}</Link>
                        <Link href="/terms" className="hover:text-[#E8B84B] transition-colors">{t.terms}</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
