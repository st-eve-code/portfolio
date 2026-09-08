import type { Metadata } from "next";
import SkillBar from "@/components/SkillBar";
import SectionHeading from "@/components/SectionHeading";
import { skills, type Skill } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "The technologies and tools I work with.",
};

const categoryLabels: Partial<Record<Skill["category"], string>> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Workflow",
  other: "Other",
};

export default function SkillsPage() {
  const categories = ["frontend", "backend", "tools", "other"] as const;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Skills"
        subtitle="The technologies and tools I use to bring ideas to life."
      />

      <div className="space-y-14">
        {categories.map((category) => {
          const items = skills.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="mb-5 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {categoryLabels[category]}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {items.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}