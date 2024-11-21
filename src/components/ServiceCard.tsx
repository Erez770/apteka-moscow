import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-accent" />
        </div>
        <h3 className="font-medium text-lg text-secondary-dark">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;