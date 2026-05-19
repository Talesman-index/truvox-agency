'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

import { allProjects } from '@/data/projects';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <RevealItem delay={index * 0.1}>
      <Link 
         href={`/projects/${project.slug}`} 
         className="group block space-y-6"
      >
        {/* Image Container - Framer Style (Clean, Rounded, Overflow hidden) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] bg-bg-card border border-white/5 group-hover:border-brand-main/30 transition-all duration-700">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            unoptimized
            className="object-cover transition-all duration-1000 group-hover:scale-105"
          />
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-brand-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Floating Icon Link */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Metadata - Webflow/Framer Style (Tags + Description) */}
        <div className="px-2 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-[24px] md:text-[28px] font-medium text-text-heading tracking-tight group-hover:text-brand-main transition-colors">
                {project.title}
              </h3>
              {project.isConcept && (
                <span className="text-[12px] text-brand-main/80 font-medium block">
                  Concept project
                </span>
              )}
            </div>
            
            {/* Tags Row */}
            <div className="flex items-center gap-2">
               {project.tags.map((tag: string, i: number) => (
                 <span 
                   key={i} 
                   className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-text-muted group-hover:border-brand-main/30 group-hover:text-brand-main transition-all"
                 >
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          <p className="text-[16px] text-text-muted leading-relaxed max-w-lg">
            {project.description}
          </p>
          
          <div className="pt-2">
             <div className="w-full h-[1px] bg-white/5 group-hover:bg-brand-main/20 transition-colors"></div>
          </div>
        </div>
      </Link>
    </RevealItem>
  );
};

export const PortfolioSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-bg-primary">
      <div className="max-w-[1200px] mx-auto">
        {/* Minimalist Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-20 md:mb-28">
            <div className="space-y-4">
              <Badge variant="lime" rotation={-2} className="mb-4">Our Work</Badge>
              <h2 className="text-[26px] xs:text-[32px] sm:text-[40px] md:text-[60px] font-medium text-text-heading leading-tight tracking-tight break-words">
                A few things <span className="gradient-text italic pr-[0.1em]">we&apos;ve built.</span>
              </h2>
            </div>
            <p className="text-text-muted text-[16px] leading-relaxed max-w-sm">
              We&apos;re a new studio. Here&apos;s what we&apos;ve done so far, and where we&apos;re headed.
            </p>
          </div>
        </Reveal>

        {/* Grid Layout - Clean 2-column staggered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-20">
          {allProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <Link href="/projects">
              <Button variant="secondary" className="group border-white/10 text-white hover:text-black h-[60px] px-10 rounded-full text-[14px] font-bold uppercase tracking-widest transition-all">
                <span>View All Projects</span>
                <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Call to Action */}
        <Reveal delay={0.3}>
          <div className="mt-32 pt-20 border-t border-white/5 text-center">
            <h4 className="text-[24px] xs:text-[28px] md:text-[40px] font-medium text-text-heading mb-10 tracking-tight break-words">
              Have a vision <span className="gradient-text italic pr-[0.1em]">in mind?</span>
            </h4>
            <Link href="/contact">
              <Button variant="secondary" className="mt-10 border-brand-main text-brand-main hover:bg-brand-main hover:text-bg-primary h-[64px] px-12 rounded-full text-[16px] font-bold transition-all shadow-[0_0_40px_rgba(0,255,133,0.05)]">
                Contact us to start
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
