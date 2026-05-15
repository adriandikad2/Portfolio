"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Linkify } from "@/components/ui/linkify";

export interface GalleryItem {
  id: string;
  image?: string;
  imageLabel?: string;
  color?: string;
  title?: string;
  description: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: (finalIndex: number) => void;
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

export function GalleryModal({
  isOpen,
  onClose,
  title,
  subtitle,
  items,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const infoPanelRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when items change
  useEffect(() => {
    if (infoPanelRef.current) {
      infoPanelRef.current.scrollTop = 0;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsClosing(false);
      
      // Only set overflow hidden on body, avoid height: 100% which causes jumps
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    }
    
    return () => {
      const otherModals = document.querySelectorAll('[role="dialog"], .fixed.inset-0.z-\\[100\\]');
      if (otherModals.length <= 1) {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };
  }, [isOpen]);

  const safeIndex = currentIndex >= items.length ? 0 : currentIndex;
  const currentItem = items[safeIndex];

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose(safeIndex);
    }, 250);
  }, [onClose, safeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || isClosing) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % items.length);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isClosing, items.length, handleClose]);

  // Scroll wheel navigation
  useEffect(() => {
    if (!isOpen || isClosing || items.length <= 1) return;

    let scrollCooldown = false;

    const handleWheel = (e: WheelEvent) => {
      // Only handle if the scroll is on the image area or the modal backdrop
      if (scrollCooldown) return;
      
      e.preventDefault();
      scrollCooldown = true;

      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else if (e.deltaY < 0) {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }

      setTimeout(() => {
        scrollCooldown = false;
      }, 200);
    };

    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isOpen, isClosing, items.length]);

  if (!isOpen || !items || items.length === 0) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <AnimatePresence>
      {isOpen && !isClosing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-background/90 p-4 sm:p-6 backdrop-blur-md touch-none"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex h-[85vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl lg:flex-row overscroll-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Absolute for mobile */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left side: Image Viewer */}
            <div ref={imageContainerRef} className="relative flex flex-1 flex-col bg-background p-4 lg:p-6">
              {/* Image Container */}
              <div
                className={cn(
                  "relative flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br",
                  currentItem.color || "from-secondary to-background"
                )}
              >
                {/* Preload next/prev images to prevent delay when rapidly clicking */}
                <div className="hidden">
                  {items.length > 1 && (() => {
                    const nextImg = items[(safeIndex + 1) % items.length]?.image;
                    const prevImg = items[(safeIndex - 1 + items.length) % items.length]?.image;
                    return (
                      <>
                        {nextImg && <img src={nextImg} alt="" />}
                        {prevImg && <img src={prevImg} alt="" />}
                      </>
                    );
                  })()}
                </div>
                {/* Grid pattern placeholder */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <AnimatePresence mode="popLayout">
                  {currentItem.image ? (
                    <motion.img
                      key={currentItem.image}
                      src={currentItem.image}
                      alt={currentItem.title || "Gallery image"}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 h-full w-full object-contain z-10"
                    />
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center relative z-10 w-full"
                    >
                      <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground/70">
                        Image Placeholder
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Removed Absolute Overlay */}
              </div>

              {/* Image title - Moved here (between image and dots) */}
              <div className="h-12 flex items-center justify-center px-4 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {(currentItem.imageLabel || currentItem.title) && (
                    <motion.p 
                      key={currentItem.imageLabel || currentItem.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-medium text-foreground/80 line-clamp-2 text-center"
                    >
                      {currentItem.imageLabel || currentItem.title}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Controls BELOW image */}
              {items.length > 1 && (
                <div className="flex items-center justify-center gap-6 py-2">
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center rounded-full border border-border bg-background/80 p-2.5 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {/* Stylish Dots (Instagram-style) */}
                  <div className="flex items-center gap-1.5 px-2">
                    {items.map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{
                          width: currentIndex === idx ? 16 : 6,
                          backgroundColor: currentIndex === idx ? "var(--primary)" : "rgba(161, 161, 170, 0.3)",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-1.5 rounded-full"
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center rounded-full border border-border bg-background/80 p-2.5 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right side: Info Panel */}
            <div className="flex h-1/3 w-full flex-col border-t border-border bg-background p-6 sm:p-8 lg:h-full lg:w-[400px] lg:border-l lg:border-t-0 shrink-0">
              <div className="hidden items-center justify-end lg:flex">
                <button
                  onClick={handleClose}
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-[#27272a]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col pt-2 lg:pt-0 overflow-hidden">
                <span className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {subtitle}
                </span>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                  {title}
                </h2>

                <div ref={infoPanelRef} className="flex-1 overflow-y-auto pr-2 pb-8 overscroll-contain">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={currentItem.id || safeIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {currentItem.title && (
                        <h3 className="text-lg font-semibold text-foreground">
                          {currentItem.title}
                        </h3>
                      )}
                      <div className="text-foreground leading-relaxed whitespace-pre-wrap text-sm">
                        {currentItem.description.includes("EN 🇬🇧:") ? (
                          <div className="space-y-4">
                            <div className="relative pl-4 border-l-2 border-primary/30 py-1">
                              <Linkify text={currentItem.description.split("EN 🇬🇧:")[0].replace("ID 🇮🇩:", "").trim()} />
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-border via-border/20 to-transparent my-4" />
                            <div className="relative pl-4 border-l-2 border-accent/30 py-1 text-foreground/90">
                              <Linkify text={currentItem.description.split("EN 🇬🇧:")[1].trim()} />
                            </div>
                          </div>
                        ) : (
                          <Linkify text={currentItem.description} />
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
