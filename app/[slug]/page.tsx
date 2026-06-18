"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { BRAND } from "@/context/SiteContext";

export default function DynamicPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  if (slug === "about") {
    return (
      <div className="bg-white">
        <section className="bg-primary-900 py-16 text-center text-white">
          <h1 className="text-3xl font-serif font-extrabold mb-2">About Us</h1>
          <p className="text-primary-200 text-sm max-w-xl mx-auto">Discover the heritage, mission, and vision driving {BRAND.nameEn}.</p>
        </section>
        <section className="py-16 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
          <div className="space-y-4 text-sm text-gray-600">
            <h2 className="text-2xl font-serif font-bold text-primary-900">A Legacy of Trust</h2>
            <p>Founded over two decades ago, {BRAND.nameEn} has grown into a cornerstone of Oman&apos;s agricultural sector, sourcing premium commodities globally.</p>
          </div>
        </section>
      </div>
    );
  }

  if (slug === "founder") {
    return (
      <div className="bg-white py-16 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 text-center">
          <div className="w-32 h-32 rounded-full bg-primary-900 text-white font-serif font-bold text-3xl flex items-center justify-center mx-auto mb-4">HB</div>
          <h2 className="text-xl font-bold text-primary-900">Hemanth Bhaskaran</h2>
          <p className="text-xs text-gold-600 font-semibold uppercase">Founder & Managing Director</p>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm text-gray-600">
          <blockquote className="border-l-4 border-[#E8B84B] pl-4 italic text-base text-primary-900 font-medium">
            &quot;Our reputation is built on the trust we foster with every grain we import.&quot;
          </blockquote>
          <p>Hemanth Bhaskaran established {BRAND.nameEn} to revolutionize commodities trading in Oman, emphasizing sustainable sourcing.</p>
        </div>
      </div>
    );
  }

  if (slug === "why-us") {
    return (
      <div className="bg-white">
        <section className="bg-primary-900 py-16 text-center text-white">
          <h1 className="text-3xl font-serif font-extrabold mb-2">Why Choose Us</h1>
          <p className="text-primary-200 text-sm max-w-xl mx-auto">The differentiators that make {BRAND.nameEn} the preferred partner.</p>
        </section>
        <section className="py-16 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-xs">
          {["Unyielding Quality Assurance", "Extensive Global Network", "State-of-the-Art Logistics"].map((title, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-xl">
              <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold">{i + 1}</div>
              <h3 className="font-bold text-sm text-primary-900 mb-2">{title}</h3>
              <p className="text-gray-500">Ensuring premium food ingredients reach GCC markets with full compliance.</p>
            </div>
          ))}
        </section>
      </div>
    );
  }

  if (slug === "contact") {
    return (
      <div className="bg-white py-16 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-serif font-bold text-primary-900">Muscat Office</h1>
          <p className="text-sm text-gray-600">Building 410, Street 24, Ghala Industrial Area, Muscat, Oman.</p>
          <div className="text-xs space-y-2">
            <p>📞 Phone: <a href={BRAND.phone} className="font-bold hover:underline">+968 96912000</a></p>
            <p>✉️ Email: <a href={BRAND.email} className="font-bold hover:underline">hemanth.aldiyar@outlook.com</a></p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-150/45 text-xs">
          {formSubmitted ? (
            <div className="text-center py-8 space-y-2">
              <h3 className="text-base font-bold text-brand-green">Inquiry Received</h3>
              <p className="text-gray-500">We will respond within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); toast.success("Inquiry sent successfully!"); }} className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-2 bg-white border border-gray-250/60 rounded focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" placeholder="Email" className="w-full p-2 bg-white border border-gray-250/60 rounded focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input type="text" placeholder="Company" className="w-full p-2 bg-white border border-gray-250/60 rounded focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" required onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              <textarea placeholder="Message" className="w-full p-2 bg-white border border-gray-250/60 rounded focus:ring-2 focus:ring-[#E8B84B] focus:outline-none" rows={3} required onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <button type="submit" className="w-full py-2.5 bg-brand-green text-white font-bold rounded cursor-pointer hover:bg-brand-green/95">Submit Inquiry</button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold text-primary-900">404</h1>
      <p className="my-4 text-sm text-gray-500">Page not found.</p>
      <Link href="/" className="px-4 py-2 bg-primary-850 text-white rounded text-xs">Go Home</Link>
    </div>
  );
}
