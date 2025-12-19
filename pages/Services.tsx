import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Clock } from 'lucide-react';

const categories = ['All Services', 'Hair Cuts & Color', 'Nails & Beauty', 'Treatments'];

const popularServices = [
  { 
    name: 'The Wolf Cut', 
    price: '$80+', 
    duration: '60 mins', 
    desc: 'A trendy, textured cut with layers and shaggy bangs.', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0CBzgzG79Y97knxVIEhgK9XsWBOl_Aq1-j9X3kVK6IeSTdXCUovM9guK8vaiyCrqoj3CKSOIiIaz1pirc87-IzxCuub-7v5oZXztX5eAQhe6fzMFbWgF-NovYal4AewUYhSgd8FwaCGkndMLXKh9PhT9_0ENbLyhXD0dOlO9mpgu0DQoIqxAykOLzxUtD7hjwwV5mTuJF_VCkt4XB-GG0cE46NjgFKJdu6eryRtZj1EtAXtGRkqZ9jPzMKXnayOyF0cpTnYH1ITJi',
    tag: 'Popular'
  },
  { 
    name: 'Gel X Extension', 
    price: '$65+', 
    duration: '90 mins', 
    desc: 'Full set of soft gel extensions. Durable and lightweight.', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFTg5ykWz5_BllD6EDavsZ4r_UXj_0mZLR6i4iwmd4JN6GUe2ium1QKDi1xXoQT8L9Az_sFE67f6MltJnGT5qwqpEqQHjamOlDm24DUybQBrrQCg4YQxtEEYC__6CYPfbs2NiPNOnmwMBhTpPBM4qvJKf87ZwoDz920vHKRrxTD-vw9n2sW3uLhRzTAUPNdZAdh3douGD-T7t6bHh1UPHzuXsGddpa8r7ZyD7hmUKND9ns0XHKEO77RBBr9inVItid9CH3jCEAKI85' 
  },
  { 
    name: 'Dimensional Balayage', 
    price: '$220+', 
    duration: '3 hrs', 
    desc: 'Hand-painted highlights for a natural, sun-kissed look.', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4w458M_hE9t9WLLzkmZc2a4lKl9VhGnDEVzMaIMCM1Qrp2yFFhdu46wJE33T7Bb7VQTZm1i4HztPXlcxCSjE-KLIS60DiRkLC3meABGM9aWzn9DuD2YYJZhkrGGC2whB3dM3IFKFe83djScOE1Ksmkc-eSUJV5aDzo0_PudTDvziwvy6uKSzBhp3llpQQRTgOpaZA-KZPrJEq_x2KKo4SNyan92YUQXSvdoS7JIM5v4SbXr9FQZSkHIgYyh4rATknBOeOF2mAutRK' 
  }
];

