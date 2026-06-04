'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, CheckCircle2, ChevronRight, Target, Paintbrush, Cpu, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { allProjects } from '@/data/projects';

interface ProjectDetailContentProps {
  project: any;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  // Find next project
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main className="bg-bg-dark min-h-screen text-text-body selection:bg-brand-main selection:text-bg-primary overflow-x-hidden scroll-pt-32">
      
      {/* 1. HERO SECTION - High Impact Header */}
      <section className="relative pt-40 sm:pt-48 md:pt-64 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-main/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <Badge variant="lime" rotation={-2} className="px-4 md:px-6 py-1.5 md:py-2 shadow-lg text-[10px] md:text-[12px]">Case Study {project.id}</Badge>
              <div className="h-[1px] w-8 md:w-12 bg-white/20" />
              <span className="text-brand-main font-bold tracking-widest text-[9px] md:text-[11px] uppercase">{project.category}</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-[36px] xs:text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-medium leading-[1] md:leading-[0.95] tracking-tighter mb-12 md:mb-16 max-w-5xl break-words text-text-heading">
              {project.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i === project.title.split(' ').length - 1 ? "gradient-text italic block md:inline" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 xl:col-span-7">
              <Reveal delay={0.3}>
                <p className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] text-text-body/90 leading-tight md:leading-tight tracking-tight font-medium">
                  {project.fullDescription}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 xl:col-span-5 flex flex-col gap-8">
              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="relative group inline-block select-none"
                >
                  {/* Corner Crop Marks */}
                  <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  
                  <div className="flex items-center bg-[#33FF0A] text-black font-mono text-[12px] uppercase tracking-[0.1em] h-[57px] rounded-none hover:bg-[#33FF0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(51,255,10,0.2)] cursor-pointer border-none pl-6 pr-0 relative z-10 w-fit">
                    <span className="mr-6 font-medium">Launch Live Project</span>
                    <span className="flex items-center justify-center w-[50px] h-[57px] border-l border-black/25 text-[18px]">
                      <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 leading-none">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR - Structured Meta Data */}
      <section className="px-6 md:px-12 mb-24 md:mb-32 pt-12 md:pt-20">
        <div className="max-w-[1200px] mx-auto py-8 md:py-12 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: 'Client', value: project.details.client },
            { label: 'Year', value: project.details.year },
            { label: 'Role', value: 'Strategy & Dev' },
            { label: 'Industry', value: project.category }
          ].map((item, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className="space-y-1 md:space-y-2">
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-main/70">{item.label}</p>
                <p className="text-[15px] md:text-[18px] font-semibold text-text-heading">{item.value}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </section>

      {/* 3. MAIN VISUAL - Immersive Display */}
      <section className="px-6 md:px-12 mb-32 md:mb-40 pt-12 md:pt-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-[12px] overflow-hidden group shadow-2xl border border-white/5"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
              <div className="flex items-center gap-3 text-white/50 bg-black/20 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10">
                <Paintbrush className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest">Aesthetics: {project.tags[0]}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CONTENT STRATEGY - Challenge & Solution */}
      <section className="px-6 md:px-12 mb-32 md:mb-48 pt-12 md:pt-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Left Column - Narrative */}
            <div className="xl:col-span-8 space-y-24 md:space-y-32">
              
              {/* Challenge */}
              <RevealItem>
                <div className="space-y-8 md:space-y-10">
                  <div className="inline-flex items-center gap-4 text-brand-main">
                    <Target className="w-5 h-5 md:w-6 md:h-6" />
                    <h2 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em]">The Strategic Challenge</h2>
                  </div>
                  <h3 className="text-[28px] sm:text-[32px] md:text-[54px] font-medium text-text-heading tracking-tight leading-[1.1]">
                    Understanding the <span className="gradient-text italic">Core Friction.</span>
                  </h3>
                  <p className="text-[17px] sm:text-[20px] md:text-[24px] text-text-body/80 leading-relaxed max-w-3xl">
                    {project.details.challenge}
                  </p>
                </div>
              </RevealItem>

              {/* Solution */}
              <RevealItem>
                <div className="space-y-8 md:space-y-10">
                  <div className="inline-flex items-center gap-4 text-brand-main">
                    <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                    <h2 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em]">Our Engineered Solution</h2>
                  </div>
                  <h3 className="text-[28px] sm:text-[32px] md:text-[54px] font-medium text-text-heading tracking-tight leading-[1.1]">
                    Architecting the <span className="gradient-text italic">Future State.</span>
                  </h3>
                  <p className="text-[17px] sm:text-[20px] md:text-[24px] text-text-body/80 leading-relaxed max-w-3xl">
                    {project.details.solution}
                  </p>
                  
                  {/* Design Style Feature */}
                  <div className="mt-12 md:mt-16 p-8 md:p-14 bg-white/[0.02] border border-white/5 rounded-[12px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-main/10 blur-[80px] rounded-full" />
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-brand-main mb-4 md:mb-6">Visual Language</p>
                    <p className="text-[16px] md:text-[22px] font-medium italic text-text-heading leading-relaxed relative z-10">
                      &quot;{project.designStyle}&quot;
                    </p>
                  </div>
                </div>
              </RevealItem>

              {/* Impact */}
              <RevealItem>
                <div className="relative space-y-8 md:space-y-10 p-8 sm:p-12 md:p-20 bg-bg-card border border-white/5 rounded-[12px] overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/5 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 text-brand-main mb-8 md:mb-10">
                      <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />
                      <h2 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em]">The Growth Impact</h2>
                    </div>
                    <h3 className="text-[28px] sm:text-[32px] md:text-[64px] font-medium tracking-tight leading-[1] text-text-heading mb-8">
                      Measureable <br/> <span className="gradient-text italic opacity-90">Authority.</span>
                    </h3>
                    <p className="text-[18px] sm:text-[22px] md:text-[32px] font-medium leading-relaxed tracking-tight text-text-body">
                      {project.details.impact}
                    </p>
                  </div>
                </div>
              </RevealItem>

            </div>

            {/* Right Column - Technical Sidebar */}
            <div className="xl:col-span-4 space-y-16 md:space-y-24">
              
              {/* Stack */}
              <div className="space-y-6 md:space-y-8">
                <h5 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-brand-main border-b border-white/10 pb-4">Technology Stack</h5>
                <div className="flex flex-col gap-3 md:gap-4">
                  {project.details.techStack.map((tech: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-main group-hover:scale-150 transition-transform" />
                      <span className="text-[14px] md:text-[16px] font-semibold text-text-heading group-hover:text-brand-main transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-6 md:space-y-8">
                <h5 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-brand-main border-b border-white/10 pb-4">Core Deliverables</h5>
                <div className="space-y-3 md:space-y-4">
                  {project.details.services.map((service: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/5 rounded-[12px] border border-white/10">
                      <CheckCircle2 className="w-4 h-4 md:w-[18px] md:h-[18px] text-brand-main shrink-0 mt-0.5 md:mt-1" />
                      <span className="text-[13px] md:text-[15px] font-medium text-text-body">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-8 rounded-[12px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 space-y-6">
                <h6 className="text-[18px] md:text-[20px] font-medium text-text-heading">Have a similar project?</h6>
                <p className="text-[13px] md:text-[14px] text-text-muted leading-relaxed">Let&apos;s discuss how we can build your brand moat and digital authority.</p>
                <Link href="/contact" className="relative group block w-full select-none">
                  {/* Corner Crop Marks */}
                  <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                  
                  <div className="flex items-center justify-between bg-white text-black font-mono text-[12px] uppercase tracking-[0.1em] h-[48px] px-6 hover:bg-[#33FF0A] hover:shadow-[0_8px_20px_rgba(51,255,10,0.2)] hover:-translate-y-0.5 transition-all duration-300 w-full cursor-pointer border-none relative z-10">
                    <span>Get in Touch</span>
                    <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">
                      →
                    </span>
                  </div>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. NEXT PROJECT - Continuous Flow */}
      <section className="py-32 md:py-40 px-6 md:px-12 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto text-center space-y-10 md:space-y-12">
          <Reveal>
            <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.5em] text-brand-main">Next Success Story</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href={`/projects/${nextProject.slug}`} className="group block space-y-6 md:space-y-8">
              <h2 className="text-[32px] xs:text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-medium tracking-tighter leading-none text-text-heading group-hover:text-brand-main transition-colors duration-500">
                {nextProject.title}
              </h2>
              <div className="flex items-center justify-center gap-4 text-text-muted group-hover:text-white transition-colors">
                <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">View Project Detail</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-main group-hover:bg-brand-main group-hover:text-bg-primary transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
