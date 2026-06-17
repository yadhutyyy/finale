"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useSiteContext } from "@/context/SiteContext";
import toast from "react-hot-toast";

export function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, addToCart, removeFromCart, removeItemCompletely, cartSubtotal, cartCount } = useCart();
    const { lang, currency } = useSiteContext();

    const text = {
        en: {
            title: "Your Shopping Cart",
            empty: "Your cart is empty",
            emptySub: "Start adding premium food items to your cart today.",
            checkout: "Proceed to Checkout",
            subtotal: "Subtotal",
            items: "items",
            currencySymbol: { OMR: "OMR", AED: "AED", SAR: "SAR", USD: "$" },
            clear: "Clear All",
            comingSoon: "Checkout is coming soon — we're working on it!"
        },
        ar: {
            title: "سلة التسوق الخاصة بك",
            empty: "سلة التسوق فارغة",
            emptySub: "ابدأ بإضافة المواد الغذائية الفاخرة إلى سلتك اليوم.",
            checkout: "المتابعة لإتمام الطلب",
            subtotal: "المجموع الفرعي",
            items: "عناصر",
            currencySymbol: { OMR: "ر.ع.", AED: "د.إ", SAR: "ر.س", USD: "$" },
            clear: "مسح الكل",
            comingSoon: "إتمام الطلب قريباً — نحن نعمل على ذلك!"
        }
    };

    const t = text[lang];

    const convertPrice = (priceInOmr: number) => {
        const rates = { OMR: 1, AED: 9.53, SAR: 9.74, USD: 2.6 };
        const rate = rates[currency] || 1;
        return (priceInOmr * rate).toFixed(2);
    };

    const handleCheckout = () => {
        toast(t.comingSoon, { icon: "🚀" });
    };

    const drawerVariants = {
        hidden: { x: lang === "ar" ? "-100%" : "100%" },
        visible: { x: 0, transition: { type: "tween" as const, duration: 0.3 } },
        exit: { x: lang === "ar" ? "-100%" : "100%", transition: { type: "tween" as const, duration: 0.3 } }
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black z-50 cursor-pointer"
                    />

                    {/* Drawer Container */}
                    <motion.div
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 bottom-0 right-0 rtl:right-auto rtl:left-0 w-full max-w-md bg-[#FAFAF7] z-50 shadow-2xl flex flex-col border-l rtl:border-l-0 rtl:border-r border-gray-200"
                    >
                        {/* Drawer Header */}
                        <div className="p-5 border-b border-gray-200 bg-white flex justify-between items-center">
                            <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                                <ShoppingBag className="w-5 h-5 text-brand-green" />
                                <h3 className="font-serif font-bold text-lg text-brand-dark">
                                    {t.title} <span className="text-xs text-gray-500 font-sans">({cartCount} {t.items})</span>
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
                                aria-label="Close cart"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer Items List */}
                        <div className="flex-grow overflow-y-auto p-5 space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                                    <div className="w-16 h-16 rounded-full bg-brand-green/5 flex items-center justify-center text-brand-green/30">
                                        <ShoppingBag className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{t.empty}</h4>
                                        <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1 leading-relaxed">{t.emptySub}</p>
                                    </div>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs flex space-x-4 rtl:space-x-reverse items-center">
                                        <div className="w-16 h-16 relative rounded-lg border border-gray-100 overflow-hidden flex-shrink-0 bg-gray-50">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="64px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <h4 className="font-serif font-bold text-xs text-brand-dark truncate">
                                                {lang === "en" ? item.name : item.nameAr}
                                            </h4>
                                            <div className="text-xs text-brand-green font-bold mt-1">
                                                {convertPrice(item.price)} {t.currencySymbol[currency]}
                                            </div>
                                            
                                            {/* Quantity Controls */}
                                            <div className="flex items-center space-x-2.5 rtl:space-x-reverse mt-2">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-3.5 h-3.5" />
                                                </button>
                                                <span className="text-xs font-semibold text-brand-dark w-5 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <button
                                            onClick={() => removeItemCompletely(item.id)}
                                            className="w-10 h-10 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-650 flex items-center justify-center transition-colors cursor-pointer"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Drawer Footer Summary */}
                        {cart.length > 0 && (
                            <div className="p-5 border-t border-gray-250/60 bg-white space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-medium text-gray-500">{t.subtotal}</span>
                                    <span className="font-serif font-extrabold text-brand-green text-lg">
                                        {convertPrice(cartSubtotal)} {t.currencySymbol[currency]}
                                    </span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-3.5 bg-brand-green hover:bg-brand-topbar text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer flex items-center justify-center space-x-2"
                                >
                                    <span>{t.checkout}</span>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CartDrawer;
