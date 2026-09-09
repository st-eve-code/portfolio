"use client";

import { useState } from "react";
import SkillBar from "@/components/SkillBar";
import type { Skill } from "@/data/skills";

type Props = {
  skills: Skill[];
  /** How many skills to show before the "Show more" button. Default: 5 */
  initialCount?: number;
};

export default function SkillList({ skills, initialCount = 5 }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? skills : skills.slice(0, initialCount);
  const hasMore = skills.length > initialCount;

  return (
    <div>
      {/* Skill bars */}
      <div className="space-y-5">
        {visible.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Show more / Show less button */}
      {hasMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <span>{expanded ? "Show less" : `Show ${skills.length - initialCount} more`}</span>
          <svg
            className="h-4 w-4 transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}
