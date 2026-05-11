'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { 
    id: '01', 
    title: 'Discovery', 
    desc: 'We take time to understand your business, your goals, and your audience.',
    icon: '3dicons-explorer-dynamic-color.png',
    color: 'bg-brand-main/5'
  },
  { 
    id: '02', 
    title: 'Strategy', 
    desc: 'We define a clear structure and message for your website.',
    icon: '3dicons-pin-dynamic-color.png',
    color: 'bg-brand-light/5'
  },
  { 
    id: '03', 
    title: 'Design', 
    desc: 'We create a clean, modern, and user-friendly interface.',
    icon: '3dicons-painting-kit-dynamic-color.png',
    color: 'bg-brand-secondary/5'
  },
  { 
    id: '04', 
    title: 'Development', 
    desc: 'We build a responsive and functional website.',
    icon: '3dicons-rocket-dynamic-color.png',
    color: 'bg-brand-main/5'
  },
  { 
    id: '05', 
    title: 'Launch', 
    desc: 'Your website goes live, ready to attract and convert clients.',
    icon: '3dicons-tick-dynamic-color.png',
    color: 'bg-brand-secondary/10'
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-main font-bold uppercase tracking-widest text-xs"
          >
            How we work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            A <span className="gradient-text">simple</span> and clear process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl max-w-2xl mx-auto"
          >
            We guide you at every step to make the process simple and efficient.
          </motion.p>
        </div>

        <div className="relative">
          {/* Background Path (Dashed Line) - Hidden on mobile */}
          <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-light -translate-y-1/2 z-0 hidden lg:block opacity-40"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const
                }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white p-10 rounded-[32px] border border-light shadow-elevation2 transition-all duration-500 hover:shadow-elevation4 hover:-translate-y-2 flex flex-col items-center text-center h-full hover:border-brand-main/30">
                  
                  {/* Number Badge */}
                  <div className={`mb-10 px-6 py-2 rounded-full ${step.color} border border-brand-main/10 text-brand-main font-black text-sm tracking-widest`}>
                    STEP {step.id}
                  </div>

                  {/* 3D Icon Container */}
                  <div className="relative w-32 h-32 mb-10 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <div className={`absolute inset-0 ${step.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <Image 
                      src={`/assets/icons3d/${step.icon}`} 
                      alt={step.title}
                      fill
                      className="object-contain relative z-10 filter drop-shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-brand-main transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow for tablet/desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 hidden lg:block">
                    <motion.div 
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-brand-main/20 text-3xl font-light"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

