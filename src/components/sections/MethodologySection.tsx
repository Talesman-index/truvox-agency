'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus, Search, Compass, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a call to understand your business, your clients, and what you actually need from a website.',
    icon: <Search size={24} />
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We map out the structure and content before touching design. This is where we define what the site needs to say and to whom.',
    icon: <Compass size={24} />
  },
  {
    number: '03',
    title: 'Design',
    description: 'We build a clean, modern design tailored to your business without using generic templates.',
    icon: <Palette size={24} />
  },
  {
    number: '04',
    title: 'Development',
    description: 'We code and build the site, making sure it works fast and looks right on every device.',
    icon: <Code size={24} />
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We review everything together before going live. After launch, we\'re still available if anything comes up.',
    icon: <Rocket size={24} />
  }
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 md:py-40 px-6 bg-bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <Reveal>
              <div className="space-y-6">
                <Badge variant="lime" rotation={-2}>How It Works</Badge>
                <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
                  <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                    A Simple
                  </span>
                  <span className="font-display">
                    And Clear Process
                  </span>
                </h2>
                <p className="text-text-muted text-[16px] md:text-[18px] leading-relaxed max-w-md">
                  We know that working with a web designer can feel complicated. We&apos;ve made ours as clear as possible.
                </p>
              </div>
            </Reveal>

            {/* Graphic Icon */}
            <div className="hidden lg:flex w-12 h-12 rounded-full border border-brand-main/20 items-center justify-center text-brand-main shadow-[0_0_15px_rgba(206,254,85,0.05)]">
               <Plus size={20} className="animate-pulse" />
            </div>
          </div>

          {/* Right Column: Vertical Sequence of Cards */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="group relative p-8 bg-[#0D0D18] rounded-[12px] border border-[#1A1A1A] hover:border-brand-main hover:shadow-[0px_8px_32px_rgba(206,254,85,0.15)] transition-all duration-500 flex flex-col sm:flex-row items-start gap-6">
                  
                  {/* Left part: Icon and Mobile Number */}
                  <div className="flex items-center justify-between w-full sm:w-auto shrink-0 gap-4">
                    <div className="w-14 h-14 rounded-[12px] bg-brand-main/10 flex items-center justify-center text-brand-main shadow-sm group-hover:scale-110 transition-transform duration-500 border border-brand-main/20">
                      {step.icon}
                    </div>
                    {/* Number displayed on Mobile */}
                    <div className="sm:hidden text-[28px] font-display font-extrabold text-white/10 group-hover:text-brand-main/25 transition-colors">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Right part: Title, Description, and Details */}
                  <div className="flex-grow space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-[22px] font-bold text-white leading-tight transition-colors group-hover:text-brand-main">
                        {step.title}
                      </h3>
                      {/* Number displayed on Desktop */}
                      <span className="hidden sm:block text-[32px] font-display font-extrabold text-white/10 group-hover:text-brand-main/25 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <p className="text-[15px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="pt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[11px] font-mono font-bold text-brand-main uppercase tracking-widest">
                        Phase {step.number}
                      </span>
                    </div>
                  </div>

                </div>
              </RevealItem>
            ))}
          </div>

        </div>

        {/* Timeframe Tagline */}
        <Reveal delay={0.3}>
          <div className="mt-24 text-center border-t border-white/5 pt-12">
            <p className="text-text-heading text-[18px] md:text-[20px] font-medium">
              Most projects take <span className="gradient-text italic">2 to 4 weeks</span> from first call to launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
