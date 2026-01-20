
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../constants';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-brand-blue-dark shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white p-2 rounded shadow-sm">
            <img alt="Galpão Continental Logo" className="h-10 md:h-12" src={IMAGES.LOGO} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-bold text-slate-700 dark:text-white uppercase text-sm tracking-wider">
          <Link to="/" className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : ''}`}>Início</Link>
          <Link to="/sobre" className={`hover:text-primary transition-colors ${isActive('/sobre') ? 'text-primary' : ''}`}>Sobre Nós</Link>
          <Link to="/contato" className={`hover:text-primary transition-colors ${isActive('/contato') ? 'text-primary' : ''}`}>Contato</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary relative">
            <span className="material-icons">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <span className="material-icons dark:hidden">dark_mode</span>
            <span className="material-icons hidden dark:block">light_mode</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-600 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-blue-dark border-t dark:border-slate-700 p-4 space-y-4 font-bold uppercase text-sm tracking-wider flex flex-col">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/') ? 'text-primary' : 'text-slate-700 dark:text-white'}`}>Início</Link>
          <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/sobre') ? 'text-primary' : 'text-slate-700 dark:text-white'}`}>Sobre Nós</Link>
          <Link to="/contato" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/contato') ? 'text-primary' : 'text-slate-700 dark:text-white'}`}>Contato</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
