'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import Image from "next/image";
import { Check, X as Close, ArrowRight, Plus } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="flex-grow bg-bg-primary">
      {/* HERO SECTION - DARK & NEON GREEN STYLE */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 md:pt-48 pb-20 px-4 md:px-6 overflow-hidden bg-bg-dark">
        <div className="max-w-[1200px] mx-auto w-full relative z-20 flex flex-col items-center text-center">
          
          <div className="relative mb-16">
            <h1 className="w-full text-balance tracking-tight mb-4 break-words px-4">
              Elevating Digital Authority Through <span className="gradient-text italic pr-[0.1em]">Strategic Design.</span>
            </h1>
            
            {/* Floating Badges */}
            <div className="absolute -top-24 left-4 sm:-top-12 sm:-left-24 hidden lg:block">
              <Badge variant="lime" rotation={-12} className="text-[10px] sm:text-[14px] px-3 sm:px-6 py-1 sm:py-2">Product Strategy</Badge>
            </div>
            <div className="absolute -top-12 right-4 sm:top-2 sm:-right-24 hidden lg:block">
              <Badge variant="pink" rotation={8} className="text-[10px] sm:text-[14px] px-3 sm:px-6 py-1 sm:py-2">High-Fidelity</Badge>
            </div>
            <div className="absolute -bottom-16 right-4 sm:-bottom-10 sm:right-1/4 hidden lg:block">
              <Badge variant="sage" rotation={-5} className="text-[10px] sm:text-[14px] px-3 sm:px-6 py-1 sm:py-2">Data-Driven</Badge>
            </div>
          </div>
          
          <Reveal delay={0.4}>
             <p className="text-[18px] md:text-[22px] text-text-body/75 max-w-2xl mb-12 leading-relaxed">
               We craft premium digital experiences that translate your vision into trust, and trust into measurable growth.
             </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="relative w-full max-w-[1100px] aspect-[16/8] rounded-[40px] overflow-hidden mt-0 mb-20 shadow-2xl border border-border-subtle">
               <Image 
                 src="/assets/bg/hero-team.jpg" 
                 alt="Truvox Team" 
                 fill 
                 className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"></div>
      </section>


      {/* METHODOLOGY SECTION */}
      <MethodologySection />

      {/* PORTFOLIO SECTION */}
      <PortfolioSection />

      {/* TEAM SECTION */}
      <section className="py-24 md:py-32 px-6 bg-bg-sectionAlt">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-20">
              <div className="max-w-2xl">
                <Badge variant="lime" rotation={-2} className="mb-8">The Founders</Badge>
                <h2 className="text-[45px] md:text-[55px] font-medium text-text-heading leading-[1.1] tracking-tight">
                  Two Experts. One Shared Vision For Your <span className="gradient-text italic">Growth.</span>
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full border border-brand-main/20 flex items-center justify-center text-brand-main">
                 <Plus size={20} />
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'Aïda S.', role: 'Marketing & Data Strategy', img: '/assets/team/aida.jpg' },
              { name: 'Shalom T.', role: 'Product Design & Dev', img: '/assets/team/shalom.jpg' },
              { name: 'Collaborator', role: 'Visual Specialist', img: '/assets/team/member-3.jpg' },
              { name: 'Partner', role: 'Growth Expert', img: '/assets/team/member-4.jpg' },
            ].map((member, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-[30px] bg-bg-card aspect-[3/4] shadow-lg border border-border-subtle">
                   <Image 
                     src={member.img} 
                     alt={member.name} 
                     fill 
                     className="object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                   />
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-bg-card/80 backdrop-blur-md p-4 rounded-[20px] text-center border border-white/10">
                         <div className="text-[18px] font-bold text-white">{member.name}</div>
                         <div className="text-[14px] text-text-muted">{member.role}</div>
                      </div>
                   </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FAQ SECTION */}
      <section className="py-24 md:py-40 px-6 bg-bg-sectionAlt relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-main/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-6 space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <Badge variant="pink" rotation={2}>FAQ</Badge>
                  <h2 className="text-[42px] md:text-[56px] font-medium text-text-heading leading-[1.1] tracking-tight">
                    Addressing Concerns With <br />
                    <span className="gradient-text italic">Strategic Clarity.</span>
                  </h2>
                  <p className="text-text-muted text-[18px] max-w-md">
                    We believe in transparency. Here are answers to the questions we get most often.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {[
                  "How do we start a project together?",
                  "What is your high-fidelity design philosophy?",
                  "How do you use data to drive design?",
                  "Do you provide long-term support?"
                ].map((q, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <div className="p-7 bg-bg-card/50 backdrop-blur-sm rounded-[28px] border border-white/5 flex items-center justify-between cursor-pointer group hover:border-brand-main/40 hover:bg-bg-card transition-all duration-300">
                      <span className="text-[16px] md:text-[18px] font-medium text-white/90 group-hover:text-white transition-colors">{q}</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-main group-hover:text-bg-primary group-hover:border-brand-main transition-all duration-300">
                        <Plus size={18} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-6">
              <Reveal delay={0.4}>
                <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/5 group">
                  <Image 
                    src="/assets/bg/faq-woman.jpg" 
                    alt="Truvox Strategy" 
                    fill 
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <Badge variant="lime" rotation={-5} className="px-6 py-2 shadow-xl">Expert Consultation</Badge>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-32 md:py-48 px-6 bg-bg-dark relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center space-y-12 relative z-10">
          <Reveal>
            <h2 className="text-balance tracking-tight mb-12 break-words px-4">
              Ready To Build Your <br /><span className="gradient-text italic pr-[0.1em]">Digital Authority?</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex justify-center">
              <Button className="bg-brand-main text-bg-primary px-12 h-[64px] rounded-full text-[18px] font-bold hover:bg-brand-hover transition-all">
                Start My Project <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
          </Reveal>

          {/* Rotating Sun/Sparkle Icon */}
          <div className="flex justify-center mt-20">
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 text-brand-main"
             >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                   <path d="M50 0L55.9 34.1L90 44.1L55.9 54.1L50 100L44.1 65.9L10 55.9L44.1 45.9L50 0Z" />
                   <circle cx="50" cy="50" r="10" className="fill-bg-dark" />
                </svg>
             </motion.div>
          </div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

    </main>
  );
}
