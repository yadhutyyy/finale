"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useSiteContext, BRAND } from "@/context/SiteContext";

const products = [
  {
    id: "grains",
    name: "Premium Basmati Rice",
    nameAr: "أرز بسمتي ممتاز",
    description: "Meticulously sourced, long-grain basmati rice offering exceptional aroma, fluffy texture, and premium quality for catering and retail.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=85",
    category: "Grains & Rice"
  },
  {
    id: "pulses",
    name: "Premium Quality Pulses",
    nameAr: "بقوليات عالية الجودة",
    description: "A comprehensive selection of lentils, chickpeas, and beans sourced directly from global agricultural leaders for maximum nutritional value.",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800&q=85",
    category: "Pulses"
  },
  {
    id: "spices",
    name: "Aromatic Spices & Herbs",
    nameAr: "بهارات وأعشاب عطرية",
    description: "Rich, vibrant, and pure whole and ground spices carefully processed to retain their authentic Omani heritage flavor profile.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=85",
    category: "Spices & Herbs"
  },
  {
    id: "nuts",
    name: "Premium Nuts & Dried Fruits",
    nameAr: "مكسرات وفواكه مجففة فاخرة",
    description: "An exceptional grade assortment of almonds, cashews, walnuts, and raisins, perfectly preserved to guarantee freshness and crunch.",
    image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&q=85",
    category: "Nuts & Dried Fruits"
  },
  {
    id: "oils",
    name: "Pure Oils & Ghee",
    nameAr: "زيوت وسمن نقي",
    description: "High-grade vegetable oils and traditional golden cow ghee, processed under strict quality controls for perfect culinary applications.",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=85",
    category: "Oils & Ghee"
  },
  {
    id: "organic",
    name: "Premium Organic Range",
    nameAr: "تشكيلة المنتجات العضوية",
    description: "100% certified organic grains, seeds, and superfoods cultivated naturally without pesticides to promote health and wellness.",
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=85",
    category: "Organic Range"
  }
];

const categoryTranslations: Record<string, string> = {
  "Grains & Rice": "الأرز والحبوب",
  "Pulses": "البقوليات",
  "Spices & Herbs": "التوابل والأعشاب",
  "Nuts & Dried Fruits": "المكسرات والفواكه المجففة",
  "Oils & Ghee": "الزيوت والسمن",
  "Organic Range": "المجموعة العضوية",
  "Bulk Enquiry": "طلب بالجملة"
};

function HomeContent() {
  const { lang, searchQuery } = useSiteContext();
  const searchParams = useSearchParams();
  const currentCat = searchParams.get("category");

  const isAr = lang === "ar";

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
    noProducts: isAr ? "لا توجد منتجات تطابق بحثك أو هذه الفئة." : "No products match your search query or selected category."
  };

  const categoryMap: { [key: string]: string } = {
    "grains-rice": "Grains & Rice",
    "pulses": "Pulses",
    "spices-herbs": "Spices & Herbs",
    "nuts-dried-fruits": "Nuts & Dried Fruits",
    "oils-ghee": "Oils & Ghee",
    "organic-range": "Organic Range"
  };

  const selectedCategory = currentCat ? categoryMap[currentCat] : null;

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameAr.includes(searchQuery);
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-primary-950 text-white overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80" alt="Hero Background" className="w-full h-full object-cover opacity-40 mix-blend-lighten" />
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
                return (
                  <div key={p.id} className="bg-white rounded-2xl border border-gray-250/20 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div className="bg-primary-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',        // ← fills the frame, never stretches
                          objectPosition: 'center',  // ← centers the subject
                          borderRadius: '8px 8px 0 0'
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex flex-col mb-4">
                        <span className="self-start inline-block bg-[#5C7A3E]/10 text-[#5C7A3E] text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                          {isAr ? (categoryTranslations[p.category] || p.category) : p.category}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">
                          {isAr ? p.nameAr : p.name}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                          {p.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <a
                          href="https://wa.me/96896912000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#1ebe57] transition-all duration-150 shadow-sm"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                          </svg>
                          {isAr ? "استفسار عبر واتساب" : "Enquire on WhatsApp"}
                        </a>
                      </div>
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

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5C7A3E]"></div></div>}>
      <HomeContent />
    </Suspense>
  );
}
