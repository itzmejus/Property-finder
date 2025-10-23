import { useState } from "react";
import { Phone, Mail, MapPin, Building2, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        propertyType: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* UAE Map Section */}
            <div className="relative bg-gradient-to-br from-[#2C2C2C] via-[#3a3a3a] to-[#2C2C2C] py-24 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961] rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="bg-[#C9A961] text-[#2C2C2C] px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                                OUR PRESENCE
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Find Us Every Where <br />
                            <span className="text-[#C9A961]">In UAE</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Located in the most heated cities in the Middle East
                        </p>
                    </div>

                    {/* UAE Map with Modern Design */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/10">
                            <svg viewBox="0 0 800 500" className="w-full h-auto drop-shadow-2xl">
                                {/* Glow Effect */}
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#E6C687', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#C9A961', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>

                                {/* UAE Map Shape */}
                                <path
                                    d="M 200 300 L 250 280 L 300 260 L 350 250 L 400 245 L 450 240 L 500 235 L 550 230 L 600 220 L 650 200 L 680 180 L 700 160 L 720 140 L 730 130 L 735 125 L 740 122 L 745 120 L 750 118 L 755 115 L 758 112 L 760 110 L 762 112 L 765 115 L 768 120 L 770 125 L 772 130 L 773 135 L 774 140 L 774 145 L 773 150 L 772 155 L 770 160 L 768 165 L 765 170 L 762 175 L 760 180 L 758 185 L 755 195 L 753 205 L 752 215 L 751 225 L 750 235 L 750 245 L 748 255 L 745 265 L 742 275 L 738 285 L 735 295 L 730 305 L 725 315 L 720 325 L 715 330 L 710 335 L 705 340 L 700 343 L 690 348 L 680 352 L 670 355 L 660 358 L 650 360 L 640 362 L 630 363 L 620 364 L 610 364 L 600 364 L 590 363 L 580 362 L 570 360 L 560 358 L 550 355 L 540 352 L 530 348 L 520 344 L 510 340 L 500 336 L 490 332 L 480 328 L 470 324 L 460 320 L 450 316 L 440 312 L 430 308 L 420 305 L 410 302 L 400 300 L 390 298 L 380 297 L 370 296 L 360 295 L 350 295 L 340 295 L 330 296 L 320 297 L 310 298 L 300 299 L 290 300 L 280 301 L 270 302 L 260 303 L 250 304 L 240 305 L 230 306 L 220 307 L 210 307 L 200 307 Z"
                                    fill="url(#mapGradient)"
                                    stroke="#E6C687"
                                    strokeWidth="3"
                                    filter="url(#glow)"
                                    className="drop-shadow-xl"
                                />

                                {/* Dubai Marker - Animated */}
                                <g className="animate-bounce">
                                    <circle cx="650" cy="200" r="12" fill="#2C2C2C" stroke="white" strokeWidth="3" />
                                    <circle cx="650" cy="200" r="20" fill="#C9A961" opacity="0.3" className="animate-ping" />
                                </g>
                                <text x="650" y="180" textAnchor="middle" className="text-base font-bold fill-white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}>
                                    Dubai
                                </text>

                                {/* Abu Dhabi Marker - Animated */}
                                <g className="animate-bounce delay-500">
                                    <circle cx="550" cy="250" r="12" fill="#2C2C2C" stroke="white" strokeWidth="3" />
                                    <circle cx="550" cy="250" r="20" fill="#C9A961" opacity="0.3" className="animate-ping" />
                                </g>
                                <text x="550" y="230" textAnchor="middle" className="text-base font-bold fill-white" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}>
                                    Abu Dhabi
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-20 relative bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Form */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C9A961]/20 to-transparent rounded-bl-full"></div>

                                <div className="relative">
                                    <div className="mb-8">
                                        <span className="bg-gradient-to-r from-[#2C2C2C] to-[#3a3a3a] text-white px-4 py-2 rounded-full text-sm font-bold">
                                            FREE CONSULTATION
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">
                                        Get Your Dream Home
                                    </h2>
                                    <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                                    {isSubmitted && (
                                        <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top">
                                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                                            <span className="text-green-700 font-semibold">Thank you! We'll contact you soon.</span>
                                        </div>
                                    )}

                                    <div className="space-y-5">
                                        {/* Name Field */}
                                        <div className="group">
                                            <label className="block text-sm font-bold text-[#2C2C2C] mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C9A961] focus:border-[#C9A961] outline-none transition-all group-hover:border-gray-300"
                                                required
                                            />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="group">
                                            <label className="block text-sm font-bold text-[#2C2C2C] mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-2">
                                                <div className="flex items-center px-4 bg-gray-50 border-2 border-gray-200 rounded-xl group-hover:border-gray-300 transition-all">
                                                    <span className="text-2xl">🇦🇪</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="050 123 4567"
                                                    className="flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C9A961] focus:border-[#C9A961] outline-none transition-all group-hover:border-gray-300"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Property Type */}
                                        <div className="group">
                                            <label className="block text-sm font-bold text-[#2C2C2C] mb-2">
                                                Property Type <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C9A961] focus:border-[#C9A961] outline-none transition-all appearance-none bg-white group-hover:border-gray-300"
                                                required
                                            >
                                                <option value="">Select apartment type</option>
                                                <option value="studio">Studio</option>
                                                <option value="1br">1 BR Apartment</option>
                                                <option value="2br">2 BR Apartment</option>
                                                <option value="3br">3 BR Apartment</option>
                                                <option value="villa">Villa</option>
                                                <option value="townhouse">Townhouse</option>
                                                <option value="penthouse">Penthouse</option>
                                            </select>
                                        </div>

                                        {/* Message Field */}
                                        <div className="group">
                                            <label className="block text-sm font-bold text-[#2C2C2C] mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your requirements..."
                                                rows={4}
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C9A961] focus:border-[#C9A961] outline-none transition-all resize-none group-hover:border-gray-300"
                                            />
                                        </div>

                                        {/* reCAPTCHA */}
                                        <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-all">
                                            <input type="checkbox" className="w-5 h-5 rounded accent-[#C9A961]" />
                                            <span className="text-gray-700 font-medium">I'm not a robot</span>
                                            <div className="ml-auto text-right">
                                                <div className="text-xs font-bold text-gray-700">reCAPTCHA</div>
                                                <div className="text-xs text-gray-500">Privacy - Terms</div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-gradient-to-r from-[#2C2C2C] to-[#3a3a3a] text-white py-5 rounded-xl hover:shadow-2xl transition-all font-bold text-lg flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <span>Send Message</span>
                                            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Info */}
                        <div className="space-y-6">
                            {/* Contact Numbers Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-gradient-to-br from-[#2C2C2C] to-[#3a3a3a] p-3 rounded-xl">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2C2C2C]">Contact Numbers</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#C9A961] hover:scale-[1.02] transition-transform">
                                        <h4 className="font-bold text-lg text-[#2C2C2C] mb-2">Tarek E*****</h4>
                                        <p className="text-[#C9A961] font-semibold mb-3">General Manager</p>
                                        <div className="space-y-2 text-gray-600">
                                            <p className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-[#2C2C2C]" />
                                                <span>+971 50 *** ****</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-[#2C2C2C]" />
                                                <span className="text-sm">tarek*****@roseislandre.com</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#2C2C2C] hover:scale-[1.02] transition-transform">
                                        <h4 className="font-bold text-lg text-[#2C2C2C] mb-3">Office Number</h4>
                                        <div className="space-y-2 text-gray-600">
                                            <p className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-[#2C2C2C]" />
                                                <span>02 444 ****</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-[#2C2C2C]" />
                                                <span>Info@****islandre.com</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Headquarters Card */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-gradient-to-br from-[#2C2C2C] to-[#3a3a3a] p-3 rounded-xl">
                                        <Building2 className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2C2C2C]">Our Offices</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#C9A961] hover:scale-[1.02] transition-transform">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-[#C9A961] mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2C] mb-2">Abu Dhabi Office</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Al **** Bldg. – Office no ***, Al Salam Street – Abu Dhabi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#2C2C2C] hover:scale-[1.02] transition-transform">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-[#2C2C2C] mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-[#2C2C2C] mb-2">Dubai Office</h4>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Tamani **** Building – Office no *** Al Asayel St – Business Bay – Dubai
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}