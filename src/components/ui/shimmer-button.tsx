"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  onClick?: () => void;
  href?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#00d4ff",
  onClick,
  href,
}: ShimmerButtonProps) {
  const content = (
    <motion.span
      className={cn(
        "group relative z-10 inline-flex items-center justify-center gap-2",
        "rounded-lg px-8 py-3.5 text-sm font-semibold",
        "bg-gradient-to-r from-[#00d4ff] to-[#818cf8]",
        "text-[#0a0a0f] transition-all duration-300",
        "overflow-hidden",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* Glow on hover */}
      <span
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 25px ${shimmerColor}60, 0 0 50px ${shimmerColor}30`,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function OutlineButton({
  children,
  className,
  onClick,
  href,
}: OutlineButtonProps) {
  const content = (
    <motion.span
      className={cn(
        "group relative inline-flex items-center justify-center gap-2",
        "rounded-lg px-8 py-3.5 text-sm font-semibold",
        "border border-[#27272a] bg-transparent",
        "text-[#e4e4e7] transition-all duration-300",
        "hover:border-[#00d4ff]/50 hover:text-[#00d4ff]",
        "overflow-hidden cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {/* Moving border effect */}
      <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span
          className="absolute inset-[-1px] rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00d4ff40, transparent)",
            animation: "border-spin 3s linear infinite",
          }}
        />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
