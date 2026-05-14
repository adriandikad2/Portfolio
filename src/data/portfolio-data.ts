import { Server, Box, Palette, Gamepad2, Globe, PenTool } from "lucide-react";
import { GithubIcon, YoutubeIcon } from "@/components/ui/brand-icons";

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
    "blender": "indigo",
    "the sims 4": "indigo",
    "sims 4": "indigo",
    "3d art": "indigo",
    "asset integration": "indigo",
    
    // Other specific tags
    "youtube": "emerald",
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
    image: "/projects/CLUTTER.webp",
    featured: true,
    gallery: [
      {
        id: "clutter-1",
        title: "CLUTTER: A Roblox Game",
        image: "/projects/CLUTTER.webp",
        imageLabel: "CLUTTER Logo, still a concept, generated from Gemini (of course).",
        description: "ID 🇮🇩: CLUTTER merupakan proyek game yang saya kembangkan mulai dari pertengahan tahun 2025 menggunakan bahasa luau untuk engine Roblox. Game ini berorientasi seputar sebuah bola yang bertujuan mengumpulkan benda yang lebih kecil untuk memperbesar ukuran bola tersebut agar bisa mengumpulkan benda yang jauh lebih besar dari ukuran bola tersebut. Konsep ini berasal dari franchise game Katamari Damacy yang merupakan game favorit saya. Melihat belum ada yang pernah mereplika game yang mirip di platform Roblox, saya mencoba untuk mengambil peluang dengan membuat hal serupa selagi masih membuat semua asetnya secara orisinal agar tidak sepenuhnya memplagiat franchise Katamari Damacy yang dilindungi hak cipta di bawah studio Bandai Namco. Saya berharap penuh proyek ini mampu melihat kesuksesannya ke depan karena saya berharap agar konsep franchise Katamari Damacy menjadi mainstream di kalangan pemain. EN 🇬🇧: CLUTTER is a project that I started back in the summer of 2025 utilizing luau as the main scripting language for the Roblox engine. The basic idea of the game revolves around the player being a ball collecting objects smaller than the ball to grow the ball bigger to then collect larger objects. This concept originates from the Katamari Damacy game franchise, which is my favorite game series. Seeing that no one had ever replicated a game similar to it on the Roblox platform, I decided to take the opportunity to create something similar while still making all of the assets originally to avoid completely plagiarizing the Katamari Damacy franchise, which is protected by copyright under Bandai Namco. I have high hopes in this project because I really want to see the concept of Katamari Damacy to become mainstream amongst players, both new and old. I really want to pay homage to the best game I've ever played in my lifetime.",
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
        title: "Moodboard",
        image: "/projects/ClutterMoodboard.webp",
        imageLabel: "Conceptualization of the game's ideas and visuals.",
        description: "ID 🇮🇩: Kita (saya dan rekan-rekan saya dalam proyek ini) merancang ide-ide yang tidak berkaitan langsung dengan kode pada Figma yang menjadi tempat mencetuskan konsep-konsep visual ataupun membahas alur game. EN 🇬🇧: We (my colleagues and I in this project) brainstormed ideas unrelated to the actual coding part of the game  on Figma, which served as our canvas for visualizing concepts and discussing game flow.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-7",
        title: "Workspace",
        image: "/projects/ClutterWorkspace.webp",
        imageLabel: "A sneak peek inside the workspace.",
        description: "ID 🇮🇩: Jelas, saya meminta AI ini dan itu untuk merealisasikan segala ide saya serta implementasi khusus yang saya rasa diperlukan agar saya bisa memangkas waktu untuk lebih melimpahkan sumber daya untuk fokus pada apa yang memang dibutuhkan game ini. Sedikit yang saya lakukan pada kode secara langsung dan lebih banyak menginvestigasi hasil kerjaan AI. EN 🇬🇧: Nevertheless, I still learn how the codes work from what AI has generated and understand the core mechanisms of each functionality and how they behave with one another. The whole integration is done using Rojo, an extension used to bridge connections between Antigravity and Roblox Studio and further synchronizes changes made in Antigravity to then be applied into Roblox Studio. The whole setup is simple.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-8",
        title: "Assets Tracker",
        image: "/projects/ClutterAssetProgress.webp",
        imageLabel: "Tracker in Figma for the assets made so far. Assets are done in Blender.",
        description: "ID 🇮🇩: Aset yang telah saya buat sendiri wajib saya reka agar mudah keeping track of sehingga tidak perlu adanya kesalahan dalam pengecekan aset yang belum dan sudah dibuat. Sekte merah menandakan daftar aset yang masih berupa ide dan belum direalisasikan dan sekte hijau menandakan daftar nama aset yang telah dibuat. EN 🇬🇧: Whenever I create assets, the first thing I'd do is to create a tracker to keep track of the assets that have been made and the ones that are planned to be created. The red section on the left of each group consists of the lists of the assets that are ideated to be made in Blender while the green section keeps track of all the assets that have been made in the Blender file. Sometimes objects are still not fixated to a certain category, which means that it can still be moved around to other categories. Categorizing is apparently a knowledge that I also need to master to create the planning of universally dividing all the assets into their proportionate categories.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "clutter-9",
        title: "Assets in Demo",
        image: "/projects/ClutterOwnAssets.webp",
        imageLabel: "Screenshot of a demo using assets I've made. So happy this turned out really lively with so many colors!",
        description: "ID 🇮🇩: Demo tersebut menggunakan aset yang diekspor dari Blender ke Roblox Studio. Banyak aspek dari kode yang telah dipermulus semenjak Februari tahun 2026. EN 🇬🇧: I've exported the assets from Blender into Roblox Studio to test the playability and performance of the game. Assets are low-poly which means that they will not consume players' memory and also saves the GPU from unloading texture assets multiple of times by only utilizing one texture file for all the assets. The amount of memory saved is around 334MB. I lied, Antigravity's own editor autocompleted that amount of memory saved. lol. But the assets are actually optimized for performance by keeping the tris count low in order to make itランニング smoothly on most devices. Antigravity also autocompleted that \"make itランニング smoothly on most devices.\", but point being, assets were tested for performance during this demo. Many of the implementations from the previous demo, such as the behaviour of a black hole, were removed because I felt like they made the gameplay lack of any soul. For now, I'll still be sticking to the original roots of a Katamari where the objects stick to the ball. Further explanation of these assets are available on the \"Visual Portfolio\" down below these cards.",
        color: "from-primary/20 to-secondary/20"
      },
    ]
  },
  {
    id: "die-io",
    title: "Die.io",
    subtitle: "libGDX's Homage to Diep.io",
    description:
      "A Java-based 2D game built on the libGDX framework. Implements core engine mechanics including custom rendering pipelines, entity-component systems, and real-time collision detection — all running at 60fps.",
    tags: ["Java", "libGDX", "2D Rendering"],
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
        image: "/projects/DieioLogo.webp", 
        imageLabel: "Logo is actually taken from in-game gameplay. Not subject to change.",
        description: "ID 🇮🇩: Die.io adalah game yang menggunakan engine libGDX dengan mengambil inspirasi dari game website populer Diep.io. Game ini dirancang oleh tim saya yang beranggotakan empat (4) orang di mana saya menjabat posisi sebagai Lead Developer. Saya berperan mengembangkan keseluruhan arsitektur game, ide, dan konsep, penggunaan object pooling untuk mengkategorisasikan Enemy dan Shapes untuk optimisasi performa perangkat, dan mengintegrasikan komponen lain yang dikembangkan anggota tim lainnya. Saya juga mengembangkan sebuah backend untuk mengimplementasikan leaderboards pada game tersebut. Game ini merupakan proyek yang menggunakan engine yang tergolong usang untuk menumbuhkan pemahaman saya dalam mengoptimasi performa perangkat keras dan juga mekanik game yang kompleks. EN 🇬🇧: Die.io is a libGDX-oriented game that is designed by my team of four. This game was my first libGDX project and was developed as a comprehension towards the concept of Object-Oriented Programming as a whole. I took the role of the lead developer in the team where I implemented object pooling to categorize the enemies and the shapes to optimize hardware performance and integrated components developed by other members of the team. I also added a backend system to implement leaderboards for the game where the scores are displayed locally. You can check out the game in the linked Itch.io page! The game is also open source in GitHub.",
        color: "from-primary/20 to-secondary/20"
      }
    ]
  },
  {
    id: "ugcleaks",
    title: "UGCLeaks",
    subtitle: "Full-Stack Web Application",
    description:
      "A production-grade web application leveraging serverless architecture on Vercel. UGCLeaks bridges official Roblox Web APIs with schedules.",
    tags: ["Next.js", "Vercel", "PostgreSQL", "Neon DB", "API Bridge", "Serverless", "Roblox", "Antigravity", "Vibe Coding", "UI/UX"],
    links: [
      { label: "Visit UGCLeaks", href: "https://ugcleaks.vercel.app/" },
    ],
    image: "/projects/UGCLeaksLanding.webp",
    featured: true,
    gallery: [
      {
        id: "ugcleaks-1",
        title: "Landing Page",
        image: "/projects/UGCLeaksLanding.webp",
        imageLabel: "Landing page of the official website. Silly and aesthetically pleasing.",
        description: "ID 🇮🇩: UGCLeaks adalah website sebagai central hub informasi jadwal rilis dan informasi mengenai UGC (User-Generated Content) di platform Roblox. UGC sendiri adalah produk aksesoris virtual yang dibuat oleh komunitas Roblox dan dijual di platform tersebut melalui API Marketplace. Website ini menawarkan informasi Free UGC / UGC Gratis yang dapat dilihat oleh pengguna secara masif mengenai informasi UGC yang bisa didapatkan secara gratis dengan stok tertentu untuk setiap UGC. Website ini dikelola oleh beberapa orang terpercaya yang saya tunjuk secara pribadi untuk mengelola jadwal-jadwal beserta informasi mengenai Free UGC / UGC Gratis yang akan/sudah rilis. Proyek ini merupakan passion saya di penghujung 2025 karena saya melihat seseorang yang mencoba untuk membuat situs serupa di Vercel, tetapi karena mereka masih pemula, saya menawarkan diri saya sendiri untuk mengembangkan website ini dengan tujuan memudahkan informasi mengenai Free UGC / UGC Gratis kepada pengguna dalam skala besar. Safe to say bahwa saya sangat tekun dan berdedikasi dalam menuntaskan hal ini karena proyek ini merupakan website pertama saya yang sukses. Proyek ini mampu mengajari saya banyak hal yang mencakup implementasi frontend, serverless deployment, integrasi API resmi dari dokumentasi Roblox, dan keamanan siber serta tindakan preventatif terhadap ancaman website. EN 🇬🇧: UGCLeaks is a web application that provides the purpose of being the central hub of informations circulating around Free UGC. What's a \"Free UGC\", you ask? First things first, UGC, or User Generated Content, is a virtual accessory created by Roblox\'s community of 3d artists/designers that are published onto the Marketplace API of Roblox. These accessories can be sold for Robux, Roblox\'s official currency. Now UGC can be sold as a limited quantity stock, which are posed as \"Free UGC\". Free UGC has been a thing since early 2023 and is still around up until now. Free UGCs are usually distributed by brands or known \"Free UGC\" creators where they would be giving away these limited accessories to the general public for a certain amount of time or until the stock runs out. Informations regarding the release of a Free UGC is scarce and often spread everywhere, which is why this website was developed in the first place. Users can view and determine which items they can go for with schedules provided by personally handpicked trustworthy managers of this website. This website was my kickstarter towards full-stack applications because back in 2025 towards the end of the year, I saw someone making the same thing as a beginner, and that's where I stepped in to offer my hand and assist that person in creating the same website more polished feature and visuals. Ever since that moment, I've found one of my passions in the technology world, which is full-stack applications as a whole. This project taught me a lot of things from frontend implementations and theme-aware components, API integrations from Roblox's documentations, serverless Vercel deployment, and cybersecurity and website threat mitigations.",
        color: "from-primary/20 to-secondary/20"
      },
      {
        id: "ugcleaks-2",
        title: "Upcoming Page",
        image: "/projects/UGCLeaksUpcoming.webp",
        imageLabel: "The standard page where all the main actions happen. The epitome of my UI/UX skill, if I say so myself.",
        description: "ID 🇮🇩: Laman inilah yang digunakan semua orang. Semua informasi mengenai jadwal UGC Gratis yang akan rilis terletak di laman ini, mulai dari tanggal rilis yang disesuaikan dengan zona waktu masing-masing pengguna situs, link menuju game yang menyediakan UGC Gratis tersebut, dan jumlah stok yang diketahui. Ada beberapa kategori yang membedakan jadwal-jadwal tersebut, dan yang ditampilkan sekarang adalah kategori \"Upcoming\" di mana UGC yang diketahui sejauh ini ditampilkan sebelum mereka rilis. EN 🇬🇧: The main stagelight, the most functional and frequently used page on the website. The place where all the actions go down. This page displays all the Free UGCs that are scheduled to be released, adjusted with the user's local timezone, the game link the UGC is released in, and the stock count of the UGC. We are currently viewing the \"Upcoming\" category where known UGCs are being displayed with their intended release date and known informations.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-3",
        title: "Scheduler Page",
        image: "/projects/UGCLeaksScheduler.webp",
        imageLabel: "This page is exclusive to me and a select few, sorry! But it's the command center for the website, you know?",
        description: "ID 🇮🇩: Tak banyak yang bisa melihat ini sebenarnya, tapi inilah laman yang digunakan untuk membuat jadwal-jadwal tersebut. Tiap kolom dilengkapi dengan teks pemandu agar orang-orang yang saya tunjuk sebagai pengelola tahu apa yang harus diisi pada tiap kolom. EN 🇬🇧: Some people are very lucky to even see this page because this is isolated off from normal users. This page serves its purpose to be the main interface for appointed admins of UGCLeaks to create schedules for upcoming Free UGCs. Each column comes with tooltips and instructions so that the admins know what to fill in each column. Pretty self-explanatory, right? I know, I know.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-4",
        title: "Paintball Feature",
        image: "/projects/UGCLeaksPaintball.webp",
        imageLabel: "The most quirky playground tool on the website.",
        description: "ID 🇮🇩: Ketika mengembangkan web ini, saya sempat berpikir, \"hal apa sih yang kira-kira tetap membuat pengguna hepi selagi menunggu di web ini?\" dan dari situlah muncul ide saya untuk membuat fitur-fitur \"tools\" yang bisa dimainkan pengguna selagi melihat-lihat jadwal atau mungkin juga menunggu rilisnya UGC. Tool Paintball ini adalah, setidaknya anggapan saya, mahakarya saya yang paling unik dalam website ini. EN 🇬🇧: When I was in the middle of developing this website, I paused for a while and wondered, \"What else could I do to keep users engaged and happy while they wait on this website?\" and from that thought popped in my head, I decided to create these various \"tools\" that users can play around with while they're checking schedules or waiting for the UGCs to be released. I consider this Paintball tool to be, at least in my opinion, my most unique masterpiece on this website.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-5",
        title: "Playground Tools",
        image: "/projects/UGCLeaksPlayground.webp",
        imageLabel: "Chaos ensued from the Playground.",
        description: "ID 🇮🇩: Tampak di samping merupakan hasil tools-tools dari playground yang disebutkan. Pada kanan atas, ada juga slider volume karena beberapa tools juga memiliki suaranya masing-masing. EN 🇬🇧: The playground tools can really create chaos on the users' screen, haha. At the top right, there's also a volume slider as some of the tools produce their own distinct sounds. Those tools are time killers meant to visually engage with users while they wait for schedules of UGCs to drop.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-6",
        title: "Themes",
        image: "/projects/UGCLeaksThemes.webp",
        imageLabel: "The default theme for the website.",
        description: "ID 🇮🇩: Selain tools playground tadi, saya juga membuat beberapa theme untuk website yang bisa digunakan pengguna sesuai personalisasi mereka sendiri. Tiap tema juga ada karakteristiknya sendiri, seperti animasi daun berjatuhan untuk tema Forest/Sakura, bintang berkelap-kelip untuk tema Midnight, dan awan yang bergerak kiri ke kanan untuk tema Skies. EN 🇬🇧: Aside from those playground tools, I also made several themes for the website that users can use for their own personalization. Each theme also has its own quirks such as falling leaves animations for the Forest/Sakura theme, twinkling stars for the Midnight theme, and left-to-right moving clouds for the Skies theme.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-7",
        title: "UGCLeaks during its first 30 days of launch.",
        image: "/projects/UGCLeaksAnalytics.webp",
        imageLabel: "The first of many UGCLeaks visitors. I love every single one of them 💗",
        description: "ID 🇮🇩: Selang 30 hari sejak dikembangkan di akhir Desember 2025, banyak pengunjung yang mengunjungi situs yang saya kembangkan. Tiap hari saya hanya tersenyum tersipu-sipu melihat kunjungan yang terus bertambah. EN 🇬🇧: Within 30 days since it was developed in late December 2025, a lot of foot traffic occurred within the website that I developed. Visitors are always coming in a flurry and I was never happier and proud of myself. I was smiling to myself every single day seeing the increasing number of visits.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "ugcleaks-8",
        title: "Further statistical breakdown of visitors.",
        image: "/projects/UGCLeaksAnalytics2.webp",
        imageLabel: "Dissection of traffic from countless categories. The diversity left me in awe.",
        description: "ID 🇮🇩: Di balik banyaknya jumlah pengunjung, saya juga penasaran dari mana saja asalnya, bagaimana mereka mengakses situsnya, demografik negara, perangkat yang digunakan, endpoint yang aktif, dan lainnya. EN 🇬🇧: Statistics always awes me. It is always interesting for me to see and monitor country demographics, what devices they use to access the website, active endpoints, and so on and so forth. These little numbers always entice me all the time.",
        color: "from-chart-2/20 to-secondary/20"
      }
    ]
  },
  {
    id: "drawbattle",
    title: "Drawbattle",
    subtitle: "Gartic Phone's Unofficial Sequel",
    description:
      "A production-grade web application delivering real-time multiplayer drawing experiences. Features real-time state synchronization and low-latency interactions built for performance at scale.",
    tags: ["Next.js", "Vercel", "V0", "Neon DB", "PostgreSQL", "Real-time", "Multiplayer", "UI/UX"],
    links: [
      { label: "View Source", href: "https://github.com/adriandikad2/DrawBattle" }, 
      { label: "Visit Drawbattle (Website is discontinued)", href: "https://drawbattle.vercel.app/" },
    ],
    image: "/projects/DrawbattleLanding.webp",
    featured: true,
    gallery: [
      {
        id: "drawbattle-1",
        title: "Landing Page",
        image: "/projects/DrawbattleLanding.webp",
        imageLabel: "Epitome frontend implementation. Thank my colleague.",
        description: "ID 🇮🇩: Website ini dikembangkan dari fondasi ide saya untuk sebuah proyek kelompok. Keseluruhan codingan pada website ini dikerjakan paruhan antara saya dan satu teman saya lagi. Saya lebih banyak melakukan implementasi endpoint dan logic-logic untuk keseluruhan alur game serta fungsionalitas kanvas bagi para pengguna untuk menggambar beserta alat-alat menggambarnya, sedangkan teman saya lebih banyak melakukan styling website dan deployment backend. EN 🇬🇧: This website was developed from my initial idea for a group project. The entire codebase for this website was a collaborative effort between myself and another friend. I was primarily responsible for implementing endpoints and the core game logic for the entire gameplay flow, including the drawing canvas functionality and its associated drawing tools, while my friend focused more on the website's styling and backend deployment.",
        color: "from-chart-2/20 to-secondary/20"
      },
      {
        id: "drawbattle-2",
        title: "Drawings Page",
        image: "/projects/DrawbattleDrawings.webp",
        imageLabel: "Drawings stored for each account.",
        description: "ID 🇮🇩: Laman ini menampilkan hasil gambar pengguna untuk tiap ronde yang telah dilalui. Terdapat opsi untuk mereka simpan ke perangkat atau bisa mereka hapus secara permanen dari database. Screenshot agak buram karena ini arsip lama. EN 🇬🇧: This page displays users' drawings from each round they have played. Users can preview them and save whichever image they want into their devices or straight up delete them off the face of internet. Screenshot is tad bit blurry 'cause this was captured inside of a Discord screenshare.",
        color: "from-chart-2/20 to-secondary/20"
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
    title: "Assets",
    category: "Blender",
    description: "Low-poly props and assets.",
    image: "",
    color: "from-primary/20 to-chart-4/20",
    collections: [
      {
        id: "blender-1-c1", 
        title: "Low-Poly 3D Assets",
        description: "A collection of 15+ low-poly props sharing a single texture atlas for mobile optimization.",
        image: "",
        color: "from-primary/20 to-chart-4/20",
        gallery: [
          {
            id: "b1-g1",
            title: "3D Assets",
            image: "",
            description: "Low-poly assets used for CLUTTER.",
            color: "from-primary/20 to-chart-4/20",
          }
        ]
      }
    ]
  },
  {
    id: "roblox-1",
    title: "Maps",
    category: "Roblox Studio",
    description: "Maps I made for fun",
    image: "", // Main card image
    color: "from-accent/20 to-chart-5/20",
    collections: [
      {
        id: "roblox-1-c1",
        title: "Map 1",
        description: "",
        image: "",
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
      }
    ]
  },
  {
    id: "sims-1",
    title: "Interior Design",
    category: "The Sims 4",
    description: "Interior Design with In-game Assets.",
    image: "", // Main card image
    color: "from-chart-3/20 to-primary/20",
    collections: [
      {
        id: "sims-1-c1",
        title: "Daycare-themed Room",
        description: "Practicing the game's building tools while aiming for a daycare-styled room.",
        image: "",
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
      }
    ]
  },
  {
    id: "graphic-1",
    title: "Memory Album Design",
    category: "Graphic Design",
    description: "Digital album art with photo manipulation",
    image: "", // Main card image
    color: "from-chart-2/20 to-accent/20",
    collections: [
      {
        id: "graphic-1-c1",
        title: "Daycare-themed Album Design",
        description: "This was the best graphic design I've ever done in my lifetime. Really proud of how it turned out.",
        image: "",
        color: "from-chart-2/20 to-accent/20",
        gallery: [
          {
            id: "g1-g1",
            title: "Final Cover",
            image: "", // Gallery image
            description: "Made in collaboration with an organization I used to work at.",
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
      }
    ]
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/adriandikad2", icon: GithubIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Randm", icon: YoutubeIcon },
  { label: "Portfolio", href: "#", icon: Globe },
  { label: "Design", href: "#", icon: PenTool },
];
