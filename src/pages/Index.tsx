import { Building, Heart, MapPin } from "lucide-react";
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  const locations = [
    {
      address: "ул. Тверская, 1",
      hours: "Ежедневно: 08:00 - 22:00",
      phone: "+7 (495) 123-45-67"
    },
    {
      address: "Ленинский проспект, 15",
      hours: "Ежедневно: 09:00 - 21:00",
      phone: "+7 (495) 234-56-78"
    },
    {
      address: "Проспект Мира, 33",
      hours: "Ежедневно: 08:00 - 23:00",
      phone: "+7 (495) 345-67-89"
    },
    {
      address: "ул. Арбат, 24",
      hours: "Ежедневно: 09:00 - 22:00",
      phone: "+7 (495) 456-78-90"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center bg-primary-soft px-4 py-1.5 rounded-full text-sm text-primary-accent font-medium">
            <Building className="w-4 h-4 mr-2" />
            4 аптеки в Москве
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark max-w-2xl mx-auto leading-tight">
            Ваше здоровье - наш главный приоритет
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Сеть современных аптек с широким ассортиментом лекарств и профессиональными консультациями
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Наши аптеки</h2>
            <p className="text-gray-600">Найдите ближайшую аптеку в вашем районе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Наши услуги</h2>
            <p className="text-gray-600">Профессиональная забота о вашем здоровье</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              Icon={Heart}
              title="Консультации"
              description="Профессиональные консультации по лекарственным препаратам"
            />
            <ServiceCard
              Icon={Building}
              title="Широкий ассортимент"
              description="Более 10,000 наименований лекарств и товаров для здоровья"
            />
            <ServiceCard
              Icon={MapPin}
              title="Удобное расположение"
              description="4 аптеки в разных районах Москвы"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-primary-soft">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">Остались вопросы?</h2>
          <p className="text-gray-600 mb-8">Позвоните нам или посетите ближайшую аптеку</p>
          <a
            href="tel:+74951234567"
            className="inline-flex items-center bg-primary-accent text-white px-6 py-3 rounded-lg hover:bg-primary-accent/90 transition-colors"
          >
            Позвонить в аптеку
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;