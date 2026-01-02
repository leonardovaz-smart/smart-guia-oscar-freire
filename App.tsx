
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import LocationCard from './components/LocationCard';
import { LOCATIONS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Tudo);
  const [showEconomicOnly, setShowEconomicOnly] = useState(false);

  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter((loc) => {
      const matchesCategory = selectedCategory === Category.Tudo || loc.category === selectedCategory;
      const matchesEconomic = showEconomicOnly ? loc.isEconomic : true;
      return matchesCategory && matchesEconomic;
    });
  }, [selectedCategory, showEconomicOnly]);

  return (
    <div className="min-h-screen bg-black text-white px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <FilterBar 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory}
          showEconomicOnly={showEconomicOnly}
          onToggleEconomic={setShowEconomicOnly}
        />

        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-bold text-zinc-600 mb-2">Ops, nada por aqui ainda.</h3>
            <p className="text-zinc-500">Talvez o estagiário tenha esquecido de cadastrar ou não sobrou verba pra essa categoria.</p>
          </div>
        )}

        <footer className="mt-20 pt-12 border-t border-zinc-900 text-center text-zinc-600 text-sm italic">
          <p>© {new Date().getFullYear()} Smart. Feito com ❤️ (e muito café) para os Smarters.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
