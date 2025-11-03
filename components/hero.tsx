import { ReactNode } from "react";
import { Section } from "./section";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center gradient-mesh-animated">
      {/* Animated blob background */}
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-16 sm:-left-24 md:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[var(--color-primary)]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob glow-pulse"></div>
        <div className="absolute top-1/3 -right-16 sm:-right-24 md:-right-32 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[var(--color-secondary)]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 glow-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 sm:left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[var(--color-accent-purple)]/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 glow-pulse"></div>
      </div>
      
      <Section className="relative py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-5xl px-4">
          {/* Playful title treatment */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-3 md:mb-4">
              <span className="block gradient-text">{title.split(' ')[0]}</span>
              <span className="block text-foreground mt-1 sm:mt-2">{title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
          
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 md:mb-12 max-w-3xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </Section>
    </div>
  );
}

