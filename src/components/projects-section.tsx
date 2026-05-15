"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio-data";
import type { Project } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { GalleryModal } from "@/components/ui/gallery-modal";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [cardIndices, setCardIndices] = useState<Record<string, number>>({});

  const handleCloseGallery = (finalIndex: number) => {
    if (selectedProject) {
      setCardIndices((prev) => ({
        ...prev,
        [selectedProject.id]: finalIndex,
      }));
    }
    setSelectedProject(null);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-accent/[0.02] blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute h-[1px] w-48 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="absolute h-16 w-48 rounded-full bg-accent/5 blur-2xl" />
          </div>

          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent">
            // projects
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-[#e4e4e7] to-[#a1a1aa] bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-lg mx-auto text-sm sm:text-base px-2">
            A curated selection of projects spanning game development,
            full-stack engineering, and creative design.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
              currentIndex={cardIndices[project.id] || 0}
              onIndexChange={(newIndex) => 
                setCardIndices(prev => ({ ...prev, [project.id]: newIndex }))
              }
              onViewGallery={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={selectedProject !== null}
        onClose={handleCloseGallery}
        title={selectedProject?.title || ""}
        subtitle={selectedProject?.subtitle || ""}
        items={selectedProject?.gallery || []}
      />
    </section>
  );
}
