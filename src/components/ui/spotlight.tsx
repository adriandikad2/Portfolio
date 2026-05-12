"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "#00d4ff" }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
    >
      <svg
        className="absolute h-[100vh] w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="spotlight-gradient-1"
            cx="30%"
            cy="30%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={fill} stopOpacity="0.12" />
            <stop offset="50%" stopColor={fill} stopOpacity="0.04" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="spotlight-gradient-2"
            cx="70%"
            cy="60%"
            r="45%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#spotlight-gradient-1)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#spotlight-gradient-2)"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Mouse-tracking gradient spotlight for the hero background.
 */
export function MouseSpotlight({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
    >
      {/* Primary cyan spotlight that follows cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 212, 255, 0.07), transparent 60%)`,
        }}
      />
      {/* Secondary violet ambient glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(800px circle at 20% 80%, rgba(168, 85, 247, 0.04), transparent 60%)`,
            `radial-gradient(800px circle at 80% 20%, rgba(168, 85, 247, 0.04), transparent 60%)`,
            `radial-gradient(800px circle at 20% 80%, rgba(168, 85, 247, 0.04), transparent 60%)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
