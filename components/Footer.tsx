import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {siteConfig.author}. All rights
          reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li>
            <a
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
