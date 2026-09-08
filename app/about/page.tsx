import type { Metadata } from "next";
import SkillBar from "@/components/SkillBar";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and the skills I bring to the table.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <section>
        <SectionHeading
          title="About Me"
          subtitle="A bit about who I am and what I do."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a developer who loves turning complex problems into
              simple, elegant solutions. I focus on building products that are
              fast, accessible, and a pleasure to use.
            </p>
            <p>
              When I&apos;m not writing code, you&apos;ll find me exploring new
              technologies, contributing to open source, or learning something
              new.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Skills
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
