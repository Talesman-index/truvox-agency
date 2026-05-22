'use client';

import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'ghost-zailab' | 'outline-white';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost-zailab',
      'ghost-zailab': 'btn-ghost-zailab',
      'outline-white': 'btn-outline-white',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          'inline-flex items-center justify-center font-sans transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          className
        )}
        {...props}
      >
        {props.children}
      </motion.button>
    );
  }
);
