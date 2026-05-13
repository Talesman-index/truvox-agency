'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, Calendar, User, Layout, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetailContentProps {
  project: any;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="outline" className="border-brand-main/30 text-brand-main">{project.category}</Badge>
              <span className="text-text-muted text-sm font-medium italic">{project.details.year}</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-[26px] xs:text-[32px] sm:text-[45px] md:text-[100px] font-medium leading-tight md:leading-[1] tracking-tighter mb-12 max-w-4xl break-words">
              {project.title}
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.3}>
                <p className="text-[20px] md:text-[26px] text-text-muted leading-relaxed max-w-3xl">
                  {project.fullDescription}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <Reveal delay={0.4}>
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="group flex items-center gap-4 bg-white/5 hover:bg-brand-main hover:text-bg-primary border border-white/10 hover:border-brand-main px-8 py-5 rounded-full transition-all duration-500"
                >
                  <span className="text-[14px] font-bold uppercase tracking-widest">Visit Live Site</span>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-bg-primary/20 transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] rounded-[40px] overflow-hidden bg-bg-card border border-white/5 shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent`}></div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-12 pb-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-16">
              <RevealItem delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <User size={18} />
                    <span className="text-[12px] font-bold uppercase tracking-widest">Role</span>
                  </div>
                  <p className="text-text-muted">{project.details.role}</p>
                </div>
              </RevealItem>

              <RevealItem delay={0.3}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <Layout size={18} />
                    <span className="text-[12px] font-bold uppercase tracking-widest">Platform</span>
                  </div>
                  <p className="text-text-muted">{project.details.platform}</p>
                </div>
              </RevealItem>

              <RevealItem delay={0.4}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <Zap size={18} />
                    <span className="text-[12px] font-bold uppercase tracking-widest">Technology</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.tech.map((t: string, i: number) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-24">
              <RevealItem delay={0.3}>
                <div className="space-y-8">
                  <h2 className="text-[32px] md:text-[45px] font-medium text-text-heading tracking-tight leading-tight">The <span className="gradient-text italic">Challenge.</span></h2>
                  <p className="text-[18px] md:text-[20px] text-text-body leading-relaxed opacity-80">
                    {project.challenge}
                  </p>
                </div>
              </RevealItem>

              <div className="space-y-12">
                <RevealItem>
                  <h2 className="text-[32px] md:text-[45px] font-medium text-text-heading tracking-tight leading-tight">Key <span className="gradient-text italic">Features.</span></h2>
                </RevealItem>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.features.map((feature: string, i: number) => (
                    <RevealItem key={i} delay={i * 0.1}>
                      <div className="flex items-start gap-4 p-8 bg-bg-card rounded-[32px] border border-white/5 group hover:border-brand-main/30 transition-all duration-500">
                        <CheckCircle2 className="text-brand-main mt-1 shrink-0" size={24} />
                        <p className="text-[18px] font-medium text-text-heading leading-snug">{feature}</p>
                      </div>
                    </RevealItem>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
