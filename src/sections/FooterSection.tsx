import { Rocket, Heart } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36] to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-4xl font-bold text-white font-['Montserrat'] leading-tight mb-6">
            «Их полёты — символ мужества,
            <br />
            <span className="text-[#D32F2F]">профессионализма и патриотизма»</span>
          </blockquote>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto rounded-full" />
        </div>

        {/* Closing words */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-[#B0BEC5] leading-relaxed mb-4">
            Космос объединяет инженеров, учёных, космонавтов и мечтателей.
            Каждый из них — часть общей истории, которая пишется уже более полувека.
          </p>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            От первого двигателя Гагарина до современных экспериментов на МКС —
            <span className="text-[#D32F2F] font-semibold"> путь к звёздам продолжается</span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-[#B0BEC5] text-sm">
            <Rocket className="w-5 h-5 text-[#D32F2F]" />
            <span>Беларусь в космосе</span>
          </div>

          <div className="flex items-center gap-2 text-[#B0BEC5] text-sm">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 text-[#D32F2F] fill-[#D32F2F]" />
            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
