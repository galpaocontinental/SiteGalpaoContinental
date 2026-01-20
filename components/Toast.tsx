
import React from 'react';

interface ToastProps {
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({ show }) => {
  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl z-[100] flex items-center space-x-3 transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}
    >
      <span className="material-icons text-green-400">check_circle</span>
      <p className="font-bold tracking-tight">Item adicionado ao seu pedido!</p>
    </div>
  );
};

export default Toast;
