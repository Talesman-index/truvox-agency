'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TruvoxLogo } from '@/components/ui/TruvoxLogo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Methodology', href: '/#methodology' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <TruvoxLogo className="text-white hover:opacity-80 transition-opacity" width={140} height={40} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-brand-main transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" className="bg-brand-main text-bg-primary px-10 h-[50px] rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-brand-hover transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)]">
              Talk to us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-card border-t border-white/5 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[12px] font-bold uppercase tracking-widest text-white/70 hover:text-brand-main"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="bg-brand-main text-bg-primary w-full h-[50px] rounded-full text-[12px] font-bold uppercase tracking-widest">
                Talk to us
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
