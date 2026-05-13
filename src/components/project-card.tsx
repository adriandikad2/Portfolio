"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onViewGallery?: () => void;
}

export function ProjectCard({ project, index, isInView, onViewGallery }: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // 3D tilt calculation
  const rotateX = isHovered ? (mousePos.y - 0.5) * -8 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 8 : 0;

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group perspective-[1200px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "relative rounded-2xl border border-border/60 p-1",
          "bg-card/60 backdrop-blur-sm",
          "transition-colors duration-500",
          "hover:border-primary/30",
          "overflow-hidden"
        )}
      >
        {/* Animated border beam */}
        {isHovered && (
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-[-1px] rounded-2xl"
              style={{
                background: `conic-gradient(from ${
                  mousePos.x * 360
                }deg at ${mousePos.x * 100}% ${mousePos.y * 100}%, #00d4ff20, transparent 40%, #a855f720, transparent 80%)`,
              }}
            />
          </div>
        )}

        <div
          className={cn(
            "relative z-10 flex flex-col gap-6 rounded-xl bg-background/80 p-6 sm:p-8",
            "lg:flex-row lg:items-center lg:gap-10",
            isReversed && "lg:flex-row-reverse"
          )}
        >
          {/* Image placeholder */}
          <div className="relative shrink-0 overflow-hidden rounded-xl lg:w-[45%]">
            <div
              className={cn(
                "aspect-video w-full rounded-xl",
                "bg-gradient-to-br from-secondary via-[#12121a] to-background",
                "border border-border/40",
                "flex items-center justify-center",
                "transition-all duration-500",
                "group-hover:border-primary/20"
              )}
            >
              {/* Grid pattern inside placeholder */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Project ID label */}
              <div className="relative z-10 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                  {project.id}
                </span>
                <div className="mt-2 h-8 w-8 mx-auto rounded-full border border-border flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary/40" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            {/* Subtitle */}
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {project.subtitle}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2",
                    "text-xs font-medium",
                    "border border-border bg-card",
                    "text-muted-foreground transition-all duration-300",
                    "hover:border-primary/40 hover:text-primary",
                    "hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  )}
                >
                  {link.label.toLowerCase().includes("source") ||
                  link.label.toLowerCase().includes("github") ? (
                    <GithubIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </motion.a>
              ))}
              {project.gallery && project.gallery.length > 0 && (
                <motion.button
                  onClick={onViewGallery}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2",
                    "text-xs font-medium",
                    "bg-primary/10 border border-primary/30 text-primary",
                    "transition-all duration-300",
                    "hover:bg-primary/20 hover:border-primary/50",
                    "hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  )}
                >
                  View Gallery
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
