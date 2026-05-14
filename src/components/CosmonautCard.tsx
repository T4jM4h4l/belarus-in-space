import { motion } from 'framer-motion';

interface CosmonautCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export function CosmonautCard({
  name,
  title,
  description,
  image,
  stats,
}: CosmonautCardProps) {
  return (
    <motion.div
      className="cosmonaut-card group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="relative flex-shrink-0 mx-auto md:mx-0">
          <div className="w-40 h-48 md:w-48 md:h-56 rounded-2xl overflow-hidden border-2 border-[#D32F2F]/50 group-hover:border-[#D32F2F] transition-colors duration-300">
            <video
              src={image.replace(/\.jpg$/, '.mp4')}
              poster={image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-2 border border-white/10 rounded-3xl -z-10 group-hover:border-white/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-1">
            {name}
          </h3>
          <p className="text-[#D32F2F] font-medium mb-4">{title}</p>
          <p className="text-[#B0BEC5] text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10"
                >
                  <span className="text-[#D32F2F] font-bold">{stat.value}</span>
                  <span className="text-[#B0BEC5] text-xs ml-1">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
