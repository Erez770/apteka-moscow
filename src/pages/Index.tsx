import { Building, Heart, MapPin, Star, Award, Search, Truck, MessageSquare, ShieldCheck } from "lucide-react";
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

  const reviews = [
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

      {/* Drug Search Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold text-secondary-dark">Поиск препаратов</h2>
            <p className="text-gray-600">Найдите необходимые лекарства в наших аптеках</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Введите название препарата"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              />
              <button className="bg-primary-accent text-white px-6 py-2 rounded-lg hover:bg-primary-accent/90 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600">Наши преимущества перед конкурентами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6 text-primary-accent" />
              </div>
              <h3 className="font-medium">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">Все препараты сертифицированы</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-primary-accent" />
              </div>
              <h3 className="font-medium">Опытные специалисты</h3>
              <p className="text-gray-600 text-sm">Профессиональные консультации</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-primary-accent" />
              </div>
              <h3 className="font-medium">Забота о клиентах</h3>
              <p className="text-gray-600 text-sm">Индивидуальный подход</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-primary-accent" />
              </div>
              <h3 className="font-medium">Удобное расположение</h3>
              <p className="text-gray-600 text-sm">4 аптеки в разных районах</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
                <p className="font-medium text-secondary-dark">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16 px-4 bg-primary-soft">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Доставка препаратов</h2>
            <p className="text-gray-600">Быстрая и удобная доставка лекарств</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Быстрая доставка</h3>
                  <p className="text-gray-600">Доставляем заказы в день оформления по Москве</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Консультация при заказе</h3>
                  <p className="text-gray-600">Наши специалисты помогут с выбором препаратов</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Адрес доставки"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                />
                <button className="w-full bg-primary-accent text-white px-6 py-3 rounded-lg hover:bg-primary-accent/90 transition-colors">
                  Заказать доставку
                </button>
              </form>
            </div>
          </div>
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