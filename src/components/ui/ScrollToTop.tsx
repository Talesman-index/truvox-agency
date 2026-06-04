'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-black border border-[#575757] hover:border-[#33FF0A] text-white hover:text-[#33FF0A] shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(51,255,10,0.25)] transition-all duration-300 cursor-pointer rounded-none group"
          aria-label="Scroll to top"
        >
          {/* Cyberpunk corner crop-marks (mini version) */}
          <span className="absolute top-[-3px] left-[-3px] w-1.5 h-1.5 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="absolute top-[-3px] right-[-3px] w-1.5 h-1.5 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="absolute bottom-[-3px] left-[-3px] w-1.5 h-1.5 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <span className="absolute bottom-[-3px] right-[-3px] w-1.5 h-1.5 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
