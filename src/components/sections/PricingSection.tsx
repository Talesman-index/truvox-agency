'use client';

import { motion } from 'framer-motion';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealItem } from '@/components/ui/Reveal';

const plans = [
  {
    name: 'Essential',
    price: '1,500',
    description: 'Perfect for startups looking to establish a professional digital presence.',
    features: ['Custom UI/UX Design', 'Responsive Web Dev', 'Basic SEO Setup', '3 Rounds of Revisions'],
    featured: false
  },
  {
    name: 'Growth',
    price: '3,500',
    description: 'Advanced features and strategy for businesses ready to scale authority.',
    features: ['Advanced UI/UX', 'Full Stack Development', 'Data Strategy & Analysis', 'Ongoing Support'],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for complex platforms and high-performance brands.',
    features: ['Custom SaaS Architecture', 'Mobile App Development', 'Dedicated Account Lead', '24/7 Technical Support'],
    featured: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge variant="lime" rotation={-2} className="mb-8">Pricing Plans</Badge>
              <h2 className="text-[45px] md:text-[55px] font-medium text-text-heading leading-[1.1] tracking-tight">
                Transparent Pricing For <span className="gradient-text italic">Every Stage</span> Of Your Growth.
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full border border-brand-main/20 flex items-center justify-center text-brand-main">
               <Plus size={20} />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className={`p-10 md:p-12 rounded-[40px] border transition-all duration-500 bg-bg-card flex flex-col h-full hover:shadow-glow ${plan.featured ? 'border-brand-main border-[3px] scale-105 z-10' : 'border-border-subtle hover:border-brand-main'}`}>
                <div className="mb-12">
                   <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-brand-main mb-4">{plan.name}</div>
                   <div className="flex items-baseline gap-1">
                      {plan.price !== 'Custom' && <span className="text-[24px] font-bold text-text-heading">$</span>}
                      <span className="text-[55px] md:text-[65px] font-bold text-text-heading tracking-tighter">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-[18px] font-medium text-text-muted ml-2">/ project</span>}
                   </div>
                </div>

                <p className="text-[18px] text-text-body mb-12 leading-relaxed">
                   {plan.description}
                </p>

                <div className="space-y-6 mb-16 flex-grow">
                   {plan.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-brand-main/10 flex items-center justify-center text-brand-main">
                           <Check size={14} />
                        </div>
                        <span className="text-[16px] font-medium text-text-body">{feature}</span>
                     </div>
                   ))}
                </div>

                <Button className={`w-full h-[64px] rounded-full text-[16px] font-bold transition-all ${plan.featured ? 'bg-brand-main text-bg-primary hover:bg-brand-hover shadow-[0_0_20px_rgba(0,255,133,0.3)]' : 'bg-transparent border border-brand-main text-brand-main hover:bg-brand-main hover:text-bg-primary'}`}>
                   Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
