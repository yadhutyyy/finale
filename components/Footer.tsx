"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    MessageSquare, 
    MapPin, 
    Phone, 
    Mail, 
    Instagram, 
    Linkedin, 
    Facebook, 
    ShieldCheck
} from "lucide-react";
import { useThemeContext } from "./ThemeContext";

const footerTranslations = {
    en: {
        description: "Al Diyar Al Arabia National SPC is a leading force in the GCC agricultural trade. We import and distribute premium quality food grains, pulses, and spices, securing nutrition pipelines with unmatched trust.",
        explore: "Explore / استكشف",
        support: "Support / الدعم",
        contact: "Contact / تواصل معنا",
        address: "Corporate Address",
        muscatAddress: "Building 410, Street 24, Ghala Industrial Area, Muscat, Oman",
        phone: "Phone",
        email: "Email",
        whatsappCTA: "Chat with us on WhatsApp",
        copyright: "© 2024 Al Diyar Al Arabia National SPC. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        sitemap: "Sitemap",
        links: {
            about: "About Us",
            products: "Our Products",
            bulk: "Bulk Orders",
            quality: "Quality Standards",
            sustainability: "Sustainability",
            careers: "Careers",
            blog: "Blog & Recipes",
            track: "Track My Order",
            returns: "Returns Policy",
            faqs: "FAQs",
            shipping: "Shipping Info",
            contactLink: "Contact Us"
        }
    },
    ar: {
        description: "شركة الديار العربية الوطنية ش ش و هي رائدة في تجارة المنتجات الزراعية في منطقة الخليج العربي. نقوم باستيراد وتوزيع أجود أنواع الحبوب الغذائية، البقوليات، والتوابل، لتأمين سلاسل الإمداد الغذائي بأعلى درجات الثقة.",
        explore: "Explore / استكشف",
        support: "Support / الدعم",
        contact: "Contact / تواصل معنا",
        address: "عنوان الشركة",
        muscatAddress: "مبنى ٤١٠، شارع ٢٤، منطقة غلا الصناعية، مسقط، عُمان",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        whatsappCTA: "تواصل معنا عبر الواتساب",
        copyright: "© ٢٠٢٤ شركة الديار العربية الوطنية ش ش و. جميع الحقوق محفوظة.",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        sitemap: "خريطة الموقع",
        links: {
            about: "من نحن",
            products: "منتجاتنا",
            bulk: "طلبات الجملة",
            quality: "معايير الجودة",
            sustainability: "الاستدامة",
            careers: "الوظائف",
            blog: "المدونة والوصفات",
            track: "تتبع طلبي",
            returns: "سياسة الإرجاع",
            faqs: "الأسئلة الشائعة",
            shipping: "معلومات الشحن",
            contactLink: "اتصل بنا"
        }
    }
};

