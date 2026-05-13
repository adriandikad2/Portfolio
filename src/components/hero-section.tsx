"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { MouseSpotlight } from "@/components/ui/spotlight";
import { Particles } from "@/components/ui/particles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton, OutlineButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <MouseSpotlight />
      <Particles quantity={50} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            Computer Engineering @ Universitas Indonesia
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-2 text-7xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-r from-[#e4e4e7] via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
            Adrian
          </span>
        </motion.h1>

        {/* Subtitle with text generate effect */}
        <div className="mb-6">
          <TextGenerateEffect
            words="Game Developer & Engineer"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-glow-cyan"
            delay={0.8}
            duration={0.6}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Bridging complex system architecture with immersive world-building.
          <br className="hidden sm:block" />
          <span className="text-muted-foreground">
            From Luau game logic to full-stack web platforms —
          </span>{" "}
          crafting interactive experiences that push boundaries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ShimmerButton href="#projects">
            <ArrowDown className="h-4 w-4" />
            View Projects
          </ShimmerButton>
          <OutlineButton href="#">
            <FileText className="h-4 w-4" />
            View Resume
          </OutlineButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-[#52525b] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
