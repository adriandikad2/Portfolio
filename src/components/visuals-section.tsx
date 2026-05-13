"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { GalleryModal } from "@/components/ui/gallery-modal";
import type { GalleryItem } from "@/data/portfolio-data";
import { Linkify } from "@/components/ui/linkify";
import { TechTag } from "@/components/ui/tech-tag";

import { visualItems } from "@/data/portfolio-data";
import type { VisualItem } from "@/data/portfolio-data";

export function VisualsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<VisualItem | null>(null);
  const [cardIndices, setCardIndices] = useState<Record<string, number>>({});

  const handleCloseGallery = (finalIndex: number) => {
    if (selectedItem) {
      setCardIndices((prev) => ({
        ...prev,
        [selectedItem.id]: finalIndex,
      }));
    }
    setSelectedItem(null);
  };

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
              currentIndex={cardIndices[item.id] || 0}
              onIndexChange={(newIndex) => 
                setCardIndices(prev => ({ ...prev, [item.id]: newIndex }))
              }
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {/* New Gallery Modal */}
      <GalleryModal
        isOpen={selectedItem !== null}
        onClose={handleCloseGallery}
        title={selectedItem?.title || ""}
        subtitle={selectedItem?.category || ""}
        items={selectedItem?.gallery || []}
      />
    </section>
  );
}

import { useEffect } from "react";

function VisualCard({
  item,
  index,
  isInView,
  currentIndex,
  onIndexChange,
  onClick,
}: {
  item: VisualItem;
  index: number;
  isInView: boolean;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClick: () => void;
}) {
  useEffect(() => {
    if (item.gallery.length <= 1) return;
    
    const interval = setInterval(() => {
      onIndexChange((currentIndex + 1) % item.gallery.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, item.gallery.length, onIndexChange]);

  const safeIndex = item.gallery && item.gallery.length > 0 
    ? (currentIndex >= item.gallery.length ? 0 : currentIndex) 
    : 0;
  const currentGalleryItem = item.gallery[safeIndex];
  const currentImage = currentGalleryItem?.image || item.image;
  const currentColor = currentGalleryItem?.color || item.color;

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
        {/* Image / Gradient placeholder */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-80",
                currentColor
              )}
            />
          </AnimatePresence>
          
          {currentImage && (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={item.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 h-full w-full object-cover z-10"
              />
            </AnimatePresence>
          )}
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] z-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <TechTag tag={item.category} className="uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-background/80 backdrop-blur-sm border-white/10" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-40">
          <div className="w-full p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <div className="text-[11px] text-muted-foreground line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {(() => {
                    const desc = currentGalleryItem?.description || item.description;
                    if (desc.includes("EN 🇬🇧:")) {
                      const parts = desc.split("EN 🇬🇧:");
                      return (
                        <div className="flex flex-col gap-1">
                          <span><Linkify text={parts[0].replace("ID 🇮🇩:", "").trim()} /></span>
                          <span className="opacity-60 border-t border-muted-foreground/20 pt-1 mt-0.5">
                            <Linkify text={parts[1].trim()} />
                          </span>
                        </div>
                      );
                    }
                    return <Linkify text={desc} />;
                  })()}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span className="block text-base font-bold text-primary/80 transition-colors duration-300 group-hover:text-primary text-center">
                Click to see more
              </span>
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute left-3 top-3 z-50">
          <span className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-sm">
            {safeIndex + 1} / {item.gallery.length}
          </span>
        </div>

        {/* Image title overlay */}
        {(currentGalleryItem?.imageLabel || currentGalleryItem?.title) && (
          <div className="absolute bottom-0 left-0 right-0 z-50">
            <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-3 pt-5 pb-2.5">
              <p className="text-[10px] font-medium text-white/90 drop-shadow-md line-clamp-1">
                {currentGalleryItem.imageLabel || currentGalleryItem.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
