import { HeroSection } from "@/components/hero-section";
import { SkillsGrid } from "@/components/skills-grid";
import { ProjectsSection } from "@/components/projects-section";
import { VisualsSection } from "@/components/visuals-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingDock } from "@/components/floating-dock";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingDock />
      
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <main className="relative">
        <HeroSection />
        <SkillsGrid />
        <ProjectsSection />
        <VisualsSection />
        <ContactSection />
      </main>
    </>
  );
}
