
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 relative overflow-hidden wavy-footer">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 space-y-8 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-2">
              ENTREGA <span className="underline">RÁPIDA</span>
            </h3>
            <p className="text-white/80 font-bold tracking-widest uppercase text-sm">Preços válidos enquanto durarem os estoques</p>
          </div>
          
          <a 
            href={`https://wa.me/${CONTACT_INFO.WHATSAPP}`} 
            target="_blank" 
            className="bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-5 rounded-2xl flex items-center space-x-6 shadow-2xl transition-all transform hover:scale-105 group"
          >
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <span className="material-icons text-3xl">phone_in_talk</span>
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-widest leading-none">
              {CONTACT_INFO.PHONE}
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-white/20 text-white">
          <div className="space-y-4">
            <h4 className="text-xl font-black uppercase">Galpão Continental</h4>
            <p className="opacity-80 leading-relaxed font-medium">A maior distribuidora de bebidas geladas da região. Especialistas em abastecimento rápido para o varejo e atacado.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-black uppercase">Localização</h4>
            <div className="flex items-start space-x-3 opacity-80">
              <span className="material-icons text-sm mt-1">location_on</span>
              <p className="font-medium">{CONTACT_INFO.ADDRESS}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-black uppercase">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors">
                <span className="material-icons text-sm">camera_alt</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm font-bold">
          <p>© 2026 Galpão Continental. Todos os direitos reservados. Beba com moderação.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
