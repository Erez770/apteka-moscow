import { Search } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-secondary-dark">Поиск препаратов</h2>
          <p className="text-gray-600 text-lg">Найдите необходимые лекарства в наших аптеках</p>
          <div className="flex gap-2 p-2 bg-white rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Введите название препарата"
              className="flex-1 px-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-primary-accent/20 rounded-lg"
            />
            <button className="bg-primary-accent text-white px-6 py-3 rounded-lg hover:bg-primary-accent/90 transition-all hover:scale-105">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;