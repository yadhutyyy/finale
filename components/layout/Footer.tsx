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
    support: isAr ? "معلومات" : "Information",
    contact: isAr ? "تواصل معنا" : "Contact",
    whatsappCTA: isAr ? "تواصل عبر الواتساب" : "Chat on WhatsApp",
    copyright: isAr ? "© ٢٠٢٥ شركة ديار العربية الوطنية ش ش و. جميع الحقوق محفوظة." : "© 2025 Al Diyar Al Arabia National SPC. All rights reserved.",
    links: isAr
      ? { home: "الرئيسية", about: "من نحن", contact: "اتصل بنا", whyUs: "لماذا نحن", founder: "رسالة المؤسس" }
      : { home: "Home", about: "About Us", contact: "Contact Us", whyUs: "Why Choose Us", founder: "Founder's Message" }
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
              {/* Footer logo circle */}
              <div style={{
                width: '64px',
                height: '64px',
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

              {/* Brand name lockup — DO NOT MODIFY FONT SIZES */}
              <div className="flex flex-col leading-tight">
                <span
                  className="font-arabic text-right"
                  style={{ fontFamily: "'Cairo', sans-serif", fontSize: '13px', color: '#4A4A4A', direction: 'rtl' }}
                >
                  الديار العربية الوطنية ش ش و
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: '800', color: '#1A1A1A', letterSpacing: '-0.01em', textTransform: 'uppercase' }}
                >
                  DIYAR ARABIA NATIONAL SPC
                </span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: '400', color: '#7A7A7A', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  YOUR FOOD SUPPLY PARTNER
                </span>
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
              <li><Link href="/contact" className="hover:text-[#E8B84B] transition-colors">{t.links.contact}</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E8B84B] border-b border-white/10 pb-2 mb-4">{t.support}</h4>
            <ul className="space-y-2.5 text-xs text-white/55">
              <li><Link href="/why-us" className="hover:text-[#E8B84B] transition-colors">{t.links.whyUs}</Link></li>
              <li><Link href="/founder" className="hover:text-[#E8B84B] transition-colors">{t.links.founder}</Link></li>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
