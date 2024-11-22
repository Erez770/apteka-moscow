import { ShieldCheck, Award, Heart, MapPin } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 text-lg">Наши преимущества перед конкурентами</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6 text-primary-accent" />}
            title="Гарантия качества"
            description="Все препараты сертифицированы"
          />
          <FeatureCard
            icon={<Award className="w-6 h-6 text-primary-accent" />}
            title="Опытные специалисты"
            description="Профессиональные консультации"
          />
          <FeatureCard
            icon={<Heart className="w-6 h-6 text-primary-accent" />}
            title="Забота о клиентах"
            description="Индивидуальный подход"
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6 text-primary-accent" />}
            title="Удобное расположение"
            description="4 аптеки в разных районах"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-primary-soft rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-3 text-secondary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;