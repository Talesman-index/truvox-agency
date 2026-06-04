'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { TruvoxLogo } from '@/components/ui/TruvoxLogo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Study', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Process', href: '/#methodology' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
          scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-[#575757]/20 py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
          
          {/* Left: Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 px-4 py-2 border border-[#575757] hover:border-white/40 transition-colors bg-black/40 backdrop-blur-sm cursor-pointer select-none text-white font-sans text-[12px] font-medium uppercase tracking-[0.15em] rounded-none h-[44px]"
            id="nav-menu-toggle"
          >
            <span>{isOpen ? 'Close' : 'Menu'}</span>
            <div className="flex flex-wrap w-[10px] h-[10px] gap-[2px]">
              <div className="w-[4px] h-[4px] bg-[#33FF0A]"></div>
              <div className="w-[4px] h-[4px] bg-[#33FF0A]"></div>
              <div className="w-[4px] h-[4px] bg-[#33FF0A]"></div>
              <div className="w-[4px] h-[4px] bg-[#33FF0A]"></div>
            </div>
          </button>

          {/* Center: Favicon Logo (visible on all pages) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="block group">
              <Image
                src="/truvox_pixel.png"
                alt="Truvox"
                width={36}
                height={36}
                className="w-[36px] h-[36px] object-contain opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(51,255,10,0.6)] transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Right: Book a Call Button with Phone Icon */}
          <Link href="/contact">
            <div className="flex items-center gap-4 px-4 py-2 border border-[#575757] hover:border-[#33FF0A] hover:shadow-[0_0_15px_rgba(51,255,10,0.15)] transition-all duration-300 bg-black/40 backdrop-blur-sm cursor-pointer select-none text-white font-mono text-[14px] tracking-normal rounded-none h-[44px] group">
              <span className="hidden sm:inline group-hover:text-[#33FF0A] transition-colors duration-300">Book a call</span>
              <span className="sm:hidden group-hover:text-[#33FF0A] transition-colors duration-300">Book</span>
              {/* Green phone circle */}
              <div className="w-[20px] h-[20px] rounded-full bg-[#33FF0A] flex items-center justify-center text-black border border-black/10 shadow-[0_0_8px_rgba(51,255,10,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:bg-[#33FF0A] shrink-0">
                <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-black text-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </nav>

      {/* Full-width Overlay Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[92px] sm:top-[76px] left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-[#575757]/20 z-40 p-8 sm:p-12 md:p-20 overflow-y-auto max-h-[calc(100vh-92px)] flex flex-col md:flex-row md:justify-between md:items-start gap-12"
          >
            {/* Nav Links in Staatliches display font */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex items-baseline gap-4 group">
                  <span className="font-mono text-[14px] text-[#505250] group-hover:text-[#33FF0A] transition-colors">
                    0{idx + 1}
                  </span>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-[40px] sm:text-[56px] md:text-[68px] text-white group-hover:text-[#33FF0A] uppercase tracking-normal transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Side Agency info */}
            <div className="flex flex-col gap-6 text-[14px] text-[#A4A4A4] max-w-sm pt-4 md:pt-12 border-t border-[#575757]/20 md:border-none">
              <span className="font-mono text-[#33FF0A] uppercase tracking-[0.2em]">Contact</span>
              <p className="leading-relaxed">
                We build strategic websites that help businesses communicate clearly and convert visitors into clients. Let's discuss yours.
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-white font-medium">hello@truvox.studio</span>
                <span>Remote Studio · Available now</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
