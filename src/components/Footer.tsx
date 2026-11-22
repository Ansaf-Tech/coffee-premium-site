'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 bg-brown-950 border-t border-amber-500/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h4 className="text-xl font-bold text-amber-50 tracking-wider">ESPRESSO</h4>
          <p className="mt-1 text-xs text-amber-200/60 max-w-sm">
            High-altitude micro-lot coffee, artisanal roasting, and cinematic sensory journeys.
          </p>
        </div>
        <div className="flex gap-6 text-xs text-amber-200/70 font-mono">
          <a href="#home" className="hover:text-amber-400 transition-colors">Top ↑</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">Story</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#process" className="hover:text-amber-400 transition-colors">Process</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Reservations</a>
        </div>
        <div className="text-xs text-amber-200/50">
          ESPRESSO © 2026. Crafted in Kochi, Kerala. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
