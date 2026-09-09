import Image from "next/image";
import Link from "next/link";

const services = [
  "Fashion Styling",
  "Brand Identity",
  "Visual Design",
  "Creative Direction",
  "Expert Webflow",
];

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-0 sm:px-10 lg:px-14">

        {/* ── Main stage ─────────────────────────────────────────────────── */}
        {/*
          Strategy:
            - Headline is full-width, text-center
            - Portrait is absolute with left-1/2 -translate-x-1/2 for perfect
              centering at every breakpoint, z-10 over the headline
            - A padding-bottom spacer on the stage creates room for the portrait
              to extend below the headline without collapsing the layout
        */}
        <div
          className="relative w-full"
          style={{
            /* Stage height = headline height + portrait bottom overhang */
            paddingBottom: "clamp(80px, 18vw, 200px)",
          }}
        >
          {/* Headline — full width, perfectly centered */}
          <h1
            className="relative z-0 w-full select-none text-center font-black uppercase leading-[0.88] tracking-tighter text-zinc-900 dark:text-zinc-50"
            style={{ fontSize: "clamp(3.2rem, 11vw, 9.5rem)" }}
          >
            <span className="block">EXPLORE MY</span>
            <span className="block text-zinc-300 dark:text-zinc-700">PORTFOLIO</span>
          </h1>

          {/* Portrait — absolute, perfectly centered via left-1/2 + -translate-x-1/2 */}
          <div
            className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
            style={{
              width: "clamp(260px, 42vw, 560px)",
              aspectRatio: "3 / 4",
              marginBottom: "calc(clamp(260px, 42vw, 560px) * (4/3) * -0.22)",
            }}
          >
            <Image
              src="/images/about/head.png"
              alt="About portrait"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 420px, 560px"
              className="object-contain object-bottom grayscale"
            />
          </div>
        </div>

        {/* ── Bottom row: label + arrow | spacer | paragraph ─────────────── */}
        <div className="relative z-20 mt-16 flex items-end justify-between gap-4 pb-10 sm:mt-4 sm:pb-14">

          {/* Left: brand label + circular arrow button */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Fashion Brand
              <br />
              Est. 2025
            </p>
            <Link
              href="/portfolio"
              aria-label="Explore portfolio"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all hover:border-zinc-900 hover:text-zinc-900 hover:scale-110 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-200 dark:hover:text-zinc-200"
            >
              <svg
                className="h-4 w-4 rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Center spacer */}
          <div className="flex-1" />

          {/* Right: tagline paragraph */}
          <div className="max-w-44 text-right sm:max-w-64">
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-sm">
              We are passionate about creating fashion that stands out from
              the crowd and empowers individual style.
            </p>
          </div>
        </div>

        {/* ── Right-side vertical service list (lg+ only) ────────────────── */}
        <div className="absolute right-6 top-99 z-20 hidden -translate-y-1/2 flex-col items-end gap-3 sm:right-10 lg:flex lg:right-14">
          {services.map((s) => (
            <span
              key={s}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500"
            >
              {s}
            </span>
          ))}
        </div>

      </div>

      {/* ── Divider line ─────────────────────────────────────────────────── */}
      <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />
    </section>
  );
}
