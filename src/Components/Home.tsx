import { useState } from "react";
import HeroSection from "./HeroSection";
import PropertyCard, { type Property } from "./PropertyCard";
import FilterSidebar, { type FilterOptions } from "./FilterSidebar";
import { useNavigate } from "react-router-dom";
import { SAMPLE_PROPERTIES } from "../api/propertyData";

function Home() {
  const [filters, setFilters] = useState<FilterOptions>({
    emirates: [],
    bedrooms: [],
    bathrooms: [],
    priceRange: [0, 500000],
    amenities: []
  });

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(SAMPLE_PROPERTIES);
  const navigate = useNavigate();

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

  const handleSelectProperty = (property: any) => {
    navigate(`/property/${property.id}`);
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
              <PropertyCard key={property.id} property={property} onClick={() => handleSelectProperty(property)}
              />
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