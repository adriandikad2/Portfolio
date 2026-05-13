"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon, ItchIcon } from "@/components/ui/brand-icons";
import { Linkify } from "@/components/ui/linkify";
import { TechTag } from "@/components/ui/tech-tag";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onViewGallery?: () => void;
}

export function ProjectCard({ 
  project, 
  index, 
  isInView, 
  currentIndex,
  onIndexChange,
  onViewGallery 
}: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = project.gallery;
    if (!gallery || gallery.length <= 1) return;
    
    const interval = setInterval(() => {
      onIndexChange((currentIndex + 1) % gallery.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, project.gallery, onIndexChange]);

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
  const safeIndex = project.gallery && project.gallery.length > 0 
    ? (currentIndex >= project.gallery.length ? 0 : currentIndex) 
    : 0;
  const currentGalleryItem = project.gallery?.[safeIndex];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={project.gallery && project.gallery.length > 0 ? onViewGallery : undefined}
      className={cn("group perspective-[1200px]", project.gallery && project.gallery.length > 0 && "cursor-pointer")}
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
          {/* Image Area */}
          <div className="relative shrink-0 overflow-hidden rounded-xl lg:w-[45%] aspect-video">
            <div
              className={cn(
                "h-full w-full rounded-xl relative",
                "bg-gradient-to-br from-secondary via-[#12121a] to-background",
                "border border-border/40",
                "flex items-center justify-center",
                "transition-all duration-500",
                "group-hover:border-primary/20"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    currentGalleryItem?.color || "from-secondary to-background"
                  )}
                />
              </AnimatePresence>

              {currentGalleryItem?.image && (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentGalleryItem.image}
                    src={currentGalleryItem.image}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 h-full w-full object-cover z-10"
                  />
                </AnimatePresence>
              )}

              {/* Grid pattern inside placeholder */}
              <div
                className="absolute inset-0 opacity-[0.04] z-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              
              {/* Project ID label - only if no image */}
              {!currentGalleryItem?.image && (
                <div className="relative z-30 text-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                    {project.id}
                  </span>
                  <div className="mt-2 h-8 w-8 mx-auto rounded-full border border-border flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary/40" />
                  </div>
                </div>
              )}

              {/* Counter badge */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="absolute left-3 top-3 z-40">
                  <span className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-sm">
                    {currentIndex + 1} / {project.gallery.length}
                  </span>
                </div>
              )}

              {/* Image title overlay */}
              {(currentGalleryItem?.imageLabel || currentGalleryItem?.title) && (
                <div className="absolute bottom-0 left-0 right-0 z-40">
                  <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pt-6 pb-3">
                    <p className="text-xs font-medium text-white/90 drop-shadow-md line-clamp-1">
                      {currentGalleryItem.imageLabel || currentGalleryItem.title}
                    </p>
                  </div>
                </div>
              )}
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
            <div className="text-sm leading-relaxed text-muted-foreground min-h-[8rem]">
              {currentGalleryItem?.title ? (
                <span className="text-foreground font-medium block mb-2 text-base line-clamp-1">
                  {currentGalleryItem.title}
                </span>
              ) : null}
              
              {/* Handling ID/EN splitting for either gallery or main description */}
              {(() => {
                const desc = currentGalleryItem?.description || project.description;
                if (desc.includes("EN 🇬🇧:")) {
                  const parts = desc.split("EN 🇬🇧:");
                  return (
                    <div className="space-y-3">
                      <div className="relative pl-3 border-l border-primary/40 line-clamp-3">
                        <Linkify text={parts[0].replace("ID 🇮🇩:", "").trim()} />
                      </div>
                      <div className="relative pl-3 border-l border-accent/40 opacity-80 text-xs line-clamp-2">
                        <Linkify text={parts[1].trim()} />
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="line-clamp-5">
                    <Linkify text={desc} />
                  </div>
                );
              })()}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechTag key={tag} tag={tag} />
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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
                  ) : link.label.toLowerCase().includes("itch") ? (
                    <ItchIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}
                  {link.label}
                </motion.a>
              ))}
            </div>
            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-4 mt-auto">
                <span className="block text-lg font-bold text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary/90 text-center sm:text-left">
                  Click to see more
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
