'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  subtext: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const fixedPlans: Plan[] = [
  {
    id: "01",
    name: "BASIC · START PRESENCE",
    price: "$500",
    description: "A clear, well-structured website to establish your business online and give visitors a reason to reach out.",
    subtext: "Starting from · One-time project cost",
    features: [
      "Up to 5 pages",
      "Mobile responsive layout",
      "Contact form integration",
      "Basic SEO setup",
      "2 rounds of revisions"
    ],
    cta: "Start your project"
  },
  {
    id: "02",
    name: "STANDARD · GROWTH WEBSITE",
    price: "$1,200",
    description: "A strategically built website designed to communicate your value clearly, earn trust, and convert visitors into clients.",
    subtext: "Starting from · One-time project cost",
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "Strategy session included",
      "1 month of support"
    ],
    featured: true,
    cta: "Start your project"
  },
  {
    id: "03",
    name: "PREMIUM · HIGH-CONVERTING",
    price: "$2,500",
    description: "A complete strategic website with messaging, design, and conversion fully optimized for business growth.",
    subtext: "Starting from · One-time project cost",
    features: [
      "Unlimited pages",
      "Full strategy & copywriting",
      "Conversion tracking setup",
      "1 month of priority support",
      "Fast-track delivery"
    ],
    cta: "Start your project"
  }
];

