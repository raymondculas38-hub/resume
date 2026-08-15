import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-5 py-2 rounded-full text-xs font-extrabold tracking-widest uppercase bg-black text-white border border-black dark:bg-green-600 dark:text-white dark:border-green-500 shadow-md mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-100 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
