'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const Gallery = () => {
  const shouldReduceMotion = useReducedMotion();

  // Preserved verified local image sources and details
  const galleryItems = [
    { id: 1, title: 'Perfect Pour', category: 'Espresso', src: '/images/gallery-1.jpg' },
    { id: 2, title: 'Latte Art Masterclass', category: 'Art', src: '/images/gallery-2.jpg' },
    { id: 3, title: 'Cozy Corner', category: 'Ambience', src: '/images/gallery-3.jpg' },
    { id: 4, title: 'Morning Brew', category: 'Moment', src: '/images/gallery-4.jpg' },
    { id: 5, title: 'Fresh Beans', category: 'Quality', src: '/images/gallery-5.jpg' },
    { id: 6, title: 'Cold Brew Delight', category: 'Specials', src: '/images/gallery-6.jpg' },
  ];

  return (
    <section id="gallery" className="py-28 px-6 relative overflow-hidden bg-[#0a0503]">
      {/* ============================================================== */}
      {/* SECTION BACKGROUND: EDITORIAL DARK & WARM GRADIENT MOVEMENT    */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, #170d06 0%, #0d0603 55%, #070301 100%)',
        }}
      />

      {/* Gentle Warm Caramel Gradient Movement */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 40, -30, 0],
                y: [0, -30, 20, 0],
                opacity: [0.12, 0.22, 0.14, 0.12],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[20%] -left-[5%] w-[650px] h-[650px] rounded-full pointer-events-none -z-20"
        style={{
          background: 'radial-gradient(circle, rgba(198, 151, 73, 0.20) 0%, rgba(138, 80, 28, 0.06) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -30, 25, 0],
                y: [0, 25, -20, 0],
                opacity: [0.10, 0.20, 0.12, 0.10],
                scale: [1, 0.95, 1.06, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none -z-20"
        style={{
          background: 'radial-gradient(circle, rgba(166, 92, 33, 0.18) 0%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Visual Journal
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-100 tracking-tight mt-3">
            The Espresso Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-amber-200/80">
            A visual tour through our passion for premium coffee, skilled craft, and cozy atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative group overflow-hidden rounded-3xl border-2 border-amber-950/40 shadow-xl shadow-black/50 transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-950/40"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = '/images/gallery-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/95 via-brown-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest bg-brown-950/80 border border-amber-500/20 py-1 px-3 rounded-full self-start backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-amber-50 mt-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
