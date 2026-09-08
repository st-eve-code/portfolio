import type { Skill } from "@/data/skills";

export default function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {skill.name}
        </span>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-zinc-900 dark:bg-zinc-50"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}
