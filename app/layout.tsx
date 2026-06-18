import type { Metadata } from "next";
import { Playfair_Display, Inter, Cairo } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteProvider } from "@/context/SiteContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "Al Diyar Al Arabia National SPC | Premium Food Commodities Trading",
  description: "A leading Omani business group specializing in premium food grains, pulses, and spices based in Muscat, Sultanate of Oman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cairo.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-gray-50">
        <SiteProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
