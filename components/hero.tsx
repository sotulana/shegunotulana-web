import { ReactNode } from "react";
import { Section } from "./section";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <div className="relative overflow-hidden min-h-[85vh] flex items-center gradient-mesh-animated">
      {/* Animated blob background */}
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob glow-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 glow-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[var(--color-accent-purple)]/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 glow-pulse"></div>
      </div>
      
      <Section className="relative py-20 md:py-32">
        <div className="max-w-5xl">
          {/* Playful title treatment */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-4">
              <span className="block gradient-text">{title.split(' ')[0]}</span>
              <span className="block text-foreground mt-2">{title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </div>
          
          {subtitle && (
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl leading-relaxed font-light">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </Section>
    </div>
  );
}

