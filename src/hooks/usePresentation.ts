import { useState, useRef, useCallback, useEffect } from 'react';

export const presentationSlides = [
  { id: 'hero', audio: '/belarus-in-space/intro.mp3', label: 'Вступление' },
  { id: 'cosmonauts', audio: '/belarus-in-space/cosmonauts.mp3', label: 'Космонавты' },
  { id: 'scientists', audio: '/belarus-in-space/scientists.mp3', label: 'Учёные' },
  { id: 'heroes', audio: '/belarus-in-space/heroes.mp3', label: 'Невидимый фронт' },
  { id: 'summary', audio: '/belarus-in-space/summary.mp3', label: 'Итоги' },
];

export function usePresentation() {
  const [active, setActive] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const slideIndexRef = useRef(0);

  const open = useCallback(() => {
    setActive(true);
    setSlideIndex(0);
    slideIndexRef.current = 0;
  }, []);

  const close = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setAudioPlaying(false);
    setActive(false);
    setSlideIndex(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    // Прерываем текущее аудио
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    slideIndexRef.current = index;
    setSlideIndex(index);
    setAudioPlaying(false);
  }, []);

  const next = useCallback(() => {
    if (slideIndexRef.current < presentationSlides.length - 1) {
      goToSlide(slideIndexRef.current + 1);
    }
  }, [goToSlide]);

  const prev = useCallback(() => {
    if (slideIndexRef.current > 0) {
      goToSlide(slideIndexRef.current - 1);
    }
  }, [goToSlide]);

  const toggleAudio = useCallback(() => {
    if (audioPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setAudioPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const slide = presentationSlides[slideIndexRef.current];
      const audio = new Audio(slide.audio);
      audio.preload = 'auto';
      audioRef.current = audio;

      audio.addEventListener('ended', () => setAudioPlaying(false));
      audio.addEventListener('error', () => setAudioPlaying(false));

      audio.play().then(() => setAudioPlaying(true)).catch(() => setAudioPlaying(false));
    }
  }, [audioPlaying]);

  // Воспроизведение аудио при смене слайда
  useEffect(() => {
    if (!active) return;

    const slide = presentationSlides[slideIndex];
    const audio = new Audio(slide.audio);
    audio.preload = 'auto';
    audioRef.current = audio;
    setAudioPlaying(false);

    audio.addEventListener('play', () => setAudioPlaying(true));
    audio.addEventListener('ended', () => setAudioPlaying(false));
    audio.addEventListener('error', () => setAudioPlaying(false));

    audio.play().then(() => setAudioPlaying(true)).catch(() => setAudioPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [slideIndex, active]);

  const progress = ((slideIndex + 1) / presentationSlides.length) * 100;

  return {
    active,
    open,
    close,
    slideIndex,
    audioPlaying,
    next,
    prev,
    toggleAudio,
    progress,
    totalSlides: presentationSlides.length,
    currentLabel: presentationSlides[slideIndex]?.label || '',
  };
}
