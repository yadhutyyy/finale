

export default function Founder() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">The Founder</h1>
                    <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                        Meet the visionary leader shaping the legacy of Al Diyar Al Arabia.
                    </p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-primary-950 flex flex-col items-center justify-center p-6 text-center select-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950 via-primary-900 to-primary-800"></div>
                                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-gold-400/80 bg-primary-950 flex items-center justify-center mb-4 shadow-xl">
                                    <span className="text-3xl font-serif font-bold text-gold-400 tracking-wider">HB</span>
                                </div>
                                <div className="relative z-10 text-primary-200 uppercase tracking-widest text-[10px] font-semibold">
                                    Executive Leadership
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 border-t border-primary-800/80 pt-4 text-left relative z-10">
                                    <div className="text-xs text-primary-300 font-medium">Al Diyar Al Arabia</div>
                                    <div className="text-[10px] text-gold-500 font-semibold tracking-wider uppercase mt-0.5">Muscat, Oman</div>
                                </div>
                            </div>
                            <div className="mt-6 text-center lg:text-left">
                                <h2 className="text-3xl font-serif font-extrabold text-primary-900">Hemanth Bhaskaran</h2>
                                <p className="text-gold-600 font-medium uppercase tracking-wider text-sm mt-1">
                                    Founder & Managing Director
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            {/* Quote Block */}
                            <blockquote className="bg-primary-50 p-8 rounded-xl border-l-4 border-gold-500 mb-10 relative">
                                <svg className="absolute top-4 left-4 w-12 h-12 text-primary-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl font-medium text-primary-900 italic leading-relaxed">
                                        &quot;Our reputation is not merely built on the volume of trade we conduct, but upon the trust we foster with every grain we import. In this business, integrity and unwavering quality must run through the very fabric of our operations.&quot;
                                    </p>
                                </div>
                            </blockquote>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    A seasoned entrepreneur and an astoundingly meticulous strategist, Hemanth Bhaskaran established Al Diyar Al Arabia with a singular vision: to revolutionize the standard of commodities trading in the Sultanate of Oman.
                                </p>
                                <p>
                                    With over two decades of robust experience traversing international supply chains and agricultural commodity markets, his foresight and relentless pursuit of excellence have catapulted the company into a leading position. His approach emphasizes sustainable, ethical sourcing from the world&apos;s most reputable agricultural hubs, effectively securing Oman&apos;s essential food pipelines.
                                </p>

                                <h3 className="text-2xl font-serif font-bold text-primary-900 mt-10 mb-4">Vision & Leadership</h3>
                                <p>
                                    Bhaskaran&apos;s leadership philosophy intricately weaves traditional Omani business ethics and hospitality with dynamic, global corporate governance standards. He firmly believes that an organization thrives optimally when its operations resonate with the cultural heartbeat of the community it serves.
                                </p>
                                <p>
                                    Under his direction, the company has heavily invested in transparent supply matrix integrations and advanced storage technologies. His commitment stretches far beyond profit margins; it is an unwavering pledge to national food security, economic contribution, and the establishment of an enduring generational legacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
