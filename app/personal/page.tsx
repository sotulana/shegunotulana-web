import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal",
  description: "About Shegun Otulana",
};

export default function PersonalPage() {
  const aboutMe = `At 18 years old, I moved to Birmingham, Alabama from Lagos, Nigeria to attend the University of Alabama at Birmingham. Two decades after arriving as a teenage student immigrant, I sold Therapy Brands for $1.25B — one of the largest software exits in Alabama history.

With help from my parents, credit cards, paid internships, side gigs, and the goodwill of others, I earned my degree from UAB. After an initial entrepreneurial failure, my wife, Mary, encouraged me to take another shot — and using all of our savings I founded what would eventually become TheraNest and Therapy Brands (now Ensora Health). This experience is one of our many inspirations for a commitment to education and economic empowerment, especially through entrepreneurship.

Today, I enjoy building and currently run products like Frase.io, Describely.ai, ListedKit.ai, Ravecapture.com, Las Gidi, Appthink among other Harmony Venture Labs initiatives. I'm a recipient of EY Entrepreneur of the Year Southeast and the Aspen Global Institute's Henry Crown Fellowship. 

At HVL, we focus on turning problems into useful products and companies, often partnering with people in places that don't get a lot of attention. We co-build with founders and enterprises, prioritize capital-efficient growth, and share what works so others can move faster. I also serve as CEO of Copysmith AI, one of HVL's earliest ventures.

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
              <p key={idx} className="text-xl md:text-2xl text-foreground leading-relaxed font-normal mb-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
