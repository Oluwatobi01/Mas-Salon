import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, Heart, RefreshCw, Star, Sparkles, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { FeedItem } from '../types';

const stories = [
  { name: 'Client Love', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7_5T9rd7j_EJbnxAQa_8NiWkosvkJ75BasCgAvRJVyRRTgsletpVnax7oTc6hnF3rz78yApW84-DeMWqhct8irGYC-8fo2fAV5O1ogwRW2gF3E-e1hr_qeYf8yhuvw9qswKYjoFiWbLHs8iME3p5LrFfnMp-VsFVfG5LdHSoo7ab0pr326hKNtFc4ohdHUNr9Lhe7ZOfhILiLvbWac6sQXxG1dV1glnXHsJPgxymUXvonnkN8bmySbxRNqs1whhl5Zkb2VzeRHvjd' },
  { name: 'BTS', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9lezdy2G1AaSqpvPGnsGJOht1sgl2UwdhyziY0pvb-mii6ityETb_DwM8t2W8z2FUKaI4JOR1lqZ6KyglHmpblM_iQJpUpMpgPw-sELn7AAsIJvR0dwiEUKJRmXlghSdoSVvTp2JaefIlj-hbvgmfU_JQp5p2FrHEs2ChS3H79b6HlCnJy9er2kay-p7X4zdWfRw-XXy_2mhz0nTeLrnjAHFUR7qpE5pZDVpCF8S6fVbgrBjX7rjvi4J3IZoIlWnipVnnViEMeDrj' },
  { name: 'Nails', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCR3_ozdjZ9k7GnoPvukFNYqcoZw49eiWxoZEZDa7qvHXk6eRDS_dcrdMjm3RhkAXEGpRS6-rqSFE08raHYU3Ru-GAj6OiwTkAxJ_jdsfF2vxiYad6mg-1VpeKSbp-QXrtZx6Bc9QPZiDJ4br1zDFl39jCwvQNrvcfYnaqb0vMrrJvgv0e2HizRrP0C5-eZjPqjLHzDGN7rLKWTSj48c3gCm36sNXdzkCcfQ1hxAUc_e4tCUjo_wMASwe0eJ7Q6OMnT8rt7KgrjAol' },
  { name: 'Team', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjuOXbFbjl8NuFNJs9xTvWZytlMlgb3UFIlJuYf60cjUf9BUsEk-_FciSWr73lngAQhAnpS3ifUB8rRzq6KHAM0XldtiX9OgpIXIpYQceJp-ypuYYS3xwFXfdH_qN0FIHEUK1cNrHOFHIZ0dTw0ECQNdkYASUFBEbJdRnjO9RP7zlfLbGYiVNqzT0xHsc3ehtLGmQGZSAHtsITudrPfrQjt2RhqEUe1w-Ez34SefvJYBEYWI4kW6oWJe4skx76o2MnCmvQFFQPk_Qz' },
];

const feedItemsInitial: FeedItem[] = [
  { type: 'image', title: 'Neon Balayage', category: 'Color & Style', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFnJOR7oIqPr8WHdUFQC1By0G6u7x-qYeYnlqd2KkkOtHnrTlTEsnxhV074nn50hIgI7blZsMX0nC6cg_JtV9K716XoIajEgfRuecDk2Jm_dZmNgA1cZJBcZ2JFrts5-dYyybNwPDsBV1Sc6Ro8oRd7cnPepd3nam_pNL4j6dP3RWe-1fVu4cQ7ioPCdb4Z6VFvFEQfjL7Fw2203sVkEoARpNLA-_Gv6Rpr3JC0Raekd2MH_19BPyxBVU3v7ryDOcXFS3gOgOpDBNO', badge: 'Trending' },
  { type: 'video', title: 'Gel X Sparkle', category: 'Nails', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLhOnSzuo68gN49IS3G8wbFswh7W8aZp8lLNDfFRjVuyTrsBhjfmEQIwukHGoB0nl4SJlqXeA3G8wtlf28MxjK9M3LUsrW78LnAVo8bgUGMfpk_50myjrqN5VxN2qbenKo6PO2867iYKVHl0HDB2nuNnHPsAcP7IoqH4bvs9yhY0PsbMz_YQ3S4kjra2yQkw8Pq0M_-BjKfvhwOMyYpAFapxn7hp2_K03RGXR029UydxcipfZXAtBEdVwNdOjrl9Yn9jR7JaQRh3ez' },
  { type: 'image', title: 'Sharp Bob', category: 'Cut', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLBiaIs4ffS93zWgM1rGwJUg-V9GiYSx1WLGFsptInMZQxtTtQVLFA3MyFUzju2Itjj8n6j4i6yZ0vRYAVU-pZI2ngUbmyrlEzeRIovcM-Tc0MF1GRg5qrWJAoZlO6hhCnn8ktBtNYkiRjqNilCtYQJsoXH1RsiXPbTE4IVli6zxnO5TqHll_DQkw5G--QCVCUGOEirG6XrCfKo4XFib9NQFxdGyCHvkt91JBokbsC4wwgSd4oWdCJIJxWpdLgcVOflGmDRZiHpcz' },
  { type: 'quote', text: "Literally the best hair experience of my life. I feel like a whole new person.", user: '@sarahstyles', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnBVt3tH71C9u6foN2Agk-9GgRKFTFFxko0hBJXftP7jMkFBb5kn80GE8lAZ3BAt4TpjVXACGPEwsyKqbCYXW5R1lzap6l2rCUxdL51Lc2GXQLFwdHLGuiMk2c3GyyxRuNeuP_XOzG2Ajm1zy4idQRaGinuxw-SQXDDPkwQCgPyzjNRKcAF2eDqWJzWAoGPC5eTch_rM63-O6QSYb32oJpCaRKvoxASHHlPdFRYFp1IsNwN-M7PVw63x8sjaNq3ZSKFaKPpL9v9Rmm' },
  { type: 'image', title: 'Full Glam', category: 'Makeup', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIO6h6CEYMT95ssgaKZHBxnujQ3JmcNm2Nfh46MEKLt4tgcalXY2FOf7V1v0I7uL9WCTTSu3aym36NVgVx_C3cH8-Dnpr4uv1Ux5LhoiWm33m0Zw5wXuvhdIceziQwpOShEnl-FVkFriH7gqD_wuNRXj3id50xanMmhs7o9_l0_783oipzXKM7408B-Xqai9HUdacCAWV3OXlS9-LGW6khxZv5Lat6GnzTKU_HhlN2YflSrf19_cBcVDA_20BJZWJE-Ghpsqw8kUJ7', badge: 'New' },
  { type: 'image', title: 'Platinum Curls', category: 'Color', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAodOS-TG07C63UpC1O9PA8rCe94eCy7A7EquwUeb7jBBnuLDBQvWZ1XJHR65Qi5H8H3v58xmNzUW49igGn3PFHNGSkEjR2w56n9UMIU8CajESe6SPQJLqq35AvkOBjmDqaPZpiyee-VxiOrEMe53FR9dDp5OlPYK20yYtyQ9DwLFBjNUUVp2fFL2U8SrnEbSixZT13cpH65FLA9qkhoKESyEswUYoJwOxTjabRmLhnc6al05QhXnu5k6lbTotC1Sdgk4LRDsTNWird' },
  { type: 'image', title: 'Unicorn Vibes', category: 'Creative Color', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyDlcrpqUruWZI6O3LWpnrOVaA1u-kdCSETX9IBTdtmSZbNfmoWQCoS-ivaeQ4smkZ4P-lMf-qc-BDxnWIbEhG7Np-IGd6B_Y284GdJVFez5ob0so-_m-YwVbgV5gIqUDoIAiEDoSMLGRQDCW15wdsAWNCSdGDwDLrQGrGqb8XmGinFsoJdXHwZ65HT2CWBqMLjIizmZ7Zno3S1dRq-TviZteE8Wp-4UMFOdlEc_5ykm3s-vjrL3r6fmNEuhkk_sldAwWc6HUJaTCq' },
];

const Marquee = ({ reverse = false, text }: { reverse?: boolean, text: string }) => (
  <div className="relative flex overflow-hidden py-5 bg-[#161118] dark:bg-white text-white dark:text-black border-y-2 border-primary/20">
    <div className={`animate-${reverse ? 'marquee-reverse' : 'marquee'} whitespace-nowrap flex gap-8 items-center`}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-8">
          {text} <Star className="w-5 h-5 md:w-6 md:h-6 fill-current text-primary" />
        </span>
      ))}
    </div>
    <div className={`absolute top-1/2 -translate-y-1/2 animate-${reverse ? 'marquee-reverse' : 'marquee'} whitespace-nowrap flex gap-8 items-center`} style={{ left: '100%' }}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-8">
          {text} <Star className="w-5 h-5 md:w-6 md:h-6 fill-current text-primary" />
        </span>
      ))}
    </div>
  </div>
);

export const Home: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>(feedItemsInitial);

  const handleLoadMore = () => {
    const moreItems = feedItemsInitial.map(item => ({ ...item, title: item.title ? `${item.title} (II)` : undefined }));
    setFeedItems([...feedItems, ...moreItems]);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 py-6 max-w-[1440px] mx-auto">
        <div className="relative w-full h-[85vh] min-h-[500px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-6 md:p-12 group shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-out group-hover:scale-105" 
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0CONSXYWSuFya0mpbc-Fq4nTTXaw0OmpoHHlOucTSjzWKZ_GWRcpmh6P__GoO3DLKFTudGYPhZmk_xoF3Vhx9fS84D7sfUgRdzNJ7oc2UVilRJhdJShvBXfjI3kSOXK4nhZbPi34ka2_t_QsJqaZNWdjnRVfwU_6HqmqefXbd16nxr_FxcUjghbNjoWVAh3wdR5ksbOwdmO8ecfdy1QkK1BKLTgPGL_YH6VBkbUcU-8b0Z3g8VP-QcgSYF0_R3OCQoCJU6Hglu6iV")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="relative z-10 flex flex-col items-start gap-4 md:gap-6 animate-fade-in-up max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-black text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(204,255,0,0.6)] animate-pulse-slow">
              <Zap className="w-3 h-3 fill-black" /> NEW COLLECTION DROP
            </div>
            
            <h1 className="text-white text-6xl sm:text-7xl md:text-9xl leading-[0.9] md:leading-[0.8] font-serif font-black tracking-tighter hover-glitch cursor-default transition-colors">
              MAIN<br/>CHARACTER
            </h1>
            
            <p className="text-white/80 text-base md:text-2xl font-medium max-w-xl font-sans backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10">
              Redefining beauty for the internet generation. <br className="hidden md:block"/>Step into the future of self-expression.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
               <Link to="/booking">
                 <Button size="lg" variant="primary" icon>BOOK APPOINTMENT</Button>
               </Link>
               <Link to="/quiz">
                 <Button size="lg" variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-black">
                   <Sparkles className="w-5 h-5 mr-2" /> FIND YOUR VIBE
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </div>

      <Marquee text="WALK-INS WELCOME • BAD VIBES NOT • BOOK ONLINE • STAY TOXIC (jk) •" />

      {/* Stories */}
      <div className="w-full px-4 md:px-10 py-16 max-w-[1440px] mx-auto">
        <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-8 snap-x">
          {stories.map((story, i) => (
            <div key={i} className="snap-center flex flex-col items-center gap-4 min-w-[90px] cursor-pointer group">
              <div className="p-[4px] rounded-full bg-gradient-to-tr from-secondary via-primary to-purple-600 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                <div className="rounded-full border-[4px] border-white dark:border-[#0f0f11] overflow-hidden size-[80px] md:size-[90px]">
                  <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-xs md:text-sm font-bold text-[#161118] dark:text-white uppercase tracking-wider">{story.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vibe Quiz CTA */}
      <div className="w-full px-4 md:px-6 py-6 max-w-[1440px] mx-auto">
        <div className="relative rounded-[3rem] bg-[#161118] overflow-hidden p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-20"></div>

           <div className="relative z-10 flex flex-col gap-8 max-w-xl">
             <h2 className="text-5xl md:text-8xl font-serif font-black text-white leading-[0.9]">
               WHAT'S<br/>YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">VIBE?</span>
             </h2>
             <p className="text-gray-400 text-lg md:text-xl font-medium">
               Take our 30-second aesthetic quiz and let our algorithm (and experts) style you.
             </p>
             <div className="flex gap-4">
              <Link to="/quiz">
                <Button variant="secondary" size="lg" icon>Take the Quiz</Button>
              </Link>
             </div>
           </div>
           
           <div className="relative z-10 w-full max-w-md aspect-square bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-4 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl">
              <div className="w-full h-full bg-black/50 rounded-2xl overflow-hidden relative group">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDlcrpqUruWZI6O3LWpnrOVaA1u-kdCSETX9IBTdtmSZbNfmoWQCoS-ivaeQ4smkZ4P-lMf-qc-BDxnWIbEhG7Np-IGd6B_Y284GdJVFez5ob0so-_m-YwVbgV5gIqUDoIAiEDoSMLGRQDCW15wdsAWNCSdGDwDLrQGrGqb8XmGinFsoJdXHwZ65HT2CWBqMLjIizmZ7Zno3S1dRq-TviZteE8Wp-4UMFOdlEc_5ykm3s-vjrL3r6fmNEuhkk_sldAwWc6HUJaTCq" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl animate-bounce">✨</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full px-4 md:px-10 py-16 md:py-24 bg-white dark:bg-[#0f0f11] max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
           <h2 className="text-5xl md:text-7xl font-serif font-black text-[#161118] dark:text-white uppercase leading-none">The Feed</h2>
           <Link to="/lookbook">
             <Button variant="outline" size="sm" icon>View All</Button>
           </Link>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {feedItems.map((item, idx) => {
            if (item.type === 'quote') {
              return (
                <div key={idx} className="break-inside-avoid p-8 md:p-10 bg-[#f3f0f4] dark:bg-[#1a1a1c] rounded-[2.5rem] flex flex-col justify-center items-center text-center gap-6 md:gap-8 min-h-[300px] hover:bg-primary hover:text-white transition-all duration-500 group border border-transparent hover:border-black/10">
                  <span className="text-6xl md:text-8xl font-serif group-hover:text-white text-primary/30 leading-none">"</span>
                  <p className="text-xl md:text-2xl font-bold leading-tight group-hover:text-white text-[#161118] dark:text-white">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                     <img src={item.avatar} alt="user" className="size-10 rounded-full object-cover ring-2 ring-white/20" />
                     <span className="text-sm font-bold opacity-60 group-hover:text-white group-hover:opacity-100">{item.user}</span>
                  </div>
                </div>
              )
            }
            return (
              <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-[#1a1a1c]">
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                
                {item.badge && (
                  <div className="absolute top-6 right-6 bg-secondary text-black text-xs font-black px-4 py-2 rounded-lg uppercase tracking-wider z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {item.badge}
                  </div>
                )}

                {item.type === 'video' && (
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2 z-20">
                    <Play className="w-3 h-3 text-white fill-current" />
                    <span className="text-white text-[10px] font-bold uppercase">Reel</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif font-black text-3xl italic mb-1">{item.title}</h3>
                    <p className="text-primary text-sm mb-6 font-mono uppercase tracking-widest">{item.category}</p>
                    <div className="flex items-center gap-3">
                       <Link to="/booking" className="flex-1">
                        <Button variant="secondary" size="sm" fullWidth>Book</Button>
                       </Link>
                       <button className="bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-xl backdrop-blur-sm transition-colors border border-white/10">
                         <Heart className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-24">
          <Button onClick={handleLoadMore} variant="ghost" size="lg">
            Load More <RefreshCw className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};