
import React from 'react';
import ProductCard from '../components/ProductCard';
import { IMAGES } from '../constants';

interface HomeProps {
  onAddToCart: () => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header 
        className="text-white py-16 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.HERO_BANNER})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#305aa6',
          minHeight: '220px'
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-center" />
        <div className="absolute top-0 left-0 w-full h-4 bg-orange-500 opacity-30"></div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20" id="ofertas">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-4 md:space-y-0">
          <h3 className="text-3xl md:text-4xl font-black text-brand-blue dark:text-white border-l-8 border-primary pl-4 uppercase">
            Ofertas Imbatíveis
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
            *Preços válidos enquanto durarem os estoques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ProductCard name="Cerveja Heineken" volume="Garrafa 600ml" price="220" img={IMAGES.HEINEKEN} onAddToCart={onAddToCart} />
          <ProductCard name="Cerveja Amstel" volume="Garrafa 600ml" price="155" img={IMAGES.AMSTEL} onAddToCart={onAddToCart} isPromo={true} />
          <ProductCard name="Cerveja Original" volume="Garrafa 600ml" price="185" img={IMAGES.ORIGINAL} onAddToCart={onAddToCart} isPromo={true} />
          <ProductCard name="Cerveja Spaten" volume="Garrafa 600ml" price="185" img={IMAGES.SPATEN} onAddToCart={onAddToCart} />
        </div>
      </main>

      {/* Promotional Banner */}
      <section className="bg-slate-100 dark:bg-slate-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl md:text-3xl font-black text-brand-blue dark:text-white uppercase tracking-wider leading-relaxed">
            ENTREGA ULTRA RÁPIDA E ESTOQUE SEMPRE RENOVADO!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
