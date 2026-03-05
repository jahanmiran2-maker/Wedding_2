/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Calendar, MapPin, Camera, Music, Users, ArrowDown, Instagram, Facebook, Mail } from 'lucide-react';

const SECTIONS = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "Our Journey Starts Here",
    description: "A beautiful morning filled with anticipation and joy. The air was crisp, and the garden was in full bloom as we prepared to say our vows.",
    bg: "bg-[#fdfcf8]",
    textColor: "text-[#4a4a4a]",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069",
    accent: "text-[#c5a059]",
    borderColor: "border-[#c5a059]/20"
  },
  {
    id: 2,
    title: "The Ceremony",
    subtitle: "Two Hearts, One Promise",
    description: "Under the ancient oak tree, surrounded by our closest family and friends, we promised to walk through life hand in hand, forever.",
    bg: "bg-[#f5f2ed]",
    textColor: "text-[#3d3d3d]",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070",
    accent: "text-[#8e735b]",
    borderColor: "border-[#8e735b]/20"
  },
  {
    id: 3,
    title: "The Celebration",
    subtitle: "Laughter and Dance",
    description: "As the sun set, the lights came up. A night of heartfelt toasts, delicious food, and dancing under the stars that we will never forget.",
    bg: "bg-[#faf7f2]",
    textColor: "text-[#444444]",
    image: "https://images.unsplash.com/photo-1465495910483-34a1d23999ff?auto=format&fit=crop&q=80&w=2070",
    accent: "text-[#b08d57]",
    borderColor: "border-[#b08d57]/20"
  },
  {
    id: 4,
    title: "The Details",
    subtitle: "Small Moments, Big Memories",
    description: "From the delicate lace of the dress to the hand-picked wildflowers, every detail was a reflection of our love and the life we are building together.",
    bg: "bg-[#f2efe9]",
    textColor: "text-[#2d2d2d]",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070",
    accent: "text-[#a68b6d]",
    borderColor: "border-[#a68b6d]/20"
  }
];

export default function App() {
  return (
    <div className="bg-[#fdfcf8] font-serif antialiased selection:bg-[#c5a059]/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-white/30 border-b border-[#c5a059]/10">
        <div className="flex items-center gap-3">
          <Heart className="text-[#c5a059] w-5 h-5 fill-[#c5a059]/20" />
          <span className="text-[#4a4a4a] font-serif text-xl tracking-widest uppercase">E & J</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-sans font-semibold tracking-[0.2em] text-[#8e735b] uppercase">
          <a href="#" className="hover:text-[#c5a059] transition-colors">Our Story</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Gallery</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">RSVP</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[#8e735b] hover:text-[#c5a059] transition-colors">
            <Instagram className="w-5 h-5" />
          </button>
          <div className="h-4 w-[1px] bg-[#c5a059]/30 hidden sm:block" />
          <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#c5a059] uppercase hidden sm:block">
            05 . 06 . 2024
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
            alt="Wedding Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 max-w-4xl"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/40 text-white text-[10px] font-sans font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-sm">
            The Wedding of
          </span>
          <h1 className="text-7xl md:text-9xl font-serif italic text-white mb-8 leading-none">
            Emma & Julian
          </h1>
          <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8" />
          <p className="text-white/90 font-serif text-xl md:text-2xl italic max-w-2xl mx-auto mb-12">
            A celebration of love, laughter, and a lifetime of memories.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-sans font-bold text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#8e735b] transition-all duration-500">
              Enter the Album
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/60"
        >
          <ArrowDown className="w-6 h-6 stroke-1" />
        </motion.div>
      </header>

      {/* Overlapping Sections Container */}
      <main className="relative">
        {SECTIONS.map((section, index) => (
          <section 
            key={section.id}
            className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${section.bg}`}
            style={{ zIndex: index + 1 }}
          >
            <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-[1px] ${section.bg === 'bg-[#fdfcf8]' ? 'bg-[#c5a059]' : 'bg-[#8e735b]'} opacity-40`} />
                    <span className={`text-[10px] font-sans font-bold tracking-[0.4em] uppercase ${section.accent}`}>
                      Chapter 0{index + 1}
                    </span>
                  </div>
                  
                  <h2 className={`text-5xl md:text-7xl font-serif italic ${section.textColor} mb-8 leading-tight`}>
                    {section.title}
                  </h2>
                  
                  <p className={`text-lg md:text-xl font-serif italic ${section.textColor} opacity-80 mb-10 leading-relaxed max-w-xl`}>
                    "{section.description}"
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
                    <div className="flex items-start gap-4">
                      <Calendar className={`w-5 h-5 ${section.accent} mt-1`} />
                      <div>
                        <p className={`text-[10px] font-sans font-bold uppercase tracking-widest ${section.textColor} opacity-40 mb-1`}>Date</p>
                        <p className={`font-serif text-sm ${section.textColor}`}>June 5th, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className={`w-5 h-5 ${section.accent} mt-1`} />
                      <div>
                        <p className={`text-[10px] font-sans font-bold uppercase tracking-widest ${section.textColor} opacity-40 mb-1`}>Location</p>
                        <p className={`font-serif text-sm ${section.textColor}`}>Tuscany, Italy</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-100px" }}
                  className={`relative z-10 p-4 bg-white shadow-xl ${section.borderColor} border rounded-sm`}
                >
                  <div className="overflow-hidden aspect-[4/5] relative">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#c5a059]/5 mix-blend-overlay" />
                  </div>
                  <div className="pt-6 pb-2 text-center">
                    <p className="font-serif italic text-[#8e735b] text-sm">{section.subtitle}</p>
                  </div>
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#c5a059]/10 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-[#c5a059]/5 rounded-full" />
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Final Section */}
      <section className="relative h-screen bg-[#fdfcf8] flex items-center justify-center text-center px-6 z-[100]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heart className="w-12 h-12 text-[#c5a059] mx-auto mb-10 fill-[#c5a059]/10" />
            <h2 className="text-5xl md:text-7xl font-serif italic text-[#4a4a4a] mb-8">
              Thank You for Being <br />
              <span className="text-[#c5a059]">Part of Our Story</span>
            </h2>
            <p className="text-[#8e735b] font-serif text-lg mb-12 max-w-xl mx-auto italic">
              "Love is not just looking at each other, it's looking in the same direction."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-[#c5a059] text-white px-12 py-4 rounded-full font-sans font-bold text-xs tracking-[0.3em] uppercase hover:bg-[#a68b6d] transition-all shadow-lg shadow-[#c5a059]/20">
                View Full Gallery
              </button>
              <button className="flex items-center gap-3 text-[#8e735b] font-sans font-bold text-[10px] tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors">
                Share the Love <Mail className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 p-10 border-t border-[#c5a059]/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[#8e735b] text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
          <div className="flex items-center gap-3">
            <Heart className="w-3 h-3 fill-[#c5a059]/20" />
            <span>Emma & Julian — 05.06.2024</span>
          </div>
          <div className="flex items-center gap-10">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Our Story</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Registry</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Contact</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
