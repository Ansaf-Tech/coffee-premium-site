'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = ['Home', 'About', 'Menu', 'Process', 'Gallery', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 top-0 left-0 backdrop-blur-sm border-b border-amber-50/10 bg-brown-950/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-geist-mono)] text-amber-50">COFFEE SHOP</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-amber-100 hover:text-amber-50 relative group">
              {item}
              <motion.span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-amber-50">
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-950 border-t border-amber-50/10"
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => {
  e.preventDefault();
  setIsOpen(false);

  window.setTimeout(() => {
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }, 350);
}} className="block px-6 py-4 text-amber-100 hover:bg-brown-900">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;