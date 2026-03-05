import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2, X, Heart } from 'lucide-react';
import Footer from '../components/Footer';

const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000", title: "The Details", caption: "Every small detail was chosen with love, from the lace to the flowers." },
  { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000", title: "The Venue", caption: "A sun-drenched morning in the heart of the Tuscan countryside." },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000", title: "The Vows", caption: "Promises made under the ancient oak tree, witnessed by our loved ones." },
  { url: "https://images.unsplash.com/photo-1465495910483-34a1d23999ff?auto=format&fit=crop&q=80&w=1000", title: "The Dance", caption: "Our first dance as husband and wife, a moment of pure magic." },
  { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000", title: "The Rings", caption: "Symbols of our eternal commitment and the life we'll build together." },
  { url: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1000", title: "The Cake", caption: "A sweet celebration of our new beginning, shared with friends." },
  { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1000", title: "The Toast", caption: "Heartfelt words and laughter filled the air during the evening toasts." },
  { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000", title: "The Kiss", caption: "A sealed promise and the start of our greatest adventure." },
  { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000", title: "The Bouquet", caption: "Hand-picked wildflowers that captured the essence of the season." },
  { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000", title: "The Table", caption: "An intimate dinner setting under the warm glow of fairy lights." },
  { url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1000", title: "The Preparation", caption: "Quiet moments of reflection before the celebration began." },
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000", title: "The Exit", caption: "Walking into our future surrounded by love and cheers." },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string, caption: string} | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fdfcf8] min-h-screen pt-32 pb-64 relative">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Camera className="w-10 h-10 text-[#c5a059] mx-auto mb-6 opacity-40" />
            <h2 className="text-5xl md:text-6xl font-serif italic text-[#4a4a4a] mb-6">Capturing the Magic</h2>
            <div className="w-20 h-[1px] bg-[#c5a059]/30 mx-auto mb-6" />
            <p className="text-[#8e735b] font-serif text-lg italic max-w-xl mx-auto">
              A collection of our favorite moments from the day we said "I do."
            </p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group cursor-pointer bg-white p-4 shadow-sm border border-[#c5a059]/10 rounded-sm"
              onClick={() => setSelectedImage(img)}
            >
              <div className="overflow-hidden relative rounded-sm">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#c5a059] uppercase mb-2">{img.title}</p>
                <p className="text-sm font-serif italic text-[#8e735b] leading-relaxed px-2">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[#c5a059] transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain shadow-2xl mb-8"
                referrerPolicy="no-referrer"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center text-white max-w-2xl"
              >
                <h3 className="text-2xl font-serif italic mb-2">{selectedImage.title}</h3>
                <p className="text-white/70 font-serif italic text-lg">{selectedImage.caption}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
