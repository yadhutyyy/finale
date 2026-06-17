"use client";

import React from "react";
import Link from "next/link";
import { useSiteContext } from "@/context/SiteContext";

const translations = {
    en: {
        title: "Page Not Found",
        desc: "We apologize, but the page you are looking for does not exist or has been moved.",
        home: "Go Back Home"
    },
    ar: {
        title: "الصفحة غير موجودة",
        desc: "نعتذر، ولكن الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
        home: "العودة إلى الرئيسية"
    }
};

export default function NotFound() {
    const { lang } = useSiteContext();
    const t = translations[lang] || translations.en;

    return (
        <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/5 flex items-center justify-center text-brand-green mb-6 select-none shadow-inner">
                <span className="text-3xl font-serif font-extrabold text-brand-gold">404</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-brand-dark mb-4">{t.title}</h1>
            <p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed">
                {t.desc}
            </p>
            <Link href="/" className="btn-primary px-8 py-3.5 text-xs font-bold uppercase tracking-wider bg-brand-green text-white hover:bg-brand-topbar shadow-md hover:shadow-lg transition-all">
                {t.home}
            </Link>
        </div>
    );
}
