import { SectionTitle } from '../components/SectionTitle';
import { CosmonautCard } from '../components/CosmonautCard';

const cosmonauts = [
  {
    name: 'Пётр Климук',
    title: 'Первый белорусский космонавт',
    description:
      'Трижды летал в космос. В 1973 году командовал первой астрофизической обсерваторией «Орион-2», получив 10 000 спектрограмм звёзд. В 1975 году установил рекорд СССР — 63 суток на станции «Салют-4». В 1978 году совершил международную миссию «Интеркосмос» с польским космонавтом. Открыл новые химические элементы в туманностях и заложил основы космического землеведения.',
    image: '/klimuk.jpg',
    stats: [
      { label: 'полёта', value: '3' },
      { label: 'суток в космосе', value: '77+' },
      { label: 'спектрограмм', value: '10 000' },
    ],
  },
  {
    name: 'Владимир Ковалёнок',
    title: 'Мастер долговременных полётов',
    description:
      'Трижды покидал Землю, проведя в космосе 216 суток. В 1977 году проявил выдающийся профессионализм, безопасно вернув экипаж при аварийной ситуации. В 1978 году установил мировой рекорд — 139 суток на орбите. Первый белорус, вышедший в открытый космос. Провёл более 50 экспериментов, принимал международные экипажи.',
    image: '/kovalenok.jpg',
    stats: [
      { label: 'полёта', value: '3' },
      { label: 'суток в космосе', value: '216' },
      { label: 'экспериментов', value: '50+' },
    ],
  },
  {
    name: 'Олег Новицкий',
    title: 'Космонавт XXI века',
    description:
      'Четырежды летал в космос, проведя на МКС 544 суток. В 2012 году возвратил белорусов в космос после 30-летнего перерыва. В 2021 году снялся в первом художественном фильме на орбите «Вызов», приуроченном к 60-летию полёта Гагарина. В 2024 году командовал историческим полётом с первым космонавтом суверенной Беларуси Мариной Василевской.',
    image: '/novitsky.jpg',
    stats: [
      { label: 'полёта', value: '4' },
      { label: 'суток в космосе', value: '544' },
      { label: 'экспериментов', value: '50+' },
    ],
  },
  {
    name: 'Марина Василевская',
    title: 'Первый космонавт суверенной Беларуси',
    description:
      'Исторический полёт 2024 года в составе экипажа «Союз МС-25». Провела 14 суток на Международной космической станции, выполнив 7 научных экспериментов. Символ новой эры белорусской космонавтики и вдохновение для нового поколения.',
    image: '/vasilevskaya.jpg',
    stats: [
      { label: 'полёт', value: '1' },
      { label: 'суток в космосе', value: '14' },
      { label: 'экспериментов', value: '7' },
    ],
  },
];

export function CosmonautsSection() {
  return (
    <section id="cosmonauts" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Покорители звёзд"
          subtitle="Четыре имени, вписанные в историю мировой космонавтики"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {cosmonauts.map((cosmonaut) => (
            <CosmonautCard
              key={cosmonaut.name}
              {...cosmonaut}
            />
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="quote-block inline-block text-left max-w-3xl mx-auto animate-fade-in">
            «Их полёты — символ мужества, профессионализма и патриотизма для всех белорусов»
          </blockquote>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
