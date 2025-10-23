import { useState } from "react";
import HeroSection, { type SearchFilters } from "./HeroSection";
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
  const [activeFilters, setActiveFilters] = useState<SearchFilters | null>(null);

  const navigate = useNavigate();

  const handleSearch = (filters: SearchFilters) => {

    let results = [...SAMPLE_PROPERTIES];

    // Filter by location (case-insensitive partial match)
    if (filters.location && filters.location.trim() !== "") {
      const locationLower = filters.location.toLowerCase();
      results = results.filter(property =>
        property.location.toLowerCase().includes(locationLower) ||
        property.title.toLowerCase().includes(locationLower)
      );
    }

    // Filter by property type (exact match)
    if (filters.propertyType && filters.propertyType !== "") {
      results = results.filter(property =>
        property.type === filters.propertyType
      );
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange !== "") {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      results = results.filter(property =>
        property.price >= minPrice && property.price <= maxPrice
      );
    }

    setFilteredProperties(results);
    setActiveFilters(filters);

    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const clearFilters = () => {
    setFilteredProperties(SAMPLE_PROPERTIES);
    setActiveFilters(null);
  };


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
      <HeroSection onSearch={handleSearch} />

      {/* Main Content */}
      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

        {/* Properties Grid */}
        <div className="flex-1 p-6 lg:p-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[hsl(var(--navy))]">
              {activeFilters ? 'Search Results' : 'Featured Properties'}
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredProperties && filteredProperties?.length && filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onClick={() => handleSelectProperty(property)}
              />
            ))}
          </div>
          {/* If no results */}
          {!filteredProperties?.length &&
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <div className="mb-4">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any properties matching your search criteria.
                <br />
                Try adjusting your filters or clearing them to see all available properties.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-6 py-3 bg-[hsl(var(--navy))] text-white rounded-lg hover:bg-[hsl(var(--navy))]/90 transition-colors font-semibold"
              >
                Clear Filters & Show All Properties
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;