import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionsSlide from './slides/SolutionsSlide';
import CasesSlide from './slides/CasesSlide';
import PricingSlide from './slides/PricingSlide';
import ContactsSlide from './slides/ContactsSlide';
import FloatingParticles from './FloatingParticles';

const slides = [
  { id: 0, Component: TitleSlide },
  { id: 1, Component: ProblemSlide },
  { id: 2, Component: SolutionsSlide },
  { id: 3, Component: CasesSlide },
  { id: 4, Component: PricingSlide },
  { id: 5, Component: ContactsSlide },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection('next');
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection('prev');
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].Component;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <FloatingParticles />
      
      {/* Scanlines overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 opacity-15"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 3px)'
        }}
      />

      {/* Slide Container */}
      <div className="relative z-20 w-full min-h-screen">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="animate-fade-in">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 glass-card px-8 py-4 flex items-center gap-8 shadow-hover">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full w-10 h-10 hover:bg-primary/20 hover:border-primary/40 disabled:opacity-25 transition-smooth border border-transparent"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </Button>

        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-400 ease-smooth rounded-full ${
                index === currentSlide
                  ? 'w-6 h-2 bg-primary shadow-glow'
                  : 'w-2 h-2 bg-foreground/20 hover:bg-foreground/40 hover:scale-125'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full w-10 h-10 hover:bg-primary/20 hover:border-primary/40 disabled:opacity-25 transition-smooth border border-transparent"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </Button>
      </nav>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 glass-card px-5 py-2.5 text-sm font-light backdrop-blur-xl">
        <span className="text-primary font-normal">{currentSlide + 1}</span>
        <span className="text-muted-foreground"> / {slides.length}</span>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-8 right-8 z-50 glass-card px-4 py-2 text-xs font-light backdrop-blur-xl text-muted-foreground hidden md:block">
        <span className="inline-flex items-center gap-2">
          <kbd className="px-2 py-1 bg-card-glass-hover rounded border border-border text-xs">←</kbd>
          <kbd className="px-2 py-1 bg-card-glass-hover rounded border border-border text-xs">→</kbd>
          <span>для навигации</span>
        </span>
      </div>
    </div>
  );
}
