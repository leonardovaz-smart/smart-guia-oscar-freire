
import React from 'react';
import { Location } from '../types';

interface LocationCardProps {
  location: Location;
}

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
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
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
