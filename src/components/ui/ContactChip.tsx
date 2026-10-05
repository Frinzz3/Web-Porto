import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ContactChipProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function ContactChip({
  label,
  href,
  icon,
  external = true,
  className,
  variant = "secondary",
}: ContactChipProps) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        isPrimary &&
          "bg-neutral-900 text-white hover:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        !isPrimary &&
          !isOutline &&
          "bg-white text-neutral-800 border border-neutral-900/10 hover:border-neutral-900/30 hover:bg-neutral-50 hover:-translate-y-0.5 shadow-sm",
        isOutline &&
          "border border-neutral-900/15 text-neutral-800 hover:bg-white/80 hover:-translate-y-0.5",
        className
      )}
    >
      {icon && <span className="text-neutral-500 group-hover:text-neutral-900 transition-colors">{icon}</span>}
      <span>{label}</span>
      {external && (
        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
      )}
    </a>
  );
}
