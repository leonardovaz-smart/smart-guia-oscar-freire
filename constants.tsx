
import { Category, Location } from './types';

export const LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Palma de Ouro',
    category: Category.Restaurantes,
    insight: 'Aquele PF de padaria que conforta a alma e o bolso. Clássico da Tietê.',
    timeToWalk: '5 min',
    priceRange: '$',
    mapsUrl: 'https://maps.app.goo.gl/HvUhqUi57uSeyhEH7',
    isEconomic: true
  },
  {
    id: '2',
    name: 'Violeta Bar e Restaurante',
    category: Category.Restaurantes,
    insight: 'O famoso "PF do Violeta". Farto, honesto e com aquele tempero de casa de mãe.',
    timeToWalk: '15 min',
    priceRange: '$',
    mapsUrl: 'https://maps.app.goo.gl/3Kkn7pwkEfxXKAnk7',
    isEconomic: true
  },
  {
    id: '3',
    name: 'Rei do Mate',
    category: Category.Lanches,
    insight: 'Aquele pão de queijo com copão de chá que salva qualquer tarde corrida entre calls.',
    timeToWalk: '6 min',
    priceRange: '$',
    mapsUrl: 'https://maps.app.goo.gl/YGYFpQTcuMTPKUNW8',
    isEconomic: true
  },
  {
    id: '4',
    name: 'Bachir Lebanese Ice Cream',
    category: Category.CafesEDoces,
    insight: 'Sorvetes artesanais libaneses, ótimos pra um doce rápido depois do almoço ou fim de expediente.',
    timeToWalk: '6 min',
    priceRange: '$$',
    mapsUrl: 'https://maps.app.goo.gl/nTg77D62dCoKs87P6',
    isEconomic: false
  },
  {
    id: '5',
    name: 'Z Deli',
    category: Category.Lanches,
    insight: 'Hambúrguer clássico e confiável, ideal pra almoço rápido ou sexta mais relax.',
    timeToWalk: '8 min',
    priceRange: '$$$',
    mapsUrl: 'https://maps.app.goo.gl/YGYFpQTcuMTPKUNW8',
    isEconomic: false
  },
  {
    id: '6',
    name: 'Le Botteghe di Leonardo',
    category: Category.CafesEDoces,
    insight: 'Cantina italiana charmosa, boa pra almoço tranquilo ou café reforçado.',
    timeToWalk: '7 min',
    priceRange: '$$',
    mapsUrl: 'https://maps.app.goo.gl/v1TVLxCncDUp24wf8',
    isEconomic: false
  },
  {
    id: '7',
    name: 'A Fornada Padaria Jardins',
    category: Category.Restaurantes,
    insight: 'Padaria completa com ótimas opções de almoço, café e lanches.',
    timeToWalk: '4 min',
    priceRange: '$$',
    mapsUrl: 'https://maps.app.goo.gl/HvUhqUi57uSeyhEH7',
    isEconomic: false
  },
  {
    id: '8',
    name: 'Tea Connection',
    category: Category.CafesEDoces,
    insight: 'Opções leves, chás e pratos vegetarianos — vibe calma e aconchegante.',
    timeToWalk: '6 min',
    priceRange: '$$',
    mapsUrl: 'https://maps.app.goo.gl/z7kWFe7neXb177L77',
    isEconomic: false
  },
  {
    id: '9',
    name: 'Minuto Pão de Açúcar',
    category: Category.Mercados,
    insight: 'Salvador da pátria para lanches rápidos, frutas ou aquela compra de emergência.',
    timeToWalk: '3 min',
    priceRange: '$',
    mapsUrl: 'https://maps.app.goo.gl/ruN6vZnwvuDtVLMf6',
    isEconomic: true
  },
  {
    id: '10',
    name: 'Carrefour Express',
    category: Category.Mercados,
    insight: 'Para compras de emergência, snacks e itens básicos sem o glamour (e o preço) do Santa Luzia.',
    timeToWalk: '5 min',
    priceRange: '$',
    mapsUrl: 'https://www.google.com/maps/search/Carrefour+Express+Oscar+Freire',
    isEconomic: true
  },
  {
    id: '11',
    name: 'OXXO',
    category: Category.Mercados,
    insight: 'Sempre aberto, sempre gelado. Bom para bebidas e snacks de última hora.',
    timeToWalk: '5 min',
    priceRange: '$',
    mapsUrl: 'https://www.google.com/maps/search/OXXO+Oscar+Freire',
    isEconomic: true
  },
  {
    id: '12',
    name: 'Casa Santa Luzia',
    category: Category.Mercados,
    insight: 'Mercado premium com pratos prontos, cafés e opções rápidas pra levar. Cuidado pra não gastar o VR do mês.',
    timeToWalk: '10 min',
    priceRange: '$$$',
    mapsUrl: 'https://maps.app.goo.gl/BBzeF526yGdykoHZ6',
    isEconomic: false
  }
];
