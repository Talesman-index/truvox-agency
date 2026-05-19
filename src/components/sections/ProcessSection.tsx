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
    <section id="services" className="py-24 md:py-32 px-6 bg-brand-purple relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 xl:gap-20">
        
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-12">
          <Reveal>
            <div className="space-y-6">
              <Badge variant="lime" rotation={-2}>What We Do</Badge>
              <h2 className="text-[45px] md:text-[55px] font-medium text-white leading-[1.1] tracking-tight">
                A website built for your business. <span className="text-accent-lime">Not a template.</span>
              </h2>
              <p className="text-white/80 text-[18px] leading-relaxed max-w-xl">
                Every business is different. We take the time to understand yours before writing a single line of code.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="/assets/bg/services-team.jpg" 
                alt="Truvox Services" 
                fill 
                className="object-cover"
              />
              <div className="absolute top-6 right-6">
                <Badge variant="pink" rotation={10} className="px-6 py-2">Creative Hub</Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
             <Link href="/contact">
               <Button className="bg-white text-brand-purple hover:bg-accent-lime px-10 h-[56px] rounded-full text-[16px] font-semibold transition-all">
                 Book a Free Call <ArrowRight className="ml-2" size={20} />
               </Button>
             </Link>
          </Reveal>
        </div>

        {/* Right Side - Services List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="group flex flex-col md:flex-row md:items-start justify-between p-8 bg-white/5 border border-white/10 rounded-[30px] hover:bg-white hover:text-brand-purple transition-all duration-300 cursor-pointer gap-6">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/5 text-white group-hover:text-brand-purple transition-colors shrink-0 mt-1">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="text-[20px] md:text-[24px] font-bold text-white group-hover:text-brand-purple block leading-tight">
                        {service.name}
                      </span>
                      <p className="text-[15px] text-white/70 group-hover:text-black/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all shrink-0 self-end md:self-center">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-accent-lime/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
