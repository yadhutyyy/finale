"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useSiteContext, BRAND } from "@/context/SiteContext";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { convertPrice, getCurrencySymbol } from "@/utils";

const products = [
  { id: "grains", name: "Premium Grains", nameAr: "حبوب ممتازة", description: "We supply high-grade rice, wheat, and other essential grains, meticulously sourced to meet demanding culinary standards across the region.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", price: 0.45, category: "Grains & Rice" },
  { id: "pulses", name: "Quality Pulses", nameAr: "بقوليات عالية الجودة", description: "A comprehensive range of lentils, chickpeas, and beans imported directly from esteemed global farming hubs ensures nutritional excellence.", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", price: 0.65, category: "Pulses" },
  { id: "spices", name: "Aromatic Spices", nameAr: "بهارات عطرية", description: "Authentic, rich, and vibrant spices that form the cornerstone of Omani heritage and contemporary cuisine, carefully processed and packaged.", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", price: 1.20, category: "Spices & Herbs" }
];

export default function Home() {
  const { lang, currency, searchQuery } = useSiteContext();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isAr = lang === "ar";
  const sym = getCurrencySymbol(currency, lang);

  const t = {
    tagline: isAr ? "التميز في التجارة منذ عام ١٩٩٨" : "Excellence in Trading Since 1998",
    heroTitle: isAr ? "شريك عُمان الموثوق في " : "Oman's Trusted Partner in ",
    heroTitleHighlight: isAr ? "السلع الغذائية الفاخرة" : "Premium Food Commodities",
    heroDesc: isAr
      ? `تمثل شركة ${BRAND.nameAr} الجودة غير المساومة في التجارة العالمية للحبوب الغذائية والبقوليات والتوابل.`
      : `${BRAND.nameEn} represents uncompromised quality in the global trade of food grains, pulses, and spices.`,
    contactBtn: isAr ? "اتصل بنا" : "Contact Us",
    quoteBtn: isAr ? "اطلب عرض سعر" : "Request a Quote",
    commoditiesTitle: isAr ? "سلعنا الأساسية" : "Our Primary Commodities",
    commoditiesDesc: isAr ? "استيراد أفضل المنتجات الزراعية لضمان أعلى المعايير لسوق الخليج العربي." : "Sourcing the finest agricultural products to ensure the highest standards for the GCC market.",
    learnMore: isAr ? "تعرف على المزيد" : "Learn more",
    addToCart: isAr ? "أضف إلى السلة" : "Add to Cart",
    noProducts: isAr ? "لا توجد منتجات تطابق بحثك." : "No products match your search query."
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.nameAr.includes(searchQuery)
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-950 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Hero Background" fill priority className="object-cover opacity-40 mix-blend-lighten" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#E8B84B] font-semibold uppercase text-xs tracking-wider mb-3 block">{t.tagline}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold tracking-tight mb-6 leading-tight">{t.heroTitle}<span className="text-[#E8B84B]">{t.heroTitleHighlight}</span></h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl leading-relaxed">{t.heroDesc}</p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-[#E8B84B] text-brand-dark hover:bg-[#E8B84B]/90 font-bold px-8 py-3.5 rounded-lg text-sm">{t.contactBtn}</Link>
              <Link href="/why-us" className="bg-transparent border border-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-lg text-sm">{t.quoteBtn}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">{t.commoditiesTitle}</h2>
            <p className="text-gray-500 text-sm">{t.commoditiesDesc}</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-250/60 max-w-md mx-auto"><p className="text-xs text-gray-500 font-medium">{t.noProducts}</p></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map((p) => {
                const isWish = isInWishlist(p.id);
                return (
                  <div key={p.id} className="bg-white rounded-2xl border border-gray-250/20 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div className="h-56 relative bg-primary-100">
                      <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                      <button onClick={() => toggleWishlist(p)} className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center cursor-pointer transition-transform ${isWish ? "text-red-500" : "text-gray-400"}`}><Heart className={`w-5 h-5 ${isWish ? "fill-current" : ""}`} /></button>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base font-serif font-bold text-brand-dark">{isAr ? p.nameAr : p.name}</h3>
                        <span className="text-sm font-bold text-[#5C7A3E]">{convertPrice(p.price, currency)} {sym}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{p.description}</p>
                    </div>
                    <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3">
                      <Link href="/about" className="text-brand-green font-semibold text-xs hover:underline">{t.learnMore} &rarr;</Link>
                      <button onClick={() => addToCart(p)} className="inline-flex items-center space-x-1.5 bg-brand-green hover:bg-[#3D5229] text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-2.5 rounded-lg shadow-sm cursor-pointer transition-colors"><ShoppingCart className="w-3.5 h-3.5" /><span>{t.addToCart}</span></button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-brand-footer text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">{isAr ? "مبني على الثقة، مدفوع بالجودة." : "Built on Trust, Driven by Quality."}</h2>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
              {isAr ? "كشركة مهنية، سمعتنا هي أثمن ما نملك. لقد أنشأنا سلاسل إمداد قوية." : "As a professional enterprise, our reputation is our most valuable asset. We have established robust supply chains."}
            </p>
            <Link href="/why-us" className="bg-white text-brand-dark hover:bg-white/90 font-bold px-8 py-3 rounded-lg text-xs tracking-wider uppercase">{isAr ? "اكتشف المزيد" : "Discover Why Us"}</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ n: "25+", l: isAr ? "سنوات خبرة" : "Years Experience" }, { n: "50+", l: isAr ? "شركاء عالميون" : "Global Partners" }, { n: "10k", l: isAr ? "أطنان سنوياً" : "Tons Annually" }, { n: "100%", l: isAr ? "جودة مضمونة" : "Quality Assured" }].map((s, i) => (
              <div key={i} className="bg-[#1A2514] p-6 rounded-2xl text-center border border-white/5">
                <div className="text-3xl font-extrabold text-[#E8B84B] mb-1">{s.n}</div>
                <div className="text-[10px] text-white/75 font-semibold uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
