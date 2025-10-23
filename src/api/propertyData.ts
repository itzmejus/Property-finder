import type { Property } from "../Components/PropertyCard";

export const SAMPLE_PROPERTIES: Property[] = [
    {
        id: "1",
        title: "Luxury Penthouse in Dubai Marina",
        location: "Dubai Marina, Dubai",
        price: 250000,
        bedrooms: 4,
        bathrooms: 4,
        area: 3500,
        image: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop"
        ],
        type: "Penthouse",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ],
    },
    {
        id: "2",
        title: "Modern Villa with Pool",
        location: "Palm Jumeirah, Dubai",
        price: 180000,
        bedrooms: 5,
        bathrooms: 5,
        area: 4200,
        image: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop"
        ],
        type: "Villa",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: false,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ],
    },
    {
        id: "3",
        title: "Elegant Apartment Downtown",
        location: "Downtown Dubai, Dubai",
        price: 120000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1800,
        image: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop"
        ],
        type: "Apartment",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            name: "rosesland",
            phone: "+971738399393",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    },
    {
        id: "4",
        title: "Spacious Townhouse",
        location: "Arabian Ranches, Dubai",
        price: 95000,
        bedrooms: 3,
        bathrooms: 3,
        area: 2500,
        image: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop"
        ],
        type: "Townhouse",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    },
    {
        id: "5",
        title: "Beachfront Apartment",
        location: "Jumeirah Beach Residence, Dubai",
        price: 160000,
        bedrooms: 3,
        bathrooms: 3,
        area: 2200,
        image: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"],
        type: "Apartment",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    },
    {
        id: "6",
        title: "Contemporary Villa",
        location: "Emirates Hills, Dubai",
        price: 220000,
        bedrooms: 6,
        bathrooms: 6,
        area: 5000,
        image: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"],
        type: "Villa",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    },
    {
        id: "7",
        title: "Studio Apartment",
        location: "Business Bay, Dubai",
        price: 80000,
        bedrooms: 1,
        bathrooms: 1,
        area: 850,
        image: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"],
        type: "Apartment",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    },
    {
        id: "8",
        title: "Luxury Penthouse",
        location: "DIFC, Dubai",
        price: 195000,
        bedrooms: 3,
        bathrooms: 4,
        area: 3000,
        image: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"],
        type: "Penthouse",
        description: "Experience modern living in this spacious 1-bedroom corner apartment offering exceptional ROI potential. Located in a prime Dubai location, this property features contemporary design, premium finishes, and stunning views. The corner position ensures abundant natural light and privacy. Perfect for investors and end-users alike, this apartment is situated in a well-maintained building with excellent amenities and easy access to major attractions.",
        agent: {
            phone: "+971738399393",
            name: "rosesland",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
        },
        featured: true,
        features: [
            "Balcony",
            "Built in Wardrobes",
            "Central AC",
            "Childrens play area",
            "Concierge",
            "Covered Parking",
            "Lobby in Building",
            "Security",
            "Shared Gym",
            "Shared Pool",
            "Shared SPA",
            "View of Landmark"
        ]
    }
];