'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';

const stats = [
  { value: '89', suffix: '', label: 'Total Finished Projects' },
  { value: '500', suffix: '+', label: 'Satisfied Client Across The Globe' },
  { value: '2000', suffix: '+', label: 'Hours Of Experts Working For You' },
  { value: '500', suffix: '', label: 'Trusted Partners By The World' },
];

export const StatsBar = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-sectionAlt relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Award Icon Column */}
        <div className="flex-shrink-0 relative w-48 h-48">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,255,133,0.15)]"
          >
            <Image 
              src="/assets/icons3d/3dicons-trophy-dynamic-color.png" 
              alt="Award" 
              fill 
              className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          {/* Sparkles */}
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-main/10 blur-xl rounded-full pointer-events-none"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-main/5 blur-xl rounded-full pointer-events-none"></div>
        </div>

        {/* Stats Grid */}
        <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-[60px] lg:text-[89px] font-semibold leading-[1.0] text-brand-main tracking-tighter">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-[32px] lg:text-[42px] font-bold text-brand-main">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <h4 className="text-[16px] lg:text-[18px] font-medium leading-[1.4] text-text-muted max-w-[140px]">
                  {stat.label}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Decorative Text background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none text-[200px] font-bold text-white whitespace-nowrap">
        TRUVOX AGENCY EXPERTISE
      </div>
    </section>
  );
};
