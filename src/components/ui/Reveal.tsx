'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: boolean;
}

export const Reveal = ({ 
  children, 
  width = '100%', 
  delay = 0.2, 
  duration = 0.5,
  y = 40,
  stagger = false
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        style={{ width, position: 'relative', overflow: 'visible' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: 'visible' }}>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealItem = ({ 
  children, 
  delay = 0,
  y = 40 
}: { 
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
};
