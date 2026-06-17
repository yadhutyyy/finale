import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">
                            Al Diyar <span className="text-gold-500">Al Arabia</span>
                        </h3>
                        <p className="text-primary-200 text-sm max-w-sm mb-6 leading-relaxed">
                            A trusted leader in food grains, pulses, and spices trading based in Oman.
                            Delivering quality and reliability to businesses and families alike.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-primary-200">
                            <li><Link href="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gold-500 transition-colors">About</Link></li>
                            <li><Link href="/values" className="hover:text-gold-500 transition-colors">Values</Link></li>
                            <li><Link href="/founder" className="hover:text-gold-500 transition-colors">The Founder</Link></li>
                            <li><Link href="/why-us" className="hover:text-gold-500 transition-colors">Why Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-primary-200">
                            <li>📍 Muscat, Sultanate of Oman</li>
                            <li>📞 +968 1234 5678</li>
                            <li>✉️ info@aldiyaralarabia.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
                    <p>&copy; {new Date().getFullYear()} Al Diyar Al Arabia. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
