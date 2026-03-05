/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Twitter, ExternalLink, Code, Layers, Zap, MousePointer2 } from 'lucide-react';

const SECTIONS = [
  {
    id: 1,
    title: "The Art of Scrolling",
    subtitle: "Experience depth through motion",
    description: "Discover how simple CSS properties can transform a standard webpage into an immersive journey. This overlapping effect creates a sense of layering and hierarchy.",
    bg: "bg-zinc-900",
    textColor: "text-white",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    accent: "text-emerald-400"
  },
  {
    id: 2,
    title: "Sticky Precision",
    subtitle: "Built with pure CSS & Tailwind",
    description: "No heavy libraries required. By leveraging the power of position: sticky and careful z-index management, we achieve a high-performance visual experience.",
    bg: "bg-emerald-950",
    textColor: "text-emerald-50",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    accent: "text-emerald-300"
  },
  {
    id: 3,
    title: "Interactive Layers",
    subtitle: "Engage your audience",
    description: "Modern web design is about more than just content—it's about the feel. Layered transitions keep users focused and curious about what's coming next.",
    bg: "bg-indigo-950",
    textColor: "text-indigo-50",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    accent: "text-indigo-300"
  },
  {
    id: 4,
    title: "Crafted with Care",
    subtitle: "Performance meets aesthetics",
    description: "Every pixel matters. We combine smooth animations with optimized layouts to ensure a seamless experience across all devices and screen sizes.",
    bg: "bg-rose-950",
    textColor: "text-rose-50",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964",
    accent: "text-rose-300"
  }
];

export default function App() {
  return (
    <div className="bg-black font-sans antialiased selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/10 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Layers className="text-black w-5 h-5" />
          </div>
          <span className="text-white font-bold tracking-tight">SCROLL.IO</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Showcase</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Tutorial</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Hero Background"
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            New Scroll Experience
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
            OVERLAPPING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              DIMENSIONS
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A visual exploration of depth and motion. Scroll down to see the sections stack and overlap in a seamless flow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Explore Now <ArrowDown className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              View Documentation
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-zinc-500"
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-emerald-500 rounded-full"
            />
          </div>
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
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  <span className={`text-sm font-bold tracking-[0.3em] uppercase ${section.accent} mb-4 block`}>
                    0{index + 1} / 04
                  </span>
                  <h2 className={`text-5xl md:text-7xl font-black ${section.textColor} tracking-tighter mb-6 leading-tight`}>
                    {section.title}
                  </h2>
                  <h3 className={`text-xl md:text-2xl font-medium ${section.textColor} opacity-80 mb-8`}>
                    {section.subtitle}
                  </h3>
                  <p className={`text-lg ${section.textColor} opacity-60 max-w-xl mb-10 leading-relaxed`}>
                    {section.description}
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${section.accent}`}>
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className={section.textColor}>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-40">Speed</p>
                        <p className="font-bold">60 FPS</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${section.accent}`}>
                        <Code className="w-6 h-6" />
                      </div>
                      <div className={section.textColor}>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-40">Code</p>
                        <p className="font-bold">Pure CSS</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, margin: "-100px" }}
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-[4/3] lg:aspect-square"
                >
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-20 ${section.bg} border border-white/20`} />
                <div className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-10 ${section.bg} border border-white/20`} />
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Final CTA Section */}
      <section className="relative h-screen bg-zinc-950 flex items-center justify-center text-center px-6 z-[100]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              READY TO <br />
              <span className="text-emerald-400">TRANSFORM</span> YOUR WEB?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
              Start building modern, interactive experiences today. Our tools and techniques are designed for the next generation of the web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-emerald-500 text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-400 hover:scale-105 transition-all">
                Get the Source Code
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors">
                Follow on Twitter <Twitter className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>© 2024 SCROLL.IO — Crafted with passion</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
