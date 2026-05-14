import { motion } from 'framer-motion';
import { Star, Microscope, Globe, Rocket } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { AnimatedCounter } from '../components/AnimatedCounter';

const achievements = [
  {
    icon: Star,
    value: 10000,
    suffix: '+',
    label: 'спектрограмм звёзд',
  },
  {
    icon: Microscope,
    value: 200,
    suffix: '+',
    label: 'научных экспериментов',
  },
  {
    icon: Globe,
    value: 4,
    suffix: '',
    label: 'страны-партнёра',
  },
  {
    icon: Rocket,
    value: 51,
    suffix: '',
    label: 'год исследований',
  },
];

export function SummarySection() {
  return (
    <section id="summary" className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/belarus-in-space/iss.jpg"
          alt="International Space Station"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36] via-[#0B1E36]/95 to-[#0B1E36]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Беларусь — космическая держава"
          subtitle="Вклад белорусов в освоение космоса всесторонен и неоспорим"
        />

        {/* Main text */}
        <motion.div
          className="glass-card p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-[#B0BEC5] leading-relaxed mb-6">
            От первых наземных испытаний и руководства космодромами до рекордных
            орбитальных полётов и современных научных экспериментов — белорусы
            внесли неоценимый вклад в освоение космоса.
          </p>
          <p className="text-lg md:text-xl text-[#B0BEC5] leading-relaxed mb-6">
            За более чем полвека белорусские космонавты провели в космосе свыше{' '}
            <span className="text-white font-semibold">850 суток</span>, выполнили{' '}
            <span className="text-white font-semibold">10 миссий</span>, собрали{' '}
            <span className="text-white font-semibold">10 000 спектрограмм</span>{' '}
            звёзд, провели <span className="text-white font-semibold">200+ научных экспериментов</span>.
          </p>
          <p className="text-lg md:text-xl text-[#B0BEC5] leading-relaxed">
            Белорусские учёные создали двигатели для легендарных кораблей и
            рассчитали топливо для полётов на Луну. Сегодня Беларусь продолжает
            участвовать в международных космических программах, вдохновляет
            молодёжь на STEM-образование и укрепляет статус космической державы.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              className="glass-card p-6 text-center group hover:border-[#D32F2F]/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-[#D32F2F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl md:text-4xl font-bold text-white font-['Montserrat'] mb-2">
                <AnimatedCounter
                  target={item.value}
                  suffix={item.suffix}
                  duration={2}
                />
              </div>
              <div className="text-[#B0BEC5] text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
