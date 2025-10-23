import { useState } from "react";
import { Search, MapPin, Home as HomeIcon, DollarSign } from "lucide-react";
import { Input } from "../Common/input";
import { Button } from "../Common/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Common/select";

export interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
}

interface HeroSectionProps {
  onSearch?: (filters: SearchFilters) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    priceRange: ""
  });

  const handleSearch = () => {
    if (!searchFilters.location && !searchFilters.propertyType && !searchFilters.priceRange) {
      alert("Please select at least one search criteria");
      return;
    }

    // Call parent's onSearch callback
    if (onSearch) {
      onSearch(searchFilters);
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilters({
      ...searchFilters,
      location: e.target.value
    });
  };

  const handlePropertyTypeChange = (value: string) => {
    setSearchFilters({
      ...searchFilters,
      propertyType: value
    });
  };

  const handlePriceRangeChange = (value: string) => {
    setSearchFilters({
      ...searchFilters,
      priceRange: value
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-white">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Find Your Dream Home
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Discover premium properties across Dubai, Abu Dhabi, and beyond
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-5xl rounded-2xl bg-white p-4 mb-10 shadow-2xl md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Location (e.g., Dubai Marina)"
                value={searchFilters.location}
                onChange={handleLocationChange}
                onKeyPress={handleKeyPress}
                className="h-12 pl-10 border-gray-200 focus:border-[hsl(var(--gold))] focus:ring-[hsl(var(--gold))]"
              />
            </div>

            {/* Property Type */}
            <Select value={searchFilters.propertyType} onValueChange={handlePropertyTypeChange}>
              <SelectTrigger className="h-12 border-gray-200 focus:border-[hsl(var(--gold))] focus:ring-[hsl(var(--gold))]">
                <HomeIcon className="mr-2 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1E1E] text-white">
                <SelectItem className="hover:text-[#C7A441]" value="Apartment">Apartment</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="Villa">Villa</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="Penthouse">Penthouse</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="Townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={searchFilters.priceRange} onValueChange={handlePriceRangeChange}>
              <SelectTrigger className="h-12 border-gray-200 focus:border-[hsl(var(--gold))] focus:ring-[hsl(var(--gold))]">
                <DollarSign className="mr-2 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E1E1E] text-white">
                <SelectItem className="hover:text-[#C7A441]" value="0-100000">Up to 100k AED</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="100000-200000">100k - 200k AED</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="200000-300000">200k - 300k AED</SelectItem>
                <SelectItem className="hover:text-[#C7A441]" value="300000-999999999">300k+ AED</SelectItem>
              </SelectContent>
            </Select>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className="h-12 bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90 font-semibold"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}