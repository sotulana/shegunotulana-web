import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "container mx-auto max-w-[var(--max-width)] px-4 sm:px-6 md:px-[var(--gutter)] py-12 sm:py-16 md:py-20",
        className
      )}
    >
      {children}
    </section>
  );
}


