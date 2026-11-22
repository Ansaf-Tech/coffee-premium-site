'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, animate } from 'motion/react';

const StatCounter = ({ value, text }: { value: number; text: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 5, // Further increased duration for an even slower effect
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div>
      <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">
        {count}{text.includes('+') ? '+' : ''}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-amber-200/80 font-medium">{text.replace('+', '')}</p>
    </div>
  );
};

const BrandStory = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-[#100905]">
      {/* ============================================================== */}
      {/* SECTION BACKGROUND: WARM BROWN/CREAM GRADIENT & RING TEXTURE   */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-20"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 25% 45%, #2a160b 0%, #180d06 55%, #0c0603 95%)',
        }}
      />

      {/* Warm Cream / Amber Glow behind text */}
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
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(214, 153, 58, 0.22) 0%, rgba(138, 80, 28, 0.08) 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Coffee Ring Watermark Texture in Background */}
      <div className="absolute top-[8%] right-[4%] w-[380px] h-[380px] pointer-events-none -z-10 opacity-15">
        <svg viewBox="0 0 360 360" className="w-full h-full text-amber-700" fill="none">
          <circle cx="180" cy="180" r="145" stroke="#b07d3b" strokeWidth="3" strokeDasharray="80 20 160 15" strokeOpacity="0.5" />
          <circle cx="180" cy="180" r="150" stroke="#8c5324" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* Subtle Background Coffee Photo Texture */}
      <div
        className="absolute inset-0 pointer-events-none -z-15 opacity-[0.04] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/images/coffee-morning.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
          maskImage: 'radial-gradient(circle at 70% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* ============================================================== */}
      {/* CONTENT GRID                                                   */}
      {/* ============================================================== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: EDITORIAL LAYERED IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main Pouring Visual */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-amber-500/15 shadow-2xl shadow-black/60 group">
            <motion.div style={{ scale: shouldReduceMotion ? 1 : scale }} className="w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
                alt="Cinematic coffee pouring"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = '/images/gallery-1.jpg';
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 text-xs text-amber-300 font-mono tracking-wider">
              ✦ Precision Pour-Over Method
            </div>
          </div>

          {/* Overlapping Secondary Local Image Panel (coffee-beans-cup.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl shadow-black/80 bg-brown-950 p-1"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img
                src="/images/coffee-beans-cup.jpg"
                alt="Single-origin roasted beans and espresso cup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-transparent to-transparent" />
              <span className="absolute bottom-1.5 inset-x-0 text-center text-[9px] uppercase tracking-widest font-mono text-amber-300 font-bold">
                Origin Beans
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: BRAND STORY COPY */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-amber-100"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Our Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mt-4">
            Mastering The Art<br />
            <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Of Global Coffee
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-amber-200/80 leading-relaxed font-normal">
            From the misty highlands of Ethiopia to the sun-drenched plantations of Colombia, we meticulously select each bean. Our master roasters then craft unparalleled blends, ensuring a cinematic sensory journey in every cup.
          </    p>
          <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-amber-500/15">
            <StatCounter value={15} text="Global Origins+" />
            <StatCounter value={2500} text="Perfect Cups Daily+" />
            <StatCounter value={12} text="Signature Brews" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStory;
