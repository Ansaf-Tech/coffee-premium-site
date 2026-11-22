'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const products = [
  { name: 'Espresso Intenso', origin: 'Ethiopia', price: '$4.50', img: '/images/espresso-intenso.jpg' },
  { name: 'Caramel Macchiato', origin: 'Colombia', price: '$5.50', img: '/images/caramel-macchiato.jpg' },
  { name: 'Direct Roast', origin: 'Brazil', price: '$4.00', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Latte Art Supreme', origin: 'International Blend', price: '$5.00', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop' },
  { name: 'Bronze Brew', origin: 'Peru', price: '$4.80', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop' },
  { name: 'Warm Cream Mocha', origin: 'Indonesian', price: '$5.20', img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=800&auto=format&fit=crop' },
];

const CoffeeCollection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="menu" className="py-28 px-6 relative overflow-hidden bg-[#0a0502]">
      {/* ============================================================== */}
      {/* SECTION BACKGROUND: DEEP ESPRESSO & WARM PRODUCT SPOTLIGHTS    */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-20"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 10%, #1f1006 0%, #110803 50%, #0a0402 100%)',
        }}
      />

      {/* Warm Product Spotlights (Left and Right ambient glows) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[25%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(198, 151, 73, 0.16) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.12, 0.22, 0.12],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[50%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(166, 92, 33, 0.18) 0%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Signature Roast Selection
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-amber-50 tracking-tight mt-3"
          >
            The Collection
          </motion.h2>
          <p className="mt-3 text-base sm:text-lg text-amber-200/80 font-normal">
            Handcrafted micro-batches roasted to highlight individual cup characteristics.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25 } }}
              className="bg-brown-950/85 backdrop-blur-md border border-amber-500/15 rounded-3xl p-6 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-950/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 via-amber-400/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

              <div className="aspect-square rounded-2xl bg-brown-950 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => {
                    if (product.name === 'Direct Roast') e.currentTarget.src = '/images/direct-roast.jpg';
                    else if (product.name === 'Latte Art Supreme') e.currentTarget.src = '/images/latte-art-supreme.jpg';
                    else if (product.name === 'Bronze Brew') e.currentTarget.src = '/images/bronze-brew.jpg';
                    else if (product.name === 'Warm Cream Mocha') e.currentTarget.src = '/images/warm-cream-mocha.jpg';
                    else e.currentTarget.src = '/images/espresso-intenso.jpg';
                  }}
                />
                <span className="absolute top-3 right-3 text-[11px] font-mono font-semibold tracking-wider text-amber-300 bg-brown-950/80 backdrop-blur-sm border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  {product.origin}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-amber-50 group-hover:text-amber-400 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-amber-300/80 font-medium">{product.origin} Selection</p>
              <p className="mt-3 text-sm text-amber-200/75 leading-relaxed line-clamp-2">
                Experience the cinematic depth of our premium {product.name.toLowerCase()}.
              </p>
              <div className="mt-6 pt-4 border-t border-amber-500/10 flex items-center justify-between">
                <p className="text-2xl font-extrabold text-amber-400">{product.price}</p>
                <button className="text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all font-semibold text-sm flex items-center gap-1">
                  Order Now <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeCollection;
