import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";



export const metadata: Metadata = {
  title: "Al Diyar Al Arabia | Food Grains & Spices Trading in Oman",
  description: "A leading Omani business group specializing in premium food grains, pulses, and spices based in Muscat, Sultanate of Oman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans flex flex-col min-h-screen bg-gray-50`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
