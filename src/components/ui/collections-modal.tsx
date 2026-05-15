"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VisualItem, VisualCollection } from "@/data/portfolio-data";
import { useState, useEffect } from "react";
import { GalleryModal } from "./gallery-modal";

interface CollectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: VisualItem | null;
}

export function CollectionsModal({ isOpen, onClose, item }: CollectionsModalProps) {
  const [selectedCollection, setSelectedCollection] = useState<VisualCollection | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Reset state when the modal opens with a new item
  useEffect(() => {
    if (isOpen) {
      setSelectedCollection(null);
      setIsClosing(false);
    }
  }, [isOpen]);

  // Lock body scroll when collections modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    }
    
    return () => {
      // Only restore scroll if no other modals are open
      const otherModals = document.querySelectorAll('.fixed.inset-0.z-\\[100\\], .fixed.inset-0.z-\\[110\\], [role="dialog"]');
      if (otherModals.length <= 1) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleClose = () => {
    setIsClosing(true);
    // Let the exit animation play before actually closing
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <>
      {/* Collections modal backdrop + content — stays visible even when gallery is open */}
      <AnimatePresence>
        {isOpen && !isClosing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 sm:p-6 backdrop-blur-md touch-none"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl overscroll-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 bg-background/50 p-5 sm:p-6 backdrop-blur-sm">
                <div>
                  <h2 className="text-xl font-bold text-foreground sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-mono text-sm text-primary">
                    {item.category}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Collections Grid */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 overscroll-contain">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {item.collections.map((collection, index) => (
                    <CollectionCard 
                      key={collection.id} 
                      collection={collection} 
                      index={index}
                      onClick={() => setSelectedCollection(collection)} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery modal renders on TOP of the collections modal (z-[110]) */}
      <GalleryModal
        isOpen={selectedCollection !== null}
        onClose={() => setSelectedCollection(null)}
        title={selectedCollection?.title || ""}
        subtitle={item.title}
        items={selectedCollection?.gallery || []}
      />
    </>
  );
}

function CollectionCard({ 
  collection, 
  index, 
  onClick 
}: { 
  collection: VisualCollection; 
  index: number;
  onClick: () => void;
}) {
  const images = collection.gallery
    .map((g) => g.image)
    .filter((img): img is string => !!img);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const displayImage = collection.image || images[currentImageIndex] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-xl",
          "border border-border/60",
          "bg-card/60",
          "transition-all duration-300",
          "hover:border-primary/40",
          "hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 z-0 bg-gradient-to-br",
            collection.color || "from-secondary to-background"
          )}
        />

        {/* Auto-rotating images with crossfade */}
        {images.length > 0 ? (
          <AnimatePresence mode="sync">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={collection.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-10 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
        )}

        {/* Overlay - Gradient for text legibility without obscuring too much */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
          <h3 className="mb-1 text-lg font-semibold text-white drop-shadow-md">
            {collection.title}
          </h3>
          {collection.description && (
            <p className="line-clamp-2 text-sm text-foreground drop-shadow-sm">
              {collection.description}
            </p>
          )}
          <div className="mt-3 flex items-center justify-end">
            <span className="text-xs font-medium text-primary drop-shadow-md opacity-0 transition-opacity group-hover:opacity-100">
              View Gallery →
            </span>
          </div>

          {/* Slide dots */}
          {images.length > 1 && (
            <div className="mt-2 flex items-center gap-1">
              {images.map((_, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    width: currentImageIndex === idx ? 12 : 4,
                    backgroundColor: currentImageIndex === idx
                      ? "var(--primary)"
                      : "rgba(255,255,255,0.35)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}


