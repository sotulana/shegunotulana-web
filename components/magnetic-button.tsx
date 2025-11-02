"use client";

import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ href, children, className, onClick }: MagneticButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const ref = linkRef.current || buttonRef.current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  if (href) {
    return (
      <Link
        href={href}
        ref={linkRef}
        className={cn("magnetic", className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={cn("magnetic", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </button>
  );
}

