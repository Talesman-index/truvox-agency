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
    <section id="methodology" className="py-24 md:py-32 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 lg:mb-32 gap-8">
            <div className="max-w-2xl">
              <Badge variant="lime" rotation={-2} className="mb-8">How It Works</Badge>
              <h2 className="text-[45px] md:text-[55px] font-medium text-text-heading leading-[1.1] tracking-tight">
                A simple process. <span className="inline-block gradient-text italic pr-[0.4em]">No surprises.</span>
              </h2>
              <p className="mt-6 text-text-muted text-[18px] leading-relaxed max-w-xl">
                We know that working with a web designer can feel complicated. We&apos;ve made ours as clear as possible.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border border-brand-main/20 flex items-center justify-center text-brand-main shrink-0 hidden lg:flex">
               <Plus size={20} />
            </div>
          </div>
        </Reveal>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className="group relative p-8 bg-bg-card rounded-[32px] h-full flex flex-col justify-between border border-border-subtle hover:border-brand-main hover:shadow-glow transition-all duration-500">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-brand-main/10 flex items-center justify-center text-brand-main shadow-sm group-hover:scale-110 transition-transform duration-500 border border-brand-main/20">
                      {step.icon}
                    </div>
                    {/* Floating Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-[12px] font-bold text-text-muted group-hover:text-brand-main group-hover:border-brand-main transition-colors">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-[20px] font-bold text-text-heading leading-tight transition-colors group-hover:text-brand-main">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-[11px] font-bold text-brand-main uppercase tracking-widest">Phase {step.number}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>

        {/* Timeframe Tagline */}
        <Reveal delay={0.3}>
          <div className="mt-20 text-center">
            <p className="text-text-heading text-[18px] md:text-[20px] font-medium">
              Most projects take <span className="gradient-text italic">2 to 4 weeks</span> from first call to launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
