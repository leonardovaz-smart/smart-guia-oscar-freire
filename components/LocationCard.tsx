
import React from 'react';
import { Location } from '../types';

interface LocationCardProps {
  location: Location;
}

const WalkingIcon = () => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 20H9l2.1-7.3L13 15v5h2V14l-2.4-2.4.6-2.8c1.1 1.3 2.7 2.2 4.8 2.2V9c-1.8 0-3.3-.8-4.2-2.1L12.9 5c-.4-.7-1.2-1.1-2.1-1.1-.3 0-.6.1-.9.2L5 6.4V12h2V8.5l1.8-.7.6 2.1z" />
  </svg>
);

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="bg-[#111111] rounded-2xl border border-zinc-800 p-6 flex flex-col h-full hover:border-[#31D889]/30 transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white pr-4">{location.name}</h3>
        <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-[#31D889] text-[#31D889] font-bold shrink-0">
          {location.category.toUpperCase().replace('&', 'E')}
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm text-zinc-400 mb-4">
        <div className="flex items-center gap-1">
          <WalkingIcon />
          {location.timeToWalk}
        </div>
        <div className="font-bold text-[#31D889]">
          {location.priceRange}
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-6">
        {location.insight}
      </p>

      <div className="pt-4 border-t border-zinc-900 mt-auto">
        <a 
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-[#31D889] transition-colors"
        >
          Abrir no Mapa
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
