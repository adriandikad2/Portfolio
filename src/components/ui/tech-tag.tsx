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
    amber: "bg-[#fbbf24]/10 text-[#fbbf24] border-[#fbbf24]/20 hover:bg-[#fbbf24]/20 hover:border-[#fbbf24]/40 shadow-[0_0_0_rgba(251,191,36,0)] hover:shadow-[0_0_10px_rgba(251,191,36,0.15)]",
    rose: "bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/20 hover:bg-[#f43f5e]/20 hover:border-[#f43f5e]/40 shadow-[0_0_0_rgba(244,63,94,0)] hover:shadow-[0_0_10px_rgba(244,63,94,0.15)]",
    sky: "bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20 hover:bg-[#38bdf8]/20 hover:border-[#38bdf8]/40 shadow-[0_0_0_rgba(56,189,248,0)] hover:shadow-[0_0_10px_rgba(56,189,248,0.15)]",
    fuchsia: "bg-[#e879f9]/10 text-[#e879f9] border-[#e879f9]/20 hover:bg-[#e879f9]/20 hover:border-[#e879f9]/40 shadow-[0_0_0_rgba(232,121,249,0)] hover:shadow-[0_0_10px_rgba(232,121,249,0.15)]",
    orange: "bg-[#fb923c]/10 text-[#fb923c] border-[#fb923c]/20 hover:bg-[#fb923c]/20 hover:border-[#fb923c]/40 shadow-[0_0_0_rgba(251,146,60,0)] hover:shadow-[0_0_10px_rgba(251,146,60,0.15)]",
    slate: "bg-[#94a3b8]/10 text-[#94a3b8] border-[#94a3b8]/20 hover:bg-[#94a3b8]/20 hover:border-[#94a3b8]/40 shadow-[0_0_0_rgba(148,163,184,0)] hover:shadow-[0_0_10px_rgba(148,163,184,0.15)]",
    teal: "bg-[#2dd4bf]/10 text-[#2dd4bf] border-[#2dd4bf]/20 hover:bg-[#2dd4bf]/20 hover:border-[#2dd4bf]/40 shadow-[0_0_0_rgba(45,212,191,0)] hover:shadow-[0_0_10px_rgba(45,212,191,0.15)]",
    blue: "bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20 hover:bg-[#60a5fa]/20 hover:border-[#60a5fa]/40 shadow-[0_0_0_rgba(96,165,250,0)] hover:shadow-[0_0_10px_rgba(96,165,250,0.15)]",
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
