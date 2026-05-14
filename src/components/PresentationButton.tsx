import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

interface PresentationButtonProps {
  onOpen: () => void;
}

export function PresentationButton({ onOpen }: PresentationButtonProps) {
  return (
    <motion.button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 bg-[#D32F2F] text-white rounded-full shadow-2xl shadow-[#D32F2F]/30 hover:bg-[#D32F2F]/90 transition-all duration-300 font-medium text-sm sm:text-base"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <Headphones size={18} />
      <span className="hidden sm:inline">Презентация</span>
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#D32F2F]/30 blur-lg -z-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.button>
  );
}
