import Link from "next/link";
import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Products and companies built by Shegun Otulana",
};

interface WorkItem {
  name: string;
  url?: string;
}

const featuredWork: WorkItem[] = [
  {
    name: "Harmony Venture Labs",
    url: "https://www.harmonyventurelabs.com",
  },
  {
    name: "frase.io",
    url: "https://frase.io",
  },
  {
    name: "describely.ai",
    url: "https://describely.ai",
  },
  {
    name: "listedkit.ai",
    url: "https://listedkit.ai",
  },
];

export default function WorkPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative py-12 sm:py-16 md:py-20">
        {/* Asymmetrical staggered layout */}
        <div className="space-y-8 md:space-y-16 px-4">
          {featuredWork.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const rotation = isEven ? 'hover:rotate-1' : 'hover:-rotate-1';
            const alignment = isEven ? 'ml-auto' : 'mr-auto';
            
            return (
              <div
                key={item.name}
                className={`card p-6 sm:p-8 md:p-10 lg:p-14 group relative overflow-hidden max-w-3xl ${alignment} ${rotation} transition-transform duration-500 touch-manipulation active:scale-[0.98]`}
              >
                {/* Animated gradient background */}
                <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  {item.url ? (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                        {item.name}
                      </h3>
                      <div className="text-base sm:text-lg text-muted-foreground group-hover:text-primary transition-colors">
                        {item.url.replace(/^https?:\/\//, '')} →
                      </div>
                    </Link>
                  ) : (
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                      {item.name}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
}

