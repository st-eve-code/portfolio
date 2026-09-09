"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  function toggle(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">

      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:px-10 lg:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          Selected Work
        </p>
        <h1
          className="mt-2 font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-zinc-50"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          PROJECTS
        </h1>
        <p className="mt-3 max-w-md text-sm text-zinc-500 dark:text-zinc-400">
          Click any project to explore the details, stack, challenges, and
          reasoning behind it.
        </p>
      </div>

      {/* ── Horizontal scrollable card strip ─────────────────────────────── */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 px-6 pb-6 sm:px-10 lg:px-14"
          style={{ width: "max-content" }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isActive={activeId === project.id}
              onClick={() => toggle(project.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Expandable detail panel ───────────────────────────────────────── */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: active ? "1000px" : "0px", opacity: active ? 1 : 0 }}
      >
        {active && <DetailPanel project={active} onClose={() => setActiveId(null)} />}
      </div>

    </div>
  );
}

/* ─── Project Card ────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative shrink-0 overflow-hidden rounded-3xl text-left transition-transform duration-300 focus:outline-none"
      style={{
        width: "clamp(200px, 22vw, 280px)",
        aspectRatio: "3 / 4",
        transform: isActive ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
      }}
      aria-expanded={isActive}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Index badge */}
      <div className="absolute top-4 left-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <svg className="h-3 w-3 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      )}

      {/* Bottom text */}
      <div className="absolute bottom-0 inset-x-0 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
          {project.subtitle}
        </p>
        <p className="mt-1 text-base font-black leading-tight text-white">
          {project.title}
        </p>

        {/* Stack preview — top 3 */}
        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((s) => (
            <span key={s} className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-sm">
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white/80">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

/* ─── Detail Panel ────────────────────────────────────────────────────────── */
function DetailPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr]">

        {/* Left — project image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl sm:aspect-[4/5]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-top"
          />
        </div>

        {/* Right — details */}
        <div className="flex flex-col gap-8">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {project.subtitle}
              </p>
              <h2 className="mt-1 text-3xl font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-200 dark:hover:text-zinc-200"
              aria-label="Close detail"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Overview
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>

          {/* Reason */}
          <div>
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Why I Built This
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.reason}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Challenges
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.challenges}
            </p>
          </div>

          {/* Stack */}
          <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="flex gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Live Site
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              )}
              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-700 transition-all hover:border-zinc-900 hover:text-zinc-900 hover:scale-105 active:scale-95 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:text-zinc-50"
                >
                  View Code
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
