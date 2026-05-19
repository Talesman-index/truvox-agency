'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Plus, Compass, Code2 } from 'lucide-react';
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
              We&apos;re a small studio <br /><span className="gradient-text italic">with a simple goal.</span>
            </h1>
          </Reveal>
          
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start mt-20">
             <Reveal delay={0.2}>
               <p className="text-[20px] md:text-[24px] text-text-body leading-relaxed font-light">
                 Truvox was started in 2024 by Aïda and Shalom, two people frustrated by how hard it is for small businesses to get a good website at a fair price.
               </p>
             </Reveal>
             <Reveal delay={0.3}>
               <p className="text-[16px] md:text-[18px] text-text-muted leading-relaxed">
                 Most web agencies are either too expensive, too slow, or too focused on big clients to really care about a local restaurant or a solo consultant.
               </p>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="space-y-8">
                 <p className="text-[16px] md:text-[18px] text-text-muted leading-relaxed">
                   We built Truvox to be different. We&apos;re small by choice, because small means we actually pay attention to your project.
                 </p>
                 <div className="flex items-center gap-4 text-brand-main">
                    <Plus size={20} />
                    <span className="text-[14px] font-bold uppercase tracking-widest">Charlotte, NC</span>
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
              <div className="p-10 bg-bg-card rounded-[40px] border border-border-subtle hover:border-brand-main transition-all duration-500 group h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-main/10 flex items-center justify-center text-brand-main border border-brand-main/20 group-hover:scale-110 transition-transform duration-500">
                    <Compass size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[28px] font-bold text-text-heading group-hover:text-brand-main transition-colors">Aïda</h3>
                    <div className="text-[14px] text-text-muted uppercase tracking-[0.2em] font-medium">Strategy & Client Experience</div>
                  </div>
                  <p className="text-[16px] text-text-muted leading-relaxed">
                    Aïda handles the strategy side: understanding your business, structuring your content, and making sure every page has a clear purpose. She&apos;s the one who makes sure the website says the right things to the right people.
                  </p>
                </div>
              </div>
            </RevealItem>

            {/* Shalom Bio */}
            <RevealItem delay={0.2}>
              <div className="p-10 bg-bg-card rounded-[40px] border border-border-subtle hover:border-brand-main transition-all duration-500 group h-full flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-main/10 flex items-center justify-center text-brand-main border border-brand-main/20 group-hover:scale-110 transition-transform duration-500">
                    <Code2 size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[28px] font-bold text-text-heading group-hover:text-brand-main transition-colors">Shalom</h3>
                    <div className="text-[14px] text-text-muted uppercase tracking-[0.2em] font-medium">Design & Development</div>
                  </div>
                  <p className="text-[16px] text-text-muted leading-relaxed">
                    Shalom builds the website. He handles design, code, and everything technical, making sure the final product is fast, clean, and works on every device.
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
            <span className="text-brand-main font-bold uppercase tracking-[0.3em] text-[12px]">Our Studio</span>
            <h2 className="text-[40px] md:text-[60px] font-medium text-text-heading leading-[1.1] tracking-tight mt-6">
              We&apos;re based in Charlotte, NC, <br /><span className="gradient-text italic">but we work with businesses everywhere.</span>
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
