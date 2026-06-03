'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { allProjects } from '@/data/projects';

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = allProjects[activeIndex];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{ background: '#F5F5F5' }}
    >

      <div className="max-w-[1400px] mx-auto relative z-20">

        {/* ── HEADER ROW ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          {/* Left: title */}
          <div>
            <h2
              className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[86px] leading-[0.95] tracking-tight"
              style={{
                fontFamily: 'var(--font-staatliches), Georgia, serif',
                fontWeight: 400,
                color: '#000',
                textTransform: 'uppercase',
              }}
            >
              Selected Work{' '}
              <span
                className="text-[18px] sm:text-[22px] md:text-[26px] align-top"
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontWeight: 600,
                  color: '#33FF0D',
                }}
              >
                [{String(allProjects.length).padStart(2, '0')}]
              </span>
            </h2>
            <p
              className="mt-4 max-w-md text-[15px] md:text-[16px] leading-relaxed"
              style={{
                fontFamily: 'var(--font-geist), system-ui, sans-serif',
                color: '#555',
                fontWeight: 400,
              }}
            >
              A selection of design projects that showcase our approach to
              clarity, structure, and usability across digital platforms.
            </p>
          </div>

          {/* Right: counter */}
          <div
            className="hidden md:block text-right font-mono"
            style={{
              fontWeight: 600,
              fontSize: 'clamp(40px, 5vw, 72px)',
              color: '#000',
              lineHeight: 1,
            }}
          >
            {String(activeIndex + 1).padStart(2, '0')}/{String(allProjects.length).padStart(2, '0')}
          </div>
        </div>

        {/* ── MAIN CONTENT: Grid layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT: Project name tabs */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {allProjects.map((project, i) => (
                <button
                  key={project.slug}
                  onClick={() => setActiveIndex(i)}
                  className="text-left py-4 px-6 transition-all duration-300 cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium border-l-2 font-interDisplay"
                  style={{
                    color: activeIndex === i ? '#000000' : '#A4A4A4',
                    borderLeftColor: activeIndex === i ? '#33FF0D' : 'transparent',
                    background: 'transparent',
                  }}
                >
                  {project.title}
                </button>
              ))}
            </div>

            {/* View all button */}
            <div className="mt-8 px-6">
              <Link href="/projects" className="relative group inline-block">
                {/* Corner Crop Marks */}
                <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                
                <div className="flex items-center justify-between w-[150px] bg-[#33FF0D] text-black font-mono text-[12px] uppercase tracking-[0.1em] h-[48px] px-4 hover:bg-[#2DD90D] hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none relative z-10">
                  <span>View all</span>
                  <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT: Combined Project Card (Image left, Info right) */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 w-full border border-[#C0C4BF] bg-white overflow-hidden shadow-lg h-full"
              >
                {/* Left side: Project Image */}
                <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto min-h-[300px] md:min-h-[450px] overflow-hidden bg-[#1A1A1A]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

                {/* Right side: Project Info (Black card) */}
                <div className="md:col-span-5 bg-black p-8 md:p-10 flex flex-col justify-between text-white border-l border-[#C0C4BF]/20">
                  <div className="space-y-6">
                    {/* Project Logo/Title */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#33FF0D]/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#33FF0D]" />
                      </div>
                      <span className="text-[20px] font-display uppercase tracking-wide">
                        {activeProject.title}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#A4A4A4] text-[14px] leading-relaxed font-body">
                      {activeProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 border border-[#575757] text-[11px] font-mono uppercase tracking-wider text-white bg-white/5 rounded-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6 mt-12">
                    {/* Divider */}
                    <div className="border-t border-[#575757]/40 w-full" />

                    {/* Metadata Rows */}
                    <div className="space-y-3 font-mono text-[12px] text-white">
                      <div className="flex justify-between">
                        <span className="text-[#A4A4A4] uppercase tracking-wider">Year</span>
                        <span>{activeProject.details.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#A4A4A4] uppercase tracking-wider">Timeline</span>
                        <span>4 Weeks</span>
                      </div>
                    </div>

                    {/* View project button */}
                    <Link href={`/projects/${activeProject.slug}`} className="relative group block w-full">
                      {/* Corner Crop Marks */}
                      <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      
                      <div className="flex items-center justify-between bg-white text-black font-mono text-[12px] uppercase tracking-[0.1em] h-[48px] px-6 hover:bg-[#33FF0D] hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 w-full cursor-pointer border-none relative z-10">
                        <span>View project</span>
                        <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">
                          →
                        </span>
                      </div>
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
