"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Home,
  Crosshair,
  FolderKanban,
  ImageIcon,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const dockItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Skills", href: "#skills", icon: Crosshair },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Visuals", href: "#visuals", icon: ImageIcon },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingDock() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show dock when scrolling up or at top, hide when scrolling down fast
    if (latest < 100) {
      setVisible(true);
    } else if (latest > lastScrollY && latest - lastScrollY > 5) {
      setVisible(false);
    } else if (lastScrollY > latest && lastScrollY - latest > 5) {
      setVisible(true);
    }
    setLastScrollY(latest);
  });

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: visible ? 0 : 100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-2xl px-3 py-2",
          "border border-[#27272a]/60",
          "bg-[#0a0a0f]/80 backdrop-blur-xl",
          "shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        )}
      >
        {dockItems.map((item) => (
          <DockIcon key={item.label} item={item} />
        ))}
      </div>
    </motion.nav>
  );
}

function DockIcon({
  item,
}: {
  item: (typeof dockItems)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={item.label}
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 10, scale: 0.8 }
        }
        transition={{ duration: 0.15 }}
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2",
          "whitespace-nowrap rounded-md px-2.5 py-1",
          "bg-[#1a1a2e] border border-[#27272a]",
          "text-xs font-medium text-[#e4e4e7]",
          "shadow-lg pointer-events-none"
        )}
      >
        {item.label}
      </motion.span>

      {/* Icon button */}
      <motion.div
        className={cn(
          "flex items-center justify-center",
          "h-11 w-11 rounded-xl",
          "text-[#71717a] transition-colors duration-200",
          "hover:text-[#00d4ff] hover:bg-[#00d4ff]/10"
        )}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <item.icon className="h-5 w-5" />
      </motion.div>
    </a>
  );
}
