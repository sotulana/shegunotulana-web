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
        "container mx-auto max-w-[var(--max-width)] px-[var(--gutter)] py-16",
        className
      )}
    >
      {children}
    </section>
  );
}


