'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlogPost, blogPosts } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, User, Link as LinkIcon, ChevronRight, ArrowRight } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';

// Local Social Icons as lucide-react 1.14.0 is missing them
const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://truvox.studio${post.coverImage}`,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Truvox Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://truvox.studio/assets/truvox-logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-bg-primary pb-24 md:pb-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* BREADCRUMB */}
      <div className="pt-32 md:pt-40 px-6 max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-text-muted">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/20" />
            <Link href="/blog" className="hover:text-brand-main transition-colors">Blog</Link>
            <ChevronRight size={14} className="text-white/20" />
            <span className="text-white/40 truncate max-w-[200px]">{post.title}</span>
          </div>
        </Reveal>
      </div>

      {/* HERO SECTION */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <Reveal>
            <div className="space-y-8">
              <Badge variant="lime" rotation={-2}>{post.category}</Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-text-heading leading-[1.1] tracking-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-[14px] font-medium text-text-muted uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-brand-main" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-brand-main" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-brand-main" />
                  {post.readingTime}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="max-w-[1400px] mx-auto mt-20 relative aspect-[21/9] w-full rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* ARTICLE BODY */}
      <section className="px-6 relative">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Social Share Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-40 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted vertical-text">Share</span>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <TwitterIcon size={20} />, label: 'Twitter' },
                  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn' },
                  { icon: <LinkIcon size={20} />, label: 'Copy' }
                ].map((item, i) => (
                  <button key={i} className="w-12 h-12 rounded-full bg-bg-card border border-white/5 flex items-center justify-center text-text-muted hover:text-brand-main hover:border-brand-main transition-all">
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Body */}
          <div className="lg:col-span-8 lg:col-start-3">
            <RevealItem delay={0.3}>
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-text-heading prose-headings:font-medium prose-p:text-text-body prose-p:leading-relaxed prose-strong:text-brand-main prose-a:text-brand-main hover:prose-a:text-brand-hover transition-colors">
                <p className="text-[22px] leading-relaxed text-white/90 mb-12 font-light">
                  {post.excerpt}
                </p>
                
                <h2>Strategizing for Growth in Charlotte</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                {/* IN-ARTICLE CTA */}
                <div className="my-16 p-10 bg-bg-card rounded-[40px] border border-brand-main/20 relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-main/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-[28px] font-bold text-text-heading m-0">Want a website like this for your business?</h3>
                    <p className="text-text-muted m-0">Book a free 30-minute consultation with Truvox and let&apos;s talk about your digital authority.</p>
                    <Link href="/contact" className="inline-block">
                      <Button className="h-[56px] px-10 rounded-full bg-brand-main text-bg-primary font-bold">
                        Book My Free Call <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <h3>Focusing on Digital Credibility</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <ul>
                  <li>Strategic Visual Identity</li>
                  <li>High-Performance Engineering</li>
                  <li>Data-Backed Design Decisions</li>
                </ul>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </RevealItem>

            {/* END OF ARTICLE CTA */}
            <Reveal delay={0.5}>
              <div className="mt-32 pt-20 border-t border-white/5 text-center space-y-10">
                <h2 className="text-[32px] md:text-[48px] font-medium text-text-heading tracking-tight">
                  Ready to grow your business online?
                </h2>
                <Link href="/contact">
                  <Button variant="primary" className="h-[64px] px-12 rounded-full bg-brand-main text-bg-primary font-bold shadow-[0_0_40px_rgba(0,255,133,0.1)]">
                    Book a free consultation
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Table of Contents Sticky Sidebar */}
          <div className="hidden xl:block xl:col-span-2">
            <div className="sticky top-40 space-y-8">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-main">On this page</h4>
              <nav className="space-y-4">
                {['Introduction', 'Market Analysis', 'Visual Strategy', 'Conversion Focus', 'Next Steps'].map((item, i) => (
                  <button key={i} className="block text-[14px] text-text-muted hover:text-white transition-colors text-left">
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="py-24 md:py-32 bg-bg-dark/30 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-[32px] font-medium text-text-heading">Similar <span className="gradient-text italic">Insights.</span></h2>
              <Link href="/blog" className="text-brand-main font-bold uppercase tracking-widest text-[12px] flex items-center gap-2 hover:gap-4 transition-all">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost, i) => (
                <BlogCard key={rPost.slug} post={rPost} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
