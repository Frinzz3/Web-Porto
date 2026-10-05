import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/80 border border-neutral-900/10 text-neutral-700 shadow-sm backdrop-blur-md",
        className
      )}
    >
      {number && (
        <span className="text-[var(--accent)] font-mono text-[11px] font-bold">
          {number}
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}
