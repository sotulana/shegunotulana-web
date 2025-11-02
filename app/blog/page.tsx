import Link from "next/link";
import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest posts and articles by Shegun Otulana",
};

const topics = [
  {
    title: "Company Building",
    description: "Practical playbooks for building durable companies",
    emoji: "🏗️",
  },
  {
    title: "Capital Efficiency",
    description: "How constraints become operating advantages",
    emoji: "💡",
  },
  {
    title: "Venture Studios",
    description: "What works and what to avoid in studio models",
    emoji: "🎨",
  },
];

export default function BlogPage() {
  const substackUrl = "https://shegun.substack.com";

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative py-20">
        <div className="mb-20 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Writing</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-normal mb-12">
            I write Let's Build on Substack about practical company building, 
            systems, and lessons learned from building and investing.
          </p>
        </div>

        <div className="mb-20">
          <Link
            href={substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-12 md:p-16 group relative overflow-hidden block max-w-3xl mx-auto hover:scale-105 transition-transform duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent-purple/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 text-center">
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">📝</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:gradient-text transition-all">
                Read on Substack
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                All my articles and posts are published on Substack. 
                Subscribe to get updates on new posts.
              </p>
              <div className="btn btn-primary inline-flex items-center group">
                Visit Substack
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What I Write About</h2>
          <div className="space-y-8">
            {topics.map((topic, idx) => (
              <div
                key={topic.title}
                className={`card p-10 group relative overflow-hidden max-w-2xl ${
                  idx % 2 === 0 ? 'mr-auto hover:rotate-1' : 'ml-auto hover:-rotate-1'
                } transition-transform duration-500`}
              >
                <div className={`absolute ${idx % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-64 h-64 bg-gradient-to-br from-accent-purple/15 to-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="relative z-10 flex items-start gap-6">
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{topic.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:gradient-text transition-all">
                      {topic.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
