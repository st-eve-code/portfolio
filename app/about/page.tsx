import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import AboutStatement from "@/components/AboutStatement";
import SectionHeading from "@/components/SectionHeading";
import SkillList from "@/components/SkillList";
import Credentials from "@/components/Credentials";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about MONDE and the brand behind the fashion.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStatement />

      {/* Skills section — image + skill bars side by side */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
        <SectionHeading
          title="Skills"
          subtitle="A look at the tools and technologies we work with."
        />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left — editorial image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-2xl lg:w-72 xl:w-80">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/about/skills-photo.jpg"
                alt="MONDE editorial"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right — skill bars with expand/collapse */}
          <div className="flex-1">
            <SkillList skills={skills} initialCount={7} />
          </div>

        </div>
      </div>

      <Credentials />
    </div>
  );
}
