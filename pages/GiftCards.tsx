import React, { useState } from 'react';
import { CreditCard, Gift, Send } from 'lucide-react';

export const GiftCards: React.FC = () => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value));
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-background-light dark:bg-[#0f0f11] flex items-center justify-center p-4">
       <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="mb-10">
                <h1 className="text-5xl md:text-7xl font-serif font-black text-[#161118] dark:text-white mb-6 uppercase tracking-tighter leading-none">
                  Give the <br/> <span className="text-primary italic">Ultimate Glow</span>
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Digital gift cards for the person who has everything (except perfect hair). Sent instantly via email.
                </p>
             </div>

             <div className="bg-white dark:bg-[#1a1a1c] p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/5">
                <label className="block text-sm font-bold uppercase tracking-widest mb-4 text-gray-500">Select Amount</label>
                <div className="grid grid-cols-3 gap-4 mb-6">
                   {[50, 100, 200].map((val) => (
                     <button 
                       key={val}
                       onClick={() => { setAmount(val); setCustomAmount(''); }}
                       className={`py-4 rounded-xl font-black text-xl transition-all ${amount === val ? 'bg-[#161118] dark:bg-white text-white dark:text-black shadow-lg scale-105' : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10'}`}
                     >
                       ${val}
                     </button>
                   ))}
                </div>
                
                <div className="mb-8">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Or Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg">$</span>
                    <input 
                      type="number" 
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="Enter amount"
                      className="w-full h-14 pl-8 pr-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary outline-none font-bold text-lg"
                    />
                  </div>
                </div>

                <button className="w-full h-16 bg-primary text-white rounded-full font-black uppercase tracking-widest text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                  <CreditCard className="w-6 h-6" /> Purchase Card
                </button>
             </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-md aspect-[1.586/1] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#161118] to-[#2d1b36] p-8 flex flex-col justify-between text-white">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
                   
                   <div className="relative z-10 flex justify-between items-start">
                      <span className="font-serif font-black text-3xl italic">MAS SALON</span>
                      <span className="font-mono text-xl">${amount || '0'}</span>
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="size-10 bg-white/20 backdrop-blur-md rounded-full"></div>
                         <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                      </div>
                      <p className="font-mono text-sm opacity-60 tracking-widest">#### #### #### ####</p>
                   </div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             </div>
          </div>
       </div>
    </div>
  );
};