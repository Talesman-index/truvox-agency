'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: '01',
    title: 'UI / UX DESIGN',
    label: 'CLARITY BY DESIGN',
    description:
      'We simplify how users interact with your business. Clear layouts, reduced friction, and intuitive flows that help visitors understand your offer and take action, without guesswork.',
    tags: ['User Research', 'Information Architecture', 'Interaction Design', 'Usability Optimization'],
    icon: '/assets/icons3d/design.avif',
    accent: '#33FF0D',
  },
  {
    id: '02',
    title: 'WEBSITE CREATION',
    label: 'BUILT TO CONVERT',
    description:
      'We build websites around your business goals, not the other way around. Every page, section, and call-to-action is structured to communicate clearly and move visitors toward a decision.',
    tags: ['Custom Layout', 'Mobile Responsive', 'SEO Structure', 'Contact Integration'],
    icon: '/assets/icons3d/zJzgsbzn1lS3rCHLY4bpPxQ35g.avif',
    accent: '#33FF0D',
  },
  {
    id: '03',
    title: 'WEBSITE REDESIGN',
    label: 'BUSINESS UPGRADE',
    description:
      'Your redesign should feel like a business upgrade, not a visual refresh. We audit what holds you back, improve your communication, remove friction, and rebuild trust from the first scroll.',
    tags: ['Communication Audit', 'Messaging Clarity', 'Modern Experience', 'Better Page Speed'],
    icon: '/assets/icons3d/48ozxNxjmhGkuMCjHtIthSsL8.avif',
    accent: '#33FF0D',
  },
  {
    id: '04',
    title: 'STRATEGY',
    label: 'FOUNDATION FIRST',
    description:
      'Strategy is the foundation behind every website that performs. Before a single page is designed, we define your messaging, audience, structure, and conversion objectives.',
    tags: ['Messaging Framework', 'Content Structure', 'Conversion Planning', 'Customer Journey Map'],
    icon: '/assets/icons3d/cdmRdvAtWOA2Auwbo7D1WXEj8b0.avif',
    accent: '#33FF0D',
  },
];

