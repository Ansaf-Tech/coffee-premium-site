'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'motion/react';

interface ProcessStage {
  step: string;
  title: string;
  description: string;
  icon: string;
}

const processStages: ProcessStage[] = [
  { step: '01', title: 'Bean Selection', description: 'Meticulously sourced global Arabica.', icon: '☕' },
  { step: '02', title: 'Roasting', description: 'Crafted to enhance unique flavour layers.', icon: '🔥' },
  { step: '03', title: 'Grinding', description: 'Perfect texture, ensuring full extraction.', icon: '⚙️' },
  { step: '04', title: 'Extraction', description: 'Precision-timed, pure cinematic brew.', icon: '💧' },
  { step: '05', title: 'Final Cup', description: 'Experience pure coffee perfection.', icon: '✨' },
];

interface DesktopCardProps {
  stage: ProcessStage;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const DesktopProcessCard = ({ stage, index, scrollYProgress }: DesktopCardProps) => {
  // Staggered reveal timing: 5 stages progressively shown within 0.0 - 0.70 scroll range
  const totalStages = 5;
  const stagger = 0.18; // Each phase starts 14% scroll progress apart
  const duration = 0.16; // Each phase takes 16% progress to appear

  const start = index * stagger; 
  const end = start + duration; 

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [40, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

  // Dynamic Border Color
  const borderColor = useTransform(
    scrollYProgress,
    [start, end],
    [
      'rgba(245, 158, 11, 0.05)',
      'rgba(245, 158, 11, 0.35)'
    ]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        borderColor,
      }}
      whileHover={{
        y: -8,
        scale: 1.025,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 xl:p-6 bg-brown-950/90 backdrop-blur-lg border shadow-2xl shadow-black/60 hover:border-amber-400/70 hover:shadow-[0_15px_45px_-5px_rgba(217,119,6,0.45)] transition-colors duration-300 cursor-pointer min-h-[270px]"
    >
      {/* Golden Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 via-amber-400/5 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />

      {/* Top Details */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold tracking-widest text-amber-300 bg-amber-600/10 border border-amber-600/30 px-3 py-1.5 rounded-full uppercase transition-colors group-hover:bg-amber-600/20">
          Stage {stage.step}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors shadow-sm shadow-amber-400/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 my-4 text-left">
        <div className="text-5xl mb-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-block select-none">
          {stage.icon}
        </div>
        <h3 className="text-xl xl:text-2xl font-extrabold text-amber-50 group-hover:text-amber-400 transition-colors">
          {stage.title}
        </h3>
        <p className="mt-2.5 text-xs xl:text-sm tracking-wide text-amber-200/90 leading-relaxed group-hover:text-amber-100 transition-colors">
          {stage.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div className="relative z-10 pt-2 border-t border-amber-600/15 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-widest text-amber-400/70 font-bold group-hover:text-amber-400 transition-colors">
          Progress {stage.step}/05
        </span>
        <span className="text-amber-400 group-hover:translate-x-1 transition-transform text-sm">
          →
        </span>
      </div>
    </motion.div>
  );
};

const CoffeeProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Header animation: fully reveal by 10% scroll progress
  const headerOpacity = useTransform(scrollYProgress, [0, 0.10], [0.4, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.10], [20, 0]);

  // Timeline progress: fills staggered based on card reveals up to 70% scroll progress
  const timelineWidth = useTransform(scrollYProgress, [0, 0.88], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative lg:h-[200vh] bg-[#070301]"
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none -z-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #1e1008 0%, #0d0603 55%, #050201 100%)',
        }}
      />

      {/* Warm Beam Accent */}
      <div
        className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none -z-20 opacity-30"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(217, 119, 6, 0.15) 0%, rgba(38, 20, 8, 0.05) 60%, transparent 100%)',
        }}
      />

      {/* Pinned Section */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full flex-col justify-center items-center overflow-hidden px-6 xl:px-8">
        <div className="w-full max-w-7xl mx-auto text-center">
          
          {/* Header */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="mb-10 xl:mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 bg-amber-600/15 border border-amber-600/30 px-4 py-1.5 rounded-full">
              Cinematic Journey
            </span>
            <h2 className="text-5xl xl:text-6xl font-extrabold text-amber-50 tracking-tighter mt-4 drop-shadow-lg">
              Crafting Perfection
            </h2>
            <p className="mt-4 text-base xl:text-lg text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
              Experience our relentless pursuit of coffee excellence, millimeter by precision millimeter.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative w-full max-w-5xl mx-auto mb-10 xl:mb-12 px-5">
            <div className="h-1 w-full bg-amber-900/40 rounded-full overflow-hidden">
              <motion.div
                style={{ width: timelineWidth }}
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-100 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              />
            </div>
            <div className="flex justify-between items-center -mt-[6px] px-1.5">
              {processStages.map((stg) => (
                <div key={stg.step} className="w-4 h-4 rounded-full bg-brown-950 border-2 border-amber-500/50 flex items-center justify-center shadow-inner shadow-black">
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Staggered Cards */}
          <div className="grid grid-cols-5 gap-4 xl:gap-5 w-full">
            {processStages.map((stage, index) => (
              <DesktopProcessCard
                key={stage.title}
                stage={stage}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Mobile/Fallback View */}
      <div className="block lg:hidden w-full max-w-4xl mx-auto pt-24 pb-20 px-6">
        {/* Simplified mobile layout */}
        <div className="text-center mb-12">
           <h2 className="text-4xl font-extrabold text-amber-50 tracking-tighter">Crafting Perfection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {processStages.map((stage) => (
             <div key={stage.step} className="p-6 rounded-3xl bg-brown-950 border border-amber-600/20">
               <h3 className="text-xl font-bold text-amber-100">{stage.title}</h3>
               <p className="mt-2 text-sm text-amber-200/80">{stage.description}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeProcess;
