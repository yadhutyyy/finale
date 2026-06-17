import type { Metadata } from "next";
import { Playfair_Display, Inter, Cairo } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteProvider } from "@/context/SiteContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diyar Arabia National SPC | Premium Food Commodities Trading",
  description: "A leading Omani business group specializing in premium food grains, pulses, and spices based in Muscat, Sultanate of Oman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cairo.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-gray-50">
        <SiteProvider>
          <CartProvider>
            <WishlistProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