const steps = [
  { number: '01', title: 'Discovery', desc: 'We start with a focused conversation about your business, your audience, and what your website needs to accomplish.' },
  { number: '02', title: 'Strategy', desc: 'Before design, we define your messaging, structure your content, and map the user journey.' },
  { number: '03', title: 'Design', desc: 'We design a website that reflects your brand and communicates clearly. No generic templates.' },
  { number: '04', title: 'Development', desc: 'We build the website clean, fast, and responsive, structured for search engines from day one.' },
  { number: '05', title: 'Launch', desc: 'We review every detail together before going live. We remain available after launch as your business evolves.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden bg-black border-b border-white/5">

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#33FF0D]/4 blur-[180px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1200px] mx-auto w-full text-center relative z-10"
        >
          {/* Label */}
          <span className="font-mono text-[#33FF0D] text-[12px] uppercase tracking-[0.3em] block mb-8">
            // What we do
          </span>

          {/* H1 */}
          <h1 className="font-display text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] text-white leading-[1.0] tracking-normal uppercase mb-10">
            BUILT TO<br />
            <span className="text-[#33FF0D]">COMMUNICATE.</span>
          </h1>

          <p className="font-body text-[#A4A4A4] text-[17px] sm:text-[20px] max-w-2xl mx-auto leading-[1.5] mb-14">
            Every service we offer starts with strategy. We define{' '}
            <span className="text-white font-medium">what needs to be communicated</span>{' '}
            before designing how it looks.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/contact" className="relative group block">
              <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <div className="flex items-center bg-[#33FF0D] text-black font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-[#2DD90D] hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border-none font-semibold rounded-none relative z-10">
                <span className="mr-4">Start your project</span>
                <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">→</span>
              </div>
            </Link>
            <Link href="#services" className="relative group block">
              <div className="flex items-center bg-black text-white border border-[#575757] hover:border-white/40 font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer rounded-none">
                <span className="mr-4">View capabilities</span>
                <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">→</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES LIST ─────────────────────────────────────────────────── */}
      <section id="services" className="py-32 md:py-48 px-6 bg-black border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">

          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-6 mb-20">
              <span className="font-mono text-[#33FF0D] text-[11px] uppercase tracking-[0.3em]">// 04 services</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
          </Reveal>

          {/* Service rows */}
          <div className="space-y-0">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1}>
                <div className={`group grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-[#575757]/20 py-16 md:py-20 hover:border-[#33FF0D]/30 transition-colors duration-500 ${i === services.length - 1 ? 'border-b border-[#575757]/20' : ''}`}>

                  {/* Left: number + title */}
                  <div className="lg:col-span-5 flex flex-col justify-between mb-10 lg:mb-0 pr-0 lg:pr-16">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-[#33FF0D] text-[11px] tracking-[0.2em]">[ {service.id} ]</span>
                        <span className="font-mono text-[#505250] text-[10px] uppercase tracking-[0.2em] border border-[#575757]/30 px-2 py-0.5">{service.label}</span>
                      </div>
                      <h2 className="font-display text-[40px] sm:text-[52px] md:text-[60px] text-white leading-[1.0] tracking-normal uppercase group-hover:text-[#EAEAEA] transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Middle: description + tags */}
                  <div className="lg:col-span-5 flex flex-col justify-center mb-10 lg:mb-0 pr-0 lg:pr-8">
                    <p className="font-body text-[#A4A4A4] text-[16px] md:text-[17px] leading-[1.6] mb-8">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#505250] border border-[#575757]/25 px-3 py-1.5 group-hover:border-[#33FF0D]/20 group-hover:text-[#A4A4A4] transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: 3D icon */}
                  <div className="lg:col-span-2 flex items-center justify-start lg:justify-end">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4 + i * 0.5, ease: 'easeInOut' }}
                      className="relative w-20 h-20 md:w-28 md:h-28 filter drop-shadow-[0_10px_30px_rgba(51,255,13,0.08)] group-hover:drop-shadow-[0_15px_40px_rgba(51,255,13,0.2)] transition-all duration-500"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </motion.div>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33FF0D]/4 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* Header */}
          <Reveal>
            <div className="flex items-center gap-6 mb-6">
              <span className="font-mono text-[#33FF0D] text-[11px] uppercase tracking-[0.3em]">// How we work</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <h2 className="font-display text-[48px] sm:text-[68px] md:text-[80px] text-white leading-[1.0] tracking-normal uppercase mb-6">
              A CLEAR PROCESS.<br />
              <span className="text-[#33FF0D]">NO GUESSWORK.</span>
            </h2>
            <p className="font-body text-[#A4A4A4] text-[17px] max-w-xl leading-[1.5] mb-20">
              Strategy and design happen in the right order. Every step is designed to reduce uncertainty and ensure the final website performs.
            </p>
          </Reveal>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 border-t border-[#575757]/20 py-10 md:py-12 group hover:border-[#33FF0D]/20 transition-colors duration-300 ${i === steps.length - 1 ? 'border-b border-[#575757]/20' : ''}`}>
                  <div className="md:col-span-1">
                    <span className="font-mono text-[#33FF0D] text-[12px] tracking-[0.2em]">[ {step.number} ]</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-[28px] md:text-[36px] text-white uppercase tracking-normal group-hover:text-[#EAEAEA] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7 md:pl-8">
                    <p className="font-body text-[#A4A4A4] text-[15px] md:text-[16px] leading-[1.6] pt-1">
                      {step.desc}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-end">
                    <span className="text-[#33FF0D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[20px]">→</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Timeframe */}
          <Reveal delay={0.3}>
            <div className="mt-16 pt-10 border-t border-white/5 flex items-center gap-4">
              <div className="w-2 h-2 bg-[#33FF0D] rotate-45 shrink-0" />
              <p className="font-body text-[#A4A4A4] text-[16px]">
                Most projects go from <span className="text-white font-medium">strategy call to launch</span> in 2 to 4 weeks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PRICING TEASER ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-black border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#575757]/20">
              {[
                { id: '01', name: 'BASIC', price: '$500', desc: 'Establish your presence with a clear, well-structured website.', href: '/#pricing' },
                { id: '02', name: 'STANDARD', price: '$1,200', desc: 'A strategic website built to communicate your value and convert visitors.', href: '/#pricing', featured: true },
                { id: '03', name: 'PREMIUM', price: '$2,500', desc: 'A complete strategic website with messaging, design, and conversion optimized.', href: '/#pricing' },
              ].map((plan, i) => (
                <Link
                  key={plan.id}
                  href={plan.href}
                  className={`group relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-[#575757]/20 last:border-0 hover:bg-white/2 transition-all duration-300 ${plan.featured ? 'bg-[#0D0D0D]' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#33FF0D]" />
                  )}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span className="font-mono text-[#505250] text-[10px] uppercase tracking-[0.2em] block mb-2">[ {plan.id} ]</span>
                      <span className="font-mono text-[#33FF0D] text-[11px] uppercase tracking-[0.2em]">{plan.name}</span>
                    </div>
                    <span className="font-display text-[36px] text-white">{plan.price}</span>
                  </div>
                  <p className="font-body text-[#A4A4A4] text-[14px] leading-relaxed mb-8">{plan.desc}</p>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#505250] group-hover:text-[#33FF0D] transition-colors duration-300 flex items-center gap-2">
                    View details <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#33FF0D]/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#33FF0D]/3 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 text-center">

          {/* Floating pixel logo */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative w-16 h-32 md:w-20 md:h-40 mx-auto overflow-hidden filter drop-shadow-[0_15px_30px_rgba(51,255,13,0.2)] -mb-8"
          >
            <Image src="/truvox_pixel.png" alt="Truvox" fill className="object-contain" priority />
          </motion.div>

          <Reveal>
            <h2 className="font-display text-[56px] sm:text-[72px] md:text-[96px] text-white leading-[1.0] uppercase tracking-normal mb-6">
              LET'S BUILD<br /><span className="text-[#33FF0D]">SOMETHING CLEAR.</span>
            </h2>
            <p className="font-body text-[#A4A4A4] text-[17px] max-w-xl mx-auto leading-[1.5] mb-14">
              Tell us about your business. We'll tell you honestly what your website needs to communicate and how we'll build it.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/contact" className="relative group block">
                <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <div className="flex items-center bg-[#33FF0D] text-black font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-[#2DD90D] hover:shadow-[0_8px_20px_rgba(51,255,13,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-semibold rounded-none relative z-10">
                  <span className="mr-4">Start your project</span>
                  <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px] leading-none">→</span>
                </div>
              </Link>

              <Link href="/contact" className="relative group block">
                <div className="flex items-center gap-3 bg-black text-white border border-[#575757] hover:border-white/40 font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-8 hover:bg-white/5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer rounded-none relative z-10">
                  <span>Discuss your website</span>
                  <div className="w-[18px] h-[18px] rounded-full bg-[#33FF0D] flex items-center justify-center text-black border border-black/10 shadow-[0_0_8px_rgba(51,255,13,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[15deg] shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[9px] h-[9px] fill-black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
