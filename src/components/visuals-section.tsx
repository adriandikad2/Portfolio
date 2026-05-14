"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CollectionsModal } from "@/components/ui/collections-modal";
import { Linkify } from "@/components/ui/linkify";
import { TechTag } from "@/components/ui/tech-tag";

import { visualItems } from "@/data/portfolio-data";
import type { VisualItem } from "@/data/portfolio-data";

export function VisualsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<VisualItem | null>(null);
  const [cardIndices, setCardIndices] = useState<Record<string, number>>({});

  const handleCloseGallery = () => {
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
              Visual Portfolio
            </span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-lg mx-auto">
            3D modeling, environment design, and <br />digital media, alongside content creation.
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

      <CollectionsModal
        isOpen={selectedItem !== null}
        onClose={handleCloseGallery}
        item={selectedItem}
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
  const isSingleCollection = item.collections.length === 1;
  const rotationItems = isSingleCollection 
    ? item.collections[0].gallery 
    : item.collections;
  
  const rotationLength = rotationItems.length;

  useEffect(() => {
    if (rotationLength <= 1) return;
    
    const interval = setInterval(() => {
      onIndexChange((currentIndex + 1) % rotationLength);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, rotationLength, onIndexChange]);

  const safeIndex = rotationLength > 0 
    ? (currentIndex >= rotationLength ? 0 : currentIndex) 
    : 0;

  const currentCollection = isSingleCollection 
    ? item.collections[0] 
    : item.collections[safeIndex];

  const currentImage = isSingleCollection
    ? currentCollection?.gallery[safeIndex]?.image || currentCollection?.image || item.image
    : currentCollection?.image || currentCollection?.gallery[0]?.image || item.image;

  const currentColor = currentCollection?.color || item.color;

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

        {/* Center label - Original Category */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <TechTag 
            tag={item.category} 
            className="uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-background/80 backdrop-blur-sm border-white/10 px-4" 
          />
        </div>

        {/* Hover overlay - Stronger gradient for legibility */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-40">
          <div className="w-full p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white drop-shadow-md">
                  {currentCollection?.title || item.title}
                </p>
                <div className="text-[11px] text-white/80 line-clamp-2 hover:line-clamp-none transition-all duration-300 drop-shadow-sm">
                  {(() => {
                    const desc = currentCollection?.description || item.description;
                    if (desc.includes("EN 🇬🇧:")) {
                      const parts = desc.split("EN 🇬🇧:");
                      return (
                        <div className="flex flex-col gap-1">
                          <span><Linkify text={parts[0].replace("ID 🇮🇩:", "").trim()} /></span>
                          <span className="opacity-70 border-t border-white/20 pt-1 mt-1">
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
              <span className="block text-sm font-bold text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.4)] text-center uppercase tracking-wider">
                Click me!
              </span>
            </div>
          </div>
        </div>

        {/* Stylish Dots (Instagram-style) */}
        {rotationLength > 1 && (
          <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2 flex items-center gap-1 px-1.5 py-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
            {rotationItems.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: safeIndex === idx ? 10 : 4,
                  backgroundColor: safeIndex === idx ? "var(--primary)" : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full"
              />
            ))}
          </div>
        )}

        {/* Image title overlay - Card Title */}
        <div className="absolute bottom-0 left-0 right-0 z-50">
          <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent px-3 pt-5 pb-2.5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/90 drop-shadow-md line-clamp-1">
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
