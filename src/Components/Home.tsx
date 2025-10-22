import { useState } from "react";
import HeroSection from "./HeroSection";
import PropertyCard, { type Property } from "./PropertyCard";
import FilterSidebar, { type FilterOptions } from "./FilterSidebar";

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Luxury Penthouse in Dubai Marina",
    location: "Dubai Marina, Dubai",
    price: 250000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    type: "Penthouse"
  },
  {
    id: "2",
    title: "Modern Villa with Pool",
    location: "Palm Jumeirah, Dubai",
    price: 180000,
    bedrooms: 5,
    bathrooms: 5,
    area: 4200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    type: "Villa"
  },
  {
    id: "3",
    title: "Elegant Apartment Downtown",
    location: "Downtown Dubai, Dubai",
    price: 120000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    type: "Apartment"
  },
  {
    id: "4",
    title: "Spacious Townhouse",
    location: "Arabian Ranches, Dubai",
    price: 95000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    type: "Townhouse"
  },
  {
    id: "5",
    title: "Beachfront Apartment",
    location: "Jumeirah Beach Residence, Dubai",
    price: 160000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    type: "Apartment"
  },
  {
    id: "6",
    title: "Contemporary Villa",
    location: "Emirates Hills, Dubai",
    price: 220000,
    bedrooms: 6,
    bathrooms: 6,
    area: 5000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    type: "Villa"
  },
  {
    id: "7",
    title: "Studio Apartment",
    location: "Business Bay, Dubai",
    price: 80000,
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    type: "Apartment"
  },
  {
    id: "8",
    title: "Luxury Penthouse",
    location: "DIFC, Dubai",
    price: 195000,
    bedrooms: 3,
    bathrooms: 4,
    area: 3000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    type: "Penthouse"
  }
];

function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    emirates: [],
    bedrooms: [],
    bathrooms: [],
    priceRange: [0, 500000],
    amenities: []
  });

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(SAMPLE_PROPERTIES);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    // Apply filters
    let filtered = SAMPLE_PROPERTIES;
    
    // Filter by price range
    filtered = filtered.filter(
      p => p.price >= newFilters.priceRange[0] && p.price <= newFilters.priceRange[1]
    );
    
    // Filter by bedrooms
    if (newFilters.bedrooms.length > 0) {
      filtered = filtered.filter(p => 
        newFilters.bedrooms.some(bed => p.bedrooms >= bed)
      );
    }
    
    // Filter by bathrooms
    if (newFilters.bathrooms.length > 0) {
      filtered = filtered.filter(p => 
        newFilters.bathrooms.some(bath => p.bathrooms >= bath)
      );
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        
        {/* Properties Grid */}
        <div className="flex-1 p-6 lg:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-2">
              Featured Properties
            </h2>
            <p className="text-gray-600">
              Showing {filteredProperties.length} premium properties
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-xl text-gray-600 mb-2">No properties found</p>
              <p className="text-gray-500">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;