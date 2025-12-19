import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCcw, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "Pick your weekend vibe",
    options: [
      { text: "Underground rave", vibe: "edgy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CONSXYWSuFya0mpbc-Fq4nTTXaw0OmpoHHlOucTSjzWKZ_GWRcpmh6P__GoO3DLKFTudGYPhZmk_xoF3Vhx9fS84D7sfUgRdzNJ7oc2UVilRJhdJShvBXfjI3kSOXK4nhZbPi34ka2_t_QsJqaZNWdjnRVfwU_6HqmqefXbd16nxr_FxcUjghbNjoWVAh3wdR5ksbOwdmO8ecfdy1QkK1BKLTgPGL_YH6VBkbUcU-8b0Z3g8VP-QcgSYF0_R3OCQoCJU6Hglu6iV" },
      { text: "Gallery opening", vibe: "chic", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkLBiaIs4ffS93zWgM1rGwJUg-V9GiYSx1WLGFsptInMZQxtTtQVLFA3MyFUzju2Itjj8n6j4i6yZ0vRYAVU-pZI2ngUbmyrlEzeRIovcM-Tc0MF1GRg5qrWJAoZlO6hhCnn8ktBtNYkiRjqNilCtYQJsoXH1RsiXPbTE4IVli6zxnO5TqHll_DQkw5G--QCVCUGOEirG6XrCfKo4XFib9NQFxdGyCHvkt91JBokbsC4wwgSd4oWdCJIJxWpdLgcVOflGmDRZiHpcz" },
      { text: "Pilates & Brunch", vibe: "clean", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwMWUj93sLVM8oeEcNXPfMr82mFBS7xApwcVuT1IQXbhiKGFgBRwpOmmOcucIhdifGZXjXH08AV4vImr5XVhI7ecRVCHo6x-78iOWH2ofapuDsqp2CfyxlNLf8KdjnTku9rx_LdyJ25m6reBh_-orN-33CSr3VIgQ9jsVkDfGZyNp-HjTX9yzHgGhympFQ7tcUoWTFxEZFvIix8XochwUByemhDw12zyzYVZm8mSBXYZXhtohslUsFBJKFUrGHOPazacDxdCU29akh" },
      { text: "Thrifting trip", vibe: "indie", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7_5T9rd7j_EJbnxAQa_8NiWkosvkJ75BasCgAvRJVyRRTgsletpVnax7oTc6hnF3rz78yApW84-DeMWqhct8irGYC-8fo2fAV5O1ogwRW2gF3E-e1hr_qeYf8yhuvw9qswKYjoFiWbLHs8iME3p5LrFfnMp-VsFVfG5LdHSoo7ab0pr326hKNtFc4ohdHUNr9Lhe7ZOfhILiLvbWac6sQXxG1dV1glnXHsJPgxymUXvonnkN8bmySbxRNqs1whhl5Zkb2VzeRHvjd" },
    ]
  },
  {
    id: 2,
    question: "Choose a color palette",
    options: [
      { text: "Neon & Acid", vibe: "edgy", color: "bg-green-400" },
      { text: "Monochrome", vibe: "chic", color: "bg-gray-900" },
      { text: "Neutrals", vibe: "clean", color: "bg-beige-200" },
      { text: "Pastels", vibe: "indie", color: "bg-pink-300" },
    ]
  },
  {
    id: 3,
    question: "Hair goals?",
    options: [
      { text: "Total transformation", vibe: "edgy" },
      { text: "Healthy & Glossy", vibe: "clean" },
      { text: "Sharp & Structured", vibe: "chic" },
      { text: "Fun & Textured", vibe: "indie" },
    ]
  }
];

const results = {
  edgy: {
    title: "The Edgy Baddie",
    desc: "You're not afraid to stand out. We recommend a Vivid Color Transformation or a Wolf Cut.",
    service: "Vivid Color Transformation",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyDlcrpqUruWZI6O3LWpnrOVaA1u-kdCSETX9IBTdtmSZbNfmoWQCoS-ivaeQ4smkZ4P-lMf-qc-BDxnWIbEhG7Np-IGd6B_Y284GdJVFez5ob0so-_m-YwVbgV5gIqUDoIAiEDoSMLGRQDCW15wdsAWNCSdGDwDLrQGrGqb8XmGinFsoJdXHwZ65HT2CWBqMLjIizmZ7Zno3S1dRq-TviZteE8Wp-4UMFOdlEc_5ykm3s-vjrL3r6fmNEuhkk_sldAwWc6HUJaTCq"
  },
  chic: {
    title: "Minimalist Chic",
    desc: "Sophisticated and timeless. A Sharp Bob or Dimensional Balayage is your calling.",
    service: "Sharp Bob",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkLBiaIs4ffS93zWgM1rGwJUg-V9GiYSx1WLGFsptInMZQxtTtQVLFA3MyFUzju2Itjj8n6j4i6yZ0vRYAVU-pZI2ngUbmyrlEzeRIovcM-Tc0MF1GRg5qrWJAoZlO6hhCnn8ktBtNYkiRjqNilCtYQJsoXH1RsiXPbTE4IVli6zxnO5TqHll_DQkw5G--QCVCUGOEirG6XrCfKo4XFib9NQFxdGyCHvkt91JBokbsC4wwgSd4oWdCJIJxWpdLgcVOflGmDRZiHpcz"
  },
  clean: {
    title: "Clean Girl Aesthetic",
    desc: "Effortless luxury. The Silk Press or a Glow Facial is perfect for you.",
    service: "The Silk Press",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwMWUj93sLVM8oeEcNXPfMr82mFBS7xApwcVuT1IQXbhiKGFgBRwpOmmOcucIhdifGZXjXH08AV4vImr5XVhI7ecRVCHo6x-78iOWH2ofapuDsqp2CfyxlNLf8KdjnTku9rx_LdyJ25m6reBh_-orN-33CSr3VIgQ9jsVkDfGZyNp-HjTX9yzHgGhympFQ7tcUoWTFxEZFvIix8XochwUByemhDw12zyzYVZm8mSBXYZXhtohslUsFBJKFUrGHOPazacDxdCU29akh"
  },
  indie: {
    title: "Y2K Princess",
    desc: "Playful and nostalgic. Try Gel-X Extensions or some glittery layers.",
    service: "Gel-X Extensions",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLhOnSzuo68gN49IS3G8wbFswh7W8aZp8lLNDfFRjVuyTrsBhjfmEQIwukHGoB0nl4SJlqXeA3G8wtlf28MxjK9M3LUsrW78LnAVo8bgUGMfpk_50myjrqN5VxN2qbenKo6PO2867iYKVHl0HDB2nuNnHPsAcP7IoqH4bvs9yhY0PsbMz_YQ3S4kjra2yQkw8Pq0M_-BjKfvhwOMyYpAFapxn7hp2_K03RGXR029UydxcipfZXAtBEdVwNdOjrl9Yn9jR7JaQRh3ez"
  }
};

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (vibe: string) => {
    const newAnswers = [...answers, vibe];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // Simple logic: most frequent answer
    const counts: Record<string, number> = {};
    finalAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const topVibe = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(results[topVibe as keyof typeof results] || results.clean);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-[#161118] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Noise & blobs */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse-slow"></div>
      
      {!result ? (
        <div className="max-w-4xl w-full z-10">
           <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
              <h1 className="text-4xl md:text-6xl font-serif font-black italic">
                {step + 1} / {questions.length}
              </h1>
              <span className="text-xl font-mono opacity-50 uppercase tracking-widest">Find Your Vibe</span>
           </div>

           <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">{questions[step].question}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {questions[step].options.map((opt, i) => (
               <button 
                 key={i}
                 onClick={() => handleAnswer(opt.vibe)}
                 className="group relative aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary transition-all duration-300 hover:-translate-y-2"
               >
                 {opt.img && <img src={opt.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
                 {opt.color && <div className={`absolute inset-0 w-full h-full ${opt.color} opacity-60 group-hover:opacity-100 transition-opacity`}></div>}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
                    <span className="text-xl font-bold uppercase tracking-widest z-10 text-shadow">{opt.text}</span>
                 </div>
               </button>
             ))}
           </div>
        </div>
      ) : (
        <div className="max-w-5xl w-full z-10 flex flex-col md:flex-row gap-12 items-center animate-fade-in-up">
           <div className="flex-1">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[3/4] border-4 border-white/20 rotate-3">
                 <img src={result.img} className="w-full h-full object-cover" />
                 <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                    <span className="text-2xl font-black uppercase">{result.title}</span>
                 </div>
              </div>
           </div>
           
           <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-6xl md:text-8xl font-serif font-black leading-[0.8] text-primary">
                IT'S A<br/>MATCH
              </h2>
              <p className="text-2xl text-gray-300 font-light leading-relaxed">
                {result.desc}
              </p>
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-4">
                 <span className="text-xs uppercase tracking-widest text-gray-400">Recommended Service</span>
                 <p className="text-2xl font-bold mt-1">{result.service}</p>
              </div>

              <div className="flex gap-4 mt-6">
                 <Link to="/booking" className="flex-1">
                   <button className="w-full h-16 bg-white text-black rounded-full font-black text-xl uppercase tracking-wider hover:bg-secondary transition-colors">
                     Book This Look
                   </button>
                 </Link>
                 <button onClick={reset} className="size-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <RefreshCcw className="w-6 h-6" />
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};