const customPlan: Plan = {
  id: "04",
  name: "CUSTOM · PROJECTS",
  price: "Let's talk",
  description: "For businesses with specific requirements. We scope the project around your goals, timeline, and budget.",
  subtext: "Based on budget & timeline",
  features: [
    "Custom page structure & layouts",
    "Third-party API & database integrations",
    "Dedicated strategy & copywriting",
    "Extended post-launch support"
  ],
  cta: "Discuss your project"
};

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'fixed' | 'custom'>('fixed');

  return (
    <section id="pricing" className="py-24 md:py-36 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#33FF0D]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#0000EE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-20">
        
        {/* Money Icon */}
        <div className="relative w-28 h-28 mx-auto mb-6 select-none">
          <Image 
            src="/assets/icons3d/money.avif" 
            alt="Money Icon" 
            fill 
            className="object-contain" 
            priority
            unoptimized
          />
        </div>

        {/* Header Block */}
        <h2 className="font-display text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] text-center font-bold tracking-tight uppercase mb-4 leading-none">
          SIMPLE <span className="text-[#33FF0D]">PRICING</span>
        </h2>
        
        <p className="font-body text-[#A4A4A4] text-[16px] sm:text-[18px] max-w-xl mx-auto text-center leading-[1.4] mb-16">
          Transparent pricing based on what your business actually needs. Every package is built around one goal: a website that performs.
        </p>

        {/* Toggle tabs */}
        <div className="flex justify-center items-center gap-0 mb-16 max-w-md mx-auto border border-[#575757]/30 p-1 bg-[#0D0D0D] select-none">
          <button 
            onClick={() => setActiveTab('fixed')}
            className={`flex-1 h-[50px] font-mono text-[12px] uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 border-none rounded-none font-semibold ${
              activeTab === 'fixed' 
                ? 'bg-[#33FF0D] text-black' 
                : 'bg-transparent text-[#A4A4A4] hover:text-white'
            }`}
          >
            One-time project
          </button>
          <button 
            onClick={() => setActiveTab('custom')}
            className={`flex-1 h-[50px] font-mono text-[12px] uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 border-none rounded-none font-semibold ${
              activeTab === 'custom' 
                ? 'bg-[#33FF0D] text-black' 
                : 'bg-transparent text-[#A4A4A4] hover:text-white'
            }`}
          >
            Custom project
          </button>
        </div>

        {/* Plans Container */}
        <div className="space-y-8 max-w-[1000px] mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'fixed' ? (
              <motion.div
                key="fixed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {fixedPlans.map((plan) => (
                  <div 
                    key={plan.name}
                    className={`border transition-all duration-500 bg-[#0D0D0D] flex flex-col md:flex-row items-stretch rounded-none relative overflow-hidden group ${
                      plan.featured 
                        ? 'border-[#33FF0D] border-2 shadow-[0_0_30px_rgba(51,255,13,0.12)]' 
                        : 'border-[#575757]/30 hover:border-[#33FF0D] hover:shadow-[0_0_30px_rgba(51,255,13,0.08)]'
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute top-0 right-0 bg-[#33FF0D] text-black text-[10px] font-bold font-mono tracking-widest px-4 py-1 select-none">
                        RECOMMENDED
                      </div>
                    )}
                    
                    {/* Left Column (Info) */}
                    <div className="flex-grow p-8 md:p-10 flex flex-col justify-between md:w-2/3">
                      <div>
                        {/* ID & Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-mono text-[11px] text-[#33FF0D] bg-[#33FF0D]/5 border border-[#33FF0D]/10 px-2 py-0.5 select-none">
                            {plan.id}
                          </span>
                          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] text-[#A4A4A4] group-hover:text-white transition-colors">
                            {plan.name}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] sm:text-[16px] text-text-body leading-relaxed max-w-xl mb-8">
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing block & Button */}
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-[48px] sm:text-[60px] font-bold text-white tracking-tighter leading-none">
                              {plan.price}
                            </span>
                          </div>
                          <span className="text-[12px] font-mono text-[#A4A4A4] uppercase tracking-wider block mt-1">
                            {plan.subtext}
                          </span>
                        </div>

                        <Link href="/contact" className="shrink-0">
                          <div className={`inline-flex items-center justify-center h-[50px] px-8 rounded-none text-[12px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                            plan.featured 
                              ? 'btn-primary shadow-[0_0_20px_rgba(51,255,13,0.2)]' 
                              : 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40'
                          }`}>
                            {plan.cta}
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column (Features) */}
                    <div className="md:w-1/3 bg-[#070707] p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#575757]/20 shrink-0">
                      <span className="font-body text-[10px] font-bold text-[#505250] uppercase tracking-[0.15em] block mb-6">
                        Included Features
                      </span>
                      <ul className="space-y-4">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#33FF0D] shrink-0 mr-3 mt-2" />
                            <span className="text-[14px] font-medium text-white/90 leading-tight">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="custom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="border border-[#575757]/30 bg-[#0D0D0D] flex flex-col md:flex-row items-stretch rounded-none relative overflow-hidden group hover:border-[#33FF0D] hover:shadow-[0_0_30px_rgba(51,255,13,0.08)] transition-all duration-500">
                  {/* Left Column (Info) */}
                  <div className="flex-grow p-8 md:p-10 flex flex-col justify-between md:w-2/3">
                    <div>
                      {/* ID & Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-[11px] text-[#33FF0D] bg-[#33FF0D]/5 border border-[#33FF0D]/10 px-2 py-0.5 select-none">
                          {customPlan.id}
                        </span>
                        <span className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] text-[#A4A4A4] group-hover:text-white transition-colors">
                          {customPlan.name}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[15px] sm:text-[16px] text-text-body leading-relaxed max-w-xl mb-8">
                        {customPlan.description}
                      </p>
                    </div>

                    {/* Pricing block & Button */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-[48px] sm:text-[60px] font-bold text-white tracking-tighter leading-none">
                            {customPlan.price}
                          </span>
                        </div>
                        <span className="text-[12px] font-mono text-[#A4A4A4] uppercase tracking-wider block mt-1">
                          {customPlan.subtext}
                        </span>
                      </div>

                      <Link href="/contact" className="shrink-0">
                        <div className="inline-flex items-center justify-center h-[50px] px-8 rounded-none text-[12px] font-bold uppercase tracking-widest bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 cursor-pointer">
                          {customPlan.cta}
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (Features) */}
                  <div className="md:w-1/3 bg-[#070707] p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#575757]/20 shrink-0">
                    <span className="font-body text-[10px] font-bold text-[#505250] uppercase tracking-[0.15em] block mb-6">
                      Custom Options
                    </span>
                    <ul className="space-y-4">
                      {customPlan.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[#33FF0D] shrink-0 mr-3 mt-2" />
                          <span className="text-[14px] font-medium text-white/90 leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
