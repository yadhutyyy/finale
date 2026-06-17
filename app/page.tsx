"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useSiteContext } from "@/context/SiteContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const products = [
    {
        id: "grains",
        name: "Premium Grains",
        nameAr: "حبوب ممتازة",
        description: "We supply high-grade rice, wheat, and other essential grains, meticulously sourced to meet demanding culinary standards across the region.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        price: 0.45, // OMR
        category: "Grains & Rice"
    },
    {
        id: "pulses",
        name: "Quality Pulses",
        nameAr: "بقوليات عالية الجودة",
        description: "A comprehensive range of lentils, chickpeas, and beans imported directly from esteemed global farming hubs ensures nutritional excellence.",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        price: 0.65, // OMR
        category: "Pulses"
    },
    {
        id: "spices",
        name: "Aromatic Spices",
        nameAr: "بهارات عطرية",
        description: "Authentic, rich, and vibrant spices that form the cornerstone of Omani heritage and contemporary cuisine, carefully processed and packaged.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        price: 1.20, // OMR
        category: "Spices & Herbs"
    }
];

const homeTranslations = {
    en: {
        tagline: "Excellence in Trading Since 1998",
        heroTitle: "Oman's Trusted Partner in ",
        heroTitleHighlight: "Premium Food Commodities",
        heroDesc: "Al Diyar Al Arabia National SPC represents uncompromised quality in the global trade of food grains, pulses, and spices. A legacy feeding the GCC with integrity and care.",
        contactBtn: "Contact Us",
        quoteBtn: "Request a Quote",
        commoditiesTitle: "Our Primary Commodities",
        commoditiesDesc: "Sourcing the finest agricultural products from globally recognized producers to ensure the highest standards for the GCC market.",
        learnMore: "Learn more",
        addToCart: "Add to Cart",
        strengthTitle: "Built on Trust, Driven by Quality.",
        strengthDesc: "As a professional enterprise, our reputation is our most valuable asset. We have established robust supply chains and stringent quality control protocols to ensure that every shipment reflects our commitment to excellence.",
        discoverBtn: "Discover Why Us",
        rates: { OMR: "OMR", AED: "AED", SAR: "SAR", USD: "$" },
        experience: "Years Experience",
        partners: "Global Partners",
        tons: "Tons Annually",
        assured: "Quality Assured",
        noProducts: "No products match your search query."
    },
    ar: {
        tagline: "التميز في التجارة منذ عام ١٩٩٨",
        heroTitle: "شريك عُمان الموثوق في ",
        heroTitleHighlight: "السلع الغذائية الفاخرة",
        heroDesc: "تمثل شركة ديار العربية الوطنية ش ش و الجودة غير المساومة في التجارة العالمية للحبوب الغذائية والبقوليات والتوابل. إرث يغذي الخليج بالنزاهة والرعاية.",
        contactBtn: "اتصل بنا",
        quoteBtn: "اطلب عرض سعر",
        commoditiesTitle: "سلعنا الأساسية",
        commoditiesDesc: "استيراد أفضل المنتجات الزراعية من منتجين معترف بهم عالمياً لضمان أعلى المعايير لسوق الخليج العربي.",
        learnMore: "تعرف على المزيد",
        addToCart: "أضف إلى السلة",
        strengthTitle: "مبني على الثقة، مدفوع بالجودة.",
        strengthDesc: "كشركة مهنية، سمعتنا هي أثمن ما نملك. لقد أنشأنا سلاسل إمداد قوية وبروتوكولات صارمة لمراقبة الجودة لضمان أن كل شحنة تعكس التزامنا بالتميز.",
        discoverBtn: "اكتشف لماذا نحن",
        rates: { OMR: "ر.ع.", AED: "د.إ", SAR: "ر.س", USD: "$" },
        experience: "سنوات خبرة",
        partners: "شركاء عالميون",
        tons: "أطنان سنوياً",
        assured: "جودة مضمونة",
        noProducts: "لا توجد منتجات تطابق بحثك."
    }
};

