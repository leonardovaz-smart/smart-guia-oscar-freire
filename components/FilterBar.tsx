
import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  showEconomicOnly: boolean;
  onToggleEconomic: (value: boolean) => void;
}

const CATEGORY_ITEMS = [
  { label: Category.Tudo, icon: '🌟' },
  { label: Category.Restaurantes, icon: '🍽️' },
  { label: Category.Lanches, icon: '🍔' },
  { label: Category.CafesEDoces, icon: '☕' },
  { label: Category.HappyHour, icon: '🍻' },
  { label: Category.Wellness, icon: '🧘' },
  { label: Category.Mercados, icon: '🛒' },
  { label: Category.Servicos, icon: '🛠️' },
];

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  showEconomicOnly,
  onToggleEconomic,
}) => {
  return (
    <div className="space-y-8 mb-12">
      {/* Scroll horizontal das categorias */}
      <div className="flex overflow-x-auto gap-3 hide-scrollbar pb-2 -mx-6 px-6 md:mx-0 md:px-0">
        {CATEGORY_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => onSelectCategory(item.label)}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full border whitespace-nowrap transition-all duration-200 text-sm font-semibold
              ${selectedCategory === item.label 
                ? 'bg-[#31D889] border-[#31D889] text-black shadow-[0_0_15px_rgba(49,216,137,0.3)]' 
                : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-600'
              }
            `}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Toggle de Econômicos ajustado para mobile */}
      <div className="flex items-center">
        <label className="relative flex items-center cursor-pointer group select-none">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showEconomicOnly}
              onChange={(e) => onToggleEconomic(e.target.checked)}
            />
            {/* O "flex-shrink-0" impede que o botão amasse no mobile */}
            <div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#31D889] flex-shrink-0"></div>
          </div>
          <span className="ml-4 text-sm font-medium text-zinc-300 leading-snug group-hover:text-white transition-colors">
            Mostrar apenas opções econômicas <span className="text-zinc-500 font-normal">(até R$ 30)</span>
          </span>
        </label>
      </div>
      
      <div className="h-px bg-zinc-900 w-full" />
    </div>
  );
};

export default FilterBar;
