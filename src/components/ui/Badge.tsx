'use client';

import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'pink' | 'sage' | 'outline';
  className?: string;
  animate?: boolean;
  rotation?: number;
}

export const Badge = ({ 
  children, 
  variant = 'lime', 
  className, 
  animate = true,
  rotation = 0 
}: BadgeProps) => {
  const variants = {
    lime: 'badge-lime',
    pink: 'badge-pink',
    sage: 'badge-sage',
    outline: 'inline-flex items-center justify-center bg-transparent px-4 py-2 rounded-[70px] text-[14px] font-bold border',
  };

  return (
    <motion.div
      initial={animate ? { rotate: rotation } : false}
      animate={animate ? { 
        rotate: [rotation - 2, rotation + 2, rotation - 2],
      } : false}
      transition={animate ? { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      } : undefined}
      className={cn(
        variants[variant],
        'inline-flex items-center justify-center whitespace-nowrap',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
