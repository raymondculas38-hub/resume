import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`glass bg-white/10 dark:bg-zinc-900/90 border border-white/20 dark:border-zinc-800 rounded-2xl shadow-xl ${hover ? 'cursor-pointer hover:border-white/50 dark:hover:border-green-500/50 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
