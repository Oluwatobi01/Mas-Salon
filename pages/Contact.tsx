import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row h-full min-h-[calc(100vh-80px)]">
      {/* Left Content */}
      <div className="flex-1 p-6 lg:p-12 xl:p-16 flex flex-col justify-center bg-background-light dark:bg-[#1d1022]">
         <div className="max-w-xl mx-auto w-full flex flex-col gap-8">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-4">
                 <span className="text-xs font-bold uppercase tracking-wider">Say Hello</span>
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-[#161118] dark:text-white leading-tight">
                 Let's Chat & <br/><span className="text-primary">Get Glowing.</span>
               </h1>
               <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 font-medium">
                 Whether you need a total transformation or just a quick trim, slide into our DMs or drop by our trendy spot.
               </p>
            </div>

            <div className="flex flex-wrap gap-4">
               <a href="tel:5551234567" className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-[#2d1b36] border border-gray-200 dark:border-white/10 rounded-full hover:border-primary transition-colors group">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-xs font-bold uppercase text-gray-400">Call Us</p>
                     <p className="font-bold text-[#161118] dark:text-white">(555) 123-4567</p>
                  </div>
               </a>
               <a href="mailto:hello@massalon.com" className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-[#2d1b36] border border-gray-200 dark:border-white/10 rounded-full hover:border-primary transition-colors group">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                     <Mail className="w-5 h-5" />
                  </div>
                  <div>
                     <p className="text-xs font-bold uppercase text-gray-400">Email Us</p>
                     <p className="font-bold text-[#161118] dark:text-white">hello@massalon.com</p>
                  </div>
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
               <div className="bg-white dark:bg-[#2d1b36] p-6 rounded-2xl border border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2 text-primary mb-2">
                     <MapPin className="w-5 h-5" />
                     <h3 className="font-bold text-lg text-[#161118] dark:text-white">Visit Us</h3>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">123 Beauty Lane,<br/>Trendy District, NY 10001</p>
               </div>
               <div className="bg-white dark:bg-[#2d1b36] p-6 rounded-2xl border border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center gap-2 text-primary">
                        <Clock className="w-5 h-5" />
                        <h3 className="font-bold text-lg text-[#161118] dark:text-white">Hours</h3>
                     </div>
                     <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">Open Now</span>
                  </div>
                  <ul className="text-sm space-y-1">
                     <li className="flex justify-between text-gray-500 dark:text-gray-400"><span>Mon-Fri</span> <span className="font-bold text-[#161118] dark:text-white">10am - 8pm</span></li>
                     <li className="flex justify-between text-gray-500 dark:text-gray-400"><span>Sat</span> <span className="font-bold text-[#161118] dark:text-white">9am - 6pm</span></li>
                     <li className="flex justify-between text-gray-500 dark:text-gray-400"><span>Sun</span> <span className="font-bold text-[#161118] dark:text-white">Closed</span></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      {/* Right Map */}
      <div className="flex-1 min-h-[400px] lg:min-h-auto relative bg-gray-200 dark:bg-gray-800">
         <div 
           className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
           style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0rb8yXOTEFu4A_vLK4uoz-9E3isbWtnRe673qXtKxIV40F-kCu3lKM6Wjh68hOiJdzwd-M4ldlVU49xmHOf0YTk8EZX8BrUusYIsQkxoJSQyTFNw7xzKRaoj14kC90sPvAmXbyaiARl2C4SjcsoH6nRwdRPRVLx3rU2VNvTtUGDWQt8ZZ2XB9QGyU9LOuc0W66pmjgHE1LCt5SBlo1IC5U4LiWKhvnfnfx6RYH5q-1EmQzOf4SAEjERb6CRt1g5zFXd5VH5Dd7AoB')` }}
         ></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
            <div className="bg-white dark:bg-[#2d1b36] px-4 py-2 rounded-xl shadow-xl mb-2 flex items-center gap-2">
               <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="font-bold text-sm text-[#161118] dark:text-white">Mas Salon</span>
            </div>
            <MapPin className="w-12 h-12 text-primary drop-shadow-2xl fill-current" />
         </div>
      </div>
    </div>
  );
};