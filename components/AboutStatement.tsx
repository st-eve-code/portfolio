import Link from "next/link";

const stats = [
  { value: "5M+",  label: "Success Project" },
  { value: "3K+",  label: "Product Launches" },
  { value: "24+",  label: "Years Experience" },
];

export default function AboutStatement() {
  return (
    <section className="w-full bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-0 sm:px-10 lg:px-14">

        {/* ── Top row: ABOUT heading + bio text ──────────────────────────── */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-16">

          {/* Left: large "ABOUT" + arrow icon */}
          <div className="flex shrink-0 items-center gap-3">
            <h2
              className="font-black uppercase leading-none tracking-tighter text-zinc-900 dark:text-zinc-50"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              ABOUT
            </h2>
            <Link
              href="/about"
              aria-label="More about us"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all hover:border-zinc-900 hover:text-zinc-900 hover:scale-110 dark:border-zinc-700 dark:hover:border-zinc-200 dark:hover:text-zinc-200"
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

          {/* Right: bio paragraph */}
          <p className="max-w-sm text-sm font-semibold uppercase leading-relaxed tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-right sm:text-base">
            MONDE IS A MODERN FASHION BRAND DEDICATED TO EMPOWERING INDIVIDUAL
            STYLE THROUGH BOLD CREATIVITY AND TIMELESS DESIGN EXPERTISE.
          </p>
        </div>

        {/* ── Stats row ──────────────────────────────────────────────────── */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-zinc-200 border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-8 sm:py-10"
            >
              <span
                className="font-black leading-none tracking-tighter text-zinc-900 dark:text-zinc-50"
                style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* bottom breathing room */}
      <div className="pb-16" />
    </section>
  );
}
