import { HeroSection } from "@/components/hero-section";
import { SkillsGrid } from "@/components/skills-grid";
import { ProjectsSection } from "@/components/projects-section";
import { VisualsSection } from "@/components/visuals-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingDock } from "@/components/floating-dock";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingDock />

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
