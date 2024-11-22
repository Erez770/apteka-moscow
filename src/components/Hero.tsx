import { Building } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary to-white">
      <div className="container mx-auto text-center space-y-8 animate-fade-up">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sm text-primary-accent font-medium shadow-sm">
          <Building className="w-4 h-4 mr-2" />
          4 аптеки в Москве
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-secondary-dark max-w-3xl mx-auto leading-tight">
          Ваше здоровье - наш главный приоритет
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg md:text-xl">
          Сеть современных аптек с широким ассортиментом лекарств и профессиональными консультациями
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#locations" 
            className="bg-primary-accent text-white px-8 py-3 rounded-lg hover:bg-primary-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            Найти аптеку
          </a>
          <a 
            href="tel:+74951234567"
            className="bg-white text-primary-accent px-8 py-3 rounded-lg hover:bg-gray-50 transition-all border border-primary-accent/20"
          >
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;