export function Footer() {
    const { lang } = useThemeContext();
    const t = footerTranslations[lang];

    return (
        <footer className="bg-brand-footer text-white relative overflow-hidden mt-auto border-t border-brand-green/30">
            {/* Background Wheat Grain Watermark Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wheat-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M40 10c-1.5 5-3 10-3 15s1.5 10 3 15c1.5-5 3-10 3-15s-1.5-10-3-15zM20 30c-1.5 5-3 10-3 15s1.5 10 3 15c1.5-5 3-10 3-15s-1.5-10-3-15zM60 30c-1.5 5-3 10-3 15s1.5 10 3 15c1.5-5 3-10 3-15s-1.5-10-3-15z" fill="#E8B84B" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wheat-pattern)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                    
                    {/* Column 1 — Brand Block */}
                    <div className="col-span-1 md:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                            <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-md group-hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src="/logo-1.png" 
                                    alt="Al Diyar Al Arabia" 
                                    fill 
                                    sizes="48px"
                                    className="object-contain p-0.5" 
                                />
                            </div>
                            <div className="flex flex-col text-left rtl:text-right">
                                <span className="font-arabic font-extrabold text-sm text-brand-gold leading-none mb-0.5">
                                    الديار العربية الوطنية <span className="text-[9px] font-medium text-white/80">ش ش و</span>
                                </span>
                                <span className="font-sans font-extrabold text-[12px] tracking-tight text-white leading-none uppercase">
                                    Al Diyar Al Arabia <span className="text-[8px] font-semibold text-white/50 lowercase">National SPC</span>
                                </span>
                                <span className="text-[7px] font-bold tracking-widest text-brand-gold uppercase mt-1 leading-none">
                                    Your Food Supply Partner
                                </span>
                            </div>
                        </Link>

                        <p className="text-white/70 text-xs leading-relaxed max-w-sm font-arabic-sub text-justify">
                            {t.description}
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3.5 rtl:space-x-reverse">
                            <a 
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96824501234"}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-brand-gold text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="WhatsApp"
                            >
                                <MessageSquare className="w-4 h-4 fill-current" />
                            </a>
                            <a 
                                href="#" 
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-brand-gold text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a 
                                href="#" 
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-brand-gold text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a 
                                href="#" 
                                className="w-8 h-8 rounded-full bg-brand-green hover:bg-brand-gold text-white hover:text-brand-dark flex items-center justify-center transition-all duration-300 shadow-sm"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-brand-gold border-b border-white/10 pb-3 mb-5">
                            {t.explore}
                        </h4>
                        <ul className="space-y-3.5 text-xs text-white/70">
                            <li><Link href="/about" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.about}</Link></li>
                            <li><Link href="/products" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.products}</Link></li>
                            <li><Link href="/bulk-orders" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.bulk}</Link></li>
                            <li><Link href="/quality" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.quality}</Link></li>
                            <li><Link href="/sustainability" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.sustainability}</Link></li>
                            <li><Link href="/careers" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.careers}</Link></li>
                            <li><Link href="/blog" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.blog}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 — Customer Support */}
                    <div className="col-span-1 md:col-span-3 space-y-6">
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-gold border-b border-white/10 pb-3 mb-5">
                                {t.support}
                            </h4>
                            <ul className="space-y-3.5 text-xs text-white/70">
                                <li><Link href="/track-order" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.track}</Link></li>
                                <li><Link href="/returns" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.returns}</Link></li>
                                <li><Link href="/faqs" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.faqs}</Link></li>
                                <li><Link href="/shipping" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.shipping}</Link></li>
                                <li><Link href="/contact" className="hover:text-brand-gold hover:underline transition-colors duration-200 block">{t.links.contactLink}</Link></li>
                            </ul>
                        </div>

                        {/* WhatsApp Pill Button */}
                        <a 
                            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96824501234"}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-brand-green hover:bg-brand-gold hover:text-brand-dark text-white text-xs font-bold px-5 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <MessageSquare className="w-4 h-4 fill-current" />
                            <span>{t.whatsappCTA}</span>
                        </a>
                    </div>

                    {/* Column 4 — Contact & Certifications */}
                    <div className="col-span-1 md:col-span-3 space-y-6">
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-gold border-b border-white/10 pb-3 mb-5">
                                {t.contact}
                            </h4>
                            <ul className="space-y-4 text-xs text-white/70">
                                <li className="flex items-start">
                                    <MapPin className="w-4 h-4 text-brand-gold mr-2.5 rtl:mr-0 rtl:ml-2.5 mt-0.5 flex-shrink-0" />
                                    <span className="leading-relaxed">
                                        <strong className="block text-white text-[11px] font-bold mb-1">{t.address}</strong>
                                        {t.muscatAddress}
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 text-brand-gold mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
                                    <span>+968 2450 1234</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 text-brand-gold mr-2.5 rtl:mr-0 rtl:ml-2.5 flex-shrink-0" />
                                    <span className="break-all">info@aldiyaralarabia.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-2">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse border border-brand-gold/30 bg-black/10 px-2.5 py-1 rounded-md text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>ISO 9001</span>
                                </div>
                                <div className="flex items-center space-x-1 rtl:space-x-reverse border border-brand-gold/30 bg-black/10 px-2.5 py-1 rounded-md text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>HACCP</span>
                                </div>
                                <div className="flex items-center space-x-1 rtl:space-x-reverse border border-brand-gold/30 bg-black/10 px-2.5 py-1 rounded-md text-[9px] font-bold text-brand-gold uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span>HALAL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/50 space-y-4 md:space-y-0">
                    {/* Left: Copyright */}
                    <div className="text-center md:text-left rtl:md:text-right font-medium">
                        {t.copyright}
                    </div>

                    {/* Center: GCC Payment Badges */}
                    <div className="flex items-center space-x-3.5 rtl:space-x-reverse bg-black/15 px-4 py-2 rounded-xl border border-white/5">
                        <span className="font-bold text-[8px] tracking-wider text-brand-gold/80 uppercase mr-1.5 rtl:mr-0 rtl:ml-1.5">Payment</span>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            {/* Visa */}
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-extrabold text-blue-900 shadow-2xs tracking-tight">VISA</span>
                            {/* Mastercard */}
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-extrabold text-red-600 shadow-2xs tracking-tight">MC</span>
                            {/* Apple Pay */}
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-bold text-black shadow-2xs tracking-tight flex items-center">Pay</span>
                            {/* Mada */}
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-black text-green-700 shadow-2xs tracking-tight">mada</span>
                            {/* KNET */}
                            <span className="bg-white px-2 py-0.5 rounded text-[8px] font-black text-blue-600 shadow-2xs tracking-tight">knet</span>
                        </div>
                    </div>

                    {/* Right: Policy Links */}
                    <div className="flex space-x-6 rtl:space-x-reverse font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors duration-200">{t.privacy}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors duration-200">{t.terms}</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors duration-200">{t.sitemap}</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
