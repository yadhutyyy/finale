import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-40 mix-blend-lighten"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 md:pt-32 md:pb-48">
          <div className="max-w-3xl">
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Excellence in Trading Since 1998
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Oman&apos;s Trusted Partner in <span className="text-gold-400">Premium Food Commodities</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl leading-relaxed">
              Al Diyar Al Arabia represents uncompromised quality in the global trade of food grains, pulses, and spices. A family-owned legacy, feeding the nation with integrity and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700 text-white border-transparent text-center">
                Contact Us
              </Link>
              <Link href="/why-us" className="btn-secondary bg-transparent !text-white border-white hover:bg-white/10 text-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Primary Commodities</h2>
            <p className="text-gray-600">
              Sourcing the finest agricultural products from globally recognized producers to ensure the highest standards for the Omani market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-primary-100 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Premium Grains" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-3">Premium Grains</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  We supply high-grade rice, wheat, and other essential grains, meticulously sourced to meet demanding culinary standards across the region.
                </p>
                <Link href="/about" className="text-gold-600 font-medium hover:text-gold-700 flex items-center">
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-primary-100 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Quality Pulses" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-3">Quality Pulses</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  A comprehensive range of lentils, chickpeas, and beans imported directly from esteemed global farming hubs ensures nutritional excellence.
                </p>
                <Link href="/about" className="text-gold-600 font-medium hover:text-gold-700 flex items-center">
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-primary-100 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Aromatic Spices" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-3">Aromatic Spices</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Authentic, rich, and vibrant spices that form the cornerstone of Omani heritage and contemporary cuisine, carefully processed and packaged.
                </p>
                <Link href="/about" className="text-gold-600 font-medium hover:text-gold-700 flex items-center">
                  Learn more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Teaser */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Trust, Driven by Quality.</h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                As a family-owned enterprise, our reputation is our most valuable asset. We have established robust supply chains and stringent quality control protocols to ensure that every shipment reflects our commitment to excellence.
              </p>
              <ul className="space-y-4 mb-8">
                {['Direct Sourcing from Origins', 'State-of-the-Art Storage Facilities', 'Unwavering Regulatory Compliance'].map((item, i) => (
                  <li key={i} className="flex items-center text-primary-50">
                    <svg className="h-6 w-6 text-gold-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/why-us" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Discover Why Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-800 p-8 rounded-xl text-center shadow-inner">
                <div className="text-4xl font-extrabold text-gold-400 mb-2">25+</div>
                <div className="text-sm text-primary-200 font-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-primary-800 p-8 rounded-xl text-center shadow-inner mt-8">
                <div className="text-4xl font-extrabold text-gold-400 mb-2">50+</div>
                <div className="text-sm text-primary-200 font-medium uppercase tracking-wide">Global Partners</div>
              </div>
              <div className="bg-primary-800 p-8 rounded-xl text-center shadow-inner">
                <div className="text-4xl font-extrabold text-gold-400 mb-2">10k</div>
                <div className="text-sm text-primary-200 font-medium uppercase tracking-wide">Tons Annually</div>
              </div>
              <div className="bg-primary-800 p-8 rounded-xl text-center shadow-inner mt-8">
                <div className="text-4xl font-extrabold text-gold-400 mb-2">100%</div>
                <div className="text-sm text-primary-200 font-medium uppercase tracking-wide">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
