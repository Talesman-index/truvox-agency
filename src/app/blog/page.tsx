'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts, blogCategories } from '@/data/blog';
import Link from 'next/link';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#33FF0A]/4 blur-[180px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1200px] mx-auto relative z-10"
        >
          <span className="font-mono text-[#33FF0A] text-[12px] uppercase tracking-[0.3em] block mb-8">
            // The Truvox Journal
          </span>
          <h1 className="font-display text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] text-white leading-[1.0] tracking-normal uppercase mb-8">
            INSIGHTS &amp;<br /><span className="text-[#33FF0A]">RESOURCES.</span>
          </h1>
          <p className="font-body text-[#A4A4A4] text-[17px] sm:text-[20px] max-w-xl leading-[1.5]">
            Strategy, design, and web perspectives to help businesses communicate clearly and grow online.
          </p>
        </motion.div>
      </section>

      {/* ─── FILTERS ──────────────────────────────────────────────────────── */}
      <section className="border-b border-white/5 px-6 py-6 bg-black sticky top-[76px] z-30 backdrop-blur-md bg-black/90">
        <div className="max-w-[1200px] mx-auto flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-200 ${
              activeCategory === null
                ? 'border-[#33FF0A] text-[#33FF0A] bg-[#33FF0A]/5'
                : 'border-[#575757]/30 text-[#505250] hover:border-white/30 hover:text-white'
            }`}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-[#33FF0A] text-[#33FF0A] bg-[#33FF0A]/5'
                  : 'border-[#575757]/30 text-[#505250] hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── ARTICLES GRID ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 bg-black">
        <div className="max-w-[1200px] mx-auto">

          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-6 mb-12">
              <span className="font-mono text-[#33FF0A] text-[11px] uppercase tracking-[0.3em]">
                // {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-[#505250] text-[14px] uppercase tracking-[0.2em]">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33FF0A]/4 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <Reveal>
            <span className="font-mono text-[#33FF0A] text-[11px] uppercase tracking-[0.3em] block mb-8">// Ready to start?</span>
            <h2 className="font-display text-[48px] sm:text-[68px] md:text-[80px] text-white leading-[1.0] uppercase tracking-normal mb-6">
              LET'S BUILD<br /><span className="text-[#33FF0A]">SOMETHING CLEAR.</span>
            </h2>
            <p className="font-body text-[#A4A4A4] text-[17px] max-w-lg mx-auto leading-[1.5] mb-12">
              Tell us about your business. We'll tell you honestly what your website needs to communicate, and how we'll build it.
            </p>
            <Link href="/contact" className="relative group inline-flex items-center bg-[#33FF0A] text-black font-mono text-[12px] uppercase tracking-[0.15em] h-[52px] px-10 hover:bg-[#33FF0A] hover:shadow-[0_8px_20px_rgba(51,255,10,0.2)] hover:-translate-y-0.5 transition-all duration-300 font-semibold">
              <span className="mr-4">Discuss your website</span>
              <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px]">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
