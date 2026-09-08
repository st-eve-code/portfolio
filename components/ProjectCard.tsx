import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="mb-4 h-40 w-full rounded-xl object-cover"
        />
      ) : (
        <div className="mb-4 flex h-40 w-full items-center justify-center rounded-xl bg-zinc-100 text-4xl font-bold text-zinc-300 dark:bg-zinc-800 dark:text-zinc-600">
          {project.title.charAt(0)}
        </div>
      )}

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-4 flex gap-4">
          {project.liveUrl && (
            <a
              className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          )}
          {project.repoUrl && (
            <a
              className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
