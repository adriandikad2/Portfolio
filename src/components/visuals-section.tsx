"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { GalleryModal } from "@/components/ui/gallery-modal";
import type { GalleryItem } from "@/data/portfolio-data";

interface VisualItem {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  gallery: GalleryItem[];
}

const visualItems: VisualItem[] = [
  {
    id: "blender-1",
    title: "3D Character Model",
    category: "Blender",
    description: "High-poly character model with PBR textures",
    color: "from-primary/20 to-chart-4/20",
    gallery: [
      {
        id: "b1-g1",
        title: "Front Orthographic",
        description: "Front view of the character model showing clean edge flow and topology optimized for animation.",
        color: "from-primary/20 to-chart-4/20",
      },
      {
        id: "b1-g2",
        title: "Wireframe Overlay",
        description: "Wireframe rendering demonstrating the polygon density and edge loop placement around joints.",
        color: "from-chart-4/20 to-primary/20",
      },
      {
        id: "b1-g3",
        title: "PBR Textures",
        description: "Close-up shot of the materials, highlighting the roughness and normal maps baked in Substance Painter.",
        color: "from-accent/20 to-primary/20",
      }
    ]
  },
  {
    id: "roblox-env-1",
    title: "Game Environment",
    category: "Roblox Studio",
    description: "Detailed interior environment for CLUTTER",
    color: "from-accent/20 to-chart-5/20",
    gallery: [
      {
        id: "re1-g1",
        title: "Main Lobby",
        description: "The central hub area featuring custom lighting, volumetric fog, and optimized PBR assets.",
        color: "from-accent/20 to-chart-5/20",
      },
      {
        id: "re1-g2",
        title: "Corridor Lighting",
        description: "A showcase of the dynamic lighting setup and shadow mapping used throughout the hallways.",
        color: "from-chart-5/20 to-accent/20",
      }
    ]
  },
  {
    id: "sims-1",
    title: "Interior Design — Modern Loft",
    category: "The Sims 4",
    description: "Contemporary loft with custom furniture placement",
    color: "from-chart-3/20 to-primary/20",
    gallery: [
      {
        id: "s1-g1",
        title: "Living Area",
        description: "An open-plan living space utilizing moveobjects for custom shelving and plant placements.",
        color: "from-chart-3/20 to-primary/20",
      },
      {
        id: "s1-g2",
        title: "Kitchen Layout",
        description: "Industrial style kitchen featuring exposed brick and overhead custom lighting.",
        color: "from-primary/20 to-chart-3/20",
      }
    ]
  },
  {
    id: "graphic-1",
    title: "Memory Album Cover",
    category: "Graphic Design",
    description: "Digital album art with photo manipulation",
    color: "from-chart-2/20 to-accent/20",
    gallery: [
      {
        id: "g1-g1",
        title: "Final Cover",
        description: "The finalized album artwork featuring deep color grading and overlay textures.",
        color: "from-chart-2/20 to-accent/20",
      },
      {
        id: "g1-g2",
        title: "Typography Variants",
        description: "Alternative typography explorations for the album title and artist name.",
        color: "from-accent/20 to-[#f472b6]/20",
      }
    ]
  },
  {
    id: "blender-2",
    title: "Environment Props",
    category: "Blender",
    description: "Low-poly game-ready props collection",
    color: "from-chart-4/20 to-primary/20",
    gallery: [
      {
        id: "b2-g1",
        title: "Prop Sheet",
        description: "A collection of 15+ low-poly props sharing a single texture atlas for mobile optimization.",
        color: "from-chart-4/20 to-primary/20",
      }
    ]
  },
  {
    id: "roblox-env-2",
    title: "Map Design — Arena",
    category: "Roblox Studio",
    description: "Competitive arena layout with dynamic lighting",
    color: "from-chart-5/20 to-accent/20",
    gallery: [
      {
        id: "re2-g1",
        title: "Top-Down View",
        description: "Level design overview showing the three-lane structure and choke points.",
        color: "from-chart-5/20 to-accent/20",
      },
      {
        id: "re2-g2",
        title: "Spawn Area",
        description: "The detailed spawn room featuring team-specific coloring and directional signage.",
        color: "from-accent/20 to-chart-5/20",
      }
    ]
  },
];

export function VisualsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<VisualItem | null>(null);

  return (
    <section id="visuals" ref={sectionRef} className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-chart-4/40 to-transparent" />
            <div className="absolute h-16 w-48 rounded-full bg-chart-4/5 blur-2xl" />
          </div>

          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-chart-4">
            // visuals
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#e4e4e7] to-[#a1a1aa] bg-clip-text text-transparent">
              The Visual Portfolio
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            3D modeling, environment design, and digital media — the creative
            side of game development.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visualItems.map((item, idx) => (
            <VisualCard
              key={item.id}
              item={item}
              index={idx}
              isInView={isInView}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {/* New Gallery Modal */}
      <GalleryModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ""}
        subtitle={selectedItem?.category || ""}
        items={selectedItem?.gallery || []}
      />
    </section>
  );
}

function VisualCard({
  item,
  index,
  isInView,
  onClick,
}: {
  item: VisualItem;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-xl",
          "border border-border/60",
          "bg-card/60",
          "transition-all duration-500",
          "hover:border-primary/30",
          "hover:shadow-[0_0_30px_rgba(0,212,255,0.05)]"
        )}
      >
        {/* Gradient placeholder */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-80",
            item.color
          )}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
            {item.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="w-full p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="text-[11px] text-muted-foreground">{item.description}</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <Eye className="h-3.5 w-3.5 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
