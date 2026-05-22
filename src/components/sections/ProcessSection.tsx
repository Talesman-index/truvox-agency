'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, Globe, Layers, Palette, BarChart } from 'lucide-react';

const services = [
  { 
    name: 'Website Creation', 
    description: 'We design and build professional websites from scratch, structured to present your services clearly and guide visitors toward contacting you.',
    icon: <Globe size={24} /> 
  },
  { 
    name: 'Website Redesign', 
    description: 'If your current website looks outdated or isn\'t bringing in clients, we\'ll rebuild it into something that works.',
    icon: <Layers size={24} /> 
  },
  { 
    name: 'UI/UX Design', 
    description: 'Clean layouts, easy navigation, and a design that makes people trust your business from the first click.',
    icon: <Palette size={24} /> 
  },
  { 
    name: 'Strategy', 
    description: 'Not sure what your website needs? We\'ll help you figure that out first, aligning structure, messaging, and user flow, before building anything.',
    icon: <BarChart size={24} /> 
  },
];

export function ProcessSection() {
  return (
    <section id="services" className="py-24 md:py-40 px-6 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-6">
          <Badge variant="lime" rotation={-2}>What We Do</Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
            <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
              What We
            </span>
            <span className="font-display">
              Build & Design
            </span>
          </h2>
          <p className="text-text-muted text-[16px] md:text-[18px] leading-relaxed">
            Every business is different. We take the time to understand yours before writing a single line of code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card-standard group flex flex-col justify-between h-full min-h-[280px] cursor-pointer">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-brand-main text-[14px] font-bold tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <div className="text-white/40 group-hover:text-brand-main transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-[24px] font-bold text-white group-hover:text-brand-main transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-text-muted text-[15px] leading-relaxed max-w-none">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-brand-hover group-hover:text-brand-main transition-colors duration-300 text-[13px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                    Read More ↗
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-muted group-hover:border-brand-main group-hover:bg-brand-main group-hover:text-bg-primary transition-all duration-300">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-brand-main/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
