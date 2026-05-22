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

export const PortfolioSection = () => {
  return (
    <section id="projects" className="py-24 md:py-40 px-6 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        {/* Minimalist Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-32">
            <div className="space-y-4">
              <Badge variant="lime" rotation={-2} className="mb-4">Our Work</Badge>
              <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
                <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                  Selected
                </span>
                <span className="font-display">
                  Works
                </span>
              </h2>
            </div>
            <p className="text-text-muted text-[16px] leading-relaxed max-w-sm">
              We&apos;re a new studio. Here&apos;s what we&apos;ve done so far, and where we&apos;re headed.
            </p>
          </div>
        </Reveal>

        {/* List Layout - Alternating Flex Rows */}
        <div className="space-y-24 md:space-y-32">
          {allProjects.map((project, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pb-16 border-b border-white/5 last:border-b-0 last:pb-0 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Text Side */}
                <div className="w-full lg:w-[45%] space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-brand-main text-[14px] font-bold tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    {project.isConcept && (
                      <span className="text-[11px] font-mono text-brand-main/80 uppercase tracking-widest">
                        Concept
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display text-[28px] sm:text-[34px] md:text-[40px] font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted text-[15px] md:text-[16px] leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.tags.map((tag: string, tagIdx: number) => (
                      <span 
                        key={tagIdx} 
                        className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-text-muted hover:border-brand-main/30 hover:text-brand-main transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className="text-brand-hover hover:text-brand-main transition-colors text-[13px] font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1 group"
                    >
                      View Case Study 
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* Image Side */}
                <div className="w-full lg:w-[50%]">
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[#0D0D18] border border-white/5 group-hover:border-brand-main/30 transition-all duration-700 shadow-2xl">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        unoptimized
                        className="object-cover transition-all duration-1000 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-brand-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </Link>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Button */}
        <Reveal delay={0.2}>
          <div className="mt-24 flex justify-center">
            <Link href="/projects">
              <Button className="btn-secondary h-[56px] px-10 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all">
                <span>View All Projects</span>
                <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Call to Action */}
        <Reveal delay={0.3}>
          <div className="mt-32 pt-20 border-t border-white/5 text-center space-y-8">
            <h4 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
              <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                Have a vision
              </span>
              <span className="font-display">
                In Mind?
              </span>
            </h4>
            <div className="flex justify-center pt-4">
              <Link href="/contact">
                <Button className="btn-primary h-[56px] px-10 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(206,254,85,0.2)]">
                  Contact us to start
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
