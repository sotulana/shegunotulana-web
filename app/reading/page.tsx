import Link from "next/link";
import { Section } from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading",
  description: "Books and articles by Shegun Otulana",
};

interface Book {
  title: string;
  author: string;
  url: string;
}

const currentlyReading: Book[] = [
  {
    title: "Play Nice But Win",
    author: "Michael Dell",
    url: "https://amzn.to/4nvpIKF",
  },
];

const recentlyRead: Book[] = [
  {
    title: "Scientific Advertising",
    author: "Claude Hopkins",
    url: "https://amzn.to/3Jy5zWi",
  },
  {
    title: "Double Your Profits",
    author: "Bob Fifer",
    url: "https://amzn.to/4ol6Y1J",
  },
  {
    title: "Men and Rubber: The Story of Business",
    author: "Harvey Firestone",
    url: "https://amzn.to/3WA3k7K",
  },
];

const foundAroundWeb: Array<{ title: string; url: string; description?: string }> = [
  {
    title: "It's The End of the (ARR) World and I Feel Fine",
    url: "https://queener.substack.com/p/its-the-end-of-the-arr-world-and",
    description: "So much changes - but probably for the better if we are honest with ourselves",
  },
];

export default function ReadingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Section className="relative py-20">
        <div className="mb-20 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="gradient-text">Reading</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-normal">
            Books I'm currently reading, recently finished, and interesting finds from around the web.
          </p>
        </div>

        <div className="space-y-20">
          {/* Articles */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Articles</h2>
            {foundAroundWeb.length > 0 ? (
              <div className="space-y-6">
                {foundAroundWeb.map((link, idx) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card p-10 md:p-12 group relative overflow-hidden block max-w-3xl ${
                      idx % 2 === 0 ? 'ml-auto hover:rotate-1' : 'mr-auto hover:-rotate-1'
                    } transition-transform duration-500`}
                  >
                    <div className={`absolute ${idx % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-80 h-80 bg-gradient-to-br from-accent-purple/15 to-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="text-5xl group-hover:scale-125 transition-transform duration-300">🔗</div>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:gradient-text transition-all">
                            {link.title}
                          </h3>
                          {link.description && (
                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                              {link.description}
                            </p>
                          )}
                          <div className="text-lg text-accent-purple font-semibold group-hover:translate-x-2 transition-transform inline-block">
                            Read →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="card p-10 md:p-12 max-w-3xl">
                <div className="text-4xl mb-4">🔗</div>
                <p className="text-lg text-muted-foreground italic">
                  Interesting articles and links will appear here...
                </p>
              </div>
            )}
          </div>

          {/* Currently Reading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Currently Reading (or Rereading)</h2>
            <div className="space-y-6">
              {currentlyReading.map((book, idx) => (
                <Link
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-10 md:p-12 group relative overflow-hidden block max-w-3xl hover:rotate-1 transition-transform duration-500"
                >
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-secondary/15 to-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl group-hover:scale-125 transition-transform duration-300">📚</div>
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:gradient-text transition-all">
                          {book.title}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-4">
                          by {book.author}
                        </p>
                        <div className="text-lg text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                          View on Amazon →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recently Read */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Recently Read (or Re-reading)</h2>
            <div className="space-y-6">
              {recentlyRead.map((book, idx) => (
                <Link
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card p-10 md:p-12 group relative overflow-hidden block max-w-3xl ${
                    idx % 2 === 0 ? 'mr-auto hover:rotate-1' : 'ml-auto hover:-rotate-1'
                  } transition-transform duration-500`}
                >
                  <div className={`absolute ${idx % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-80 h-80 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl group-hover:scale-125 transition-transform duration-300">📖</div>
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:gradient-text transition-all">
                          {book.title}
                        </h3>
                        <p className="text-xl text-muted-foreground mb-4">
                          by {book.author}
                        </p>
                        <div className="text-lg text-secondary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                          View on Amazon →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

