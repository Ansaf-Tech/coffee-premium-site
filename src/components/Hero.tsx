'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Removed scroll parallax transforms. Keeping original structure.

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#0c0603]"
    >
      {/* ============================================================== */}
      {/* LAYER 1: DEEP ESPRESSO BASE GRADIENT & VIGNETTE                */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 60% 45%, #241308 0%, #170c05 45%, #0c0603 85%)',
        }}
      />
      {/* Cinematic Vignette */}
      <div
        className="absolute inset-0 pointer-events-none -z-40 opacity-80"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(6, 3, 1, 0.85) 100%)',
        }}
      />

      {/* ============================================================== */}
      {/* LAYER 2: WARM RADIAL GLOWS (CARAMEL, AMBER, CREAM ILLUMINATION) */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-30 overflow-hidden" aria-hidden="true">
        {/* Caramel Highlight Glow behind the coffee splash area */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 0.95, 1],
                  opacity: [0.35, 0.50, 0.38, 0.35],
                  x: [0, 30, -20, 0],
                  y: [0, -25, 20, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[15%] right-[5%] lg:right-[12%] w-[550px] lg:w-[680px] h-[550px] lg:h-[680px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(214, 153, 58, 0.32) 0%, rgba(166, 92, 33, 0.16) 45%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />

        {/* Roasted Copper / Bronze Glow - Bottom Left */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 0.92, 1.12, 1],
                  opacity: [0.18, 0.30, 0.20, 0.18],
                  x: [0, -35, 25, 0],
                  y: [0, 30, -20, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(160, 82, 45, 0.22) 0%, rgba(85, 40, 18, 0.10) 50%, transparent 75%)',
            filter: 'blur(85px)',
          }}
        />

        {/* Soft Golden Center Beam - ambient cream illumination */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [0.95, 1.06, 0.95],
                  opacity: [0.12, 0.20, 0.12],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(245, 234, 221, 0.12) 0%, rgba(198, 151, 73, 0.05) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* LAYER 3: TRANSLUCENT COFFEE RINGS / CUP STAINS (SLOW DRIFT)    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
        {/* Large Coffee Ring 1 - Upper Right Backdrop */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [0, 8, 0],
                  scale: [1, 1.03, 1],
                  x: [0, 10, 0],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[5%] -right-[8%] sm:right-[2%] lg:right-[6%] w-[380px] sm:w-[480px] lg:w-[560px] opacity-20"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full text-amber-700/60" fill="none">
            <defs>
              <radialGradient id="heroRingWash1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#432818" stopOpacity="0" />
                <stop offset="70%" stopColor="#583115" stopOpacity="0.08" />
                <stop offset="92%" stopColor="#8c5324" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#c69749" stopOpacity="0.6" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="160" fill="url(#heroRingWash1)" />
            <path
              d="M 200, 35
                 A 165,165 0 0,1 365,200
                 A 165,168 0 0,1 198,368
                 A 168,165 0 0,1 32,200
                 A 165,165 0 0,1 200,35 Z"
              stroke="#8c5324"
              strokeWidth="5"
              strokeLinecap="round"
              strokeOpacity="0.45"
            />
            <path
              d="M 202, 38
                 A 162,162 0 0,1 362,198
                 A 162,164 0 0,1 200,364
                 A 164,162 0 0,1 36,202
                 A 162,162 0 0,1 202,38 Z"
              stroke="#583115"
              strokeWidth="2.5"
              strokeDasharray="95 12 180 8 120 18"
              strokeOpacity="0.75"
            />
            <circle cx="200" cy="200" r="166" stroke="#c69749" strokeWidth="1.2" strokeOpacity="0.4" />
            <circle cx="375" cy="180" r="4.5" fill="#8c5324" fillOpacity="0.5" />
            <circle cx="384" cy="192" r="2" fill="#8c5324" fillOpacity="0.4" />
          </svg>
        </motion.div>

        {/* Medium Coffee Ring 2 - Lower Left */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [0, -10, 0],
                  scale: [1, 0.97, 1],
                  x: [0, -12, 0],
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[4%] -left-[10%] sm:left-[2%] lg:left-[5%] w-[320px] sm:w-[420px] lg:w-[480px] opacity-15"
        >
          <svg viewBox="0 0 360 360" className="w-full h-full text-amber-800" fill="none">
            <defs>
              <radialGradient id="heroRingWash2" cx="45%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#2c180b" stopOpacity="0" />
                <stop offset="65%" stopColor="#432818" stopOpacity="0.06" />
                <stop offset="88%" stopColor="#6f3e1b" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#b07d3b" stopOpacity="0.55" />
              </radialGradient>
            </defs>
            <circle cx="180" cy="180" r="140" fill="url(#heroRingWash2)" />
            <path
              d="M 180, 42
                 C 260, 40 318, 98 318, 180
                 C 318, 262 258, 320 180, 318
                 C 100, 316 42, 258 42, 180
                 C 42, 98 102, 44 180, 42 Z"
              stroke="#6f3e1b"
              strokeWidth="4"
              strokeOpacity="0.5"
            />
            <path
              d="M 179, 44
                 A 136,136 0 1,1 178, 316
                 A 136,136 0 1,1 179, 44 Z"
              stroke="#b07d3b"
              strokeWidth="1.8"
              strokeDasharray="60 15 140 20 80 10"
              strokeOpacity="0.6"
            />
          </svg>
        </motion.div>
      </div>

      {/* ============================================================== */}
      {/* LAYER 4: STEAM / ATMOSPHERE (RISING BLURRED WISPS)             */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Steam Wisp 1 - Center-left */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [90, -140],
                  x: [0, 20, -10, 0],
                  scale: [0.85, 1.15, 1.45],
                  opacity: [0, 0.26, 0.18, 0],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5,
          }}
          className="absolute bottom-12 left-[28%] w-48 h-96 rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 70%, rgba(245, 234, 221, 0.16) 0%, rgba(198, 151, 73, 0.08) 45%, transparent 70%)',
            filter: 'blur(36px)',
          }}
        />

        {/* Steam Wisp 2 - Behind coffee cup */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [110, -150],
                  x: [0, -20, 15, 0],
                  scale: [0.9, 1.25, 1.5],
                  opacity: [0, 0.30, 0.20, 0],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 3.5,
          }}
          className="absolute bottom-10 right-[25%] lg:right-[20%] w-56 h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 70%, rgba(245, 234, 221, 0.15) 0%, rgba(198, 151, 73, 0.06) 45%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* LAYER 5: SUBTLE FILM GRAIN TEXTURE                             */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none -z-5 opacity-[0.035] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ============================================================== */}
      {/* LAYER 6: HERO CONTENT & PRIMARY COFFEE SPLASH COMPOSITION      */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* LEFT COLUMN: HERO TEXT & ACTIONS (7 COLS ON DESKTOP) */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400" />
              <span className="text-xs uppercase tracking-[0.22em] font-mono font-semibold text-amber-300">
                Artisanal Micro-Roastery
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-amber-5 leading-[1.08] tracking-tight drop-shadow-2xl"
            >
              <span>Cinematic</span>
              <br />
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Coffee Experience
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 text-lg sm:text-xl text-amber-200/90 max-w-xl font-normal leading-relaxed drop-shadow"
            >
              Taste the perfection in every cup, crafted with premium international beans.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <motion.a
                href="#menu"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 30px -6px rgba(245, 158, 11, 0.45)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-brown-950 font-bold text-base rounded-full shadow-lg shadow-amber-950/40 hover:from-amber-400 hover:to-amber-300 transition-all text-center"
              >
                Explore Menu
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  borderColor: 'rgba(245, 158, 11, 0.55)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="w-full sm:w-auto px-9 py-4 border border-amber-500/30 text-amber-200 font-semibold text-base rounded-full hover:text-amber-100 transition-all backdrop-blur-sm text-center"
              >
                Our Story
              </motion.a>
            </motion.div>

            {/* Feature Highlights Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="mt-10 pt-6 border-t border-amber-500/15 flex flex-wrap gap-5 text-xs text-amber-300/80 font-mono"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400">✦</span> 100% Arabica
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400">✦</span> Micro-Lot Roasting
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400">✦</span> Direct Origin Trade
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: PRIMARY FLYING COFFEE SPLASH VISUAL (5 COLS ON DESKTOP) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pointer-events-none select-none">
            {/* Ambient Caramel Backlight Glow directly behind cup */}
            <div
              className="absolute w-[360px] sm:w-[460px] lg:w-[520px] h-[360px] sm:h-[460px] lg:h-[520px] rounded-full pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(circle, rgba(214, 153, 58, 0.40) 0%, rgba(138, 80, 28, 0.18) 45%, transparent 70%)',
                filter: 'blur(55px)',
              }}
            />

            {/* Subtle Coffee Ring Accent framing the splash */}
            <div className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] pointer-events-none -z-10 opacity-30">
              <svg viewBox="0 0 400 400" className="w-full h-full text-amber-600/40" fill="none">
                <circle cx="200" cy="200" r="175" stroke="#b07d3b" strokeWidth="2" strokeDasharray="30 15 120 20" strokeOpacity="0.5" />
                <circle cx="200" cy="200" r="182" stroke="#8c5324" strokeWidth="1" strokeOpacity="0.3" />
              </svg>
            </div>

            {/* Animated Floating Coffee Cup Visual */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -14, 0],
                      rotate: [0, 1.2, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[540px] xl:max-w-[600px] aspect-square flex items-center justify-center"
            >
              {/* Primary Local Coffee Splash Asset */}
              <img
                src="/images/hero-coffee-splash.png"
                alt="Cinematic Flying Coffee Cup with Dynamic Splash and Floating Beans"
                className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] brightness-[1.03] contrast-[1.04]"
                loading="eager"
              />

              {/* Seamless Bottom Vignette Fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(12, 6, 3, 0.85) 0%, transparent 100%)',
                }}
              />
            </motion.div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 sm:mt-10 flex justify-center"
        >
          <a
            href="#about"
            aria-label="Scroll to explore our story"
            className="inline-flex flex-col items-center gap-2 text-amber-300/70 hover:text-amber-300 transition-colors cursor-pointer group"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.25em]">
              Scroll to explore
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-amber-400/40 group-hover:border-amber-400 transition-colors flex justify-center p-1">
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 12, 0],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
