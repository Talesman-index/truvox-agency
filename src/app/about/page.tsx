'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus, Users, Target, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    title: 'Excellence by Design',
    description: 'We believe that high-fidelity design is the foundation of digital authority. We never settle for "good enough."',
    icon: <Target size={24} />
  },
  {
    title: 'Strategic Innovation',
    description: 'We blend creative vision with technical precision to build solutions that drive measurable business growth.',
    icon: <Zap size={24} />
  },
  {
    title: 'Global Perspective',
    description: 'Operating from Paris with a remote-first mindset, we bring international standards to every project.',
    icon: <Globe size={24} />
  },
  {
    title: 'Human-Centric Tech',
    description: 'Behind every line of code and pixel, we prioritize the human experience and user engagement.',
    icon: <Users size={24} />
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Badge variant="lime" rotation={-2} className="mb-8">About Truvox</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium text-text-heading leading-[1.0] tracking-tight mb-12">
              We Craft <span className="gradient-text italic text-nowrap">Digital Authority.</span>
            </h1>
          </Reveal>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
             <Reveal delay={0.2}>
               <p className="text-[20px] md:text-[24px] text-text-body leading-relaxed font-light">
                 Truvox is a high-fidelity digital agency specializing in premium design and strategic engineering. We help visionary brands establish a dominant digital presence through disruptive aesthetics and robust technology.
               </p>
             </Reveal>
             <Reveal delay={0.3}>
               <div className="space-y-8">
                  <p className="text-[18px] text-text-muted leading-relaxed">
                    Founded with a mission to bridge the gap between pure creativity and technical excellence, we operate at the intersection of design, engineering, and data. Our team is dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
                  </p>
                  <div className="flex items-center gap-4 text-brand-main">
                     <Plus size={20} />
                     <span className="text-[14px] font-bold uppercase tracking-widest">Paris Based • Remote First • World Class</span>
                  </div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-32 px-6 bg-bg-dark border-y border-white/5 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
             <h2 className="text-[35px] md:text-[45px] font-medium text-text-heading mb-20 tracking-tight">Our Core <span className="gradient-text italic">Principles.</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="p-10 bg-bg-card rounded-[40px] border border-border-subtle hover:border-brand-main transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-main/10 flex items-center justify-center text-brand-main mb-8 border border-brand-main/20 group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-[24px] font-bold text-text-heading mb-4 group-hover:text-brand-main transition-colors">{value.title}</h3>
                  <p className="text-[16px] text-text-muted leading-relaxed">{value.description}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <Reveal>
            <span className="text-brand-main font-bold uppercase tracking-[0.3em] text-[12px]">Our Mission</span>
            <h2 className="text-[40px] md:text-[60px] font-medium text-text-heading leading-[1.1] tracking-tight">
              To empower brands with <span className="gradient-text italic">unrivaled digital experiences</span> that captivate, convert, and command authority.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="w-24 h-[1px] bg-gradient-brand mx-auto"></div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
