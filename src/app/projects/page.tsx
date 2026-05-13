'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { allProjects } from '@/data/projects';

const categories = ['All', 'Design Studio', 'Health Tech', 'Mobile App', 'Cinematic'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return allProjects;
    return allProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <Badge variant="outline" className="mb-6 border-brand-main/30 text-brand-main">Selected Works</Badge>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-[24px] xs:text-[30px] sm:text-[45px] md:text-[90px] font-medium leading-tight md:leading-[1.1] tracking-tight mb-8 break-words">
              Pioneering <span className="gradient-text italic pr-[0.1em]">Digital</span> Authority.
            </h1>
          </Reveal>
          
          {/* Filters Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category 
                    ? 'bg-brand-main border-brand-main text-bg-primary shadow-[0_0_20px_rgba(0,255,133,0.3)]' 
                    : 'bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-40 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                >
                  <Link href={`/projects/${project.slug}`} className="block space-y-8">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] bg-bg-card border border-white/5 transition-all duration-700 group-hover:border-brand-main/30 shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover transition-all duration-1000 group-hover:scale-105"
                      />
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="px-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-[12px] font-bold uppercase tracking-widest text-brand-main/60">{project.id}</span>
                          <h2 className="text-[22px] md:text-[40px] font-medium tracking-tight group-hover:text-brand-main transition-colors">{project.title}</h2>
                        </div>
                        <span className="text-[14px] text-text-muted font-medium italic">{project.category}</span>
                      </div>
                      
                      <p className="text-[18px] text-text-muted leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:border-brand-main/20 group-hover:text-brand-main transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-text-muted text-[18px]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
