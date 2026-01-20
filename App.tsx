
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartCount} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <Toast show={showToast} />
      </div>
    </HashRouter>
  );
};

export default App;
