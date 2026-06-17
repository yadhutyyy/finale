

export default function About() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">About Us</h1>
                    <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                        Discover the heritage, mission, and vision that drive Al Diyar Al Arabia to be Oman&apos;s premier food commodities trading partner.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                        </div>
                        <div>
                            <span className="text-gold-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Our Heritage</span>
                            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">A Legacy of Trust in Every Grain</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Founded over two decades ago, Al Diyar Al Arabia has grown from a humble local enterprise into a cornerstone of Oman&apos;s agricultural and food commodities sector. Our journey is paved with unwavering dedication, family values, and a profound respect for the communities we serve.
                                </p>
                                <p>
                                    We recognize that the food we trade eventually reaches the dining tables of families. This immense responsibility fuels our rigorous sourcing processes and stringent quality checks, ensuring that only the finest grains, pulses, and spices cross international borders and into your homes.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 mr-3">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                                </span>
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most reliable and distinguished provider of essential food commodities in the Sultanate of Oman, recognized for our uncompromising quality and operational excellence across the globe.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -z-10 opacity-50"></div>
                            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                </span>
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To consistently deliver premium grains, pulses, and spices that nourish families while establishing sustainable, long-term partnerships with our suppliers, stakeholders, and the communities we operate within.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Milestones of Excellence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">A quick glance at the pivotal moments that defined our trajectory.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 border-l-2 border-gold-200 pl-6 relative">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-400"></span>
                            <div className="md:w-1/4 font-bold text-primary-800 text-xl pt-[-4px]">1998</div>
                            <div className="md:w-3/4 text-gray-600">
                                <strong className="text-gray-900 block mb-1">Company Foundation</strong>
                                The inception of Al Diyar Al Arabia as a small local trading outfit in Muscat, specializing initially in rice imports.
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 border-l-2 border-gold-200 pl-6 relative">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-400"></span>
                            <div className="md:w-1/4 font-bold text-primary-800 text-xl pt-[-4px]">2005</div>
                            <div className="md:w-3/4 text-gray-600">
                                <strong className="text-gray-900 block mb-1">Portfolio Expansion</strong>
                                Significant expansion into pulses and diverse spices, establishing exclusive partnerships with major Asian and African producers.
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 border-l-2 border-gold-200 pl-6 relative">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-400"></span>
                            <div className="md:w-1/4 font-bold text-primary-800 text-xl pt-[-4px]">2015</div>
                            <div className="md:w-3/4 text-gray-600">
                                <strong className="text-gray-900 block mb-1">Logistics Overhaul</strong>
                                Unveiling our state-of-the-art storage and distribution centers across Oman, securing the freshness and integrity of bulk commodities.
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 border-l-2 border-transparent pl-6 relative">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-400"></span>
                            <div className="md:w-1/4 font-bold text-primary-800 text-xl pt-[-4px]">Today</div>
                            <div className="md:w-3/4 text-gray-600">
                                <strong className="text-gray-900 block mb-1">Industry Leader</strong>
                                Acknowledged as a dominant force in the Sultanate&apos;s food supply chain, committed to modernizing operations while cherishing our traditional roots.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
