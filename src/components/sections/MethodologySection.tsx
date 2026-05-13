'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus, Search, PenTool, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, market position, and user needs to build a roadmap for success.',
    icon: <Search size={24} />
  },
  {
    number: '02',
    title: 'High-Fidelity Design',
    description: 'We craft premium interfaces that establish your digital authority and captivate users.',
    icon: <PenTool size={24} />
  },
  {
    number: '03',
    title: 'Technical Engineering',
    description: 'Our development team builds robust, high-performance solutions using cutting-edge technology.',
    icon: <Cpu size={24} />
  },
  {
    number: '04',
    title: 'Growth & Analysis',
    description: 'We analyze real-world data to continuously optimize performance and drive measurable ROI.',
    icon: <TrendingUp size={24} />
  }
];

export function MethodologySection() {
  return (
    <section id="methodology" className="py-24 md:py-32 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8">
            <div className="max-w-2xl">
              <Badge variant="lime" rotation={-2} className="mb-8">Methodology</Badge>
              <h2 className="text-[45px] md:text-[55px] font-medium text-text-heading leading-[1.1] tracking-tight">
                A Strategic Process Designed For <span className="inline-block gradient-text italic pr-[0.4em]">Measurable Results.</span>
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full border border-brand-main/20 flex items-center justify-center text-brand-main">
               <Plus size={20} />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className="group relative p-10 bg-bg-card rounded-[40px] h-full flex flex-col justify-between border border-border-subtle hover:border-brand-main hover:shadow-glow transition-all duration-500">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-brand-main/10 flex items-center justify-center text-brand-main shadow-sm group-hover:scale-110 transition-transform duration-500 border border-brand-main/20">
                      {step.icon}
                    </div>
                    {/* Floating Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-[12px] font-bold text-text-muted group-hover:text-brand-main group-hover:border-brand-main transition-colors">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-[24px] font-bold text-text-heading leading-tight transition-colors group-hover:text-brand-main">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-[12px] font-bold text-brand-main uppercase tracking-widest">Phase {step.number}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
