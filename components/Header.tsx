
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-16 pb-12 px-6 md:px-0">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
        Boas-vindas ao novo escritório da <span style={{ color: '#31D889' }}>Smart.</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
        <span className="text-white font-semibold">Rua Oscar Freire, 379.</span> O coração pulsante dos Jardins. 
        Preparamos um guia de sobrevivência para você não se perder (muito) e achar aquele PF honesto ou o café gourmet para impressionar o cliente.
      </p>
    </header>
  );
};

export default Header;
