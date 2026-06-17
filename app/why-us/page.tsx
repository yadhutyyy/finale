import Link from "next/link";

export default function WhyUs() {
    const strengths = [
        {
            title: "Unyielding Quality Assurance",
            description: "We enforce multiple layers of quality control. From origin testing to post-shipment verification, we guarantee absolute purity and standard compliance.",
            icon: "M5 13l4 4L19 7"
        },
        {
            title: "Extensive Global Network",
            description: "Direct alliances with premier farmers and processors worldwide eliminate middleman delays, securing the freshest commodities at competitive rates.",
            icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        },
        {
            title: "State-of-the-Art Logistics",
            description: "Our dedicated dry-storage and climate-controlled warehousing facilities ensure zero degradation of grains and spices upon market arrival.",
            icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        },
        {
            title: "Financial Stability",
            description: "As a well-capitalized entity, we possess the fiscal agility to handle massive bulk shipments comfortably, assuring seamless supply continuity.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Dynamic Scalability",
            description: "Whether fulfilling routine retail orders or massive governmental tenders, our operational infrastructure scales effortlessly to meet variable demands.",
            icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        },
        {
            title: "Bespoke Client Servicing",
            description: "We don't just supply; we consult. Our market intelligence aids clients in navigating price fluctuations and seasonal crop transitions.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }
    ];

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why Choose Us</h1>
                    <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                        The distinct differentiators that make Al Diyar Al Arabia the preferred partner for commodities trading.
                    </p>
                </div>
            </section>

            {/* Stats Row */}
            <section className="bg-gold-50 py-12 border-b border-gold-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gold-200">
                        <div className="px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">25+</div>
                            <div className="text-sm font-semibold text-gold-700 uppercase tracking-widest">Years Active</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">500+</div>
                            <div className="text-sm font-semibold text-gold-700 uppercase tracking-widest">B2B Clients</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">98%</div>
                            <div className="text-sm font-semibold text-gold-700 uppercase tracking-widest">Client Retention</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">30+</div>
                            <div className="text-sm font-semibold text-gold-700 uppercase tracking-widest">Nations Sourced</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Strengths Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {strengths.map((strength, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={strength.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-900 mb-3">{strength.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    {strength.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-primary-950 py-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to secure your supply chain?</h2>
                    <p className="text-xl text-primary-200 mb-10">
                        Partner with Al Diyar Al Arabia for unmatched reliability, premium commodity quality, and service that puts your business first.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700 text-white text-lg px-8 py-4">
                            Contact Our Sales Team
                        </Link>
                        <Link href="#" className="btn-secondary bg-transparent border-white !text-white hover:bg-white/10 text-lg px-8 py-4">
                            Request Full Product Catalog
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
