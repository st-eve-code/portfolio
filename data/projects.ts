export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  reason: string;
  challenges: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "monde-store",
    title: "MONDE Store",
    subtitle: "Fashion E-Commerce",
    description:
      "A full-stack fashion e-commerce platform featuring product collections, cart management, wishlist, and checkout with Stripe payments. Designed to reflect the MONDE brand identity.",
    reason:
      "Built to create a seamless online shopping experience for fashion-forward customers who expect both aesthetic quality and performance from a digital storefront.",
    challenges:
      "Implementing real-time inventory sync, optimizing image loading for high-res fashion photography, and building a checkout flow that felt native to the brand.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    image: "/images/gallery/car1.jpg",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    subtitle: "Visual Design",
    description:
      "A comprehensive brand identity system including logo design, typography hierarchy, color palette, and brand guidelines documentation for fashion clients.",
    reason:
      "Fashion brands often lack cohesive visual systems. This project aimed to establish a replicable process for building brand identity from scratch.",
    challenges:
      "Balancing timeless design principles with contemporary trends, and ensuring the system scales across digital and print touchpoints.",
    stack: ["Figma", "Adobe Illustrator", "Adobe InDesign"],
    image: "/images/gallery/car2.jpg",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "style-curator",
    title: "Style Curator App",
    subtitle: "Mobile Application",
    description:
      "A mobile-first outfit curation app that lets users build, save, and share daily looks. Includes AI-powered style suggestions based on wardrobe uploads.",
    reason:
      "Inspired by the need for a digital wardrobe tool that matches real styling workflows rather than just listing items.",
    challenges:
      "Building the AI recommendation engine with limited training data and designing an intuitive drag-and-drop outfit builder for mobile.",
    stack: ["React Native", "TypeScript", "OpenAI API", "Supabase", "Expo"],
    image: "/images/gallery/car3.jpg",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    id: "editorial-cms",
    title: "Editorial CMS",
    subtitle: "Content Management",
    description:
      "A headless CMS tailored for fashion editorial teams — supports rich media, lookbook layouts, contributor roles, and scheduled publishing.",
    reason:
      "Existing CMS platforms are too generic for editorial fashion workflows that require visual-first content management.",
    challenges:
      "Building flexible layout templates that editors could use without code, while keeping the output performant and SEO-friendly.",
    stack: ["Next.js", "MDX", "Sanity.io", "Tailwind CSS", "Vercel"],
    image: "/images/gallery/car4.jpg",
    repoUrl: "#",
  },
  {
    id: "lookbook-generator",
    title: "Lookbook Generator",
    subtitle: "Creative Tool",
    description:
      "An automated lookbook generation tool that takes product images and brand assets and outputs print-ready PDF and web-ready digital lookbooks.",
    reason:
      "Fashion teams spend enormous time manually laying out lookbooks every season. This tool cuts that time by 80%.",
    challenges:
      "Handling various image aspect ratios gracefully, generating PDF at print resolution, and building a preview that matched the final output faithfully.",
    stack: ["Node.js", "Puppeteer", "Sharp", "React", "Tailwind CSS"],
    image: "/images/gallery/car5.jpg",
    liveUrl: "#",
  },
  {
    id: "trend-dashboard",
    title: "Trend Dashboard",
    subtitle: "Data & Analytics",
    description:
      "A fashion trend analytics dashboard that aggregates social media signals, runway data, and search trends to surface emerging styles in real time.",
    reason:
      "Designers and buyers need data-informed insights but existing tools are either too expensive or too complex for small teams.",
    challenges:
      "Aggregating heterogeneous data sources, normalising trend signals across platforms, and presenting insights in a visually compelling way.",
    stack: ["React", "TypeScript", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    image: "/images/gallery/car6.jpg",
    repoUrl: "#",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Site",
    subtitle: "Personal Project",
    description:
      "This very portfolio — a Next.js site that showcases MONDE's brand vision, services, and creative work through editorial-quality design and animations.",
    reason:
      "To build a digital presence that matches the standard of craft we apply to every client project.",
    challenges:
      "Achieving a magazine-quality editorial feel purely through CSS and Next.js without heavy animation libraries.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4"],
    image: "/images/gallery/car7.jpg",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
];
