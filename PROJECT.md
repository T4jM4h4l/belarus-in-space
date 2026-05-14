# Беларусь в космосе — Шпаргалка

## Запуск
```bash
cd "C:\Users\minuteman\Desktop\Kimi_Agent_Беларусь в космосе\app"
npm run dev
```
Открыть: http://localhost:5173

## Структура проекта

```
src/
├── hooks/
│   └── usePresentation.ts      # Управление презентацией (аудио, навигация)
├── components/
│   ├── PresentationMode.tsx     # Полноэкранный режим презентации
│   ├── PresentationButton.tsx   # Плавающая кнопка "Презентация" (внизу справа)
│   ├── ui/                      # shadcn/ui компоненты
│   └── ...                      # Остальные UI компоненты
├── sections/
│   ├── HeroSection.tsx          # Вступление (intro.mp3)
│   ├── CosmonautsSection.tsx    # Космонавты (cosmonauts.mp3)
│   ├── ScientistsSection.tsx    # Учёные (scientists.mp3)
│   ├── HeroesSection.tsx        # Невидимый фронт (heroes.mp3)
│   ├── SummarySection.tsx       # Итоги (summary.mp3)
│   └── FooterSection.tsx        # Футер (2026)
├── App.tsx                      # Корневой компонент
└── main.tsx                     # Точка входа

public/
├── intro.mp3, cosmonauts.mp3, scientists.mp3, heroes.mp3, summary.mp3  # Аудио
└── *.jpg                        # Изображения
```

## Как работает

1. **Лендинг** — полный сайт со скроллом
2. **Кнопка «Презентация»** (внизу справа) → полноэкранный режим
3. **Презентация** — по одной секции, аудио автоматически
4. **Навигация**: Далее / Назад / Крестик / Esc
5. **Аудио**: прерывается при переключении, новая начинает играть
6. **🔊 кнопка** — пауза/воспроизведение

## Технологии
React 18 + TypeScript, Vite 7, Tailwind CSS 3, Framer Motion, Lucide Icons
