'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ArrowUpRight, Zap, Target, Shield, Rocket } from 'lucide-react';
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* HERO ABOUT - CINEMATIC CENTERED */}
      <section className="relative min-h-[90vh] flex items-center pt-40 pb-32 px-6 bg-dark overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-main/5 blur-[120px] rounded-full pointer-events-none opacity-30"></div>
        
        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/20 text-white/50 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
              <Target size={14} className="text-brand-main" /> OUR STORY
            </div>
          </Reveal>

          <div className="space-y-12">
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter text-white">
              Excellence <br />
              for the <span className="text-brand-main">ambitious.</span>
            </h1>
            
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                Truvox was born from a simple conviction: every business, regardless of size, deserves a digital presence that reflects its true value and ambition.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Floating Background Assets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-[0.08] blur-[2px] hidden xl:block"
          >
            <Image src="/assets/icons3d/3dicons-rocket-dynamic-color.png" alt="Asset" fill className="object-contain" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-20 -right-20 w-[400px] h-[400px] opacity-[0.06] blur-[3px] hidden xl:block"
          >
            <Image src="/assets/icons3d/3dicons-cube-dynamic-color.png" alt="Asset" fill className="object-contain" />
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO SECTION - HIGH IMPACT */}
      <section className="py-40 md:py-60 px-6 bg-darkAlt relative border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter max-w-5xl">
              We don&apos;t build websites. <br />
              We build systems of trust <br />
              that drive real results.
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-16 mt-40">
             {[
               { icon: <Target className="text-brand-main" />, title: "Strategy", text: "Every pixel is driven by your business goals and a deep analysis of your market landscape." },
               { icon: <Shield className="text-brand-main" />, title: "Trust", text: "Design that reassures, builds credibility, and instantly validates your expertise with your clients." },
               { icon: <Rocket className="text-brand-main" />, title: "Impact", text: "Technical and marketing performance designed to maximize every single conversion opportunity." }
             ].map((val, i) => (
               <Reveal key={i} delay={0.2 * i}>
                 <div className="space-y-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-main/50 transition-colors duration-500">
                      {val.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-white tracking-tight">{val.title}</h3>
                      <p className="text-white/40 text-lg leading-relaxed">{val.text}</p>
                    </div>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - FOUNDERS */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="space-y-4 mb-24">
               <div className="text-brand-main font-black text-[11px] uppercase tracking-[0.5em]">The Founders</div>
               <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-primary">
                 Two experts. <br />One <span className="text-brand-main">shared vision.</span>
               </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                name: 'Aïda', 
                role: 'Marketing Strategy & Data Analyst', 
                desc: 'Expert in marketing strategy and Data Analysis, Aïda uses data to drive your growth decisions and turn every project into a captivating story with measurable results.' 
              },
              { 
                name: 'Shalom', 
                role: 'Product Designer & Developer', 
                desc: 'Expert in Product Design and web/mobile development, Shalom combines minimalist aesthetics with cutting-edge engineering to create websites and mobile apps that redefine performance standards.' 
              }
            ].map((member, index) => (
              <Reveal key={index} delay={0.2 * index}>
                <div className="group relative bg-sectionAlt rounded-[60px] p-12 md:p-16 border border-light overflow-hidden transition-all duration-700 hover:border-brand-main/40 hover:shadow-elevation6">
                  <div className="relative z-10 space-y-12">
                    <div className="flex justify-between items-start">
                      <div className="w-28 h-28 bg-dark rounded-[40px] flex items-center justify-center text-white text-5xl font-black group-hover:bg-brand-main transition-all duration-500 group-hover:rotate-6 shadow-2xl">
                        {member.name[0]}
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/50 border border-light flex items-center justify-center group-hover:bg-brand-main group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={32} />
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-5xl font-black text-primary mb-3 tracking-tighter">{member.name}</h3>
                        <div className="text-brand-main font-black text-sm uppercase tracking-[0.4em]">{member.role}</div>
                      </div>
                      <p className="text-xl text-muted leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute bottom-[-15%] right-[-15%] w-80 h-80 bg-brand-main/5 blur-[100px] rounded-full group-hover:bg-brand-main/10 transition-colors duration-700"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-40 px-6 bg-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-main/5 opacity-30 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Give your business <br /> the image it <span className="text-brand-main">deserves.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="primary" size="lg" className="px-12 py-6 rounded-2xl shadow-brand text-lg font-black uppercase tracking-widest">
                Work with us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
