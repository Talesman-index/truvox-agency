'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 text-text-body relative overflow-hidden border-t border-white/5">

      <div className="max-w-[1200px] mx-auto relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* STAY CONNECTED column */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-[20px] md:text-[24px] font-display uppercase tracking-wide text-white">
              STAY CONNECTED
            </h4>
            <p className="text-[#A4A4A4] text-[14px] leading-relaxed max-w-sm font-body">
              Join our newsletter for tips, updates, and project highlights only the good stuff.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="relative flex items-center w-full max-w-sm border border-[#575757]/40 bg-black rounded-none"
            >
              <input 
                type="email" 
                placeholder="Enter email address*" 
                className="w-full h-12 bg-transparent pl-4 pr-16 text-[13px] text-white placeholder-white/30 border-none outline-none font-sans"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#F5F5F5] transition-colors border-none cursor-pointer"
              >
                <span className="text-[18px]">→</span>
              </button>
            </form>
          </div>

          {/* Links and Contacts columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Column 2: Main Links */}
            <div className="space-y-6">
              <span className="font-mono text-[#A4A4A4] text-[12px] uppercase tracking-[0.2em] block">[ Main links ]</span>
              <ul className="space-y-3 font-body text-[14px]">
                <li><Link href="/" className="font-medium text-[#33FF0D] hover:underline transition-all">Home</Link></li>
                <li><Link href="/about" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/projects" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3: Secondary Links */}
            <div className="space-y-6 pt-0 md:pt-[34px]">
              <ul className="space-y-3 font-body text-[14px]">
                <li><Link href="/contact" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/404" className="font-medium text-[#A4A4A4] hover:text-white transition-colors">Error 404</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div className="space-y-6">
              <span className="font-mono text-[#A4A4A4] text-[12px] uppercase tracking-[0.2em] block">[ Contact us on ]</span>
              <div className="space-y-3 font-body text-[14px] text-white">
                <div className="font-medium">+1 (515) 206-3535</div>
                <div>
                  <a href="mailto:hello@truvox.studio" className="font-medium hover:text-[#33FF0D] transition-colors">
                    hello@truvox.studio
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-[13px] font-mono">
            © 2026 Truvox. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: <InstagramPlaceholder />, href: '#' },
              { icon: <XPlaceholder />, href: '#' },
              { icon: <LinkedinPlaceholder />, href: '#' },
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href}
                className="w-10 h-10 border border-[#575757]/40 bg-white/5 flex items-center justify-center text-text-muted hover:bg-[#33FF0D] hover:text-black hover:border-[#33FF0D] transition-all duration-300 rounded-none"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social icon SVGs
const InstagramPlaceholder = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const XPlaceholder = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const LinkedinPlaceholder = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
