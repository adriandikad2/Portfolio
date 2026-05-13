import { Server, Box, Palette, Gamepad2, Globe, PenTool } from "lucide-react";
import { GithubIcon, YoutubeIcon } from "@/components/ui/brand-icons";

export const siteConfig = {
  name: "Adrian Dika ",
  title: "Adrian Dika — Game Developer & Engineer",
  description:
    "Portfolio of Adrian Dika, a Computer Engineering student at Universitas Indonesia specializing in game development, full-stack architecture, and 3D world building.",
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
  imageLabel?: string;
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
    links: [],
    image: "/projects/CLUTTER.webp",
    featured: true,
    gallery: [
      {
        id: "clutter-1",
        title: "CLUTTER: A Roblox Game",
        image: "/projects/CLUTTER.webp",
        imageLabel: "CLUTTER Logo, still a concept, generated from Gemini (of course).",
        description: "ID 🇮🇩: CLUTTER merupakan proyek game yang saya kembangkan mulai dari pertengahan tahun 2025 menggunakan bahasa luau untuk engine Roblox. Game ini berorientasi seputar sebuah bola yang bertujuan mengumpulkan benda yang lebih kecil untuk memperbesar ukuran bola tersebut agar bisa mengumpulkan benda yang jauh lebih besar dari ukuran bola tersebut. Konsep ini berasal dari franchise game Katamari Damacy yang merupakan game favorit saya. Melihat belum ada yang pernah mereplika game yang mirip di platform Roblox, saya mencoba untuk mengambil peluang dengan membuat hal serupa selagi masih membuat semua asetnya secara orisinal agar tidak sepenuhnya memplagiat franchise Katamari Damacy yang dilindungi hak cipta di bawah studio Bandai Namco. Saya berharap penuh proyek ini mampu melihat kesuksesannya ke depan karena saya berharap agar konsep franchise Katamari Damacy menjadi mainstream di kalangan pemain. EN 🇬🇧: CLUTTER is a project that I started back in the summer of 2025 utilizing luau as the main scripting language for the Roblox engine. The basic idea of the game revolves around the player being a ball collecting objects smaller than the ball to grow the ball bigger to then collect larger objects. This concept originates from the Katamari Damacy game franchise, which is my favorite game series. Seeing that no one had ever replicated a game similar to it on the Roblox platform, I decided to take the opportunity to create something similar while still making all of the assets originally to avoid completely plagiarizing the Katamari Damacy franchise, which is protected by copyright under Bandai Namco. I have high hopes in this project because I really want to see the concept of Katamari Damacy to become mainstream amongst players, both new and old.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-2",
        title: "Devlog To Do List 1 (13/05/2026)",
        image: "/projects/ClutterToDoList1.webp",
        imageLabel: "The to do list, most were done before 2026.",
        description: "ID 🇮🇩: Disini adalah tempat saya mengetik apa saja yang terlintas di benak saya untuk saya coba realisasikan saat saya mulai mengerjakan proyeknya lagi. Kadang ada ide yang fantastis, kadang ada yang aneh, tapi semuanya saya coba ketik dahulu untuk saya ingat lagi nanti saat saya mereka ulang apa saja yang perlu dikerjakan.EN 🇬🇧: This is my playground, the place where magic happens. The workbench, the garage, the mystical list where ideas are brought to life. I always try to type down any bit of ideas that comes to my mind. I then try and see which ideas or what aspects that I can start working on or continue where I left off.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-3",
        title: "Devlog To Do List 2 (13/05/2026)",
        image: "/projects/ClutterToDoList2.webp",
        imageLabel: "The to do list can get pretty extensive around here.",
        description: "ID 🇮🇩: Lanjutan dari screenshot sebelumnya, masih rumpang karena proyek ini masih saya tekuni hingga sekarang, sampai momen anda sedang membaca tulisan ini. EN 🇬🇧: Continuation from the previous list, there are still blank unchecked boxes here and there because this project is still under my development, up until the moment you are reading this text right now.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-4",
        title: "Demo 1",
        image: "/projects/ClutterOldDemo1.webp",
        imageLabel: "Small demonstration. Was quite satisfying honestly.",
        description: "ID 🇮🇩: Ini adalah quick run test saat saya masih pertama mulai mengembangkan logika-logika game dengan bantuan AI. Saya mensimulasikan bagaimana behaviour tiap komponen dari kode berinteraksi satu sama lain. Pada tahap ini, saya sudah membuat logika pertumbuhan, deteksi objek pada dunia di game, dan tampilan UI sederhana yang menampilkan objek yang telah terkumpul pada bola di bagian kiri bawah. Demo ini didokumentasikan melalui sebuah video yang dapat diakses dari tautan berikut: https://www.youtube.com/watch?v=-MfmWiwWNZE EN 🇬🇧: This was back when I simulated the game each time I made changes to the codes to test functionalities every time the AI made changes to it. I inspected the codes generated by the AI and tested whether the functions prove to be as intended. I investigated how each components of the code would interact with each other to further determine evaluations that will be given to the current code. During this phase, I have already implemented the growth logic, object detection in the game world, and a simple UI displaying the objects that have been collected in the ball at the bottom-left. This was documented as a video that is accessible from the following link: https://www.youtube.com/watch?v=-MfmWiwWNZE",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-5",
        title: "Demo 2",
        image: "/projects/ClutterOldDemo2.webp",
        imageLabel: "A whole map, demonstrating its consumability from top to bottom. Black hole style. 😎",
        description: "ID 🇮🇩: Demo ini merupakan demo yang mensimulasikan kode yang mereplika sebuah black hole. Kode akan mendeteksi objek yang telah dikumpul, melakukan pergerakan untuk objek yang baru saja dikumpul untuk mendekati pusat bola, dan memberlakukan tweening transparansi seolah objek memang masuk ke dalam black hole. Konsep black hole ini tidak jadi diberlakukan (13/05/2026) karena masih belum fiksasi dan secara visual, menurut saya kurang appealing dan akan terasa membosankan. Pada tahap ini juga, saya merancang ulang sebuah map ruangan bertema Daycare yang pernah saya buat tahun sebelumnya (2024) untuk proyek game lain yang berbeda. Video demo terdapat pada tautan berikut: https://www.youtube.com/watch?v=vcel4ilcMws EN 🇬🇧: This second demo simulates codes that replicated behaviours of a black hole. The main idea is that the objects collected by the ball will be seemingly sucked into the center of the black hole by applying movement towards the center of the black hole and pairing it with a transparency tween to visually represent that the objects are sucked by the black hole. As of now, the black hole concept is not yet implemented and will be revisited once I have a much clearer idea further down the road of development. The map used for this demo was a map that I have built using premade assets provided from Roblox's own marketplace where users can use assets created by other users that are shared on to the platform. This map's theme revolved around a daycare and this map was built by me for a different project that occurred last year (2024). Demonstration of the video is accessible via this link: https://www.youtube.com/watch?v=vcel4ilcMws",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-6",
        title: "CLUTTER Moodboard",
        image: "/projects/ClutterMoodboard.webp",
        imageLabel: "Conceptualization of the game's ideas and visuals.",
        description: "ID 🇮🇩: Kita (saya dan rekan-rekan saya dalam proyek ini) merancang ide-ide yang tidak berkaitan langsung dengan kode pada Figma yang menjadi tempat mencetuskan konsep-konsep visual ataupun membahas alur game. EN 🇬🇧: We (my colleagues and I in this project) brainstormed ideas unrelated to the actual coding part of the game  on Figma, which served as our canvas for visualizing concepts and discussing game flow.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-7",
        title: "CLUTTER Workspace",
        image: "/projects/ClutterWorkspace.webp",
        imageLabel: "A sneak peek inside the workspace.",
        description: "ID 🇮🇩: Jelas, saya meminta AI ini dan itu untuk merealisasikan segala ide saya serta implementasi khusus yang saya rasa diperlukan agar saya bisa memangkas waktu untuk lebih melimpahkan sumber daya untuk fokus pada apa yang memang dibutuhkan game ini. Sedikit yang saya lakukan pada kode secara langsung dan lebih banyak menginvestigasi hasil kerjaan AI. EN 🇬🇧: Nevertheless, I still learn how the codes work from what AI has generated and understand the core mechanisms of each functionality and how they behave with one another. The whole integration is done using Rojo, an extension used to bridge connections between Antigravity and Roblox Studio and further synchronizes changes made in Antigravity to then be applied into Roblox Studio. The whole setup is simple.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-8",
        title: "CLUTTER Assets Tracker",
        image: "/projects/ClutterAssetProgress.webp",
        imageLabel: "Tracker in Figma for the assets made so far. Assets are done in Blender.",
        description: "ID 🇮🇩: Aset yang telah saya buat sendiri wajib saya reka agar mudah keeping track of sehingga tidak perlu adanya kesalahan dalam pengecekan aset yang belum dan sudah dibuat. Sekte merah menandakan daftar aset yang masih berupa ide dan belum direalisasikan dan sekte hijau menandakan daftar nama aset yang telah dibuat. EN 🇬🇧: Whenever I create assets, the first thing I'd do is to create a tracker to keep track of the assets that have been made and the ones that are planned to be created. The red section on the left of each group consists of the lists of the assets that are ideated to be made in Blender while the green section keeps track of all the assets that have been made in the Blender file. Sometimes objects are still not fixated to a certain category, which means that it can still be moved around to other categories. Categorizing is apparently a knowledge that I also need to master to create the planning of universally dividing all the assets into their proportionate categories.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-9",
        title: "CLUTTER Assets in Demo",
        image: "/projects/ClutterOwnAssets.webp",
        imageLabel: "Screenshot of a demo using assets I've made. So happy this turned out really lively with so many colors!",
        description: "ID 🇮🇩: Demo tersebut menggunakan aset yang diekspor dari Blender ke Roblox Studio. Banyak aspek dari kode yang telah dipermulus semenjak Februari tahun 2026. EN 🇬🇧: I've exported the assets from Blender into Roblox Studio to test the playability and performance of the game. Assets are low-poly which means that they will not consume players' memory and also saves the GPU from unloading texture assets multiple of times by only utilizing one texture file for all the assets. The amount of memory saved is around 334MB. I lied, Antigravity's own editor autocompleted that amount of memory saved. lol. But the assets are actually optimized for performance by keeping the tris count low in order to make itランニング smoothly on most devices. Antigravity also autocompleted that \"make itランニング smoothly on most devices.\", but point being, assets were tested for performance during this demo. Many of the implementations from the previous demo, such as the behaviour of a black hole, were removed because I felt like they made the gameplay lack of any soul. For now, I'll still be sticking to the original roots of a Katamari where the objects stick to the ball. Further explanation of these assets are available on the \"Visual Portfolio\" down below these cards.",
        color: "from-primary/20 to-secondary/20"
      },
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
    image: "", // Main card image
    featured: true,
    gallery: [
      {
        id: "dieio-1",
        title: "Main Menu",
        image: "", // Gallery image
        description: "The main menu interface of die.io built with libGDX.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "dieio-2",
        title: "Gameplay",
        image: "", // Gallery image
        description: "2D rendering pipeline showcasing entities and collision.",
        color: "from-accent/20 to-secondary/20"
      }
    ]
  },
  {
    id: "ugcleaks",
    title: "UGCLeaks",
    subtitle: "Full-Stack Web Application",
    description:
      "A production-grade web application leveraging serverless architecture on Vercel. UGCLeaks bridges web APIs to game platforms, built for performance at scale with robust data management.",
    tags: ["Next.js", "Vercel", "PostgreSQL", "API Bridge", "Serverless"],
    links: [
      { label: "Visit UGCLeaks", href: "#" },
    ],
    image: "", // Main card image
    featured: true,
    gallery: [
      {
        id: "fullstack-1",
        title: "UGCLeaks Dashboard",
        image: "", // Gallery image
        description: "The dashboard interface of UGCLeaks built with Next.js and Tailwind.",
        color: "from-primary/20 to-secondary/20"
      }
    ]
  },
  {
    id: "drawbattle",
    title: "Drawbattle",
    subtitle: "Real-Time Multiplayer Game",
    description:
      "A production-grade web application delivering real-time multiplayer drawing experiences. Features real-time state synchronization and low-latency interactions built for performance at scale.",
    tags: ["Next.js", "Vercel", "Real-time", "Multiplayer", "Serverless"],
    links: [
      { label: "Visit Drawbattle", href: "#" },
    ],
    image: "", // Main card image
    featured: true,
    gallery: [
      {
        id: "fullstack-2",
        title: "Drawbattle Lobby",
        image: "", // Gallery image
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
    image: "", // Main card image
    gallery: [
      {
        id: "visuals-1",
        title: "3D Environments",
        image: "", // Gallery image
        description: "A comprehensive look at complex 3D environments built in Blender.",
        color: "from-chart-3/20 to-secondary/20"
      },
      {
        id: "visuals-2",
        title: "Interior Renders",
        image: "", // Gallery image
        description: "High fidelity interior renders showcasing lighting and textures.",
        color: "from-chart-4/20 to-secondary/20"
      }
    ]
  },
];

export interface VisualItem {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  image?: string;
  gallery: GalleryItem[];
}

export const visualItems: VisualItem[] = [
  {
    id: "blender-1",
    title: "3D Character Model",
    category: "Blender",
    description: "High-poly character model with PBR textures",
    image: "", // Main card image
    color: "from-primary/20 to-chart-4/20",
    gallery: [
      {
        id: "b1-g1",
        title: "Front Orthographic",
        image: "", // Gallery image
        description: "Front view of the character model showing clean edge flow and topology optimized for animation.",
        color: "from-primary/20 to-chart-4/20",
      },
      {
        id: "b1-g2",
        title: "Wireframe Overlay",
        image: "", // Gallery image
        description: "Wireframe rendering demonstrating the polygon density and edge loop placement around joints.",
        color: "from-chart-4/20 to-primary/20",
      },
      {
        id: "b1-g3",
        title: "PBR Textures",
        image: "", // Gallery image
        description: "Close-up shot of the materials, highlighting the roughness and normal maps baked in Substance Painter.",
        color: "from-accent/20 to-primary/20",
      }
    ]
  },
  {
    id: "roblox-env-1",
    title: "Game Environment",
    category: "Roblox Studio",
    description: "Detailed interior environment for CLUTTER",
    image: "", // Main card image
    color: "from-accent/20 to-chart-5/20",
    gallery: [
      {
        id: "re1-g1",
        title: "Main Lobby",
        image: "", // Gallery image
        description: "The central hub area featuring custom lighting, volumetric fog, and optimized PBR assets.",
        color: "from-accent/20 to-chart-5/20",
      },
      {
        id: "re1-g2",
        title: "Corridor Lighting",
        image: "", // Gallery image
        description: "A showcase of the dynamic lighting setup and shadow mapping used throughout the hallways.",
        color: "from-chart-5/20 to-accent/20",
      }
    ]
  },
  {
    id: "sims-1",
    title: "Interior Design — Modern Loft",
    category: "The Sims 4",
    description: "Contemporary loft with custom furniture placement",
    image: "", // Main card image
    color: "from-chart-3/20 to-primary/20",
    gallery: [
      {
        id: "s1-g1",
        title: "Living Area",
        image: "", // Gallery image
        description: "An open-plan living space utilizing moveobjects for custom shelving and plant placements.",
        color: "from-chart-3/20 to-primary/20",
      },
      {
        id: "s1-g2",
        title: "Kitchen Layout",
        image: "", // Gallery image
        description: "Industrial style kitchen featuring exposed brick and overhead custom lighting.",
        color: "from-primary/20 to-chart-3/20",
      }
    ]
  },
  {
    id: "graphic-1",
    title: "Memory Album Cover",
    category: "Graphic Design",
    description: "Digital album art with photo manipulation",
    image: "", // Main card image
    color: "from-chart-2/20 to-accent/20",
    gallery: [
      {
        id: "g1-g1",
        title: "Final Cover",
        image: "", // Gallery image
        description: "The finalized album artwork featuring deep color grading and overlay textures.",
        color: "from-chart-2/20 to-accent/20",
      },
      {
        id: "g1-g2",
        title: "Typography Variants",
        image: "", // Gallery image
        description: "Alternative typography explorations for the album title and artist name.",
        color: "from-accent/20 to-[#f472b6]/20",
      }
    ]
  },
  {
    id: "blender-2",
    title: "Environment Props",
    category: "Blender",
    description: "Low-poly game-ready props collection",
    image: "", // Main card image
    color: "from-chart-4/20 to-primary/20",
    gallery: [
      {
        id: "b2-g1",
        title: "Prop Sheet",
        image: "", // Gallery image
        description: "A collection of 15+ low-poly props sharing a single texture atlas for mobile optimization.",
        color: "from-chart-4/20 to-primary/20",
      }
    ]
  },
  {
    id: "roblox-env-2",
    title: "Map Design — Arena",
    category: "Roblox Studio",
    description: "Competitive arena layout with dynamic lighting",
    image: "", // Main card image
    color: "from-chart-5/20 to-accent/20",
    gallery: [
      {
        id: "re2-g1",
        title: "Top-Down View",
        image: "", // Gallery image
        description: "Level design overview showing the three-lane structure and choke points.",
        color: "from-chart-5/20 to-accent/20",
      },
      {
        id: "re2-g2",
        title: "Spawn Area",
        image: "", // Gallery image
        description: "The detailed spawn room featuring team-specific coloring and directional signage.",
        color: "from-accent/20 to-chart-5/20",
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
