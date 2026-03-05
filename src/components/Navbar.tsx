import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Instagram } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToStory = () => {
    if (isHome) {
      document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent border-b border-[#c5a059]/10">
      <Link to="/" className="flex items-center gap-3">
        <Heart className="text-[#c5a059] w-5 h-5 fill-[#c5a059]/20" />
        <span className="text-[#4a4a4a] font-serif text-xl tracking-widest uppercase">E & J</span>
      </Link>
      <div className="hidden md:flex items-center gap-10 text-xs font-sans font-semibold tracking-[0.2em] text-[#8e735b] uppercase">
        <Link to="/" onClick={scrollToStory} className="hover:text-[#c5a059] transition-colors">Our Story</Link>
        <Link to="/gallery" className="hover:text-[#c5a059] transition-colors">Gallery</Link>
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
  );
}
