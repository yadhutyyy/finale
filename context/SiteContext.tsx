"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Currency, CartItem, WishlistItem, BRAND } from "@/utils";

interface SiteContextType {
  lang: Language;
  currency: Currency;
  searchQuery: string;
  cart: CartItem[];
  wishlist: WishlistItem[];
  isCartOpen: boolean;
  setLang: (lang: Language) => void;
  setCurrency: (currency: Currency) => void;
  setSearchQuery: (query: string) => void;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  removeItemCompletely: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  cartSubtotal: number;
  cartCount: number;
  wishlistCount: number;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [currency, setCurrencyState] = useState<Currency>("OMR");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    const savedCurrency = localStorage.getItem("currency") as Currency;
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedLang) {
      setLangState(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
    if (savedCurrency) setCurrencyState(savedCurrency);
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      const updated = existing
        ? prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...item, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (!existing) return prev;
      const updated = existing.quantity > 1
        ? prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        : prev.filter((i) => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItemCompletely = (id: string) => {
    setCart((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      const updated = exists ? prev.filter((i) => i.id !== item.id) : [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const isInWishlist = (id: string) => wishlist.some((i) => i.id === id);

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <SiteContext.Provider
      value={{
        lang,
        currency,
        searchQuery,
        cart,
        wishlist,
        isCartOpen,
        setLang,
        setCurrency,
        setSearchQuery,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartSubtotal,
        cartCount,
        wishlistCount,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSiteContext must be used within a SiteProvider");
  return context;
}
export { BRAND };
