
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-16 pb-12 px-6 md:px-0">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
        Boas-vindas ao novo escritório da <span className="text-[#31D889]">Smart.</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-4">
        <span className="text-white font-semibold">Rua Oscar Freire, 379.</span> O coração pulsante dos Jardins. 
        Preparamos um guia de sobrevivência para você encontrar aquele PF honesto, o café gourmet para impressionar o cliente, entre muitos outros pontos de interesse.
      </p>
      <div className="text-sm text-zinc-500 flex gap-4 flex-wrap">
        <span><span className="text-[#31D889]">$</span> = Opções econômicas</span>
        <span><span className="text-[#31D889]">$$</span> = Preço médio</span>
        <span><span className="text-[#31D889]">$$$</span> = Premium</span>
        <span><span className="text-[#31D889]">$$$$</span> = Luxo</span>
      </div>
    </header>
  );
};

export default Header;
