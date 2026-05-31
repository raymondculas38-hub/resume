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
      className={`glass dark:bg-white/5 bg-white/70 rounded-2xl shadow-xl ${hover ? 'cursor-pointer hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
