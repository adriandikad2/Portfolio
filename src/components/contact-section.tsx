"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Heart, FileText } from "lucide-react";
import { GithubIcon, YoutubeIcon, DiscordIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { OutlineButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/adriandikad2",
    icon: GithubIcon,
    color: "#e4e4e7",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Randm",
    icon: YoutubeIcon,
    color: "#ff0000",
  },
  {
    label: "Email",
    href: "mailto:adriandikad@gmail.com",
    icon: Mail,
    color: "#a855f7",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/409214212317904907",
    icon: DiscordIcon,
    color: "#5865F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrian-dika-18816a386/",
    icon: LinkedinIcon,
    color: "#0A66C2",
  },
  {
    label: "Resume",
    href: "https://github.com/adriandikad2/Portfolio/raw/main/public/Portfolio_AdrianDika.pdf",
    icon: FileText,
    color: "#eab308",
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      {/* Background spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />
            <div className="absolute h-16 w-48 rounded-full bg-primary/5 blur-2xl" />
          </div>

          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-primary">
            // contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#e4e4e7] to-[#a1a1aa] bg-clip-text text-transparent">
              Let&apos;s Build Something
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm sm:text-base px-2">
            Interested in collaborating, have a question, or just want to connect?
            Reach out through any of these channels.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  const targetId = link.href.slice(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + idx * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "group flex flex-col items-center gap-2",
              )}
            >
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl",
                  "border border-border bg-card",
                  "transition-all duration-300",
                  "group-hover:border-primary/40",
                  "group-hover:shadow-[0_0_25px_rgba(0,212,255,0.1)]"
                )}
              >
                <link.icon
                  className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
              Built using Next.js, Tailwind CSS & Framer Motion
            </p>
            <p className="font-mono text-[10px] text-[#3f3f46]">
              © {new Date().getFullYear()} Adrian Dika Darmawan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
