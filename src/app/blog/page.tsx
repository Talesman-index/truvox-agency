'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts, blogCategories } from '@/data/blog';
import { Button } from '@/components/ui/Button';
import { Search, ArrowRight, TrendingUp, Mail } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="max-w-[800px] mb-20 md:mb-32">
          <Reveal>
            <Badge variant="lime" rotation={-2} className="mb-8">The Truvox Journal</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium text-text-heading leading-[1.0] tracking-tight mb-8">
              Insights & <span className="gradient-text italic">Resources.</span>
            </h1>
            <p className="text-[20px] md:text-[24px] text-text-body leading-relaxed font-light max-w-xl">
              Practical tips to grow your small business online. We share our philosophy on design, strategy, and local growth.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Content - Articles Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Search Box */}
            <Reveal delay={0.2}>
              <div className="p-8 bg-bg-card rounded-[32px] border border-white/5 space-y-6">
                <h3 className="text-[18px] font-bold uppercase tracking-widest text-text-heading">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 py-4 text-text-heading placeholder:text-text-muted/30 focus:border-brand-main focus:outline-none transition-all"
                  />
                  <Search size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-text-muted" />
                </div>
              </div>
            </Reveal>

            {/* Categories */}
            <Reveal delay={0.3}>
              <div className="p-8 bg-bg-card rounded-[32px] border border-white/5 space-y-6">
                <h3 className="text-[18px] font-bold uppercase tracking-widest text-text-heading">Categories</h3>
                <div className="flex flex-wrap gap-3">
                  {blogCategories.map((cat) => (
                    <button 
                      key={cat}
                      className="px-5 py-2.5 rounded-full border border-white/10 text-[14px] font-medium text-text-muted hover:border-brand-main hover:text-brand-main transition-all"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA Box */}
            <Reveal delay={0.4}>
              <div className="p-8 bg-bg-card rounded-[32px] border border-brand-main/20 bg-gradient-to-br from-brand-main/5 to-transparent space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-main/10 blur-[60px] rounded-full" />
                
                <div className="space-y-4 relative z-10">
                  <TrendingUp className="text-brand-main" size={32} />
                  <h3 className="text-[24px] font-bold text-text-heading leading-tight">Ready to grow your business?</h3>
                  <p className="text-[16px] text-text-muted leading-relaxed">
                    Let&apos;s discuss how strategic design can help you attract more clients in Charlotte.
                  </p>
                </div>
                
                <Link href="/contact" className="block relative z-10">
                  <Button className="w-full h-[60px] rounded-full bg-brand-main text-bg-primary font-bold shadow-[0_0_30px_rgba(0,255,133,0.15)]">
                    Book a consultation <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </Reveal>

            {/* Newsletter */}
            <Reveal delay={0.5}>
              <div className="p-8 bg-bg-card rounded-[32px] border border-white/5 space-y-6">
                <div className="flex items-center gap-3 text-brand-main">
                  <Mail size={20} />
                  <h3 className="text-[18px] font-bold uppercase tracking-widest">Insights Inbox</h3>
                </div>
                <p className="text-[15px] text-text-muted leading-relaxed">
                  Get the latest web design tips and local Charlotte growth strategies delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-bg-dark border border-border-subtle rounded-2xl px-6 py-4 text-text-heading focus:border-brand-main focus:outline-none"
                  />
                  <Button variant="secondary" className="w-full h-[54px] rounded-full border-white/10 text-white font-bold">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Reveal>

          </aside>

        </div>
      </div>
    </main>
  );
}
