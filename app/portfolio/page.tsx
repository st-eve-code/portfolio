import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've built.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Portfolio"
        subtitle="A collection of projects I've built along the way."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
