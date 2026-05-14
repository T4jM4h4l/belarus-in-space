import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HeroSection } from '../sections/HeroSection';
import { CosmonautsSection } from '../sections/CosmonautsSection';
import { ScientistsSection } from '../sections/ScientistsSection';
import { HeroesSection } from '../sections/HeroesSection';
import { SummarySection } from '../sections/SummarySection';
import { StarBackground } from './StarBackground';

interface PresentationModeProps {
  slideIndex: number;
  audioPlaying: boolean;
  progress: number;
  totalSlides: number;
  currentLabel: string;
  onToggleAudio: () => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

const slideComponents = [
  { Component: HeroSection, props: { inPresentation: true } },
  { Component: CosmonautsSection, props: {} },
  { Component: ScientistsSection, props: {} },
  { Component: HeroesSection, props: {} },
  { Component: SummarySection, props: {} },
];

export function PresentationMode({
  slideIndex,
  audioPlaying,
  progress,
  totalSlides,
  currentLabel,
  onToggleAudio,
  onNext,
  onPrev,
  onClose,
}: PresentationModeProps) {
  const { Component, props } = slideComponents[slideIndex];
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === totalSlides - 1;

  // Клавиатурная навигация
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={(el) => el?.focus()}
    >
      {/* Animated space background - only for slides 2+ */}
      {!isFirst && <StarBackground />}
      
      {/* Solid background for first slide only */}
      {isFirst && <div className="fixed inset-0 bg-[#0B1E36]" />}

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[110] h-1 bg-white/10">
        <motion.div
          className="h-full bg-[#D32F2F]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Top bar — поверх всех секций */}
      <div className="fixed top-3 left-0 right-0 z-[110] flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-sm font-mono">
            {slideIndex + 1} / {totalSlides}
          </span>
          <span className="text-white/40 text-sm hidden sm:inline">
            {currentLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleAudio}
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
              audioPlaying
                ? 'bg-[#D32F2F] text-white animate-pulse'
                : 'bg-white/10 text-[#B0BEC5] hover:bg-white/20 hover:text-white'
            }`}
            title={audioPlaying ? 'Остановить рассказчика' : 'Воспроизвести'}
          >
            {audioPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-[#B0BEC5] hover:bg-white/20 hover:text-white transition-all duration-200"
            title="Вернуться к сайту"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Slide content */}
      <div className="min-h-screen pb-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Component {...props} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation — fixed поверх всего контента */}
      <div className="fixed bottom-0 left-0 right-0 z-[110] bg-[#0B1E36]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 sm:py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 ${
              isFirst
                ? 'text-white/20 cursor-not-allowed'
                : 'text-white bg-white/10 hover:bg-white/20'
            }`}
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Назад</span>
          </button>

          {/* Audio status */}
          <div className="flex items-center gap-2 text-center">
            {audioPlaying ? (
              <div className="flex items-center gap-2 text-[#B0BEC5] text-sm">
                <div className="flex gap-0.5">
                  <span className="w-1 h-3 bg-[#D32F2F] animate-pulse rounded-full" />
                  <span className="w-1 h-4 bg-[#D32F2F] animate-pulse rounded-full" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 h-2 bg-[#D32F2F] animate-pulse rounded-full" style={{ animationDelay: '0.2s' }} />
                </div>
                <span className="text-xs sm:text-sm">Рассказчик говорит...</span>
              </div>
            ) : (
              <span className="text-white/40 text-xs sm:text-sm">
                Нажмите Далее для продолжения
              </span>
            )}
          </div>

          {isLast ? (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D32F2F] text-white hover:bg-[#D32F2F]/80 transition-all duration-200 shadow-lg shadow-[#D32F2F]/20"
            >
              <span className="text-sm">К сайту</span>
            </button>
          ) : (
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              <span className="hidden sm:inline">Далее</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
