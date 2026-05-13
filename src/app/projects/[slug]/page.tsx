'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { allProjects } from '@/data/projects';
import { ArrowUpRight, Calendar, User, Layout, Zap, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = allProjects.find(p => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

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
            <h1 className="text-[36px] sm:text-[45px] md:text-[100px] font-medium leading-[1] tracking-tighter mb-12 max-w-4xl">
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
                    <h3 className="text-[12px] font-bold uppercase tracking-widest">Client</h3>
                  </div>
                  <p className="text-[20px] font-medium">{project.details.client}</p>
                </div>
              </RevealItem>

              <RevealItem delay={0.3}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <Layout size={18} />
                    <h3 className="text-[12px] font-bold uppercase tracking-widest">Services</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.details.services.map((service) => (
                      <li key={service} className="text-[18px] text-text-muted">{service}</li>
                    ))}
                  </ul>
                </div>
              </RevealItem>

              <RevealItem delay={0.4}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <Zap size={18} />
                    <h3 className="text-[12px] font-bold uppercase tracking-widest">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.details.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            </div>

            {/* Main Details */}
            <div className="lg:col-span-8 space-y-24">
              <RevealItem delay={0.2}>
                <div className="space-y-8">
                  <h2 className="text-[32px] md:text-[56px] font-medium tracking-tight">The Challenge</h2>
                  <p className="text-[20px] text-text-muted leading-relaxed">
                    {project.details.challenge}
                  </p>
                </div>
              </RevealItem>

              <RevealItem delay={0.3}>
                <div className="space-y-8">
                  <h2 className="text-[32px] md:text-[56px] font-medium tracking-tight">Our Solution</h2>
                  <p className="text-[20px] text-text-muted leading-relaxed">
                    {project.details.solution}
                  </p>
                </div>
              </RevealItem>

              <RevealItem delay={0.35}>
                <div className="space-y-8 p-10 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 text-brand-main mb-2">
                    <Layout size={24} />
                    <h3 className="text-[12px] font-bold uppercase tracking-widest">Design Identity</h3>
                  </div>
                  <p className="text-[20px] md:text-[32px] font-medium leading-tight tracking-tight italic text-text-heading pr-2">
                    {project.designStyle}
                  </p>
                </div>
              </RevealItem>

              <RevealItem delay={0.4}>
                <div className="space-y-10 p-10 md:p-16 rounded-[40px] bg-brand-main/5 border border-brand-main/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <CheckCircle2 size={120} className="text-brand-main" />
                  </div>
                  <div className="relative z-10 space-y-6">
                    <h2 className="text-[32px] md:text-[56px] font-medium tracking-tight text-brand-main">The Impact</h2>
                    <p className="text-[18px] md:text-[28px] font-medium leading-relaxed text-white">
                      &quot;{project.details.impact}&quot;
                    </p>
                  </div>
                </div>
              </RevealItem>
            </div>

          </div>
        </div>
      </section>

      {/* Next Project Link */}
      <section className="px-6 md:px-12 pb-40">
        <div className="max-w-[1200px] mx-auto pt-20 border-t border-white/5">
          <Link href="/projects" className="group block text-center space-y-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-brand-main">Back to Work</span>
            <h2 className="text-[32px] md:text-[60px] font-medium group-hover:italic transition-all duration-500">Explore All <span className="gradient-text pr-[0.1em]">Projects</span></h2>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
