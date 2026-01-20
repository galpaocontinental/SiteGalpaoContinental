
import React from 'react';
import { IMAGES, CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-brand-navy hero-pattern py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">VAMOS <span className="text-primary">CONVERSAR?</span></h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">Peça agora ou solicite um orçamento para o seu estabelecimento.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-6 uppercase tracking-tight">Canais de Atendimento</h2>
              <div className="grid gap-6">
                <div className="flex items-center space-x-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-primary">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <span className="material-icons text-primary">phone_iphone</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Telefone / WhatsApp</p>
                    <p className="text-xl font-black text-brand-blue dark:text-white">{CONTACT_INFO.PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border-l-4 border-primary">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <span className="material-icons text-primary">email</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">E-mail Corporativo</p>
                    <p className="text-xl font-black text-brand-blue dark:text-white">{CONTACT_INFO.EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-80">
               <img src={IMAGES.MAP} alt="Localização" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-brand-blue/20 flex items-center justify-center">
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.ADDRESS)}`} target="_blank" className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center space-x-2 transform hover:scale-105 transition-all">
                    <span className="material-icons">location_on</span>
                    <span>VER NO GOOGLE MAPS</span>
                  </a>
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-100 dark:border-slate-700">
            <h2 className="text-3xl font-black text-brand-blue dark:text-white mb-8">ENVIE UMA MENSAGEM</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="João Silva" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Empresa / Bar</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="Bar do João" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 uppercase mb-2">Sua Mensagem</label>
                <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" placeholder="Olá, gostaria de um orçamento..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-orange-600 text-white font-black py-4 rounded-xl shadow-xl transform transition-all active:scale-95 uppercase text-lg">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
