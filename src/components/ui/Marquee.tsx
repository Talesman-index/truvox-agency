'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Marquee = ({ 
  items, 
  direction = 'left', 
  speed = 40,
  className = "",
  variant = 'light'
}: MarqueeProps) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1035] : [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  const isDark = variant === 'dark';

  return (
    <div className={`overflow-hidden py-10 flex ${isDark ? 'bg-transparent border-y border-white/5' : 'bg-sectionAlt border-y border-light'} ${className}`}>
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className={`text-3xl md:text-5xl font-black uppercase tracking-tighter ${isDark ? 'text-white/10' : 'text-primary/20'}`}>
              {item}
            </span>
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-brand-main/40' : 'bg-brand-main/20'}`}></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
