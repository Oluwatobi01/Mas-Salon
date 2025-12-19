import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Vibe Quiz', path: '/quiz', isSpecial: true },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-[#0f0f11]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-6 lg:px-10 flex items-center justify-between max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="size-10 bg-[#161118] dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black group-hover:rotate-180 transition-transform duration-500 shadow-lg">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="text-2xl font-serif font-black tracking-tighter text-[#161118] dark:text-white group-hover:text-primary transition-colors">MAS SALON</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-white/50 dark:bg-black/50 backdrop-blur-xl px-8 py-2.5 rounded-full border border-white/20 dark:border-white/5 shadow-sm">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-[#161118] dark:text-gray-300 hover:text-primary'
                  } ${link.isSpecial ? 'flex items-center gap-1 text-primary' : ''}`}
                >
                  {link.isSpecial && <Sparkles className="w-3 h-3" />}
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2"></div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[#161118] dark:text-white transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link to="/booking">
                <Button size="sm" variant="black">Book Now</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md text-[#161118] dark:text-white border border-black/5 dark:border-white/10"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 bg-[#161118] dark:bg-white text-white dark:text-black rounded-full"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#f7f6f8] dark:bg-[#0f0f11] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-5xl md:text-7xl font-serif font-black text-[#161118] dark:text-white hover:text-primary hover:italic transition-all"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8">
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <Button size="lg" variant="primary" icon>Let's Book It</Button>
            </Link>
          </div>
      </div>
    </>
  );
};