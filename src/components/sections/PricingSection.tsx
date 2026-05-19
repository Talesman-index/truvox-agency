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
    <section id="pricing" className="py-24 md:py-32 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge variant="lime" rotation={-2} className="mb-8">Pricing</Badge>
              <h2 className="text-[24px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-medium text-text-heading leading-tight md:leading-[1.1] tracking-tight break-words">
                Clear pricing. <span className="gradient-text italic pr-[0.1em]">No hidden fees.</span>
              </h2>
              <p className="mt-6 text-[18px] text-text-muted leading-relaxed">
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
              <div className={`p-8 xl:p-12 rounded-[40px] border transition-all duration-500 bg-bg-card flex flex-col h-full hover:shadow-glow ${plan.featured ? 'border-brand-main border-[3px] lg:scale-105 z-10' : 'border-border-subtle hover:border-brand-main'}`}>
                <div className="mb-12">
                   <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-brand-main mb-4">{plan.name}</div>
                   <div className="flex items-baseline gap-1">
                      {plan.price !== 'Let\'s talk.' && <span className="text-[20px] md:text-[24px] font-bold text-text-heading">$</span>}
                      <span className={`${plan.price === 'Let\'s talk.' ? 'text-[32px] sm:text-[40px] md:text-[48px]' : 'text-[42px] sm:text-[50px] md:text-[65px]'} font-bold text-text-heading tracking-tighter`}>{plan.price}</span>
                      {plan.price !== 'Let\'s talk.' && <span className="text-[16px] md:text-[18px] font-medium text-text-muted ml-2">/ project</span>}
                   </div>
                </div>

                <p className="text-[16px] md:text-[17px] text-text-body mb-12 leading-relaxed h-[72px] overflow-hidden">
                   {plan.description}
                </p>

                <div className="space-y-6 mb-16 flex-grow">
                   {plan.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-brand-main/10 flex items-center justify-center text-brand-main shrink-0">
                           <Check size={14} />
                        </div>
                        <span className="text-[15px] md:text-[16px] font-medium text-text-body leading-tight">{feature}</span>
                     </div>
                   ))}
                </div>

                <Link href="/contact" className="w-full">
                  <Button className={`w-full h-[60px] md:h-[64px] rounded-full text-[16px] font-bold transition-all ${plan.featured ? 'bg-brand-main text-bg-primary hover:bg-brand-hover shadow-[0_0_20px_rgba(0,255,133,0.3)]' : 'bg-transparent border border-brand-main text-brand-main hover:bg-brand-main hover:text-bg-primary'}`}>
                     {plan.cta} <ArrowRight className="ml-2" size={20} />
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
