"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useSiteContext } from "@/context/SiteContext";

const categoriesDict = {
    en: {
        all: "All Categories",
        items: [
            { name: "Pulses", href: "/categories/pulses" },
            { name: "Spices & Herbs", href: "/categories/spices-herbs" },
            { name: "Grains & Rice", href: "/categories/grains-rice" },
            { name: "Nuts & Dried Fruits", href: "/categories/nuts-dried-fruits" },
            { name: "Oils & Ghee", href: "/categories/oils-ghee" },
            { name: "Bulk Orders", href: "/bulk-orders" },
            { name: "Offers", href: "/offers" }
        ]
    },
    ar: {
        all: "جميع الفئات",
        items: [
            { name: "البقوليات", href: "/categories/pulses" },
            { name: "التوابل والأعشاب", href: "/categories/spices-herbs" },
            { name: "الحبوب والأرز", href: "/categories/grains-rice" },
            { name: "المكسرات والفواكه المجففة", href: "/categories/nuts-dried-fruits" },
            { name: "الزيوت والسمن", href: "/categories/oils-ghee" },
            { name: "طلبات الجملة", href: "/bulk-orders" },
            { name: "العروض", href: "/offers" }
        ]
    }
};

export function CategoryNav() {
    const { lang } = useSiteContext();
    const pathname = usePathname();
    const t = categoriesDict[lang];

    return (
        <div className="bg-[#F4F7F0] border-b border-gray-200/50 h-11 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* All Categories menu trigger */}
                <Link
                    href="/categories"
                    className={`flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-brand-green hover:text-brand-topbar transition-colors ${
                        pathname === "/categories" ? "text-brand-green border-b-2 border-brand-gold h-full flex items-center" : ""
                    }`}
                >
                    <Menu className="w-4 h-4 flex-shrink-0" />
                    <span className="uppercase tracking-wider">{t.all}</span>
                </Link>

                {/* Categories Scrollable Row */}
                <nav className="flex items-center space-x-6 rtl:space-x-reverse overflow-x-auto no-scrollbar scroll-smooth h-full">
                    {t.items.map((cat, idx) => {
                        const isActive = pathname === cat.href;
                        return (
                            <Link
                                key={idx}
                                href={cat.href}
                                className={`text-[11px] uppercase tracking-wider font-semibold py-3.5 border-b-2 transition-all duration-150 whitespace-nowrap block cursor-pointer ${
                                    isActive 
                                        ? "border-brand-gold text-brand-green" 
                                        : "border-transparent text-gray-650 hover:text-brand-green"
                                }`}
                            >
                                {cat.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

export default CategoryNav;
