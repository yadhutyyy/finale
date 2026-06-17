export default function Values() {
    const coreValues = [
        {
            title: "Integrity Uncompromised",
            description: "We conduct entirely transparent operations. Honest business practices form the bedrock of our relationships with suppliers, clients, and the community.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            title: "Obsessive Quality Assurance",
            description: "From the farm down to the local retailer, we strictly enforce protocols that ensure our commodities meet world-class certifications.",
            icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        },
        {
            title: "Customer Centricity",
            description: "Our clients are partners in our journey. We anticipate their needs and exceed expectations by delivering on time, every time.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Reliability Built on Action",
            description: "We deliver consistently. Robust supply chain management allows us to honor commitments regardless of global market volatility.",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Respect for Heritage",
            description: "Deeply rooted in Omani tradition, our business practices reflect the culture of hospitality, respect, and enduring loyalty.",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            title: "Continuous Innovation",
            description: "While we value tradition, we embrace modern logistics and supply chain technologies to continually enhance our operational efficiency.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
    ];

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">Core Values</h1>
                    <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                        The fundamental principles that dictate our decisions, influence our culture, and maintain our reputation in the commodities trade.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 bg-gold-50 text-gold-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitment Banner */}
            <section className="py-20 bg-primary-950 text-white border-t-4 border-gold-500">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">A Promise Engraved in Our Process</h2>
                    <p className="text-lg text-primary-200 leading-relaxed">
                        These values are not merely corporate rhetoric. They serve as the definitive benchmark against which every supplier is vetted, every employee is hired, and every ton of commodity is traded.
                    </p>
                </div>
            </section>
        </div>
    );
}
