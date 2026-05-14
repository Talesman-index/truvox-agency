'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import Image from "next/image";
import { Check, X as Close, ArrowRight, Plus } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Truvox Agency",
    "description": "Web design agency for small businesses in Charlotte, NC",
    "url": "https://truvox.studio",
    "logo": "https://truvox.studio/assets/logo.png",
    "image": "https://truvox.studio/assets/bg/hero-team.jpg",
    "telephone": "",
    "email": "hello@truvox.studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2271,
      "longitude": -80.8431
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "Charlotte"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Design & UI/UX" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & Mobile Development" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing & Data Strategy" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Systems" }}
      ]
    },
    "sameAs": []
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do we start a project together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start by booking a free consultation. We'll discuss your business goals, budget, and timeline to define the right approach for your project."
        }
      },
      {
        "@type": "Question",
        "name": "What is your high-fidelity design philosophy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We believe every pixel matters. Our designs are strategic, not decorative — built to guide visitors toward action and reflect your brand's true value."
        }
      },
      {
        "@type": "Question",
        "name": "How do you use data to drive design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We analyze user behavior, conversion patterns, and competitor benchmarks to make every design decision backed by real-world performance data."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide long-term support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Growth and Enterprise plans include ongoing support. We also offer flexible maintenance packages for all clients after launch."
        }
      }
    ]
  };

  return (
    <main className="flex-grow bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* HERO SECTION - DARK & NEON GREEN STYLE */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 md:pt-64 pb-20 px-4 md:px-6 overflow-hidden bg-bg-dark">
        <div className="max-w-[1200px] mx-auto w-full relative z-20 flex flex-col items-center text-center">
          
          <div className="relative mb-16">
            <h1 className="sr-only">Web Design Agency for Small Businesses in Charlotte, NC</h1>
            <h2 className="text-5xl md:text-6xl lg:text-[90px] font-medium text-white leading-[1.0] tracking-tight mb-4 break-words px-4">
              Elevating Digital Authority Through <span className="gradient-text italic">Strategic Design.</span>
            </h2>
            
            {/* Floating Badges */}
            <div className="absolute -top-36 left-4 md:-top-28 md:left-2 lg:-left-12 xl:-left-24 hidden md:block">
              <Badge variant="lime" rotation={-12} className="text-[12px] lg:text-[14px] px-4 lg:px-6 py-1.5 lg:py-2">Product Strategy</Badge>
            </div>
            <div className="absolute -top-16 right-4 md:-top-20 md:right-2 lg:-right-12 xl:-right-24 hidden md:block">
              <Badge variant="pink" rotation={8} className="text-[12px] lg:text-[14px] px-4 lg:px-6 py-1.5 lg:py-2">High-Fidelity</Badge>
            </div>
            <div className="absolute -bottom-24 right-4 md:-bottom-20 md:right-1/4 hidden md:block">
              <Badge variant="sage" rotation={-5} className="text-[12px] lg:text-[14px] px-4 lg:px-6 py-1.5 lg:py-2">Data-Driven</Badge>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-[18px] md:text-[22px] text-text-body/75 max-w-2xl mb-12 leading-relaxed"
          >
            We craft premium digital experiences that translate your vision into trust, and trust into measurable growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1100px] aspect-[16/8] rounded-[40px] overflow-hidden mt-0 mb-20 shadow-2xl border border-border-subtle"
          >
             <Image 
               src="/assets/bg/hero-team.jpg" 
               alt="Truvox Team" 
               fill 
               className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"></div>
      </section>



      {/* ABOUT SECTION */}
      <AboutSection />

      {/* SERVICES SECTION */}
      <ProcessSection />


      {/* PORTFOLIO SECTION */}
      <PortfolioSection />

      {/* METHODOLOGY SECTION */}
      <MethodologySection />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FAQ SECTION */}
      <section className="py-24 md:py-40 px-6 bg-bg-sectionAlt relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-main/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-6 space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <Badge variant="pink" rotation={2}>FAQ</Badge>
                  <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-text-heading leading-[1.1] tracking-tight">
                    Addressing Concerns With <br />
                    <span className="gradient-text italic">Strategic Clarity.</span>
                  </h2>
                  <p className="text-text-muted text-[18px] max-w-md">
                    We believe in transparency. Here are answers to the questions we get most often.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {[
                  "How do we start a project together?",
                  "What is your high-fidelity design philosophy?",
                  "How do you use data to drive design?",
                  "Do you provide long-term support?"
                ].map((q, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <div className="p-7 bg-bg-card/50 backdrop-blur-sm rounded-[28px] border border-white/5 flex items-center justify-between cursor-pointer group hover:border-brand-main/40 hover:bg-bg-card transition-all duration-300">
                      <span className="text-[16px] md:text-[18px] font-medium text-white/90 group-hover:text-white transition-colors">{q}</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-main group-hover:text-bg-primary group-hover:border-brand-main transition-all duration-300">
                        <Plus size={18} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-6">
              <Reveal delay={0.4}>
                <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border border-white/5 group">
                  <Image 
                    src="/assets/bg/faq-minimal-3d.png" 
                    alt="Truvox Digital Innovation" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-8 left-8">
                    <Badge variant="lime" rotation={-5} className="px-6 py-2 shadow-xl">Digital Innovation</Badge>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-32 md:py-48 px-6 bg-bg-dark relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center space-y-12 relative z-10">
          <Reveal>
            <h2 className="text-[32px] md:text-[48px] lg:text-[70px] text-balance tracking-tight mb-12 break-words px-4">
              Ready To Build Your <br /><span className="gradient-text italic pr-[0.1em]">Digital Authority?</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex justify-center">
              <Button className="bg-brand-main text-bg-primary px-12 h-[64px] rounded-full text-[18px] font-bold hover:bg-brand-hover transition-all">
                Start My Project <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
          </Reveal>

          {/* Rotating Sun/Sparkle Icon */}
          <div className="flex justify-center mt-20">
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 text-brand-main"
             >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                   <path d="M50 0L55.9 34.1L90 44.1L55.9 54.1L50 100L44.1 65.9L10 55.9L44.1 45.9L50 0Z" />
                   <circle cx="50" cy="50" r="10" className="fill-bg-dark" />
                </svg>
             </motion.div>
          </div>
        </div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

    </main>
  );
}
