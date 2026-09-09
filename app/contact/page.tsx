import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MONDE.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">

        <div className="grid items-start gap-16 py-16 pb-24 lg:grid-cols-[1fr_1.6fr]">

          {/* Left — header text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Let&apos;s work together
            </p>
            <h1
              className="mt-2 font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-zinc-50"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              GET IN<br />TOUCH
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              Have a project in mind, want to collaborate, or just want to say
              hello? Send a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Right — form, aligned to top of left column */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