const serviceList = [
  {
    category: 'Hair',
    items: [
      { 
        name: 'Buzz Cut & Fade', 
        price: '$45', 
        desc: 'Precision clipper work with straight razor lineup.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0CONSXYWSuFya0mpbc-Fq4nTTXaw0OmpoHHlOucTSjzWKZ_GWRcpmh6P__GoO3DLKFTudGYPhZmk_xoF3Vhx9fS84D7sfUgRdzNJ7oc2UVilRJhdJShvBXfjI3kSOXK4nhZbPi34ka2_t_QsJqaZNWdjnRVfwU_6HqmqefXbd16nxr_FxcUjghbNjoWVAh3wdR5ksbOwdmO8ecfdy1QkK1BKLTgPGL_YH6VBkbUcU-8b0Z3g8VP-QcgSYF0_R3OCQoCJU6Hglu6iV'
      },
      { 
        name: 'Silk Press', 
        price: '$90+', 
        desc: 'Straightening natural texture without chemicals.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMWUj93sLVM8oeEcNXPfMr82mFBS7xApwcVuT1IQXbhiKGFgBRwpOmmOcucIhdifGZXjXH08AV4vImr5XVhI7ecRVCHo6x-78iOWH2ofapuDsqp2CfyxlNLf8KdjnTku9rx_LdyJ25m6reBh_-orN-33CSr3VIgQ9jsVkDfGZyNp-HjTX9yzHgGhympFQ7tcUoWTFxEZFvIix8XochwUByemhDw12zyzYVZm8mSBXYZXhtohslUsFBJKFUrGHOPazacDxdCU29akh'
      },
      { 
        name: 'Vivid Color Transformation', 
        price: '$300+', 
        desc: 'Full bleach out + fashion colors (Pink, Blue, Purple etc).',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyDlcrpqUruWZI6O3LWpnrOVaA1u-kdCSETX9IBTdtmSZbNfmoWQCoS-ivaeQ4smkZ4P-lMf-qc-BDxnWIbEhG7Np-IGd6B_Y284GdJVFez5ob0so-_m-YwVbgV5gIqUDoIAiEDoSMLGRQDCW15wdsAWNCSdGDwDLrQGrGqb8XmGinFsoJdXHwZ65HT2CWBqMLjIizmZ7Zno3S1dRq-TviZteE8Wp-4UMFOdlEc_5ykm3s-vjrL3r6fmNEuhkk_sldAwWc6HUJaTCq'
      },
    ]
  },
  {
    category: 'Nails',
    items: [
      { 
        name: 'Structured Gel Mani', 
        price: '$75', 
        desc: 'Russian manicure technique with building gel.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCR3_ozdjZ9k7GnoPvukFNYqcoZw49eiWxoZEZDa7qvHXk6eRDS_dcrdMjm3RhkAXEGpRS6-rqSFE08raHYU3Ru-GAj6OiwTkAxJ_jdsfF2vxiYad6mg-1VpeKSbp-QXrtZx6Bc9QPZiDJ4br1zDFl39jCwvQNrvcfYnaqb0vMrrJvgv0e2HizRrP0C5-eZjPqjLHzDGN7rLKWTSj48c3gCm36sNXdzkCcfQ1hxAUc_e4tCUjo_wMASwe0eJ7Q6OMnT8rt7KgrjAol'
      },
      { 
        name: 'Nail Art (Tier 1)', 
        price: '+$15', 
        desc: 'Simple lines, dots, or french tips per hand.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLhOnSzuo68gN49IS3G8wbFswh7W8aZp8lLNDfFRjVuyTrsBhjfmEQIwukHGoB0nl4SJlqXeA3G8wtlf28MxjK9M3LUsrW78LnAVo8bgUGMfpk_50myjrqN5VxN2qbenKo6PO2867iYKVHl0HDB2nuNnHPsAcP7IoqH4bvs9yhY0PsbMz_YQ3S4kjra2yQkw8Pq0M_-BjKfvhwOMyYpAFapxn7hp2_K03RGXR029UydxcipfZXAtBEdVwNdOjrl9Yn9jR7JaQRh3ez'
      },
    ]
  },
  {
    category: 'Face & Skin',
    items: [
      { 
        name: 'Brow Lamination', 
        price: '$95', 
        desc: 'Includes shape, wax, and tint for fluffy brows.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIO6h6CEYMT95ssgaKZHBxnujQ3JmcNm2Nfh46MEKLt4tgcalXY2FOf7V1v0I7uL9WCTTSu3aym36NVgVx_C3cH8-Dnpr4uv1Ux5LhoiWm33m0Zw5wXuvhdIceziQwpOShEnl-FVkFriH7gqD_wuNRXj3id50xanMmhs7o9_l0_783oipzXKM7408B-Xqai9HUdacCAWV3OXlS9-LGW6khxZv5Lat6GnzTKU_HhlN2YflSrf19_cBcVDA_20BJZWJE-Ghpsqw8kUJ7'
      },
      { 
        name: 'Glow Facial', 
        price: '$120', 
        desc: '45 min express facial for hydration and glow.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpqqqeXrnUuELvX9c4EjwFrxnJrw5ltP4DQOr3wiGRAyml3ya3DHDXvrTCdke8oSaY0WvKMrbGcLesQeZtBopVztI5e7uVh9-rN3S4Tqz5vy76HrRh7ricPSMNopJc-3yzTKv6yNYAtwKcUaxIousC8nqDX2geVInQlc5ZmBJH1ueraLvbMTugSWIpd6EjhucVfYCu5lpDmbhPuo5shRvAXDr2IzlvI99MFvzkHwKOGRcfkN8WP1M3m3sIvk8cqXaG1hS2hpDOhCd1'
      },
    ]
  }
];

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Services');

  const filteredServices = serviceList.filter(section => {
    if (activeTab === 'All Services') return true;
    if (activeTab === 'Hair Cuts & Color' && section.category === 'Hair') return true;
    if (activeTab === 'Nails & Beauty' && section.category === 'Nails') return true;
    if (activeTab === 'Treatments' && section.category === 'Face & Skin') return true;
    return false;
  });

  return (
    <div className="w-full flex flex-col items-center bg-background-light dark:bg-[#0f0f11]">
      {/* Hero */}
      <div className="w-full px-4 md:px-10 lg:px-40 py-10 bg-white dark:bg-[#0f0f11] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-4">
             <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-[#161118] dark:text-white leading-[0.9]">
               Your look. <span className="text-primary italic">Your vibe.</span><br/>Our expertise.
             </h1>
             <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg">
               Explore our curated menu of hair and beauty services designed for the modern you.
             </p>
             <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => setActiveTab('Hair Cuts & Color')}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  View Hair Services
                </button>
                <Link to="/gift-cards">
                  <button className="border-2 border-gray-200 dark:border-white/10 px-8 py-3 rounded-full font-bold dark:text-white hover:border-primary hover:text-primary transition-colors">
                    Gift Cards
                  </button>
                </Link>
             </div>
          </div>
          <div className="flex-1">
             <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative rotate-2 hover:rotate-0 transition-all duration-500">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCddYtB5gvfvoCPYmEiU7uDeVHfu0VohML15sehGlJhxWFumjhVcN89BKtZDCLNSol0sn4GmqeTs0qxN6bwUW8eedVgLPCmAfQBGA8TWwPAYIq6zBEk1Uk-9aDjeUrDZQSDOAzoXAIj9VjBkptmO-vuW7Z7eWqbZrXO89cLaP81JbD6H-0TcgEb2hCeK0ulNlP6p81UqWBidZo5ifqSRqR8f_MlhqvZtjg04b5XB4F0vTVk_CV0dkRY01TK7qZbJ8Dyj54dIEP3MD4M" className="w-full h-full object-cover" alt="Services" />
             </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[73px] z-30 w-full bg-white/90 dark:bg-[#0f0f11]/90 backdrop-blur border-b border-gray-100 dark:border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 overflow-x-auto no-scrollbar flex gap-8">
           {categories.map((cat, i) => (
             <button 
               key={cat} 
               onClick={() => setActiveTab(cat)}
               className={`whitespace-nowrap text-sm font-bold pb-1 border-b-2 transition-colors ${activeTab === cat ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-primary'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] px-4 md:px-10 py-12">
        {/* Trending - Only show on 'All Services' */}
        {activeTab === 'All Services' && (
          <>
            <div className="flex items-center gap-2 mb-8">
              <Flame className="text-primary w-6 h-6" />
              <h3 className="text-3xl font-serif font-black text-[#161118] dark:text-white">Trending Now</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {popularServices.map((service, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1a1a1c] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-2xl text-[#161118] dark:text-white">{service.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 uppercase tracking-wide">
                          <Clock className="w-3 h-3" /> {service.duration} • <span className="text-primary font-bold">{service.price}</span>
                        </div>
                      </div>
                      {service.tag && <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-full uppercase">{service.tag}</span>}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{service.desc}</p>
                    <Link to="/booking">
                      <button className="w-full py-4 rounded-full bg-gray-100 dark:bg-white/10 text-[#161118] dark:text-white font-bold text-sm hover:bg-primary hover:text-white transition-colors uppercase tracking-widest">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Filtered Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {filteredServices.map((category, idx) => (
             <div key={idx} className="flex flex-col gap-6 animate-fade-in-up">
               <h3 className="text-3xl font-serif font-black text-[#161118] dark:text-white flex items-center gap-3">
                 <span className="w-3 h-3 bg-primary rounded-full"></span>
                 {category.category}
               </h3>
               <div className="flex flex-col gap-6">
                 {category.items.map((item, i) => (
                   <div key={i} className="rounded-2xl bg-white dark:bg-[#1a1a1c] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all group cursor-pointer hover:shadow-lg overflow-hidden flex flex-col h-full">
                     <div className="h-48 overflow-hidden relative">
                         <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                     </div>
                     <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-lg text-[#161118] dark:text-white">{item.name}</h4>
                          <span className="font-bold text-primary font-mono">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">{item.desc}</p>
                        <Link to="/booking" className="text-xs font-black uppercase tracking-widest flex items-center gap-1 text-[#161118] dark:text-white group-hover:text-primary transition-colors mt-auto">
                          Book <ArrowRight className="w-3 h-3" />
                        </Link>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};