'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { BlogPost } from '@/data/blog';

export const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <Reveal delay={index * 0.07}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-black border border-[#575757]/20 hover:border-[#33FF0A]/40 transition-all duration-500 overflow-hidden relative"
      >
        {/* Corner crop marks */}
        <span className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#33FF0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        <span className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t border-r border-[#33FF0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        <span className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b border-l border-[#33FF0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        <span className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#33FF0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Cover image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D0D0D]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Index number */}
          <div className="absolute top-4 left-4">
            <span className="font-mono text-[11px] text-[#33FF0A] bg-black/70 backdrop-blur-sm border border-[#33FF0A]/20 px-2.5 py-1 tracking-[0.2em]">
              [ {num} ]
            </span>
          </div>

          {/* Category */}
          <div className="absolute top-4 right-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A4A4A4] bg-black/70 backdrop-blur-sm border border-[#575757]/30 px-2.5 py-1">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 space-y-4">
          {/* Meta */}
          <div className="flex items-center gap-4 font-mono text-[11px] text-[#505250] uppercase tracking-[0.15em]">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-[#33FF0A] rotate-45 inline-block shrink-0" />
            <span className="flex items-center gap-1.5">
              <Clock size={11} className="text-[#33FF0A]" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-[24px] sm:text-[28px] text-white leading-[1.15] uppercase tracking-normal group-hover:text-[#EAEAEA] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-[14px] text-[#A4A4A4] leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          {/* CTA row */}
          <div className="pt-4 border-t border-[#575757]/15 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#505250] group-hover:text-[#33FF0A] transition-colors duration-300">
              Read article
            </span>
            <span className="text-[#33FF0A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -rotate-45 group-hover:rotate-0 text-[18px]">→</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};
