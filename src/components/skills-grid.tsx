"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/portfolio-data";

const colorMap = {
  cyan: {
    border: "border-primary/20",
    hoverBorder: "hover:border-primary/40",
    bg: "bg-primary/5",
    hoverBg: "hover:bg-primary/10",
    text: "text-primary",
    glow: "rgba(0, 212, 255, 0.15)",
    tag: "bg-primary/10 text-primary border-primary/20",
  },
  violet: {
    border: "border-accent/20",
    hoverBorder: "hover:border-accent/40",
    bg: "bg-accent/5",
    hoverBg: "hover:bg-accent/10",
    text: "text-accent",
    glow: "rgba(168, 85, 247, 0.15)",
    tag: "bg-accent/10 text-accent border-accent/20",
  },
  indigo: {
    border: "border-[#818cf8]/20",
    hoverBorder: "hover:border-[#818cf8]/40",
    bg: "bg-chart-4/5",
    hoverBg: "hover:bg-chart-4/10",
    text: "text-chart-4",
    glow: "rgba(129, 140, 248, 0.15)",
    tag: "bg-chart-4/10 text-chart-4 border-[#818cf8]/20",
  },
  emerald: {
    border: "border-[#34d399]/20",
    hoverBorder: "hover:border-[#34d399]/40",
    bg: "bg-[#34d399]/5",
    hoverBg: "hover:bg-[#34d399]/10",
    text: "text-[#34d399]",
    glow: "rgba(52, 211, 153, 0.15)",
    tag: "bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20",
  },
};

export function SkillsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      {/* Section header */}
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Lamp effect decoration */}
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
            <div className="absolute h-16 w-48 rounded-full bg-primary/5 blur-2xl" />
          </div>

          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // skills
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#e4e4e7] to-[#a1a1aa] bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            The tools and technologies I wield to bring ideas to life — from game engines to full-stack systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px]">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} index={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  index,
  isInView,
}: {
  category: (typeof skillCategories)[number];
  index: number;
  isInView: boolean;
}) {
  const colors = colorMap[category.color];
  const Icon = category.icon;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const spanClass = cn(
    category.span === "large" && "md:col-span-2 md:row-span-2",
    category.span === "medium" && "md:row-span-2",
    category.span === "small" && "md:col-span-1"
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-xl border p-6 transition-all duration-500 overflow-hidden cursor-default",
        colors.border,
        colors.hoverBorder,
        "bg-card/50 hover:bg-card/80",
        spanClass
      )}
    >
      {/* Magic card spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, ${colors.glow}, transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* Icon + Title */}
          <div className="mb-3 flex items-center gap-3">
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300",
                colors.bg,
                "group-hover:scale-110"
              )}
            >
              <Icon className={cn("h-4.5 w-4.5", colors.text)} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="text-[10px] text-muted-foreground/70 font-mono">
                {category.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2.5 py-1",
                "text-[11px] font-mono transition-all duration-300",
                colors.tag,
                "hover:scale-105"
              )}
            >
              {skill.name}
              {skill.level && (
                <span className="ml-1 text-[9px] opacity-60">
                  • {skill.level}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
