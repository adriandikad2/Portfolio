import { Server, Box, Palette, Gamepad2, Mail } from "lucide-react";
import { GithubIcon, YoutubeIcon, DiscordIcon, LinkedinIcon } from "@/components/ui/brand-icons";

export const siteConfig = {
  name: "Adrian Dika",
  title: "Adrian Dika's Portfolio",
  description:
    "Portfolio of Adrian Dika, a Computer Engineering student at Universitas Indonesia specializing in game development, full-stack architecture, 2D Graphics, and 3D world building.",
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
    span: "small",
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
    span: "small",
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
    span: "small",
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

export type SkillColor =
  | "cyan" | "violet" | "indigo" | "emerald" | "amber"
  | "rose" | "sky" | "fuchsia" | "orange" | "slate"
  | "teal" | "blue" | "default";

export function getSkillColor(tagName: string): SkillColor {
  const normalizedTag = tagName.toLowerCase();

  const colorMap: Record<string, SkillColor> = {
    // 💻 Programming Languages (amber)
    "c": "amber",
    "c++": "amber",
    "c#": "amber",
    "java": "amber",
    "javascript": "amber",
    "typescript": "amber",
    "python": "amber",
    "go": "amber",
    "lua": "amber",
    "luau": "amber",
    "html5": "amber",
    "css3": "amber",
    "vhdl": "amber",
    "assembly": "amber",
    ".s": "amber",
    ".ino": "amber",
    "json": "amber",

    // 🧠 AI & Assistant Tools (fuchsia)
    "chatgpt": "fuchsia",
    "claude": "fuchsia",
    "qwen": "fuchsia",
    "github copilot": "fuchsia",
    "v0": "fuchsia",
    "gemini": "fuchsia",
    "ai": "fuchsia",

    // 🧪 Data Science & Analysis (orange)
    "jupyter": "orange",
    ".ipynb": "orange",
    "google colab": "orange",
    "matplotlib": "orange",
    "pandas": "orange",
    "scikit-learn": "orange",

    // 🧰 Dev Tools & Platforms (slate)
    "docker": "slate",
    "vscode": "slate",
    "intellij idea": "slate",
    "bluej": "slate",
    "github": "slate",

    // 🛢️ Backend & Databases (rose)
    "mongodb": "rose",
    "postgresql": "rose",
    "neon": "rose",
    "neon db": "rose",
    "database": "rose",
    "cloudinary": "rose",

    // 🎨 Design Tools (emerald)
    "figma": "emerald",
    "canva": "emerald",
    "photoshop": "emerald",
    "illustrator": "emerald",
    "gimp": "emerald",
    "draw.io": "emerald",
    "ui/ux": "emerald",
    "ui/ux design": "emerald",
    "graphic design": "emerald",
    "creative": "emerald",
    "digital graphic design": "emerald",
    "2d rendering": "emerald",

    // ⚒️ Simulation Engines (teal)
    "unity": "teal",

    // 🌐 Frontend & Web Dev Stack (sky)
    "react": "sky",
    "react router": "sky",
    "vite": "sky",
    "html": "sky",
    "css": "sky",
    "tailwind": "sky",
    "node.js": "sky",
    "express": "sky",

    // ⚡ Fullstack & Systems (violet)
    "next.js": "violet",
    "serverless": "violet",
    "api bridge": "violet",
    "real-time": "violet",
    "multiplayer": "violet",

    // ☁️ Cloud & Infra (blue)
    "alibaba cloud": "blue",
    "vercel": "blue",

    // 🎮 Gaming / Game / Platform (cyan)
    "roblox studio": "cyan",
    "libgdx": "cyan",
    "game engine": "cyan",
    "rojo": "cyan",
    "game logic": "cyan",

    // 🧊 3D Modelling (indigo)
    "blender": "orange",
    "the sims 4": "emerald",
    "sims 4": "indigo",
    "3d art": "indigo",
    "asset integration": "indigo",

    // Other specific tags
    "youtube": "rose",
    "vibe coding": "fuchsia",
    "antigravity": "fuchsia",
  };

  if (colorMap[normalizedTag]) {
    return colorMap[normalizedTag];
  }

  // Fallback to checking skill categories array
  for (const category of skillCategories) {
    for (const skill of category.skills) {
      if (skill.name.toLowerCase().includes(normalizedTag) || normalizedTag.includes(skill.name.toLowerCase())) {
        return category.color as SkillColor;
      }
    }
  }

  return "default";
}

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
    title: "CLUTTER (Under Development)",
    subtitle: "Most Ambitious Roblox Project",
    description:
      "A fully-realized Roblox experience built from the ground up with Luau scripting. Features complex game logic systems, custom physics interactions, and tightly integrated 3D assets — all designed for engaging, session-based gameplay.",
    tags: ["Luau", "Roblox Studio", "Rojo", "Game Logic", "Vibe Coding", "Antigravity", "Blender", "Asset Integration"],
    links: [],
    image: "/projects/CLUTTER/CLUTTER.webp",
    featured: true,
    gallery: [
      {
        id: "clutter-1",
        title: "CLUTTER: A Roblox Game",
        image: "/projects/CLUTTER/CLUTTER.webp",
        imageLabel: "CLUTTER Logo, still a concept, generated from Gemini (of course).",
        description: "ID 🇮🇩: CLUTTER merupakan proyek game yang saya kembangkan mulai dari pertengahan tahun 2025 menggunakan bahasa luau untuk engine Roblox. Game ini berorientasi seputar sebuah bola yang bertujuan mengumpulkan benda yang lebih kecil untuk memperbesar ukuran bola tersebut agar bisa mengumpulkan benda yang jauh lebih besar dari ukuran bola tersebut. Konsep ini berasal dari franchise game Katamari Damacy yang merupakan game favorit saya. Melihat belum ada yang pernah mereplika game yang mirip di platform Roblox, saya mencoba untuk mengambil peluang dengan membuat hal serupa selagi masih membuat semua asetnya secara orisinal agar tidak sepenuhnya memplagiat franchise Katamari Damacy yang dilindungi hak cipta di bawah studio Bandai Namco. Saya berharap penuh proyek ini mampu melihat kesuksesannya ke depan karena saya berharap agar konsep franchise Katamari Damacy menjadi mainstream di kalangan pemain. EN 🇬🇧: CLUTTER is a project that I started back in the summer of 2025 utilizing luau as the main scripting language for the Roblox engine. The basic idea of the game revolves around the player being a ball collecting objects smaller than the ball to grow the ball bigger to then collect larger objects. This concept originates from the Katamari Damacy game franchise, which is my favorite game series. Seeing that no one had ever replicated a game similar to it on the Roblox platform, I decided to take the opportunity to create something similar while still making all of the assets originally to avoid completely plagiarizing the Katamari Damacy franchise, which is protected by copyright under Bandai Namco. I have high hopes in this project because I really want to see the concept of Katamari Damacy to become mainstream amongst players, both new and old. I really want to pay homage to the best game I've ever played in my lifetime.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-2",
        title: "Devlog To Do List 1 (13/05/2026)",
        image: "/projects/CLUTTER/ClutterToDoList1.webp",
        imageLabel: "The to do list, most were done before 2026.",
        description: "ID 🇮🇩: Disini adalah tempat saya mengetik apa saja yang terlintas di benak saya untuk saya coba realisasikan saat saya mulai mengerjakan proyeknya lagi. Kadang ada ide yang fantastis, kadang ada yang aneh, tapi semuanya saya coba ketik dahulu untuk saya ingat lagi nanti saat saya mereka ulang apa saja yang perlu dikerjakan.EN 🇬🇧: This is my playground, the place where magic happens. The workbench, the garage, the mystical list where ideas are brought to life. I always try to type down any bit of ideas that comes to my mind. I then try and see which ideas or what aspects that I can start working on or continue where I left off.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-3",
        title: "Devlog To Do List 2 (13/05/2026)",
        image: "/projects/CLUTTER/ClutterToDoList2.webp",
        imageLabel: "The to do list can get pretty extensive around here.",
        description: "ID 🇮🇩: Lanjutan dari screenshot sebelumnya, masih rumpang karena proyek ini masih saya tekuni hingga sekarang, sampai momen anda sedang membaca tulisan ini. EN 🇬🇧: Continuation from the previous list, there are still blank unchecked boxes here and there because this project is still under my development, up until the moment you are reading this text right now.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-4",
        title: "Demo 1",
        image: "/projects/CLUTTER/ClutterOldDemo1.webp",
        imageLabel: "Small demonstration. Was quite satisfying honestly.",
        description: "ID 🇮🇩: Ini adalah quick run test saat saya masih pertama mulai mengembangkan logika-logika game dengan bantuan AI. Saya mensimulasikan bagaimana behaviour tiap komponen dari kode berinteraksi satu sama lain. Pada tahap ini, saya sudah membuat logika pertumbuhan, deteksi objek pada dunia di game, dan tampilan UI sederhana yang menampilkan objek yang telah terkumpul pada bola di bagian kiri bawah. Demo ini didokumentasikan melalui sebuah video yang dapat diakses dari tautan berikut: https://www.youtube.com/watch?v=-MfmWiwWNZE EN 🇬🇧: This was back when I simulated the game each time I made changes to the codes to test functionalities every time the AI made changes to it. I inspected the codes generated by the AI and tested whether the functions prove to be as intended. I investigated how each components of the code would interact with each other to further determine evaluations that will be given to the current code. During this phase, I have already implemented the growth logic, object detection in the game world, and a simple UI displaying the objects that have been collected in the ball at the bottom-left. This was documented as a video that is accessible from the following link: https://www.youtube.com/watch?v=-MfmWiwWNZE",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-5",
        title: "Demo 2",
        image: "/projects/CLUTTER/ClutterOldDemo2.webp",
        imageLabel: "A whole map, demonstrating its consumability from top to bottom. Black hole style. 😎",
        description: "ID 🇮🇩: Demo ini merupakan demo yang mensimulasikan kode yang mereplika sebuah black hole. Kode akan mendeteksi objek yang telah dikumpul, melakukan pergerakan untuk objek yang baru saja dikumpul untuk mendekati pusat bola, dan memberlakukan tweening transparansi seolah objek memang masuk ke dalam black hole. Konsep black hole ini tidak jadi diberlakukan (13/05/2026) karena masih belum fiksasi dan secara visual, menurut saya kurang appealing dan akan terasa membosankan. Pada tahap ini juga, saya merancang ulang sebuah map ruangan bertema Daycare yang pernah saya buat tahun sebelumnya (2024) untuk proyek game lain yang berbeda. Video demo terdapat pada tautan berikut: https://www.youtube.com/watch?v=vcel4ilcMws EN 🇬🇧: This second demo simulates codes that replicated behaviours of a black hole. The main idea is that the objects collected by the ball will be seemingly sucked into the center of the black hole by applying movement towards the center of the black hole and pairing it with a transparency tween to visually represent that the objects are sucked by the black hole. As of now, the black hole concept is not yet implemented and will be revisited once I have a much clearer idea further down the road of development. The map used for this demo was a map that I have built using premade assets provided from Roblox's own marketplace where users can use assets created by other users that are shared on to the platform. This map's theme revolved around a daycare and this map was built by me for a different project that occurred last year (2024). Demonstration of the video is accessible via this link: https://www.youtube.com/watch?v=vcel4ilcMws",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-6",
        title: "Moodboard",
        image: "/projects/CLUTTER/ClutterMoodboard.webp",
        imageLabel: "Conceptualization of the game's ideas and visuals.",
        description: "ID 🇮🇩: Kita (saya dan rekan-rekan saya dalam proyek ini) merancang ide-ide yang tidak berkaitan langsung dengan kode pada Figma yang menjadi tempat mencetuskan konsep-konsep visual ataupun membahas alur game. EN 🇬🇧: We (my colleagues and I in this project) brainstormed ideas unrelated to the actual coding part of the game  on Figma, which served as our canvas for visualizing concepts and discussing game flow.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-7",
        title: "Workspace",
        image: "/projects/CLUTTER/ClutterWorkspace.webp",
        imageLabel: "A sneak peek inside the workspace.",
        description: "ID 🇮🇩: Jelas, saya meminta AI ini dan itu untuk merealisasikan segala ide saya serta implementasi khusus yang saya rasa diperlukan agar saya bisa memangkas waktu untuk lebih melimpahkan sumber daya untuk fokus pada apa yang memang dibutuhkan game ini. Sedikit yang saya lakukan pada kode secara langsung dan lebih banyak menginvestigasi hasil kerjaan AI. EN 🇬🇧: Nevertheless, I still learn how the codes work from what AI has generated and understand the core mechanisms of each functionality and how they behave with one another. The whole integration is done using Rojo, an extension used to bridge connections between Antigravity and Roblox Studio and further synchronizes changes made in Antigravity to then be applied into Roblox Studio. The whole setup is simple.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "clutter-8",
        title: "Assets Tracker",
        image: "/projects/CLUTTER/ClutterAssetProgress.webp",
        imageLabel: "Tracker in Figma for the assets made so far. Assets are done in Blender.",
        description: "ID 🇮🇩: Aset yang telah saya buat sendiri wajib saya reka agar mudah keeping track of sehingga tidak perlu adanya kesalahan dalam pengecekan aset yang belum dan sudah dibuat. Sekte merah menandakan daftar aset yang masih berupa ide dan belum direalisasikan dan sekte hijau menandakan daftar nama aset yang telah dibuat. EN 🇬🇧: Whenever I create assets, the first thing I'd do is to create a tracker to keep track of the assets that have been made and the ones that are planned to be created. The red section on the left of each group consists of the lists of the assets that are ideated to be made in Blender while the green section keeps track of all the assets that have been made in the Blender file. Sometimes objects are still not fixated to a certain category, which means that it can still be moved around to other categories. Categorizing is apparently a knowledge that I also need to master to create the planning of universally dividing all the assets into their proportionate categories.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-9",
        title: "Assets in Demo",
        image: "/projects/CLUTTER/ClutterOwnAssets.webp",
        imageLabel: "Screenshot of a demo using assets I've made. So happy this turned out really lively with so many colors!",
        description: "ID 🇮🇩: Demo tersebut menggunakan aset yang diekspor dari Blender ke Roblox Studio. Banyak aspek dari kode yang telah dipermulus semenjak Februari tahun 2026. EN 🇬🇧: I've exported the assets from Blender into Roblox Studio to test the playability and performance of the game. Assets are low-poly which means that they will not consume players' memory and also saves the GPU from unloading texture assets multiple of times by only utilizing one texture file for all the assets. The amount of memory saved is around 334MB. I lied, Antigravity's own editor autocompleted that amount of memory saved. lol. But the assets are actually optimized for performance by keeping the tris count low in order to make itランニング smoothly on most devices. Antigravity also autocompleted that \"make itランニング smoothly on most devices.\", but point being, assets were tested for performance during this demo. Many of the implementations from the previous demo, such as the behaviour of a black hole, were removed because I felt like they made the gameplay lack of any soul. For now, I'll still be sticking to the original roots of a Katamari where the objects stick to the ball. Further explanation of these assets are available on the \"Visual Portfolio\" down below these cards.",
        color: "from-accent/20 to-secondary/20"
      },
    ]
  },
  {
    id: "die-io",
    title: "Die.io",
    subtitle: "libGDX's Homage to Diep.io",
    description:
      "A Java-based 2D game built on the libGDX framework. Implements core engine mechanics including custom rendering pipelines, entity-component systems, and real-time collision detection — all running at 60fps.",
    tags: ["Java", "Game Logic Design", "libGDX", "2D Rendering", "GitHub", "Vibe Coding"],
    links: [
      { label: "View Source", href: "https://github.com/adriandikad2/Die.io" },
      { label: "Play on Itch.io", href: "https://adriandikad2.itch.io/dieio" },
    ],
    image: "",
    featured: true,
    gallery: [
      {
        id: "dieio-1",
        title: "Logo",
        image: "/projects/Dieio/DieioLogo.webp",
        imageLabel: "Logo is actually taken from in-game gameplay. Not subject to change.",
        description: "ID 🇮🇩: Die.io adalah game yang menggunakan engine libGDX dengan mengambil inspirasi dari game website populer Diep.io. Game ini dirancang oleh tim saya yang beranggotakan empat (4) orang di mana saya menjabat posisi sebagai Lead Developer. Saya berperan mengembangkan keseluruhan arsitektur game, ide, dan konsep, penggunaan object pooling untuk mengkategorisasikan Enemy dan Shapes untuk optimisasi performa perangkat, dan mengintegrasikan komponen lain yang dikembangkan anggota tim lainnya. Saya juga mengembangkan sebuah backend untuk mengimplementasikan leaderboards pada game tersebut. Game ini merupakan proyek yang menggunakan engine yang tergolong usang untuk menumbuhkan pemahaman saya dalam mengoptimasi performa perangkat keras dan juga mekanik game yang kompleks. EN 🇬🇧: Die.io is a libGDX-oriented game that is designed by my team of four. This game was my first libGDX project and was developed as a comprehension towards the concept of Object-Oriented Programming as a whole. I took the role of the lead developer in the team where I implemented object pooling to categorize the enemies and the shapes to optimize hardware performance and integrated components developed by other members of the team. I also added a backend system to implement leaderboards for the game where the scores are displayed locally. You can check out the game in the linked Itch.io page! The game is also open source in GitHub.",
        color: "from-accent/20 to-secondary/20"
      }
    ]
  },
  {
    id: "ugcleaks",
    title: "UGCLeaks",
    subtitle: "Full-Stack Web Application",
    description:
      "A production-grade web application leveraging serverless architecture on Vercel. UGCLeaks bridges official Roblox Web APIs with schedules.",
    tags: ["TypeScript", "JavaScript", "React", "Tailwind", "Vercel", "PostgreSQL", "Neon DB", "Next.js", "API Bridge", "Serverless", "Roblox", "GitHub", "Antigravity", "Vibe Coding", "UI/UX"],
    links: [
      { label: "Visit UGCLeaks", href: "https://ugcleaks.vercel.app/" },
    ],
    image: "/projects/UGCLeaks/UGCLeaksLanding.webp",
    featured: true,
    gallery: [
      {
        id: "ugcleaks-1",
        title: "Landing Page",
        image: "/projects/UGCLeaks/UGCLeaksLanding.webp",
        imageLabel: "Landing page of the official website. Silly and aesthetically pleasing.",
        description: "ID 🇮🇩: UGCLeaks adalah website sebagai central hub informasi jadwal rilis dan informasi mengenai UGC (User-Generated Content) di platform Roblox. UGC sendiri adalah produk aksesoris virtual yang dibuat oleh komunitas Roblox dan dijual di platform tersebut melalui API Marketplace. Website ini menawarkan informasi Free UGC / UGC Gratis yang dapat dilihat oleh pengguna secara masif mengenai informasi UGC yang bisa didapatkan secara gratis dengan stok tertentu untuk setiap UGC. Website ini dikelola oleh beberapa orang terpercaya yang saya tunjuk secara pribadi untuk mengelola jadwal-jadwal beserta informasi mengenai Free UGC / UGC Gratis yang akan/sudah rilis. Proyek ini merupakan passion saya di penghujung 2025 karena saya melihat seseorang yang mencoba untuk membuat situs serupa di Vercel, tetapi karena mereka masih pemula, saya menawarkan diri saya sendiri untuk mengembangkan website ini dengan tujuan memudahkan informasi mengenai Free UGC / UGC Gratis kepada pengguna dalam skala besar. Safe to say bahwa saya sangat tekun dan berdedikasi dalam menuntaskan hal ini karena proyek ini merupakan website pertama saya yang sukses. Proyek ini mampu mengajari saya banyak hal yang mencakup implementasi frontend, serverless deployment, integrasi API resmi dari dokumentasi Roblox, dan keamanan siber serta tindakan preventatif terhadap ancaman website. EN 🇬🇧: UGCLeaks is a web application that provides the purpose of being the central hub of informations circulating around Free UGC. What's a \"Free UGC\", you ask? First things first, UGC, or User Generated Content, is a virtual accessory created by Roblox\'s community of 3d artists/designers that are published onto the Marketplace API of Roblox. These accessories can be sold for Robux, Roblox\'s official currency. Now UGC can be sold as a limited quantity stock, which are posed as \"Free UGC\". Free UGC has been a thing since early 2023 and is still around up until now. Free UGCs are usually distributed by brands or known \"Free UGC\" creators where they would be giving away these limited accessories to the general public for a certain amount of time or until the stock runs out. Informations regarding the release of a Free UGC is scarce and often spread everywhere, which is why this website was developed in the first place. Users can view and determine which items they can go for with schedules provided by personally handpicked trustworthy managers of this website. This website was my kickstarter towards full-stack applications because back in 2025 towards the end of the year, I saw someone making the same thing as a beginner, and that's where I stepped in to offer my hand and assist that person in creating the same website more polished feature and visuals. Ever since that moment, I've found one of my passions in the technology world, which is full-stack applications as a whole. This project taught me a lot of things from frontend implementations and theme-aware components, API integrations from Roblox's documentations, serverless Vercel deployment, and cybersecurity and website threat mitigations.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "ugcleaks-2",
        title: "Upcoming Page",
        image: "/projects/UGCLeaks/UGCLeaksUpcoming.webp",
        imageLabel: "The standard page where all the main actions happen. The epitome of my UI/UX skill, if I say so myself.",
        description: "ID 🇮🇩: Laman inilah yang digunakan semua orang. Semua informasi mengenai jadwal UGC Gratis yang akan rilis terletak di laman ini, mulai dari tanggal rilis yang disesuaikan dengan zona waktu masing-masing pengguna situs, link menuju game yang menyediakan UGC Gratis tersebut, dan jumlah stok yang diketahui. Ada beberapa kategori yang membedakan jadwal-jadwal tersebut, dan yang ditampilkan sekarang adalah kategori \"Upcoming\" di mana UGC yang diketahui sejauh ini ditampilkan sebelum mereka rilis. EN 🇬🇧: The main stagelight, the most functional and frequently used page on the website. The place where all the actions go down. This page displays all the Free UGCs that are scheduled to be released, adjusted with the user's local timezone, the game link the UGC is released in, and the stock count of the UGC. We are currently viewing the \"Upcoming\" category where known UGCs are being displayed with their intended release date and known informations.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "ugcleaks-3",
        title: "Scheduler Page",
        image: "/projects/UGCLeaks/UGCLeaksScheduler.webp",
        imageLabel: "This page is exclusive to me and a select few, sorry! But it's the command center for the website, you know?",
        description: "ID 🇮🇩: Tak banyak yang bisa melihat ini sebenarnya, tapi inilah laman yang digunakan untuk membuat jadwal-jadwal tersebut. Tiap kolom dilengkapi dengan teks pemandu agar orang-orang yang saya tunjuk sebagai pengelola tahu apa yang harus diisi pada tiap kolom. EN 🇬🇧: Some people are very lucky to even see this page because this is isolated off from normal users. This page serves its purpose to be the main interface for appointed admins of UGCLeaks to create schedules for upcoming Free UGCs. Each column comes with tooltips and instructions so that the admins know what to fill in each column. Pretty self-explanatory, right? I know, I know.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "ugcleaks-4",
        title: "Paintball Feature",
        image: "/projects/UGCLeaks/UGCLeaksPaintball.webp",
        imageLabel: "The most quirky playground tool on the website.",
        description: "ID 🇮🇩: Ketika mengembangkan web ini, saya sempat berpikir, \"hal apa sih yang kira-kira tetap membuat pengguna hepi selagi menunggu di web ini?\" dan dari situlah muncul ide saya untuk membuat fitur-fitur \"tools\" yang bisa dimainkan pengguna selagi melihat-lihat jadwal atau mungkin juga menunggu rilisnya UGC. Tool Paintball ini adalah, setidaknya anggapan saya, mahakarya saya yang paling unik dalam website ini. EN 🇬🇧: When I was in the middle of developing this website, I paused for a while and wondered, \"What else could I do to keep users engaged and happy while they wait on this website?\" and from that thought popped in my head, I decided to create these various \"tools\" that users can play around with while they're checking schedules or waiting for the UGCs to be released. I consider this Paintball tool to be, at least in my opinion, my most unique masterpiece on this website.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "ugcleaks-5",
        title: "Playground Tools",
        image: "/projects/UGCLeaks/UGCLeaksPlayground.webp",
        imageLabel: "Chaos ensued from the Playground tools.",
        description: "ID 🇮🇩: Tampak di samping merupakan hasil tools-tools dari playground yang disebutkan. Pada kanan atas, ada juga slider volume karena beberapa tools juga memiliki suaranya masing-masing. EN 🇬🇧: The playground tools can really create chaos on the users' screen, haha. At the top right, there's also a volume slider as some of the tools produce their own distinct sounds. Those tools are time killers meant to visually engage with users while they wait for schedules of UGCs to drop.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "ugcleaks-6",
        title: "Themes",
        image: "/projects/UGCLeaks/UGCLeaksThemes.webp",
        imageLabel: "The default theme for the website.",
        description: "ID 🇮🇩: Selain tools playground tadi, saya juga membuat beberapa theme untuk website yang bisa digunakan pengguna sesuai personalisasi mereka sendiri. Tiap tema juga ada karakteristiknya sendiri, seperti animasi daun berjatuhan untuk tema Forest/Sakura, bintang berkelap-kelip untuk tema Midnight, dan awan yang bergerak kiri ke kanan untuk tema Skies. EN 🇬🇧: Aside from those playground tools, I also made several themes for the website that users can use for their own personalization. Each theme also has its own quirks such as falling leaves animations for the Forest/Sakura theme, twinkling stars for the Midnight theme, and left-to-right moving clouds for the Skies theme.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "ugcleaks-7",
        title: "UGCLeaks during its first 30 days of launch.",
        image: "/projects/UGCLeaks/UGCLeaksAnalytics.webp",
        imageLabel: "The first of many UGCLeaks visitors. I love every single one of them 💗",
        description: "ID 🇮🇩: Selang 30 hari sejak dikembangkan di akhir Desember 2025, banyak pengunjung yang mengunjungi situs yang saya kembangkan. Tiap hari saya hanya tersenyum tersipu-sipu melihat kunjungan yang terus bertambah. EN 🇬🇧: Within 30 days since it was developed in late December 2025, a lot of foot traffic occurred within the website that I developed. Visitors are always coming in a flurry and I was never happier and proud of myself. I was smiling to myself every single day seeing the increasing number of visits.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "ugcleaks-8",
        title: "Further statistical breakdown of visitors.",
        image: "/projects/UGCLeaks/UGCLeaksAnalytics2.webp",
        imageLabel: "Dissection of traffic from countless categories. The diversity left me in awe.",
        description: "ID 🇮🇩: Di balik banyaknya jumlah pengunjung, saya juga penasaran dari mana saja asalnya, bagaimana mereka mengakses situsnya, demografik negara, perangkat yang digunakan, endpoint yang aktif, dan lainnya. EN 🇬🇧: Statistics always awes me. It is always interesting for me to see and monitor country demographics, what devices they use to access the website, active endpoints, and so on and so forth. These little numbers always entice me all the time.",
        color: "from-primary/20 to-secondary/20"
      }
    ]
  },
  {
    id: "drawbattle",
    title: "Drawbattle",
    subtitle: "Gartic Phone's Unofficial Sequel",
    description:
      "A production-grade web application delivering real-time multiplayer drawing experiences. Features real-time state synchronization and low-latency interactions built for performance at scale.",
    tags: ["JavaScript", "React", "Vite", "Express", "Node.js", "CSS", "Tailwind", "Vercel", "Neon DB", "Cloudinary", "PostgreSQL", "Real-time", "Multiplayer", "GitHub", "V0", "Vibe Coding", "UI/UX"],
    links: [
      { label: "View Source", href: "https://github.com/adriandikad2/DrawBattle" },
      { label: "Visit Drawbattle (Website is discontinued)", href: "https://drawbattle.vercel.app/" },
    ],
    image: "/projects/Drawbattle/DrawbattleLanding.webp",
    featured: true,
    gallery: [
      {
        id: "drawbattle-1",
        title: "Landing Page",
        image: "/projects/Drawbattle/DrawbattleLanding.webp",
        imageLabel: "Epitome frontend implementation. Thank my colleague.",
        description: "ID 🇮🇩: Website ini dikembangkan dari fondasi ide saya untuk sebuah proyek kelompok. Keseluruhan codingan pada website ini dikerjakan paruhan antara saya dan satu teman saya lagi. Saya lebih banyak melakukan implementasi endpoint dan logic-logic untuk keseluruhan alur game serta fungsionalitas kanvas bagi para pengguna untuk menggambar beserta alat-alat menggambarnya, sedangkan teman saya lebih banyak melakukan styling website dan deployment backend. EN 🇬🇧: This website was developed from my initial idea for a group project. The entire codebase for this website was a collaborative effort between myself and another friend. I was primarily responsible for implementing endpoints and the core game logic for the entire gameplay flow, including the drawing canvas functionality and its associated drawing tools, while my friend focused more on the website's styling and backend deployment.",
        color: "from-accent/20 to-secondary/20"
      },
      {
        id: "drawbattle-2",
        title: "Drawings Page",
        image: "/projects/Drawbattle/DrawbattleDrawings.webp",
        imageLabel: "Drawings stored for each account.",
        description: "ID 🇮🇩: Laman ini menampilkan hasil gambar pengguna untuk tiap ronde yang telah dilalui. Terdapat opsi untuk mereka simpan ke perangkat atau bisa mereka hapus secara permanen dari database. Screenshot agak buram karena ini arsip lama. EN 🇬🇧: This page displays users' drawings from each round they have played. Users can preview them and save whichever image they want into their devices or straight up delete them off the face of internet. Screenshot is tad bit blurry 'cause this was captured inside of a Discord screenshare.",
        color: "from-primary/20 to-secondary/20"
      },
    ]
  }
];

