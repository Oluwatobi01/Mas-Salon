import React from 'react';
import { Sparkles, Recycle, Palette, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-background-light dark:bg-[#1d1022]">
      {/* Manifesto Hero */}
      <div className="w-full px-4 md:px-10 pb-16 pt-6 md:pb-24 md:pt-10 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                 <Sparkles className="w-4 h-4 text-primary" />
                 <span className="text-primary text-xs font-bold uppercase tracking-wider">Est. 2024</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-[#161118] dark:text-white leading-[0.9] tracking-tighter">
                  Not Your <br/> <span className="text-primary">Grandma's Salon.</span>
               </h1>
               <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-xl">
                 Where Hair Meets Hype. We are a collective of artists dedicated to inclusivity, self-expression, and sustainable beauty. Come as you are, leave as who you want to be.
               </p>
               <div className="flex gap-4 mt-2">
                 <button className="h-12 px-8 rounded-full bg-[#161118] dark:bg-white text-white dark:text-[#161118] font-bold hover:scale-105 transition-transform">
                   Read Our Manifesto
                 </button>
               </div>
            </div>
            <div className="flex-1 relative">
               <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK18N5IkDrWUHiIAp4vGqVV8IQMLa9wKXImmd-DaKIebIE6RVWuvwtlCxRU55t0pDA6VvDgJZz56R-Fh46kYq7NJaCUV7r18CXfaXQkwogzEe1xezeYCZhDFhTucHg2mZld1eHhfyPi-u3aXBmJNb95ADWicoNsFqpmmdT0feY627hMGMowJ7jq8apUL37Mpodke5xNnaYGqg7q_CNBoQYKH12ZW9RYz5AKWD0jvccmdCeniHHZ-AvXGyuCP6Jw8g35SlpdcwlcbcN" className="w-full h-full object-cover" alt="Vibe" />
               </div>
            </div>
         </div>
      </div>

      {/* Pillars */}
      <div className="w-full bg-white dark:bg-[#2d1b36] py-20 px-4 md:px-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black text-[#161118] dark:text-white mb-4">The Vibe Check</h2>
               <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">We don't just do hair; we curate identities. Our philosophy is built on three pillars that define everything we touch.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Heart, title: 'Radical Inclusivity', text: 'Everyone is welcome in our chair. No judgment, just pure vibes and safe spaces for all identities.' },
                 { icon: Recycle, title: 'Sustainable Slays', text: 'Green beauty choices that don\'t cost the earth. We recycle 95% of our salon waste.' },
                 { icon: Palette, title: 'Unfiltered Artistry', text: 'Hair is our canvas, and you are the masterpiece. We don\'t follow trends, we set them.' }
               ].map((item, i) => (
                 <div key={i} className="bg-background-light dark:bg-[#1d1022] p-8 rounded-3xl text-center hover:bg-primary/5 transition-colors">
                    <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#161118] dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};