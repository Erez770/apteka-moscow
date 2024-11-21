import { Building, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
            <Building className="w-6 h-6 text-primary-accent" />
            <span>МосАптека</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary-dark hover:text-primary-accent transition-colors">
              Главная
            </Link>
            <Link to="#locations" className="text-secondary-dark hover:text-primary-accent transition-colors">
              Аптеки
            </Link>
            <Link to="#services" className="text-secondary-dark hover:text-primary-accent transition-colors">
              Услуги
            </Link>
            <Link to="#contact" className="text-secondary-dark hover:text-primary-accent transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="hidden md:block text-primary-accent hover:text-primary-accent/80 transition-colors">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;