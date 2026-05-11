'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Basic',
    tagline: 'Start Presence',
    price: '500',
    description: 'A simple and clean website to establish your online presence.',
    features: ['3–5 pages', 'Mobile responsive', 'Contact integration', 'Basic SEO'],
    featured: false,
    icon: <div className="w-12 h-12 bg-sectionAlt rounded-2xl flex items-center justify-center text-primary"><Check size={24} /></div>
  },
  {
    name: 'Standard',
    tagline: 'Growth Website',
    price: '1,200',
    description: 'A structured website designed to attract and guide clients.',
    features: ['Up to 10 pages', 'Custom UI/UX Design', 'Advanced SEO', 'Strategy consultation'],
    featured: true,
    icon: <div className="w-12 h-12 bg-brand-main rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-main/20"><Zap size={24} /></div>
  },
  {
    name: 'Premium',
    tagline: 'High-Converting Experience',
    price: '2,500',
    description: 'A complete digital experience with strategy, design, and optimization.',
    features: ['Unlimited pages', 'Full strategy & copy', 'Conversion tracking', '1 month support'],
    featured: false,
    icon: <div className="w-12 h-12 bg-dark rounded-2xl flex items-center justify-center text-white"><Check size={24} strokeWidth={3} /></div>
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-40 px-6 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center mb-32 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-main/10 text-brand-main px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border border-brand-main/20"
        >
          Investment
        </motion.div>
        
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-primary"
          >
            Simple, <span className="gradient-text">clear</span> pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted max-w-2xl mx-auto"
          >
            Choose the package that fits your stage of growth. No hidden fees, just results.
          </motion.p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`relative flex flex-col p-10 md:p-14 rounded-[60px] border-2 transition-all duration-500 ${
              plan.featured 
                ? 'bg-dark text-white border-brand-main border-t-[3px] shadow-elevation5 scale-105 z-10' 
                : 'bg-white text-primary border-light hover:border-brand-main shadow-elevation2'
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-main text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                Most Popular
              </div>
            )}

            <div className="mb-10">{plan.icon}</div>

            <div className="space-y-2 mb-10">
              <div className={`font-black text-[10px] uppercase tracking-[0.3em] ${plan.featured ? 'text-brand-light' : 'text-muted'}`}>
                {plan.tagline}
              </div>
              <h3 className="text-4xl font-black tracking-tight">{plan.name}</h3>
            </div>

            <div className="flex items-baseline gap-2 mb-10">
              <span className={`text-sm font-black uppercase tracking-widest ${plan.featured ? 'text-white/40' : 'text-muted'}`}>from</span>
              <span className="text-6xl font-black tracking-tighter">${plan.price}</span>
            </div>

            <p className={`text-lg leading-relaxed mb-12 ${plan.featured ? 'text-white/60' : 'text-body'}`}>
              {plan.description}
            </p>

            <div className="space-y-6 mb-16 flex-grow">
              {plan.features.map(feature => (
                <div key={feature} className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? 'bg-brand-main text-white' : 'bg-sectionAlt text-brand-main'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className={`font-bold text-sm ${plan.featured ? 'text-white/80' : 'text-primary'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant={plan.featured ? 'primary' : 'secondary'} 
              className={`w-full py-6 text-lg rounded-2xl ${!plan.featured && 'border-2'}`}
            >
              Get a Quote
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

