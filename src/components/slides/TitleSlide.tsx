import { Sparkles } from 'lucide-react';
import CyberOrb from '../CyberOrb';

export default function TitleSlide() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <CyberOrb />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        <div className="glass-card p-12 md:p-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight">
              <span className="gradient-text">AI-агенты</span>
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-glow-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-thin tracking-wide">
            для бизнеса
          </h2>
        </div>

        <p className="text-xl md:text-2xl font-light text-muted-foreground animate-fade-in animation-delay-300">
          Революция в автоматизации бизнес-процессов
        </p>
      </div>
    </div>
  );
}
