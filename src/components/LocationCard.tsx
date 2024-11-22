import { MapPin, Clock, Phone } from "lucide-react";

interface LocationCardProps {
  address: string;
  hours: string;
  phone: string;
}

const LocationCard = ({ address, hours, phone }: LocationCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary-accent" />
          </div>
          <div>
            <h3 className="font-medium text-lg text-secondary-dark mb-2">{address}</h3>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-primary-accent" />
          </div>
          <p className="text-gray-600">{hours}</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary-accent" />
          </div>
          <a
            href={`tel:${phone}`}
            className="text-primary-accent hover:text-primary-accent/80 transition-colors font-medium"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;