export interface VisualCollection {
  id: string;
  title: string;
  description: string;
  image?: string;
  color?: string;
  gallery: GalleryItem[];
}

export interface VisualItem {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  image?: string;
  collections: VisualCollection[];
}

export const visualItems: VisualItem[] = [
  {
    id: "blender-1",
    title: "Low-Poly 3D Assets",
    category: "Blender",
    description: "Categorized low-poly props and assets utilizing a single texture atlas. Results were from practices during a 1 month crash course.",
    image: "",
    color: "from-accent/20 to-secondary/20",
    collections: [
      {
        id: "blender-botany",
        title: "Botany",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-botany1", title: "", image: "/projects/Blender/Botany/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-botany2", title: "", image: "/projects/Blender/Botany/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-botany3", title: "", image: "/projects/Blender/Botany/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-cleaning",
        title: "Cleaning",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-cleaning1", title: "", image: "/projects/Blender/Cleaning/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-cleaning2", title: "", image: "/projects/Blender/Cleaning/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-cleaning3", title: "", image: "/projects/Blender/Cleaning/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-construction",
        title: "Construction",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-construction1", title: "", image: "/projects/Blender/Construction/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-construction2", title: "", image: "/projects/Blender/Construction/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-cooking",
        title: "Cooking",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-cooking1", title: "", image: "/projects/Blender/Cooking/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-cooking2", title: "", image: "/projects/Blender/Cooking/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-cooking3", title: "", image: "/projects/Blender/Cooking/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-cooking4", title: "", image: "/projects/Blender/Cooking/4.webp", description: "", color: "from-primary/20 to-secondary/20" }
        ]
      },
      {
        id: "blender-electronic",
        title: "Electronic",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-electronic1", title: "", image: "/projects/Blender/Electronic/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-electronic2", title: "", image: "/projects/Blender/Electronic/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-event",
        title: "Event",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-event1", title: "", image: "/projects/Blender/Event/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-event2", title: "", image: "/projects/Blender/Event/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-event3", title: "", image: "/projects/Blender/Event/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-event4", title: "", image: "/projects/Blender/Event/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-food",
        title: "Food",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-food1", title: "", image: "/projects/Blender/Food/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-food2", title: "", image: "/projects/Blender/Food/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-food3", title: "", image: "/projects/Blender/Food/3.webp", description: "", color: "from-accent/20 to-secondary/20" }
        ]
      },
      {
        id: "blender-fun",
        title: "Fun",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-fun1", title: "", image: "/projects/Blender/Fun/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-fun2", title: "", image: "/projects/Blender/Fun/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-fun3", title: "", image: "/projects/Blender/Fun/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-fun4", title: "", image: "/projects/Blender/Fun/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-fun5", title: "", image: "/projects/Blender/Fun/5.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-fun6", title: "", image: "/projects/Blender/Fun/6.webp", description: "", color: "from-primary/20 to-secondary/20" }
        ]
      },
      {
        id: "blender-furniture",
        title: "Furniture",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-furniture1", title: "", image: "/projects/Blender/Furniture/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-furniture2", title: "", image: "/projects/Blender/Furniture/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-furniture3", title: "", image: "/projects/Blender/Furniture/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-furniture4", title: "", image: "/projects/Blender/Furniture/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-handicraft",
        title: "Handicraft",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-handicraft1", title: "", image: "/projects/Blender/Handicraft/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-handicraft2", title: "", image: "/projects/Blender/Handicraft/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-handicraft3", title: "", image: "/projects/Blender/Handicraft/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-handicraft4", title: "", image: "/projects/Blender/Handicraft/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-handicraft5", title: "", image: "/projects/Blender/Handicraft/5.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-handicraft6", title: "", image: "/projects/Blender/Handicraft/6.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-hygiene",
        title: "Hygiene",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-hygiene1", title: "", image: "/projects/Blender/Hygiene/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-hygiene2", title: "", image: "/projects/Blender/Hygiene/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-hygiene3", title: "", image: "/projects/Blender/Hygiene/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-imagery",
        title: "Imagery",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-imagery1", title: "", image: "/projects/Blender/Imagery/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-imagery2", title: "", image: "/projects/Blender/Imagery/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-imagery3", title: "", image: "/projects/Blender/Imagery/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-imagery4", title: "", image: "/projects/Blender/Imagery/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-lighting",
        title: "Lighting",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-lighting1", title: "", image: "/projects/Blender/Lighting/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-lighting2", title: "", image: "/projects/Blender/Lighting/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-music",
        title: "Music",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-music1", title: "", image: "/projects/Blender/Music/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-music2", title: "", image: "/projects/Blender/Music/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-music3", title: "", image: "/projects/Blender/Music/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-research",
        title: "Research",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-research1", title: "", image: "/projects/Blender/Research/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-research2", title: "", image: "/projects/Blender/Research/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-sports",
        title: "Sports",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-sports1", title: "", image: "/projects/Blender/Sports/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-sports2", title: "", image: "/projects/Blender/Sports/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-sports3", title: "", image: "/projects/Blender/Sports/3.webp", description: "", color: "from-accent/20 to-secondary/20" }
        ]
      },
      {
        id: "blender-stationery",
        title: "Stationery",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "blender-stationery1", title: "", image: "/projects/Blender/Stationery/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-stationery2", title: "", image: "/projects/Blender/Stationery/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-stationery3", title: "", image: "/projects/Blender/Stationery/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-stationery4", title: "", image: "/projects/Blender/Stationery/4.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-stationery5", title: "", image: "/projects/Blender/Stationery/5.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-stationery6", title: "", image: "/projects/Blender/Stationery/6.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "blender-valuable",
        title: "Valuable",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "blender-valuable1", title: "", image: "/projects/Blender/Valuable/1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "blender-valuable2", title: "", image: "/projects/Blender/Valuable/2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "blender-valuable3", title: "", image: "/projects/Blender/Valuable/3.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
    ]
  },
  {
    id: "roblox-1",
    title: "Maps",
    category: "Roblox Studio",
    description: "Maps I made for fun. Scenes were made using ready-to-use assets from Roblox’s official model Marketplace.",
    image: "",
    color: "from-primary/20 to-secondary/20",
    collections: [
      {
        id: "roblox-courtyard-catalog",
        title: "Courtyard Catalog",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-courtyard-icon", title: "Icon", image: "/projects/Roblox/CourtyardCatalog/CourtyardCatalog_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-courtyard-1", title: "Shot 1", image: "/projects/Roblox/CourtyardCatalog/CourtyardCatalog_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-courtyard-2", title: "Shot 2", image: "/projects/Roblox/CourtyardCatalog/CourtyardCatalog_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-courtyard-3", title: "Shot 3", image: "/projects/Roblox/CourtyardCatalog/CourtyardCatalog_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-courtyard-4", title: "Shot 4", image: "/projects/Roblox/CourtyardCatalog/CourtyardCatalog_shot4.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-daycare",
        title: "Daycare",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "r-daycare-icon", title: "Icon", image: "/projects/Roblox/Daycare/Daycare_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-daycare-1", title: "Shot 1", image: "/projects/Roblox/Daycare/Daycare_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-daycare-2", title: "Shot 2", image: "/projects/Roblox/Daycare/Daycare_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-daycare-3", title: "Shot 3", image: "/projects/Roblox/Daycare/Daycare_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-daycare-4", title: "Shot 4", image: "/projects/Roblox/Daycare/Daycare_shot4.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-ice-cream-corner",
        title: "Ice Cream Corner",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-icecream-icon", title: "Icon", image: "/projects/Roblox/IceCreamCorner/IceCreamCorner_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-icecream-1", title: "Shot 1", image: "/projects/Roblox/IceCreamCorner/IceCreamCorner_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-icecream-2", title: "Shot 2", image: "/projects/Roblox/IceCreamCorner/IceCreamCorner_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-icecream-3", title: "Shot 3", image: "/projects/Roblox/IceCreamCorner/IceCreamCorner_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-kitchen-confusion",
        title: "Kitchen Confusion",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "r-kitchen-icon", title: "Icon", image: "/projects/Roblox/KitchenConfusion/KitchenConfusion_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-kitchen-1", title: "Shot 1", image: "/projects/Roblox/KitchenConfusion/KitchenConfusion_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-kitchen-2", title: "Shot 2", image: "/projects/Roblox/KitchenConfusion/KitchenConfusion_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-kitchen-3", title: "Shot 3", image: "/projects/Roblox/KitchenConfusion/KitchenConfusion_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-kitchen-4", title: "Shot 4", image: "/projects/Roblox/KitchenConfusion/KitchenConfusion_shot4.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-medieval-emporium",
        title: "Medieval Emporium",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-medieval-icon", title: "Icon", image: "/projects/Roblox/MedievalEmporium/MedievalEmporium_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-medieval-1", title: "Shot 1", image: "/projects/Roblox/MedievalEmporium/MedievalEmporium_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-medieval-2", title: "Shot 2", image: "/projects/Roblox/MedievalEmporium/MedievalEmporium_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-medieval-3", title: "Shot 3", image: "/projects/Roblox/MedievalEmporium/MedievalEmporium_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-michelangelos-masonry",
        title: "Michelangelo's Masonry",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "r-michelangelo-icon", title: "Icon", image: "/projects/Roblox/Michelangelo'sMasonry/Michelangelo'sMasonry_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-michelangelo-1", title: "Shot 1", image: "/projects/Roblox/Michelangelo'sMasonry/Michelangelo'sMasonry_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-michelangelo-2", title: "Shot 2", image: "/projects/Roblox/Michelangelo'sMasonry/Michelangelo'sMasonry_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-michelangelo-3", title: "Shot 3", image: "/projects/Roblox/Michelangelo'sMasonry/Michelangelo'sMasonry_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-monopoly-monotony",
        title: "Monopoly Monotony",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-monopoly-icon", title: "Icon", image: "/projects/Roblox/MonopolyMonotony/MonopolyMonotony_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-monopoly-1", title: "Shot 1", image: "/projects/Roblox/MonopolyMonotony/MonopolyMonotony_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-monopoly-2", title: "Shot 2", image: "/projects/Roblox/MonopolyMonotony/MonopolyMonotony_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-musical-chairs",
        title: "Musical Chairs",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "r-musical-icon", title: "Icon", image: "/projects/Roblox/MusicalChairs/MusicalChairs_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-musical-1", title: "Shot 1", image: "/projects/Roblox/MusicalChairs/MusicalChairs_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-musical-2", title: "Shot 2", image: "/projects/Roblox/MusicalChairs/MusicalChairs_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-musical-3", title: "Shot 3", image: "/projects/Roblox/MusicalChairs/MusicalChairs_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-pac-maze",
        title: "Pac-Maze",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-pacmaze-icon", title: "Icon", image: "/projects/Roblox/Pac-Maze/Pac-Maze_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-pacmaze-1", title: "Shot 1", image: "/projects/Roblox/Pac-Maze/Pac-Maze_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-pacmaze-2", title: "Shot 2", image: "/projects/Roblox/Pac-Maze/Pac-Maze_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-pacmaze-3", title: "Shot 3", image: "/projects/Roblox/Pac-Maze/Pac-Maze_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-pacmaze-4", title: "Shot 4", image: "/projects/Roblox/Pac-Maze/Pac-Maze_shot4.webp", description: "", color: "from-accent/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-players-house",
        title: "Player's House",
        description: "",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "r-playerhouse-icon", title: "Icon", image: "/projects/Roblox/Player'sHouse/Player'sHouse_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-playerhouse-1", title: "Shot 1", image: "/projects/Roblox/Player'sHouse/Player'sHouse_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-playerhouse-2", title: "Shot 2", image: "/projects/Roblox/Player'sHouse/Player'sHouse_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-playerhouse-3", title: "Shot 3", image: "/projects/Roblox/Player'sHouse/Player'sHouse_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "roblox-store-clearance",
        title: "Store Clearance",
        description: "",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "r-storeclearance-icon", title: "Icon", image: "/projects/Roblox/StoreClearance/StoreClearance_icon.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-storeclearance-1", title: "Shot 1", image: "/projects/Roblox/StoreClearance/StoreClearance_shot1.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "r-storeclearance-2", title: "Shot 2", image: "/projects/Roblox/StoreClearance/StoreClearance_shot2.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "r-storeclearance-3", title: "Shot 3", image: "/projects/Roblox/StoreClearance/StoreClearance_shot3.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      },
    ]
  },
  {
    id: "sims-1",
    title: "Interior Design",
    category: "The Sims 4",
    description: "Interior design with Maxis' official assets.",
    image: "",
    color: "from-accent/20 to-secondary/20",
    collections: [
      {
        id: "sims-1-c1",
        title: "Daycare-themed Room",
        description: "Room interior design practice using Maxis' official assets.",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "sims-daycare-c1", title: "Cinematic 1", image: "/projects/Sims/DaycareRoom/cinematic1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "sims-daycare-c2", title: "Cinematic 2", image: "/projects/Sims/DaycareRoom/cinematic2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "sims-daycare-c3", title: "Cinematic 3", image: "/projects/Sims/DaycareRoom/cinematic3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "sims-daycare-c4", title: "Cinematic 4", image: "/projects/Sims/DaycareRoom/cinematic4.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "sims-daycare-c5", title: "Cinematic 5", image: "/projects/Sims/DaycareRoom/cinematic5.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "sims-daycare-c6", title: "Cinematic 6", image: "/projects/Sims/DaycareRoom/cinematic6.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "sims-daycare-p1", title: "POV 1", image: "/projects/Sims/DaycareRoom/pov1.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "sims-daycare-p2", title: "POV 2", image: "/projects/Sims/DaycareRoom/pov2.webp", description: "", color: "from-primary/20 to-secondary/20" },
          { id: "sims-daycare-p3", title: "POV 3", image: "/projects/Sims/DaycareRoom/pov3.webp", description: "", color: "from-accent/20 to-secondary/20" },
          { id: "sims-daycare-p4", title: "POV 4", image: "/projects/Sims/DaycareRoom/pov4.webp", description: "", color: "from-primary/20 to-secondary/20" },
        ]
      }
    ]
  },
  {
    id: "graphic-1",
    title: "Graphic Design",
    category: "Graphic Design",
    description: "Graphic design projects where most of the work is done using Figma and Canva. A way to pour out my creativity.",
    image: "",
    color: "from-primary/20 to-secondary/20",
    collections: [
      {
        id: "graphic-memory-album",
        title: "Memory Album Design",
        description: "This was the best graphic design I've ever done in my lifetime. Really proud of how it turned out.",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "g-ma-1", title: "Kestari 1", image: "/projects/Graphic Design/Memory Album/Kestari1.webp", imageLabel: "Cover for the Secretariat Bureau alongside the Daily Management Board.", description: "ID 🇮🇩: Ini adalah cover untuk Biro Kesekretariatan beserta jajaran Badan Pengurus Harian, foto-foto kenangannya terdapat pada bagian kiri. EN 🇬🇧: This was the cover for the Secretariat Bureau and its Daily Management Board. I went with the theming of a Daycare because it is cute and I visualized it well before fully making it, and I was really proud of how this one turned out. This is my all-time favorite design.", color: "from-accent/20 to-secondary/20" },
          { id: "g-ma-2", title: "Kestari 2", image: "/projects/Graphic Design/Memory Album/Kestari2.webp", imageLabel: "This page showcases staffs from the Secretariat Bureau alongside their memorable photos.", description: "ID 🇮🇩: Page ini menampilkan staf-staf kepengurusan Biro Kesekretariatan beserta beberapa foto kenangan mereka. EN 🇬🇧: This page showcases staffs from the Secretariat Bureau alongside their memorable photos. I really liked decorating this page with various toys and kindergarten-themed ornaments. Really love the idea of sticking the photos onto a kids' drawer.", color: "from-primary/20 to-secondary/20" },
          { id: "g-ma-3", title: "Litbang 1", image: "/projects/Graphic Design/Memory Album/Litbang1.webp", imageLabel: "Cover for the Research and Development Department alongside its Daily Management Board.", description: "ID 🇮🇩: Cover ini bertema pantai atau seaside dengan kombinasi unik dengan frame jendela kapal sebagai frame foto para pengurus. EN 🇬🇧: This design combines a seaside/beach theme with a unique twist, featuring a ship window frame for the staff photos. I really like how the overall composition turned out.", color: "from-accent/20 to-secondary/20" },
          { id: "g-ma-4", title: "PSDM 1", image: "/projects/Graphic Design/Memory Album/PSDM1.webp", imageLabel: "Cover for the Human Resources Development Bureau alongside the Daily Management Board.", description: "ID 🇮🇩: Tema untuk cover ini adalah alam sehingga saya menggunakan banyak foto aset flora untuk mendekorasi semua sudut page ini. EN 🇬🇧: The theme for this cover was nature, so I incorporated many flora assets to decorate every nook and crannies of this page. Absolutely loving how the frames of the Daily Management Board is shaped with all the singular flowers forming a massive flower arrangement.", color: "from-primary/20 to-secondary/20" },
          { id: "g-ma-5", title: "PSDM 2", image: "/projects/Graphic Design/Memory Album/PSDM2.webp", imageLabel: "This page showcases staffs from the Human Resources Development Bureau.", description: "ID 🇮🇩: Page ini menampilkan semua staf kepengurusan Biro PSDM. EN 🇬🇧: This page showcases staffs from the Human Resources Development Bureau.", color: "from-accent/20 to-secondary/20" },
          { id: "g-ma-6", title: "PSDM 3", image: "/projects/Graphic Design/Memory Album/PSDM3.webp", imageLabel: "This page showcases staffs from the Human Resources Development Bureau alongside their memorable photos.", description: "ID 🇮🇩: Di sini saya sempat berimprovisasi dengan menggunakan sebuah air terjun sebagai background untuk foto kenangan-kenangannya. EN 🇬🇧: Here I took the liberty to improvise by using a waterfall as the background for the memorable photos. Loves it.", color: "from-primary/20 to-secondary/20" },
        ]
      },
      {
        id: "graphic-campus-orientation",
        title: "Campus Activity Orientation Group",
        description: "A design suited for a campus activity orientation event for my group.",
        image: "/projects/Graphic Design/CampusActivityOrientation.webp",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "g-co-1", title: "Final Design", image: "/projects/Graphic Design/CampusActivityOrientation.webp", description: "ID 🇮🇩: Feeds ini diunggah di platform Instagram. Temanya berupa piknik. EN 🇬🇧: This feed was posted on Instagram. I was going for a theme relating to picnic, I like the overall design with the incorporation of all the elements.", color: "from-accent/20 to-secondary/20" },
        ]
      }
    ]
  },
  {
    id: "youtube-1",
    title: "YouTube",
    category: "YouTube",
    description: "Content creation based on my interest.",
    image: "",
    color: "from-accent/20 to-secondary/20",
    collections: [
      {
        id: "youtube-1",
        title: "PvZ 2 Content",
        description: "The beast of my channel's view count.",
        image: "",
        color: "from-accent/20 to-secondary/20",
        gallery: [
          { id: "pvz-1", title: "First Video", image: "/projects/YouTube/PvZ/1.webp", imageLabel: "First ever video that I've made. Upon its release, it gained a lot of traction that pushed my channel forward.", description: "ID 🇮🇩: Sebelum saya membuat video ini, saya sempat menggunakan program Audacity untuk melakukan mashup / gabungan beberapa soundtrack yang secara ritmik sama, tetapi menggunakan instrumen-instrumen yang berbeda-beda. Contohnya salah  satu lagu menggunakan instrumen bertemakan mesir kuno, sedangkan salah satu lagu lainnya menggunakan instrumen bertemakan bajak laut. Banyak lagu-lagu berbeda dengan instrumen masing-masing yang unik, dan pada tahun 2020, saya mencoba merumuskan satu komposisi yang menggunakan sebanyak 22 komposisi lagu yang berbeda, dan komposisi-komposisi tersebut merupakan gabungan dari lagu resmi game-nya dan lagu buatan para penggemar game tersebut yang diunggah di YouTube. Setelah saya menyusun komposisi saya, saya kemudian melihat bahwa pada platform YouTube, belum pernah ada yang membuat hal yang serupa yang sudah saya buat. Dari situlah saya mencoba merancang sebuah video simpel dengan menggunakan komposisi saya sebagai musik utamanya dengan menggunakan aset-aset gambar dari game resminya serta beberapa buatan penggemar juga untuk menandakan bagian-bagian komposisi pada video yang saya rancang. Alhasil tak lama setelah saya rilis, video tersebut berhasil menggaet banyak penonton, sehingga saya termotivasi untuk membuat dua video berikutnya yang juga terbilang populer. EN 🇬🇧: Back in 2020, I wanted a composition for a soundtrack of a single rhythm that is comprised of multiple instruments that are different to each other. Long before I made the video, I used the Audacity program to mash up countless different soundtracks into one. Each of these soundtracks had their unique traits and characteristics regarding the instruments used in the soundtrack. For example, one of the soundtracks utilizes musical instruments relating to the theming of ancient egypt, while another soundtrack has instruments relating to the theming of pirate seas. I concocted a singular piece that is a combination of 22 different soundtracks, and before I released it to the masses, the piece was for my own to enjoy whenever I feel like listening to it. Quite a while after I made the composition, I've noticed that no one else ever had the idea to release it on YouTube, so I took the chance to craft a video of my composition to then release it for the public to see. The video was rather simple where I used in-game assets to denote the themes from the mashup of the composition that appears at certain segments. This was my first video and not long after its release, it had already amassed a stupendous amount of views of about 20k from a month alone, which I would like to think is a major success for a channel's first video.", color: "from-accent/20 to-secondary/20" },
          { id: "pvz-2", title: "Most-Viewed Video", image: "/projects/YouTube/PvZ/2.webp", imageLabel: "Follows the same premise as the first video, except that it consistently portrays one theme every 4.333 seconds.", description: "ID 🇮🇩: Yang ini kurang lebih juga sama seperti video pertama, dengan perbedaannya terdapat pada hanya satu tema latar musik saja yang berganti setiap 4.333 detik. Pada saat ini, saya masih belum mengenal teori musik sehingga saya juga belum kenal yang namanya beat, bar, dan sebagainya sehingga saya benar-benar terpaku pada jumlah detik. Video ini merupakan video saya yang paling banyak ditonton dari kanal saya. EN 🇬🇧: The premise of this video is as the same as my first video with the difference being is that there is always only one theme playing which switches every 4.333 seconds. The first video could have up to 2, 3, 4, 5, or even all 22 of them at once playing whereas this one only switches each theme once. I haven't been introduced to music theory back then so that is the reason I was too set up with the amount of exact seconds to change the theme instead of relying beats, bars, and such. Currently as of typing, this video is my most-viewed video on my channel, which I'm really grateful for.", color: "from-primary/20 to-secondary/20" },
          { id: "pvz-3", title: "Third Video", image: "/projects/YouTube/PvZ/3.webp", imageLabel: "Third Video", description: "ID 🇮🇩: Yang ini juga mirip dengan video-video sebelumnya, namun bedanya adalah komposisi lagunya berbeda dengan video lainnya. Premis video ini mirip dengan video pertama, hanya saja lagu yang digunakan komposisinya berbeda-beda, namun dengan ide penggabungan instrumen-instrumen yang berbeda menjadi satu. EN 🇬🇧: This video is similar to the other two with the difference being is that the composition of the soundtrack is different, with most of them using different sounding instruments corresponding to each theme as well. I didn't really use the in-game assets this time around because I wanted to push this one out as quickly as I could, so that decision may have played a major role on why the view count isn't as high as the other two.", color: "from-accent/20 to-secondary/20" }
        ]
      },
      {
        id: "youtube-2",
        title: "FNF Content",
        description: "The era where my music and video editing skills really took a drift for the better.",
        image: "",
        color: "from-primary/20 to-secondary/20",
        gallery: [
          { id: "fnf-1", title: "\"but With Only\" Videos", image: "/projects/YouTube/FNF/1.webp", imageLabel: "The playlist of the \"With Only\" series which was my career's starting point in the FNF industry.", description: "ID 🇮🇩: Mulai tahun 2021, FNF adalah sebuah genre game ritmik yang berorientasi sebuah karakter yang menggunakan instrumen atau vokal yang dipotong sebagai \"vokal utama\" pada sebuah lagu. Pada fase ini, saya masih menggunakan Audacity hanya cukup untuk membuat sebuah karakter yang menyanyikan lagu tersebut tanpa henti, dan seri ini saya namakan \"With Only\" karena saya membuat sedemikian sehingga hanya karakter tersebut yang bernyanyi pada lagunya. EN 🇬🇧: Starting from 2021, FNF was a heavily booming rhythm game revolving around characters that are using instruments or trimmed vocals as their \"main vocals\" for a song that they're singing in. During this time, I was still using Audacity so the best that I could do is to mix-and-match the vocals and the instrumentals to fit each other for just one character alone that is singing the entire song. This series was my turning point towards the FNF content, and I named this series as the \"With Only\" series as there is only one character that \"sings\" throughout the entire song.", color: "from-accent/20 to-secondary/20" },
          { id: "fnf-2", title: "How I made these video series", image: "/projects/YouTube/FNF/2.webp", imageLabel: "More videos from the \"With Only\" series.", description: "ID 🇮🇩: Seri video ini merupakan favorit penggemar sehingga banyak yang melakukan permintaan pada komen untuk membuat lagu-lagu lainnya agar satu karakter saja yang bernyanyi pada lagu tersebut. Fenomena tersebut membuat saya melanjutkan seri ini dengan saya melakukan permintaan mereka. Bagaimana cara saya mencapai video yang saya inginkan untuk memenuhi standar video yang bagus sebelum saya unggah? Saya menggunakan sebuah situs yang mensimulasikan sebuah visualisasi berdasarkan lagu yang saya unggah untuk dijadikan bahan utama pada video yang saya edit. Dari situ, saya juga bisa menambahkan judul lagu, artis orisinal, dan karakter yang sedang bernyanyi untuk ditampilkan pada videonya. EN 🇬🇧: This video series became a real fan favorite, leading to many requests in the comments for more songs where only a single character sang the entire track. This phenomenon inspired me to continue the series by fulfilling those requests, but I wanted to ensure I was reaching the specific video quality I desired and meeting high standards before I actually uploaded them. My process involved using a website that simulated a visualizer based on the audio I uploaded to serve as the primary material for my edits, and from there, I could also add the song title, the original artist, and the specific character name to be displayed within the video.", color: "from-primary/20 to-secondary/20" },
          { id: "fnf-3", title: "BETADCSI Content", image: "/projects/YouTube/FNF/3.webp", imageLabel: "BETADCSI stands for \"But Every Turn, A Different Character Sings It\" which is a really popularized genre of FNF music.", description: "ID 🇮🇩: Mulai dari sini, pengetahuan editing baik dari video maupun lagu saya meningkat secara eksponensial. Produksi video BETADCSI memiliki pola serupa seperti teorema yang digunakan untuk membuat video PvZ yang paling pertama seperti yang dijelaskan di deskripsi PvZ, bedanya adalah terdapat vokal/instrumen berbeda yang digunakan untuk setiap segmen tertentu. Pada fase ini, saya mulai menggunakan FL Studio dan tidak lagi menggunakan Audacity untuk merangkai komposisi yang menggabungkan suara-suara instrumen dan vokal karakter-karakter yang berbeda-beda untuk digunakan pada setiap segmen tertentu. Jenis konten ini menantang saya untuk menggunakan teknologi desain suara dan pengeditan video lebih lanjut. EN 🇬🇧: Starting from this point, my skills of producing content increased exponentially, audio-wise and video-wise. The production of BETADCSI videos followed a similar pattern to the logic I used for my very first PvZ video as explained in that description, with the key difference being the use of different vocals or instruments for specific segments. During this phase, I started using FL Studio instead of Audacity to arrange compositions that blended various instrumental sounds and character vocals for use in each specific segment. This type of content challenged me to utilize more advanced sound design technology and video editing techniques. I took my opportunity to learn a lot about FL Studio and all of its technologies, as well as music theory in general and how instruments can compose a piece.", color: "from-accent/20 to-secondary/20" },
          { id: "fnf-4", title: "How I produced BETADCSI content", image: "/projects/YouTube/FNF/4.webp", imageLabel: "I really enjoyed producing these, but I was in the middle of my education journey, so I had to stop.", description: "ID 🇮🇩: Saya menggunakan UTAU untuk mereplika ritme suatu segmen dengan menyuplai program UTAU menggunakan vokal atau instrumen yang dibutuhkan, sesuai dengan karakter yang akan ditampilkan. Hasil suara dari UTAU sangatlah terdistorsi, beda dari suara jernih instrumen/vokal orisinalnya, namun pada saat itu, saya masih belum memahami cara kerja plugin Soundfont ataupun Slicer pada FL Studio. Setelah saya mendalami FL Studio lebih lanjut, saya mulai meninggalkan UTAU dan mulai menggunakan plugin Soundfont dan Slicer untuk mereplika suara karakter yang lebih jernih dan akurat. Pada saat ini juga saya belajar aset suara yang disebut \"Chromatic Scale\" yang merupakan sebuah file audio tangga nada dari instrumen atau vokal terpotong. File inilah yang saya gunakan untuk plugin Slicer pada FL Studio. Dari segi pengeditan video, saya sempat tetap menggunakan visualisasi lagunya dan menggunakan logo tiap karakter yang muncul ketika giliran mereka untuk \"bernyanyi\" dimulai sehingga metode ini lebih simpel tetapi sangat ikonik. Selang beberapa bulan, saya mulai mempelajari cara menggunakan aset karakternya yang bisa disimulasikan di game-nya untuk visual yang lebih bagus sehingga saya menggunakan \"spritesheet\" dari tiap karakter untuk di-render pada game. Saya merekam gameplay untuk bahan utama videonya sehingga saya tidak perlu memberikan visualisasi dari lagunya ke dalam video. Metode yang ini memang lebih kompleks dan memerlukan sedikit pengetahuan debugging dan offsetting beberapa variabel, tetapi hasilnya sangatlah mulus dan flawless. EN 🇬🇧: I used UTAU to replicate the rhythm of a segment by supplying the program with the necessary vocals or instruments, depending on the character being featured. The audio output from UTAU was highly distorted, which was a far cry from the crystal clear sound of the original instruments or vocals, but at that time, I still didn’t understand how to use Soundfont or Slicer plugins in FL Studio. After I delved deeper into FL Studio, I began to move away from UTAU and started using Soundfont and Slicer plugins to replicate character voices that were much clearer and more accurate. It was also during this period that I learned about a sound asset called a \"Chromatic Scale\", which is an audio file containing a scale of chopped-up vocal or instrument notes. I used this specific file for the Slicer plugin in FL Studio. In terms of video editing, I briefly stuck with the song visualizations and used the logos of each character that appeared when it was their turn to \"sing\", making the method simpler yet very iconic. A few months later, I began learning how to use character assets that could be simulated within the game for better visuals, so I used spritesheets for each character to be rendered in-game. I recorded the gameplay to serve as the primary material for the video, which meant I no longer needed to include the song visualizations. This method was indeed more complex and required some knowledge of debugging and offsetting certain variables, but the result was incredibly smooth and flawless.", color: "from-primary/20 to-secondary/20" }
        ]
      }
    ]
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/adriandikad2", icon: GithubIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Randm", icon: YoutubeIcon },
  { label: "Email", href: "mailto:adriandikad@gmail.com", icon: Mail },
  { label: "Discord", href: "https://discord.com/users/_.ok", icon: DiscordIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adrian-dika-18816a386/", icon: LinkedinIcon },
];
