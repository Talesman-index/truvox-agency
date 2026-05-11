'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import Image from "next/image";
import { Check, X as Close, Zap } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  const keywords = [
    "Trust-Based Design", "Optimized Conversion", "Modern UI/UX", "Next.js Performance", "Digital Strategy", "Premium Support", "Visual Fidelity"
  ];

  return (
    <main className="flex-grow">
      {/* HERO SECTION - Refined Editorial Structure */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden bg-dark">
        {/* Animated Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-main/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-main/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-20 text-center pb-24 md:pb-32">
          {/* Top Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/20 text-white/50 text-[9px] font-black uppercase tracking-[0.4em] mb-10">
              <Zap size={12} className="text-brand-main" /> OPTIMIZED FOR CONVERSION
            </div>
          </Reveal>

          {/* Centered Typography */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black leading-[0.98] tracking-tighter text-white">
              Landing pages <br />
              that turn <br />
              visitors into <span className="text-brand-main">customers.</span>
            </h1>
            
            <Reveal delay={0.4}>
              <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed font-medium">
                Every page is designed with a strategic and aesthetic approach: custom design, clear structure, and a powerful message to maximize your conversions.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="pt-8">
                <Button variant="primary" size="lg" className="px-10 py-5 rounded-2xl shadow-brand text-sm font-black uppercase tracking-widest">
                  Boost my conversions
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Floating Corner Assets - Cinematic Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Bottom Left Asset */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-[380px] h-[380px] opacity-[0.12] blur-[5px] hidden xl:block"
          >
            <Image 
              src="/assets/icons3d/3dicons-rocket-dynamic-color.png" 
              alt="Asset" 
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Top Right Asset */}
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 w-[350px] h-[350px] opacity-[0.08] blur-[6px] hidden xl:block"
          >
            <Image 
              src="/assets/icons3d/3dicons-cube-dynamic-color.png" 
              alt="Asset" 
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

      </section>



      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 px-6 max-w-[1440px] mx-auto bg-white">
        <Reveal>
          <div className="text-center mb-16 md:mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              What we <span className="gradient-text">create</span>
            </h2>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              A look at clean and strategic website concepts designed for small businesses.
            </p>
          </div>
        </Reveal>
        
        <Reveal stagger delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { id: '01', title: 'Website Creation', desc: 'Clean and professional websites tailored to your business', icon: '3dicons-cube-dynamic-color.png' },
              { id: '02', title: 'UI/UX Design', desc: 'Simple, intuitive, and user-friendly interfaces', icon: '3dicons-chat-bubble-dynamic-color.png' },
              { id: '03', title: 'Website Redesign', desc: 'Transform outdated websites into modern experiences', icon: '3dicons-megaphone-dynamic-color.png' },
              { id: '04', title: 'Strategy', desc: 'Structure, messaging, and user flow designed for conversion', icon: '3dicons-pin-dynamic-color.png' },
            ].map((service, index) => (
              <RevealItem key={service.id}>
                <motion.div 
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group cursor-pointer bg-white h-full p-8 md:p-10 rounded-[32px] border border-light hover:shadow-elevation3 hover:border-brand-main transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mb-8 md:mb-10 transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={`/assets/icons3d/${service.icon}`} 
                      alt={service.title}
                      fill
                      className="object-contain filter drop-shadow(0 12px 24px rgba(201,75,45,0.25))"
                    />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-primary">{service.title}</h3>
                  <p className="text-body text-sm leading-relaxed font-medium">{service.desc}</p>
                  <div className="mt-auto text-brand-main font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn more <span>→</span>
                  </div>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROBLEM -> VALUE SECTION - Editorial Redesign */}
      <section className="py-32 md:py-48 px-6 bg-sectionAlt relative overflow-hidden">
        {/* Subtle Decorative Background Text */}
        <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[20vw] font-black tracking-tighter">VALUE</span>
        </div>

        <div className="max-w-[1440px] mx-auto">
          {/* Typography Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-24 md:mb-32">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="text-6xl md:text-8xl lg:text-[120px] font-black text-primary leading-[0.95] tracking-tighter">
                  Your website <br />
                  should <span className="gradient-text">work</span> <br />
                  for you.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4 pb-4">
              <Reveal delay={0.2}>
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl text-body leading-relaxed font-medium">
                    Most small business websites are just digital brochures. We build strategic tools designed to build trust and drive growth.
                  </p>
                  <Button variant="secondary" size="lg" className="rounded-2xl border-2">
                    Our Philosophy
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal delay={0.4}>
              <div className="bg-white/50 backdrop-blur-sm p-10 md:p-14 rounded-[40px] border border-light/50 space-y-12">
                <div className="space-y-2">
                  <div className="text-muted font-black uppercase tracking-[0.3em] text-[10px]">The Problem</div>
                  <h3 className="text-3xl font-black text-primary/40 tracking-tighter">COMMON APPROACH</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    'Generic templates that look dated',
                    'No clear strategy or user flow',
                    'Complex and hidden pricing',
                    'Slow and unreliable delivery'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-primary/40 font-bold group">
                      <div className="mt-1 w-5 h-5 rounded-full border-2 border-primary/10 flex items-center justify-center shrink-0">
                        <Close size={12} strokeWidth={4} />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="bg-white p-10 md:p-14 rounded-[40px] border-2 border-brand-main shadow-elevation5 space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-main/5 blur-3xl rounded-full"></div>
                <div className="space-y-2 relative z-10">
                  <div className="text-brand-main font-black uppercase tracking-[0.3em] text-[10px]">The Solution</div>
                  <h3 className="text-3xl font-black text-primary tracking-tighter">THE TRUVOX WAY</h3>
                </div>
                <ul className="space-y-6 relative z-10">
                  {[
                    'Tailored identity & visual authority',
                    'Strategy-first conversion logic',
                    'Transparent and upfront pricing',
                    'Efficient, high-performance launch'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-4 text-primary font-bold">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-main text-white flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <ProcessSection />
      <PricingSection />

      <StatsBar />

      {/* FINAL CTA SECTION */}
      <section className="py-20 md:py-32 px-6">
        <Reveal>
          <div className="max-w-6xl mx-auto bg-dark rounded-[40px] md:rounded-[80px] p-12 md:p-32 text-center space-y-12 relative overflow-hidden shadow-elevation5">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
               <div className="absolute top-0 left-0 w-64 h-64 bg-brand-main/20 blur-[100px]"></div>
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-light/20 blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                Ready to build a website that <span className="gradient-text">works</span>?
              </h2>
              <p className="text-brand-light text-xl md:text-2xl max-w-2xl mx-auto font-medium">
                Let&apos;s create a clean, professional, and effective online presence for your business.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
              <Button variant="primary" size="lg" className="min-w-[240px]">Book a Free Consultation</Button>
              <Button variant="ghost" size="lg" className="min-w-[240px]">Contact Us Directly</Button>
            </div>

            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-5%] top-[10%] hidden xl:block opacity-60 pointer-events-none"
            >
              <Image 
                src="/assets/icons3d/3dicons-call-only-dynamic-color.png" 
                alt="Decoration" 
                width={250} 
                height={250}
                className="filter blur-[1px]"
              />
            </motion.div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
