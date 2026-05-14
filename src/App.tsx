import { StarBackground } from './components/StarBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { CosmonautsSection } from './sections/CosmonautsSection';
import { ScientistsSection } from './sections/ScientistsSection';
import { HeroesSection } from './sections/HeroesSection';
import { SummarySection } from './sections/SummarySection';
import { FooterSection } from './sections/FooterSection';
import { PresentationButton } from './components/PresentationButton';
import { PresentationMode } from './components/PresentationMode';
import { usePresentation } from './hooks/usePresentation';

function App() {
  const {
    active,
    open,
    close,
    slideIndex,
    audioPlaying,
    next,
    prev,
    toggleAudio,
    progress,
    totalSlides,
    currentLabel,
  } = usePresentation();

  return (
    <div className="relative min-h-screen bg-[#0B1E36] text-white overflow-x-hidden">
      {/* Animated Star Background */}
      <StarBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection inPresentation={active} />
        <CosmonautsSection />
        <ScientistsSection />
        <HeroesSection />
        <SummarySection />
        <FooterSection />
      </main>

      {/* Presentation floating button */}
      <PresentationButton onOpen={open} />

      {/* Fullscreen presentation mode */}
      {active && (
        <PresentationMode
          slideIndex={slideIndex}
          audioPlaying={audioPlaying}
          progress={progress}
          totalSlides={totalSlides}
          currentLabel={currentLabel}
          onNext={next}
          onPrev={prev}
          onClose={close}
          onToggleAudio={toggleAudio}
        />
      )}
    </div>
  );
}

export default App;
