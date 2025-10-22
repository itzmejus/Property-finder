import { Search, MapPin, Home as HomeIcon, DollarSign } from "lucide-react";
import { Input } from "../Common/input";
import { Button } from "../Common/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Common/Select";

interface HeroSectionProps {
  onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const handleSearch = () => {
    // Search functionality
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/2227005046/photo/aerial-view-of-dubai-city-skyline-at-twilight-featuring-sheikh-zayed-road.jpg?s=1024x1024&w=is&k=20&c=pzP0_90VppuZ6IDcTY0Pwwk70qFa2fPUWxgMoiCK1bI=')"
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
                placeholder="Location"
                className="h-12 pl-10 border-gray-200 focus:border-[hsl(var(--gold))] focus:ring-[hsl(var(--gold))]"
              />
            </div>
            
            {/* Property Type */}
            <Select>
              <SelectTrigger className="h-12 border-gray-200">
                <HomeIcon className="mr-2 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Price Range */}
            <Select>
              <SelectTrigger className="h-12 border-gray-200">
                <DollarSign className="mr-2 h-5 w-5 text-gray-400" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100k">Up to 100k AED</SelectItem>
                <SelectItem value="100k-200k">100k - 200k AED</SelectItem>
                <SelectItem value="200k-300k">200k - 300k AED</SelectItem>
                <SelectItem value="300k+">300k+ AED</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Search Button */}
            <Button 
              onClick={handleSearch}
              variant={'outline'}
              className="h-12 bg-[hsl(var(--navy))] text-grey hover:bg-[hsl(var(--navy))]/90 font-semibold"
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
