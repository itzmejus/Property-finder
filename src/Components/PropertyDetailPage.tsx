import { useEffect, useState } from "react";
import { Bed, Bath, Maximize, MapPin, Heart, Share2, Mail, MessageCircle, ChevronLeft, ChevronRight, Home, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SAMPLE_PROPERTIES } from "../api/propertyData";
import type { Property } from "./PropertyCard";

export default function PropertyDetailPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const [formData, setFormData] = useState<Property>();

    const { id } = useParams();

    useEffect(() => {

        const selectedProperty = SAMPLE_PROPERTIES?.find((p: Property) => p.id === id)
        setFormData(selectedProperty);
    }, [id])

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === formData?.image.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? formData?.image.length - 1 : prev - 1
        );
    };

    const handleInputChange = () => {
        //implement this function
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen bg-white m-10">
            {/* Breadcrumb */}
            <div className="border-b border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Home className="h-4 w-4" />
                        <Link to={'/'}>
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-gray-900 font-medium">{formData?.title}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Title Section */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    {formData?.featured && (
                                        <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded mb-2">
                                            FEATURED
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                                        <Share2 className="h-5 w-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={() => setIsSaved(!isSaved)}
                                        className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                    >
                                        <Heart className={`h-5 w-5 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                                    </button>
                                    <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                                        <Mail className="h-5 w-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                {formData?.title}
                            </h1>

                            <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{formData?.location}</span>
                            </div>

                            <div className="flex items-baseline gap-2">
                                <span className="text-gray-600 text-sm">AED</span>
                                <span className="text-3xl font-bold text-gray-900">
                                    AED {formData?.price.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100" style={{ height: "450px" }}>
                                <img
                                    src={formData?.image[currentImageIndex]}
                                    alt={formData?.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                >
                                    <ChevronRight className="h-6 w-6 text-gray-800" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium">
                                    {currentImageIndex + 1} / {formData?.image.length}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div className="grid grid-cols-7 gap-2">
                                {formData?.image.map((image: any, index: any) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative aspect-square rounded overflow-hidden transition-all ${currentImageIndex === index
                                            ? "ring-2 ring-blue-500"
                                            : "opacity-70 hover:opacity-100"
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Overview Section */}
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <Home className="h-5 w-5" />
                                        <span className="text-sm">Property Type</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{formData?.type}</span>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <Bed className="h-5 w-5" />
                                        <span className="text-sm">Bedroom</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{formData?.bedrooms}</span>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <Bath className="h-5 w-5" />
                                        <span className="text-sm">Bathroom</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{formData?.bathrooms}</span>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <Maximize className="h-5 w-5" />
                                        <span className="text-sm">Sqft</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{formData?.area}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {formData?.description}
                            </p>
                        </div>
                        {/* Features Section */}
                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6 text-gray-700">
                                {formData?.features?.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        {/* Checkmark icon (Tailwind Lucide) */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5 text-green-600"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        <span className="text-sm capitalize">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
                            {/* Agent Info */}
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <User className="h-6 w-6 text-gray-500" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{formData?.agent.name}</div>
                                    <Link to={'/'}>
                                        <button className="text-sm text-blue-600 hover:underline">View Listings</button>
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData?.agent?.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData?.agent?.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={'testemail@gmail.com'}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={"test message"}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="text-xs text-gray-600">
                                    By submitting this form I agree to{" "}
                                    <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>
                                </div>

                                {/* reCAPTCHA placeholder */}
                                <div className="bg-gray-100 border border-gray-300 rounded p-4 flex items-center justify-center">
                                    <span className="text-sm text-gray-600">I'm not a robot</span>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors"
                                >
                                    Send Message
                                </button>

                                <button
                                    type="button"
                                    className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 rounded-md border-2 border-gray-300 transition-colors"
                                >
                                    Call
                                </button>

                                <button
                                    type="button"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}