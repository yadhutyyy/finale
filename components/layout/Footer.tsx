"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { useSiteContext, BRAND } from "@/context/SiteContext";

export function Footer() {
  const { lang } = useSiteContext();
  const isAr = lang === "ar";

  const t = {
    desc: isAr
      ? "مكونات غذائية عالية الجودة يتم توريدها وتوصيلها في جميع أنحاء الخليج العربي. موضع ثقة الشركات والعائلات."
      : "Premium quality food ingredients sourced and delivered across the GCC. Trusted by businesses and households.",
    explore: isAr ? "استكشف" : "Explore",
    support: isAr ? "الدعم" : "Customer Support",
    contact: isAr ? "تواصل معنا" : "Contact",
    whatsappCTA: isAr ? "تواصل عبر الواتساب" : "Chat on WhatsApp",
    copyright: isAr ? "© ٢٠٢٥ شركة ديار العربية الوطنية ش ش و. جميع الحقوق محفوظة." : "© 2025 Al Diyar Al Arabia National SPC. All rights reserved.",
    links: isAr
      ? { home: "الرئيسية", about: "من نحن", products: "منتجاتنا", bulk: "طلبات الجملة", quality: "الجودة", contact: "اتصل بنا", track: "تتبع الطلب", faqs: "الأسئلة الشائعة", shipping: "الشحن", returns: "الإرجاع", privacy: "سياسة الخصوصية", terms: "الشروط" }
      : { home: "Home", about: "About Us", products: "Our Products", bulk: "Bulk Orders", quality: "Quality Standards", contact: "Contact Us", track: "Track My Order", faqs: "FAQs", shipping: "Shipping Info", returns: "Returns Policy", privacy: "Privacy Policy", terms: "Terms of Use" }
  };

  const socials = [
    { icon: <MessageSquare className="w-4 h-4 fill-current" />, href: BRAND.whatsapp },
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/" },
    { icon: <Mail className="w-4 h-4" />, href: BRAND.email }
  ];

  return (
    <footer className="bg-[#1C2B12] text-white relative overflow-hidden border-t-3 border-[#E8B84B] mt-auto">
      {/* Watermark */}
      <div className="absolute bottom-[-20px] right-[-20px] rtl:left-[-20px] rtl:right-auto opacity-4 pointer-events-none select-none z-0">
        <svg className="w-64 h-64 text-[#E8B84B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-[#E8B84B] p-1"><Image src="/assets/logo-1.png" alt={BRAND.nameEn} width={64} height={64} className="w-full h-full object-contain" /></div>
              <div className="flex flex-col text-left rtl:text-right">
                <span className="font-arabic text-[12px] text-[#E8B84B] leading-none mb-0.5">{BRAND.nameAr}</span>
                <span className="font-sans font-bold text-[14px] leading-none">{BRAND.nameEn}</span>
                <span className="font-sans text-[10px] text-white/50 uppercase mt-0.5 tracking-wider">{BRAND.tagline}</span>
              </div>
            </Link>
            <p className="text-white/70 text-xs leading-relaxed text-justify">{t.desc}</p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              {socials.map((s, idx) => <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-brand-green hover:bg-[#E8B84B] text-white hover:text-brand-dark flex items-center justify-center transition-colors shadow-sm">{s.icon}</a>)}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B84B] border-b border-white/10 pb-2 mb-4">{t.explore}</h4>
            <ul className="space-y-2.5 text-xs text-white/55">
              <li><Link href="/" className="hover:text-[#E8B84B] transition-colors">{t.links.home}</Link></li>
              <li><Link href="/about" className="hover:text-[#E8B84B] transition-colors">{t.links.about}</Link></li>
              <li><Link href="/products" className="hover:text-[#E8B84B] transition-colors">{t.links.products}</Link></li>
              <li><Link href="/bulk-orders" className="hover:text-[#E8B84B] transition-colors">{t.links.bulk}</Link></li>
              <li><Link href="/quality" className="hover:text-[#E8B84B] transition-colors">{t.links.quality}</Link></li>
              <li><Link href="/contact" className="hover:text-[#E8B84B] transition-colors">{t.links.contact}</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B84B] border-b border-white/10 pb-2 mb-4">{t.support}</h4>
            <ul className="space-y-2.5 text-xs text-white/55">
              <li><Link href="/track-order" className="hover:text-[#E8B84B] transition-colors">{t.links.track}</Link></li>
              <li><Link href="/faqs" className="hover:text-[#E8B84B] transition-colors">{t.links.faqs}</Link></li>
              <li><Link href="/shipping" className="hover:text-[#E8B84B] transition-colors">{t.links.shipping}</Link></li>
              <li><Link href="/returns" className="hover:text-[#E8B84B] transition-colors">{t.links.returns}</Link></li>
            </ul>
            <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#E8B84B] hover:text-[#1C2B12] text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md transition-colors"><span>💬 {t.whatsappCTA}</span></a>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B84B] border-b border-white/10 pb-2 mb-4">{t.contact}</h4>
            <ul className="space-y-3.5 text-xs text-white/55">
              <li className="flex items-start"><MapPin className="w-4 h-4 text-[#E8B84B] mr-2 rtl:mr-0 rtl:ml-2 mt-0.5" /><span>Muscat, Oman</span></li>
              <li className="flex items-center"><Phone className="w-4 h-4 text-[#E8B84B] mr-2 rtl:mr-0 rtl:ml-2" /><a href={BRAND.phone} className="hover:text-[#E8B84B] transition-colors">+968 96912000</a></li>
              <li className="flex items-center"><Mail className="w-4 h-4 text-[#E8B84B] mr-2 rtl:mr-0 rtl:ml-2" /><a href={BRAND.email} className="hover:text-[#E8B84B] transition-colors break-all">hemanth.aldiyar@outlook.com</a></li>
              <li className="flex items-center"><Globe className="w-4 h-4 text-[#E8B84B] mr-2 rtl:mr-0 rtl:ml-2" /><a href={BRAND.web} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8B84B] transition-colors">www.aldiyaralarabia.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/50 space-y-4 md:space-y-0">
          <span>{t.copyright}</span>
          <div className="flex items-center space-x-2 bg-black/15 px-3 py-1.5 rounded-lg border border-white/5">
            <span className="font-bold uppercase tracking-wider text-[8px] text-[#E8B84B]">Payment</span>
            <div className="flex items-center space-x-1.5">
              {["VISA", "MC", "Pay"].map(p => <span key={p} className="bg-white px-1.5 py-0.5 rounded text-[8px] font-bold text-black select-none">{p}</span>)}
            </div>
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse font-medium">
            <Link href="/privacy" className="hover:text-[#E8B84B] transition-colors">{t.links.privacy}</Link>
            <Link href="/terms" className="hover:text-[#E8B84B] transition-colors">{t.links.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
