'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { blogPosts } from '@/data/blog';
import { Clock } from 'lucide-react';

export function BlogPreviewSection() {
  const featured = blogPosts[0];
  const side = blogPosts.slice(1, 4);

  return (
    <section className="py-24 md:py-40 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#33FF0D]/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <Reveal>
          <div className="flex items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[#33FF0D] text-[11px] uppercase tracking-[0.3em]">// Journal</span>
                <div className="w-16 h-px bg-white/5" />
              </div>
              <h2 className="font-display text-[48px] sm:text-[64px] md:text-[72px] text-white leading-[1.0] tracking-normal uppercase">
                INSIGHTS &amp;<br /><span className="text-[#33FF0D]">RESOURCES.</span>
              </h2>
            </div>
            <Link href="/blog" className="relative group hidden sm:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#505250] hover:text-[#33FF0D] transition-colors duration-300 shrink-0 pb-2">
              <span>View all articles</span>
              <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px]">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Grid: 1 featured + 3 side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Featured post */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block border border-[#575757]/20 hover:border-[#33FF0D]/40 transition-all duration-500 overflow-hidden relative"
              >
                <span className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#33FF0D] opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                <span className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#33FF0D] opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                <span className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#33FF0D] opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                <span className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#33FF0D] opacity-0 group-hover:opacity-100 transition-opacity z-20" />

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D0D0D]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#33FF0D] bg-black/70 backdrop-blur-sm border border-[#33FF0D]/20 px-2.5 py-1">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 font-mono text-[11px] text-[#505250] uppercase tracking-[0.15em]">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 bg-[#33FF0D] rotate-45 inline-block shrink-0" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} className="text-[#33FF0D]" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <h3 className="font-display text-[28px] sm:text-[34px] text-white leading-[1.15] uppercase tracking-normal group-hover:text-[#EAEAEA] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="font-body text-[15px] text-[#A4A4A4] leading-relaxed line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="pt-4 border-t border-[#575757]/15 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#505250] group-hover:text-[#33FF0D] transition-colors">Read article</span>
                    <span className="text-[#33FF0D] opacity-0 group-hover:opacity-100 transition-all transform -rotate-45 group-hover:rotate-0 text-[18px]">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Side posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {side.map((post, i) => (
              <Reveal key={post.slug} delay={0.15 + i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-5 border border-[#575757]/20 hover:border-[#33FF0D]/40 transition-all duration-400 overflow-hidden relative p-5"
                >
                  {/* Thumbnail */}
                  <div className="relative w-24 h-24 shrink-0 overflow-hidden bg-[#0D0D0D]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col justify-between min-w-0">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#505250] block mb-2">{post.date}</span>
                      <h4 className="font-display text-[16px] sm:text-[18px] text-white uppercase leading-tight group-hover:text-[#EAEAEA] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#505250] group-hover:text-[#33FF0D] transition-colors">
                      <Clock size={10} />
                      {post.readingTime}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: view all */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex sm:hidden justify-center">
            <Link href="/blog" className="relative group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#505250] hover:text-[#33FF0D] transition-colors duration-300">
              <span>View all articles</span>
              <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[16px]">→</span>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