export default function Home() {
    const { lang, currency, searchQuery } = useSiteContext();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const t = homeTranslations[lang];

    const convertPrice = (priceInOmr: number) => {
        const rates = { OMR: 1, AED: 9.53, SAR: 9.74, USD: 2.6 };
        const rate = rates[currency] || 1;
        return (priceInOmr * rate).toFixed(2);
    };

    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.nameAr.includes(searchQuery)
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-primary-950 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover opacity-40 mix-blend-lighten"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 md:pt-32 md:pb-48">
                    <div className="max-w-3xl">
                        <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
                            {t.tagline}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight mb-6 leading-tight">
                            {t.heroTitle}<span className="text-brand-gold">{t.heroTitleHighlight}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl leading-relaxed">
                            {t.heroDesc}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-primary bg-brand-gold text-brand-dark hover:bg-brand-gold/90 font-bold border-transparent text-center px-8 py-4">
                                {t.contactBtn}
                            </Link>
                            <Link href="/why-us" className="btn-secondary bg-transparent !text-white border-white hover:bg-white/10 text-center px-8 py-4">
                                {t.quoteBtn}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview / Product Catalog */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
                            {t.commoditiesTitle}
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            {t.commoditiesDesc}
                        </p>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-2xs max-w-md mx-auto">
                            <p className="text-sm text-gray-500 font-medium">{t.noProducts}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => {
                                const isWish = isInWishlist(product.id);
                                return (
                                    <div key={product.id} className="bg-white rounded-2xl shadow-xs border border-gray-200/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                                        <div>
                                            <div className="h-56 bg-primary-100 relative overflow-hidden">
                                                <Image 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    fill 
                                                    sizes="(max-width: 768px) 100vw, 33vw" 
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                                />
                                                
                                                {/* Wishlist toggle */}
                                                <button
                                                    onClick={() => toggleWishlist(product)}
                                                    className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-all cursor-pointer ${
                                                        isWish ? "text-red-500 scale-105" : "text-gray-400 hover:text-red-500"
                                                    }`}
                                                    aria-label="Toggle wishlist"
                                                >
                                                    <Heart className={`w-5 h-5 ${isWish ? "fill-current" : ""}`} />
                                                </button>
                                            </div>
                                            
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-serif font-bold text-brand-dark">
                                                        {lang === "en" ? product.name : product.nameAr}
                                                    </h3>
                                                    <span className="text-sm font-bold text-brand-green">
                                                        {convertPrice(product.price)} {t.rates[currency]}
                                                    </span>
                                                </div>
                                                <p className="text-gray-500 text-xs mb-6 leading-relaxed line-clamp-3">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-6 pt-0 border-t border-gray-100 mt-auto flex items-center justify-between gap-3">
                                            <Link href="/about" className="text-brand-green font-semibold text-xs hover:underline inline-flex items-center group/link">
                                                {t.learnMore} <span className="ml-1 rtl:mr-1 rtl:ml-0 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform duration-200">&rarr;</span>
                                            </Link>
                                            
                                            {/* Add to Cart button */}
                                            <button
                                                onClick={() => addToCart({
                                                    id: product.id,
                                                    name: product.name,
                                                    nameAr: product.nameAr,
                                                    price: product.price,
                                                    image: product.image,
                                                    category: product.category
                                                })}
                                                className="inline-flex items-center space-x-1.5 rtl:space-x-reverse bg-brand-green hover:bg-brand-topbar text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-2.5 rounded-lg shadow-sm hover:shadow active:scale-97 cursor-pointer transition-all duration-200"
                                            >
                                                <ShoppingCart className="w-3.5 h-3.5" />
                                                <span>{t.addToCart}</span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Key Strengths Teaser */}
            <section className="py-24 bg-brand-footer text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.strengthTitle}</h2>
                            <p className="text-white/80 text-sm mb-8 leading-relaxed">
                                {t.strengthDesc}
                            </p>
                            <ul className="space-y-4 mb-8 text-xs font-semibold uppercase tracking-wider">
                                {['Direct Sourcing from Origins', 'State-of-the-Art Storage Facilities', 'Unwavering Regulatory Compliance'].map((item, i) => (
                                    <li key={i} className="flex items-center text-brand-gold">
                                        <svg className="h-5 w-5 text-brand-gold mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/why-us" className="btn-primary bg-white text-brand-dark hover:bg-white/90 px-8 py-3.5">
                                {t.discoverBtn}
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1A2514] p-8 rounded-2xl text-center shadow-inner border border-white/5">
                                <div className="text-4xl font-extrabold text-brand-gold mb-2">25+</div>
                                <div className="text-xs text-white/75 font-semibold uppercase tracking-wide">{t.experience}</div>
                            </div>
                            <div className="bg-[#1A2514] p-8 rounded-2xl text-center shadow-inner border border-white/5 mt-8">
                                <div className="text-4xl font-extrabold text-brand-gold mb-2">50+</div>
                                <div className="text-xs text-white/75 font-semibold uppercase tracking-wide">{t.partners}</div>
                            </div>
                            <div className="bg-[#1A2514] p-8 rounded-2xl text-center shadow-inner border border-white/5">
                                <div className="text-4xl font-extrabold text-brand-gold mb-2">10k</div>
                                <div className="text-xs text-white/75 font-semibold uppercase tracking-wide">{t.tons}</div>
                            </div>
                            <div className="bg-[#1A2514] p-8 rounded-2xl text-center shadow-inner border border-white/5 mt-8">
                                <div className="text-4xl font-extrabold text-brand-gold mb-2">100%</div>
                                <div className="text-xs text-white/75 font-semibold uppercase tracking-wide">{t.assured}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
