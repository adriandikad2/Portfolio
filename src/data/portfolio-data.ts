import { Server, Box, Palette, Gamepad2, Globe, PenTool } from "lucide-react";
import { GithubIcon, YoutubeIcon } from "@/components/ui/brand-icons";

export const siteConfig = {
  name: "Adrian",
  title: "Adrian — Game Developer & Engineer",
  description:
    "Portfolio of Adrian, a Computer Engineering student at Universitas Indonesia specializing in game development, full-stack architecture, and 3D world building.",
  url: "https://adrian.vercel.app",
} as const;

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Visuals", href: "#visuals" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
  color: "cyan" | "violet" | "indigo" | "emerald";
  span?: "large" | "medium" | "small";
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Game Coding",
    subtitle: "Complex game logic & engine mechanics",
    icon: Gamepad2,
    skills: [
      { name: "Luau", level: "Advanced" },
      { name: "Java / libGDX", level: "Intermediate" },
      { name: "Game Logic Design" },
      { name: "Physics Systems" },
    ],
    color: "cyan",
    span: "large",
  },
  {
    title: "Full-Stack & Systems",
    subtitle: "Web architecture & serverless",
    icon: Server,
    skills: [
      { name: "Next.js" },
      { name: "Vercel Serverless" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
    ],
    color: "violet",
    span: "medium",
  },
  {
    title: "3D & World Building",
    subtitle: "Environment design & modeling",
    icon: Box,
    skills: [
      { name: "Blender" },
      { name: "Roblox Studio" },
      { name: "The Sims 4 Building" },
    ],
    color: "indigo",
    span: "medium",
  },
  {
    title: "Creative & Media",
    subtitle: "Content creation & visual design",
    icon: Palette,
    skills: [
      { name: "YouTube Content" },
      { name: "Digital Graphic Design" },
      { name: "UI/UX Design" },
    ],
    color: "emerald",
    span: "small",
  },
];

export interface GalleryItem {
  id: string;
  image?: string;
  color?: string;
  title?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
  featured?: boolean;
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    id: "clutter",
    title: "CLUTTER",
    subtitle: "Roblox Game",
    description:
      "A fully-realized Roblox experience built from the ground up with Luau scripting. Features complex game logic systems, custom physics interactions, and tightly integrated 3D assets — all designed for engaging, session-based gameplay.",
    tags: ["Luau", "Roblox Studio", "Game Logic", "Asset Integration"],
    links: [
      { label: "Play on Roblox", href: "#" },
    ],
    featured: true,
    gallery: [
      {
        id: "clutter-1",
        title: "Main Menu",
        description: "The main menu interface built entirely with Luau and Roact. Features a clean, game-engine aesthetic with smooth transitions.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-2",
        title: "Gameplay Loop",
        description: "In-game screenshot showing the core session-based mechanics. Custom physics controllers handle object manipulation.",
        color: "from-accent/20 to-secondary/20"
      }
    ]
  },
  {
    id: "die-io",
    title: "die.io",
    subtitle: "libGDX Desktop Game",
    description:
      "A Java-based 2D game built on the libGDX framework. Implements core engine mechanics including custom rendering pipelines, entity-component systems, and real-time collision detection — all running at 60fps.",
    tags: ["Java", "libGDX", "2D Rendering", "Game Engine"],
    links: [
      { label: "View Source", href: "#" },
    ],
    featured: true,
    gallery: [
      {
        id: "dieio-1",
        title: "Main Menu",
        description: "The main menu interface of die.io built with libGDX.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "dieio-2",
        title: "Gameplay",
        description: "2D rendering pipeline showcasing entities and collision.",
        color: "from-accent/20 to-secondary/20"
      }
    ]
  },
  {
    id: "ugcleaks-drawbattle",
    title: "UGCLeaks & Drawbattle",
    subtitle: "Full-Stack Web Applications",
    description:
      "A pair of production-grade web applications leveraging serverless architecture on Vercel. UGCLeaks bridges web APIs to game platforms, while Drawbattle delivers real-time multiplayer drawing experiences — both built for performance at scale.",
    tags: ["Next.js", "Vercel", "PostgreSQL", "API Bridge", "Serverless"],
    links: [
      { label: "Visit UGCLeaks", href: "#" },
      { label: "Visit Drawbattle", href: "#" },
    ],
    featured: true,
    gallery: [
      {
        id: "fullstack-1",
        title: "UGCLeaks Dashboard",
        description: "The dashboard interface of UGCLeaks built with Next.js and Tailwind.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "fullstack-2",
        title: "Drawbattle Lobby",
        description: "The multiplayer lobby for Drawbattle handling real-time socket connections.",
        color: "from-chart-2/20 to-secondary/20"
      }
    ]
  },
  {
    id: "the-visuals",
    title: "The Visuals",
    subtitle: "3D Art & Environment Design",
    description:
      "A curated showcase of creative work spanning 3D Blender models, interior environment designs in Roblox Studio and The Sims 4, and digital graphic design projects including the Memory Album series.",
    tags: ["Blender", "Roblox Studio", "Sims 4", "Graphic Design"],
    links: [
      { label: "View Gallery Section", href: "#visuals" },
    ],
    gallery: [
      {
        id: "visuals-1",
        title: "3D Environments",
        description: "A comprehensive look at complex 3D environments built in Blender.",
        color: "from-chart-3/20 to-secondary/20"
      },
      {
        id: "visuals-2",
        title: "Interior Renders",
        description: "High fidelity interior renders showcasing lighting and textures.",
        color: "from-chart-4/20 to-secondary/20"
      }
    ]
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/adriandikad2", icon: GithubIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Randm", icon: YoutubeIcon },
  { label: "Portfolio", href: "#", icon: Globe },
  { label: "Design", href: "#", icon: PenTool },
];
