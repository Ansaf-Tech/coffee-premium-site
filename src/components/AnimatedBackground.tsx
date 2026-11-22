'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0c0603] pointer-events-none" aria-hidden="true">
      {/* Primary Deep Espresso Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.40, 0.25],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-[120px]"
        style={{
          background: 'radial-gradient(circle at 50% 40%, #361d0d 0%, #170d06 55%, #0c0603 90%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Secondary Warm Amber Ambient Flare */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, -30, 0],
                y: [0, -25, 25, 0],
                opacity: [0.10, 0.20, 0.10],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(198, 151, 73, 0.18) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.025]" />

      {/* Global Vignette for Cinematic Edge Depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(5, 2, 1, 0.7) 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
