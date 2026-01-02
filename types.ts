
export enum Category {
  Tudo = 'Tudo',
  Restaurantes = 'Restaurantes',
  Lanches = 'Lanches',
  CafesEDoces = 'Cafés & Doces',
  HappyHour = 'Happy Hour',
  Wellness = 'Wellness',
  Mercados = 'Mercados',
  Servicos = 'Serviços'
}

export type PriceRange = '$' | '$$' | '$$$';

export interface Location {
  id: string;
  name: string;
  category: Category;
  insight: string;
  timeToWalk: string;
  priceRange: PriceRange;
  mapsUrl: string;
  isEconomic: boolean; // Below R$30
}
