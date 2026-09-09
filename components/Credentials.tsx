import Link from "next/link";
import { certificates } from "@/data/credentials";
import CertificateGrid from "@/components/CertificateGrid";

export default function Credentials() {
  return (
    <section className="w-full bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-4 sm:px-10 lg:px-14">

        {/* ── Section label ──────────────────────────────────────────────── */}
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            Credentials
          </span>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* ── Two-column layout ──────────────────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">

          {/* ── Left: CV download card ──────────────────────────────────── */}
          <div className="flex flex-col justify-between rounded-3xl bg-zinc-950 p-8 text-white dark:bg-zinc-900">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight">
                Curriculum
                <br />
                Vitae
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Download our full brand portfolio, editorial credits, and
                professional background in one document.
              </p>
            </div>
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Last updated — 2025
              </p>
              <Link
                href="/cv.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.02] active:scale-95"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </Link>
            </div>
          </div>

          {/* ── Right: certificate image cards ─────────────────────────── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
              Certificates & Awards
            </h3>
            <CertificateGrid certificates={certificates} initialCount={6} />
          </div>

        </div>
      </div>
    </section>
  );
}
