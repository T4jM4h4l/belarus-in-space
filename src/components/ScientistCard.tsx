import { motion } from 'framer-motion';

interface ScientistCardProps {
  name: string;
  years: string;
  title: string;
  description: string;
  achievements: string[];
  image: string;
}

export function ScientistCard({
  name,
  years,
  title,
  description,
  achievements,
  image,
}: ScientistCardProps) {
  return (
    <motion.div
      className="glass-card p-6 md:p-8 group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="relative flex-shrink-0 mx-auto lg:mx-0">
          <div className="w-48 h-60 lg:w-56 lg:h-72 rounded-2xl overflow-hidden border-2 border-[#2E7D32]/50 group-hover:border-[#2E7D32] transition-colors duration-300">
            <video
              src={image.replace(/\.jpg$/, '.mp4')}
              poster={image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Years badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#2E7D32] rounded-full text-white text-sm font-medium">
            {years}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-['Montserrat'] mb-2">
            {name}
          </h3>
          <p className="text-[#2E7D32] font-semibold text-lg mb-4">{title}</p>
          <p className="text-[#B0BEC5] leading-relaxed mb-6">{description}</p>

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D32F2F] rounded-full" />
              Ключевые достижения
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#B0BEC5] text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
