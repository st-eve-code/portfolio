export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Site",
    description:
      "A personal portfolio built with Next.js, Tailwind CSS, and GSAP to showcase projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce application with product listings, cart, and checkout using Stripe.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    featured: true,
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A collaborative task management app with real-time updates, boards, and team assignments.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches live data from a public API with interactive charts and forecasts.",
    tech: ["React", "TypeScript", "Chart.js"],
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A headless CMS blog platform with markdown support, tags, and full-text search.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
  },
  {
    id: "auth-service",
    title: "Auth Service",
    description:
      "A reusable JWT-based authentication service with role-based access control and refresh tokens.",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
  },
];
