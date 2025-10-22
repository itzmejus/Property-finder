import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "../Common/button";
import { Checkbox } from "../Common/checkbox";
import { Label } from "../Common/label";
import { Slider } from "../Common/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../Common/sheet";

export interface FilterOptions {
  emirates: string[];
  bedrooms: number[];
  bathrooms: number[];
  priceRange: [number, number];
  amenities: string[];
}

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"];
const AMENITIES = ["Pool", "Gym", "Parking", "Security", "Garden", "Balcony", "Maid's Room", "Study Room"];

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);

  const toggleEmirate = (emirate: string) => {
    const newEmirates = localFilters.emirates.includes(emirate)
      ? localFilters.emirates.filter(e => e !== emirate)
      : [...localFilters.emirates, emirate];
    
    const newFilters = { ...localFilters, emirates: newEmirates };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleBedroom = (count: number) => {
    const newBedrooms = localFilters.bedrooms.includes(count)
      ? localFilters.bedrooms.filter(b => b !== count)
      : [...localFilters.bedrooms, count];
    
    const newFilters = { ...localFilters, bedrooms: newBedrooms };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleBathroom = (count: number) => {
    const newBathrooms = localFilters.bathrooms.includes(count)
      ? localFilters.bathrooms.filter(b => b !== count)
      : [...localFilters.bathrooms, count];
    
    const newFilters = { ...localFilters, bathrooms: newBathrooms };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = localFilters.amenities.includes(amenity)
      ? localFilters.amenities.filter(a => a !== amenity)
      : [...localFilters.amenities, amenity];
    
    const newFilters = { ...localFilters, amenities: newAmenities };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const updatePriceRange = (value: number[]) => {
    const newFilters = { ...localFilters, priceRange: [value[0], value[1]] as [number, number] };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters: FilterOptions = {
      emirates: [],
      bedrooms: [],
      bathrooms: [],
      priceRange: [0, 500000],
      amenities: []
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Emirates */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-[hsl(var(--navy))]">Emirate</h3>
        <div className="space-y-3">
          {EMIRATES.map((emirate) => (
            <div key={emirate} className="flex items-center space-x-2">
              <Checkbox
                id={`emirate-${emirate}`}
                checked={localFilters.emirates.includes(emirate)}
                onCheckedChange={() => toggleEmirate(emirate)}
                className="border-gray-300"
              />
              <Label
                htmlFor={`emirate-${emirate}`}
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {emirate}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-[hsl(var(--navy))]">Bedrooms</h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((count) => (
            <Button
              key={count}
              variant={localFilters.bedrooms.includes(count) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleBedroom(count)}
              className={localFilters.bedrooms.includes(count) 
                ? "bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/90" 
                : "border-gray-300"}
            >
              {count}+
            </Button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-[hsl(var(--navy))]">Bathrooms</h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((count) => (
            <Button
              key={count}
              variant={localFilters.bathrooms.includes(count) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleBathroom(count)}
              className={localFilters.bathrooms.includes(count) 
                ? "bg-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))]/90" 
                : "border-gray-300"}
            >
              {count}+
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-[hsl(var(--navy))]">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={[localFilters.priceRange[0], localFilters.priceRange[1]]}
            onValueChange={updatePriceRange}
            max={500000}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{localFilters.priceRange[0].toLocaleString()} AED</span>
            <span>{localFilters.priceRange[1].toLocaleString()} AED</span>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-[hsl(var(--navy))]">Amenities</h3>
        <div className="space-y-3">
          {AMENITIES.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity}`}
                checked={localFilters.amenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
                className="border-gray-300"
              />
              <Label
                htmlFor={`amenity-${amenity}`}
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={clearFilters}
        className="w-full border-gray-300"
      >
        <X className="mr-2 h-4 w-4" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 border-r border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[hsl(var(--navy))]">Filters</h2>
        </div>
        <FilterContent />
      </div>

      {/* Mobile Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg border-gray-300">
              <SlidersHorizontal className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-[hsl(var(--navy))]">Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
