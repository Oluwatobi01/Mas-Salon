import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#1d1022] border-t border-[#f3f0f4] dark:border-white/10 pt-16 pb-8 px-4 md:px-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Scissors className="w-6 h-6" />
            <span className="text-xl font-black text-[#161118] dark:text-white">Mas Salon</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
            Redefining beauty for the digital age. Located in the heart of the city, serving looks daily.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <button key={i} className="size-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-white hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#161118] dark:text-white">Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/services" className="hover:text-primary transition-colors">Services Menu</Link>
            <Link to="/lookbook" className="hover:text-primary transition-colors">Lookbook</Link>
            <Link to="/about" className="hover:text-primary transition-colors">Meet the Team</Link>
            <Link to="/gift-cards" className="hover:text-primary transition-colors">Gift Cards</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#161118] dark:text-white">Visit Us</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
            <p>123 Creative Ave,</p>
            <p>Design District, NY 10012</p>
            <p className="mt-2 text-[#161118] dark:text-white font-semibold">Tue-Sat: 10am - 8pm</p>
            <p className="text-[#161118] dark:text-white font-semibold">Sun: Closed</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#161118] dark:text-white">Join the Inner Circle</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">Get early access to drops and booking slots.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 h-10 px-4 rounded-full bg-gray-100 dark:bg-white/5 border-none text-sm focus:ring-2 focus:ring-primary dark:text-white"
            />
            <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90">
              <span className="font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-white/5 pt-8 text-center">
        <p className="text-xs text-gray-400">© 2024 Mas Salon. All vibes reserved.</p>
      </div>
    </footer>
  );
};