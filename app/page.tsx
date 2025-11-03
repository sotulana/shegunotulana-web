"use client";

import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { MagneticButton } from "@/components/magnetic-button";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".text-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero 
        title="Shegun Otulana"
      >
        <div className="flex flex-wrap gap-4 mt-6">
          <MagneticButton href="/personal" className="btn btn-primary group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              About Me
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity"></div>
          </MagneticButton>
          <MagneticButton href="/work" className="btn btn-outline group relative">
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </span>
          </MagneticButton>
        </div>
      </Hero>

      <div className="relative">
        {/* Organic shapes background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl"></div>
        </div>

        <Section className="relative py-12 sm:py-16 md:py-24 lg:py-32">
          {/* Asymmetrical intro */}
          <div className="mb-12 md:mb-20 max-w-2xl px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-reveal">
              What I'm up to
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-reveal">
              A few ways to dive in
            </p>
          </div>
          
          {/* Asymmetrical card layout */}
          <div className="space-y-6 md:space-y-12 px-4">
            <Link 
              href="/personal" 
              className="card p-6 sm:p-8 md:p-10 lg:p-12 group relative overflow-hidden block max-w-2xl ml-auto hover:rotate-1 transition-transform duration-500 touch-manipulation active:scale-[0.98]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">👤</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                  Personal
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  My background, values, and the journey that shaped how I build companies.
                </p>
                <div className="mt-4 md:mt-6 text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Learn more →
                </div>
              </div>
            </Link>
            
            <Link 
              href="/work" 
              className="card p-6 sm:p-8 md:p-10 lg:p-12 group relative overflow-hidden block max-w-2xl mr-auto hover:-rotate-1 transition-transform duration-500 touch-manipulation active:scale-[0.98]"
            >
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-tr from-secondary/20 via-primary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">💼</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                  Work
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  The products and companies I've built, invested in, and helped scale.
                </p>
                <div className="mt-4 md:mt-6 text-secondary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  See projects →
                </div>
              </div>
            </Link>
            
            <Link 
              href="/blog" 
              className="card p-6 sm:p-8 md:p-10 lg:p-12 group relative overflow-hidden block max-w-2xl ml-auto hover:rotate-1 transition-transform duration-500 touch-manipulation active:scale-[0.98]"
            >
              <div className="absolute top-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-accent-purple/20 via-primary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 inline-block group-hover:scale-110 transition-transform duration-300">✍️</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                  Blog
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Thoughts on building, investing, operating, and the systems that actually work.
                </p>
                <div className="mt-4 md:mt-6 text-accent-purple font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Read posts →
                </div>
              </div>
            </Link>
          </div>
        </Section>
      </div>
    </main>
  );
}
