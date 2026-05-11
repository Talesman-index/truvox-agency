'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '@/components/ui/Magnetic';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services', hasDropdown: false },
    { name: 'Portfolio', href: '/#portfolio', hasDropdown: false },
    { name: 'Process', href: '/#process', hasDropdown: false },
    { name: 'Pricing', href: '/#pricing', hasDropdown: false },
    { name: 'About', href: '/about', hasDropdown: false },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 border border-white/20 shadow-elevation4 backdrop-blur-xl ${
          scrolled 
            ? 'bg-white/80 py-3 px-8' 
            : 'bg-white/60 py-4 px-10'
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/assets/truvox-logo.png" 
            alt="TRUVOX Logo" 
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 logo-terracotta"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-primary/80 hover:text-brand-main transition-colors duration-300 flex items-center gap-1 group"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Magnetic strength={0.3}>
            <Link href="/contact">
              <Button variant="primary" size="sm" className="px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Start the Journey
              </Button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 bg-white rounded-3xl shadow-elevation5 border border-light p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-light w-full"></div>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full py-4 text-sm font-black uppercase tracking-widest">
                  Start the Journey
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
