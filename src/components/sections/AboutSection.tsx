'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  {
    id: '01',
    label: 'Purpose',
    title: 'Goals',
    body: 'Build websites that serve a clear business purpose. Every milestone, layout, and interaction is measured against one question: does this help our client communicate better and convert more?',
    tag: 'Clear Outcomes',
  },
  {
    id: '02',
    label: 'Mission',
    title: 'Mission',
    body: 'Help businesses communicate clearly online. We define messaging and structure before touching design, because a website that doesn\'t communicate doesn\'t convert.',
    tag: 'Strategic Design',
  },
  {
    id: '03',
    label: 'Vision',
    title: 'Vision',
    body: 'A future where every business, regardless of size, has a website that earns trust, communicates its value clearly, and actively supports its growth.',
    tag: 'Business Growth',
  },
];

const stats = [
  { value: '2025', label: 'Founded', sub: 'Remote studio' },
  { value: '02', label: 'Partners', sub: 'Founding team' },
  { value: '05+', label: 'Projects', sub: 'Bespoke builds' },
];

/* ─── Single timeline row ─────────────────────────── */
function TimelineRow({
  item,
  index,
}: {
  item: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'start 35%'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 pb-16 last:pb-0 group"
    >
      {/* Left — index + vertical line */}
      <div className="flex flex-col items-center gap-3 pt-1">
        <span className="font-mono text-[11px] text-[#33FF0A] tracking-[0.25em] select-none">
          [ {item.id} ]
        </span>
        {index < timeline.length - 1 && (
          <motion.div
            className="w-px bg-gradient-to-b from-[#33FF0A]/40 to-transparent flex-1 min-h-[80px]"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        )}
      </div>

      {/* Right — content card */}
      <div className="truvox-corners border border-[#575757]/20 bg-[#0A0A0A] p-7 md:p-9 group-hover:border-[#33FF0A]/25 transition-colors duration-500 relative overflow-hidden">
        {/* Floating glow on hover */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#33FF0A]/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[10px] text-[#505250] uppercase tracking-[0.25em]">
            {item.label}
          </span>
          <span className="font-mono text-[10px] text-[#33FF0A] uppercase tracking-[0.2em] border border-[#33FF0A]/20 px-2.5 py-1 bg-[#33FF0A]/5">
            {item.tag}
          </span>
        </div>

        <h3 className="font-display text-white text-[28px] md:text-[36px] font-bold leading-[1.0] tracking-[-0.02em] uppercase mb-4">
          {item.title}
        </h3>

        <p className="font-body text-[#A4A4A4] text-[15px] leading-[1.55] max-w-xl">
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────── */
export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Floating orbs parallax
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 bg-black overflow-hidden border-t border-[#575757]/10"
    >
      {/* ── Floating ambient orbs ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-1/4 left-[-200px] w-[500px] h-[500px] bg-[#33FF0A]/4 blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-1/4 right-[-200px] w-[400px] h-[400px] bg-[#0000EE]/6 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* ── Section header ── */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="truvox-bracket">Who we are</span>

            <h2 className="font-display text-white text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] uppercase max-w-4xl">
              WE BUILD WITH{' '}
              <span className="text-[#33FF0A]">PURPOSE.</span>
            </h2>

            {/* Horizontal rule with label */}
            <div className="truvox-line max-w-lg">Est. 2025 · Truvox Studio</div>
          </motion.div>
        </div>

        {/* ── Main content: Timeline left + Stats right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Timeline */}
          <div className="lg:col-span-7">
            {timeline.map((item, i) => (
              <TimelineRow key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Sticky right panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-10">

            {/* Big statement */}
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-body text-[18px] md:text-[20px] text-white/80 leading-[1.5] border-l-2 border-[#33FF0A]/50 pl-6"
            >
              Most websites fail because they focus on how they look before clarifying what they need to say. We start with your business goals and build backwards from there.
            </motion.blockquote>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 border border-[#575757]/20"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1 p-5 md:p-6 ${i > 0 ? 'border-l border-[#575757]/20' : ''}`}
                >
                  <span className="font-mono text-[9px] text-[#33FF0A] uppercase tracking-[0.2em]">
                    [ {s.label} ]
                  </span>
                  <span className="font-display text-[32px] md:text-[40px] text-white font-bold leading-none tracking-[-0.02em] mt-1">
                    {s.value}
                  </span>
                  <span className="font-mono text-[9px] text-[#505250] uppercase tracking-widest mt-1">
                    {s.sub}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Truvox indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <span className="truvox-indicator mb-6 block">Available for new projects</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/about" className="relative group block w-fit">
                <span className="absolute top-[-5px] left-[-5px] w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute top-[-5px] right-[-5px] w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <div className="flex items-center bg-white text-black font-mono text-[12px] uppercase tracking-[0.12em] h-[52px] rounded-none hover:bg-[#33FF0A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(51,255,10,0.2)] cursor-pointer pl-7 pr-0 relative z-10 font-semibold">
                  <span className="mr-6">Learn more about us</span>
                  <span className="flex items-center justify-center w-[52px] h-[52px] border-l border-black/20 text-[18px]">
                    <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 leading-none">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
