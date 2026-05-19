'use client';

import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  Globe, 
  Layers, 
  Palette,
  Compass
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Website Creation',
    description: 'We design and build professional websites from scratch, structured to present your services clearly and guide visitors toward contacting you.',
    icon: <Globe size={32} />,
    features: ['Custom Layout', 'Mobile Responsive', 'Contact Form', 'Fast Page Loading']
  },
  {
    title: 'Website Redesign',
    description: 'If your current website looks outdated or isn\'t bringing in clients, we\'ll rebuild it into something that works.',
    icon: <Layers size={32} />,
    features: ['Modern Visual Design', 'Content Refinement', 'Better Page Speed', 'Redirect Setup']
  },
  {
    title: 'UI/UX Design',
    description: 'Clean layouts, easy navigation, and a design that makes people trust your business from the first click.',
    icon: <Palette size={32} />,
    features: ['Intuitive Layouts', 'Consistent Branding', 'User Flows', 'Readable Typography']
  },
  {
    title: 'Strategy',
    description: 'Not sure what your website needs? We\'ll help you figure that out first, aligning structure, messaging, and user flow, before building anything.',
    icon: <Compass size={32} />,
    features: ['Content Structure', 'Competitor Review', 'Clear CTAs', 'Messaging Alignment']
  }
];

const processes = [
  { step: '01', title: 'Discovery', desc: 'We start with a call to understand your business, your clients, and what you actually need from a website.' },
  { step: '02', title: 'Strategy', desc: 'We map out the structure and content before touching design. This is where we define what the site needs to say and to whom.' },
  { step: '03', title: 'Design', desc: 'We build a clean, modern design tailored to your business without using generic templates.' },
  { step: '04', title: 'Development', desc: 'We code and build the site, making sure it works fast and looks right on every device.' },
  { step: '05', title: 'Launch', desc: 'We review everything together before going live. After launch, we\'re still available if anything comes up.' }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <Badge variant="lime" rotation={-2} className="mb-8">What We Do</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium text-text-heading leading-[1.0] tracking-tight mb-12">
              A website built for <br /><span className="gradient-text italic">your business. Not a template.</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-text-muted max-w-2xl mx-auto leading-relaxed">
              Every business is different. We take the time to understand yours before writing a single line of code.
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
                 <Badge variant="pink" rotation={2}>How It Works</Badge>
                 <h2 className="text-[35px] md:text-[55px] font-medium text-text-heading tracking-tight">
                    A simple process. <br /><span className="gradient-text italic">No surprises.</span>
                 </h2>
               </div>
               <p className="text-text-muted max-w-sm text-[18px]">
                 We know that working with a web designer can feel complicated. We&apos;ve made ours as clear as possible.
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
               Ready to get a website <br /><span className="gradient-text italic">that works for your business?</span>
             </h2>
             <Link href="/contact">
               <Button className="bg-brand-main text-bg-primary px-12 h-[64px] rounded-full text-[18px] font-bold hover:bg-brand-hover transition-all shadow-[0_0_40px_rgba(0,255,133,0.15)]">
                 Book My Free Call <ArrowRight className="ml-2" size={24} />
               </Button>
             </Link>
           </Reveal>
        </div>
      </section>
    </main>
  );
}
