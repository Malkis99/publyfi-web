import * as React from "react";
import Link from "next/link";

type Variant = "solid" | "outline" | "ghost";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

export function CosmicButton({ asChild, href, variant = "solid", className = "", children, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
  const styles: Record<Variant, string> = {
    solid: "bg-gradient-to-r from-highlight to-accent text-white shadow-glow hover:opacity-90",
    outline: "border border-accent/40 text-white hover:bg-accent/10",
    ghost: "text-white hover:bg-white/10"
  };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (asChild && href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
