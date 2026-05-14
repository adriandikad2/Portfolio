"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VisualItem, VisualCollection } from "@/data/portfolio-data";
import { useState } from "react";
import { GalleryModal } from "./gallery-modal";

interface CollectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: VisualItem | null;
}

export function CollectionsModal({ isOpen, onClose, item }: CollectionsModalProps) {
  const [selectedCollection, setSelectedCollection] = useState<VisualCollection | null>(null);

  if (!isOpen || !item) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 sm:p-6 backdrop-blur-md"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                <div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
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
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
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
  const displayImage = collection.image || collection.gallery[0]?.image;

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
        
        {displayImage ? (
          <img
            src={displayImage}
            alt={collection.title}
            className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {collection.title}
          </h3>
          {collection.description && (
            <p className="line-clamp-2 text-sm text-white/70">
              {collection.description}
            </p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {collection.gallery.length} Item{collection.gallery.length !== 1 ? 's' : ''}
            </span>
            <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View Gallery →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
