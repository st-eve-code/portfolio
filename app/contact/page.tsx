import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Send me an email and I&apos;ll
            get back to you as soon as I can.
          </p>
          <div className="mt-6 space-y-3">
            <a
              className="block text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            <a
              className="block text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="block text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <input
            className="rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="min-h-40 rounded-lg border border-zinc-300 bg-transparent px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50"
            name="message"
            placeholder="Your message"
            required
          />
          <button
            className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
