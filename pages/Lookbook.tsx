import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0CBzgzG79Y97knxVIEhgK9XsWBOl_Aq1-j9X3kVK6IeSTdXCUovM9guK8vaiyCrqoj3CKSOIiIaz1pirc87-IzxCuub-7v5oZXztX5eAQhe6fzMFbWgF-NovYal4AewUYhSgd8FwaCGkndMLXKh9PhT9_0ENbLyhXD0dOlO9mpgu0DQoIqxAykOLzxUtD7hjwwV5mTuJF_VCkt4XB-GG0cE46NjgFKJdu6eryRtZj1EtAXtGRkqZ9jPzMKXnayOyF0cpTnYH1ITJi', title: 'The Wolf Cut', tag: 'Hair' },
  { id: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFnJOR7oIqPr8WHdUFQC1By0G6u7x-qYeYnlqd2KkkOtHnrTlTEsnxhV074nn50hIgI7blZsMX0nC6cg_JtV9K716XoIajEgfRuecDk2Jm_dZmNgA1cZJBcZ2JFrts5-dYyybNwPDsBV1Sc6Ro8oRd7cnPepd3nam_pNL4j6dP3RWe-1fVu4cQ7ioPCdb4Z6VFvFEQfjL7Fw2203sVkEoARpNLA-_Gv6Rpr3JC0Raekd2MH_19BPyxBVU3v7ryDOcXFS3gOgOpDBNO', title: 'Neon Balayage', tag: 'Color' },
  { id: 3, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLhOnSzuo68gN49IS3G8wbFswh7W8aZp8lLNDfFRjVuyTrsBhjfmEQIwukHGoB0nl4SJlqXeA3G8wtlf28MxjK9M3LUsrW78LnAVo8bgUGMfpk_50myjrqN5VxN2qbenKo6PO2867iYKVHl0HDB2nuNnHPsAcP7IoqH4bvs9yhY0PsbMz_YQ3S4kjra2yQkw8Pq0M_-BjKfvhwOMyYpAFapxn7hp2_K03RGXR029UydxcipfZXAtBEdVwNdOjrl9Yn9jR7JaQRh3ez', title: 'Gel X Art', tag: 'Nails' },
  { id: 4, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLBiaIs4ffS93zWgM1rGwJUg-V9GiYSx1WLGFsptInMZQxtTtQVLFA3MyFUzju2Itjj8n6j4i6yZ0vRYAVU-pZI2ngUbmyrlEzeRIovcM-Tc0MF1GRg5qrWJAoZlO6hhCnn8ktBtNYkiRjqNilCtYQJsoXH1RsiXPbTE4IVli6zxnO5TqHll_DQkw5G--QCVCUGOEirG6XrCfKo4XFib9NQFxdGyCHvkt91JBokbsC4wwgSd4oWdCJIJxWpdLgcVOflGmDRZiHpcz', title: 'Sharp Bob', tag: 'Cut' },
  { id: 5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIO6h6CEYMT95ssgaKZHBxnujQ3JmcNm2Nfh46MEKLt4tgcalXY2FOf7V1v0I7uL9WCTTSu3aym36NVgVx_C3cH8-Dnpr4uv1Ux5LhoiWm33m0Zw5wXuvhdIceziQwpOShEnl-FVkFriH7gqD_wuNRXj3id50xanMmhs7o9_l0_783oipzXKM7408B-Xqai9HUdacCAWV3OXlS9-LGW6khxZv5Lat6GnzTKU_HhlN2YflSrf19_cBcVDA_20BJZWJE-Ghpsqw8kUJ7', title: 'Full Glam', tag: 'Makeup' },
  { id: 6, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAodOS-TG07C63UpC1O9PA8rCe94eCy7A7EquwUeb7jBBnuLDBQvWZ1XJHR65Qi5H8H3v58xmNzUW49igGn3PFHNGSkEjR2w56n9UMIU8CajESe6SPQJLqq35AvkOBjmDqaPZpiyee-VxiOrEMe53FR9dDp5OlPYK20yYtyQ9DwLFBjNUUVp2fFL2U8SrnEbSixZT13cpH65FLA9qkhoKESyEswUYoJwOxTjabRmLhnc6al05QhXnu5k6lbTotC1Sdgk4LRDsTNWird', title: 'Platinum Curls', tag: 'Color' },
  { id: 7, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyDlcrpqUruWZI6O3LWpnrOVaA1u-kdCSETX9IBTdtmSZbNfmoWQCoS-ivaeQ4smkZ4P-lMf-qc-BDxnWIbEhG7Np-IGd6B_Y284GdJVFez5ob0so-_m-YwVbgV5gIqUDoIAiEDoSMLGRQDCW15wdsAWNCSdGDwDLrQGrGqb8XmGinFsoJdXHwZ65HT2CWBqMLjIizmZ7Zno3S1dRq-TviZteE8Wp-4UMFOdlEc_5ykm3s-vjrL3r6fmNEuhkk_sldAwWc6HUJaTCq', title: 'Unicorn Vibes', tag: 'Creative' },
  { id: 8, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMWUj93sLVM8oeEcNXPfMr82mFBS7xApwcVuT1IQXbhiKGFgBRwpOmmOcucIhdifGZXjXH08AV4vImr5XVhI7ecRVCHo6x-78iOWH2ofapuDsqp2CfyxlNLf8KdjnTku9rx_LdyJ25m6reBh_-orN-33CSr3VIgQ9jsVkDfGZyNp-HjTX9yzHgGhympFQ7tcUoWTFxEZFvIix8XochwUByemhDw12zyzYVZm8mSBXYZXhtohslUsFBJKFUrGHOPazacDxdCU29akh', title: 'Silk Press', tag: 'Hair' },
  { id: 9, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4w458M_hE9t9WLLzkmZc2a4lKl9VhGnDEVzMaIMCM1Qrp2yFFhdu46wJE33T7Bb7VQTZm1i4HztPXlcxCSjE-KLIS60DiRkLC3meABGM9aWzn9DuD2YYJZhkrGGC2whB3dM3IFKFe83djScOE1Ksmkc-eSUJV5aDzo0_PudTDvziwvy6uKSzBhp3llpQQRTgOpaZA-KZPrJEq_x2KKo4SNyan92YUQXSvdoS7JIM5v4SbXr9FQZSkHIgYyh4rATknBOeOF2mAutRK', title: 'Balayage', tag: 'Color' },
];

export const Lookbook: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <div className="w-full bg-background-light dark:bg-[#0f0f11] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 pb-12 pt-6 md:pb-20 md:pt-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-9xl font-serif font-black text-[#161118] dark:text-white mb-6 uppercase tracking-tighter">Lookbook</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            A curation of our finest work. Real clients, real results.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(idx)}
              className="break-inside-avoid relative group cursor-zoom-in rounded-[2rem] overflow-hidden bg-gray-200 dark:bg-gray-800"
            >
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                    <h3 className="text-white font-serif text-3xl italic">{item.title}</h3>
                    <span className="text-primary font-mono uppercase tracking-widest text-xs">{item.tag}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
           <button onClick={() => setSelectedImg(null)} className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
             <X className="w-10 h-10" />
           </button>
           
           <div className="max-w-4xl max-h-[80vh] w-full relative" onClick={e => e.stopPropagation()}>
             <img src={galleryItems[selectedImg].img} className="w-full h-full object-contain rounded-xl shadow-2xl" />
             <div className="absolute -bottom-12 left-0 text-white">
                <h3 className="text-2xl font-bold">{galleryItems[selectedImg].title}</h3>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};