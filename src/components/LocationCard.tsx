import { MapPin } from "lucide-react";

interface LocationCardProps {
  address: string;
  hours: string;
  phone: string;
}

const LocationCard = ({ address, hours, phone }: LocationCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-up">
      <div className="flex items-start space-x-4">
        <MapPin className="w-5 h-5 text-primary-accent mt-1" />
        <div className="space-y-2">
          <h3 className="font-medium text-lg text-secondary-dark">{address}</h3>
          <p className="text-gray-600 text-sm">{hours}</p>
          <a
            href={`tel:${phone}`}
            className="text-primary-accent hover:text-primary-accent/80 transition-colors text-sm"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;