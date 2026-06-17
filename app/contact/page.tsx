"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        interest: "grains",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                company: "",
                interest: "grains",
                message: ""
            });
        }, 1000);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-3 block"
                    >
                        Establish a Partnership
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6"
                    >
                        Contact Our Trading Desk
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-200 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you are looking for bulk wholesale supply or direct imports into Oman, our experts are ready to assist.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Details Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div>
                            <span className="text-gold-600 font-semibold uppercase tracking-wider text-xs mb-2 block">Direct Communication</span>
                            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Muscat Headquarters</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our central trading office coordinates logistics, regulatory clearances, and customer relations across the GCC. Drop by or reach out through our channels.
                            </p>
                        </div>

                        {/* Contact details cards */}
                        <div className="space-y-4">
                            <div className="flex items-start p-5 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-900 mb-1">Corporate Address</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Al Diyar Al Arabia, Building 410, Street 24, Ghala Industrial Area, Muscat, Sultanate of Oman.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start p-5 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-900 mb-1">Trading & Logistics Desk</h4>
                                    <p className="text-gray-600 text-sm mb-0.5">📞 +968 2450 1234</p>
                                    <p className="text-gray-600 text-sm">✉️ operations@aldiyaralarabia.com</p>
                                </div>
                            </div>

                            <div className="flex items-start p-5 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-900 mb-1">Business Hours</h4>
                                    <p className="text-gray-600 text-sm">Sunday – Thursday: 8:00 AM – 5:00 PM</p>
                                    <p className="text-gray-500 text-xs mt-1">Friday & Saturday: Closed (Weekly Rest)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-7 bg-gray-50/50 border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm"
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Send an Inquiry</h3>
                        
                        {formSubmitted ? (
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-primary-50 border border-primary-100 text-primary-900 rounded-xl p-8 text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-gold-500 text-primary-950 rounded-full flex items-center justify-center mx-auto shadow-md">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                                </div>
                                <h4 className="text-xl font-bold">Inquiry Received</h4>
                                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                                    Thank you for reaching out. A senior trading manager will contact you within 24 business hours to address your supply needs.
                                </p>
                                <button 
                                    onClick={() => setFormSubmitted(false)}
                                    className="mt-4 px-6 py-2 bg-primary-800 text-white rounded-lg text-xs font-semibold hover:bg-primary-900 transition-colors"
                                >
                                    Submit Another Inquiry
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm" 
                                            placeholder="John Doe"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Corporate Email</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm" 
                                            placeholder="john@company.com"
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Company Name</label>
                                        <input 
                                            type="text" 
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm" 
                                            placeholder="Company Ltd"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Commodity Interest</label>
                                        <select 
                                            id="interest"
                                            value={formData.interest}
                                            onChange={(e) => setFormData({...formData, interest: e.target.value})}
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm"
                                        >
                                            <option value="grains">Premium Grains (Rice, Wheat)</option>
                                            <option value="pulses">Pulses (Lentils, Chickpeas)</option>
                                            <option value="spices">Aromatic Spices (Cardamom, Black Pepper)</option>
                                            <option value="bulk">Bulk Import / Customs Clearing</option>
                                            <option value="other">General Partnership Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Inquiry Details</label>
                                    <textarea 
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm placeholder-gray-400"
                                        placeholder="Please provide details about your volume requirements, cargo destination, and frequency..."
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full py-4 bg-gradient-to-r from-primary-800 to-primary-950 text-white font-bold rounded-xl text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
                                >
                                    Submit Commercial Inquiry
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
