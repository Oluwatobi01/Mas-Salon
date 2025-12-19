import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Plus, Calendar, Clock, Trash2, Scissors, QrCode, Download, Sparkles } from 'lucide-react';
import { Stylist, Service } from '../types';
import { Button } from '../components/Button';

const steps = ['Treatments', 'Talent', 'Time', 'Confirm'];

const sampleStylists: Stylist[] = [
  { id: '1', name: 'Sarah J.', role: 'Colorist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjTgH4GnxxsYdr46j-XPMruojrFjy7yc7NX78s5IH-VNS-bRhDN4ciCuW3HThX7Xe7aMBesp1j4mV-o78AYpGZuJPT1fyL8mRvzmyNbiHlcrRbMGpmZbwIa29acTNAWal4QAiAJUbhTnpgz6V6OMlJr6qwRIBQhCKEzjOOEr23r6S8JrQJDGeDcn_oVCWGa9UY7tWLs_G0fwGpkELuhnBVrMbtsk4Azo7pg94FfpUJZRfT0_NgwXIPfw_jCJh6fZHkWHWLkYip42nD', vibe: 'Green' },
  { id: '2', name: 'Marcus', role: 'Hair Specialist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcAdQbAkvAYzhS00K2f-3FsZ5wevqNgpS1YV47Tm_d8kiVdrnL6He69XhimRtGjCdSlnrZRnlP5WAHvbFnPC9bmAuNjivQECfm4HTnCQUkpC6p6OTcBTbFCAePiwPCmCTDS5bCu0Pvq7j4whhIHmpFW7CzEnpLl1HCorx0t8sZu0nCDeHEkNHekPUux0V4Y0muHPWwI3QqKVc9KuErVm1KachLSfHMx4rkDKKurxbLsMSxKn_FmU-qhGlimQGxDN3t1nBQc2Qyy9HM', vibe: 'Top Pick', topPick: true },
  { id: '3', name: 'Elena', role: 'Nail Artist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwQjy67DoUw0vYRUEgtMAS_F-Mz8BJgxuNIHCGieli7EkwrlEP03h_Az8ZB2hjvdlTbQCNYe56DokUSrFdRGx-ZCTxiDGyxkxtvlmrmmzHbWwGZPKG5-vW_2mORnASYQ_9mvyU13iC38Dooxorqoi_F0SCZZceJUT27WIoWbmQ7fkFzzS6Xh87J7p6PwrSn1-vLYlvOztK2N_3N9o5u6OlvjHABT0bCuh-HdlSXnywFUkDoKPD_I7H7NR2mYGhzozkkxbiQkrjQD9i', vibe: 'Cool' },
  { id: '4', name: 'Leo', role: 'Barber', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmWpC3GqCG1P01KN99dgTtAPHBdCj39uD4zChpgykQb7u-Ij9LjPBl1XcIpzF4Q1DNMdz9_0Wxg3tZ_WeEVEQymCPoPZOIOkai8q0-SLvFLCpv-2iTweiqQhfzPyT-ByDJV3c9nascGc2y4CxhtanMWLtsSa_u02Qzbobi7W6OHAoQZ2ypS4_l00oelwMwKwp5pVF_zmYZg8FTyqCmhjw0eaBcCWA4IGviJ6yJhQGQ1XfLdLV61j-F8qc4-rdG0--0ku2tq_MK5odn', vibe: 'Fresh' },
];

const sampleServices: Service[] = [
  { id: 's1', name: 'The Silk Press', price: 85, duration: '90 min', description: 'Achieve bone-straight, silky hair without chemical relaxers.', category: 'hair', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMWUj93sLVM8oeEcNXPfMr82mFBS7xApwcVuT1IQXbhiKGFgBRwpOmmOcucIhdifGZXjXH08AV4vImr5XVhI7ecRVCHo6x-78iOWH2ofapuDsqp2CfyxlNLf8KdjnTku9rx_LdyJ25m6reBh_-orN-33CSr3VIgQ9jsVkDfGZyNp-HjTX9yzHgGhympFQ7tcUoWTFxEZFvIix8XochwUByemhDw12zyzYVZm8mSBXYZXhtohslUsFBJKFUrGHOPazacDxdCU29akh' },
  { id: 's2', name: 'Gel-X Extensions', price: 65, duration: '60 min', description: 'Full set of soft gel extensions. Durable and lightweight.', category: 'nails', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8esBoeW-hht6hRvWGYzCHUjFtL0lMSD-esZ7Om9FSVaR3qeYf82B9hrdIZbOY2lnHHBsunUZMuMwawCqbN0xLdCxFG4uOheAuCczHJVEMoQ49-GoUYaWBLPHtpPkBfvV53sksPTHGMr7KmqFL5n5mNwaUEZA6ktedvwjEaLpR4QGyDJu8BLigQXdXKAsFhh5niyhtwtiOqe1H_Sn1-rwHeuXP8JPE7GRvWPXtebEKgAlv3Mia_DM-CnYBiUgy0rm1fslqPgVUeBBo', popular: true },
  { id: 's3', name: 'Glow Facial', price: 120, duration: '45 min', description: 'Deep cleanse, exfoliation, and a hydrating mask.', category: 'skin', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpqqqeXrnUuELvX9c4EjwFrxnJrw5ltP4DQOr3wiGRAyml3ya3DHDXvrTCdke8oSaY0WvKMrbGcLesQeZtBopVztI5e7uVh9-rN3S4Tqz5vy76HrRh7ricPSMNopJc-3yzTKv6yNYAtwKcUaxIousC8nqDX2geVInQlc5ZmBJH1ueraLvbMTugSWIpd6EjhucVfYCu5lpDmbhPuo5shRvAXDr2IzlvI99MFvzkHwKOGRcfkN8WP1M3m3sIvk8cqXaG1hS2hpDOhCd1' },
];

export const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleService = (service: Service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
      // Auto-advance logic for Step 0
      setTimeout(() => {
        if (currentStep === 0) {
          setCurrentStep(1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const handleStylistSelect = (stylist: Stylist | null) => {
    setSelectedStylist(stylist);
    // Auto-advance logic for Step 1
    setTimeout(() => {
        if (currentStep === 1) {
          setCurrentStep(2);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 500);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // Auto-advance logic for Step 2
    setTimeout(() => {
        if (currentStep === 2) {
          setCurrentStep(3);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 500);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleConfirm = () => {
    setIsConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const total = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  if (isConfirmed) {
    return (
      <div className="w-full min-h-screen bg-[#161118] flex items-center justify-center p-4 relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>

        <div className="max-w-md w-full animate-fade-in-up relative z-10">
           <div className="bg-white text-black rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="bg-primary p-8 text-white text-center relative overflow-hidden">
                 <h1 className="font-serif font-black text-4xl italic mb-1">VIP ACCESS</h1>
                 <p className="text-xs font-mono opacity-80 uppercase tracking-widest">Confirmed Booking</p>
                 <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 mix-blend-overlay"></div>
                 <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#161118] rounded-full"></div>
                 <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#161118] rounded-full"></div>
              </div>
              
              <div className="p-8 flex flex-col gap-8 relative">
                 <div className="text-center border-b-2 border-dashed border-black/10 pb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">When</p>
                    <p className="text-4xl font-black mb-1">{selectedDate}</p>
                    <p className="text-xl font-bold text-primary">{selectedTime}</p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-sm font-bold text-gray-400 uppercase">Talent</span>
                       <span className="font-bold text-lg">{selectedStylist?.name || 'Any Stylist'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                       <span className="text-sm font-bold text-gray-400 uppercase">Services</span>
                       <span className="font-bold text-lg text-right">{selectedServices.map(s => s.name).join(', ')}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                       <span className="text-lg font-black uppercase">Total</span>
                       <span className="text-2xl font-black text-primary">${total}</span>
                    </div>
                 </div>

                 <div className="flex justify-center py-4 bg-gray-50 rounded-xl">
                    <QrCode className="w-32 h-32 text-black" />
                 </div>
              </div>
              
              <div className="bg-gray-100 p-6 flex gap-4">
                 <Link to="/" className="flex-1">
                   <Button variant="outline" fullWidth size="sm">Home</Button>
                 </Link>
                 <div className="flex-1">
                    <Button variant="black" fullWidth size="sm" icon>Save Pass</Button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center pb-20 md:pb-24 pt-6 md:pt-10 px-4 md:px-10 lg:px-20 min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex flex-col max-w-[1440px] w-full">
        
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-[#161118] dark:text-white tracking-tighter mb-4 leading-tight md:leading-[0.85]">
            BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">GLOW UP</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg md:text-xl">Customize your perfect salon experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
            
            {/* Steps Indicator */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                {steps.map((step, idx) => (
                <button 
                    key={step} 
                    onClick={() => setCurrentStep(idx)}
                    disabled={idx > currentStep}
                    className={`flex-shrink-0 px-4 md:px-6 py-3 rounded-xl text-xs md:text-sm uppercase tracking-widest font-bold transition-all ${
                    idx === currentStep 
                        ? 'bg-[#161118] dark:bg-white text-white dark:text-black shadow-lg' 
                        : idx < currentStep 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-white dark:bg-[#1a1a1c] text-gray-400 opacity-50'
                    }`}
                >
                    <span className="opacity-50 mr-2">0{idx + 1}</span>
                    {step}
                </button>
                ))}
            </div>

            {/* Step 1: Services */}
            {currentStep === 0 && (
              <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleServices.map(service => {
                    const isSelected = !!selectedServices.find(s => s.id === service.id);
                    return (
                      <div 
                        key={service.id}
                        onClick={() => toggleService(service)}
                        className={`group cursor-pointer rounded-[2.5rem] p-5 transition-all duration-300 border-2 ${
                          isSelected 
                            ? 'bg-white dark:bg-[#1a1a1c] border-primary shadow-[0_0_30px_rgba(189,43,238,0.15)]' 
                            : 'bg-white dark:bg-[#1a1a1c] border-transparent hover:border-gray-200 dark:hover:border-white/10'
                        }`}
                      >
                         <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 relative">
                            <img src={service.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={service.name} />
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-full text-sm font-black shadow-lg">${service.price}</div>
                         </div>
                         <div className="flex justify-between items-start mb-2 px-2">
                            <div>
                              <h4 className="font-bold text-2xl text-[#161118] dark:text-white leading-none mb-2">{service.name}</h4>
                              <p className="text-xs font-mono text-gray-500 uppercase tracking-wide">{service.duration} • {service.category}</p>
                            </div>
                            <div className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-primary text-white rotate-0' : 'bg-gray-100 dark:bg-white/5 text-gray-400 -rotate-90'}`}>
                              {isSelected ? <Check className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                            </div>
                         </div>
                      </div>
                    )
                  })}
              </div>
            )}

            {/* Step 2: Stylist */}
            {currentStep === 1 && (
               <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                   <div 
                     onClick={() => handleStylistSelect(null)}
                     className={`flex flex-col items-center justify-center gap-4 cursor-pointer group p-6 md:p-8 rounded-[2.5rem] border-2 transition-all ${!selectedStylist ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-[#1a1a1c] hover:border-gray-200 dark:hover:border-white/10'}`}
                   >
                     <div className="size-20 md:size-28 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-2">
                        <Scissors className="w-8 h-8 md:w-10 md:h-10 text-gray-400" />
                     </div>
                     <p className="font-bold text-[#161118] dark:text-white text-lg md:text-xl">First Available</p>
                   </div>
                   {sampleStylists.map(stylist => (
                     <div 
                        key={stylist.id}
                        onClick={() => handleStylistSelect(stylist)}
                        className={`flex flex-col items-center gap-4 cursor-pointer group p-6 md:p-8 rounded-[2.5rem] border-2 transition-all relative overflow-hidden ${selectedStylist?.id === stylist.id ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-[#1a1a1c] hover:border-gray-200 dark:hover:border-white/10'}`}
                     >
                        <div className="size-20 md:size-28 rounded-full p-[3px] bg-gradient-to-tr from-primary to-secondary relative z-10 mb-2 group-hover:scale-110 transition-transform">
                           <img src={stylist.image} className="size-full rounded-full object-cover border-4 border-white dark:border-[#1a1a1c]" alt={stylist.name} />
                        </div>
                        <div className="text-center z-10">
                          <p className="font-bold text-[#161118] dark:text-white text-lg md:text-xl leading-tight">{stylist.name}</p>
                          <p className="text-xs font-mono text-primary uppercase mt-1">{stylist.role}</p>
                        </div>
                        {stylist.topPick && <div className="absolute top-4 right-4 bg-secondary text-black text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase">Top</div>}
                     </div>
                   ))}
               </div>
            )}

            {/* Step 3: Date & Time */}
            {currentStep === 2 && (
               <div className="animate-fade-in-up bg-white dark:bg-[#1a1a1c] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 dark:border-white/5 flex flex-col xl:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                        <h4 className="font-serif font-black text-2xl md:text-3xl dark:text-white italic">October 2023</h4>
                    </div>
                    {/* Make grid responsive: tighter gaps on mobile, normal on desktop */}
                    <div className="grid grid-cols-7 gap-1 md:gap-4 text-center">
                        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="text-gray-400 text-xs font-mono uppercase font-bold">{d}</span>)}
                        {[...Array(31)].map((_, i) => {
                            const d = i + 1;
                            const isSelected = selectedDate === `2023-10-${d}`;
                            return (
                            <button 
                                key={i} 
                                onClick={() => setSelectedDate(`2023-10-${d}`)}
                                className={`h-10 w-10 md:h-12 md:w-12 rounded-full text-xs md:text-sm font-bold flex items-center justify-center transition-all ${isSelected ? 'bg-primary text-white shadow-lg scale-110' : 'text-[#161118] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}
                            >
                                {d}
                            </button>
                            )
                        })}
                    </div>
                  </div>
                  <div className="w-full h-px xl:w-px xl:h-auto bg-gray-100 dark:bg-white/10 block"></div>
                  <div className="flex-1 flex flex-col gap-6">
                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Available Slots</p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map(time => (
                            <button 
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border text-xs md:text-sm font-bold transition-all ${selectedTime === time ? 'bg-[#161118] dark:bg-white text-white dark:text-black border-transparent scale-105' : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:border-primary'}`}
                            >
                            {time}
                            </button>
                        ))}
                    </div>
                  </div>
               </div>
            )}
            
            {/* Step 4: Confirm */}
            {currentStep === 3 && (
               <div className="animate-fade-in-up flex flex-col items-center text-center py-12 md:py-20 bg-white dark:bg-[#1a1a1c] rounded-[3rem] border border-gray-100 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-10"></div>
                  <div className="relative z-10 size-24 md:size-32 bg-secondary rounded-full flex items-center justify-center text-black mx-auto mb-6 md:mb-8 animate-bounce shadow-2xl">
                    <Check className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <h3 className="relative z-10 text-4xl md:text-5xl font-serif font-black text-[#161118] dark:text-white mb-4 italic">READY TO SLAY?</h3>
                  <p className="relative z-10 text-gray-500 mb-8 max-w-sm text-base md:text-lg">Review your "receipt" on the right. If everything looks good, hit confirm to lock it in.</p>
               </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-white/10">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
                className={currentStep === 0 ? 'opacity-0' : ''}
              >
                Go Back
              </Button>
              {currentStep < 3 && (
                <Button 
                    onClick={handleNext}
                    size="lg"
                    icon
                >
                    Next Step
                </Button>
              )}
            </div>

          </div>

          {/* Sidebar Summary - The Receipt */}
          <div className="lg:col-span-4 relative order-first lg:order-last">
             <div className="sticky top-24 md:top-32">
                <div className="relative bg-white dark:bg-[#f3f0f4] p-6 text-black font-mono text-sm shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300">
                   {/* Receipt Hole */}
                   <div className="absolute top-4 left-1/2 -translate-x-1/2 size-4 bg-background-light dark:bg-background-dark rounded-full"></div>
                   
                   <div className="text-center border-b-2 border-dashed border-black/20 pb-6 mb-6 pt-4">
                      <h3 className="text-2xl font-black uppercase tracking-tighter">MAS SALON</h3>
                      <p className="text-xs opacity-60">123 Beauty Lane, NY</p>
                      <p className="text-xs opacity-60">ORDER #{Math.floor(Math.random() * 90000) + 10000}</p>
                   </div>
                   
                   {selectedServices.length === 0 ? (
                     <div className="py-12 text-center opacity-40">
                       <p className="italic">-- CART EMPTY --</p>
                       <p className="text-xs mt-2">Add services to start</p>
                     </div>
                   ) : (
                     <div className="flex flex-col gap-4 mb-6">
                        {selectedServices.map(s => (
                          <div key={s.id} className="flex justify-between items-start animate-fade-in-up">
                             <div className="flex-1">
                               <p className="font-bold uppercase leading-tight">{s.name}</p>
                               <p className="text-[10px] opacity-60 uppercase mt-0.5">
                                 {selectedStylist ? `@${selectedStylist.name.split(' ')[0]}` : 'ANY STYLIST'} 
                               </p>
                             </div>
                             <div className="flex items-center gap-3">
                               <span className="font-bold">${s.price}</span>
                               <button onClick={() => toggleService(s)} className="text-black/30 hover:text-red-500 transition-colors">
                                 <Trash2 className="w-4 h-4" />
                               </button>
                             </div>
                          </div>
                        ))}
                     </div>
                   )}

                   <div className="border-t-2 border-dashed border-black/20 pt-4 mb-2">
                      {selectedDate && (
                         <div className="flex justify-between mb-2">
                            <span>DATE</span>
                            <span className="font-bold">{selectedDate}</span>
                         </div>
                      )}
                      {selectedTime && (
                         <div className="flex justify-between mb-4">
                            <span>TIME</span>
                            <span className="font-bold">{selectedTime}</span>
                         </div>
                      )}
                      
                      <div className="flex justify-between text-2xl font-black mt-6">
                        <span>TOTAL</span>
                        <span>${total}</span>
                      </div>
                   </div>

                   <div className="text-center mt-8 opacity-60 text-xs">
                      <p>THANK YOU FOR YOUR BUSINESS</p>
                      <p>NO REFUNDS ON VIBES</p>
                      <div className="mt-2 text-[10px]">
                        {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                      </div>
                   </div>

                   {/* ZigZag Bottom */}
                   <div className="receipt-edge"></div>
                </div>

                <div className="hidden lg:block">
                  <Button 
                     fullWidth
                     variant="black"
                     size="lg"
                     disabled={selectedServices.length === 0} 
                     onClick={handleConfirm}
                     className="mt-8"
                   >
                     {currentStep === 3 ? 'Confirm & Pay' : 'Checkout'}
                   </Button>
                </div>
             </div>
          </div>
          
          {/* Mobile Sticky Action Bar */}
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
             <Button 
                 fullWidth
                 variant="black"
                 size="lg"
                 disabled={selectedServices.length === 0} 
                 onClick={handleConfirm}
                 className="shadow-2xl"
               >
                 {currentStep === 3 ? 'Confirm & Pay' : `Checkout $${total}`}
             </Button>
          </div>

        </div>
      </div>
    </div>
  );
};