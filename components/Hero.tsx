import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-zinc-100">
      <div className="relative mx-auto max-w-7xl px-6 pt-3 pb-8 sm:px-10 sm:pt-5 sm:pb-12 lg:px-14 lg:pb-14">
        {/* Top Editorial Row */}
        <div className="relative z-20 flex items-start justify-between gap-4">
          {/* Top Left: Category Badge & Caption */}
          <div className="flex flex-col items-start text-left">
            <div className="group relative inline-block overflow-hidden rounded-2xl border border-zinc-100 bg-linear-to-tr from-rose-500 via-amber-500 to-yellow-400 p-0.5 shadow-sm dark:border-zinc-800">
              <div className="relative h-13 w-13 sm:h-15 sm:w-15 overflow-hidden rounded-[14px] bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/images/hero-badge.jpg"
                  alt="Fashion Beyond Limits"
                  fill
                  sizes="60px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <p className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 leading-tight">
              Fashion Beyond
              <br />
              Ordinary Limits
            </p>
          </div>

          {/* Top Right: Editorial Statement & CTA Button */}
          <div className="flex flex-col items-end text-right">
            <p className="max-w-32 sm:max-w-60 text-[10px] sm:text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              From everyday essentials to statement pieces, our fashion is crafted to inspire confidence and individuality.
            </p>
            <Link
              href="/portfolio"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-1.5 sm:px-5 sm:py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <span>Explore Now</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white dark:bg-zinc-950" />
            </Link>
          </div>
        </div>

        {/* Main Stage: Massive Typography & Center Cutout Image (Dragged up into top row space) */}
        <div className="relative -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-36 flex flex-col items-center justify-center w-full min-h-104 sm:min-h-115 md:min-h-135 lg:min-h-155">
          {/* Subtitle above typography */}
          <div className="relative z-0 mb-1 text-center">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase dark:text-zinc-500">
              Fashion Trend 2025
            </span>
          </div>

          {/* Layer 1: Solid Base Text (Behind Model) */}
          <div className="relative z-0 select-none w-full text-center">
            <h1 className="font-black uppercase tracking-tighter text-zinc-950 dark:text-zinc-50 text-[14.5vw] lg:text-[11.2rem] leading-[0.83] text-center">
              <span className="block">TIMELESS</span>
              <span className="block">TRENDS</span>
            </h1>
          </div>

          {/* Layer 2: Center Model Image Cutout */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-[95vw] max-w-96 sm:max-w-lg md:max-w-152 lg:max-w-176 h-[96%] sm:h-[98%]">
              <Image
                src="/images/user2.png"
                alt="MONDE Fashion Trend"
                fill
                priority
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 600px, 700px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Layer 3: White Stroke Overlay Text (In Front of Model) */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none w-full text-center">
            <div className="mb-1 opacity-0">
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase">
                Fashion Trend 2025
              </span>
            </div>
            <h1
              className="font-black uppercase tracking-tighter text-transparent text-[14.5vw] lg:text-[11.2rem] leading-[0.83] text-center"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.95)",
                paintOrder: "stroke fill",
              }}
            >
              <span className="block">TIMELESS</span>
              <span className="block">TRENDS</span>
            </h1>
          </div>

          {/* Bottom Meta — removed from absolute, lives in normal flow below the stage */}
        </div>

        {/* Bottom Meta Tags — normal flow, responsive spacing */}
        <div className="mt-8 sm:mt-6 flex items-start justify-between px-0">
          {/* Left Tag */}
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 leading-snug">
            Discover trends,
            <br />
            Define your own
            <br />
            style.
          </p>

          {/* Right Tag */}
          <p className="text-right text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase leading-snug">
            {"// FASHION"}
            <br />
            {"(2025)"}
          </p>
        </div>
      </div>
    </section>
  );
}
