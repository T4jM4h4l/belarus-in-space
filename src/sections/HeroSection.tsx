import { motion } from 'framer-motion';
import { ChevronDown, Rocket, Users, Clock } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

const stats = [
  { icon: Users, value: 4, label: 'космонавта', suffix: '' },
  { icon: Rocket, value: 10, label: 'миссий', suffix: '' },
  { icon: Clock, value: 850, label: 'суток в космосе', suffix: '+' },
];

export function HeroSection({ inPresentation = false }: { inPresentation?: boolean }) {
  const scrollToContent = () => {
    const element = document.querySelector('#cosmonauts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: видео только на десктопе, на мобильных — картинка */}
      <div className="absolute inset-0 z-0">
        <img
          key="image"
          src="/earth-space.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/70 via-[#0B1E36]/50 to-[#0B1E36]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Title */}
        <motion.div
          className="will-change-[opacity,transform]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-['Montserrat'] mb-6 text-shadow-glow">
            Беларусь в космосе
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-[#B0BEC5] mb-12 font-light will-change-[opacity,transform]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          От первых испытателей до полётов на МКС
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto mb-16 will-change-[opacity,transform]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 md:p-8 group hover:border-[#D32F2F]/50 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="w-8 h-8 text-[#D32F2F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-5xl md:text-6xl font-bold text-[#D32F2F] font-['Montserrat'] mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <div className="text-[#B0BEC5] text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.p
          className="text-[#B0BEC5] text-sm md:text-base max-w-2xl mx-auto mb-12 will-change-[opacity]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Вместе все белорусские космонавты провели в космосе более{' '}
          <span className="text-white font-semibold">20 000 часов</span> в невесомости —
          почти два с половиной года!
        </motion.p>

        {/* Scroll Indicator */}
        {!inPresentation && (
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 will-change-[opacity]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="will-change-[transform]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-10 h-10" />
          </motion.div>
        </motion.button>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/5 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
    </section>
  );
}
