'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare, ArrowUpRight, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark pt-24 pb-12 px-6 md:px-12 text-text-body relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Left Column - Brand & Catchphrase */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="Truvox Logo" width={178} height={48} className="hover:opacity-80 transition-opacity" />
            </Link>
            <h2 className="text-[26px] xs:text-[32px] md:text-[50px] font-medium leading-tight md:leading-[1.1] tracking-tight text-text-heading max-w-md break-words">
              Let&apos;s Build Something <span className="gradient-text italic pr-[0.1em]">Remarkable</span> Together.
            </h2>
            <div className="flex gap-4">
               {[
                 { icon: <InstagramPlaceholder />, href: '#' },
                 { icon: <TwitterPlaceholder />, href: '#' },
                 { icon: <LinkedinPlaceholder />, href: '#' },
               ].map((social, i) => (
                 <Link 
                   key={i} 
                   href={social.href}
                   className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:bg-brand-main hover:text-bg-primary transition-all duration-300 shadow-sm"
                 >
                   {social.icon}
                 </Link>
               ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            <div className="space-y-10">
              <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-main">Navigation</h5>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-[16px] font-medium hover:text-brand-main transition-colors text-text-body">About Us</Link></li>
                <li><Link href="/projects" className="text-[16px] font-medium hover:text-brand-main transition-colors text-text-body">Projects</Link></li>
                <li><Link href="/blog" className="text-[16px] font-medium hover:text-brand-main transition-colors text-text-body">Blog</Link></li>
                <li><Link href="/#methodology" className="text-[16px] font-medium hover:text-brand-main transition-colors text-text-body">Our Methodology</Link></li>
                <li><Link href="/#pricing" className="text-[16px] font-medium hover:text-brand-main transition-colors text-text-body">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-10">
              <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-main">Services</h5>
              <ul className="space-y-4">
                <li className="text-[16px] font-medium text-text-body/60">Digital Strategy</li>
                <li className="text-[16px] font-medium text-text-body/60">UI/UX Design</li>
                <li className="text-[16px] font-medium text-text-body/60">Full-Stack Dev</li>
                <li className="text-[16px] font-medium text-text-body/60">E-commerce</li>
              </ul>
            </div>
            <div className="space-y-10">
              <h5 className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-main">Contact</h5>
              <div className="space-y-8">
                <Link 
                  href="mailto:dafiashalom@gmail.com" 
                  className="group block space-y-2"
                >
                  <div className="text-[14px] font-bold text-text-muted uppercase tracking-widest">Email Us</div>
                  <div className="text-[18px] md:text-[20px] font-semibold flex items-center gap-2 text-text-heading group-hover:text-brand-main transition-all">
                    dafiashalom@gmail.com
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
                <div className="space-y-2">
                   <div className="text-[14px] font-bold text-text-muted uppercase tracking-widest">Studio</div>
                   <div className="text-[18px] font-semibold text-text-heading">Charlotte, North Carolina</div>
                   <div className="text-[14px] text-brand-main/80 font-medium">Available for projects worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8 order-2 md:order-1">
             <p className="text-text-muted text-[14px] font-medium">
               © {currentYear} TRUVOX Agency.
             </p>
             <div className="flex gap-8">
               <Link href="/privacy" className="text-text-muted hover:text-white text-[14px] transition-colors">Privacy</Link>
               <Link href="/terms" className="text-text-muted hover:text-white text-[14px] transition-colors">Terms</Link>
             </div>
          </div>
          
          <div className="flex items-center gap-3 order-1 md:order-2">
             <Badge variant="lime" rotation={0} className="text-[12px]">Available for new projects</Badge>
          </div>
        </div>
      </div>

      {/* Background Decorative Accent */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-main/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

// Simple placeholders
const InstagramPlaceholder = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterPlaceholder = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const LinkedinPlaceholder = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
