
import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-secondary text-white py-20 hero-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase">NOSSA HISTÓRIA</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Tradição, agilidade e o compromisso de entregar sempre a cerveja mais gelada da região.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <img alt="Galpão" src={IMAGES.ABOUT_HERO} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl hidden lg:block transform rotate-3">
                <p className="text-5xl font-black">15+</p>
                <p className="font-bold uppercase text-sm tracking-widest">Anos de Mercado</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Desde 2009</span>
              <h2 className="text-4xl font-black text-brand-blue dark:text-white">Excelência em Distribuição</h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>O <strong>Galpão Continental</strong> nasceu da necessidade de um serviço de distribuição que entendesse o ritmo dos bares e restaurantes de São Paulo.</p>
                <p>Somos especialistas no fornecimento ágil de bebidas, garantindo que seu estoque esteja sempre abastecido com as melhores marcas, na temperatura ideal.</p>
                <p>Nossa frota própria e equipe treinada permitem entregas recordes, reduzindo o tempo de espera e aumentando a satisfação de seus clientes finais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform">
            <span className="material-icons text-primary text-5xl mb-6">bolt</span>
            <h3 className="text-2xl font-bold mb-4 uppercase text-brand-blue dark:text-white">Rapidez Total</h3>
            <p className="text-slate-500">Logística otimizada para entregas em tempo recorde em toda a região metropolitana.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform">
            <span className="material-icons text-primary text-5xl mb-6">ac_unit</span>
            <h3 className="text-2xl font-bold mb-4 uppercase text-brand-blue dark:text-white">Sempre Gelada</h3>
            <p className="text-slate-500">Câmaras frias de última geração para garantir que a bebida chegue no ponto ideal para o consumo.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform">
            <span className="material-icons text-primary text-5xl mb-6">payments</span>
            <h3 className="text-2xl font-bold mb-4 uppercase text-brand-blue dark:text-white">Melhor Preço</h3>
            <p className="text-slate-500">Negociação direta com as maiores cervejarias do mundo para oferecer o melhor custo-benefício.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
