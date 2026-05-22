'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="p-7 bg-[#0D0D18] rounded-[12px] border border-[#1A1A1A] flex flex-col cursor-pointer group hover:border-brand-main transition-all duration-300"
    >
      <div className="flex items-center justify-between w-full gap-4">
        <span className="text-[16px] md:text-[18px] font-medium text-white/90 group-hover:text-white transition-colors">{question}</span>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-main group-hover:text-[#000000] group-hover:border-brand-main transition-all duration-300 shrink-0">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus size={18} />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, marginTop: isOpen ? 16 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-[15px] md:text-[16px] text-text-muted leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Truvox Agency",
    "description": "Web Design for Small Businesses",
    "url": "https://truvox.studio",
    "logo": "https://truvox.studio/assets/truvox-logo.png",
    "image": "https://truvox.studio/assets/bg/hero-team.jpg",
    "telephone": "",
    "email": "hello@truvox.studio",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.8283,
        "longitude": -98.5795
      },
      "geoRadius": "4000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Creation" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Redesign" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategy" }}
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
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a free 30-minute call. We'll talk about your business and figure out together what your website needs. No commitment, no pressure."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects take between 2 and 4 weeks from our first call to launch. It depends on how many pages and how quickly you can provide content."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide the content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can guide you on what to write, or write it for you as part of the Growth package. Either way, we'll make sure the final text is clear and effective."
        }
      },
      {
        "@type": "Question",
        "name": "What if I already have a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can redesign it from scratch or improve what's already there. We'll be honest about which option makes more sense for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer support after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Growth plan includes one month of support. After that, we offer simple maintenance packages if you need ongoing help."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "How do we get started?",
      a: "Book a free 30-minute call. We'll talk about your business and figure out together what your website needs. No commitment, no pressure."
    },
    {
      q: "How long does a project take?",
      a: "Most projects take between 2 and 4 weeks from our first call to launch. It depends on how many pages and how quickly you can provide content."
    },
    {
      q: "Do I need to provide the content?",
      a: "We can guide you on what to write, or write it for you as part of the Growth package. Either way, we'll make sure the final text is clear and effective."
    },
    {
      q: "What if I already have a website?",
      a: "We can redesign it from scratch or improve what's already there. We'll be honest about which option makes more sense for your situation."
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes. The Growth plan includes one month of support. After that, we offer simple maintenance packages if you need ongoing help."
    }
  ];

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
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-4 md:px-6 overflow-hidden bg-black">
        {/* Fullscreen Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/assets/bg/hero-team.jpg" 
            alt="Workspace Background" 
            fill 
            className="object-cover opacity-15 grayscale pointer-events-none"
            priority
          />
          {/* Subtle gradient overlay to blend into black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>

        {/* Left Floating Blocks */}
        <div className="absolute left-6 md:left-12 lg:left-20 top-1/4 hidden md:block opacity-[0.06] pointer-events-none z-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-end">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/10"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
            </div>
          </div>
        </div>

        {/* Right Floating Blocks */}
        <div className="absolute right-6 md:right-12 lg:right-20 top-1/3 hidden md:block opacity-[0.06] pointer-events-none z-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/10"></div>
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
            </div>
            <div className="flex gap-2 justify-start">
              <div className="w-14 h-14 md:w-20 md:h-20 border border-white rounded-sm bg-white/5"></div>
            </div>
          </div>
        </div>

        <motion.div
  className="max-w-[1200px] mx-auto w-full relative z-20 flex flex-col items-center text-center mt-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
          
          <div className="relative mb-8 max-w-5xl">
            <h1 className="sr-only">Web Design for Small Businesses</h1>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-2 md:gap-4 mb-4 px-4"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-mono text-brand-main text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-[0.05em] uppercase leading-none"
            >
              Websites Designed
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-display text-white text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-tight"
            >
              To Attract More Clients
            </motion.span>
          </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-[16px] md:text-[20px] text-text-body/80 max-w-2xl mb-12 leading-relaxed px-4"
          >
            We&apos;re Truvox, a small web design studio. We build clean, professional websites that help businesses look credible and attract more clients.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-6 z-30"
          >
            <Link href="/contact">
              <Button className="btn-primary h-[54px] px-10 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(206,254,85,0.2)]">
                Book a Free Call
              </Button>
            </Link>
            <Link href="#projects">
              <Button className="btn-secondary h-[54px] px-10 rounded-full text-[12px] font-bold uppercase tracking-widest">
                See Our Work
              </Button>
            </Link>
          </motion.div>
          
          {/* Proof line under the CTAs */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-[12px] text-text-muted font-bold uppercase tracking-[0.2em] mb-12"
          >
            2 businesses served · Remote Studio · Available now
          </motion.p>
        </motion.div>

        {/* Scroll Down Button */}
        <Link href="#about" passHref>
<motion.button
  whileHover={{ scale: 1.05 }}
  animate={{ y: [0, -4, 0] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-black/20 backdrop-blur-sm text-white/60 hover:text-brand-main hover:border-brand-main hover:bg-black/40 transition-all duration-300 mt-24"
>
  <motion.span className="text-xl font-light" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>↓</motion.span>
</motion.button>
        </Link>
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-main/5 blur-[150px] rounded-full pointer-events-none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-main/10 blur-[150px] rounded-full pointer-events-none"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </section>

      {/* MARQUEE TICKER */}
      <section className="overflow-hidden bg-black border-y border-white/5 py-10 md:py-14 select-none">
        <div className="animate-marquee">
          {/* First set of words */}
          <div className="flex items-center gap-16 md:gap-24 text-[24px] sm:text-[36px] md:text-[54px] font-mono text-brand-main tracking-[0.2em] font-bold pr-16 md:pr-24">
            <span>DESIGN</span>
            <span className="text-white/20">/</span>
            <span>DEVELOPMENT</span>
            <span className="text-white/20">/</span>
            <span>STRATEGY</span>
            <span className="text-white/20">/</span>
            <span>GROWTH</span>
            <span className="text-white/20">/</span>
          </div>
          {/* Second set of words (for seamless scrolling) */}
          <div className="flex items-center gap-16 md:gap-24 text-[24px] sm:text-[36px] md:text-[54px] font-mono text-brand-main tracking-[0.2em] font-bold pr-16 md:pr-24" aria-hidden="true">
            <span>DESIGN</span>
            <span className="text-white/20">/</span>
            <span>DEVELOPMENT</span>
            <span className="text-white/20">/</span>
            <span>STRATEGY</span>
            <span className="text-white/20">/</span>
            <span>GROWTH</span>
            <span className="text-white/20">/</span>
          </div>
        </div>
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
      <section className="py-24 md:py-40 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-main/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-6 space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <Badge variant="lime" rotation={2}>FAQ</Badge>
                  <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.15] break-words">
                    <span className="font-mono text-brand-main text-[14px] uppercase tracking-[0.2em] block mb-4 font-bold">
                      Common
                    </span>
                    <span className="font-display">
                      Questions
                    </span>
                  </h2>
                  <p className="text-text-muted text-[18px] max-w-md">
                    We believe in transparency. Here are answers to the questions we get most often.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.1}>
                    <FaqAccordion question={faq.q} answer={faq.a} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-6">
              <Reveal delay={0.4}>
                <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[12px] overflow-hidden shadow-2xl border border-white/5 group">
                  <Image 
                    src="/assets/bg/faq-minimal-3d.png" 
                    alt="Truvox FAQ Info" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-8 left-8">
                    <Badge variant="lime" rotation={-5} className="px-6 py-2 shadow-xl">Support & Care</Badge>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-32 md:py-48 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center space-y-12 relative z-10">
          <Reveal>
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold text-white tracking-tight leading-[1.15] break-words text-center px-4">
              <span className="font-mono text-brand-main text-[14px] sm:text-[16px] uppercase tracking-[0.2em] block mb-4 font-bold">
                Ready to Build
              </span>
              <span className="font-display block">
                A Website That Works?
              </span>
            </h2>
            <p className="text-text-muted text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed mt-6">
              Let&apos;s start with a free 30-minute call. No pitch, no commitment, just an honest conversation about what your business needs.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="flex justify-center mt-12">
              <Link href="/contact">
                <Button className="btn-primary h-[56px] px-10 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(206,254,85,0.2)]">
                  <span>Book My Free Call</span>
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Rotating Sparkle Icon */}
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
