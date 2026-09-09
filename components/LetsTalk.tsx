import Link from "next/link";
import { siteConfig } from "@/constants/site";

const row1 = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Dribbble",  href: "#" },
  { label: "Behance",   href: "#" },
  { label: "Twitter",   href: siteConfig.social.twitter },
  { label: "Facebook",  href: siteConfig.social.facebook },
  { label: "Pinterest", href: siteConfig.social.pinterest },
];

const row2 = [
  { label: "Figma",     href: "#" },
  { label: "LinkedIn",  href: siteConfig.social.linkedin },
  { label: "TikTok",    href: "#" },
  { label: "Community", href: "#" },
];

const bottomActions = [
  { label: "#Instagram", href: siteConfig.social.instagram },
  { label: "Dribbble",   href: "#" },
  { label: "LinkedIn",   href: siteConfig.social.linkedin },
  { label: "Contact Me", href: "/contact", solid: true },
];

const fadeMask = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
};

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-200 sm:text-sm"
    >
      {label}
    </Link>
  );
}

export default function LetsTalk() {
  return (
    <section className="w-full overflow-hidden bg-zinc-950 text-white">

      {/* ── Staggered social links — desktop checker, mobile wrap ──────── */}
      <div className="pt-14 pb-2 overflow-hidden" style={fadeMask}>

        {/* MOBILE (< sm): horizontal scroll, no wrap, fades at edges */}
        <div className="flex flex-col gap-y-5 sm:hidden">
          {/* Row 1 — scrolls horizontally */}
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-x-7 px-8" style={{ width: "max-content" }}>
              {row1.map((link) => (
                <SocialLink key={link.label + "m1"} label={link.label} href={link.href} />
              ))}
            </div>
          </div>
          {/* Row 2 — same, offset slightly */}
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-x-7 px-14" style={{ width: "max-content" }}>
              {row2.map((link) => (
                <SocialLink key={link.label + "m2"} label={link.label} href={link.href} />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP (sm+): two-row checker layout */}
        <div className="hidden sm:block">
          <div className="mx-auto max-w-5xl px-10 lg:px-16">

            {/* Row 1 — 6 items */}
            <div
              className="flex items-center justify-center"
              style={{ gap: "clamp(1.5rem, 3vw, 4rem)" }}
            >
              {row1.map((link) => (
                <SocialLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>

            {/* Row 2 — 4 items, offset by half a gap unit to slot into row 1 gaps */}
            <div
              className="flex items-center justify-center"
              style={{
                gap: "clamp(1.5rem, 3vw, 4rem)",
                marginTop: "clamp(0.75rem, 1.5vw, 2rem)",
                paddingLeft: "clamp(0.75rem, 1.5vw, 2rem)",
              }}
            >
              {row2.map((link) => (
                <SocialLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Marquee heading ────────────────────────────────────────────── */}
      <div
        className="mt-10 mb-10 overflow-hidden sm:mt-14 sm:mb-14"
        style={fadeMask}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "letsTalkMarquee 12s linear infinite" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-block pr-10 font-black uppercase leading-none tracking-tighter text-white sm:pr-16"
              style={{ fontSize: "clamp(2.8rem, 12vw, 11rem)" }}
            >
              LET&apos;S TALK
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom action row ──────────────────────────────────────────── */}
      <div className="pb-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">

          {/* MOBILE: horizontal scroll row of pills, fade at edges */}
          <div
            className="overflow-x-auto scrollbar-none sm:hidden px-3"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex items-center gap-2" style={{ width: "max-content" }}>
              {bottomActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  target={!action.href.startsWith("/") && action.href !== "#" ? "_blank" : undefined}
                  rel={!action.href.startsWith("/") && action.href !== "#" ? "noopener noreferrer" : undefined}
                  className={
                    action.solid
                      ? "whitespace-nowrap rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95"
                      : "whitespace-nowrap rounded-full bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-zinc-700 transition-all hover:bg-zinc-200 active:scale-95"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          {/* DESKTOP: pills centred with side labels */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <p className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              Available for work
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {bottomActions.map((action) =>
                action.solid ? (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-200 hover:bg-zinc-200 hover:scale-105 active:scale-95"
                  >
                    {action.label}
                  </Link>
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium uppercase tracking-wider text-zinc-800 transition-all duration-200 hover:bg-zinc-200 hover:scale-105 active:scale-95"
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>
            <p className="shrink-0 text-right text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              Est. 2025
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes letsTalkMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
