import Link from "next/link";
import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shegun Otulana",
};

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sheguno",
    icon: "💼",
    gradient: "from-[var(--color-primary)]/20 to-[var(--color-primary)]/10",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/sotulana",
    icon: "🐦",
    gradient: "from-foreground/20 to-foreground/10",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shegun_otulana/",
    icon: "📸",
    gradient: "from-[var(--color-accent-purple)]/20 to-[var(--color-primary)]/10",
  },
  {
    name: "Substack",
    url: "https://shegun.substack.com",
    icon: "📝",
    gradient: "from-[var(--color-warm)]/20 to-[var(--color-warm)]/10",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative py-20">
        <div className="mb-20 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Let's Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-normal">
            Reach out through social media or for speaking engagements, partnerships, or collaborations.
          </p>
        </div>

        <div className="mb-20 space-y-6">
          {socialLinks.map((social, idx) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-10 md:p-12 group relative overflow-hidden block max-w-2xl ${
                idx % 2 === 0 ? 'mr-auto hover:rotate-1' : 'ml-auto hover:-rotate-1'
              } transition-transform duration-500`}
            >
              <div className={`absolute ${idx % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-80 h-80 bg-gradient-to-br ${social.gradient} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="relative z-10 flex items-center gap-8">
                <div className="text-6xl group-hover:scale-125 transition-transform duration-300">{social.icon}</div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {social.name}
                  </h3>
                  <p className="text-lg text-muted-foreground group-hover:translate-x-2 transition-transform inline-block">
                    Follow →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
