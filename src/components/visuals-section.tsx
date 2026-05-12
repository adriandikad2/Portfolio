"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

const visualItems = [
  {
    id: "blender-1",
    title: "3D Character Model",
    category: "Blender",
    description: "High-poly character model with PBR textures",
    color: "from-[#00d4ff]/20 to-[#818cf8]/20",
  },
  {
    id: "roblox-env-1",
    title: "Game Environment",
    category: "Roblox Studio",
    description: "Detailed interior environment for CLUTTER",
    color: "from-[#a855f7]/20 to-[#6366f1]/20",
  },
  {
    id: "sims-1",
    title: "Interior Design — Modern Loft",
    category: "The Sims 4",
    description: "Contemporary loft with custom furniture placement",
    color: "from-[#34d399]/20 to-[#00d4ff]/20",
  },
  {
    id: "graphic-1",
    title: "Memory Album Cover",
    category: "Graphic Design",
    description: "Digital album art with photo manipulation",
    color: "from-[#f472b6]/20 to-[#a855f7]/20",
  },
  {
    id: "blender-2",
    title: "Environment Props",
    category: "Blender",
    description: "Low-poly game-ready props collection",
    color: "from-[#818cf8]/20 to-[#00d4ff]/20",
  },
  {
    id: "roblox-env-2",
    title: "Map Design — Arena",
    category: "Roblox Studio",
    description: "Competitive arena layout with dynamic lighting",
    color: "from-[#6366f1]/20 to-[#a855f7]/20",
  },
];

export function VisualsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
            <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-[#818cf8]/40 to-transparent" />
            <div className="absolute h-16 w-48 rounded-full bg-[#818cf8]/5 blur-2xl" />
          </div>

          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#818cf8]">
            // visuals
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#e4e4e7] to-[#a1a1aa] bg-clip-text text-transparent">
              The Visual Portfolio
            </span>
          </h2>
          <p className="mt-4 text-[#71717a] max-w-lg mx-auto">
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
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            items={visualItems}
            currentIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onNavigate={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function VisualCard({
  item,
  index,
  isInView,
  onClick,
}: {
  item: (typeof visualItems)[number];
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
          "border border-[#27272a]/60",
          "bg-[#12121a]/60",
          "transition-all duration-500",
          "hover:border-[#00d4ff]/30",
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
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#52525b] group-hover:text-[#71717a] transition-colors">
            {item.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0a0a0f]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="w-full p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#e4e4e7]">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#71717a]">{item.description}</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00d4ff]/20">
                <Eye className="h-3.5 w-3.5 text-[#00d4ff]" />
              </div>
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md border border-[#27272a]/60 bg-[#0a0a0f]/60 px-2 py-0.5 text-[10px] font-mono text-[#71717a] backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: {
  items: typeof visualItems;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0a0f]/90 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-full border border-[#27272a] bg-[#12121a] p-2 text-[#71717a] hover:text-[#e4e4e7] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image area */}
        <div
          className={cn(
            "aspect-video rounded-xl border border-[#27272a]/60",
            "bg-gradient-to-br",
            item.color,
            "bg-[#12121a]/80 flex items-center justify-center"
          )}
        >
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#52525b]">
              {item.category}
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#e4e4e7]">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-[#71717a]">{item.description}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() =>
              onNavigate(
                (currentIndex - 1 + items.length) % items.length
              )
            }
            className="flex items-center gap-2 rounded-lg border border-[#27272a] bg-[#12121a] px-4 py-2 text-sm text-[#71717a] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <span className="font-mono text-xs text-[#52525b]">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={() =>
              onNavigate((currentIndex + 1) % items.length)
            }
            className="flex items-center gap-2 rounded-lg border border-[#27272a] bg-[#12121a] px-4 py-2 text-sm text-[#71717a] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
