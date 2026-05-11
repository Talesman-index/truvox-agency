'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const socialIcons = [
  { 
    name: 'Facebook', 
    href: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ) 
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ) 
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ) 
  },
  { 
    name: 'YouTube', 
    href: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 10.12 10.12 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 10.12 10.12 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
    ) 
  },
  { 
    name: 'X', 
    href: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
    ) 
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark pt-40 pb-12 overflow-hidden text-white/70">
      {/* Background Big Text - Ultra Faint Editorial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="text-[25vw] font-black tracking-tighter leading-none text-white/[0.05] select-none">
          TRUVOX
        </h2>
      </div>

      {/* Top Gradient Blurs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-main/20 via-brand-main/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/20 blur-[180px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          {/* Logo & Social - 4 columns */}
          <div className="lg:col-span-5 space-y-16">
            <Link href="/" className="inline-block">
              <img 
                src="/assets/truvox-logo.png" 
                alt="TRUVOX Logo" 
                className="h-10 w-auto opacity-90 logo-white"
              />
            </Link>
            
            <div className="flex items-center gap-6">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: '#0DB4B4', opacity: 1 }}
                  className="text-white/40 hover:text-brand-main transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns - 7 columns total */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] opacity-50">Sectors</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['SMBs', 'Craftsmen', 'Freelancers', 'Startups'].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-main transition-colors duration-300 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] opacity-50">Services</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['Web Creation', 'UI/UX Design', 'Site Redesign', 'Digital Strategy'].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-main transition-colors duration-300 block">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] opacity-50">Menu</h4>
            <ul className="space-y-5 text-sm font-bold">
              {[
                { label: 'Home', href: '/' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' }
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-main transition-colors duration-300 block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Clean & Wide */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
          <div>
            © {currentYear} Copyright. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

