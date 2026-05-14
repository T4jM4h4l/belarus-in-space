import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  name: string;
  fact: string;
  details: string;
}

export function FlipCard({ name, fact, details }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-64 w-80 cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card p-6 flex flex-col justify-center items-center text-center backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-12 h-12 rounded-full bg-[#D32F2F]/20 flex items-center justify-center mb-4">
            <span className="text-2xl">★</span>
          </div>
          <h4 className="text-xl font-bold text-white font-['Montserrat'] mb-3">
            {name}
          </h4>
          <p className="text-[#B0BEC5] text-sm leading-relaxed">{fact}</p>
          <p className="text-[#D32F2F] text-xs mt-4 opacity-70 md:hidden">
            Нажмите для подробностей
          </p>
          <p className="text-[#D32F2F] text-xs mt-4 opacity-70 hidden md:block">
            Наведите для подробностей
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-5 flex flex-col backface-hidden overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#0B1E36',
          }}
        >
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <h4 className="text-lg font-bold text-white font-['Montserrat']">
              {name}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="text-[#B0BEC5] hover:text-white text-lg p-1"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
            <p className="text-[#B0BEC5] text-sm leading-relaxed">{details}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
