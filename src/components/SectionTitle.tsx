import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white font-['Montserrat']">
        {title}
      </h2>
      <div className="w-16 h-1 bg-[#D32F2F] mt-4 rounded-full" />
      {subtitle && (
        <p className="text-[#B0BEC5] text-lg mt-4 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
