'use client';

import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Database, 
  Palette,
  Search,
  Zap,
  Code,
  ShieldCheck,
  LineChart
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Product Design & UI/UX',
    description: 'We create high-fidelity, intuitive interfaces that don\'t just look good but drive conversions and user satisfaction.',
    icon: <Layers size={32} />,
    features: ['User Research', 'Information Architecture', 'Visual Design', 'Prototyping']
  },
  {
    title: 'Web & Mobile Development',
    description: 'Robust, scalable, and high-performance applications built with modern frameworks like Next.js and React Native.',
    icon: <Smartphone size={32} />,
    features: ['Custom Web Apps', 'Mobile Apps', 'E-commerce', 'CMS Integration']
  },
  {
    title: 'Marketing & Data Strategy',
    description: 'Data-driven insights to optimize your digital presence and maximize ROI through strategic campaigns.',
    icon: <Database size={32} />,
    features: ['Conversion Audit', 'SEO Optimization', 'Analytics Setup', 'Growth Strategy']
  },
  {
    title: 'Brand Identity Systems',
    description: 'Crafting unique and memorable visual identities that resonate with your target audience and establish authority.',
    icon: <Palette size={32} />,
    features: ['Logo Design', 'Visual Guidelines', 'Design Systems', 'Brand Strategy']
  }
];

const processes = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals, target audience, and market landscape.' },
  { step: '02', title: 'Strategy', desc: 'Defining the roadmap, technology stack, and visual direction for success.' },
  { step: '03', title: 'Design', desc: 'Iterative design process focusing on high-fidelity aesthetics and usability.' },
  { step: '04', title: 'Build', desc: 'Clean, efficient coding with continuous testing and performance audits.' },
  { step: '05', title: 'Launch', desc: 'Seamless deployment and monitoring to ensure a perfect first impression.' }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <Badge variant="lime" rotation={-2} className="mb-8">Expertise</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium text-text-heading leading-[1.0] tracking-tight mb-12">
              Strategic Solutions <br /><span className="gradient-text italic">For Global Impact.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-text-muted max-w-2xl mx-auto leading-relaxed">
              We combine world-class design with precision engineering to help your business establish absolute digital authority.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="px-6 mb-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="p-10 md:p-12 bg-bg-card rounded-[40px] border border-border-subtle group hover:border-brand-main transition-all duration-500 flex flex-col h-full">
                  <div className="w-20 h-20 rounded-3xl bg-brand-main/10 flex items-center justify-center text-brand-main mb-10 border border-brand-main/20 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h2 className="text-[28px] md:text-[36px] font-bold text-text-heading mb-6 tracking-tight group-hover:text-brand-main transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[18px] text-text-muted leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-2 gap-4">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-main/40"></div>
                        <span className="text-[14px] font-medium text-text-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-40 px-6 bg-bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
               <div className="space-y-6">
                 <Badge variant="pink" rotation={2}>Our Workflow</Badge>
                 <h2 className="text-[35px] md:text-[55px] font-medium text-text-heading tracking-tight">
                    How We Bring <br /><span className="gradient-text italic">Vision To Reality.</span>
                 </h2>
               </div>
               <p className="text-text-muted max-w-sm text-[18px]">
                 A structured, transparent process designed to minimize friction and maximize results.
               </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processes.map((item, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="space-y-6 relative group">
                  <div className="text-[50px] font-bold text-white/5 group-hover:text-brand-main/20 transition-colors duration-500 leading-none">{item.step}</div>
                  <h3 className="text-[22px] font-bold text-text-heading">{item.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed">{item.desc}</p>
                  {i < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/5"></div>
                  )}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
           <Reveal>
             <h2 className="text-[40px] md:text-[70px] font-medium text-text-heading leading-[1.1] tracking-tight mb-12">
               Let&apos;s Build Your <br /><span className="gradient-text italic">Next Big Thing.</span>
             </h2>
             <Link href="/contact">
               <Button className="bg-brand-main text-bg-primary px-12 h-[64px] rounded-full text-[18px] font-bold hover:bg-brand-hover transition-all">
                 Start A Conversation <ArrowRight className="ml-2" size={24} />
               </Button>
             </Link>
           </Reveal>
        </div>
      </section>
    </main>
  );
}
