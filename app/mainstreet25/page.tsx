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
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 md:left-1/3 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-purple/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <Section className="relative py-12 md:py-20 lg:py-32">
        {/* Hero Section */}
        <div className="mb-12 md:mb-20 max-w-4xl mx-auto text-center px-4">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
            <span className="text-xs md:text-sm font-semibold text-primary">Mainstreet Summit 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight px-2">
            <span className="block gradient-text">Hey There,</span>
            <span className="block text-foreground mt-1 md:mt-2">Summit Attendees</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-normal mb-6 md:mb-8 px-2">
            Thanks for coming to my "TED" talk! Here's everything you need — 
            my slides and some special offers.
          </p>
          <div className="text-base md:text-xl text-muted-foreground px-2">
            👋 From your friendly neighborhood builder
          </div>
        </div>

        <div className="space-y-8 md:space-y-16 max-w-5xl mx-auto px-4">
          {/* Talk PDF Section */}
          <div className="card p-6 sm:p-8 md:p-12 lg:p-16 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">📄</div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 group-hover:gradient-text transition-all">
                    My Talk Slides
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-foreground mb-4 md:mb-6 leading-relaxed">
                    Everything I covered (and probably some things I forgot to mention) in one convenient place. 
                    View them, share them, print them out and use them as a doorstop — I don't judge.
                  </p>
                  <Link
                    href="https://docs.google.com/presentation/d/1yYu0IL3Micac-NN2iE5f9TvYTfBjrtboHYgT73SLFWE/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-full px-5 md:px-6 py-2.5 md:py-3 group-hover:border-primary transition-colors group/link touch-manipulation min-h-[44px] flex items-center"
                  >
                    <div className="text-base md:text-lg font-semibold text-primary group-hover/link:translate-x-1 transition-transform inline-flex items-center gap-2">
                      📊 View Slides →
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Frase.io Coupon Section */}
          <div className="card p-6 sm:p-8 md:p-12 lg:p-16 group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-secondary/20 via-primary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">🚀</div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3 md:mb-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 group-hover:gradient-text transition-all">
                      Build Your Content Engine
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
                      with Frase.io
                    </p>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-foreground mb-4 md:mb-6 leading-relaxed">
                    If you or your marketing team wants to build a content engine that actually works 
                    and start ranking on AI search (yes, that's a thing now), here's your chance to try it out.
                  </p>
                  <Link
                    href="https://frase.io?utm_source=shegunotulana&utm_medium=referral&utm_campaign=mainstreet-summit-2025&utm_content=frase-coupon&utm_term=MAINSTREET25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-5 sm:p-6 md:p-8 mb-4 md:mb-6 border-2 border-primary/30 hover:border-primary hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer group/coupon touch-manipulation"
                  >
                    <div className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                      Exclusive Summit Coupon Code
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 font-mono tracking-wider break-all">
                      MAINSTREET25
                    </div>
                    <div className="text-lg sm:text-xl text-primary font-bold mb-2">
                      50% Off Professional Plan
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-foreground flex flex-wrap items-center gap-2">
                      <span>Use this code when you sign up at</span>
                      <span className="text-primary font-semibold group-hover/coupon:underline whitespace-nowrap">
                        frase.io
                      </span>
                      <span className="text-primary opacity-0 group-hover/coupon:opacity-100 transition-opacity">→</span>
                    </div>
                  </Link>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold">
                      ✓ AI-Powered Content
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold">
                      ✓ Rank on AI Search
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold">
                      ✓ Content That Ranks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ListedKit.ai Coupon Section */}
          <div className="card p-6 sm:p-8 md:p-12 lg:p-16 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-accent-purple/20 via-primary/15 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">✨</div>
                <div className="flex-1 min-w-0">
                  <div className="mb-3 md:mb-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 group-hover:gradient-text transition-all">
                      AI Magic for Real Estate
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
                      with ListedKit.ai
                    </p>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-foreground mb-4 md:mb-6 leading-relaxed">
                    If you're an agent, transaction coordinator, or know someone who wants to use AI 
                    to be more efficient from contract to close (and honestly, who doesn't?), this one's for you.
                  </p>
                  <Link
                    href="https://listedkit.ai?utm_source=shegunotulana&utm_medium=referral&utm_campaign=mainstreet-summit-2025&utm_content=listedkit-coupon&utm_term=MAINSTREET25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-accent-purple/10 to-primary/10 rounded-2xl p-5 sm:p-6 md:p-8 mb-4 md:mb-6 border-2 border-accent-purple/30 hover:border-accent-purple hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer group/coupon touch-manipulation"
                  >
                    <div className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                      Exclusive Summit Coupon Code
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-purple mb-2 font-mono tracking-wider break-all">
                      MAINSTREET25
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-foreground flex flex-wrap items-center gap-2">
                      <span>Use this code when you sign up at</span>
                      <span className="text-accent-purple font-semibold group-hover/coupon:underline whitespace-nowrap">
                        listedkit.ai
                      </span>
                      <span className="text-accent-purple opacity-0 group-hover/coupon:opacity-100 transition-opacity">→</span>
                    </div>
                  </Link>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-purple/10 text-accent-purple rounded-full text-xs md:text-sm font-semibold">
                      ✓ Contract to Close
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-purple/10 text-accent-purple rounded-full text-xs md:text-sm font-semibold">
                      ✓ AI Efficiency
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-accent-purple/10 text-accent-purple rounded-full text-xs md:text-sm font-semibold">
                      ✓ Work Smarter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center pt-6 md:pt-8 px-4">
            <p className="text-base sm:text-lg text-muted-foreground mb-3 md:mb-4">
              Questions? Find me on{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold touch-manipulation">
                my contact page
              </Link>
              {" "}or hit me up on socials.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-semibold">
              Thanks for being awesome. Now go build something cool. 🚀
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

