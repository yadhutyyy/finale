export type Language = "en" | "ar";
export type Currency = "OMR" | "AED" | "SAR" | "USD";

export interface CartItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  image: string;
  category: string;
}

export const BRAND = {
  nameEn: "AL DIYAR AL ARABIA NATIONAL SPC",
  nameAr: "الديار العربية الوطنية ش ش و",
  tagline: "Your Food Supply Partner",
  whatsapp: "https://wa.me/96896912000",
  phone: "tel:+96896912000",
  email: "mailto:hemanth.aldiyar@outlook.com",
  web: "https://www.aldiyaralarabia.com",
  colors: {
    green: "#5C7A3E",
    gold: "#E8B84B",
    dark: "#1A1A1A",
    footerBg: "#1C2B12"
  }
};

export const convertPrice = (priceInOmr: number, currency: Currency): string => {
  const rates: Record<Currency, number> = { OMR: 1, AED: 9.53, SAR: 9.74, USD: 2.6 };
  return (priceInOmr * (rates[currency] || 1)).toFixed(2);
};

export const getCurrencySymbol = (currency: Currency, lang: Language): string => {
  const symbols: Record<Currency, { en: string; ar: string }> = {
    OMR: { en: "OMR", ar: "ر.ع." },
    AED: { en: "AED", ar: "د.إ" },
    SAR: { en: "ر.س", ar: "ر.س" },
    USD: { en: "$", ar: "$" }
  };
  return symbols[currency]?.[lang] || currency;
};
