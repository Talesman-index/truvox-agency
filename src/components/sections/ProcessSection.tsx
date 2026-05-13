'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Globe, Layers, Palette, PenTool, BarChart, Monitor, Smartphone, Database } from 'lucide-react';

const services = [
  { name: 'Product Design & UI/UX', icon: <Layers size={24} /> },
  { name: 'Web & Mobile Development', icon: <Smartphone size={24} /> },
  { name: 'Marketing & Data Strategy', icon: <Database size={24} /> },
  { name: 'Brand Identity Systems', icon: <Palette size={24} /> },
];

export function ProcessSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-brand-purple relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 xl:gap-20">
        
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-12">
          <Reveal>
            <div className="space-y-6">
              <Badge variant="lime" rotation={-2}>Our Services</Badge>
              <h2 className="text-[45px] md:text-[55px] font-medium text-white leading-[1.1] tracking-tight">
                Strategic Digital Solutions Built To Help <span className="text-accent-lime">Scale Your Authority.</span>
              </h2>
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
             <Button className="bg-white text-brand-purple hover:bg-accent-lime px-10 h-[56px] rounded-full text-[16px] font-semibold transition-all">
               Talk to an expert <ArrowRight className="ml-2" size={20} />
             </Button>
          </Reveal>
        </div>

        {/* Right Side - Services List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[30px] hover:bg-white hover:text-brand-purple transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-purple/10 text-white group-hover:text-brand-purple transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[20px] md:text-[24px] font-medium text-white group-hover:text-brand-purple">
                      {service.name}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
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
