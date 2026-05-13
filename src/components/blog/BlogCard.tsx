'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { RevealItem } from '@/components/ui/Reveal';
import { BlogPost } from '@/data/blog';

export const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <RevealItem delay={index * 0.1}>
      <Link 
        href={`/blog/${post.slug}`} 
        className="group block h-full bg-bg-card rounded-[32px] border border-white/5 hover:border-brand-main/30 transition-all duration-500 overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-bg-dark/60 backdrop-blur-md border border-white/10 text-brand-main shadow-lg">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4 text-text-muted text-[12px] font-medium uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-main" />
              {post.date}
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-main" />
              {post.readingTime}
            </div>
          </div>

          <h3 className="text-[24px] md:text-[28px] font-medium text-text-heading leading-tight tracking-tight group-hover:text-brand-main transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[16px] text-text-muted leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="pt-4 flex items-center gap-2 text-brand-main font-bold uppercase tracking-widest text-[12px] group-hover:gap-4 transition-all">
            Read more <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </RevealItem>
  );
};
