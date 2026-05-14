"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton, OutlineButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
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
            Adrian Dika
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
          A little bit about my projects, passions, and powers.
          <br className="hidden sm:block" />
          <span className="text-muted-foreground">
            Major interests in the whole process of game development, from ideas, conceptualizations, draft sketches, codes, arts, asset creations, marketing & research, community building and managing, sound design, and confident singing in-between projects. Also fullstack applications (with AI integration these days).
          </span>
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
          <OutlineButton href="#" target="_blank">
            <FileText className="h-4 w-4" />
            View Resume
          </OutlineButton>
        </motion.div>


      </div>
    </section>
  );
}

