import Link from "next/link";
import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mainstreet Summit 2025 - Shegun Otulana",
  description: "Resources from my talk at Mainstreet Summit 2025",
};

export default function MainstreetPage() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Section className="relative py-20 md:py-32">
        {/* Hero Section */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
            <span className="text-sm font-semibold text-primary">Mainstreet Summit 2025</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block gradient-text">Hey There,</span>
            <span className="block text-foreground mt-2">Summit Attendees</span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-normal mb-8">
            Thanks for coming to my "TED" talk! Here's everything you need — 
            my slides and some special offers.
          </p>
          <div className="text-xl text-muted-foreground">
            👋 From your friendly neighborhood builder
          </div>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Talk PDF Section */}
          <div className="card p-12 md:p-16 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">📄</div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:gradient-text transition-all">
                    My Talk Slides
                  </h2>
                  <p className="text-xl text-foreground mb-6 leading-relaxed">
                    Everything I covered (and probably some things I forgot to mention) in one convenient place. 
                    View them, share them, print them out and use them as a doorstop — I don't judge.
                  </p>
                  <Link
                    href="https://docs.google.com/presentation/d/1yYu0IL3Micac-NN2iE5f9TvYTfBjrtboHYgT73SLFWE/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-full px-6 py-3 group-hover:border-primary transition-colors group/link"
                  >
                    <div className="text-lg font-semibold text-primary group-hover/link:translate-x-1 transition-transform inline-flex items-center gap-2">
                      📊 View Slides →
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Frase.io Coupon Section */}
          <div className="card p-12 md:p-16 group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 via-primary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 group-hover:gradient-text transition-all">
                      Build Your Content Engine
                    </h2>
                    <p className="text-2xl text-muted-foreground font-semibold">
                      with Frase.io
                    </p>
                  </div>
                  <p className="text-xl text-foreground mb-6 leading-relaxed">
                    If you or your marketing team wants to build a content engine that actually works 
                    and start ranking on AI search (yes, that's a thing now), here's your chance to try it out.
                  </p>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-6 border-2 border-primary/30">
                    <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                      Exclusive Summit Coupon Code
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-mono tracking-wider">
                      MAINSTREET25
                    </div>
                    <div className="text-xl text-primary font-bold mb-2">
                      50% Off Professional Plan
                    </div>
                    <div className="text-lg text-foreground">
                      Use this code when you sign up at{" "}
                      <Link href="https://frase.io?utm_source=shegunotulana&utm_medium=referral&utm_campaign=mainstreet-summit-2025&utm_content=frase-coupon&utm_term=MAINSTREET25" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                        frase.io
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      ✓ AI-Powered Content
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      ✓ Rank on AI Search
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      ✓ Content That Ranks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ListedKit.ai Coupon Section */}
          <div className="card p-12 md:p-16 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-purple/20 via-primary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">✨</div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 group-hover:gradient-text transition-all">
                      AI Magic for Real Estate
                    </h2>
                    <p className="text-2xl text-muted-foreground font-semibold">
                      with ListedKit.ai
                    </p>
                  </div>
                  <p className="text-xl text-foreground mb-6 leading-relaxed">
                    If you're an agent, transaction coordinator, or know someone who wants to use AI 
                    to be more efficient from contract to close (and honestly, who doesn't?), this one's for you.
                  </p>
                  <div className="bg-gradient-to-r from-accent-purple/10 to-primary/10 rounded-2xl p-8 mb-6 border-2 border-accent-purple/30">
                    <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                      Exclusive Summit Coupon Code
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-accent-purple mb-2 font-mono tracking-wider">
                      MAINSTREET25
                    </div>
                    <div className="text-lg text-foreground">
                      Use this code when you sign up at{" "}
                      <Link href="https://listedkit.ai?utm_source=shegunotulana&utm_medium=referral&utm_campaign=mainstreet-summit-2025&utm_content=listedkit-coupon&utm_term=MAINSTREET25" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline font-semibold">
                        listedkit.ai
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-semibold">
                      ✓ Contract to Close
                    </span>
                    <span className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-semibold">
                      ✓ AI Efficiency
                    </span>
                    <span className="px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-semibold">
                      ✓ Work Smarter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Questions? Find me on{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                my contact page
              </Link>
              {" "}or hit me up on socials.
            </p>
            <p className="text-xl text-foreground font-semibold">
              Thanks for being awesome. Now go build something cool. 🚀
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

