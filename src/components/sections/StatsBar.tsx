'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Design Specialists', value: '2' },
  { label: 'Service Packages', value: '3' },
];

export function StatsBar() {
  return (
    <section className="relative -mt-16 z-20 px-6">
      <div className="max-w-[1200px] mx-auto bg-darkAlt/95 backdrop-blur-xl py-12 px-10 rounded-[40px] shadow-elevation5 border border-white/10 overflow-hidden group">
        {/* Background light effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-main/20 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand-main/30 transition-colors duration-700"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-main font-poppins tracking-tight flex items-center justify-center">
                {stat.value}
              </div>
              <div className="text-white/55 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

