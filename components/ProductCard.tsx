
import React from 'react';

interface ProductCardProps {
  name: string;
  volume: string;
  price: string;
  img: string;
  onAddToCart: () => void;
  isPromo?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, volume, price, img, onAddToCart, isPromo }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="relative h-48 mb-6 flex items-center justify-center">
          {isPromo && (
            <div className="absolute -top-2 -left-2 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rotate-[-10deg] rounded shadow-sm z-10">
              aproveite!
            </div>
          )}
          <img alt={name} className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300" src={img} />
          
          <div className="absolute top-0 right-0 flex flex-col items-center">
            <div className="bg-brand-blue text-white p-2 rounded-t-lg text-center w-16 shadow">
              <span className="material-icons text-lg">sync</span>
              <p className="text-[8px] uppercase leading-tight font-bold">Retornável</p>
            </div>
            <div className="bg-brand-blue-dark text-white p-2 rounded-b-lg text-center w-16 border-t border-white/20 shadow">
              <p className="text-lg font-black leading-none">24</p>
              <p className="text-[8px] uppercase">Unidades</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-slate-500 dark:text-slate-400 mb-6">{volume}</p>
          
          <div className="bg-primary text-white p-4 -mx-6 mb-4 relative overflow-hidden">
            <p className="text-[10px] uppercase font-bold opacity-80 mb-1">Preço exclusivo*</p>
            <div className="flex items-baseline">
              <span className="text-xl font-bold mr-1">R$</span>
              <span className="text-4xl font-black">{price}</span>
            </div>
            <p className="text-[10px] font-bold uppercase mt-1">Pix ou Dinheiro</p>
          </div>
          
          <div className="space-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
            <p>Débito R${(parseFloat(price) * 1.01).toFixed(2)}</p>
            <p>Crédito R${(parseFloat(price) * 1.03).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={onAddToCart}
        className="w-full bg-slate-100 dark:bg-slate-700 text-brand-blue dark:text-white py-4 font-bold uppercase text-sm hover:bg-brand-blue hover:text-white transition-colors"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
