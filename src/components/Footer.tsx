import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-10 border-t border-[#c5a059]/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[#8e735b] text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
      <div className="flex items-center gap-3">
        <Heart className="w-3 h-3 fill-[#c5a059]/20" />
        <span>Emma & Julian — 05.06.2024</span>
      </div>
      <div className="flex items-center gap-10">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#c5a059] transition-colors uppercase">Our Story</Link>
        <a href="#" className="hover:text-[#c5a059] transition-colors">Registry</a>
        <a href="#" className="hover:text-[#c5a059] transition-colors">Contact</a>
      </div>
    </footer>
  );
}
