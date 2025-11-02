import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal",
  description: "About Shegun Otulana",
};

export default function PersonalPage() {
  const aboutMe = `At 18 years old, I moved to Birmingham, Alabama from Lagos, Nigeria. With help from my parents, credit cards, paid internships, side gigs, and the goodwill of others, I earned my degree from the University of Alabama at Birmingham.

After an initial entrepreneurial failure following college, my wife encouraged me to try again. Using all of our savings, plus debt, hard work, and some good fortune, I founded what would eventually become TheraNest and Therapy Brands, which is now Ensora Health. I eventually exited the company for $1.25 billion, making it one of the largest software exits in the state. From a young age, I've been inspired by the power of education, learning and entrepreneurship to change lives. This experience reinforced that commitment and has guided a lot of my initiatives.

Today I run products like Frase.io, Describely.ai, ListedKit.ai, Ravecapture.com, Las Gidi, and Appthink, among other Harmony Venture Labs initiatives. I'm a recipient of EY Entrepreneur of the Year Southeast and the Aspen Global Institute's Henry Crown Fellowship.

At Harmony Venture Labs, we focus on turning problems into useful products and companies. We often partner with people in places that don't get a lot of attention. We co-build with founders and enterprises, prioritize capital-efficient growth, and share what works so others can move faster. I also serve as CEO of Copysmith AI, one of HVL's earliest ventures.

I live in Birmingham with my wife Mary and our four children.`;


  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative py-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="gradient-text">About Me</span>
          </h1>
          <div className="prose prose-lg max-w-none">
            {aboutMe.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-xl md:text-2xl text-foreground leading-relaxed font-light mb-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
