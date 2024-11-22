import { Building, Heart, MapPin, Star, Award, Search, Truck, MessageSquare, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import Features from "../components/Features";
import LocationCard from "../components/LocationCard";

const Index = () => {
  const locations = [
    {
      address: "14-й км МКАД, корпус А, павильон 2А-57",
      hours: "Ежедневно: 09:00 - 21:00",
      phone: "+7 (495) 123-45-67"
    },
    {
      address: "14-й км МКАД, линия 17, павильон 132/134",
      hours: "Ежедневно: 09:00 - 21:00", 
      phone: "+7 (495) 234-56-78"
    },
    {
      address: "14-й км МКАД, линия 12, павильон 06/08",
      hours: "Ежедневно: 09:00 - 21:00",
      phone: "+7 (495) 345-67-89"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <SearchSection />
      <Features />

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600 text-lg">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Отличный сервис и профессиональные консультации!",
                author: "Анна К.",
                rating: 5
              },
              {
                text: "Всегда нахожу нужные лекарства по хорошим ценам",
                author: "Михаил С.",
                rating: 5
              },
              {
                text: "Удобное расположение и быстрое обслуживание",
                author: "Елена П.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-lg">{review.text}</p>
                <p className="font-medium text-secondary-dark">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Наши аптеки</h2>
            <p className="text-gray-600 text-lg">Найдите ближайшую аптеку в вашем районе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-6">Остались вопросы?</h2>
          <p className="text-gray-600 text-lg mb-8">Позвоните нам или посетите ближайшую аптеку</p>
          <a
            href="tel:+74951234567"
            className="inline-flex items-center bg-primary-accent text-white px-8 py-4 rounded-lg hover:bg-primary-accent/90 transition-all hover:scale-105 text-lg font-medium shadow-lg"
          >
            Позвонить в аптеку
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;