import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Card, CardContent } from "../Common/card";
import { Badge } from "../Common/badge";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
}

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <Card 
      className="group overflow-hidden border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-semibold">
          {property.type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-xl font-bold text-[hsl(var(--navy))] line-clamp-1">
            {property.title}
          </h3>
        </div>
        
        <div className="mb-4 flex items-center text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="mb-4 flex items-center gap-4 text-gray-700">
          <div className="flex items-center gap-1">
            <Bed className="h-5 w-5 text-[hsl(var(--navy))]" />
            <span className="font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-5 w-5 text-[hsl(var(--navy))]" />
            <span className="font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-5 w-5 text-[hsl(var(--navy))]" />
            <span className="font-medium">{property.area} sqft</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <p className="text-3xl font-bold text-[hsl(var(--navy))]">
            {property.price.toLocaleString()} <span className="text-lg font-normal text-gray-600">AED</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
