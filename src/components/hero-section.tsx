"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton, OutlineButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground whitespace-nowrap">
                  Computer Engineering @ UI
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-2 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="bg-gradient-to-r from-[#e4e4e7] via-[#e4e4e7] to-[#71717a] bg-clip-text text-transparent">
                Adrian Dika
              </span>
            </motion.h1>

            {/* Subtitle */}
            <div className="mb-8">
              <TextGenerateEffect
                words="Game Developer & Engineer"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-glow-cyan"
                delay={0.8}
                duration={0.6}
              />
            </div>

            {/* Combined Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-10 max-w-xl space-y-4 text-sm sm:text-lg text-foreground leading-relaxed"
            >
              <p>
                Hellooo! I'm Adrian, a CompEng student based on University of Indonesia. I love everything gaming, arts, music, tech, and everything in between.
              </p>
              <p>
                Major interests in game development from ideas and creations to market research, community building and managing to sound design, and confident singing in-between projects. Recently learnt <span className="text-luau font-medium">Luau</span> with physics mechanisms and <span className="text-nextjs font-medium">Next.js</span> for full-stack architectures with <span className="text-ai font-medium">AI</span>-assisted tools.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <ShimmerButton href="#projects">
                <ArrowDown className="h-4 w-4" />
                View Projects
              </ShimmerButton>
              <OutlineButton href="https://github.com/adriandikad2/Portfolio/raw/main/public/Portfolio_AdrianDika.pdf" target="_blank">
                <FileText className="h-4 w-4" />
                View Resume
              </OutlineButton>
            </motion.div>
          </div>

          {/* Right Column: Photo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }}
            className="relative mx-auto lg:ml-auto w-full max-w-[400px] aspect-square order-1 lg:order-2"
          >
            {/* Minimalist Circular Image frame */}
            <div className="relative h-full w-full rounded-full border-2 border-primary/20 overflow-hidden bg-card/50 backdrop-blur-sm group shadow-2xl">
              <img
                src="/profile.webp"
                alt="Adrian Dika"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

