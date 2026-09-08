import Link from "next/link";
import GalleryCard from "@/components/GalleryCard";
import GalleryMobileCarousel from "@/components/GalleryMobileCarousel";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/data/gallery";

// Fan positions — maps index → visual position for up to 5 cards
type FanPosition = "far-left" | "left" | "center" | "right" | "far-right";

const FAN_POSITIONS: FanPosition[] = [
  "far-left",
  "left",
  "center",
  "right",
  "far-right",
];

/**
 * Assigns fan positions when there are fewer than 5 cards.
 * Always keeps the middle item as "center".
 */
function assignPositions(items: GalleryItem[]): { item: GalleryItem; position: FanPosition }[] {
  const count = Math.min(items.length, 5);
  const sliced = items.slice(0, count);

  if (count === 5) {
    return sliced.map((item, i) => ({ item, position: FAN_POSITIONS[i] }));
  }
  if (count === 4) {
    const positions: FanPosition[] = ["left", "center", "right", "far-right"];
    return sliced.map((item, i) => ({ item, position: positions[i] }));
  }
  if (count === 3) {
    const positions: FanPosition[] = ["left", "center", "right"];
    return sliced.map((item, i) => ({ item, position: positions[i] }));
  }
  if (count === 2) {
    const positions: FanPosition[] = ["center", "right"];
    return sliced.map((item, i) => ({ item, position: positions[i] }));
  }
  // 1 card
  return [{ item: sliced[0], position: "center" }];
}

export default function GallerySection() {
  const positioned = assignPositions(galleryItems);

  return (
    <section
      className="w-full overflow-hidden bg-zinc-950 text-white"
      style={{
        /* Slanted top edge: flat on the left, angled down ~80px on the right */
        clipPath: "polygon(0 80px, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      {/* ── Top text block ─────────────────────────────────────────────── */}
      {/* pt is increased to compensate for the clip eating into the top */}
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-36 pb-14 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          {/* Left: small label */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 max-md:pt-8">
            Curated Collections 2025
          </p>

          {/* Right: big headline */}
          <div className="sm:text-right">
            <h2 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              EXPLORE CURATED COLLECTIONS
              <br />
              <span className="text-zinc-400">
                CRAFTED TO ELEVATE YOUR
              </span>
              <br />
              EVERYDAY STYLE.
            </h2>
          </div>
        </div>
      </div>

      {/* ── Background "GALLERY" watermark text ───────────────────────── */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center overflow-hidden"
          aria-hidden
        >
          <span className="select-none text-[22vw] font-black uppercase leading-none tracking-tighter text-white/5">
            GALLERY
          </span>
        </div>

        {/* ── Mobile: auto-cycling carousel (< sm) ─────────────────────── */}
        <div className="relative z-10 px-6 pb-4 sm:hidden">
          <GalleryMobileCarousel items={galleryItems} />
        </div>

        {/* ── Desktop: fan card row (sm+) ───────────────────────────────── */}
        <div className="relative z-10 hidden sm:flex items-end justify-center gap-0 px-4 pb-0 sm:px-6 lg:px-8">
          {positioned.map(({ item, position }) => (
            <GalleryCard key={item.id} item={item} position={position} />
          ))}
        </div>
      </div>

      {/* ── View all link ─────────────────────────────────────────────── */}
      <div className="flex justify-center py-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
        >
          View all collections
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
