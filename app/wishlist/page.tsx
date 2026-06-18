"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { useSiteContext } from "@/context/SiteContext";
import { convertPrice, getCurrencySymbol } from "@/utils";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { lang, currency } = useSiteContext();

  const isAr = lang === "ar";
  const sym = getCurrencySymbol(currency, lang);

  const t = {
    title: isAr ? "قائمة المفضلة" : "My Wishlist",
    empty: isAr ? "المفضلة فارغة" : "Your wishlist is empty",
    emptySub: isAr ? "ابدأ بإضافة سلعك المفضلة اليوم." : "Start adding your favorite commodities today.",
    addToCart: isAr ? "أضف إلى السلة" : "Add to Cart",
    goHome: isAr ? "العودة للرئيسية" : "Go Back Home"
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-brand-dark mb-10 text-center md:text-left rtl:text-right">{t.title}</h1>
        {wishlist.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-150/40 text-center max-w-md mx-auto space-y-4">
            <Heart className="w-12 h-12 text-gray-300 mx-auto" />
            <div>
              <h2 className="font-bold text-gray-800">{t.empty}</h2>
              <p className="text-xs text-gray-500 mt-1">{t.emptySub}</p>
            </div>
            <Link href="/" className="inline-block px-6 py-2.5 bg-brand-green text-white font-bold rounded-lg text-xs tracking-wider uppercase cursor-pointer">{t.goHome}</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wishlist.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-gray-150/20 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="h-56 relative bg-primary-100">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <button onClick={() => toggleWishlist(p)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center cursor-pointer text-red-550"><Trash2 className="w-4 h-4" /></button>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base font-serif font-bold text-brand-dark">{isAr ? p.nameAr : p.name}</h3>
                    <span className="text-sm font-bold text-[#5C7A3E]">{convertPrice(p.price, currency)} {sym}</span>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button onClick={() => addToCart(p)} className="w-full py-2.5 bg-brand-green hover:bg-[#3D5229] text-white font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-sm cursor-pointer flex items-center justify-center space-x-1.5"><ShoppingCart className="w-3.5 h-3.5" /><span>{t.addToCart}</span></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
