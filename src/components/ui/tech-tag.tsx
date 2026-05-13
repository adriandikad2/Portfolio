import React from "react";
import { cn } from "@/lib/utils";
import { getSkillColor } from "@/data/portfolio-data";

interface TechTagProps {
  tag: string;
  className?: string;
}

export function TechTag({ tag, className }: TechTagProps) {
  const color = getSkillColor(tag);

  // Map the abstract color strings to specific Tailwind utility classes
  // We use the same glow variants defined in globals.css
  const colorClasses = {
    cyan: "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/40 shadow-[0_0_0_rgba(0,212,255,0)] hover:shadow-[0_0_10px_rgba(0,212,255,0.15)]",
    violet: "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20 hover:bg-[#a855f7]/20 hover:border-[#a855f7]/40 shadow-[0_0_0_rgba(168,85,247,0)] hover:shadow-[0_0_10px_rgba(168,85,247,0.15)]",
    indigo: "bg-[#818cf8]/10 text-[#818cf8] border-[#818cf8]/20 hover:bg-[#818cf8]/20 hover:border-[#818cf8]/40 shadow-[0_0_0_rgba(129,140,248,0)] hover:shadow-[0_0_10px_rgba(129,140,248,0.15)]",
    emerald: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20 hover:bg-[#10b981]/20 hover:border-[#10b981]/40 shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_10px_rgba(16,185,129,0.15)]",
    default: "bg-muted text-muted-foreground border-border/50 hover:bg-muted/80 hover:border-border shadow-none"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-md text-xs font-mono border transition-all duration-300",
        colorClasses[color] || colorClasses.default,
        className
      )}
    >
      {tag}
    </span>
  );
}
