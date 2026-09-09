export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: number;
};

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "React", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "Tailwind CSS", category: "frontend", level: 85 },
  { name: "Node.js", category: "backend", level: 80 },
  { name: "Express", category: "backend", level: 75 },
  { name: "PostgreSQL", category: "backend", level: 70 },
  { name: "Git", category: "tools", level: 85 },
  { name: "Docker", category: "tools", level: 60 },
  { name: "Figma", category: "tools", level: 65 },
  { name: "Figma", category: "tools", level: 65 },
  { name: "Blender", category: "tools", level: 70 },
];
