'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'We map your business, your audience, and the gap between where you are and where you need to be online. No assumptions. Every decision that follows is grounded in this diagnostic phase.',
    icon3d: '/assets/icons3d/search.avif',
    deliverables: [
      "Business positioning and competitive gaps identified",
      "Target audience and intent mapped",
      "Technical and content audit completed"
    ]
  },
  {
    number: '02',
    title: 'Structure',
    description: 'We define your architecture before we design a single pixel. Sitemap, messaging hierarchy, and conversion logic are set here. Structure determines whether a website works — or just looks good.',
    icon3d: '/assets/icons3d/cdmRdvAtWOA2Auwbo7D1WXEj8b0.avif',
    deliverables: [
      "Sitemap and information architecture",
      "Messaging framework and content hierarchy",
      "Conversion flow and CTA strategy"
    ]
  },
  {
    number: '03',
    title: 'Craft',
    description: 'Design and development are a single continuous process at Truvox. We prototype, validate, and build in one tight loop — no hand-off friction, no lost intent. What you approve is what gets built.',
    icon3d: '/assets/icons3d/design.avif',
    deliverables: [
      "High-fidelity design with brand applied",
      "Responsive Next.js development",
      "Performance, SEO and accessibility built-in"
    ]
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We do not push live and disappear. Every launch includes a full cross-device review, domain and deployment setup, and a structured handover. You own what we build — completely.',
    icon3d: '/assets/icons3d/launch.avif',
    deliverables: [
      "Final QA across all devices and browsers",
      "Domain, hosting and analytics setup",
      "30-day post-launch support included"
    ]
  }
];

export function MethodologySection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodology" className="py-24 md:py-36 px-6 bg-black overflow-hidden border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#33FF0A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-20">
        
        {/* Header Block */}
        <div className="max-w-2xl flex flex-col items-start text-left space-y-4 mb-20">
          <span className="truvox-bracket">The Truvox Method</span>
          
          <h2 className="font-display text-white text-[40px] sm:text-[56px] md:text-[68px] lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] uppercase">
            A.S.C.L. <span className="text-[#33FF0A]">FRAMEWORK</span>
          </h2>
          
          <p className="font-body text-[#A4A4A4] text-[16px] sm:text-[18px] max-w-lg leading-[1.4] mt-4">
            Four phases. No shortcuts. Every project follows the same rigorous sequence — because structure is what separates a website that works from one that simply exists.
          </p>

          <div className="truvox-line w-full mt-6">A.S.C.L.</div>
        </div>

        {/* Layout for Desktop: Split columns */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive tabs list */}
          <div className="col-span-5 flex flex-col justify-between space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`text-left p-6 border transition-all duration-300 cursor-pointer flex items-center justify-between group rounded-none select-none ${
                    isActive 
                      ? 'bg-[#0D0D0D] border-[#33FF0A] shadow-[0_0_20px_rgba(51,255,10,0.05)]' 
                      : 'bg-transparent border-[#575757]/15 hover:border-[#575757]/45'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-[13px] ${isActive ? 'text-[#33FF0A]' : 'text-[#505250] group-hover:text-white/45'} transition-colors`}>
                      [ {step.number} ]
                    </span>
                    <span className={`font-display text-[22px] uppercase ${isActive ? 'text-white' : 'text-[#A4A4A4] group-hover:text-white'} transition-colors`}>
                      {step.title}
                    </span>
                  </div>
                  <span className={`text-[16px] transition-transform duration-300 ${isActive ? 'text-[#33FF0A] translate-x-1' : 'text-[#505250] group-hover:text-white/45'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Showcase Card */}
          <div className="col-span-7">
            <div className="border border-[#575757]/30 bg-[#0D0D0D] p-10 flex flex-col justify-between h-full relative overflow-hidden min-h-[480px] rounded-none group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#33FF0A]/5 blur-[80px] rounded-full pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-8 items-center h-full"
                >
                  {/* Icon side */}
                  <div className="md:w-2/5 shrink-0 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="relative w-36 h-36 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                    >
                      <Image 
                        src={steps[activeStep].icon3d} 
                        alt={steps[activeStep].title} 
                        fill 
                        className="object-contain" 
                        unoptimized
                      />
                    </motion.div>
                  </div>

                  {/* Info side */}
                  <div className="md:w-3/5 space-y-6">
                    <div>
                      <span className="font-mono text-[11px] text-[#33FF0A] bg-[#33FF0A]/5 border border-[#33FF0A]/10 px-2.5 py-0.5 select-none">
                        PHASE {steps[activeStep].number}
                      </span>
                      <h3 className="font-display text-[32px] text-white tracking-normal uppercase mt-3 mb-2">
                        {steps[activeStep].title}
                      </h3>
                      <p className="font-body text-[14px] text-[#A4A4A4] leading-relaxed">
                        {steps[activeStep].description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#575757]/20 space-y-3">
                      <span className="font-body text-[10px] font-bold text-[#505250] uppercase tracking-[0.15em] block">
                        Deliverables & Activities
                      </span>
                      <ul className="space-y-2">
                        {steps[activeStep].deliverables.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={12} className="text-[#33FF0A] mr-2.5 mt-1 shrink-0" />
                            <span className="text-[13px] font-medium text-white/90 leading-tight">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Layout for Mobile/Tablet: Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx;
            return (
              <div 
                key={step.title}
                className={`border transition-all duration-300 bg-[#0D0D0D] rounded-none overflow-hidden ${
                  isOpen ? 'border-[#33FF0A]' : 'border-[#575757]/15'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setActiveStep(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 flex items-center justify-between bg-transparent border-none cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-[12px] ${isOpen ? 'text-[#33FF0A]' : 'text-[#505250]'}`}>
                      [ {step.number} ]
                    </span>
                    <span className="font-display text-[20px] uppercase text-white">
                      {step.title}
                    </span>
                  </div>
                  <span className={`text-[18px] text-[#33FF0A] transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                    →
                  </span>
                </button>

                {/* Content */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-[#575757]/10 space-y-6">
                    <div className="flex justify-center py-4">
                      <div className="relative w-24 h-24 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                        <Image 
                          src={step.icon3d} 
                          alt={step.title} 
                          fill 
                          className="object-contain" 
                          unoptimized
                        />
                      </div>
                    </div>
                    <p className="font-body text-[14px] text-[#A4A4A4] leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="pt-4 border-t border-[#575757]/20 space-y-3">
                      <span className="font-body text-[10px] font-bold text-[#505250] uppercase tracking-[0.15em] block">
                        Deliverables & Activities
                      </span>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={12} className="text-[#33FF0A] mr-2.5 mt-1 shrink-0" />
                            <span className="text-[13px] font-medium text-white/90 leading-tight">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Timeframe Tagline */}
        <div className="mt-20 border-t border-white/5 pt-12 select-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#A4A4A4] text-[16px] md:text-[18px]">
            Most projects go from <span className="text-white font-medium">audit to launch</span> in 2 to 4 weeks.
          </p>
          <span className="truvox-indicator">Available now</span>
        </div>

      </div>
    </section>
  );
}
