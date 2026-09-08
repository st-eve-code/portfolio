import StackedCards, { type StackedCardItem } from "@/components/StackedCards";

// ─── Add or remove cards here — the stack auto-fans based on array length ─────
const editorialCards: StackedCardItem[] = [
  { src: "/images/car5.jpg", alt: "MONDE editorial look 1" },
  { src: "/images/car6.jpg", alt: "MONDE editorial look 2" },
  { src: "/images/car7.jpg", alt: "MONDE editorial look 3" },
];

// Shared marquee strip used for both mobile and desktop
function Marquee() {
  return (
    <div
      className="flex shrink-0 whitespace-nowrap"
      style={{ animation: "brandMarquee 22s linear infinite" }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="inline-flex items-center pr-14 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-none tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          <span className="mr-3 text-zinc-200 dark:text-zinc-800">#</span>
          MONDE
        </span>
      ))}
    </div>
  );
}

export default function BrandStatement() {
  return (
    // overflow-x-hidden on the section prevents any horizontal bleed
    <section className="w-full overflow-x-hidden bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">

      {/* ── 1. TAGLINE ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:px-10 lg:px-14">
        <div className="w-full text-right text-2xl font-black uppercase leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="block text-zinc-300 dark:text-zinc-700">WE ARE A MODERN</span>
          <span className="block text-zinc-300 dark:text-zinc-700">FASHION BRAND</span>
          <span className="block text-zinc-900 dark:text-zinc-50">DEDICATED TO EMPOWERING YOUR</span>
          <span className="block text-zinc-900 dark:text-zinc-50">UNIQUE STYLE.</span>
        </div>
      </div>

      {/* ── 2. CARDS + MARQUEE + CAPTION ─────────────────────────────────── */}
      {/*
        Strategy:
          - A "stage" div is relative and drives the row height via the card aspect-ratio
          - The marquee is absolute inset-0 on the stage, clipped by overflow-hidden,
            with flex+items-center so it's vertically centered to the cards
          - Cards sit at z-10 on top of the marquee (z-0)
          - Caption is in normal flow, outside the stage
      */}

      {/* ── MOBILE (< md) ────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center px-6 md:hidden sm:px-10">

        {/* Stage: card height only on mobile — marquee is shown separately below */}
        <div
          className="relative w-full max-w-65 sm:max-w-75"
          style={{ aspectRatio: "3 / 4" }}
        >
          {/* Cards */}
          <div className="relative z-10 h-full w-full">
            <StackedCards cards={editorialCards} />
          </div>
        </div>

        {/* Caption */}
        <p className="mt-14 max-w-xs text-center text-xs leading-relaxed text-zinc-400 sm:text-sm dark:text-zinc-500">
          Born from a passion for creativity and quality, Monde is here to
          make fashion effortless and inspiring.
        </p>
      </div>

      {/* ── MOBILE-ONLY marquee strip — shown below caption, above section 3 ── */}
      <div className="mt-16 w-full overflow-hidden md:hidden">
        <Marquee />
      </div>

      {/* ── DESKTOP (md+) ────────────────────────────────────────────────── */}
      <div className="relative hidden md:block">

        {/* Full-width marquee layer — stretches across the whole section */}
        {/* Its height is held open by the invisible card-sizer below */}
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden"
        >
          <Marquee />
        </div>

        {/* 3-col layout on top of marquee */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-end gap-10 px-6 sm:px-10 lg:px-14">

          {/* Left: caption aligned to card bottom */}
          <div className="pb-2">
            <p className="max-w-55 text-left text-sm leading-relaxed text-zinc-400 dark:text-zinc-500">
              Born from a passion for creativity and quality, Monde is here to
              make fashion effortless and inspiring.
            </p>
          </div>

          {/* Center: stacked cards — this div drives the row height */}
          <div
            className="relative shrink-0"
            style={{ width: "clamp(220px, 24vw, 340px)", aspectRatio: "3 / 4" }}
          >
            <StackedCards cards={editorialCards} />
          </div>

          {/* Right: balance spacer */}
          <div />
        </div>
      </div>

      {/* Bottom breathing room */}
      <div className="pb-6 md:pb-36" />

      <style>{`
        @keyframes brandMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
