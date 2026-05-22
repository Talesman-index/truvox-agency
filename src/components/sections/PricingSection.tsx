'use client';

import { motion } from 'framer-motion';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '1,500',
    description: 'A clean, professional website to establish your online presence.',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form',
      'Basic SEO setup',
      '2 rounds of revisions'
    ],
    featured: false,
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    price: '3,500',
    description: 'A fully structured website designed to attract and convert clients.',
    features: [
      'Up to 10 pages',
      'Custom UI/UX design',
      'Advanced SEO',
      'Strategy session included',
      'Ongoing support (1 month)'
    ],
    featured: true,
    cta: 'Get Started'
  },
  {
    name: 'Custom',
    price: 'Let\'s talk.',
    description: 'Your project doesn\'t fit a package? We\'ll build something around your specific needs and budget.',
    features: [
      'Custom page structure',
      'Tailored functionality',
      'Unlimited revisions during design',
      'Ongoing technical consultation'
    ],
    featured: false,
    cta: 'Contact Us'
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-40 px-6 bg-bg-primary overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge variant="lime" rotation={-2} className="mb-8">Pricing</Badge>
              <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] mt-6 break-words">
                <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                  Simple
                </span>
                <span className="font-display">
                  Pricing Plans
                </span>
              </h2>
              <p className="mt-6 text-[16px] md:text-[18px] text-text-muted leading-relaxed">
                We work with small businesses, so we keep our prices fair and our packages honest.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border border-brand-main/20 flex items-center justify-center text-brand-main hidden lg:flex shrink-0">
               <Plus size={20} />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          {plans.map((plan, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className={`p-8 xl:p-12 rounded-[12px] border transition-all duration-500 bg-[#0D0D18] flex flex-col h-full hover:shadow-[0px_8px_32px_rgba(206,254,85,0.15)] ${plan.featured ? 'border-brand-main border-[3px] lg:scale-105 z-10' : 'border-[#1A1A1A] hover:border-brand-main'}`}>
                <div className="mb-12">
                   <div className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-brand-main mb-4">{plan.name}</div>
                   <div className="flex items-baseline gap-1">
                      {plan.price !== 'Let\'s talk.' && <span className="font-display text-[24px] font-bold text-white">$</span>}
                      <span className={`${plan.price === 'Let\'s talk.' ? 'text-[32px] sm:text-[40px] md:text-[48px]' : 'text-[42px] sm:text-[50px] md:text-[65px]'} font-display font-bold text-white tracking-tighter`}>{plan.price}</span>
                      {plan.price !== 'Let\'s talk.' && <span className="text-[14px] font-medium text-text-muted ml-2">/ project</span>}
                   </div>
                </div>

                <p className="text-[15px] md:text-[16px] text-text-body/80 mb-12 leading-relaxed h-[72px] overflow-hidden">
                   {plan.description}
                </p>

                <div className="space-y-6 mb-16 flex-grow">
                   {plan.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-brand-main/10 flex items-center justify-center text-brand-main shrink-0">
                           <Check size={12} />
                        </div>
                        <span className="text-[15px] font-medium text-text-body leading-tight">{feature}</span>
                     </div>
                   ))}
                </div>

                <Link href="/contact" className="w-full">
                  <Button className={`w-full h-[56px] rounded-full text-[12px] font-bold uppercase tracking-widest transition-all ${plan.featured ? 'btn-primary shadow-[0_0_30px_rgba(206,254,85,0.2)]' : 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40'}`}>
                     {plan.cta}
                  </Button>
                </Link>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
