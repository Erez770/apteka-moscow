import { Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
            <Building className="w-6 h-6 text-primary-accent" />
            <span>Аптека СЮЗ</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-secondary-dark hover:text-primary-accent transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('locations')} 
              className="text-secondary-dark hover:text-primary-accent transition-colors"
            >
              Аптеки
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-secondary-dark hover:text-primary-accent transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-secondary-dark hover:text-primary-accent transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>

          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="hidden md:block text-primary-accent hover:text-primary-accent/80 transition-colors">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-secondary-dark hover:text-primary-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('locations')}
                className="text-secondary-dark hover:text-primary-accent transition-colors"
              >
                Аптеки
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-secondary-dark hover:text-primary-accent transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-secondary-dark hover:text-primary-accent transition-colors"
              >
                Контакты
              </button>
              <a 
                href="tel:+74951234567"
                className="text-primary-accent hover:text-primary-accent/80 transition-colors"
              >
                +7 (495) 123-45-67
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;