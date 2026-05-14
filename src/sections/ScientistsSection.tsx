import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ScientistCard } from '../components/ScientistCard';

const scientists = [
  {
    name: 'Семён Косберг',
    years: '1903 – 1965',
    title: 'Конструктор двигателей для Гагарина',
    description:
      'Главный конструктор двигателей, которые вывели на орбиту Юрия Гагарина. Под его руководством созданы двигатели для кораблей «Восток», «Восход», «Союз» и ракеты-носителя «Протон». Его разработки стали фундаментом для всех ключевых космических программ СССР.',
    image: '/belarus-in-space/kosberg.jpg',
    achievements: [
      'Двигатель РД-0105/0109 вывел на орбиту Гагарина',
      'РД-0110 установил мировой рекорд по надёжности — 2000+ пусков',
      'Двигатели для «Восток», «Восход», «Союз», «Протон»',
      'Именем назван кратер на обратной стороне Луны',
    ],
  },
  {
    name: 'Борис Кит',
    years: '1910 – 2018',
    title: 'Учёный двух сверхдержав',
    description:
      'Уникальный учёный-полимат, внёсший вклад в космонавтику СССР и США. Рассчитал параметры жидкого водорода как ракетного топлива — на нём полетели «Аполлоны» и «Шаттлы». Опубликовал первый в мире учебник по ракетному топливу (1960).',
    image: '/belarus-in-space/kit.jpg',
    achievements: [
      'Расчёты по жидкому водороду для программы «Аполлон»',
      'Первый в мире учебник «Rocket Propellant Handbook» (1960)',
      'Старейший член Американского общества астронавтики',
      'Имя заложено в «капсулу времени» мировой космонавтики',
    ],
  },
];

export function ScientistsSection() {
  return (
    <section id="scientists" className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/belarus-in-space/soyuz.jpg"
          alt="Spacecraft"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36] via-[#0B1E36]/90 to-[#0B1E36]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Гении за кулисами космоса"
          subtitle="Техническая и научная основа великих свершений"
        />

        <div className="space-y-8">
          {scientists.map((scientist) => (
            <ScientistCard
              key={scientist.name}
              {...scientist}
            />
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-16 glass-card p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#B0BEC5] text-lg leading-relaxed max-w-4xl mx-auto">
            Белорусские учёные внесли вклад в космонавтику{' '}
            <span className="text-white font-semibold">двух сверхдержав</span>,
            обеспечив техническую и научную основу для освоения космоса — от
            запуска первого человека на орбиту до полётов на Луну.
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
