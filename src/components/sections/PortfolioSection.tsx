'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'SAGANA AGENCY',
    category: 'EDITORIAL DESIGN',
    description: "Immersive platform establishing the digital authority of bold creative studios through disruptive design.",
    image: '/assets/portfolio/sagana.png',
    link: 'https://www.sagana-agency.com/'
  },
  {
    title: 'SMART PETRI DISH',
    category: 'HEALTH-TECH',
    description: "MVP development of an intelligent system for decentralized health screening. A major innovation validated by experts.",
    image: '/assets/portfolio/spd.png',
    link: 'https://spd-zeta.vercel.app/'
  },
  {
    title: 'VORTEX STUDIO',
    category: 'SOUND EXPERIENCE',
    description: "Interactive solution exploring the boundaries of experimental sound design and digital storytelling.",
    image: '/assets/portfolio/vortex.webp',
    link: 'https://www.behance.net/gallery/218017715/Mobile-App-to-buy-fuel'
  },
  {
    title: 'FORUM GRANDES ÉCOLES',
    category: 'EVENT DESIGN',
    description: "Visual identity and digital support for one of the largest student gatherings in France.",
    image: '/assets/portfolio/forum.png',
    link: '#'
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-main"></div>
            <span className="text-brand-main font-bold uppercase tracking-[0.4em] text-xs">
              Latest Work
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-primary tracking-tighter leading-none">
            Selected <span className="gradient-text">work</span>
          </h2>
        </motion.div>
      </div>

      {/* 2-Column Grid with updated images and projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group flex flex-col bg-white rounded-[12px] overflow-hidden border border-light hover:shadow-elevation5 hover:border-brand-main transition-all duration-500"
          >
            {/* Rectangle Image Zone - Fixed 420px height */}
            <div className="w-full h-[420px] relative overflow-hidden bg-sectionAlt">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover object-top block group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={index < 2}
              />
            </div>

            {/* Content Zone */}
            <div className="flex flex-col flex-1 p-8 md:p-[24px_28px_32px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-brand-main font-black text-xs">0{index + 1}</span>
                <div className="h-[1px] w-8 bg-light"></div>
                <span className="text-muted font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 tracking-tighter uppercase leading-none group-hover:text-brand-main transition-colors">
                {project.title}
              </h3>
              
              <p className="text-body text-base leading-relaxed mb-10 flex-1">
                {project.description}
              </p>

              <div className="pt-6 border-t border-light flex justify-end">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary hover:text-brand-main transition-colors"
                >
                  View Project <ArrowUpRight size={16} className="text-brand-main" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
