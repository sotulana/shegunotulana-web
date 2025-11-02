import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shegun Otulana",
  description: "Builder, investor, and CEO focused on practical company building and compounding impact. CEO of Copysmith AI.",
  openGraph: {
    title: "Shegun Otulana",
    description: "Builder, investor, and CEO focused on practical company building and compounding impact.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shegun Otulana",
    description: "Builder, investor, and CEO focused on practical company building.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shegun Otulana",
              jobTitle: "CEO",
              worksFor: {
                "@type": "Organization",
                name: "Copysmith AI",
              },
              description: "Builder, investor, and CEO focused on practical company building and compounding impact.",
              url: "https://shegunotulana.com",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
