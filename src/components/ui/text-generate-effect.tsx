"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: TextGenerateEffectProps) {
  const [mounted, setMounted] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn("font-bold", className)}>
      <AnimatePresence>
        {mounted && (
          <motion.div className="leading-snug tracking-tight">
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="inline-block mr-[0.3em]"
                initial={{
                  opacity: 0,
                  filter: filter ? "blur(10px)" : "none",
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration,
                  delay: idx * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TypewriterEffectProps {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  delay?: number;
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
  delay = 0,
}: TypewriterEffectProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const fullText = words.map((w) => w.text).join(" ");
  const characters = fullText.split("");

  // Map each character index to which word it belongs to
  let charIndex = 0;
  const charToWordMap: number[] = [];
  words.forEach((word, wordIdx) => {
    const text = word.text + (wordIdx < words.length - 1 ? " " : "");
    for (let i = 0; i < text.length; i++) {
      charToWordMap.push(wordIdx);
      charIndex++;
    }
  });

  return (
    <div className={cn("text-center font-bold", className)}>
      <AnimatePresence>
        {mounted && (
          <motion.div className="inline-block">
            {characters.map((char, idx) => {
              const wordIdx = charToWordMap[idx];
              const wordClass = words[wordIdx]?.className || "";
              return (
                <motion.span
                  key={idx}
                  className={cn("inline-block", wordClass, char === " " && "w-[0.3em]")}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: idx * 0.04,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
            {/* Blinking cursor */}
            <motion.span
              className={cn(
                "inline-block w-[3px] h-[1em] ml-1 align-middle bg-cyan-glow",
                cursorClassName
              )}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
