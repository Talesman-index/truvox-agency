'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Side */}
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div className="space-y-8">
                <Badge variant="lime" rotation={-2}>About the Agency</Badge>
                <h2 className="text-[36px] sm:text-[45px] md:text-[65px] font-medium text-text-heading leading-[1.1] tracking-tight break-words">
                  We Build The <span className="gradient-text italic">Digital Foundations</span> Of Visionary Brands.
                </h2>
                <p className="text-[18px] md:text-[22px] text-text-body/80 leading-relaxed max-w-2xl">
                  Truvox is a high-fidelity digital studio specializing in premium design and strategic engineering. We translate complex visions into seamless, high-performance digital experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main">
                    <Plus size={18} />
                    <span className="text-[14px] font-bold uppercase tracking-widest">Excellence by Design</span>
                  </div>
                  <p className="text-text-muted text-[15px] leading-relaxed">
                    We never settle for "good enough." Every pixel and line of code is crafted with precision.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main">
                    <Plus size={18} />
                    <span className="text-[14px] font-bold uppercase tracking-widest">Strategic Growth</span>
                  </div>
                  <p className="text-text-muted text-[15px] leading-relaxed">
                    Innovation without strategy is just noise. We build solutions that drive measurable results.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-5">
            <Reveal delay={0.4}>
              <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/5 group">
                <Image 
                  src="/assets/bg/hero-team.jpg" 
                  alt="Truvox Studio" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent"></div>
                <div className="absolute top-8 right-8">
                  <Badge variant="pink" rotation={8} className="px-6 py-2 shadow-xl">Charlotte Based</Badge>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
