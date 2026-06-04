'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Badge variant="lime" rotation={-2} className="mb-8">About Truvox</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium text-text-heading leading-[1.0] tracking-tight mb-12">
              Strategic websites.<br /><span className="gradient-text italic">Built for clarity.</span>
            </h1>
          </Reveal>
          
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start mt-20">
             <Reveal delay={0.2}>
               <p className="text-[20px] md:text-[24px] text-text-body leading-relaxed font-light">
                 Truvox was founded in 2025 by Aïda and Shalom with one belief: most businesses struggle online not because they lack a website, but because their website doesn't communicate clearly enough.
               </p>
             </Reveal>
             <Reveal delay={0.3}>
               <p className="text-[16px] md:text-[18px] text-text-muted leading-relaxed">
                 Most web agencies focus on how a website looks. We focus on what it needs to say, who it needs to say it to, and whether every design decision supports that goal.
               </p>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="space-y-8">
                 <p className="text-[16px] md:text-[18px] text-text-muted leading-relaxed">
                   We stay intentionally small. Small means we give every project the attention it deserves. Every client works with us directly, from the first call to the final launch.
                 </p>
                 <div className="flex items-center gap-4 text-brand-main">
                    <Plus size={20} />
                    <span className="text-[14px] font-bold uppercase tracking-widest">Remote Studio</span>
                 </div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 px-6 bg-bg-dark border-y border-white/5 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
             <h2 className="text-[35px] md:text-[45px] font-medium text-text-heading mb-20 tracking-tight">Meet <span className="gradient-text italic">the Duo.</span></h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Aïda Bio */}
            <RevealItem delay={0.1}>
              <div className="bg-bg-card rounded-[12px] border border-border-subtle hover:border-brand-main transition-all duration-500 group h-full flex flex-col overflow-hidden">
                {/* Portrait */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                  <Image
                    src="/Aïda.svg"
                    alt="Aïda – Strategy & Client Experience"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-card to-transparent" />
                  {/* Role badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#33FF0A] bg-black/70 backdrop-blur-sm border border-[#33FF0A]/20 px-3 py-1.5">
                      Strategy &amp; Client Experience
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-8 space-y-4 flex flex-col flex-1">
                  <h3 className="text-[26px] font-bold text-text-heading group-hover:text-brand-main transition-colors">
                    Aïda
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    Aïda defines the strategy behind every project. She listens to your business goals, structures your content, and ensures every page communicates clearly to the right audience. She’s the reason your website says what it needs to say.
                  </p>
                </div>
              </div>
            </RevealItem>

            {/* Shalom Bio */}
            <RevealItem delay={0.2}>
              <div className="bg-bg-card rounded-[12px] border border-border-subtle hover:border-brand-main transition-all duration-500 group h-full flex flex-col overflow-hidden">
                {/* Portrait */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                  <Image
                    src="/Shalom.svg"
                    alt="Shalom – Design & Development"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-card to-transparent" />
                  {/* Role badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#33FF0A] bg-black/70 backdrop-blur-sm border border-[#33FF0A]/20 px-3 py-1.5">
                      Design &amp; Development
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-8 space-y-4 flex flex-col flex-1">
                  <h3 className="text-[26px] font-bold text-text-heading group-hover:text-brand-main transition-colors">
                    Shalom
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    Shalom designs and builds the website. He handles UX, UI, and development, making sure the final product is fast, responsive, and built to communicate clearly on every device.
                  </p>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      {/* Closing Banner */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <Reveal>
            <span className="text-brand-main font-bold uppercase tracking-[0.3em] text-[12px]">Our Philosophy</span>
            <h2 className="text-[40px] md:text-[60px] font-medium text-text-heading leading-[1.1] tracking-tight mt-6">
              A website should be clear, <br /><span className="gradient-text italic">useful, and purposeful.</span>
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
