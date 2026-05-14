import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { VisualsSection } from "@/components/visuals-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingDock } from "@/components/floating-dock";
import { ScrollProgress } from "@/components/scroll-progress";
import { GlobalBackground } from "@/components/global-background";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingDock />
      <GlobalBackground />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <VisualsSection />
        <ContactSection />
      </main>
    </>
  );
}

